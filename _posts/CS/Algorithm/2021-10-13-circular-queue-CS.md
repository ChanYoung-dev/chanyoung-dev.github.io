---
permalink: /CS/Algorithm/CircularQue/
title: "์ํํ"
toc: true
categories:
  - CS๐ฐAlgorithm
  - Python๐ธCodingTest
comments: true
sidebar:
  - title: "CS๐ฐ"
  - nav: "CS-menu"
tags:
  - Level0
  - Algorithm
sexy: 1
main: "Algorithm"
header:
  teaser: /assets/images/python/circleque1.png
  overlay_image: /assets/images/python/circleque1.png
  overlay_filter: 0.5
excerpt: ํ์ด์ฌ์ผ๋ก ์ํ ํ ๊ตฌํํ๊ธฐ
---

# ํ์ด์ฌ์ผ๋ก ์ํ ํ ๊ตฌํํ๊ธฐ

๋ฆฌํธ์ฝ๋์ ์ํํ ๊ตฌํ ๋ฌธ์ ์ด๋ค.
[leetcode ์ํํ ๋ฌธ์ โ๏ธ](https://leetcode.com/problems/design-circular-queue/)

## 1 . ๊ธฐ๋ณธ์ ์ผ๋ก ํฌํฌ์ธํฐ(front, rear)๋ก ๊ตฌํํ๋ค.  
๋ฐฐ์ด ํ์ 0์ด ๋ค์ด๊ฐ ๊ฒฝ์ฐ๋ฅผ ๋๋นํ์ฌ `None`์ผ๋ก ๊ตฌํํ๋ค.
```python
    def __init__(self, k: int):
        self.front = 0
        self.rear = 0
        self.q = [None] * k
        self.maxlen = k
```

<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque1.png"></p>


## 2 . enQueue(1)  
๊ฐ์ ์ฝ์ํ๋ค. rear๊ฐ ๊ฐ๋ฅดํค๋ ๊ณณ์ด ์๋ฌด๊ฒ๋ ์์ผ๋ฉด rear๊ฐ ๊ฐ๋ฆฌํค๋ ๊ณณ์ ๊ฐ์ ์ฝ์ํ๊ณ  rear๋ ๋ค์ ์ธ๋ฑ์ค๋ก ๋์ด๊ฐ๋ค.  
```python
    def enQueue(self, value: int) -> bool:
        if self.q[self.rear] is None:
            self.q[self.rear] = value
            self.rear = (self.rear + 1) % self.maxlen
            return True
        else:
            return False
```
์ํ ํ์ด๊ธฐ๋๋ฌธ์ rearํฌ์ธํฐ๊ฐ ๋ค์์ธ๋ฑ์ค๋ก ๋์ด๊ฐ๋ ์ํ์ผ๋ก ์ธ๋ฑ์ค๊ฐ ๋๊ธฐ ์ํด
```python
self.rear = (self.rear + 1) % self.maxlen
```
์ถ๊ฐํด์ค๋ค.

<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque2.png"></p>
<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque3.png"></p>

## 3 . deQueue()
๊ฐ์ ์ญ์ ํ๋ค. front๊ฐ ๊ฐ๋ฅดํค๋ ๊ณณ์ ๊ฐ์ ์ญ์ ํ๊ณ  ๋ค์ ์ธ๋ฑ์ค๋ก ๋์ด๊ฐ๋ค.
```python
    def deQueue(self) -> bool:
        if self.q[self.front] is not None:
            self.q[self.front] = None
            self.front = (self.front + 1) % self.maxlen
            return True
        else:
            return False
```
๋ง์ฐฌ๊ฐ์ง๋ก ์ํ ํ์ด๊ธฐ๋๋ฌธ์ frontํฌ์ธํฐ๊ฐ ๋ค์์ธ๋ฑ์ค๋ก ๋์ด๊ฐ๋ ์ํ์ผ๋ก ์ธ๋ฑ์ค๊ฐ ๋๊ธฐ ์ํด
```python
self.front = (self.front + 1) % self.maxlen
```
์ถ๊ฐํด์ค๋ค.
<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque4.png"></p>

## 4 . Front(), Rear() 
๊ฐ์ ์กฐํํ๋ค.  
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
    Rear()์ ๊ฒฝ์ฐ rear์ ํฌ์ธํฐ๊ฐ ์ธ๋ฑ์ค**0**์ ๊ฐ๋ฅดํฌ๋ **-1**์ ํ๋ฉด ์ธ๋ฑ์ค๊ฐ **-1**์ด ๋์ด ์ค๋ฅ๊ฐ ๋  ๊ฒ ๊ฐ๋ค  
    ํ์ง๋ง ํ์ด์ฌ์ `list[-1]`์ด ๊ฐ๋ฅํ๊ธฐ ๋๋ฌธ์ ์ค๋ฅ๊ฐ ๋์ง ์๋๋ค.  


    ```python
    if self.q[ (self.rear + self.maxlen-1) % self.maxlen ] is not None:
                return self.q[ (self.rear + self.maxlen-1) % self.maxlen ]
    ```
    -1์ธ๋ฑ์ค๋ฅผ ์ง์ํ์ง ์๋ ํจ์๋ ์์ ๊ฐ์ ๋ฐฉ์์ผ๋ก ์ ์ธํ๋ฉด ๋๋ค.  
    rear๊ฐ 0์ผ๊ฒฝ์ฐ `0 + maxlen(์ฌ๊ธฐ์  5) -1` ์ ํ๋ฏ๋ก 4๊ฐ ๋๋ค.  

## 5 . empty()์ full()
๋๋ค ์กฐ๊ฑด์ ํฌ์ธํฐ์ ์ธ๋ฑ์ค ์์น๊ฐ ์๋ก ๊ฐ์์ผํ๋ค.  
<p align="center"><img src="{{site.baseurl}}/assets/images/python/circleque5.png"></p>

- isEmpty()
```python
    if self.front == self.rear:
```

- isFull()
```python
    if self.front == self.rear:
```
ํ์ง๋ง   
empty()๋ ํฌ์ธํฐ๊ฐ ๊ฐ๋ฅดํค๋ ๊ณณ์ ๊ฐ์ด ์๊ณ   
full()์ ์๋ค.  
- isEmpty()
```python
    if self.front == self.rear and self.q[self.front] is None:
```
- isFull()
```python
    if self.front == self.rear and self.q[self.front] is not None:
```

- isEmpty()์ isFull()์ ์ฒด์ฝ๋
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

### ์ ์ฒด์ฝ๋
```python
# ์ํ ํ ๋์์ธ
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
