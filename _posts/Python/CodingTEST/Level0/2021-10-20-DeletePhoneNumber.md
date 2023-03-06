---
permalink: /etc/CodingTest/DeletePhoneNumber/
title: "핸드폰 번호 가리기"
toc: true
categories:
  - etc🐵CodingTest
comments: true
sidebar:
  - title: "etc🐵"
  - nav: "etc-menu"
tags:
  - CodingTest
  - Level0
  - 정규표현식
list_name: 정규표현식
sexy: 1
main: "CodingTest"
header:
  teaser: https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfHx8fDE2NDczMjg1NzY&ixlib=rb-1.2.1&q=80&w=2000
  overlay_image: https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfHx8fDE2NDczMjg1NzY&ixlib=rb-1.2.1&q=80&w=2000
  overlay_filter: 0.5
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