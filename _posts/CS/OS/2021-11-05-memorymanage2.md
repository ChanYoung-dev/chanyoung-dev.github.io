---
permalink: /CS/OS/memorymanage2/
title: "메모리(기억장치) 관리 기법 - 주기억장치"
toc: true
categories:
  - CS🐰OS
comments: true
sidebar:
  - title: "CS🐰"
  - nav: "CS-menu"
excerpt: >
  메모리 할당 방법, 상주 모니터, 오버레이, 스와핑, 고정분할, 가변분할, 절대적재/재배치적재, 가변분할
tags:
  - OS
list_name:
  - OS
---
이 포스트 내용은 [박미진 컴퓨터일반](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791197154324)과 [시나공 정보처리기사 요약집](#)를 참고하여 작성한 글입니다.


## 메모리 관리 기법 - 주기억장치
### 주기억장치(연속할당)
- #### 단일사용자(단일프로그래밍)
  - 상주모니터
  - 오버레이
  프로세스의 모든 논리 주소 공간은 그 프로세스가 수행되기 전에 실제 메모리에 적재되어야 하므로, 프로세스의 크기는 실제 메모리의 크기로 제한된다.  
  하지만 한 프로세스에 할당된 메모리보다 큰 프로그램은 중첩 기법(Overlay)을 사용하여 해결한다.
  <p align="center">
    <img src="{{site.baseurl}}/assets/images/CS/overlay.png" alt="" width="500px">
    <figcaption align="center">Overlay</figcaption>
  </p>
  - 스와핑
  프로세스 할당이 끝나고 수행 완료된 프로세스는 보조기억장치로 보내고(Swap out)  
  새롭게 시작하는 프로세스는 메모리에 적재(Swap in)
  <p align="center">
    <img src="{{site.baseurl}}/assets/images/CS/swap.png" alt="" width="500px">
    <figcaption align="center">Swapping</figcaption>
  </p>
- #### 다중사용자(다중프로그래밍)
  - ##### 고정분할
    메모리를 여러개의 고정된 크기로 미리 분할하는 것

    ❗️단편화  
    내부 단편화: 하나의 분할에 작업을 할당하고 남은 빈 공간  
    외부 단편화: 대기 중인 작업에게는 분할이 너무 적어 분할 전체가 빈 공간으로 있을 때의 상태
    {: .notice}
    - 절대적재  
    주기억장치가 여러 개의 고정된 분할로 나누어져 있고 하나의 작업은 절대 컴파일러에 의해 번역되어 지정된 분할에서 실행한다.  
    한 작업이 실행 준비가 되어있어도 지정된 자신의 분할이 이미 차있다면, 다른 분할이 이용가능하더라도 기다려야한다.
    <p align="center">
      <img src="{{site.baseurl}}/assets/images/CS/absolute.png" alt="" width="500px">
      <figcaption align="center">절대 적재</figcaption>
    </p>
    - 재배치적재  
    모든 작업을 하나의 큐에 넣어서, 어느 분할에서든지 실행 가능하도록한 기법  
    절대 적재기법보다 주기억장치의 낭비를 줄이지만 운영체제의 부담이 커진다.
    <p align="center">
      <img src="{{site.baseurl}}/assets/images/CS/rearrange.png" alt="" width="500px">
      <figcaption align="center">재배치 적재</figcaption>
    </p>
  - ##### 가변분할
  가장 합리적인 분할의 크기를 결정하여 각 작업에게 주기억장치를 할당하는 기법, 고정된 분할의 경계를 없애고 각 프로세스가 필요한만큼 할당  
  내부 단편화 X 외부 단편화 O
  <p align="center">
      <img src="{{site.baseurl}}/assets/images/CS/variable_split.png" alt="" width="500px">
      <figcaption align="center">가변 분할</figcaption>
  </p>
    - ###### Garage Collection
      단편화 공간을 모아서 하나의 큰 가용 공간을 만드는 것  
      외부 단편화 해결을 할 수 있고 2가지 방법이 있다.
      **1. 통합**
      하나의 작업이 끝났을 때 다른 빈 공간과 인접한지 점검하여 하나로 합침
      <p align="center">
        <img src="{{site.baseurl}}/assets/images/CS/integrated.png" alt="" width="500px">
        <figcaption align="center">Coalesing</figcaption>
      </p>
      **2. 압축**
      모든 사용 가능한 메모리를 하나의 큰 가용공간으로 만듬
      <p align="center">
        <img src="{{site.baseurl}}/assets/images/CS/compression.png" alt="" width="500px">
        <figcaption align="center">Compaction</figcaption>
      </p>

- ## 다음 Post -> [메모리 관리 기법 - 가상기억장치](https://chanyoung-dev.github.io/CS/OS/memorymanage3/)


