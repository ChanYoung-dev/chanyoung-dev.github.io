---
permalink: /Cloud/CICD/parameterStore
title: "docker, jenkins를 이용하여 CI CD 구축2 - aws를 이용하여 application.yml 암호화"
toc: true
categories:
  - Cloud🐦CI&CD
comments: true
sidebar:
  - title: "Cloud🐦"
  - nav: "Cloud-menu"
tags:
  - CI&CD
sexy: 1
main: "CI&CD"
---

<span style = "font-size:1.5em;  font-weight: 700;">application.yml을 암호화해서 jenkins에 올리자</span><br>
Spring gradle project에는 `application.yml`이라는 설정파일이 있는데 이 설정 파일에 DB에 대한 아이디와 비밀번호가 있다  
아이디와 비밀번호를 AWS의 Parameter store를 이용하여 평문을 암호화해보자 
{: .notice--primary}

# 배경: 기존 CICD 프로세스

1. git에서 변경이력을 push
2. jenkins에서 git 소스 코드를 변경감지 이후 `gradlew build`하여 `jar`파일로 만든다
  - 이 때, `application.yml`은 gitignore에 등록하였기때문에 untracked파일이다
  - untracked이기때문에 jenkins에선 이전에 빌드에 사용했던 application.yml을 이용하여 빌드한다
3. jenkins에서 `jar`파일을 ec2에게 전달한다
4. ec2는 `java -jar`를 통해 실행한다
   - 저는 `java -jar`을 직접 실행하지않고 **Docker를 통하여 스프링프로젝트를 이미지화하여 실행**하였습니다

즉, git에서 변경 -> jekins에서 jar 빌드 -> jar를 외부(ec2)로 전달 -> EC2에서 jar를 Docker를 이용하여 실행
{: .notice}

# 단순하게 application.yml 업데이트(<abbr title="" id="untracked application.yml">git application.yml 포함X</abbr>)
EC2에서 jar실행을 Docker를 이용하여 실행하기때문에 `application.yml`을 업데이트하고 싶으면 단순히 Docker를 실행하는 호스트(ec2)에서 `application.yml`을 지정하여 DockerFile로 구성하면 되긴하지만 정상적인 프로세스가 아니다


*ec2에서 실행*
{% highlight dockerfile linenos %}
FROM openjdk:11-jre-slim
ARG JAR_FILE=build/libs/*-SNAPSHOT.jar // jenkins에서 통해 전달받은 jar 경로
ARG ENV_FILE=build/libs/*.yml // 업데이트할 application.yml을 미리 ec2로 옮겨놓는다
COPY ${JAR_FILE} app.jar
COPY ${ENV_FILE} application.yml
ENTRYPOINT ["nohup","java","-jar","/app.jar","--spring.config.name=application”,”&”]
{% endhighlight %}

# application.yml 암호화(<abbr title="" id="tracked application.yml">git application.yml 포함</abbr>)
## 1. [AWS parameterStore](https://ap-northeast-2.console.aws.amazon.com/systems-manager/parameters/?region=ap-northeast-2&tab=Table)설정

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/174308336-4b2a444e-a592-4482-816a-cb5013015ba5.png'>
<figcaption align="center">parameter 생성</figcaption>
</figure>

## 2. application.yml에 적용
**application.yml**
{% highlight yml linenos %}
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://********.ap-northeast-2.rds.amazonaws.com:3306/review_db
    username: ${/k5s/db/id}
    password: ${/k5s/db/passwd}
  application:
    name: webclient

cloud:
  aws:
    credentials:
      instance-profile: false
      access-key: [access key]
      secret-key: [secret key]
    region:
      auto: false
      static: ap-northeast-2
    stack:
      auto: false
{% endhighlight %}

하지만 <abbr title="" id="access key, secret-key">aws의 key</abbr>를 외부에 공개하면 보안상 좋지않다  
터미널에 [aws credentials](https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/cli-configure-files.html)을 등록하면 된다
{: .notice--warning}

## 3. jenkins에서 <abbr title="" id="awscredentialsawscredentialsaws credentialsaws credentialsaws credentialsaws credentialsaws credentialsaws credentialsaws credentialsaws credentialsaws credentials">AWS 자격증명</abbr>
jenkins에서도 jar를 build할 경우 `aws credentials`이 필요하다
- a. Jenkins 관리 -> 플러그인 관리 -> AWS Parameter Store Build Wrapper -> Jenkins 재부팅
- b. Jenkins 관리 -> Manage Credentials
  <figure align="center" class="half">
  <img src='https://user-images.githubusercontent.com/46098949/174312122-5b12c061-1332-4104-8158-fd194a9261de.png'>
  <img src='https://user-images.githubusercontent.com/46098949/174312437-d538935f-2451-489f-9592-6287aa70c42d.png'>
  <figcaption align="center">Add credentials</figcaption>
  </figure>

여기까지하면 정상적으로 jenkins에서 빌드 성공할 것이다  
### 만약 freestyle이 아니라 pipeline을 사용할 경우  
{% highlight zsh linenos %}
stage('test aws parameter store') {
           steps {
               withAWSParameterStore(credentialsId: 'jenkins에서 설정한 credetianls ID', 
               path: "/all-knu/firebase_${env.PROFILE}",
               naming: 'basename',
               regionName: 'ap-northeast-2') { 
                            echo "${env.ADMINSDK}"
                            writeFile file: 'test.json', text: "${env.ADMINSDK}"
                   }
           }
       }
{% endhighlight %}

EC2에서 전달받은 jar을 그대로 실행시킬거면 jenkins에서 빌드 후 조치에 `java -jar ~/ec2/전달받은 경로` 로 하면 되지만,  EC2에서 Docker를 이용하여 jar 실행할 경우 따로 환경변수 명령어를 적어줘야한다

## 4. Docker에 <abbr title="" id="aws credentials">AWS 자격증명</abbr>

### Docker Image 만들기
{% highlight zsh linenos %}
ARG JAR_FILE=build/libs/*-SNAPSHOT.jar
ARG ENV_FILE=build/libs/*.yml
COPY ${JAR_FILE} app.jar
COPY ${ENV_FILE} application.yml
ENTRYPOINT ["nohup","java","-jar","/app.jar","&"]
{% endhighlight %}


### Docker Container 실행
```sh
docker run -e AWS_ACCESS_KEY_ID=*** -e AWS_SECRET_ACCESS_KEY=**** ImageName

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v2.6.5)

```

### <abbr title="" id="여러개의 Docker를 묶어서 실행">Docker Compose</abbr>를 사용하는 경우
{% highlight zsh linenos %}
version: "3"
services:
  review-server:         # Spring Boot 컨테이너 이름 (원하는 이름)
    image: emrhssla/k5s-review
    environment:
      - AWS_ACCESS_KEY_ID=****
      - AWS_SECRET_ACCESS_KEY=****
    ports:
      - 8080:8080
{% endhighlight %}

이제 git에 application.yml와 같은 민감한 정보가 포함되어있는 파일을 tracked해도 된다!
{: .notice--success}