---
permalink: /CS/OS/workingset/
title: "워킹셋과 스래싱"
toc: true
categories:
  - CS🐰OS
comments: true
sidebar:
  - title: "CS🐰"
  - nav: "CS-menu"
excerpt: >
  Working Set, PFF(page Fault Frequency), Thrashing 
tags:
  - OS
list_name:
  - OS
---
이 포스트 내용은 [박미진 컴퓨터일반](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791197154324)과 [시나공 정보처리기사 요약집](#)를 참고하여 작성한 글입니다.

# 워킹 셋<sup>working set</sup>
- 프로세스가 일정 시간 동안 자주 참조하는 페이지들의 집합
- 프로그램의 [Locality](https://chanyoung-dev.github.io/CS/OS/Locality) 특징을 이용한다
- 자주 참조되는 워킹 셋을 **주기억장치**에 상주시킴으로써 페이지 부재 및 페이지 교체 현상을 줄인다
- 시간이 지남에 따라 자주 참조하는 페이지들의 집합이 변화하기 때문에 **워킹 셋은 시간에 따라 바뀌게 된다**

# 페이지 부재<sup>page fault</sup>
- 프로세스 실행 시 참조할 페이지가 주기억장치에 없는 현상
- 페이지 부재율(Page Fault Rate)에 따라 주기억장치에 있는 페이지 프레임의 수를 늘리거나 줄여 페이지 부재율을 적정 수준으로 유지하는 방씩




# 스래싱<sup>thrashing</sup>
- **프로세스의 처리시간보다 페이지 교체시간이 더 많아지는 현상**
- 다중 프로그래밍의 정도가 높아짐에 따라 CPU의 이용률은 어느 특정 시점 까지는 올라가지만 다중 프로그래밍의 정도가 더욱 커지면 스레싱이 나타나고, CPU의 이용률은 급격히 감소된다.
![DAT]({{site.baseurl}}/assets/images/CS/thrashing.png){: .align-center}
<figcaption align="center">스레싱</figcaption>

- CPU이용률을 높이고, 스래싱 현상을 방지하는 방법
  - 다중 프로그래밍의 정도를 적정 수준으로 유지한다.
  - 페이지 부재율을 조절한다.
  - **워킹 셋을 유지한다.**
  - 프로세스가 필요로 하는 만큼의 프레임을 제공한다
  - 부족한 자원을 증설한다.
  - 일부 프로세스를 종료한다.