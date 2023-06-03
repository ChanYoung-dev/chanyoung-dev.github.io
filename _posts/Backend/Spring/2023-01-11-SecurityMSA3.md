---
permalink: /Backend/Spring/SecurityMSA3/
title: "JWT + Spring Security + Spring Cloud = MSA 3. ApiGateway"
toc: true
categories:
  - Backend🐛Spring
comments: true
sidebar:
  - title: "Backend🐛"
  - nav: "Backend-menu"
tags:
  - Spring
  - Java
  - Spring Security
  - msa
sexy: 1
main: "Spring"
header:
  teaser: https://images.velog.io/images/park9910/post/dc139b53-7a2c-4973-ba88-23fb96b06b2e/image.png
  overlay_image: https://images.velog.io/images/park9910/post/dc139b53-7a2c-4973-ba88-23fb96b06b2e/image.png
  overlay_filter: 0.5
excerpt: \#Spring Security \#SpringSecurity \#Login \#jwt \#Eureka \#msa \#Api Gateway
---

<span style = "font-size:1.5em;  font-weight: 700;">Spring Security, Spring Cloud, JWT, MSA</span><br>
[JWT + Spring Security + Spring Cloud = MSA 2. Spring Security](https://chanyoung-dev.github.io/Backend/Spring/SecurityMSA2)에 이어서 <strong>ApiGateway</strong>를 사용해보자<br>
{: .notice--intro}

ApiGateway는 Load Balancer라고도 하며 클라이언트의 request가 들어오면 설정해 놓은 라우팅 설정에 따라서 각각의 endpoint로 클라이언트 대신에 요청을 보내고 응답을 받아 클라이언트에게 전달하는 Proxy역할을 한다
{: .notice--success}


# 1. application.yml
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
        - name: GlobalFilter
          args:
            baseMessage: Spring Cloud Gateway Global Filter
            preLogger: true
            postLogger: true
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/
          filters:
            - AuthorizationHeaderFilter
        ...
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/user-service/tested  #request한 controller
            - Method=GET
          filters:
            - AuthorizationAdminFilter # 관리자만 접근가능하다
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/user-service/jwt_check
            - Method=GET
          filters:
            - AuthorizationFilter #회원만 접속 가능하다
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/user-service/membertest
            - Method=GET
          filters:
            - AuthorizationHeaderFilter #회원 비회원 둘다 접속할수있지만 사용할수 있는 기능범위가 다름
        
        ...

        # 필터를 통해 각 서비스 서버는 비지니스 로직에만 신경쓰면 됨

token:
  expiration_time: 86400000
  secret: user_token
```
- routes에서 id, uri는 [Service Discovery](https://chanyoung-dev.github.io/Backend/Spring/SecurityMSA2/#1-discovery)에 등록해놓은 값을 통해 클라이언트의 request가 어느 endpoint로 갈지 정해준다
- endpoint에 모든 request가 전송되는 것이 아니라 **filter**를 통해 request의 값을 rewrite해준다

<span style = "font-size:1.5em;  font-weight: 700;">여기서는 총3가지의 필터를 개발했다</span><br>
AuthorizationHeaderFilter: 회원 비회원 둘다 접속할수있지만 사용할수 있는 기능범위가 다름<br>
AuthorizationFilter: 회원만 접속 가능하다<br>
AuthorizationAdminFilter: 관리자만 접근가능하다<br>
{: .notice--info}


# 2. Filter
- 모든 필터는 `AbstractGatewayFilterFactory`를 상속받아 `apply()`를 구현하여 필터링 서비스를 개발한다
- `isJwtValid()`를 통해 토큰을 검증한다
## 2.1 AuthorizationHeaderFilter
- 회원과 비회원 필터
- 회원과 비회원 모두가 사용할 수 있는 서비스일 경우 이 필터를 타게 된다
- 비회원은 서비스 이용이 가능하지만 **request header**에 **userId**값을 넣어주지않는다
- 회원일 경우 **header**에 **userId**를 넣어준다. 이를 통해 **Controller**는 userId를 손쉽게 확인할수 있다


```java
@Component
@Slf4j
public class AuthorizationHeaderFilter extends AbstractGatewayFilterFactory<AuthorizationHeaderFilter.Config> {
    Environment env;
    private final RedisService redisService;

    @Autowired
    public AuthorizationHeaderFilter(Environment env, RedisService redisService) {
        super(Config.class);
        this.env = env;
        this.redisService = redisService;
    }

    public static class Config {
        // Put configuration properties here
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();


            MultiValueMap<String, HttpCookie> cookies = request.getCookies();
            String jwt = "";
            try {
                jwt = cookies.get("token").get(0).getValue();
            }
            catch (NullPointerException e) {
                return chain.filter(exchange);
            }

            if (redisService.isAccessTokenStored(jwt) || !isJwtValid(jwt)) {
                log.info("토큰({})은 사용불가 토큰입니다.", jwt);
                return chain.filter(exchange);
            }


            //사용자 아이디(pk)값 가져오기
            String id = Jwts.parser().setSigningKey(env.getProperty("token.secret"))
                    .parseClaimsJws(jwt).getBody()
                    .getSubject();

            request.mutate()
                    .header("userId", id)
                    .header("token", jwt)
                    .build();
            ServerWebExchange exchange1 = exchange.mutate().request(request).build();

            log.info("exchange1 {}", id);

            log.info("토큰정보 : {}", jwt);
            return chain.filter(exchange1);
        };
    }

    private Mono<Void> onError(ServerWebExchange exchange, String err, HttpStatus httpStatus) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(httpStatus);

        log.error(err);
        return response.setComplete();
    }

    private boolean isJwtValid(String jwt) {
        boolean returnValue = true;

        String subject = null;

        try {
            subject = Jwts.parser().setSigningKey(env.getProperty("token.secret"))
                    .parseClaimsJws(jwt).getBody()
                    .getSubject();

        } catch (Exception ex) {
            returnValue = false;
        }

        if (subject == null || subject.isEmpty()) {
            returnValue = false;
        }

        log.info("subject {}", subject);

        return returnValue;
    }

}
```
redis는 jwt토큰이 만료되어있는지 확인을 위하여 사용한다. 로그아웃을 할시 토큰이 redis에 저장되는데 필터에서 해당 토큰이 redis에 있는지 없는지 검사하고 있다면 만료토큰이기때문에 접속하지못한다.

### redis
- 로그아웃을 한 경우 <abbr title="" id="Service Discovery에 등록된 endpoint">user-service</abbr> 에서 `logout()`로직을 태운다. user-service에 대하여는 [JWT + Spring Security + Spring Cloud = MSA 2. Spring Security](https://chanyoung-dev.github.io/Backend/Spring/SecurityMSA2)에서 설명하였다.
```java
@Transactional
    public void logout(String token) {
        Date expiration = jwtTokenProvider.getExpiredTime(token);
        redisService.setAccessToken(token, expiration); // 토큰을 저장
    }
```
아참, **RedisService.class**는 아래코드


```java
@Slf4j
@Component
@RequiredArgsConstructor
public class RedisService {

    private final RedisTemplate<String, String> redisTemplate;

    public void setAccessToken(String accessToken, Date expiration) {
        redisTemplate.opsForValue()
                .set(accessToken, "logout", expiration.getTime() - new Date().getTime(), TimeUnit.MILLISECONDS);
    }

    public boolean isAccessTokenStored(String accessToken) {
        return redisTemplate.opsForValue()
                .get(accessToken) != null;
    }
}
```


## 2.2 AuthorizationFilter
- 회원과 비회원 필터
- 비회원은 401화면을 보여준다 -> 이 때 `onError()`를 통해 HTTP 상태코드를 출력

```java
@Component
@Slf4j
public class AuthorizationFilter extends AbstractGatewayFilterFactory<AuthorizationFilter.Config> {
    Environment env;
    private final RedisService redisService;

    @Autowired
    public AuthorizationFilter(Environment env, RedisService redisService) {
        super(Config.class);
        this.env = env;
        this.redisService = redisService;
    }

    public static class Config {
        // Put configuration properties here
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            MultiValueMap<String, HttpCookie> cookies = request.getCookies();
            //log.info("cookie {}({})", cookies, cookies.get("token").get(0).getValue());

            String jwt = "";
            try {
                jwt = cookies.get("token").get(0).getValue();
            }
            catch (NullPointerException e) {
                return onError(exchange, "JWT token is not valid", HttpStatus.UNAUTHORIZED);
            }

            if (redisService.isAccessTokenStored(jwt) || !isJwtValid(jwt)) {
                log.info("토큰({})은 사용불가 토큰입니다.", jwt);
                return onError(exchange, "JWT token is not valid", HttpStatus.UNAUTHORIZED);
            }

            String id = Jwts.parser().setSigningKey(env.getProperty("token.secret"))
                    .parseClaimsJws(jwt).getBody()
                    .getSubject();

            request.mutate()
                    .header("token", jwt)
                    .header("userId", id)
                    .build();
            ServerWebExchange exchange1 = exchange.mutate().request(request).build();

            log.info("토큰정보 : {}", jwt);




            return chain.filter(exchange1);
        };
    }

    private Mono<Void> onError(ServerWebExchange exchange, String err, HttpStatus httpStatus) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(httpStatus);

        log.error(err);
        return response.setComplete();
    }

    private boolean isJwtValid(String jwt) {
        boolean returnValue = true;

        String subject = null;

        try {
            subject = Jwts.parser().setSigningKey(env.getProperty("token.secret"))
                    .parseClaimsJws(jwt).getBody()
                    .getSubject();
        } catch (Exception ex) {
            returnValue = false;
        }

        if (subject == null || subject.isEmpty()) {
            returnValue = false;
        }

        log.info("subject {}", subject);

        return returnValue;
    }

}
```

### 2.3 AuthorizationAdminFilter
관리자 필터이다  
유저 관리 페이지나 관리자 모드 페이지에 접속하려는 경우 필터링해준다  
- 관리자인지를 확인해야하기때문에 Spring Security **Role**을 사용한다

```java

@Component
@Slf4j
public class AuthorizationAdminFilter extends AbstractGatewayFilterFactory<AuthorizationAdminFilter.Config> {
    Environment env;
    private final RedisService redisService;

    @Autowired
    public AuthorizationAdminFilter(Environment env, RedisService redisService) {
        super(Config.class);
        this.env = env;
        this.redisService = redisService;
    }

    public static class Config {
        // Put configuration properties here
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            MultiValueMap<String, HttpCookie> cookies = request.getCookies();
            String jwt = "";
            try {
                jwt = cookies.get("token").get(0).getValue();
            }
            catch (NullPointerException e) {
                return onError(exchange, "JWT token is not valid", HttpStatus.UNAUTHORIZED);
            }

            if (redisService.isAccessTokenStored(jwt)) {
                log.info("토큰({})은 사용불가 토큰입니다.", jwt);
                return onError(exchange, "JWT token is not valid", HttpStatus.UNAUTHORIZED);
            }


            if (StringUtils.isEmpty(isJwtValid(jwt))) {
                System.out.println("jwt는 null = " + jwt);
                return onError(exchange, "JWT token is not valid", HttpStatus.UNAUTHORIZED);
            }

            String id = Jwts.parser().setSigningKey(env.getProperty("token.secret"))
                    .parseClaimsJws(jwt).getBody()
                    .getSubject();

            request.mutate()
                    .header("token", jwt)
                    .header("userId", id)
                    .build();
            ServerWebExchange exchange1 = exchange.mutate().request(request).build();

            log.info("토큰정보 : {}", jwt);




            return chain.filter(exchange1);
        };
    }

    private Mono<Void> onError(ServerWebExchange exchange, String err, HttpStatus httpStatus) {
        ServerHttpResponse response = exchange.getResponse();
        response.setStatusCode(httpStatus);

        log.error(err);
        return response.setComplete();
    }

    private String isJwtValid(String jwt) {

        String role = null;

        try {
            role = String.valueOf(Jwts.parser()
                    .setSigningKey(env.getProperty("token.secret"))
                    .parseClaimsJws(jwt)
                    .getBody().get("role"));
        } catch (Exception ex) {
            role = null;
        }

        if (role == null || role.isEmpty() || role.equals("null") || role.equals("ROLE_USER")) {
            role = null;
        }
        log.info("role {}", role);
        return role;
    }

}
```
- role에 대해선 [Spring Security - Role](https://chanyoung-dev.github.io/Backend/Spring/Roles/)를 확인
- [JWT + Spring Security + Spring Cloud = MSA 2. Spring Security](https://chanyoung-dev.github.io/Backend/Spring/SecurityMSA2)에서 사용하는 role이다.


위 필터를 통해 회원 header에 userId를 저장할 수 있다<br>  
예를 들어 다른 서비스 클라이언트에서 아래와 같이 사용한다<br>
{: .notice--success}
```java
@GetMapping("/board-service/test/nickname")
@ResponseBody
public String nicknameEx(HttpServletRequest req){
    String userId = req.getHeader("userId");
    String token = req.getHeader("token");
    log.info("userId {}", userId);

    String userName = api.requestName(userId, token);
    return userName;
}
```