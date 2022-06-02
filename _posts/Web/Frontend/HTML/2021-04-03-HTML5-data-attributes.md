---
permalink: /Web/Frontend/HTML/HTML5-data-attributes/
title: "HTML5 Data 속성"
toc: true
categories:
  - Web🐮Frontend
comments: true
sidebar:
  - title: "Web🐮"
  - nav: "Web-menu"
tags:
  - HTML
  - Frontend

---
HTML의 data attributes는 HTML5에서만 가능하다.

# 기본 구조

data-이름

/* <div data-display-name="chan"></div> */

- ## html에서의 속성추가
  
    ```html
      <div data-index="1" data-display-name="chan"></div>
      <div data-index="2" data-display-name="young"></div>
    ```
    
    - ## CSS에서 적용
      
        ```css
        		div{
              width:200px;
              height:200px;
            background-color: tomato;
            margin-bottom: 50px;
          }
          [data-display-name='chan']{
            background-color: brown;
          }
      ```
      - ### Output
      
        ![]({{site.baseurl}}/assets/images/web/html속성.png)
      
  - ## Javascript에서의 응용
    
    ```css
    		<script>
        const chan = document.querySelector('div[data-display-name="chan"]')
    /*div[data-display-name="chan"] : data-display-name="chan"인애들 중 div태그만*/
        console.log(chan.dataset)
    		console.log(chan.dataset.index)
      </script>
    ```
    
    - ### Console
    
      ```http
      [object DOMStringMap] {
       displayName: "chan",
       index: "1"
      }
      1
      ```
      
      display_name이 아니라 카멜방식인 displayName으로 나온다.



### 주의

코드내 root 수정은 다음과 같이 @media에서만 정할 수 있다.

```css
:root{
      --font-size:32px
		}

@media screen and (max-width:768px){

	:root{

	--font-size:7px

	}

}
```

