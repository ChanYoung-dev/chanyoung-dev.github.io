---
permalink: /Frontend/CSS/CSSLayout/
title: "CSS layout"
toc: true
categories:
  - Frontend๐ฎCSS
comments: true
sidebar:
  - title: "Frontend๐ฎ"
  - nav: "Frontend-menu"
tags:
  - Frontend
  - CSS
sexy: 1
main: "CSS"
header:
  teaser: /assets/images/web/css๋ ์ด์์1.png
  overlay_image: /assets/images/web/css๋ ์ด์์1.png
  overlay_filter: 0.5
excerpt: css์ ๋ ์ด์์(display ์์ฑ)์ ์์๋ณด์. 
---
css์ ๋ ์ด์์(display ์์ฑ)์ ์์๋ณด์. 

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

  - ## block๊ณผ inline
    
      ```css
      div,span{
        width: 80px;
        height: 80px;
        margin : 20px;
      }
      div {
        background: red;
        display: inline;
      }/* ํ์ค์ ์ฌ๋ฌ๊ฐ๋ฅผ ๋ฃ์ ์ ์์ผ๋ฉฐ
      ์ width,height์ ์๊ด์์ด ์ปจํ์ธ  ํฌ๊ธฐ์ ๋ฑ ๋ง๊ฒ
      ์ค์ ๋๋ค.*/
      span {
        background: Blue;
        display: block;
      } /*๋ธ๋ฝ์ ํ์ค์ ํ๊ฐ์ฉ width,height์ค์ ์ ๋ง๊ฒ 
      ํํ๋๋ค*/
      
      ```
    - ### Output.ver1

      ![]({{site.baseurl}}/assets/images/web/css๋ ์ด์์1.png)

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
    } /*๋ธ๋ฝ์ ํ์ค์ ํ๊ฐ์ฉ width,height์ค์ ์ ๋ง๊ฒ 
    ํํ๋๋ค*/
    div {
      background: red;
      display: inline-block;
    } /* ์ธ๋ผ์ธ-๋ธ๋ฝ์ ํ์ค์ ์ฌ๋ฌ๊ฐ๋ฅผ ๋ฃ์ ์ ์์ผ๋ฉฐ
    ์width์ ๋ฐ์๋์ด ์ค์ ๋๋ค.*/
    ```

    - ### Output.ver2

      ![]({{site.baseurl}}/assets/images/web/css๋ ์ด์์2.png)