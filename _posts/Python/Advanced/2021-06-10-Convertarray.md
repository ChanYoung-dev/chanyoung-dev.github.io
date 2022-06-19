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
  - Tip
list_name: python심화
sexy: 1
main: "Advanced"
header:
  teaser: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_image: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_filter: 0.5
excerpt: sum( 배열명, [])
---
**sum( 배열명, [])**  

```python
sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
print(sum(sizes, [])) # [60, 50, 30, 70, 60, 30, 80, 40]
```
