---
permalink: /CS/Algorithm/CircularQue/
title: "원형큐"
toc: true
categories:
  - CS🐰Algorithm
  - Python🐸CodingTest
comments: true
sidebar:
  - title: "CS🐰"
  - nav: "CS-menu"
tags:
  - Level0
  - Algorithm
sexy: 1
main: "Algorithm"
---

# 파이썬으로 원형 큐 구현하기

리트코드의 원형큐 구현 문제이다.
[leetcode 원형큐 문제↗️](https://leetcode.com/problems/design-circular-queue/)

## 1 . 기본적으로 투포인터(front, rear)로 구현한다.  
배열 큐에 0이 들어갈 경우를 대비하여 `None`으로 구현한다.
```python
    def __init__(self, k: int):
        self.front = 0
        self.rear = 0
        self.q = [None] * k
        self.maxlen = k
```

<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque1.png"></p>


## 2 . enQueue(1)  
값을 삽입한다. rear가 가르키는 곳이 아무것도 없으면 rear가 가리키는 곳에 값을 삽입하고 rear는 다음 인덱스로 넘어간다.  
```python
    def enQueue(self, value: int) -> bool:
        if self.q[self.rear] is None:
            self.q[self.rear] = value
            self.rear = (self.rear + 1) % self.maxlen
            return True
        else:
            return False
```
원형 큐이기때문에 rear포인터가 다음인덱스로 넘어갈때 원형으로 인덱스가 돌기 위해
```python
self.rear = (self.rear + 1) % self.maxlen
```
추가해준다.

<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque2.png"></p>
<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque3.png"></p>

## 3 . deQueue()
값을 삭제한다. front가 가르키는 곳의 값을 삭제하고 다음 인덱스로 넘어간다.
```python
    def deQueue(self) -> bool:
        if self.q[self.front] is not None:
            self.q[self.front] = None
            self.front = (self.front + 1) % self.maxlen
            return True
        else:
            return False
```
마찬가지로 원형 큐이기때문에 front포인터가 다음인덱스로 넘어갈때 원형으로 인덱스가 돌기 위해
```python
self.front = (self.front + 1) % self.maxlen
```
추가해준다.
<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque4.png"></p>

## 4 . Front(), Rear() 
값을 조회한다.  
```python
    def Front(self) -> int:
        if self.q[self.front] is not None:
            return self.q[self.front]
        else:
            return -1
    def Rear(self) -> int:
        if self.q[ (self.rear-1) % self.maxlen ] is not None:
            return self.q[ (self.rear-1) % self.maxlen ]
        else:
            return -1
```




- ### list[-1]  
    Rear()의 경우 rear의 포인터가 인덱스**0**을 가르킬때 **-1**을 하면 인덱스가 **-1**이 되어 오류가 날 것 같다  
    하지만 파이썬은 `list[-1]`이 가능하기 때문에 오류가 나지 않는다.  


    ```python
    if self.q[ (self.rear + self.maxlen-1) % self.maxlen ] is not None:
                return self.q[ (self.rear + self.maxlen-1) % self.maxlen ]
    ```
    -1인덱스를 지원하지 않는 함수는 위와 같은 방식으로 선언하면 된다.  
    rear가 0일경우 `0 + maxlen(여기선 5) -1` 을 하므로 4가 된다.  

## 5 . empty()와 full()
둘다 조건은 포인터의 인덱스 위치가 서로 같아야한다.  
<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque5.png"></p>

- isEmpty()
```python
    if self.front == self.rear:
```

- isFull()
```python
    if self.front == self.rear:
```
하지만   
empty()는 포인터가 가르키는 곳에 값이 없고  
full()은 있다.  
- isEmpty()
```python
    if self.front == self.rear and self.q[self.front] is None:
```
- isFull()
```python
    if self.front == self.rear and self.q[self.front] is not None:
```

- isEmpty()와 isFull()전체코드
```python
    def isEmpty(self) -> bool:
        if self.front == self.rear and self.q[self.front] is None:
            return True
        else:
            return False
    def isFull(self) -> bool:
        if self.front == self.rear and self.q[self.front] is not None:
            return True
        else:
            return False
```

### 전체코드
```python
# 원형 큐 디자인
# https://leetcode.com/problems/design-circular-queue/
# page.259


class MyCircularQueue:
    def __init__(self, k: int):
        self.front = 0
        self.rear = 0
        self.q = [None] * k
        self.maxlen = k

    def enQueue(self, value: int) -> bool:
        if self.q[self.rear] is None:
            self.q[self.rear] = value
            self.rear = (self.rear + 1) % self.maxlen
            return True
        else:
            return False

    def deQueue(self) -> bool:
        if self.q[self.front] is not None:
            self.q[self.front] = None
            self.front = (self.front + 1) % self.maxlen
            return True
        else:
            return False


    def Front(self) -> int:

        if self.q[self.front] is not None:
            return self.q[self.front]

        else:
            return -1
    def Rear(self) -> int:
        if self.q[ (self.rear + self.maxlen-1) % self.maxlen ] is not None:
            return self.q[ (self.rear + self.maxlen-1) % self.maxlen ]
        else:
            return -1
    def isEmpty(self) -> bool:
        if self.front == self.rear and self.q[self.front] is None:
            return True
        else:
            return False
    def isFull(self) -> bool:
        if self.front == self.rear and self.q[self.front] is not None:
            return True
        else:
            return False
```
