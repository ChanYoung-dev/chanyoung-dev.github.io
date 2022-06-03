---
permalink: /Python/Advanced/AddingMartrix/
title: "zip과 행렬의 덧셈"
toc: true
categories:
  - Python🐸Advanced
comments: true
sidebar:
  - title: "Python🐸"
  - nav: "Python🐸-menu"
tags:
  - Advanced
  - zip
  - Problem&Solution
sexy: 1
main: "Advanced"
---
한줄for문 / zip사용

- [프로그래머스 - 행렬의 덧셈 ↗️](https://programmers.co.kr/learn/courses/30/lessons/12950)

## 1. 한줄 for문 방법
```python
    for n in range(len(arr1)):
        answer.append([(arr1[n][index] + arr2[n][index]) for index in range(len(arr1[0]))])
    return answer
```


## `zip`활용 방법

- [`zip`의 기본예제](https://www.daleseo.com/python-zip/) [^1]
```python
>>> numbers = [1, 2, 3]
>>> letters = ["A", "B", "C"]
>>> for pair in zip(numbers, letters):
...     print(pair)
...
(1, 'A')
(2, 'B')
(3, 'C')
```

- - -
- `zip`을 이용하여 풀기

    ```python
    def sumMatrix(A,B):
        answer = [[c + d for c, d in zip(a, b)] for a, b in zip(A,B)]
        return answer

    print(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))
    ```

    - 해석  
    `[[1, 2], [2, 3]], [[3, 4], [5, 6]]` 가 주어질 경우,  

    ```python
    for a, b in zip(A,B):
        print(a, b)

    [1, 2] [3, 4]
    [2, 3] [5, 6]
    ```


    `[[c + d for c, d in zip(a, b)] for a, b in zip(A,B)]`에서   
    `[for c, d in zip(a, b)]`는  

    ```python
    1 3
    2 4
    ```

    를 의미한다.

    [^1]: https://www.daleseo.com/python-zip/ 참조

