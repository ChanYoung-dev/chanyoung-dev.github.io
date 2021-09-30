---
permalink: /Web/Frontend/CSS/CSSbasic
title: "CSS layout"
toc: true
categories:
  - Web🐮Frontend
comments: true
sidebar:
  - title: "Web🐮"
  - nav: "Web-menu"
tags:
  - CSS

---
css의 레이아웃(display 속성)을 알아보자. 

- ## html
  
    ```html
        <div>1</div>
      <div>23435</div>
      <div>3</div>
      
      <!--Inline-level-->
      <span>1</span>
      <span>2</span>
      <span>3</span>
    ```

  - ## block과 inline
    
      ```css
      div,span{
        width: 80px;
        height: 80px;
        margin : 20px;
      }
      div {
        background: red;
        display: inline;
      }/* 한줄에 여러개를 넣을 수 있으며
      위 width,height와 상관없이 컨텐츠 크기에 딱 맞게
      설정된다.*/
      span {
        background: Blue;
        display: block;
      } /*블락은 한줄에 한개씩 width,height설정에 맞게 
      표현된다*/
      
      ```
    - ### Output.ver1

      ![]({{site.baseurl}}/assets/images/web/css레이아웃1.png)

  - ## inline-block
    
    ```css
    div,span{
      width: 80px;
      height: 80px;
      margin : 20px;
    }
    span {
      background: Blue;
      display: block;
    } /*블락은 한줄에 한개씩 width,height설정에 맞게 
    표현된다*/
    div {
      background: red;
      display: inline-block;
    } /* 인라인-블락은 한줄에 여러개를 넣을 수 있으며
    위width에 반영되어 설정된다.*/
    ```

    - ### Output.ver2

      ![]({{site.baseurl}}/assets/images/web/css레이아웃2.png)