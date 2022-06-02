---
permalink: /Frontend/CSS/CSSvarible/
title: "CSS 변수"
toc: true
categories:
  - Frontend🐮CSS
comments: true
sidebar:
  - title: "Frontend🐮"
  - nav: "Frontend-menu"
tags:
  - Frontend
  - CSS
sexy: 1
main: "CSS"
---
css의 변수를 설정함으로써 하나하나 값을 바꾸지않고 변수 값만 바꿈으로써 전체를 바꿔줄수있다.

# 기본구조

--변수명

> ex) --font-size : 32px. 
>
> 사용할 때) font-size: var(--font-size)

- ## html
  
    ```html
      <ul class="first-list">
        <li>Orange</li>
        <li>Apple</li>
      </ul>
        
      <ul class="second-list">
        <li>Korean</li>
        <li>Japan</li>
        <li>China</li>
    </ul>
  ```
  
  - ## 변수 적용 전 CSS
    
      ```css
      		.first-list {
            background-color : thistle;
            color: whitesmoke;
            margin-left: 8px;
          }
          .second-list {
            background-color : thistle;
            color: whitesmoke;
            margin-left: 16px;
          }
        
      ```
      - ### Output.ver1
      
        ![]({{site.baseurl}}/assets/images/web/css변수적용전.png)
      
  - ## 변수 적용 후 CSS
    
    ```css
    		//추가
    		:root{
          --font-size:32px
    		}
    		.first-list {
          background-color : thistle;
          color: whitesmoke;
          margin-left: 8px;
          //추가
          font-size:var(--font-size)
          //기본값이 없을 경우 8로 지정
          //font-size:var(--font-size, 8px)
        }
        .second-list {
          background-color : thistle;
          color: whitesmoke;
          margin-left: 16px;
          //추가 변수의 2배 사이즈
          font-size:calc(var(--font-size) *2)
        }
    ```
    
    - ### Output.ver2
    
      ![]({{site.baseurl}}/assets/images/web/css변수적용후.png)



### 주의

코드내 수정은 다음과 같이 @media에서만 정할 수 있다.

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

