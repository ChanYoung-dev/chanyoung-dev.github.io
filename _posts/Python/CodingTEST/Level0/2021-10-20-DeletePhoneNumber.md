---
permalink: /Python/CodingTEST/Level0/DeletePhoneNumber/
title: "핸드폰 번호 가리기"
toc: true
categories:
  - Python🐸CodingTest
comments: true
sidebar:
  - title: "Python🐸"
  - nav: "python-menu"
tags:
  - CodingTest
  - Level0
  - 정규표현식
list_name: 정규표현식
---
정규표현식을 이용하여 [프로그래머스-핸드폰 번호가리기↗️](https://programmers.co.kr/learn/courses/30/lessons/12948?language=python3) 풀이

## 1 . 긍정탐색 사용
```python
  return re.sub('.+(?=.{4}\Z)', '*'*(len(phone_number)-4),phone_number)
```

## 2 . 부정탐색 사용
```python
return re.sub('.(?!.{0,3}\Z)', '*',phone_number)
```

```
긍정 전방탐색 (?=<pattern>)  
긍정 후방탐색 (?<=<pattern>)  
부정 전방탐색 (?!<pattern>)  
부정 후방탐색 (?<!pattern>)  
```

[더 많은 탐색에 관한 내용↗️](https://chanyoung-dev.github.io/Python/Basic/String/#11-%ED%83%90%EC%83%89)