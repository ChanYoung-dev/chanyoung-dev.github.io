---
permalink: /CodingTest/Probelm/Produc_of_Array_Except_Self/
title: "자신을 제외한 배열의 곱"
toc: true
categories:
  - CodingTest🦁Problem&Solution
comments: true
sidebar:
  - title: "CodingTest🦁"
  - nav: "CodingTest-menu"
tags:
  - Problem&Solution
  - Level2
sexy: 1
main: "Problem&Solution"
header:
  teaser: /assets/images/python/1.png
  overlay_image: /assets/images/python/1.png
  overlay_filter: 0.5
excerpt: 자신을 제외한 배열의 곱
---

## 자신을 제외한 배열의 곱

- https://leetcode.com/problems/Product_of_Array_Except_Self/

- page.193

설명이 부족해 이해가 잘 가지 않았다.

원리를 그림으로 표현하면 이렇다.

왼쪽으로 마지막원소를 제외한 원소들을 곱해주고 (1번과정, p1)

오른쪽으로 는 첫번째원소를 제외한 원소들을 곱해준다. (2번과정, p2)

![1]({{site.baseurl}}/assets/images/python/1.png)

p1과 p2를 곱해주면 결국 각 원소가 하나씩 빠진채로 곱해진 배열이 된다.(3번과정, p1\*p2)

![1]({{site.baseurl}}/assets/images/python/2.png)

코드로는

```
for:

	1번과정

for:

	3번과정

	2번과정
```

왜냐하면 3번과 2번은 방향이 같기 때문이다.

### 최종코드

```python
from typing import List


class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        p1 = 1
        p1_list = []
        for i in range(0, len(nums)):
            p1_list.append(p1)
            p1 *= nums[i]
        p2 = 1
        for i in range(len(nums)-1, 0 -1, -1):
            print("i:", i)
            p1_list[i] = p1_list[i] * p2
            # 여기서 왼쪽의 p1_list가 최종결과list다.
            # 즉 p1 * p2이다.
            p2 *= nums[i]
        return p1_list

a = Solution()
print(a.productExceptSelf([1,2,3,4]))
```
