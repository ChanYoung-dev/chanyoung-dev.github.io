---
permalink: /Python/CodingTEST/Level1/How_to_use_linked_list_in_editor
title: "How_to_use_linked_list_in_editor"
toc: true
categories:
  - Level1
comments: true
sidebar:
  - title: "Python"
  - nav: "python-menu"
---

- ## 리트코드(LeetCode)의 연결리스트 코딩을 에디터에서 해보자(How to use linked list in editor)

리트코드 컴파일러 내부에서는 연결리스트 처리하는 함수들이 있다.

디버깅을 위해 에디터를 사용하려는데 에디터에서는 위 함수가 없으므로 직접 코딩하였다.

다음 구문들을 추가하면된다.

우선 리트코드에서 주석처리가 되어있는 코드를 붙이고

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```

이 클래스는 단순히 연결리스트에 쓰이는 노드에 관한 정의이다.

노드를 만들고 노드끼리 이어주는 코드

```python
def makeNode(lst):
    res = ptr = ListNode()
    for item in lst:
        ptr.next = ListNode(item)
        ptr = ptr.next
    return res.next
```

위 함수를 이용하여 메인 함수에 파라미터로 넣어준다.

```python
Solution().mainfunction(head = makeNode([1,2,1])
```

예를 들어

[팰린드롬 연결 리스트](https://leetcode.com/problems/palindrome-linked-list/) 를 코딩한다했을때.

전체 코드는

```python
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

class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        node_list : List = []
        if not head:
            return True

        node = head

        while node is not None:
            node_list.append(node.val)
            node = node.next
        while len(node_list) > 1:
            if node_list.pop(0) != node_list.pop():
                return False
        return True

print(Solution().isPalindrome(head = makeNode([1,2 ])))
```

끝
