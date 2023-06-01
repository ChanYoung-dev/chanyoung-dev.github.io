---
permalink: /Infra/AWS/webserverinEC2
title: "EC2에 간단한 웹서버 설치"
toc: true
categories:
  - Infra🐦AWS
comments: true
sidebar:
  - title: "Infra🐦"
  - nav: "Infra-menu"
tags:
  - AWS
sexy: 1
main: "AWS"
header:
  teaser: https://user-images.githubusercontent.com/46098949/174278327-9700769b-de3a-41ab-9a63-3faf41908951.png
  overlay_image: https://user-images.githubusercontent.com/46098949/174278327-9700769b-de3a-41ab-9a63-3faf41908951.png
  overlay_filter: 0.5
excerpt: EC2에 간단한 웹서버(apache)를 설치한다
---

# 외부에서 EC2 인터넷 접속

**패키지 업데이트**  
`sudo yum update`

---

**웹서버 설치 및 실행**  
```sh
sudo yum install httpd`
systemctl status httpd`
systemctl start httpd`
systemctl status httpd`
```

---

**웹서버 테스트**  
보여지는 웹페이지 내용이다  
`curl localhost`  

---

**보여질 페이지 작성**  
`cd /var/www/html/`  
`echo “hello world” > index.html`  

위와 같이 설정 후 `curl [localhost](http://localhost)` 를 하면 웹페이지에서 보여질 화면 `hello world` 가 출력된다

하지만 이는 내부 인터넷망에서만 HTTP통신이되므로 외부에선 접속이 불가능하다

---

**보안 그룹 설정**

웹은 HTTP로 통신하므로 보안 설정으로 HTTP 보안(방화벽)을 풀어준다

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/175259084-133ba3cc-71cb-43f8-a2fd-0b54b2ddfdb2.png'>
<figcaption align="center"></figcaption>
</figure>


이제 외부에서 접속이 잘된다

---

## 인스턴스 설치시 자동으로 웹서버 설치 자동화 하는 것

인스턴스 생성시 다음과 같이 해준다

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/175258749-94f51e24-7437-4f2f-83aa-dbc13cec1efb.png'>
<figcaption align="center">사용자 데이터에 넣는다</figcaption>
</figure>

**사용자 데이터**
```sh
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "chan" > /var/www/html/index.html
```