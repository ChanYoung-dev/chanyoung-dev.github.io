---
permalink: /Python/Basic/Object
title: "Python/Basic/Object"
toc: true
categories:
  - Python🐸Basic
comments: true
sidebar:
  - title: "Python🐸"
  - nav: "python-menu"
---

# 1. 불변/가변 객체

## 1. 불변과 가변의 차이

- ### 같은 데이터가 주었을때

  - #### 가변객체 같은 데이터 선언

  ```python
  print("s1:", s) # ['h', 'e', 'l', 'l', 'o']
  print("s1:", id(s)) # 4302910720

  s = ["h", "e", "l", "l", "o"]
  print("s2", s) # ['h', 'e', 'l', 'l', 'o']
  print("s2:", id(s))  # 4303608160

  s = ["h", "e", "l", "l", "o"]
  print("s3:", s)  # ['h', 'e', 'l', 'l', 'o']
  print("s3:", id(s)) # s: 4389130480
  # 4303818656
  ```

  같은 값이어도 전부다 다르다

  - ### 불변객체 같은 데이터 선언
    - #### 숫자
    ```python
    num = 4
    print("num:", id(num))
    #num: 4541833072
    num = 4
    print("num:", id(num))
    #num: 4541833072
    num2 = 4
    print("num2:", id(num2))
    #num2: 4509069168
    ```
    - ####문자열
    ```python
    str_num = '123'
    print("str_num:", id(str_num))
    # str_num: 4516378672
    str_num = '123'
    print("str_num:", id(str_num))
    # str_num: 4516378672
    str_num2 = '123'
    print("str_num2:", id(str_num2))
    # str_num: 4516378672
    ```
    같은값이면 주소가 전부 같다.

- ### 객체의 내부조작
  - #### 가변객체의 내부조작
  ```python
  s = ["h", "e", "l", "l", "o"]
  print(id(s))
  # s의 id :4407217216
  s[0] = "e"
  print("s:", s)
  #s: ['e', 'e', 'l', 'l', 'o']
  print(id(s))
  # s의 id :4407217216
  ```
  - #### 불변객체의 내부조작
  ```python
  s = "hellow"
  print(id(s))
  #s[3] = "e"
  print("s:", s)
  print(id(s))
  ```
  오류가 뜬다

## 2. 가변객체와 불변객체의 공통점

- ### 가변객체 = 가변객체

```python
s = ["h", "e", "l", "l", "o"]
print("s:", id(s))
str_list = ["a", "b", "c"]
print("str_list:", id(str_list)) # str_list: 4388907600
s = str_list
print("copy_str_list:", id(str_list)) # copy_str_list: 4388907600
print("copy_s: ", id(s)) # copy_s:  4388907600
```

- ### 불변객체 = 불변객체

```python
num = 3
print("num:", num)
print("num(id):", id(num))
#num: 3
#num(id): 4405852528
num2 = 1
print("num2:", num2)
print("num2(id):", id(num2))
#num2: 1
#num2(id): 4405852464

num2 = num
print("num2:", num2)
print("num2(id):", id(num2))
#num2: 3
#num2(id): 4405852528
```
