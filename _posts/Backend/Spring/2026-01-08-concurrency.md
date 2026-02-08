---
permalink: /Backend/Spring/concurrency2/
title: "MSA 환경에서 낙관적 락과 비관적 락, 언제 무엇을 선택해야 할까"
toc: true
categories:
  - Backend🐛Spring
comments: true
sidebar:
  - title: "Backend🐛"
  - nav: "Backend-menu"
tags:
  - Spring
  - Java
  - Concurrency
  - RDB
sexy: 1
main: "Spring"
header:
  teaser: https://velog.velcdn.com/images/emrhssla/post/00196f8c-0b2d-4d75-b24c-5291249d5699/image.png
  overlay_image: https://velog.velcdn.com/images/emrhssla/post/00196f8c-0b2d-4d75-b24c-5291249d5699/image.png
  overlay_filter: 0.5
excerpt: \#동시성 \#concurrency
---


<span style = "font-size:1.5em;  font-weight: 700;">Oracle, MSA, Concurrency Control, Lock Strategy</span><br>
**Oracle**, **MSA** 환경에서 재고·잔액·포인트와 같은 핵심 자원을 다루며 동시성 제어 문제를 해결하였다. 실무에서 가장 많이 받는 질문은 다음 네 가지이다.<br>
▪️ 낙관적 락과 비관적 락의 개념과 장단점은 무엇인가<br>
▪️ 어떤 상황에서 어떤 락을 선택해야 하는가<br>
▪️ MSA와 Oracle을 사용하면 무조건 낙관적 락이 정답인가<br>
▪️ 왜 MSA에서는 비관적 락보다 낙관적 락이 더 자주 선택되는가<br>
이번 포스팅에서는 위 질문에 대해 하나의 흐름으로 정리한다.
{: .notice--info}

---

## 1. 낙관적 락과 비관적 락의 개념과 장단점

<span style = "font-size:1.5em;  font-weight: 700;">비관적 락(Pessimistic Lock)</span><br>
동시에 수정될 가능성이 높다고 가정하고, 변경 대상 row를 미리 잠가 다른 트랜잭션의 접근을 막는 방식이다. Oracle에서는 `SELECT FOR UPDATE`가 대표적인 구현이다.<br>
{: .notice--danger}

**장점**
- 충돌 자체를 사전에 차단한다
- 정합성이 매우 강하다
- 재고·잔액과 같은 핵심 자원에 안전하다

**단점**
- 락 대기로 인한 성능 저하가 발생한다
- Deadlock 가능성이 존재한다
- 트랜잭션이 길어질수록 리스크가 커진다

`SELECT FOR UPDATE`은 읽기잠금(Select-Lock)을 하기때문에 트랜잭션이 길어지면 길어진만큼 잠금을 건다.
{: .notice}

---

<span style = "font-size:1.5em;  font-weight: 700;">낙관적 락(Optimistic Lock)</span><br>
대부분의 트랜잭션은 충돌하지 않는다는 가정 하에 락을 잡지 않고 처리한다. UPDATE 시점에 `version` 컬럼을 비교하여 충돌 여부를 판단한다.<br>
{: .notice--danger}

**장점**
- 락 대기가 없다
- 높은 동시성과 처리량을 확보할 수 있다
- 스케일 아웃에 유리하다

**단점**
- 충돌 발생 시 재시도 로직이 필요하다
- 충돌률이 높으면 오히려 성능이 급격히 떨어진다

---

## 2. 낙관적 락과 비관적 락, 어떤 상황에서 선택해야 하는가

### 비관적 락을 선택해야 하는 상황

- 동일 row에 대한 UPDATE 경쟁이 잦다
- 잘못된 결과가 절대 허용되지 않는다
- 충돌 발생 시 재시도가 어렵거나 비용이 크다

대표적인 예시는 다음과 같다.
- 재고 차감 (특가, 한정 수량)
- 포인트·캐시·잔액 차감
- 쿠폰 소진, 좌석 예약

이러한 자원들의 공통점은 정확성이 성능보다 훨씬 중요하다는 점이다.

---

### 낙관적 락을 선택해도 되는 상황

- UPDATE 충돌 가능성이 낮다
- 읽기 비중이 높고 쓰기가 드물다
- 충돌 시 재시도가 가능하다
- 확장성과 처리량이 중요하다

대표 예시는 사용자 프로필 수정, 게시글 수정, 설정값 변경과 같은 일반 도메인 데이터이다.

---

## 3. MSA와 Oracle을 사용하면 무조건 낙관적 락이 옳은가

<span style = "font-size:1.5em;  font-weight: 700;">MSA + Oracle = 낙관적 락?</span><br>
아니다.<br>
락 전략은 아키텍처나 DB 종류가 아니라 자원의 특성과 충돌 패턴에 의해 결정된다.<br>
{: .notice--warning}

- Write Contention(쓰기 충돌 빈도)
- 자원의 중요도
- 트랜잭션 길이
- 실패 허용 여부

즉, MSA와 Oracle을 사용한다고 해서 무조건 낙관적 락이 정답은 아니다.

---

## 4. 왜 MSA에서는 비관적 락보다 낙관적 락이 더 많이 선택되는가

### 1️⃣ 락 대기가 장애 전파로 이어지기 때문

MSA에서는 트랜잭션 중간에 외부 API 호출, 결제 PG 연동이 자주 발생한다.

이 상태에서 비관적 락을 잡으면:
- 락 유지 시간 증가
- DB 커넥션 고갈
- 장애 전파

> 락 하나가 시스템 전체 장애의 진원이 된다.

---

### 2️⃣ 스케일 아웃과 구조적으로 충돌

MSA는 수평 확장이 핵심이지만,
비관적 락은 단일 row를 직렬화한다.

- 인스턴스를 늘려도 처리량은 증가하지 않음
- DB가 병목이 됨

---

### 3️⃣ MSA 트랜잭션 모델과 궁합이 다름

MSA는 단일 트랜잭션보다는 Saga / Event 기반 보상 트랜잭션을 선호한다.

낙관적 락의 흐름은 다음과 잘 맞는다.

> 충돌 → 실패 → 재시도 / 보상

---

## 5. 실무에서의 현실적인 결론

정답은 하나가 아니다.

- **핵심 자원(재고·잔액·포인트)** → 비관적 락
- **일반 도메인 데이터** → 낙관적 락
- **확장성과 처리량이 중요한 영역** → 낙관적 락

> MSA에서는 낙관적 락이 기본값이 되기 쉽지만, 모든 곳에 적용해서는 안 된다.

---

## 5. 정리

<span style = "font-size:1.5em;  font-weight: 700;">결론</span><br>
MSA 환경에서는 낙관적 락이 기본 선택이 되는 경우가 많다.<br>
하지만 재고·잔액·포인트처럼 충돌 가능성이 높고 정합성이 절대적인 자원은 비관적 락이 가장 안전하다.<br>
락 전략의 기준은 기술 스택이 아니라 도메인 특성이다.<br>
MSA 환경에서는 락 대기로 인한 병목과 장애 전파를 줄이기 위해 낙관적 락이 선호되지만, 재고·잔액처럼 충돌 가능성이 높고 정합성이 중요한 자원에서는 Oracle의 비관적 락이 여전히 가장 안전한 선택이다.<br>
{: .notice--success}

- 이 데이터는 동시에 얼마나 자주 수정되는가? 자주 충돌될 확률이 높은가?
- 재시도가 가능한가?
- 틀리면 얼마나 큰 문제가 되는가?

이 질문에 대한 답이 낙관적 락과 비관적 락을 결정한다.