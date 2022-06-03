---
permalink: /Cooperation/Git/loginerror/
title: "Password authentication,a personal access token 로그인 문제 해결방법"
toc: true
comments: true
categories:
  - Tools🐶Git
sidebar:
  - title: "Tools🐶"
  - nav: "Tools-menu"
tags:
  - Git
sexy: 1
main: "Git"
---
터미널에서 Git을 로그인 할시 <code>Password authentication,a personal access token</code> 문제 해결방법

## 문제상황

```sh
~ % git push origin master
remote: Password authentication is temporarily disabled as part of a brownout. Please use a personal access token instead.
remote: Please see https://github.blog/2020-07-30-token-authentication-requirements-for-api-and-git-operations/ for more information.
fatal: unable to access 'https://github.com/emrhssla/WebStudy.git/': The requested URL returned error: 403
```

어느 날 작업을 한 뒤, `git commit`을 성공적으로 남기고 `git push origin master` 하니 위와 같은 오류가 생겼다. 로그인 방법을 업데이트하라는 뜻같다. 비밀번호 대신 토큰사용을 하라는 말

## 해결방법

비밀번호 대신 **토큰**을 사용하자

### 1. 이메일 인증
> github사이트에 들어가서 맨 위 오른쪽 상단위 동그라미 클릭.   
> 인증했으면 이과정은 패스

![]({{site.baseurl}}/assets/images/Cooperation/gitloginerror.png)

메뉴에서 Settings 클릭


![]({{site.baseurl}}/assets/images/Cooperation/gitloginerror2.png)

email 클릭

![]({{site.baseurl}}/assets/images/Cooperation/gitloginerror3.png)

*인증을 안하면 <span style="color:red">빨간 글씨</span>, 인증하면 <span style="color:green">초록글씨</span>가 뜬다.*

### 2. 토큰 생성

[![통신공학시스템]({{site.baseurl}}/assets/images/Cooperation/token.png)](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

위 과정을 따라하여 토큰을 생성한다.  
그 이후, 커맨드창에서 `git` 작업을 하면 아이디와 비밀번호를 입력하라는데 이 때 비밀번호를 토큰으로 입력하면 된다.

### 3. MacOs는 다음 과정을 더 추가해야한다.

  - Mac OS **키체인 접근**을 통해 기존에 있는 비밀번호 로그인 증명방법 제거

    - `command + space`로 Spotlight를 실행하고 키체인 접근 실행
      ![]({{site.baseurl}}/assets/images/Cooperation/gitloginerror4.png)
    - git검색후 `github.com`삭제
      ![]({{site.baseurl}}/assets/images/Cooperation/gitloginerror5.png)
      만약 삭제가 안된다면 커맨드라인에서 삭제하면 된다.

  - Mac OS **커맨드라인**을 통해 기존에 있는 비밀번호로그인증명방법 제거
  ```sh
  $ git credential-osxkeychain erase
  host=github.com
  protocol=https
  > [Press Return]
  ```
  `git push`를 하면 아이디입력과 비밀번호 입력이 뜨는데 이 때 비밀번호를 토큰으로 입력하면 된다.
  ```sh
  ~ % git push origin master
  Username for 'https://github.com': ChanYoung-dev
  Password for 'https://ChanYoung-dev@github.com': 
  Enumerating objects: 8, done.
  Counting objects: 100% (8/8), done.
  Delta compression using up to 12 threads
  Compressing objects: 100% (5/5), done.
  Writing objects: 100% (6/6), 3.35 KiB | 3.35 MiB/s, done.
  Total 6 (delta 0), reused 0 (delta 0)
  ```