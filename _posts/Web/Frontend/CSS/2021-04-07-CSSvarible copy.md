---
permalink: /Frontend/CSS/CSSvarible/
title: "CSS ๋ณ์"
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
  teaser: /assets/images/web/css๋ณ์์ ์ฉํ.png
  overlay_image: /assets/images/web/css๋ณ์์ ์ฉํ.png
  overlay_filter: 0.5
excerpt: css์ ๋ณ์๋ฅผ ์ค์ ํจ์ผ๋ก์จ ํ๋ํ๋ ๊ฐ์ ๋ฐ๊พธ์ง์๊ณ  ๋ณ์ ๊ฐ๋ง ๋ฐ๊ฟ์ผ๋ก์จ ์ ์ฒด๋ฅผ ๋ฐ๊ฟ์ค์์๋ค.
---
css์ ๋ณ์๋ฅผ ์ค์ ํจ์ผ๋ก์จ ํ๋ํ๋ ๊ฐ์ ๋ฐ๊พธ์ง์๊ณ  ๋ณ์ ๊ฐ๋ง ๋ฐ๊ฟ์ผ๋ก์จ ์ ์ฒด๋ฅผ ๋ฐ๊ฟ์ค์์๋ค.

# ๊ธฐ๋ณธ๊ตฌ์กฐ

--๋ณ์๋ช

> ex) --font-size : 32px. 
>
> ์ฌ์ฉํ  ๋) font-size: var(--font-size)

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
  
  - ## ๋ณ์ ์ ์ฉ ์  CSS
    
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
      
        ![]({{site.baseurl}}/assets/images/web/css๋ณ์์ ์ฉ์ .png)
      
  - ## ๋ณ์ ์ ์ฉ ํ CSS
    
    ```css
    		//์ถ๊ฐ
    		:root{
          --font-size:32px
    		}
    		.first-list {
          background-color : thistle;
          color: whitesmoke;
          margin-left: 8px;
          //์ถ๊ฐ
          font-size:var(--font-size)
          //๊ธฐ๋ณธ๊ฐ์ด ์์ ๊ฒฝ์ฐ 8๋ก ์ง์ 
          //font-size:var(--font-size, 8px)
        }
        .second-list {
          background-color : thistle;
          color: whitesmoke;
          margin-left: 16px;
          //์ถ๊ฐ ๋ณ์์ 2๋ฐฐ ์ฌ์ด์ฆ
          font-size:calc(var(--font-size) *2)
        }
    ```
    
    - ### Output.ver2
    
      ![]({{site.baseurl}}/assets/images/web/css๋ณ์์ ์ฉํ.png)



### ์ฃผ์

์ฝ๋๋ด ์์ ์ ๋ค์๊ณผ ๊ฐ์ด @media์์๋ง ์ ํ  ์ ์๋ค.

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

