---
permalink: /Python/Advanced/python-tip/
title: "코딩테스트 파이썬 Tip"
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
excerpt: 코딩테스트에 유용한 파이썬 팁
---

<span style = "font-size:1.5em;  font-weight: 700;">파이썬을 이용한 코딩테스트에서 유용한 팁</span><br>
{: .notice--primary}

# 2차원 배열 선언
{% highlight python linenos %}
def double_array(M, N):
    graph = [[0] * N for _ in range(M)]
    return graph

visited= double_array(4,4)
visited[0][0]=1
print(visited)
{% endhighlight %}

## 출력
`[[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]`

---

# 특정 값이 포함되지 않은 값만을 저장
{% highlight python linenos %}
def remove_value(a, remove_set):
    result = [i for i in a if i not in remove_set]
    return result

result = remove_value([1, 2, 3, 4, 5, 5], {3, 5})
print(result)
{% endhighlight %}

## 출력 
`[1, 2, 4]`

---

# 문자열을 수식으로
{% highlight python linenos %}
print(eval("(3 + 6) * 6"))
{% endhighlight %}

## 출력
`54`

---

# 정렬된 배열에서 특정한 원소 값을 넣을 인덱스 찾기

{% highlight python linenos %}
from bisect import bisect_left, bisect_right

print(bisect_left([10, 20, 30, 40, 80], 25))  # 2
print(bisect_right([10, 20, 30, 40, 80], 40)) # 4
{% endhighlight %}

<abbr title="리스트, 튜플 등" id="">배열</abbr>은 정렬이 되있어야한다  
{: .notice--warning}

**left, right**는 특정한 원소값을 추가할때 비교원자의 왼쪽에 넣을지, 오른쪽에 넣을지를 정합니다

{% highlight python linenos %}
print(bisect_left([1, 2, 3, 3, 5], 3)) # 2
print(bisect_right([1, 2, 3, 3, 5], 3)) # 4
{% endhighlight %}

# bisect응용: 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수
{% highlight python linenos %}
def count_by_range(a, left_value, right_value):
    right_index = bisect_right(a, right_value)
    left_index = bisect_left(a, left_value)
    return right_index - left_index

# 값이 4인 데이터 개수 출력
print(count_by_range([1, 2, 3, 3, 3, 3, 4, 4, 8, 9], 4, 4)) # 2
# 값이 [-1, 3] 범위에 있는 데이터 개수 출력
print(count_by_range([1, 2, 3, 3, 3, 3, 4, 4, 8, 9], -1, 3)) # 6
{% endhighlight %}

---

# 구간 합 계산
{% highlight python linenos %}
def sum_index(n, data):
    # 접두사 합(Prefix Sum) 배열 계산
    sum_value = 0
    prefix_sum = [0]
    for i in data:
        sum_value += i
        prefix_sum.append(sum_value)

    # 구간 합 계산(세 번째부터 네 번째 수까지)
    left = 3
    right = 4
    return prefix_sum[right] - prefix_sum[left - 1]

print(sum_index(5, [10, 20, 30, 40, 50]))
{% endhighlight %}

## 출력
`70`