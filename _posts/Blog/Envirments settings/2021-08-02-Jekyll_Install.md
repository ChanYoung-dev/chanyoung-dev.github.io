---
permalink: /Blog/Enviroments_Settings/JekyllInstall/
title: "Jekyll 설치하기"
toc: true
comments: true
categories:
  - Blog🐨Markdown
sidebar:
  - title: "Blog🐨"
  - nav: "Blog-menu"
excerpt: >
  "맥북에서 Jekyll설치하기 + 오류해결과정"
---

# 맥으로 jekyll 설치하기



## 1. ruby가 설치되어있는지확인한다. 

   ruby를 설치하는 방법은 rvm이나 rbenv를 사용하여 설치한다.

   여기선 rbenv를 사용하여 설치할 것이기때문에 rbenv를 설치해준다.

---

   터미널에서

   ```shell
   rbenv version
   ```

   설치되어있으면 version이 뜰 것이다.

---

   ```sh
   rbenv versions
   ```

   위 명령어를 터미널에 쳤을때 system으로 적혀있으면 system에서 설치한 rbenv이다.

   > 기본적으로 맥이면 시스템에서 ruby가 깔려있을텐데
   >
   > 기본 ruby가 아니라 ruby 2.6.6을 사용해야한다.

## 2. ruby가 설치되있지 않은 경우, ruby를 설치해준다. 

brew를 사용하여 rbenv를 설치한다.

---

- ### 1. brew 설치

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

- ### 2. brew 업데이트

```sh
brew update
```

- ### 3. rbenv 설치

```sh
brew install rbenv ruby-build
```

- ### 4. 터미널의 shell파일에 rbenv를 위한 설정을 추가해준다.

   터미널을 껐다 켜도 적용되기위해 설정을 하는 것이다.

   맥유저의 경우, bash_profile이거나 zshrc인데 

   자신의 shell이 무엇인지 확인하려면 터미널 상단에 써있다.

   ![]({{site.baseurl}}/assets/images/blog/zsh.png)

   위처럼 zsh로 적혀있으면 

   ```sh
   cd ~
   
   vim .zshrc
   ```

    zshrc하단에

   ```shell
   eval "$(rbenv init -)"
   ```

   넣어준다.

   쉘적용을 위해 다음과 같이 명령어 입력

   ```sh
   source ~/.zshrc
   ```

   

- ### 5. ruby 설치

rbenv로 ruby를 설치한다.

```
rbenv install 2.6.6
```

```
rbenv global 2.6.6
```

 global은 시스템전체의 버전을 통일시킨다. 파일별로 버전을 다르게 사용하고싶으면 global대신 local을 사용한다.

```sh
rbenv versions
```

위 명령어를 입력했을 경우

![]({{site.baseurl}}/assets/images/blog/rbenv.png)

위와 같이 *가 system옆이아니라 2.6.6옆에 있어야한다.

```sh
ruby -v
```

![]({{site.baseurl}}/assets/images/blog/ruby.png)

ruby까지 버전확인완료

> 만약 껏다켰는데 rbenv 버전은 2.6.6으로 잘뜨나 ruby가 안 뜰 경우는 편집한 쉘파일이 시스템이 사용하는 쉘이 아닌것이다. 이럴땐 
>
> source 쉘파일
>
> 을 매번 터미널재실행할때마다 치거나 자신이 무슨 쉘을 사용하는지 파악해야한다.

```sh
which ruby

which gem
```

정상적으로 설치가 되었을경우

/Users/사용자명/.rbenv/shims/ruby

이런식으로 뜰 것이고 이상한 함수 ( rbenv() { ~~~~ })가 떠도 적용이 잘 된것이다.

## 3. Jekyll 설치

Jekyll은 gem의 한 종류이므로 ruby의 gem을 통해 설치해준다.

```sh
gem install jekyll bundler github-pages
```

## 4. jekyll 시작

```shell
bundle exec jekyll serve
```

정상적으로 작동이되면

![]({{site.baseurl}}/assets/images/blog/success.png)이렇게 뜬다.

127.0.0.1:4000으로 접속하여 로컬에선 사이트가 정상적으로 뜨는지 확인해본다.

## 5. 에러

```
ERROR: While executing gem ... (Gem::FilePermissionError) You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.
```

```
You don't have write permissions
```

-> 시스템에서 설치해놓은 ruby를 사용하거나 설치가 제대로 안된경우이다.

이 경우,  rbenv를 통해 설치한 ruby가 설정되어있는지 확인한다.

[5. ruby설치](#5-ruby-설치) 로 가보자

```
rbenv versions
```

-> 여기서 시스템으로 설정되어있으면 안된다.

- #### 번외) 삭제 오류

  반대로 에러가 해결이 안되어 gem이나 bundle을 삭제하고 다시 시작하고 싶을 때가 있다.

  ```sh
  Ignoring eventmachine-1.2.7 because its extensions are not built 
  ```

  위와 같은 오류가 뜨면 위 상황과 반대로 rbenv설정을 시스템으로 해주어야한다. 

  ```shell
  rbenv global system
  ```

  시스템으로 바꾸어서 실행하면 잘 된다.
