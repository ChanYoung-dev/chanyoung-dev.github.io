---
permalink: /Frontend/CSS/CSSflexbox/
title: "CSS flexbox"
toc: true
categories:
  - Frontend๐ฎCSS
comments: true
sidebar:
  - title: "Frontend๐ฎ"
  - nav: "Frontend-menu"
tags:
  - CSS
  - flexbox
  - Frontend
sexy: 1
main: "CSS"
header:
  teaser: https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png
  overlay_image: https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png
  overlay_filter: 0.5
excerpt: css์ flexbox๋ element์ ์์์ ํ๋ฉด ํฌ์ง์์ ์ฝ๊ฒ ์ปจํธ๋กคํ  ์ ์๋ค.
---
css์ flexbox๋ element์ ์์์ ํ๋ฉด ํฌ์ง์์ ์ฝ๊ฒ ์ปจํธ๋กคํ  ์ ์๋ค.

## ๊ธฐ๋ณธ๊ตฌ์กฐ
> ์ปจํ์ด๋์ ์์ดํ์ ์ด๋ป๊ฒ ์ ๋ ฌ์ํค๋์ง์ ๋ํ ๋ฐ์ค  

- ### Container์ item
	Flex box๋ Container์ item์์ ์ฌ์ฉํ  ์ ์๋ค.  
	
  #### container  
	- display  
	- flex-direction  
	- flex-wrap  
	- flex-flow  
	- justify-content  
	- align-items  
	- align-content  

  #### item
	- order
	- flex-grow
	- flex-shrink
	- flex
	- align-self

- ### Axis
	>์ํ์ถ -> ์ค์ฌ์ถ(main axis)์ด๋ผํ๋ฉด ์์ง์ถ์ด ๋ฐ๋์ถ(cross axis)
	ex) ์ํ์ถ์ด row๋ผ๊ณ  ๊ฐ์ 
	justify๊ฐ main axis๊ณ  align์ด cross axis์ด๋ค.

  #### container
	- ***flex-direction***
	  ์ปจํ์ด๋ ์์์ ์์๋ค์ด ์ ๋ ฌํด์ผ ํ  ๋ฐฉํฅ์ ์ง์ 
	
	- ***flex-wrap***
	  ์ค์ด ๊ฝ ์ฐผ์ ์ ํ์ค์ ๊ณ์ ํํํ ์ง, ๋ค์์ค๋ก ๋๊ธธ์ง
	- ***flex-flow***
	  flex-direction์ flex-wrap๋ฅผ ๋์์ ํํํ๋ค.
	- ***justify-content***
	  main axis(row)์  ์์์ ์ ๋ ฌ
	- ***align-items***
	  cross axis(column)์  ์์์ ์ ๋ ฌ
	- ***align-content***
	  ์ฌ๋ฌ ์ค ์ฌ์ด์ ๊ฐ๊ฒฉ์ ์ง์   
	
	  > align-content๋ ์ฌ๋ฌ ์ค๋ค ์ฌ์ด์ ๊ฐ๊ฒฉ์ ์ง์   
	  > align-items๋ ์ปจํ์ด๋ ์์์ ์ด๋ป๊ฒ ๋ชจ๋  ์์๋ค์ด ์ ๋ ฌํ๋์ง๋ฅผ ์ง์   
	  > ํ ์ค๋ง ์๋ ๊ฒฝ์ฐ, align-content๋ ํจ๊ณผ๋ฅผ ๋ณด์ด์ง ์๋๋ค.   

  #### item
  ๊ฐ๋ณ content์ ๋ํด์๋ง ์ ์ฉํ๋ค.

  - ***order***
    ์ฐ์ ์์๋ฅผ ๋ฐ๊พผ๋ค.
  - ***align-self***
    ์ง์ ํ ์์์๋ง align-items๋ฅผ ์ ์ฉ์ํจ๋ค.
  - ***flex-grow***
    ๊ณต๊ฐ์ด ๋จ์๋ ์ง์ ํ item์ด ๋จ์ ๊ณต๊ฐ์ ํ์ฅ์ํฌ์ง, ๊ณต๋ฐฑ์ผ๋ก ๋จ๊ธธ์ง๋ฅผ ์ ํจ
  - ***flex-shirink***
    grow์ ๋ฐ๋.


cf)์ค์ต์ฌ์ดํธ : [Flexbox ๊ฒ์](https://flexboxfroggy.com/#ko)