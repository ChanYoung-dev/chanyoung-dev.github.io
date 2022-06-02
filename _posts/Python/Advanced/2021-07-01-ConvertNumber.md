---
permalink: /Python/Advanced/ConvertNumber/
title: "N진법 변환"
toc: true
categories:
  - Python🐸Advanced
comments: true
sidebar:
  - title: "Python🐸"
  - nav: "python-menu"
excerpt: >
  "N진법 변환"
tags: 
  - python심화
  - Advanced
list_name: python심화
sexy: 1
main: "Advanced"
---

## N진법 선언

```python
    a = 10
    print(type(a), a) # <class 'int'> 10
    a = 0b10
    print(type(a), a) # <class 'int'> 2
    a = 0o10
    print(type(a), a) # <class 'int'> 8
    a = 0x10
    print(type(a), a) # <class 'int'> 16
```

## 10진법 -> 2, 8, 16 진법 변환

```python
    i = 111
    print("i = ", i) # i =  111
    print("i = ", bin(i)) # i =  0b1101111
    print("i = ", int(i)) # i =  111
    print("i = ", oct(i)) # i =  0o157
    print("i = ", hex(i)) # i =  0x6f
    return a
```
>진법 표시를 지우려면 `print("i = ", bin(i))` 를 사용한다.

## N진법 -> 10진법
```python
    i = "111"
    print("i = ", int(i))  # 111
    print("i = ", int(i, 2))  # 7
    print("i = ", int(i, 8))  # 73
    print("i = ", int(i, 16))  # 273
    print("i = ", int(i, 5))  # 31
```

## 10진법 -> N진법 변환
```python

def solution(n, q):
    result = ''
    while n > 0:
        n, part = divmod(n, 3)
        result = result + str(part)
    return result

```

## N진법 -> N진법
```python
print(solution(int('111',16),4))#16진수 111을 4진법으로 바꾸기
```