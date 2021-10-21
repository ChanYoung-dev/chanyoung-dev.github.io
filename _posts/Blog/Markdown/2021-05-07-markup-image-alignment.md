---
permalink: /Blog/Markdown/imageAlign/
title: "마크다운과 html 에서 이미지 정렬"
toc: true
categories:
  - Blog🐨Markdown
comments: true
sidebar:
  - title: "Blog🐨"
  - nav: "Blog-menu"
excerpt: >
  Markdown과 html에서 이미지 정렬
tags:
  - Markdown
  - Markup
  - HTML
list_name:
  - Markdown
  - Markup
  - HTML
---
마크다운에는 이미지 정렬 문법이 없다.  
하지만 `{: .align-pattern}`이나 `html`을 사용하면 된다.

github page에서의 이미지 경로는 [github page, Jekyll에서의 마크다운 파일에 image(사진) 넣기↗️](https://chanyoung-dev.github.io/Blog/Markdown/PutImage/)를 사용한다.


## 이미지 중앙 정렬

`![image-center](이미지경로){: .align-center}`

- #### 적용
![image-center]({{site.baseurl}}/assets/images/python/a.png){: .align-center}

## 이미지 왼쪽 정렬

`![image-left](이미지경로){: .align-left}`

- #### 적용
![image-left]({{site.baseurl}}/assets/images/python/a.png){: .align-left}   
이미지 왼쪽정렬을 하게 되면 이미지가 있는 단락에 공간이 있을 시 글자가 남은 공간에 입력된다.  
    ㅤ   
    ㅤ   
   ㅤ    
   ㅤ    
   ㅤ  
   ㅤ  
   ㅤ  
   ㅤ  
   


## 이미지에 정렬을 주지 않을 경우
![no-alignment]({{site.baseurl}}/assets/images/python/a.png)  
텍스트가 이과 같이 이미지 문단 다음으로 적용이된다.


## 이미지 오른쪽 정렬

`![image-left](이미지경로){: .align-right}`

- #### 적용
![image-right]({{site.baseurl}}/assets/images/python/a.png){: .align-right}  


오른쪽도 마찬가지로 이미지 문단에 빈 공간에 텍스트가 입력된다.  
    ㅤ   
    ㅤ   
   ㅤ    
   ㅤ    
   ㅤ  
   ㅤ  
   ㅤ  
   ㅤ  

## figure사용 - center
```html
<figure class="align-center">
  <img src="이미지경로" alt="">
</figure> 
```

- #### 적용
<figure class="align-center">
  <img src="{{site.baseurl}}/assets/images/python/a.png" alt="">
</figure> 

## 이미지크기 설정
width로 이미지 크기를 설정할 수 있다.
```html
<figure style="width: 150px" class="align-left">
  <img src="이미지경로" alt="">
</figure> 
```
- #### 적용
<figure style="width: 150px" class="align-left">
  <img src="{{site.baseurl}}/assets/images/python/a.png" alt="">
</figure> 
이것도 마찬가지로 문단의 나머지에 텍스트가 입력된다.
    ㅤ   
    ㅤ   
   ㅤ    
   ㅤ  
   ㅤ  
   ㅤ  
      ㅤ  
   ㅤ  
   ㅤ  
      ㅤ  
   ㅤ  
   ㅤ  
만약 이미지 문단 밖에서 텍스트가 입력되고 싶으면 `<p>`태그를 사용하자.
```html
<p align="left">
  <img src="이미지경로" alt="" width="150px">
</p>
```
- #### 적용
<p align="left">
  <img src="{{site.baseurl}}/assets/images/python/a.png" alt="" width="150px">
</p>

문단 밖에서 텍스트가 입력된다.  

## 오버래핑 이미지

만약 이미지가 커서 오버래핑된 이미지를 올리고 싶다면 `<figure>`를 이용하자.
- #### figure
  
  ```html
  <figure style="width: 1200px">
    <img src="이미지경로" alt="">
  </figure> 
  ```

  - #### 적용
  <figure style="width: 1200px">
    <img src="{{site.baseurl}}/assets/images/python/a.png" alt="">
  </figure> 

오버래핑이 아니라 최대크기가 상위 컨테이너에 딱 맞게 하고 싶다면 `<p>`태그를 사용하자

- #### p
  ```html
  <p>
    <img src="이미지경로" alt="" width="1200px">
  </p>
  ```

  - #### 적용
  <p>
    <img src="{{site.baseurl}}/assets/images/python/a.png" alt="" width="1200px">
  </p>



## 이미지에 주석 달기
```html
<figcaption> 주석 내용 </figcaption>
```

- #### 적용
<p>
  <img src="{{site.baseurl}}/assets/images/python/a.png" alt="">
  <figcaption>Feels good.</figcaption>
</p>

## 응용 : 3가지 이미지 한꺼번에 보여주기

- ### 1 . p 태그 사용
  
  - 2개일 경우
  
  ```html
  <p align="center">
    <img src="이미지경로" align="center" width="49%">
    <img src="이미지경로" align="center" width="49%">
    <figcaption align="center">2개 이미지 띄우기</figcaption>
  </p>
  ```

  `align="center"` 는 없어도 된다.

  - #### 적용
  <p align="center">
    <img src="{{site.baseurl}}/assets/images/python/a.png" width="49%">
    <img src="{{site.baseurl}}/assets/images/python/a.png" width="49%">
    <figcaption align="center">3개 이미지 띄우기</figcaption>
  </p>

  - 3개일 경우
  
  ```html
  <p align="center">
    <img src="이미지경로" align="center" width="32%">
    <img src="이미지경로" align="center" width="32%">
    <img src="이미지경로" align="center" width="32%">
    <figcaption align="center">3개 이미지 띄우기</figcaption>
  </p>
  ```

  `align="center"` 는 없어도 된다.

  - #### 적용
  <p align="center">
    <img src="{{site.baseurl}}/assets/images/python/a.png" width="32%">
    <img src="{{site.baseurl}}/assets/images/python/a.png" width="32%">
    <img src="{{site.baseurl}}/assets/images/python/a.png" width="32%">
    <figcaption align="center">3개 이미지 띄우기</figcaption>
  </p>

다음과 같은 방법도 있다.

- ### 2. figure 태그 사용
  - #### 2개일 경우
  
  `<figure class="half">` 사용
  
  ```html
  <figure class="half">
    <a href="link"><img src="이미지경로"></a>
    <a href="link"><img src="이미지경로"></a>
    <figcaption>2개이미지.</figcaption>
  </figure>
  ```
  
  
  <figure class="half">
    <a href="{{site.baseurl}}/assets/images/python/a.png"><img src="{{site.baseurl}}/assets/images/python/a.png"></a>
    <a href="{{site.baseurl}}/assets/images/python/a.png"><img src="{{site.baseurl}}/assets/images/python/a.png"></a>
    <figcaption>2개이미지</figcaption>
  </figure>

  - #### 3개일 경우
  
  `<figure class="thrid">` 사용

  ```html
  <figure class="thrid">
    <a href="link"><img src="이미지경로"></a>
    <a href="link"><img src="이미지경로"></a>
    <figcaption>3개이미지</figcaption>
  </figure>
  ```
  
  
  <figure class="third">
    <a href="{{site.baseurl}}/assets/images/python/a.png"><img src="{{site.baseurl}}/assets/images/python/a.png"></a>
    <a href="{{site.baseurl}}/assets/images/python/a.png"><img src="{{site.baseurl}}/assets/images/python/a.png"></a>
    <a href="{{site.baseurl}}/assets/images/python/a.png"><img src="{{site.baseurl}}/assets/images/python/a.png"></a>
    <figcaption>3개이미지</figcaption>
  </figure>
