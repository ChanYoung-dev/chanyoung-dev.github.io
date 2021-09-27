---
permalink: /Python/CodingTEST/Level1/Merge_Two_Sorted_Lists
title: "Merge_Two_Sorted_Lists"
toc: true
categories:
  - Level1
comments: true
sidebar:
  - title: "Python"
  - nav: "python-menu"
---

# 두 개의 연결 리스트 병합하기

1. main을 정한다. 첫번째 원소끼리 비교하여 더 작은 원소를 갖은 연결리스트를 main으로 한다.

   여기서는 같기때문에 같은 경우에는 l1을 main으로 정한다.

![A](./img/a.png)

```python
# 첫번째 원소가 더 작은 것을 main으로 설정
main = (l2 if (l1.val > l2.val) else l1)
sub = (l1 if (l1.val > l2.val) else l2)
```

2. main의 다음 원소와 sub의 원소를 비교한후 main의 다음 원소가 크면 sub원소를 넣어준다.

![B](./img/b.png)

```python
if main.next.val > sub.val:
    # 연결하는 방법1
    sub.next, sub, main.next=main.next,sub.next,sub
    main = main.next
    '''
    연결하는 방법2
    new_node = ListNode(sub.val, main.next)
    main.next = new_node
    main = new_node
    sub = sub.next
    '''
else:
    main = main.next
```

3. main 이 끝까지 갔을 경우 sub의 나머지부분 전체를 main 뒤에 붙인다.

   ![C](./img/c.png)

   ```python
   if main.next == None:
       main.next = sub
       break
   ```

## 전체코드

```python
# 두 정렬 리스트의 병합
# https://leetcode.com/problems/Merge_Two_Sorted_Lists/
# page.213

# Definition for singly-linked list.
from typing import Optional, List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
def makeNode(lst):
    res = ptr = ListNode()
    for item in lst:
        ptr.next = ListNode(item)
        ptr = ptr.next
    return res.next
def WhoisNone(l1: Optional[ListNode], l2: Optional[ListNode]):
    if l1 == None and l2 == None:
        return None
    elif l1 == None and l2 != None:
        return l2
    elif l2 == None and l1 != None:
        return l1
class Solution:
    def mergeTwoLists(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # l1 = [] 이거나 l2 = [] 들어왔을시
        if l1 == None or l2 ==None:
            return WhoisNone(l1, l2)
        # 첫번째 원소가 더 작은 것을 main으로 설정
        main = (l2 if (l1.val > l2.val) else l1)
        sub = (l1 if (l1.val > l2.val) else l2)

        head = main

        while sub is not None:
            if main.next == None:
                main.next = sub
                break
            if main.next.val > sub.val:
                # 연결하는 방법1
                sub.next, sub, main.next=main.next,sub.next,sub
                main = main.next
                '''
                연결하는 방법2
                new_node = ListNode(sub.val, main.next)
                main.next = new_node
                main = new_node
                sub = sub.next
                '''
            else:
                main = main.next

        main = head
        return main
        ''' 모든 노드 출력
        while main is not None:
            print("main:", main.val)
            main = main.next
        '''



print(Solution().mergeTwoLists(l1 = makeNode([1,2,4]), l2=makeNode([1,3,4,5,6,7])))
```
