---
permalink: /Cloud/CICD/CICDdocker
title: "docker, jenkins를 이용하여 CI CD 구축1"
toc: true
categories:
  - Cloud🐦CI&CD
comments: true
sidebar:
  - title: "Cloud🐦"
  - nav: "Cloud-menu"
tags:
  - CI&CD
list_name:
  - CI&CD
  - AWS
sexy: 1
main: "CI&CD"
---

- [0. 목표](#0-목표)
- [1. Jenkins](#1-jenkins)
  - [1.1 구성](#11-구성)
    - [1.1.1 소스 코드 관리](#111-소스-코드-관리)
    - [1.1.2 빌드 유발](#112-빌드-유발)
    - [1.1.3 Build](#113-build)
- [2. docker](#2-docker)
  - [dockerfile 빌드](#dockerfile-빌드)
  - [ec2에서 스프링 docker 컨테이너 올리기](#ec2에서-스프링-docker-컨테이너-올리기)
- [3. nginx(Spring 서버 2개이상인 경우만)](#3-nginxspring-서버-2개이상인-경우만)
  - [nginx 설정 파일 수정](#nginx-설정-파일-수정)
- [4. Docker-Compose(Spring 서버 2개이상인 경우만)](#4-docker-composespring-서버-2개이상인-경우만)
  - [docker-compose 실행](#docker-compose-실행)
- [5. jenkins SSH](#5-jenkins-ssh)
  - [5.1. 사전작업 1 - SSH](#51-사전작업-1---ssh)
  - [5.2 사전작업2 - ec2](#52-사전작업2---ec2)
  - [5.2 사전작업2 - ec2](#52-사전작업2---ec2-1)
  - [Jenkins 작업](#jenkins-작업)
    - [여러 컨테이너를 실행하는 docker-compose 사용하는 경우](#여러-컨테이너를-실행하는-docker-compose-사용하는-경우)
    - [하나의 컨테이너만 실행하는 경우](#하나의-컨테이너만-실행하는-경우)

# 0. 목표
<img width="636" alt="image" src="https://user-images.githubusercontent.com/46098949/171821626-2c67a8bb-4fe6-4952-bf19-665a50899b2f.png">

- `IntellJ`나 VS `Code` 등으로 Spring(gradle) 소스코드 작업 후 Github에 커밋하고 Push만 하여도 별다른 작업없이 배포를 가능하게 만든다 = **CI/CD**
- `Docker`와 `Nginx` `Jenkins`를 이용하여 여러개의 Spring 서버를 배포한다  
- 현재 4개의 Spring 서버가 사용되고 있지만, 그 중 하나의 서버(Review)만 지속적으로 개발할것이기 때문에 **Jenkins**를 통해 하나의 서버만 업데이트한다
- **물론 1개의 Spring 서버만 관리하고 동작하는 것(모놀리틱 아키텍쳐)도 가능하다**

# 1. Jenkins
ec2에서 Jenkins 설치
```sh
> docker pull jenkins/jenkins:lts
> docker run --name jenkins -d -p 9000:8080 jenkins/jenkins:lts
```

브라우져에서 `[ec2-ip]:9000`접속
>ec2에서 9000번 포트에 대한 인바운드 보안그룹을 설정해줘야한다

![image](https://user-images.githubusercontent.com/46098949/171823878-e81344e9-ea4a-4b08-bf92-f4d1c0d34215.png)
```sh
> docker exec -it jenkins cat /var/lib/jenkins/secrets/initalAdminPassword //복사하고 붙여넣기
```

`새로운 아이템` -> `free style`

## 1.1 구성
### 1.1.1 소스 코드 관리
![image](https://user-images.githubusercontent.com/46098949/171824967-d8936e5d-8de1-4c35-8862-08245f077563.png)

Credentials -> Add 선택
- Kind: Username with password
- Scope: Global
- Username: Git Id
- Password: Git password
- ID: Credentinals의 ID(아무거나 써도 가능)

만약 위와 같이 Add했는데도 `none`인 경우  

- `Jenkins 관리` -> `Manage Credentials` 접속

![image](https://user-images.githubusercontent.com/46098949/171826291-3b135084-8afa-41b7-9804-dac5d6086eb0.png)

- `Add domain`
- 도메인 이름은 아무렇게나 적고 생성한뒤 해당 도메인에서 `Add credentials` 클릭 후 설정

### 1.1.2 빌드 유발
`GiHub hook trigger for GITScm polling` 체크

### 1.1.3 Build
![image](https://user-images.githubusercontent.com/46098949/171828229-89066470-fb8f-4f3c-af5d-de3e99d667ac.png)

- github 소스코드에 Wrapper까지 같이 push되어있는 상태면 `Use Gradle Wrapper`를 선택한다
- 이는 스프링 프로젝트 내 파일을 이용하여 `Gradle`을 실행하는 것이다

  <img width="411" alt="image" src="https://user-images.githubusercontent.com/46098949/171827960-21dd27ac-a087-4f87-afa8-7a283e5559b2.png">
- 만약 Invoke Gradle을 사용려면, 사전 작업으로 Jenkins 관리에서 Gradle를 버전에 맞게 설치해주면 된다(버전정보: `/gradle//wrapper/gradle-wrapper.properties`)

**clean build -x test**
- `-x test`: test를 포함하지않고 빌드
- `--debug`: 만약 빌드가 안될 경우 `--debug`를 추가하여 무엇이 문제인지 확인

여기까지 진행만 해놓고 빌드가 정상적으로 되는지 확인해본다

# 2. docker 
- 스프링 서비스를 docker로 실행한다  
- 단순히 ec2에 Spring docker container가 정상적으로 동작하는지 확인하기위해 진행
- 스프링 프로젝트 최상단에 `Dockerfile`을 생성한다

**Dockerfile**
```docker
FROM openjdk:11-jre-slim
ARG JAR_FILE=build/libs/*-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["nohup","java","-jar","/app.jar","&"]
```

## dockerfile 빌드
- `Dockerfile`을 빌드하여 이미지를 만든 뒤 개인레포지토리에 올린다

```sh
> docker build --build-arg DEPENDENCY=build/dependency -t [docker-개인레포지토리/container이름] .
> docker push [docker-개인레포지토리/container이름]
```

<figure align="center">
<img width="805" alt="image" src="https://user-images.githubusercontent.com/46098949/172046531-1803689b-492c-4fde-95ce-0c57109eb113.png">
<figcaption align="center">레포지에 올라간 상태</figcaption>
</figure>

## ec2에서 스프링 docker 컨테이너 올리기
ec2에 접속하여 push한 이미지를 다운받고 실행한다
```sh
> docker pull [docker-개인레포지토리/container이름]
> docker run -dt -p 8080:8080 [docker-개인레포지토리/container이름] --name [원하는이름]
```

실행확인  
- 브라우져에서 `[ec2-ip]:8080` 접속
- 물론 ec2에서 8080번 포트가 열려있어야한다(ec2의 인바운드 보안설정그룹)  
<img width="122" alt="image" src="https://user-images.githubusercontent.com/46098949/172046686-8a730ea3-26e7-4502-9a9a-0bbf2a0b00ec.png">


# 3. nginx(Spring 서버 2개이상인 경우만)
> 만약 실행할 스프링이나 웹서비스 서버가 한개로 이루어져있다면 nginx를 굳이 적용시키지 않아도 된다  
하지만 필자는 4개의 스프링 웹서비스 서버로 이루어져있기때문에 nginx를 proxy 서버로 두어야한다  


nginx는 ec2에서 관리하기때문에 ec2에서 작업을 진행한다  

- nginx는 Reverse Proxy역할때문에 추가했다
- Reverse Proxy란 url에 따라서 실행되는 서버가 달라지게 구성하는 것이다
- 예를 들어 `home.com/review` 이면 review기능을 담당하고 있는 서버가 실행된다
- 반대로 `home.com/auth` 이면 auth(로그인관련)을 담당하고 있는 서버가 실행된다
- 또한 스프링 서버를 ec2(A)에 두고 다른 ec2(B)에 nginx를 둘 경우, 클라이언트는 nginx가 있는 ec2(B)의 ip에 접속하여 보여주기때문에 스프링서버들의 IP를 숨길 수가 있다
- cookie등도 공유하기때문에 jwt와 같은 토큰을 이용하는 login방식에도 문제가 없다

nginx를 직접 설치하여도 되고 Docker를 이용하여 설치해도 된다. 나는 Docker를 이용하여 설치할 것이다.
```sh
> docker pull nginx
> docker container run --name nginx -d -p 80:80 -v /etc/nginx/:/etc/nginx/ nginx --name
```
- `-v` 옵션은 볼륨설정이다
- ec2에서의 `/etc/nginx`와 Nginx컨테이너에서의 `/etc/nginx`가 동기화되어 연결된다
- `-p`는 포트설정이다
- `[ec2-ip]:80`에 접속하게 되면 nginx컨테이너의 80번포트가 실행된다
- nginx의 기본옵션은 80번포트이기때문에 자동으로 nginx에 접속할 수 있다

## nginx 설정 파일 수정

```sh
> vi /etc/nginx/nginx.conf 

user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
}

http {

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    '''
    upstream [연결하려는 서버의 닉네임] {
        server [서버IP]:[Port]
    }
    '''
    upstream auth {
        server [서버IP]:8083;
    }

    upstream member-convenience {
        server [서버IP]:8082;
    }

    upstream review {
        server [서버IP]:8080;
    }

    upstream movie {
        server [서버IP]:8081;
    }

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 4096;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;


    server {
        listen       80;
        listen       [::]:80;
        server_name  _;
        root         /usr/share/nginx/html;

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
            proxy_redirect off;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://movie;
        }

        location /auth {
                rewrite ^/(.*)$ /$1 break;
                proxy_pass http://auth;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Scheme $scheme;
                proxy_cookie_path /auth "/; SameSite=Strict; HttpOnly";
                }
        location /member {
                rewrite ^/(.*)$ /$1 break;
                proxy_pass http://member-convenience;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Scheme $scheme;
                proxy_cookie_path / "/; SameSite=Strict; HttpOnly";
                }

        location ~ ^/movies/[0-9]+/reviews[-/0-9a-zA-Z]*$ {
                rewrite ^/(.*)$ /$1 break;
                proxy_pass http://review;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Scheme $scheme;
                proxy_cookie_path / "/; SameSite=Strict; HttpOnly";
                }

        location ~ ^/movies(/?|\?page=[0-9]+|/[0-9]+(/chat/?)?|/request-logout)$ {
                rewrite ^/(.*)$ /$1 break;
                proxy_pass http://movie;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Scheme $scheme;
                proxy_cookie_path / "/; SameSite=Strict; HttpOnly";
                }

        location /chat {
                rewrite ^/(.*)$ /$1 break;
                proxy_pass http://movie;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Scheme $scheme;
                proxy_cookie_path / "/; SameSite=Strict; HttpOnly";
        }

        location /ws-stomp {
                rewrite ^/(.*)$ /$1 break;
                proxy_pass http://movie;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Scheme $scheme;
                proxy_cookie_path / "/; SameSite=Strict; HttpOnly";
        }

        location /reviews {
                rewrite ^/(.*)$ /$1 break;
                proxy_pass http://review;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $host;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Scheme $scheme;
                proxy_cookie_path / "/; SameSite=Strict; HttpOnly";
        }
    }
}


```

- ec2에서 `/etc/nginx/nginx.conf` 를 수정하면 자동으로 nginx컨테이너안에서의 볼륨이 수정된다
- `upstream`이란 연결하고자하는 서버 설정이다. 즉 실행되고있는 스프링 프로젝트를 의미한다. 현재 스프링 프로젝트를 실행하고 있지는 않지만 Docker를 통해서 스프링 프로젝트를 실행할 것이다. 
- 내가 만든 웹은 4개의 서버로 이루어져있기때문에 `upstream`이 총 4개로 이루어져있다

# 4. Docker-Compose(Spring 서버 2개이상인 경우만)

> 이부분도 실행시킬 웹서비스 서버가 한개라면 패스해도 된다

스프링 웹서비스 서버 4개를 각각 docker에 연동하여 관리하여도 상관없지만 `docker-compose`를 이용하면 여러개의 docker를 손쉽게 관리할 수 있다  

`docker-compose`를 통해 nginx 컨테이너도 생성 및 관리 할 것이므로 위에서 nginx 컨테이너를 수동으로 만들었다면 컨테이너를 중지 및 삭제하고 `docker-compose`를 실행하거나 `docker-compose`에서 nginx부분을 지우고 수동으로 nginx를 관리하면 된다  

**docker-compose.yml**
```yaml
version: "3"
services:
  nginx:             # nginx 컨테이너 이름 (원하는 이름)
    image: nginx
    ports:
      - 80:80
    volumes:
      - /etc/nginx/:/etc/nginx/    
  review-server:         # Spring Boot 컨테이너 1
    image: emrhssla/k5s-review
    ports:
      - 8080:8080
  auth-server:         # Spring Boot 컨테이너 2
    image: emrhssla/k5s-auth
    ports:
      - 8083:8083
  member-server:         # Spring Boot 컨테이너 3
    image: emrhssla/k5s-member
    ports:
      - 8082:8082
  movie:         # Spring Boot 컨테이너 4
    image: emrhssla/k5s-movie
    ports:
      - 8081:8081
```

## docker-compose 실행

```sh
> docker-compose start
> docker-compose ps
```


# 5. jenkins SSH 
jenkins의 빌드를 통해 만들어진 jar 파일을 ec2로 옮겨야 한다
## 5.1. 사전작업 1 - SSH
1. jenkins에서 `Publish over SSH` 플러그인 설치
2. `Jenkins 관리` -> `환경 설정` -> `Publish over SSH`
  ![image](https://user-images.githubusercontent.com/46098949/172048442-254220e3-c2ea-4f67-b4f6-6e6909429508.png)

## 5.2 사전작업2 - ec2
jar 파일을 받을 ec2 작업영역 생성
```sh
> mkdir [작업영역이름]
> cd [작업영역이름]
> mkdir build
> cd build
> mkdir libs

```

jar파일을 실행할 docker image를 업데이트해야한다
## 5.2 사전작업2 - ec2 

```sh
> cd ~/[작업영역이름]
> vi Dockerfile


FROM openjdk:11-jre-slim
ARG JAR_FILE=build/libs/*-SNAPSHOT.jar
#ARG ENV_FILE=build/libs/*.yml # COPY ${ENV_FILE} application.yml # 특정 application.yml을 적용해야 할 경우
COPY ${JAR_FILE} app.jar
# COPY ${ENV_FILE} application.yml # 특정 application.yml을 적용해야 할 경우
# ENTRYPOINT ["nohup","java","-jar","/app.jar","--spring.config.name=application","&"] # 특정 application.yml을 적용해야 할 경우
ENTRYPOINT ["nohup","java","-jar","/app.jar","&"]
```

## Jenkins 작업
### 여러 컨테이너를 실행하는 docker-compose 사용하는 경우
![image](https://user-images.githubusercontent.com/46098949/172048863-7cbdd4da-eb4b-4fb1-a65a-6f1b3b28cfbb.png)

### 하나의 컨테이너만 실행하는 경우
`Exec command`에서 다음과 같이 바꾼다
```sh
cd /home/ec2-user/jenkins-review/
docker container stop k5s-review
docker container rm k5s-review
docker image rm emrhssla/k5s-review
docker build --build-arg DEPENDENCY=build/dependency -t emrhssla/k5s-review .
docker run -dt -p 8080:8080 --name k5s-review emrhssla/k5s-review
```

- `jenkins-review`는 작업영역이름이다
- `emrhssla/k5s-review`는 레퍼지토리/이미지이름이다



```
Build step 'Invoke Gradle script' changed build result to SUCCESS
SSH: Connecting from host [1b8b3f7de4ec]
SSH: Connecting with configuration [deploy-server] ...
SSH: EXEC: completed after 18,023 ms
SSH: Disconnecting configuration [deploy-server] ...
SSH: Transferred 1 file(s)
Finished: SUCCESS
```
정상적으로 성공하면 위와 같이 뜬다