---
permalink: /CS/Network/virtualization/
title: "가상화(virtualization)"
toc: true
categories:
  - CS🐰Network
  - CS🐰OS
comments: true
sidebar:
  - title: "CS🐰"
  - nav: "CS-menu"
excerpt: >
  "가상화란?"
tags:
  - Network
  - OS
list_name:
  - Network
  - OS

sexy: 1
main: "Network"
header:
  teaser: /assets/images/CS/virtual.png
  overlay_image: /assets/images/CS/virtual.png
  overlay_filter: 0.5
---
## 가상화 기술
기존에는 서버가 필요한 고객들은 실제 물리 서버를 임대 혹은 구입하여 서버호스팅 서비스를 이용하였다.  
하지만 비용과 공간적 제약, 어려운 관리 문제 때문에 가상화 기술과 클라우드가 나타나게 되었다.  
즉 가상화란 **물리적 자원을 추상화하여 논리적 자원 형태로 표현하는 기술이다.**  


### 서버가상화
물리적 서버 하나에 가상 서버를 여러개 구성하는 방법이다.  
서버 하나에서 각 응용 프로그램과 운영체제를 독립된 환경으로 사용할 수 있어 여러 운영체제가 한 시스템의 자원을 공유할 수 있다.  

- #### 1. 호스트 기반 가상화
    - 호스트 운영체제 위 하이퍼바이저에서 가상 머신을 구동한다.  
    - 하드웨어를 직접 제어할 수 처게 되므로 물리 서버를 그대로 이용하는 서버호스팅에 비해 성능 저하가 발생 할 수 밖에 없다.  
    - 또한 가상 서버는 보통 동일한 하드웨어 자원을 공유하기때문에 가상화 서버가 상호 간섭 현상으로 인해 성능을 제대로 발휘하지 못한다.  
    - 따라서 성능과 안정성에 민감한 서비스는 베어메탈 서버를 추구한다.  

- #### 2. 베어메탈 기반 가상화
    - 호스트 OS 설치 전에 가상화 솔루션을 탑재하여 가상의 CPU, 메모리, 디스크, 네트워크 카드등을 생성한다.  
    - 베어메탈이란 뜻은 하드웨어 상에 어떤 소프트웨어도 설치되어 있찌 않은 상태를 뜻한다. 즉 하이퍼바이저 OS없이 물리 서버를 그대로 직접 제어가 가능하다는 것이다.  
    - 이렇기 때문에 단점으로는 운영체제 위에서 구동되지 않으므로 디바이스용 드라이버, 하드웨어 플랫폼 드라이버 등을 포함해야 하고 설치와 구성이 어렵다.


<p align="center"><img src="{{site.baseurl}}/assets/images/CS/virtual.png"></p>
