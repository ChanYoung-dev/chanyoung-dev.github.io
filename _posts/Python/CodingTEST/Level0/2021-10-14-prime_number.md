---
permalink: /Python/CodingTEST/Level0/prime_number/
title: "소수 만들기"
toc: true
categories:
  - Python🐸CodingTest
comments: true
sidebar:
  - title: "Python🐸"
  - nav: "python-menu"
tags:
  - Level0
---
for else 문 / combinations활용

[프로그래머스 - 소수구하기 ↗️](https://programmers.co.kr/learn/courses/30/lessons/12977?language=python3#)

## 숫자 세개 조합하기
- 라이브러리를 사용하지 않을 경우
```python
  for i in range(len(nums)-2):
        for j in range(i+1,len(nums)-1):
            for k in range(j+1,len(nums)):
                answer_list.append(nums[i]+nums[j]+nums[k])
```

- 라이브러리를 사용할 경우
`combinations`활용
```python
  from itertools import combinations
      for a in combinations(nums, 3):
          answer_list.append(sum(a))
```

## 소수구하기
`for else`를 활용한다.  
`answer`는 소수갯수 카운트이다.
```python
for num in answer_list:
        for i in range(2, (num//2)+1):
            if not num % i:
                break
        else:
            answer += 1
```

## 전체코드

```python
def solution(nums):
    answer = 0

    answer_list=list()

    for i in range(len(nums)-2):
        for j in range(i+1,len(nums)-1):
            for k in range(j+1,len(nums)):
                answer_list.append(nums[i]+nums[j]+nums[k])
    '''
    from itertools import combinations
    for a in combinations(nums, 3):
        answer_list.append(sum(a))
    '''
    for num in answer_list:
        for i in range(2, (num//2)+1):
            if not num % i:
                break
        else:
            answer += 1
    return answer

```