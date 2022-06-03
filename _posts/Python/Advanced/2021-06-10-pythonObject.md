---
permalink: /Python/Advanced/Object/
title: "Python에서의 불변객체와 가변객체"
toc: true
categories:
  - Python🐸Advanced
comments: true
sidebar:
  - title: "Python🐸"
  - nav: "python-menu"
tags: 
  - python심화
  - Advanced
  - Tip
list_name: python심화
sexy: 1
main: "Advanced"
---
참조와 할당 비교를 해보자  
- # 불변객체란?

우리가 C언어에선
```c
int a = 10;
int b = a;
b = 7;
printf("%d,%d", a, b);
```
위와 같은 C언어로는 b가 7이므로 a도 7이 된다. b와 a가 서로 참조하기때문이다.  

---

하지만 불변객체는 그 값이 변하지 않는다.
```python
a = 10
b = a #b는 a를 참조한다.
print(id(10), id(a), id(b)) 
# 4393858752, 4393858752, 4393858752
b = 7
print(a, b)
# 10, 7  # 불변객체라 변하지않는다.
```
불변객체이기때문에 a가 값이 변하지 않는다. 문자열 str도 마찬가지이다.  

- # 가변객체란?

반면 가변객체란 값이 바뀔수 있으며, 이 말은 다른 변수가 참조하고 있을 때 그 변수의 값 또한 변경된다.  
```python
a = [1, 2, 3, 4, 5]
b = a # b는 a를 참조한다.
print(b) # [1, 2, 3, 4, 5]
a[2] = 4
print(a, b) # [1, 2, 4, 4, 5] [1, 2, 4, 4, 5]
```

- # 참조에 의한 복사와 값에 의한 복사

가변객체는 변할 수 있기 때문에, 참조당한 값이 변하면 그 참조한 값도 변한다.
```python
  a=[4,7]
  b=a
  print(a, b) # [4, 7] [4, 7]
  a[1]=8
  print(a, b) # [4, 8] [4, 8]
```

---

하지만 값에 의한 복사를 할 경우, 참조가 아닌 값 복사이기때문에 변하지 않는다. *즉, 불변객체와 비슷한 느낌이라구 보면 된다.*
```python
  a=[4,7]
  b=a[:] #값에 의한 복사
  print(a,b) # [4, 7] [4, 7]
  a[1]=8
  print(a, b) # [4, 8] [4, 7]
```






  







# 1. 불변/가변 객체

## 1. 불변과 가변의 차이

- ### 같은 데이터가 주었을때

  - #### 가변객체 : 같은 데이터 선언

  ```python
  print("s1:", s) # ['h', 'e', 'l', 'l', 'o']
  print("s1:", id(s)) # 4302910720

  s = ["h", "e", "l", "l", "o"]
  print("s2", s) # ['h', 'e', 'l', 'l', 'o']
  print("s2:", id(s))  # 4303608160

  s = ["h", "e", "l", "l", "o"]
  print("s3:", s)  # ['h', 'e', 'l', 'l', 'o']
  print("s3:", id(s)) # s: 4389130480
  
  ```

  같은 값이어도 전부다 다르다

  - ### 불변객체 : 같은 데이터 선언
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
    #num2: 4541833072
    ```
    - #### 문자열
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
  s[3] = "e"
  print("s:", s)
  print(id(s))
  # TypeError: 'str' object does not support item assignment
  ```
  오류가 뜬다

## 2. 가변객체와 불변객체의 공통점

- ### 가변객체 = 가변객체

```python
s = ["h", "e", "l", "l", "o"]
print("s:", id(s)) # s: 4470591104
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
