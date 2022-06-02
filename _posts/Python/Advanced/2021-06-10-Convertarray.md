---
permalink: /Python/Advanced/ConvertArray/
title: "Python에서 N차원 배열을 1차원 배열로 만들기"
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
list_name: python심화
sexy: 1
main: "Advanced"
---
**sum( 배열명, [])**  

```python
sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
print(sum(sizes, [])) # [60, 50, 30, 70, 60, 30, 80, 40]
```