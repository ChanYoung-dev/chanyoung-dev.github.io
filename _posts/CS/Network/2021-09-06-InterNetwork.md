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
|802.3|[CSMA/CD](#csmacd)|
|802.4|[토큰 버스](#토큰-패싱)|
|802.5|[토큰 링](#토큰-패싱)|
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
  - LAN과 LAN/MAN 연결 및 최적 경로([Routing](https://chanyoung-dev.github.io/CS/Network/Routing/)) 설정
- #### Gateway
  - 프로토콜 구조가 전혀 다른 네트워크 연결 수행
  - 상위 계층 간을 연겨려하여 데이터 형식 변환, 주소 변환, 프로토콜 변환 수행
  - TCP/IP에서는 라우터와 게이트를 동일하게 본다
- #### Hub
  - 네트워크 각 단말기 연결, 일종의 분배기(Repeater)
  - DTE가 있는 지점간에 트리구조로 연결
  

## CSMA/CD
>CS<sup>Carrier Sense</sup> : 통신 회선이 사용중인지를 점검 / 매체 접근전 반송파 감지  
>MA<sup>Multiple Access</sup> : 통신 회선이 비어 있으면 누구든지 사용가능 / 반송파 없으면 데이터 전송  
>CD<sup>Collision Detection</sup> : 데이터 프레임을 전송하면서 충돌 여부 조사 / 전송 후 충돌검사  

- 채널의 사용권을 서로 경쟁하여 화ㅗㄱ보하는 방식
- 노드 간의 충돌을 허용
- 통신 회선이 사용중이면 일정 시간 동안 대기하고, 통신회선상에 데이터가 없을 때에만 데이터를 송신하며, 송신중에도 전송로의 상태를 계속 감시
- 전송 중 충돌이 감지되면 패킷의 전송을 즉시 중단하고 통보 신호를 모두에게 송신
- 노드 장애 처리가 간단하고 전체에 영향가지 않는다
- 구현방법이 간단하다
- **일정 길이 이하의 데이터를 송신할 경우 충돌을 검출 불가**
- 전송량이 많아지면 충돌이 잦아져 채널의 이용률이 떨어지고 전송 지연 시간이 급격히 증가
- 충돌 발생시 다른 노드에서는 데이터를 전송하지 못하며 지연 시간 예측 불가
- CSMA/CD방식을 사용하는 LAN을 **Ethernet**이라고 한다
  - **Ethernet** : 대역폭이 10Mbps인 백본 네트워크
  - Ethernet 시스템 규격
    - 10 BASE T, 10 BASE 2, 10 BASE 5, 10 BASE F - 10Mbps
    - Fast Ethernet - 100Mbps
    - Gigabit Ethernet - 1Gbps

## 토큰 패싱
- 접속되어 있는 노드들 사이를 토큰이라는 패킷이 순차적으로 순환하는 동안, 자신이 전송하고자 할 때 토큰을 얻어 전송한 후 전송이 완료되면 토큰을 반납하는 방식
- CSMA/CD와 같은 충돌 현상 X
- 토큰이 올때까지 기다려야한다
- 토큰 패싱 과정
  - 프레임 송신을 하기 위해 **free token -> busy token**로 바꾸고 정보 프레임을 포함하여 보낸다
  - 수신을 받은 노드는 자기 것이 아니면 패스하고 맞으면 **프레임을 복사**하고 수신비트를 설정하여 전달한다
  - 전달받은 송신 노드는 수신 노드가 데이터를 정확히 수신했는지 확인을 위해 **control token**을 전송한다
