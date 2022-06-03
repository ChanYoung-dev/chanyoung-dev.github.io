---
permalink: /CS/OS/Diskscheudule/
title: "디스크 스케줄링"
toc: true
categories:
  - CS🐰OS
comments: true
sidebar:
  - title: "CS🐰"
  - nav: "CS-menu"
excerpt: >
  FCFS, SSTF, SCAN, C-SCAN, Eshenbach, SLTF
tags:
  - OS
list_name:
  - OS

sexy: 1
main: "OS"
---
이 포스트 내용은 [박미진 컴퓨터일반](http://www.kyobobook.co.kr/product/detailViewKor.laf?mallGb=KOR&ejkGb=KOR&barcode=9791197154324)과 [시나공 정보처리기사 요약집](#)를 참고하여 작성한 글입니다.

# 디스크 스케줄링
- 보조기억장치에서 원하는 트랙찾기
> Access time<sup>디스크접근시간</sup> = [Seek Time](#seek-time-기법-종류)<sup>탐색시간/트랙찾기</sup> + [Latency Time](#latencytime-기법-종류)<sup>회전지연시간</sup> + TransferTime<sup>데이터읽기/쓰기</sup>

# Seek Time 기법 종류
- **트랙**을 찾는데 걸리는 시간
- ## FCFS
  - 들어온 순서대로 요청 처리
  - 공평성 보장
- ## SSTF
  - 현재 위치 기준에서 가장 가까운 거리에 있는 트랙으로 헤드를 이동
  - 처리량이 많은 일괄 처리 시스템에 유리
  - 바깥쪽 트랙은 가운데 트랙에 비해 **기아 상태** 발생 가능성
- ## SCAN
  - 현재 헤드의 위치에서 같은 진행 방향으로 모든 요청 처리하고 **끝까지 이동 후**, 바로 **역방향 요청 사항을 서비스**한다.
- ## C-SCAN
  - 현재 헤드의 위치에서 같은 진행 방향으로 모든 요청 처리하고 **끝까지 이동 후**, 바로 **역방향 끝으로 이동하여 같은 방향으로 요청 사항을 서비스**한다.
- ## LOOK
  - 현재 헤드의 위치에서 같은 진행 방향으로 모든 요청 처리하고 **그 방향의 요청이 끝난 직후**, 바로 **역방향 요청 사항을 서비스**한다.
- ## C-LOOK
  - 현재 헤드의 위치에서 같은 진행 방향으로 모든 요청 처리하고 **그 방향의 요청이 끝난 직후**, 바로 **역방향 끝으로 이동하여 같은 방향으로 요청 사항을 서비스**한다.


# LatencyTime 기법 종류
- **섹터**를 찾는 데 걸리는 시간
- ## 에셴바흐<sup>Eschenbach</sup>
  - 부하가 매우 큰 항공 예약 시스템을 위해 개발
  - **회전 지연 시간**을 최적화 -> **방향을 바꿀수 없다**
- ## SLTF<sup>Shortest Latency Time First</sup>
  - 섹터큐잉<sup>Sector Queuing</sup>이라고 하며, 회전 시간의 최적화를 위해 구현된 기법
  - **회전 시간**을 최적화 -> **방향을 바꿀수 있다**

