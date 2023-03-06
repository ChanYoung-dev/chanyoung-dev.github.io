---
permalink: /Database/SQL/DeleteWithSubQuery/
title: "서브쿼리와 delete"
toc: true
categories:
  - Database🦁SQL
comments: true
sidebar:
  - title: "Database🦁"
  - nav: "Database-menu"
excerpt: >
  leetcode - Delete Duplicate Emails
tags:
  - SQL
sexy: 1
main: "SQL"
header:
  teaser: /assets/images/DB/common.png
  overlay_image: /assets/images/DB/common.png
  overlay_filter: 0.5
---
오라클을 이용한 [Delete Duplicate Emails↗️](https://leetcode.com/problems/delete-duplicate-emails/) 문제풀이  


GROUP BY의 개념도 알아보자
{: .notice--info}

## 문제
```
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
Output: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
```

## 해설
두가지방법이 있는데 그 중 첫번째는 서브쿼리를 이용하여 구하여 푸는 방법이다

## 서브쿼리
```sql
SELECT
    EMAIL
    , MIN(ID) AS MIN_ID
FROM
    PERSON
GROUP BY
    EMAIL
```
`group by`를 하면
```
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
| 4  | bob@example.com  |
| 5  | hyun@example.com |
+----+------------------+
Output: 
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 3  | john@example.com |
+----+------------------+
+----+------------------+
| id | email            |
+----+------------------+
| 2  | bob@example.com |
| 4  | bob@example.com |
+----+------------------+
+----+------------------+
| id | email            |
+----+------------------+
| 5  | hyun@example.com |
+----+------------------+
```
그룹화가 된 각 테이블에 대하여 각 테이블마다 실행한다. 즉  
```
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 3  | john@example.com |
+----+------------------+
```
에 대하여만 실행하고 이것을 forEach로 실행하여 값들을 전부 가져온다고 생각하면 될듯

```
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 5  | hyun@example.com |
+----+------------------+
```


## 2. 서브 쿼리 이용하기
```sql
SELECT SUB.MIN_ID FROM ( 
    SELECT
        EMAIL
        , MIN(ID) AS MIN_ID
    FROM
        PERSON
    GROUP BY
        EMAIL) SUB
```

## 3. 정답
```sql
DELETE FROM PERSON
WHERE
    ID NOT IN (
        SELECT SUB.MIN_ID FROM ( 
            SELECT
                EMAIL
                , MIN(ID) AS MIN_ID
            FROM
                PERSON
            GROUP BY
                EMAIL) SUB
                )
```