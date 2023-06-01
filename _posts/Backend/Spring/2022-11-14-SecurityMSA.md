---
permalink: /Backend/Spring/SecurityMSA/
title: "JWT + Spring Security + Spring Cloud = MSA 1. 환경세팅"
toc: true
categories:
  - Java🐛Spring
comments: true
sidebar:
  - title: "Java🐛"
  - nav: "Backend-menu"
tags:
  - Spring
  - Java
  - Spring Security
  - jwt
  - Eureka
sexy: 1
main: "Spring"
header:
  teaser: https://images.velog.io/images/park9910/post/dc139b53-7a2c-4973-ba88-23fb96b06b2e/image.png
  overlay_image: https://images.velog.io/images/park9910/post/dc139b53-7a2c-4973-ba88-23fb96b06b2e/image.png
  overlay_filter: 0.5
excerpt: \#Spring Security \#SpringSecurity \#Login
---

<span style = "font-size:1.5em;  font-weight: 700;">Spring Security, Spring Cloud, JWT, MSA</span><br>
**Spring Security**, **Spring Cloud**, **JWT**를 사용하여 MSA환경에서의 서비스를 구축하였다. 게시판 서비스를 구축하였는데 이번 포스팅에서는 로그인 시스템만 포커스를 두어서 포스팅하려한다<br>
{: .notice--info}

# MSA에서는 세션보단 JWT
MSA에서 세션을 사용하기 위해서는 Spring Session을 사용해야한다. 왜냐하면 실제 프로덕트 환경에서는 여러대의 서버 인스턴스를 운용하는데 서버의 메모리에 저장되는 Session데이터를 분산하여 공유시켜야하기때문에 **Session Clustering**방식을 사용해야한다. 또한 세션방식은 서버자원을 많이 소모하고 수십대의 서버끼리 통신할 때의 관리는 너무 까다롭다. 여러 인스턴스 서버를 위해서는 **토큰 방식**인 `JWT`를 사용하기로 했다.


# 아키텍쳐
- 1.**[Discovery](/Backend/Spring/SecurityMSA/#1-discovery)** - 서비스들의 정보를 관리하는 `Eureka Server`
- 2.**[ApiGateWay](https://chanyoung-dev.github.io/Backend/Spring/SecurityMSA/#2-apigateway)** - 서비스들을 Routing하는 `Eureka Client`
- 3.**[userService](https://chanyoung-dev.github.io/Backend/Spring/SecurityMSA/#3-userservice)**(로그인,회원가입관련 서비스) - `Eureka Client`
- 4.**mainService**(실제서비스) - `Eureka Client`

여기서 discovery, ApiGateway는 Spring Cloud의 `Eureka`를 사용한다

# 1. Discovery
Discovery는 Cloud에서 메인 서버를 역할한다

## 1.1 pom.xml
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

## 1.2 DiscoveryApplication
```java
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiscoveryApplication.class, args);
	}

}
```

## 1.3 application.yml
```yml
server:
  port: 8761
  
  
spring:
  application:
    name: discoveryservice
    
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false 
```

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/201681072-5f429256-b8be-48ba-9077-69159a7a1e43.png'>
<figcaption align="center">서버 실행 후</figcaption>
</figure>
<br>
<br>
자 이제 이 서버에 apigateway와 실제 서비스를 진행시킬 어플리케이션을 등록한다

# 2. ApiGateway

## 2.1 pom.xml
```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>

<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
<dependency>
    <groupId>org.glassfish.jaxb</groupId>
    <artifactId>jaxb-runtime</artifactId>
    <version>4.0.0</version>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
</dependencies>
<dependencyManagement>
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-dependencies</artifactId>
        <version>${spring-cloud.version}</version>
        <type>pom</type>
        <scope>import</scope>
    </dependency>
</dependencies>
</dependencyManagement>
```
- dependency를 통해 jwt, cloud, lombok 설정을 해준다.
- redis를 통해 jwt토큰을 관리한다

## 2.2 application.yml
```yml
server:
  port: 8090
  
eureka:
  client:
    fetch-registry: true
    register-with-eureka: true
    service-url:
      defaultZone: http://localhost:8761/eureka
      
      
spring:
  application:
    name: apigateway-service
  redis:
    host: localhost
    port: 6379
  cloud:
    gateway:
      default-filters:
        
      routes:
        

token:
  expiration_time: 86400000
  secret: user_token
```
- defaultZone을 설정하여 eureka서버와 연결해준다
- spring.cloud.gateway
  - default-filters: 모든 서비스는 이 필터를 전부 거친다
  - routes: 특정 uri를 필터링시키거나 Routing시켜준다. 추후에 설정할 예정이다
- token: jwt를 위한 토큰 설정


## 2.3 ApigatewayApplication
```java
@SpringBootApplication
public class ApigatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApigatewayApplication.class, args);
	}

}
```
따로 설정은 하지않았다.

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/201684882-94ea11a4-e5ca-4596-ad96-d7ea54ad7602.png'>
<figcaption align="center">eurka-server에서 보면 정상적으로 등록되어있다.</figcaption>
</figure>
<br>
<br>

# 3. Userservice

로그인이나 회원가입과 같은 유저와 관련된 서비스를 담당하는 애플리케이션이다

## 3.1 pom.xml
```xml
<dependencies>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-webflux</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>


    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>io.projectreactor</groupId>
        <artifactId>reactor-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.security</groupId>
        <artifactId>spring-security-test</artifactId>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
        <version>0.9.1</version>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-redis</artifactId>
    </dependency>


</dependencies>
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-dependencies</artifactId>
            <version>${spring-cloud.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```
- 필수인 것만 넣어놨다. `webflux`는 `webclient`를 사용하기 위해서인데 `webclient`는 api연동을 위해 사용한다
- 즉, 타 서버와 통신하기위해 `webclient`를 사용했다. `feign`을 사용하여도 무방하다

## 3.2 application.yml
```yml
eureka:
  instance:
    hostname: localhost
  client:
    register-with-eureka: true
    fetch-registry: true
    service-url:
      defaultZone: http://127.0.0.1:8761/eureka


token:
  access-expired-time: 86400000
  refresh-expired-time: 86400000
  secret: user_token


spring:
  application:
    name: user-service
  redis:
    host: localhost
    port: 6379

```
이외에도 db설정이나 aws, logger설정 등이 있는데 로그인 관련된 것만 포스팅할 생각이므로 *Pass~*

## 3.3 UserServiceApplication
```java
@SpringBootApplication
@EnableDiscoveryClient
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}


}
```
Eureka Client로 사용되어야하므로 `@EnableDiscoveryClient`를 사용하자

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/201693207-ecd9d7f2-4551-44eb-a620-5a113de2f993.png'>
<figcaption align="center">정상적으로 eureka-server(discovery)에 등록되었다</figcaption>
</figure>
<br>
<br>

이 다음에는 본격적으로 Spring Security과 jwt를 사용해보자