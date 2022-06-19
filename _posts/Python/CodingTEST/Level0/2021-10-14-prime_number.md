---
permalink: /CodingTest/Problem/prime_number/
title: "소수 만들기"
toc: true
categories:
  - CodingTest🦁Problem&Solution
comments: true
sidebar:
  - title: "CodingTest🦁"
  - nav: "CodingTest-menu"
tags:
  - Problem&Solution
  - Level0
sexy: 1
main: "Problem&Solution"
header:
  teaser: https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfHx8fDE2NDczMjg1NzY&ixlib=rb-1.2.1&q=80&w=2000
  overlay_image: https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fGNvZGluZ3xlbnwwfHx8fDE2NDczMjg1NzY&ixlib=rb-1.2.1&q=80&w=2000
  overlay_filter: 0.5
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