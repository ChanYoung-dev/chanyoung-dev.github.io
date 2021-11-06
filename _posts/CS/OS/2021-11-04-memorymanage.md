---
permalink: /CS/OS/memorymanage/
title: "메모리(기억장치) 관리 정책"
toc: true
categories:
  - CS🐰OS
comments: true
sidebar:
  - title: "CS🐰"
  - nav: "CS-menu"
excerpt: >
  반입(Fetch), 배치(Placement), 교체(Replacement), 최초/최적/최악 적합
tags:
  - OS
list_name:
  - OS
---
이 포스트 내용은 [박미진 컴퓨터일반](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791197154324)과 [시나공 정보처리기사 요약집](#)를 참고하여 작성한 글입니다.
## 1 . 반입(Fetch)정책
- 페이지[^1]를 <mark>언제</mark> 메인메모리[^2]로 가져올지를 결정하는 정책

[^1]: 보조기억장치에 보관 중인 프로그램이나 데이터
[^2]: 주기억장치

|**요구반입**| 프로그램이나 데이터가 참조될 때 주기억장치로 적재한다.|
|**예상반입**| 참조될 프로그램이나 데이터를 미리 예상하여 적재한다. |

## 2 . 배치(Replacement)정책
- 새로 반입되는 프로그램이나 데이터를 주기억장치의 <mark>어디에</mark> 위치시킬 것인가를 결정하는 정책
  - ##### 최초 적합
  들어갈 수 있는 크기의 빈 영역 중에서 첫번째 분할 영역에 배치시키는 방법  
  속도는 빠르나 공간활용률은 떨어진다
  <p align="center">
    <img src="{{site.baseurl}}/assets/images/CS/firstfit.png" alt="" width="500px">
    <figcaption align="center">최초 적합(first fit)</figcaption>
  </p>
  - ##### 최적 적합
  들어갈 수 있는 크기의 빈 영 역 중에서 단편화를 가장 작게 남기는 분할 영역에 배치시키는 방법  
  사용가능 공간 이용률은 향상될 수 있으나 속도가 느리다
  <p align="center">
    <img src="{{site.baseurl}}/assets/images/CS/bestfit.png" alt="" width="500px">
    <figcaption align="center">최적 적합(best fit)</figcaption>
  </p>
  - ##### 최악 적합
  들어갈 수 있는 크기의 빈 영 역 중에서 단편화를 가장 크게 남기는 분할 영역에 배치시키는 방법  
  <p align="center">
    <img src="{{site.baseurl}}/assets/images/CS/worstfit.png" alt="" width="500px">
    <figcaption align="center">최악 적합(worst fit)</figcaption>
  </p>
  
## 3 . 교체(Replacement) 정책
주기억장치의 모든 영역이 이미 사용중인 상태이고, 가상기억장치의 필요한 페이지를 주기억장치에 배치해야할 때, 주기억장치로부터 어느 영역을 교체하여 사용할 것인지를 결정하는 정책으로 FIFO, OPT, LRU, LFU, NUR, SCR 등이 있다.


