---
permalink: /Python/Basic/DataStructure
title: "Python/Basic/DataStructure"
toc: true
categories:
  - DataStructure
comments: true
sidebar:
  - title: "Python"
  - nav: "python-menu"
---

# 자료구조 기본

## 1. 리스트

> list는 자료들의 모임입니다.  
> 입력된 순서가 유지 됩니다.  
> list()생성자나 []로 리스트를 만듭니다.  
> set과 다르게 1개짜리 리스트도 만들 수 있습니다.  
> 어떤 자료 형도 저장이 가능합니다.

- ### 선언

```python
->지하철 칸별로 10명, 20명, 30명
subway = [10, 20, 30]
print(subway)
#[10, 20, 30]

subway = ["유재석", "조세호", "박명수"]

->조세호가 몇번째에 있는가?
print(subway.index("조세호"))
# 1
```

- ### 기능
  > len() 함수를 이용하여 요소 개수를 얻을 수 있습니다.  
  > [n:m] 값을 이용하여 접근이 가능합니다.  
  > append() 메서드를 이용하여 추가가 가능합니다.  
  > insert() 메서드를 이용하여 삽입이 가능합니다.  
  > remove() 메서드를 이용하여 삭제가 가능합니다.  
  > clear() 메서드를 이용하여 모든 요소 삭제가 가능합니다.

```python
import random as rnd
list1 = [];
print("리스트의 길이 :",len(list1)) # 리스트의 길이 : 0
for i in range(1,10):
    list1.append(rnd.randrange(1,100))  # 추가

print("리스트의 길이 :",len(list1)) # 리스트의 길이 : 9
print(list1) # [61, 20, 63, 11, 98, 4, 51, 35, 75]
print('2번째부터 4번째까지  :',list1[2:5]) # 2번째부터 4번째까지  : [63, 11, 98]

print(list1[0]) # 61
list1[0] = 99 # 수정
print(list1[0]) # 91

list1.insert(3,88) # 삽입
list1.insert(3,77)
print(list1) # [99, 20, 63, 77, 88, 11, 98, 4, 51, 35, 75]

# 삭제 : 인덱스가 변하므로 주의해야 함
for i in list1:
    if i > 50:
        list1.remove(i)
print(list1) # [20, 77, 11, 4, 35] 77이 제거가 안되었다.

# 삭제 뒤에서 부터 해야함
for index in range(len(list1)-1, -1, -1):
    if list1[index] > 50:
        list1.remove(list1[index])
print(list1) # [20, 11, 4, 35]

# 모두 지우기
list1.clear()
print(list1) # []
```

> reverse()메서드를 이용하여 뒤집기가 가능합니다.  
> sort() 메서드를 이용하여 정렬이 가능합니다.  
> sorted() 함수를 이용하여 정렬이 가능합니다.  
> copy() 메서드를 이용하여 복사가 가능합니다.

```python
import random as rnd
list1 = []
for i in range(1,10):
    list1.append(rnd.randrange(1,100))  # 추가
print(list1) # [34, 46, 58, 56, 22, 62, 34, 97, 57]
# 뒤집기
list1.reverse()
print(list1) # [57, 97, 34, 62, 22, 56, 58, 46, 34]

# 오름 차순 정렬
list1.sort()  # 자신이 변경됨
print(list1) # [22, 34, 34, 46, 56, 57, 58, 62, 97]
# 내림 차순 정렬
list1.sort(reverse=True)
print(list1) # [97, 62, 58, 57, 56, 46, 34, 34, 22]

list2 = sorted(list1)  # 정렬된 리스트 반환
print(list1, list2)
# [97, 62, 58, 57, 56, 46, 34, 34, 22] [22, 34, 34, 46, 56, 57, 58, 62, 97]

list2 = sorted(list1, reverse=True)
print(list1, list2)
# [97, 62, 58, 57, 56, 46, 34, 34, 22] [97, 62, 58, 57, 56, 46, 34, 34, 22]

# 얕은복사 : 주소가 복사됨
list2 = list1
print(list1, list2)
# [97, 62, 58, 57, 56, 46, 34, 34, 22] [97, 62, 58, 57, 56, 46, 34, 34, 22]
list2[0] = 999  # 1개변경
print(list1, list2) # 둘다 변경 : 같은 객체이다.
# [999, 62, 58, 57, 56, 46, 34, 34, 22] [999, 62, 58, 57, 56, 46, 34, 34, 22]


# 깊은복사 : 값이 복사됨
list2 = list1.copy()
print(list1, list2)
# [999, 62, 58, 57, 56, 46, 34, 34, 22] [999, 62, 58, 57, 56, 46, 34, 34, 22]
list2[0] = 777  # 1개 변경
print(list1, list2) # 1개만 변경 : 다른 객체이다.
#[999, 62, 58, 57, 56, 46, 34, 34, 22] [777, 62, 58, 57, 56, 46, 34, 34, 22]
```

```python
->하하 추가하기
subway.append("하하")
# ['유재석', '조세호', '박명수', '하하']

->정형돈씨를 유재석 / 조세호 사이에 태워봄
subway.insert(1,"정형돈") #첫번째 인수가 몇번째 자리에 넣을 것인가가
# ['유재석', '정형돈', '조세호', '박명수', '하하']

->지하철에 있는 사람을 한 명씩 꺼냄
print(subway.pop())
print(subway)
# 하하
# ['유재석', '정형돈', '조세호', '박명수']

print(subway.pop())
print(subway)
# 박명수
# ['유재석', '정형돈', '조세호']

print(subway.pop())
print(subway)
# 조세
# ['유재석', '정형돈']

->같은 이름의 사람이 몇 명있는지 확인하기
print(subway.count("유재석"))
# 1
```

- ### 정렬

```python
->정렬 sort
num_list = [5,2,4,3,1]
num_list.sort()
print(num_list)
# [1, 2, 3, 4, 5]

->순서 뒤집기 가능
num_list.reverse()
print(num_list)
# [5, 4, 3, 2, 1]

->모두 지우기
num_list.clear()
# []

->다양한 자료형 함께 사용
->리스트 합치기/확대
num_list=["조세", 20, True]
# ['조세호', 20, True]
mix_list = [5,2,4,3,1]
num_list.extend(mix_list)
print(num_list)

```

## 2. 사전

> 사전은 key와 valuue의 쌍으로 정의한다  
> key들은 중복값을 허용하지 않는 유일한 값이다.  
> dictionary는 "키(Key)/값(Value)" 쌍을 요소로 갖는 자료형입니다.  
> dictionary는 흔히 Map 이라고도 불립니다. 키(Key)로 신속하게 값(Value)을 찾아내는 해시테이블(Hash Table) 구조를 갖습니다.  
> 파이썬에서 dictionary는 "dict" 클래스로 구현되어 있습니다.  
> dictionary의 키(key)는 그 값을 변경할 수 없는 Immutable 타입이어야 하며, dictionary 값(value)은 Immutable과 Mutable 모두 가능합니다. 예를 들어, dictionary의 키(key)로 문자열이나 Tuple은 사용될 수 있는 반면, 리스트는 키로 사용될 수 없습니다.  
> dictionary의 요소들은 {} 를 사용하여 만듭니다. 여러개일 경우 콤마(,)로 구분합니다.  
> {}를 이용하여 만들 수 있습니다.  
> dict() 생성자를 이용하여 만들 수 있습니다.

- ### 선언

```python
->사전 정의
cabinet = {3 : "유재석", 100: "김태호"}

->값 뽑아내기
print(cabinet[3])
#유재석
```

- ### get

```python
-> get과 위 선언방식의 결과는 같다.
print(cabinet.get(3))
#유재석

->대괄호와 get()의 차이
#print(cabinet(5))
print("hi")

->key가 5인 경우처럼 key값이 없을 땐 에러 발생 후 프로그램 종료(hi출력X)
print(cabinet.get(5))
print("hi")
#key가 5인 경우처럼 key값이 없을 땐 None 반환 후 프로그램 종료(hi출력O)

->get()의 활용
print(cabinet.get(5, "사용 가능"))#key 에 해당하는 값이 없는 경우 기본값을 사용
#사용 가능
```

- ### 예제

```python
dict1 = {}
print(dict1, type(dict1)) # {} <class 'dict'>

dict2 = {'name':'한사람','age':22, 'gender': True}
print(dict2, type(dict2)) # {'name': '한사람', 'age': 22, 'gender': True} <class 'dict'>
print(dict2['name']) # 한사람
print(dict2['age']) # 22
print(dict2['gender']) # True

tuple1 = ('이름','나이','성별')
dict3 = {tuple1 : ('한사람', 22, True)}
print(dict3, type(dict3)) # {('이름', '나이', '성별'): ('한사람', 22, True)} <class 'dict'>

print(dict3[tuple1]) # ('한사람', 22, True)
for index in range(0,3):
    print(tuple1[index],":", dict3[tuple1][index])
'''
이름 : 한사람
나이 : 22
성별 : True
'''
dict4 = dict(kor=87, eng=80, mat=85, edps=99)
print(dict4, type(dict4))
#{'kor': 87, 'eng': 80, 'mat': 85, 'edps': 99} <class 'dict'>
print(dict4['kor'])
# 87
```

- ### 기능
  > keys() 메서드로 키값 만을 얻을 수 있습니다.  
  > values() 메서드로 값만을 얻을 수 있습니다.  
  > "dict객체[키]=값"으로 새로운 요소를 추가 가능합니다.  
  > update()메서드로 한번에 여러게 요소를 추가 가능합니다.  
  > 같은 키에 다른값을 넣으면 수정이 됩니다.  
  > "del dict객체[키]"으로 요소 삭제가 가능합니다.  
  > items() 메서드로 (key,value)쌍 얻을 수 있습니다.

---

```python
dict1 = {'name': '한사람', 'age': 22, 'gender': True}
print(dict1, type(dict1))
# {'name': '한사람', 'age': 22, 'gender': True} <class 'dict'>

# 키 반복
for key in dict1.keys():
    print(key, ':', dict1[key])
'''
name : 한사람
age : 22
gender : True
'''

# 값 반복
for value in dict1.values():
    print(value)
'''
한사람
22
True
'''

# 추가
dict1['hobby'] = ['술', '춤', '잠']
dict1['weight'] = 78.65
print(dict1)
# {'name': '한사람', 'age': 22, 'gender': True, 'hobby': ['술', '춤', '잠'], 'weight': 78.65}

# 동시에 여러요소 추가
dict1.update({'weight':67.8,'height': 189.7})
print(dict1)
# {'name': '한사람', 'age': 22, 'gender': True, 'hobby': ['술', '춤', '잠'], 'weight': 67.8, 'height': 189.7}

# 수정
dict1['hobby'] = ['술', '춤', '잠','게임','등산']
print(dict1)
# {'name': '한사람', 'age': 22, 'gender': True, 'hobby': ['술', '춤', '잠', '게임', '등산'], 'weight': 67.8, 'height': 189.7}

# 요소 삭제
del dict1['weight']
print(dict1)
# {'name': '한사람', 'age': 22, 'gender': True, 'hobby': ['술', '춤', '잠', '게임', '등산'], 'height': 189.7}

# (key,value)쌍 얻기
print(dict1.items())
# dict_items([('name', '한사람'), ('age', 22), ('gender', True), ('hobby', ['술', '춤', '잠', '게임', '등산']), ('height', 189.7)])

for data in dict1.items():
    # print(data, type(data))
    print(data[0], ':', data[1])
'''
name : 한사람
age : 22
gender : True
hobby : ['술', '춤', '잠', '게임', '등산']
height : 189.7
'''
```

---

```python
->사전 자료형에 값이 있는지 여부확인
print(3 in cabinet) # True
print(5 in cabinet) # False

->key는 정수형이 아닌 문자열도 가능
cabinet={"A-3": "유재석", "B-100": "김태호"}
print(cabinet["A-3"]) #유재석

->업데이트 또는 추가
print(cabinet)
cabinet["A-3"] = "김종국" #key 에 해당하는 값이 있는 경우 업데이트
cabinet["C-20"] = "조세호" #key에 해당하는 값이 없는 경우 신규추가
print(cabinet) # {'A-3': '김종국', 'B-100': '김태호', 'C-20': '조세호'}

->삭제
del cabinet["A-3"]# {'B-100': '김태호', 'C-20': '조세호'}
```

- ### 출력

```python
->key값들만 출력
print(cabinet.keys())
#dict_keys(['B-100', 'C-20'])

->value들만 출력
print(cabinet.values())
#dict_values(['김태호', '조세호'])

->둘다 확인하기
print(cabinet.items())
#dict_items([('B-100', '김태호'), ('C-20', '조세호')])

->전체삭제
cabinet.clear()
print(cabinet) #{}
```

- ### 실전응용

  ####1. 키 값 대입

  - ##### get 사용시
    > menu.get()은 맞을시 True,
    > 아닐시 None을 뱉는다.

  ```python
  menu = {"ham": 1, "cucumber": -12, "egg": 100}

  if menu.get("hame"):
    print("네, 찾는 것이 있네요")
    menu["hame"] = 12
  else:
    print("그런 메뉴는 없습니다.")
  print(menu.items())
  #dict_items([('ham', 1), ('cucumber', -12), ('egg', 100), ('hame', 12)])
  ```

  get두번째인자에 넣으면

  ```python
  if menu.get("hame", 5) == 5:
    print("네, 찾는 것이 없네요")
  else:
    print("그런 메뉴는 있습니다.")
  #dict_items([('ham', 1), ('cucumber', -12), ('egg', 100), ('hame', 12)])
  ```

  없을시 5가 출력된다.  
  생성되는 것이 아니라 5를 호출한다.

  - ##### defaultdict 사용
    라이브러리를 사용하여 손쉽게 만드는법

  ```python
  names = collections.defaultdict(int)
    if names['김찬영']:
        print("김찬영이 있습니다.")
    else:
        print("김찬영이 생성되었습니다..")
    print(names)
  #김찬영이 생성되었습니다..
  #defaultdict(<class 'int'>, {'김찬영': 0})
  ```

## 3. 튜플

튜플은 리스트의 '읽기 전용 버전' 느낌이다. 처음 정의할 때를 제외하고는 데이터 변경이나 추가, 삭제 등이 불가능하다.

> tuple 자료형은 데이터의 목록이라고 보면 됩니다.  
> 콤마(,)로 데이터를 나열하면 tuple입니다.  
> 괄호()안에 ,로 나열해도 tuple입니다.  
> 길이 1개짜리 tuple을 만들려면 반드시 뒤에 콤마(,)를 붙여야 합니다.  
> tuple은 다른 자료형들로 만들 수 있습니다.  
> tuple은 tuple을 가질 수 있습니다.

- ### 선언

```python
->선언 방법 1
menu = ("돈까스", "치즈까스")
print(menu[0]) #돈까스
print(menu[1]) #치즈까스

->선언 방법 2
name = "김종국"
age = 20
hobby = "코딩"
print(name, age, hobby)
# 김종국 20 코딩

->선언 방법 3
(name, age, hobby) = ("김종국", 20, "코딩")
print(name, age, hobby)
# 김종국 20 코딩
```

- ### 문법
  - #### 튜플 접근
  > len(tuple)로 요소의 개수를 알아낼 수 있습니다.  
  >  [n:m]으로 요소에 접근이 가능합니다. 사용법은 문자열과 동일합니다.  
  >  반복문을 이용하여 접근이 가능합니다.  
  >  +연산을 이용하여 결합이 가능합니다.  
  >  \*연산을 이용하여 반복할 수 있습니다
  ```python
  tuple5 = '회원목록', ('한놈','두식이'), (33, 25), (True, False)
  print(tuple5, type(tuple5)) # ('회원목록', ('한놈', '두식이'), (33, 25), (True, False)) <class 'tuple'>
  print(tuple5[0]) # 회원목록
  title = ('', '이름', '나이', '성별')
  for i in (1, 2, 3):
      print('[', title[i], ']')
      for j in (0, 1):
          print(tuple5[i][j])
      print('-' * 30)
  '''
  [이름]
  한놈
  두식이
  ------------------------------
  [나이]
  33
  25
  ------------------------------
  [성별]
  True
  False
  '''
  tuple1 = 1, 2, 3
  tuple2 = ('a', 'b', 'c', 'd')
  tuple3 = tuple1 + tuple2
  tuple4 = tuple2 * 3
  print(tuple2) # ('a', 'b', 'c', 'd')
  print(tuple3) # (1, 2, 3, 'a', 'b', 'c', 'd')
  print(tuple4) # ('a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd')
  ```
  - #### 튜플의 변경이나 삭제
    > tuple의 요소 값 변경 불가능  
    > tuple 요소 삭제 불가
  ```python
  tuple1 = 1, 2, 3, 4
  print(tuple1, type(tuple1)) # (1, 2, 3, 4) <class 'tuple'>

  # 요소 값 변경
  # tuple1[0] = 'A' #불가능

  # 요소 값 삭제
  # del tuple1[0] # 불가능

  # 첫번째 값을 변경하려면 : 새로운 객체를 만들어야 합니다.
  tuple1 = ('A',) + tuple1[1:]
  print(tuple1) #('A', 2, 3, 4)

  # 세번째 값을 변경하려면
  tuple1 = tuple1[:2] + ('C',) + tuple1[3:]
  print(tuple1) #('A', 2, 'C', 4)

  # 두번째 값을 삭제하려면
  tuple1 = (tuple1[0],) + tuple1[2:]
  print(tuple1) # ('A', 'C', 4)
  ```

## 4. 세트

세트는 **중복**을 허용하지 않으며 또한 데이터의 순서도 보장하지않는다

- ### 선언

```python
->기본 선언
my_set={1, 2, 3, 3, 3}
print(my_set)
# {1, 2, 3}

->set을 이용해 세트 선언
people = set(["유재석","박명수"]) # people = {"유재석", "박명수"}
people2 = {"유재석", "김태호", "양세형"}
```

- ### 기능

```python
->교집합
-> & 기호나 intersection을 이용
print(people & people2) # {'유재석'}
print(people.intersection(people2)) # {'유재석'}

->합집합
-> | 기호나 union()을 이용
print(people | people2) # {'양세형', '김태호', '유재석', '박명수'}
print(people.union(people2)) # {'양세형', '김태호', '유재석', '박명수'}

->차집합
-> - 기호나 difference()를 이용
print(people - people2) # {'박명수'}
print(people.difference(people2)) # {'박명수'}

->추가
people.add("김태호")
print(people) # {'유재석','박명수'} -> {'유재석', '박명수', '김태호'}

->삭제
people2.remove("김태호")
print(people2) # {'유재석', '양세형', '김태호'} -> {'유재석', '양세형'}
```

> set 자료형은 중복을 허용하지 않습니다.  
> set은 입력된 순서는 중요하지 않습니다.  
> set() 생성자 함수를 이용해서 만들 수 있습니다.  
> {}를 이용해서 만들 수 있습니다.  
> add() 메서드를 이용하여 추가가 가능합니다.  
> update() 메서드를 이용하여 동시에 여러개 추가가 가능합니다.  
> remove() 메서드를 이용하여 삭제가 가능합니다.  
> copy() 메서드를 이용하여 복사가 가능합니다.  
> clear() 메서드를 이용하여 모든 요소 삭제가 가능합니다.

```python
set1 = set("Hello Python!!!")
print(set1, type(set1))
# {'t', ' ', 'l', 'P', 'h', '!', 'H', 'e', 'y', 'o', 'n'} <class 'set'>
set2 = {1,2,3, 'a', 'b', 'c', True, 3.14}
print(set2, type(set2))
# {1, 2, 3, 3.14, 'a', 'c', 'b'} <class 'set'>

set3 = set({1,2,3})
print(set3, type(set3))
# {1, 2, 3} <class 'set'>
set4 = set([1,2,3])
print(set4, type(set4))
# {1, 2, 3} <class 'set'>
set5 = set()
print(set5, type(set5))
# set() <class 'set'>

for i in range(0,5):
    set5.add(i)

for i in range(0,5):
    set5.add(i)

print(set5, type(set5))
# {0, 1, 2, 3, 4} <class 'set'>
set5.add('a')
set5.add('문자열')
set5.add(34.6)
print(set5, type(set5))
#{0, 1, 2, 3, 4, 34.6, 'a', '문자열'} <class 'set'>
set5.update({11, 22, 33})
print(set5, type(set5))
#{0, 1, 2, 3, 4, 34.6, 33, 'a', 11, 22, '문자열'} <class 'set'>
set5.remove(0)
#{1, 3, 4, 34.6, 33, 'a', 11, 22, '문자열'} <class 'set'>
set5.remove(2)
#{1, 34.6, 3, 4, 33, 'a', 11, 22, '문자열'} <class 'set'>
print(set5, type(set5))
#set() <class 'set'>

set6 = set5.copy()
print(set6, type(set6))

set6.clear()
print(set6, type(set6))
```

- ### 예시
  - #### 애국가는 몇개의 음절로 만들어졌을까
  ```python
  national_anthem = '''
  동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
  무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세
  남산 위에 저 소나무 철갑을 두른듯 바람서리 불변함은 우리 기상일세
  무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세
  가을 하늘 공활한데 높고 구름 없이 밝은 달은 우리 가슴 일편단심일세
  무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세
  이 기상과 이 마음으로 충성을 다하여 괴로우나 즐거우나 나라사랑하세
  무궁화 삼천리 화려 강산 대한사람 대한으로 길이 보전하세
  '''
  national_anthem = national_anthem.replace('\n', '') # 한줄로 만들

  # '대한'이란 단어의 개수
  print('애국가에는 "대한"이란 문자열이 {}개 나타납니다.'.format(national_anthem.count('대한')))
  # 애국가에는 "대한"이란 문자열이 8개 나타납니다.
  # 공백으로 구분하여 list로 만들기
  word_list = national_anthem.split(' ')
  # 전체 단어 수
  print('애국가에 사용된 단어 수는 총 {}개 입니다.'.format(len(word_list)))
  #애국가에 사용된 단어 수는 총 70개 입니다.
  # 단어를 set으로 만들기
  word_set = set(word_list)
  print('애국가에는 총 {}개 단어가 사용되었습니다.'.format(len(word_set)))
  #애국가에는 총 44개 단어가 사용되었습니다.
  print('애국가에는 총 {}개 단어가 중복 사용되었습니다.'.format(len(word_list)-len(word_set)))
  #애국가에는 총 26개 단어가 중복 사용되었습니다.
  ```
  - #### 중복되지않는 번호 뽑기
  ```python
  from random import *
  for i in range(1,6):
      lottoset=set()
      while len(lottoset) < 6:
          lottoset.add(randint(1,45))
      print(sorted(lottoset))
  ```

## 5. 자료구조의 변경

자료구조도 변경이 가능하다

```python
->type 로 어떤 형태인지 확인
menu = {"커피", "우유", "주스"}
print(menu, type(menu))
# {'커피', '주스', '우유'} <class 'set'>

->세트->리스트 변환
menu = list(menu)
print(menu, type(menu))

->튜플로 변환
menu = tuple(menu)
print(menu, type(menu))

->세트로 변환
menu= set(menu)
print(menu, type(menu))
```

## 6. enumerate

> 리스트의 인덱스값과 실제 값을 보여준다.

```python
data = enumerate((1, 2, 3))
print(data, type(data))

for i, value in data:
    print(i, ":", value)
print()

data = enumerate({1, 2, 3})
for i, value in data:
    print(i, ":", value)
print()

data = enumerate([1, 2, 3])
for i, value in data:
    print(i, ":", value)
print()

dict1 = {'이름': '한사람', '나이': 33}
data = enumerate(dict1)
for i, key in data:
    print(i, ":", key, dict1[key])
print()

data = enumerate("재미있는 파이썬")
for i, value in data:
    print(i, ":", value)
print()
```

---

```
<enumerate object at 0x0000000002424EA0> <class 'enumerate'>
0 : 1
1 : 2
2 : 3

0 : 1
1 : 2
2 : 3

0 : 1
1 : 2
2 : 3

0 : 이름 한사람
1 : 나이 33

0 : 재
1 : 미
2 : 있
3 : 는
4 :
5 : 파
6 : 이
7 : 썬
```

## 7. 퀴즈

### 문제

```
DataStructure.py에서 배운 것을 토대로 퀴즈풀기
Quiz) 당신의 학교에서는 파이썬 코딩 대회를 주최합니다.
참석률을 높이기 위해 댓글 이벤트를 진행하기로 하였습니다.
댓글 작성자들 중에 추첨을 통해 1명은 치킨, 3명은 커피 쿠폰을 받게 됩니다.
추첨 프로그램을 작성하시오.

조건1: 편의상 댓글은 20명이 작성하였고 아이디는 1~20이라고 가정
조건2: 댓글 내용 상관 없이 무작위로 추첨하되 중복은 불가
조건3: random 모듈의 shuffle과 sample 을 활용

(출력예제)
--당첨자 발표--
치킨 당첨자: 1
커피 당첨자: [2, 3, 4]
--축하합니다--
```

#### hint

shuffle은 무작위로 섞는 기능
sample은 무작위로 n개를 뽑는다

### 풀이

```python
from random import *
lst = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] # lst = range(1, 21)와 같다.
shuffle(lst)
'''
lst를 range를 통해 만들 경우 오류가 뜬다.
왜냐하면 shuffle은 리스트에 대해서만 사용가능, 하지만 range는 리스트형태가 아니다.
range로 했을 경우 lst = list(lst)로 변환하면 된다.
'''
chick=sample(lst, 1)
print("치킨 당첨자:" + str(chick[0]))
lst.pop(chick[0]) #lst=set(lst)-set(chick) 와 같다.
coffee=sample(lst, 2)
print(coffee)


*다른 방법은 어차피 1+3 =4명이니 4명을 처음부터 뽑는 것이다.
'''
winner=sample(lst,4)
print("치킨:".format(winner[0])
print("치킨:".format(winner[1:])
'''
```
