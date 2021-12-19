---
permalink: /CS/Network/InterNetwork/
title: "네트워크 장비"
toc: true
categories:
  - CS🐰Network
comments: true
sidebar:
  - title: "CS🐰"
  - nav: "CS-menu"
excerpt: >
  "Repeater, Bridge, Router, Gateway, Hub"
tags:
  - Network
list_name:
  - Network
---


## LAN
- 근거리통신망
- 광대역 통신망<sup>MAN</sup>과는 달리 학교, 회사 등 한 건물이나 일 정 지역 내에서 여러대의 컴퓨터와 주변장치가 전용 통신 회선을 통해 연결된 네트워크
- 광대역 전송 매체의 사용으로 고속 통신 가능하여 확장썽과 재배치가 용이
- 경로 선택이 필요없고, 오류 발생율이 낮다
- 하나의 장치가 전송한 데이터는 모든 장치에 연결되어 Broadcasting된다
- ### LAN의 계층구조
  - 물리계층
    - 유선 
    - 무선
  - 데이터 링크 계층
    - LLC<sup>Logical Link Control</sup> : 에러제어, 흐름제어, 순서제어
    - MAC<sup>Mediaa Access Control</sup> : MAC주소, 프레임구성

## IEEE LAN

| 구분 | 내용 |
|---------|---------|
|802.1|전체 구성|
|802.2|LLC|
|802.3|[CSMA/CD]()|
|802.4|[토큰 버스]()|
|802.5|[토큰 링]()|
|802.6|도시형 통신망<sup>MAN</sup>|
|802.11|[무선 LAN]()|
|802.15|WPAN|
|802.15.1|Bluetooth|
|802.15.4|Zigbee|
|802.16|Broadband Wireless Access|
|802.20|Mobile Broadband Wireless Access|


*[Broadband Wireless Access]: Wibro, WiMAX
*[Zigbee]: 저속 Bluetooth

## 네트워크 장비
근거리 통신망<sup>LAN</sup>와 광역 통신망<sup>WAN</sup>간에 상호 접속하여 형성되는 네트워크 장비(중계기)

- #### Repeater
  - 물리계층
  - 신호 증폭/반복 재생
- #### Bridge
  - 데이터 링크 계층
  - 패킷을 중계하고 필터링
  - LAN 사이를 연결하거나 LAN안에서의 컴퓨터 그룹을 연결
- #### Router
  - 네트워크 계층
  - LAN과 LAN/MAN 연결 및 최적 경로 썰정
- #### Gateway
  - 프로토콜 구조가 전혀 다른 네트워크 연결 수행
  - 상위 계층 간을 연겨려하여 데이터 형식 변환, 주소 변환, 프로토콜 변환 수행
  - TCP/IP에서는 라우터와 게이트를 동일하게 본다
- #### Hub
  - 네트워크 각 단말기 연결, 일종의 분배기(Repeater)
  - DTE가 있는 지점간에 트리구조로 연결
  

