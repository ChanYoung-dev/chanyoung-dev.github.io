---
permalink: /Web/Frontend/CSS/CSSflexbox/
title: "CSS flexbox"
toc: true
categories:
  - Web🐮Frontend
comments: true
sidebar:
  - title: "Web🐮"
  - nav: "Web-menu"
tags:
  - CSS
  - flexbox

---
css의 flexbox는 element의 요소의 화면 포지션을 쉽게 컨트롤할 수 있다.

## 기본구조
> 컨테이너와 아이템을 어떻게 정렬시키는지에 대한 박스  

- ### Container와 item
	Flex box는 Container와 item에서 사용할 수 있다.  
	
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
	>수평축 -> 중심축(main axis)이라하면 수직축이 반대축(cross axis)
	ex) 수평축이 row라고 가정
	justify가 main axis고 align이 cross axis이다.

  #### container
	- ***flex-direction***
	  컨테이너 안에서 요소들이 정렬해야 할 방향을 지정
	
	- ***flex-wrap***
	  줄이 꽉 찼을 시 한줄에 계속 표현할지, 다음줄로 넘길지
	- ***flex-flow***
	  flex-direction와 flex-wrap를 동시에 표현한다.
	- ***justify-content***
	  main axis(row)선 상에서 정렬
	- ***align-items***
	  cross axis(column)선 상에서 정렬
	- ***align-content***
	  여러 줄 사이의 간격을 지정  
	
	  > align-content는 여러 줄들 사이의 간격을 지정  
	  > align-items는 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 지정  
	  > 한 줄만 있는 경우, align-content는 효과를 보이지 않는다.   

  #### item
  개별 content에 대해서만 적용한다.

  - ***order***
    우선순위를 바꾼다.
  - ***align-self***
    지정한 요소에만 align-items를 적용시킨다.
  - ***flex-grow***
    공간이 남을때 지정한 item이 남은 공간을 확장시킬지, 공백으로 남길지를 정함
  - ***flex-shirink***
    grow의 반대.


cf)실습사이트 : [Flexbox 게임](https://flexboxfroggy.com/#ko)