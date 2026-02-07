---
permalink: /Backend/Spring/concurrency/
title: "MSA에서의 동시성"
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


<span style = "font-size:1.5em;  font-weight: 700;">동시성</span><br>
**Spring Boot**, **Oracle**, **MSA** 환경에서 주문·재고·결제 도메인을 운영하며<br>
Repeatable Read와 Read Committed 격리수준이 실제 서비스에서는 어떻게 문제를 만들 수 있었는지를 정리한다.
{: .notice--info}

---

## 1. 문제 배경

- Repeatable Read는 왜 재고 도메인에서 위험한가
- Read Committed라고 해서 안전한가
- 그렇다면 무엇을 믿어야 하는가

특히 Repeatable Read는  
겉보기에는 더 안전해 보이지만,  
재고 도메인에서는 오히려 위험한 착각을 만들 수 있다.

---

## 2. Repeatable Read vs Read Committed

### Repeatable Read (RR)

- 트랜잭션 시작 시점의 스냅샷을 끝까지 유지
- 같은 SELECT는 항상 같은 결과
- 트랜잭션 내부 논리적 일관성 보장

하지만 다음과 같은 특성이 있다.

- 과거 상태를 계속 신뢰하게 만든다
- 재조회가 재검증이 되지 않는다
- 긴 트랜잭션에서는 현실과 괴리가 커진다

---

### Read Committed (RC)

- 각 SQL 실행 시점의 최신 커밋 데이터를 조회
- 재조회 = 최신 상태 반영
- 실시간 상태가 중요한 도메인에 적합

Read Committed는  
재고처럼 "지금 이 순간의 상태"가 중요한 자원에 더 어울린다.

---

## 4. Repeatable Read의 문제 Dirty Read

Repeatable Read의 가장 큰 특징은  
**트랜잭션 시작 시점의 스냅샷을 끝까지 유지**한다는 점이다.

이 특성은 다음과 같은 착각을 만든다.

> “결제 직전에 재고를 다시 조회했으니 안전하다”

### 상황 설정

- 상품 A 재고: 1개
- 격리수준: Repeatable Read

---

### 타임라인

### 사용자 A

```sql
BEGIN;
SELECT qty FROM stock WHERE product_id = 'A';
-- 결과: qty = 1 (snapshot)
```

---

### 사용자 B (거의 동시에)

```sql
BEGIN;
SELECT qty FROM stock WHERE product_id = 'A';
-- 결과: qty = 1 (같은 snapshot)
```

---

### A가 결제 직전 재고 재조회후 재고 차감

```sql
SELECT qty FROM stock WHERE product_id = 'A';
-- 결과: qty = 1 (snapshot)

-- 1이상이기때문에 UPDATE 실행
UPDATE stock
SET qty = qty - 1
WHERE product_id = 'A';

COMMIT;
-- 실제 재고: 0
```

---

### B가 결제 직전 재고 재조회후 재고 차감

```sql
SELECT qty FROM stock WHERE product_id = 'A';
-- 결과: qty = 1 (여전히 snapshot)

-- 1이상이기때문에 UPDATE 실행
UPDATE stock
SET qty = qty - 1 -- -1로 업데이트
WHERE product_id = 'A';

COMMIT;
```

개발자 입장에서는  
"결제 직전에 다시 조회했으니 안전하다"고 착각하기 쉽지만 재고는 -1개가 되었다..

---

## 5. 왜 이 문제는 Read Committed에서는 발생하지 않는가

같은 상황에서 Read Committed라면 다음과 같다.

```sql
SELECT qty FROM stock WHERE product_id = 'A';
-- 결과: qty = 0
```

최신 Commit을 반영하기때문에 재고차감 자체를 실행하지않는다.

Repeatable Read에서만 가능한  
"이미 소진된 재고를 남아 있다고 믿는 착각"이  
Read Committed에서는 구조적으로 발생하지 않는다.

---



## 5. Read Committed는 문제 없는가?

Read Committed는 매 쿼리마다 **최신 커밋 데이터**를 조회한다.  
따라서 위와 같은 “스냅샷 착각” 문제는 발생하지 않는다.

그러나 Read Committed 역시 **경쟁 조건 자체를 해결해주지는 않는다**.

### 5.1 만약 재고 직전 조회가 없다면?

#### 상황 설정

- 상품 A 재고: 1개
- 격리수준: Repeatable Read

---

#### 타임라인

#### 사용자 A

```sql
BEGIN;
SELECT qty FROM stock WHERE product_id = 'A';
-- 결과: qty = 1 (snapshot)
```

---

#### 사용자 B (거의 동시에)

```sql
BEGIN;
SELECT qty FROM stock WHERE product_id = 'A';
-- 결과: qty = 1 (같은 snapshot)
```

---

#### A가 결제 직전 재고 재조회후 재고 차감

```sql
UPDATE stock
SET qty = qty - 1
WHERE product_id = 'A';

COMMIT;
-- 실제 재고: 0, DB도 0으로 처리
```

---

#### B가 결제 직전 재고 재조회후 재고 차감

```sql
UPDATE stock
SET qty = qty - 1 -- -1로 업데이트, 실제 재고:0
WHERE product_id = 'A';

COMMIT;
```

재고는 0개지만 -1개로 입력되는 문제

---

### 5.2. Read Committed는 문제 없는가? - Lost Update

```sql
SELECT qty FROM stock WHERE product_id = 'A';
-- qty = 1
```

두 트랜잭션이 거의 동시에 위 쿼리를 실행하면  
둘 다 qty = 1을 볼 수 있다.

이후 각각 다음을 수행한다.

```sql
UPDATE stock SET qty = 0 WHERE product_id = 'A';
```

결과적으로:

- 주문은 2건 성공
- 재고는 0
- 초과 판매 발생

Read Committed는 Dirty Read를 막아줄 뿐,  
Lost Update를 막아주지 않는다.

Read Committed는 최신 데이터를 보여줄 뿐  
동시성 경쟁을 해결해주지는 않는다  
{: .notice--warning}

---

# 6. 해결
- update문에 조건문을 추가(`where qty > 0`)
- 낙관적 락을 적용(`where version = 1`)

## 한 문장 정리

재고와 같은 경쟁 자원은  
트랜잭션 격리수준보다  
**원자적인 UPDATE 설계가 더 중요하다.**

<span style = "font-size:1.5em;  font-weight: 700;">Repeatable Read에서 UPDATE는 스냅샷을 볼까?</span><br>
아니다.<br>
Repeatable Read에서도 다음과 같이 동작한다.<br>
SELECT → 스냅샷 기준 조회 (Snapshot Read)<br>
UPDATE / DELETE / SELECT FOR UPDATE → 최신 데이터 기준 (Current Read)<br>
즉, 문제의 원인은 UPDATE가 아니다.<br>
문제는 스냅샷 기반 SELECT 결과를 검증 수단으로 신뢰한 설계다.<br>
{: .notice--success}





