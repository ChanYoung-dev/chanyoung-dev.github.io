---
permalink: /python/
title: "python - full"
toc: true
author_profile: true
comments: true
sidebar:
  nav: "python-menu"
---

# < 0️⃣. Basic >

- ## 기초

```python
->문자열
print("ㅋ"*3) #ㅋㅋㅋ

->boolean
print(5>10) # = print(False) = print(not True) = print(not (5<10))

->변수형
animal = "고양이"
name = "해피"
age = 4
hobby = "낮잠"
is_adult = age >= 3

print("우리집" + animal + "의 이름은 " + name + "에요")
hobby = "공놀이" #중간에 바꿀 수 있음.
print(name + "는 " + str(age) + "살이며, " + hobby + "을 아주 좋아해요") #변수형은 문장안에 넣을때 str을 해줘야한다.
print(name, "는 ", age, "살이며, ", hobby, "을 아주 좋아해요")
# 결과는 같고 변수에 str을 해줄 필요가 없다..그러나 공백이 포함된다.
print(name, "는 ", age, "살이며, ", hobby, "을 아주 좋아해요", sep='')
#sep을 넣어주면 공백이 없어진다. default가 sep=' '이기때문에 공백이 들어간것이다.
print(name + "는 어른일까요? " + str(is_adult))

->연산자
print(2**3) # 2^3=8 =3제곱
print(5//3) # 1 =몫
```

- ## 숫자처리함수

```python
print(abs(-5)) # 5
print(pow(4,2)) # 4^2 = 4*4 = 16
print(max(5,12)) # 12
print(min(5,12)) # 5
print(round(3.14)) # 3 반올림
print(round(4.99)) # 5 반올림
print(divmod(10, 3))  # (3.0, 1.0) 몫과 나머지

from math import *
print(floor(4.99)) # 4 내림
print(ceil(3.14)) # 4 올림
print(sqrt(16)) # 4 루트,제곱근

from random import *
print(random()) #랜덤값 0.0~ 1.0 미만의 임의의 값 생성
print(random() * 10) #랜덤값 0.0~ 10.0 미만의 임의의 값 생성
print(int(random() * 10)) # 0 ~ 10 미만의 임의의 값 생성
print(int(random() * 10) + 1) # 1~10 미만의 임의의 값 생성
print(int(random() * 45) + 1) # 1~45 이하의 임의의 값 생성

print(randrange(1, 46)) #1~46 미만의 임의의 값 생성
print(randint(1, 45)) #1~45 이하의 임의의 값 생성

sentence = '나는 소년입니다' # = "나는 소년입니다"
sentence2 = """나는 소년이고,
파이썬은 쉬워요"""
print(sentence2)
```

- ## 숫자열 분리하기

```python
birth = 19920822
year = birth//10000 # 1992
month1 = birth%10000//100 #08
month2 = birth//100%100 #08
date = birth%100 # 22

```

- ## 슬라이싱

```python
jumin = "990120-1234567"
print("성별 : " + jumin[7])
print("연 : " + jumin[0:2]) # 0 부터 2 직전까지
print("월 : " + jumin[2:4])
print("일 : " + jumin[4:6])
print("생년월일 : " + jumin[0:6]) # jumin[0:6]==jum[:6]
print("뒤 7자리 : " + jumin[7:])
print("뒤 7자리 (뒤에서부터) : " + jumin[-7:]) # 990120-1234567 에서 맨 마지막자리인 7은 -1번째이다 =jumin[-1] 그러므로 1은 jumin[-7]이다.
```

- ## 문자열 처리

```python
python = "Python is Amazing"
print(python.lower()) # 전부 소문자로 바꾸기
print(python.upper()) # 전부 대문자로 바꾸기
print(python[0].isupper()) # 0번째자리가 대문자인가? True
print(len(python)) #문자열 길이
print(python.replace("Python", "Java")) #Java is Amazing
print(python.replace("!", "^-^", 2)) # 3번째 인자 갯수만큼 바꾸어준다. #Python is Amazing^-^^-^
#Python문자열부분을 Java로 바꾸기
print(python) # Pythio is Amazing. 저장은 안됀다.

index = python.index("n") # n은 몇번째에 있을
print(index)
index = python.index("n", index + 1) # n은 몇번째에 있는가 시작위치는 index+1부터이다.
print(index)

print(python.find("Python")) # 있으면 0 없으면 -1
print(python.index("Python")) #  있으면 0 없으면 오류

print(python.count("n")) # n 카운터
```

- ## 문자열 나누기, 합치기

  > 나누기 : 문자열.split(self, sep=None, maxsplit=-1)

      합치기 : 문자열.join(self, iterable)

  ```python
  str = "가 나 다 라 마"
  print("str : {0} type: {1}".format(str, type(str)))
  # str : 가 나 다 라 마 type: <class 'str'>

  str_split = str.split(" ") # list로 바뀐다.
  print("str_split : {0} type: {1}".format(str_split, type(str_split)))
  # str_split : ['가', '나', '다', '라', '마'] type: <class 'list'>

  str_join_comma = ','.join(str_split) # str로 바뀐다
  print("str_join_comma : {0} type: {1}".format(str_join_comma, type(str_join_comma)))
  # str_join_comma : 가,나,다,라,마 type: <class 'str'>

  str_join_empty = ''.join(str_split) # str로 바뀐다
  print("str_join_empty : {0} type: {1}".format(str_join_empty, type(str_join_empty)))
  # str_join_empty : 가나다라마 type: <class 'str'>
  ```

  - ### 응용
    숫자 / 문자열 뒤집기

  ```python
  # 정수형을 문자열로 변환
  # 문자열을 리스트로 변환
  # 리스트를 거꾸로 정렬
  # 리스트를 문자열로 반환
  num = 123456
  print("num:{0}".format(num)) #123456

  str_num = str(num) # 문자열 변환
  print("str_num:{0},type: {1}, str_num[0] : {2} ".format(str_num, type(str_num), str_num[0]))
  # str_num:123456,type: <class 'str'>, str_num[0] : 1

  str_list = list(str_num) # 문자열을 리스트로 변환
  str_list.reverse() # reverse는 리스트에서만 사용할 수 있기때문에 리스트로 변환해준다
  print("str_list(reverse)  : {0} type: {1}".format(str_list, type(str_list)))
  # str_list(reverse)  : ['6', '5', '4', '3', '2', '1'] type: <class 'list'>

  str_list=''.join(str_list) # 리스트에서 문자열로 변환해준다.
  print("str_list(reverse)  : {0} type: {1}".format(str_list, type(str_list)))
  # str_list(reverse)  : 654321 type: <class 'str'>
  ```

- ## 변환함수
  > ord : 문자의 아스키 코드값을 리턴하는 함수  
  > hex : hex(x)는 정수값을 입력받아 16진수(hexadecimal)로 변환하여 리턴하는 함수  
  > otc : oct(x)는 정수 형태의 숫자를 8진수 문자열로 바꾸어 리턴하는 함수  
  > chr : 아스키(ASCII) 코드값을 입력으로 받아 그 코드에 해당하는 문자를 리턴하는 함수  
  > capitalize : 단어의 첫글자만 대문자로 변환하는 함수

```
print(ord("A"))       # 65
print(hex(ord("A")))  # 0x41
print(oct(ord("A")))  # 0o101

# chr : 아스키(ASCII) 코드값을 입력으로 받아 그 코드에 해당하는 문자를 리턴하는 함수
print(chr(65))        # A
print(chr(0x41))      # A

# 대소문자 변환
print(chr(ord('A')+32))  # a
print(chr(ord('Z')+32))  # z
print(chr(ord('a')-32))  # A
print(chr(ord('z')-32))  # Z

# 1자리 숫자 문자열을 숫자로 변환
print(ord('1') - ord('0'), type(ord('1') - ord('0'))) # 1 <class 'int'>
print(ord('9') - ord('0'), type(ord('9') - ord('0'))) # 9 <class 'int'>

# 1자리 숫자를 숫자 문자열로 변환
print(chr(1 + ord('0')), type(chr(1 + ord('0')))) # 1 <class 'str'>
print(chr(9 + ord('0')), type(chr(9 + ord('0')))) # 9 <class 'str'>
```

---

```python
# 진법 초기화
a = 10
print(type(a), a)
a = 0b10
print(type(a), a)
a = 0o10
print(type(a), a)
a = 0x10
print(type(a), a)
print()
a = 0B10
print(type(a), a)
a = 0O10
print(type(a), a)
a = 0X10
print(type(a), a)
print("-"*20)

# 출력
i = 0x100
print("i = ", i)
print("i = ", bin(i))
print("i = ", int(i))
print("i = ", oct(i))
print("i = ", hex(i))
print("-"*20)

# 문자열을 형변환
i = "111"
print("i = ", int(i)) # 111
print("i = ", int(i, 2)) # 7
print("i = ", int(i, 8)) # 73
print("i = ", int(i, 16)) # 273
print("i = ", int(i, 5)) # 31
print("-"*20)
```

- ## 문자열 표

  - #### 기본

  ```python
  print("나는 %d살입니다." % 20)
  print("나는 %s을 좋아해요." % "파이썬")
  print("Apple은 %c로 시작해요." % "A")
  print('나이는 %03d세이고 신장은 %6.2f입니다. 나의 이름은 "%s"입니다. '%(33,56.789,'한사람'))
  #나이는 033세이고 신장은  56.79입니다. 나의 이름은 "한사람"입니다.
  ```

  - #### %s는 다 포함할 수 있다.

  ```python
  print("나는 %s살입니다. " % 20)
  print("나는 %s색과 %s색을 좋아해요." % ("파란", 20))
  ```

  - #### 다른 방법

  ```python
  print("나는 {}살입니다.".format(20))
  print("나는 {}색과 {}색을 좋아해요.".format("파란", "빨간"))
  print("나는 {0}색과 {1}색을 좋아해요.".format("파란", "빨간"))
  print("나는 {1}색과 {0}색을 좋아해요.".format("파란", "빨간"))
  ```

  - #### 다른 방법2

  ```python
  print("나는 {age}살이며 {color}색을 좋아해요.".format(age=20, color="빨간"))
  ```

  - #### 다른 방법 3 (v3.6이상)

  ```python
  age = 20
  color = "빨간"
  print(f"나는 {age}살이며, {color}색을 좋아해요.")
  ```

- ## 탈출문자

  - #### \n : 줄바꿈

  ```python
   print("백문이 불여일견 \n백견이 불여일타")
    # 백문이 불여일견
    # 백견이 불여일타
  ```

  - #### \\',\ \" -> 저는 "나도코딩"입니다.

  ```python
  print("저는 \"나도코딩\"입니다.")
  print("저는 \'나도코딩\'입니다.") # 저는 "나도코딩"입니다.
  ```

  - #### \\\ : 문장 내에서 \

  ```python
  # \bin\python을 출력하려함
  # print("\bin\python") 오류
  print("\\bin\\python") #\bin\python
  ```

  - #### \r : 커서를 맨 앞으로 이동

  ```python
  print("Red Appleeeeee\rPine A") #Pine A
  ```

  - #### \b : 백스페이스 (한 글자 삭제)

  ```python
  print("Redd\bApple") #RedApple
  ```

---

- ## 퀴즈

#### 문제

```
기초문법(basic.py)을 배운 후 퀴즈

Quiz) 사이트별로 비밀번호를 만들어 주는 프로그램을 작성하시오.

예) http://naver.com
규칙1 : http:// 부분은 제외 => naver.com
규칙2 : 처음 만나는 점(.) 이후 부분은 제외 => naver
규칙3 : 남은 글자 중 처음 세자리 + 글자 갯수 + 글자 내 'e'갯수 + "!"로 구성

예) 생성된 비밀번호 : nav51!
```

#### 해답

```python
sentence = "http://naver.com"
url = sentence
sentence = sentence[7:sentence.index(".")]
print(sentence) #규칙 1과 2 동시 작업 // 규칙1은 =sentence.replace("http://", "")로도 표현이 가능하다.
password = sentence[:3] + str(len(sentence)) + str(sentence.count("e")) + "!"
print(f"url은 {url}이며, 비밀번호는 {password}입니다.")
'''
아래는 같은 의미
print("url은 {1}이며, 비밀번호는 {0}입니다.".format(password, url))
print("url은 %s이며, 비밀번호는 %s입니다."%(url, password))
'''
```

---

## 추가

- ### 행분리 : 역슬레시, 괄호
  긴 내용을 한줄인것 처럼 인식 시키기(\ 사용)

```python
a = 1 + 2 + 3 + \
      4 + 5 + 6
```

긴 내용을 한줄인것 처럼 인식 시키기(괄호 사용

```python
b = (1 + 2 + 3 +
        4 + 5 + 6)
```

파라메터를 넘기는 것이라면 콤마(comma) 뒤에서 그냥 엔터를 쓰면 됩니다.

```python
print("Hello",  "Python",
          end="\n", sep="\t")
```

문자열 중간에 줄바꿈을 하면 자동으로 ""가 열고닫히며 1줄로 인식한다.

```python
print("아주 아주 아주 긴 문자열이라고 가정하자 "
         "한줄에 모두 타이핑이 힘들다면")
```

- ### 여러개 변수에 여러값 할당하기

```python
a=b=c="모두같은 값"
print("a의 값 : {}".format(a))
print("b의 값 : {}".format(b))
print("c의 값 : {}".format(c))

d,e,f = "한사람",23,178.9
print("d의 값 : {}".format(d))
print("e의 값 : {}".format(e))
print("f의 값 : {}".format(f))
'''
a의 값 : 모두같은 값
b의 값 : 모두같은 값
c의 값 : 모두같은 값
d의 값 : 한사람
e의 값 : 23
f의 값 : 178.9
'''

```

- ### SWAP

```python
g,h = 100,200
print("g의 값 : {}, h의 값 :{}".format(g,h))
g,h = h,g
print("g의 값 : {}, h의 값 :{}".format(g,h))
'''
g의 값 : 100, h의 값 :200
g의 값 : 200, h의 값 :100
'''
```

- ### 리터럴
  0b 2진수  
  0o 8진수  
  0x 16진수  
  j로 끝나면 복소수의 허수

```python
a = 0b1010
b = 0o310
c = 0x12c
d = 1.1 + 3.14j
print(a, b, c)
print(x, x.real, x.imag)

10 200 300
(1.1+3.14j) 1.1 3.14
```

참조 : https://wikidocs.net/20369

# < 1️⃣. 자료구조 기본 >

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

# < 2️⃣. 조건문 >

## 1. if

```
if 조건1:
    실행 명령문1
elif 조건2:
​    실행 명령문2
elif 조건3:
​    실행 명령문3
else:
​    실행 명령문4
```

**인덴트(indent) : if 조건에 만족할 때 실행해야 하는 문장들은 if위치 기준으로 스페이스4칸씩 들여쓰기를 해야한다.**

- ### 기본

```python
->elif=else if

weather = "미세먼지"
if weather == "비":
    print("우산을 챙기세요")
elif weather == "미세먼지":
    print("마스크를 챙기세요")
else:
    print("준비물 필요 없어요")
```

- ### 활용

  cf) input응용
  input은 입력받는 것이다. 항상 **문자열**로 입력받기때문에, 숫자 3을 입력해도 문자열 "3"으로 인식한다.

  ```python
  weather = input("오늘 날씨 어때요? ")
  print(weather)
  # 오늘 날씨 어때요? '좋아' (입력시)
  # 좋아

  ->if문 and나 or 연산자 응용
  temp = int(input("기온은 어때요? ")) #문자열인식 받는 것을 정수형으로 변환
  if 30 <=temp: #30도이상
      print("너무 더워요. 나가지 마세요")
  elif 10 <= temp and temp < 30: # 10도 이상 30도 미만
      print("괜찮은 날씨에요")
  elif 0 <= temp and temp < 10: # 0도 이상 10도 미만이면
  # 위 비교 문장은
  # elif 0 <= temp < 10:
  # 과 같다.
      print("외투를 챙기세요")
  else: # 그 외의 모든 경우
      print("너무 춥다")
  ```

  - ### 3항연산자
    참일때 값 if 조건 else 거짓일때값

  ```python
  a=1
  b=1
  print("같다" if a==b else "틀리다")
  # 같
  ```

## 2. for

```
for 변수 in 반복대상:
    실행 명령문1
    실행 명령문2
else
    실행 명령
```

- ### 기본

```python
for waiting_no in [0, 1, 2, 3, 4]:
    print("대기번호 : {0}".format(waiting_no))
'''
대기번호 : 1
대기번호 : 2
대기번호 : 3
대기번호 : 4
'''

->반복이 많을땐?
->range 이용
for waiting_no in range(1, 5):
    print("대기번호 : {0}".format(waiting_no))
'''
대기번호 : 1
대기번호 : 2
대기번호 : 3
대기번호 : 4
'''
```

- ### 활용

```python
-> 배열(리스트) 응용
hero = ["아이언맨", "토르", "아이엠 그루트"]
for customer in hero:
    print("{0}님 커피가 준비되었습니다.".format(customer))
'''
아이언맨님 커피가 준비되었습니다.
토르님 커피가 준비되었습니다.
아이엠 그루트님 커피가 준비되었습니다.
'''
```

## 3. while

```
while 조건:
    실행 명령문1
    실행 명령문2
    실행 명령문3
```

- ### 기본

```python
customer = "토르"
index = 5 #조건에 쓰일 숫자

while index>=1: # 조건
    print("{0}, 커피가 준비 되었습니다. {1}번 남았어요.".format(customer, index))
    index -=1
    if index == 0: #조건 불만족시
        print("커피는 폐기 처분되었습니다.")
'''
토르, 커피가 준비 되었습니다. 5번 남았어요.
토르, 커피가 준비 되었습니다. 4번 남았어요.
토르, 커피가 준비 되었습니다. 3번 남았어요.
토르, 커피가 준비 되었습니다. 2번 남았어요.
토르, 커피가 준비 되었습니다. 1번 남았어요.
커피는 폐기 처분되었습니다.
'''
```

- ### 활용

```python
customer = "토르"
person = "Unknown"

while customer != person:
    print("{0}님 커피 준비됐습니다.".format(customer))
    person = input("이름이 어떻게 되세요?")
'''
{0}님 커피 준비됐습니다.
이름이 어떻게 되세요?아이언맨
{0}님 커피 준비됐습니다.
이름이 어떻게 되세요?아이엠 그루트
{0}님 커피 준비됐습니다.
이름이 어떻게 되세요?토르
'''
```

## 4. continue,break

- ### continue

```python
absent = [2, 5]

for student in range(1,11):
    if student in absent: # 결석했으면 책을 읽지 않고 다음 학생으로 넘어가기
        continue
    print("{0}번 책읽으세요.".format(student)) # 반복문
'''
1번 책읽으세요.
3번 책읽으세요.
4번 책읽으세요.
6번 책읽으세요.
7번 책읽으세요.
8번 책읽으세요.
9번 책읽으세요.
10번 책읽으세요.
'''
```

- ### break

```python
absent = [2, 5]
no_book = [7]

for student in range(1, 11):
    if student in absent: # 결석했으면 책을 읽지 않고 다음 학생으로 넘어가기
        continue
    elif student in no_book: # 책을 가져오지 않았으면 바로 수업 종료 (반복문 탈출)
        print("오늘 수업 여기까지. {0}번은 교무실로 따라와".format(student))
        break
    print("{0}번 책을 읽으세요".format(student)) # 반복문

'''
1번 책을 읽으세요
3번 책을 읽으세요
4번 책을 읽으세요
6번 책을 읽으세요
오늘 수업 여기까지. 7번은 교무실로 따라와
'''
```

## 5. 한 줄 for, 한줄 if

- ### for 기본

```python
students =[1, 2, 3, 4, 5]
print(students)
#[1, 2, 3, 4, 5]
students = [i + 100 for i in students] # i를 뽑아서 100에 각각 더
# students = [students[0] + 100, students[1] + 100, students[2] + 100, students[3] + 100, students[4] + 100]
print(students)
# [101, 102, 103, 104, 105]
```

- ### 활용

```python
->길이 구하기
students = ["김", "김찬", "김찬영"]
lens = [len(i) for i in students]
print(lens)
#[1, 2, 3]

->대문자로 바꾸기
students = ["a", "bc", "de f"]
students = [i.upper() for i in students]
print(students)
#['A', 'BC', 'DE F']
```

- ### 한 줄 if 기본

```python
a=1
b=2
print("같다" if a==b else "틀리다")
# 같다
list1 = [2, 3, 4, 5, 6, 7, 8]
print('9는 없다' if 9 not in list1 else '9는 있다')
# 9는 없다
```

- ### 활용

```python
# 윤년 판단 규칙
# 1. 년도가 4로 나누어떨어지는 해는 윤년입니다. (1996년, 2004년, 2008년, 2012년 …)
# 2. 이 중에서 100으로 나누어떨어지는 해는 평년입니다. (1900년, 2100년, 2200년, 2300년 …)
# 3. 그중에 400으로 나누어떨어지는 해는 윤년입니다. (1600년, 2000년, 2400년 …)
```

```python
list2 = [i for i in range(1,11) if i%2]
print(list2)
#[1, 3, 5, 7, 9]
list3 = [i for i in range(1,11) if not i%2]
print(list3)
#[2, 4, 6, 8, 10]
# 중첩이 가능합니다. 구구단표입니다.
list4 = [i*j for i in range(1,10)
             for j in range(1,10)]


for i in range(0,len(list4)):
    print('{:3d}'.format(list4[i]), end='')
    if (i+1)%9==0:
        print()
'''
  1  2  3  4  5  6  7  8  9
  2  4  6  8 10 12 14 16 18
  3  6  9 12 15 18 21 24 27
  4  8 12 16 20 24 28 32 36
  5 10 15 20 25 30 35 40 45
  6 12 18 24 30 36 42 48 54
  7 14 21 28 35 42 49 56 63
  8 16 24 32 40 48 56 64 72
  9 18 27 36 45 54 63 72 81
'''
```

---

```python
while True:
    year = int(input('년도를 입력하시오(0은 종료)'))
    if not year:
        break
    print('윤년' if year%400==0 or year%4==0 and year%100!=0 else '평년')
    # print('윤년' if year%400==0 or year%4==0 and year%100 else '평년')
    # print('윤년' if not year%400 or not year%4 and year%100 else '평년')
```

## 6. assert

디버깅용도이다.

```python
a = 10
assert a > 5 # 아무 결과 값 없다
assert a < 5 #AssertionError
assert a < 5, "a의 값이 너무 큽니다." # AssertionError: a의 값이 너무 큽니다.
```

## 7. is

> 동일한 객체 여부를 판별하는 연산자입니다.  
> id() 함수는 객체를 입력값으로 받아서 객체의 고유값(레퍼런스)을 반환하는 함수입니다.  
> id는 파이썬이 객체를 구별하기 위해서 부여하는 일련번호입니다. 숫자로서 의미는 없습니다.  
> id는 동일한 객체 여부를 판별할 때 사용합니다.

```python
a = 10
b = 10
c = 11
print(a, 'id =', id(a)) # 4365484080
print(b, 'id =', id(b)) # 4365484080
print(c, 'id =', id(c)) # 4365484112
prnt('같은 객체' if a is b else '다른 객체') # 같은 객체
print('같은 객체' if a is c else '다른 객체') # 다른 객체
c=10
print('같은 객체' if a is c else '다른 객체') # 같은 객체
```

## 8. 퀴즈

- ### 문제

```python
Quiz) 당신은 Cocoa 서비스를 이용하는 택시 기사님입니다.
50명의 승객과 매칭 기회가 있을 때, 총 탑승 승객 수를 구하는 프로그램을 작성하시오.

조건1 : 승객별 운행 소요 시간은 5분 ~ 50분 사이의 난수로 정해집니다.
조건2 : 당신은 소요 시간 5분 ~ 15분 사이의 승객만 매칭해야 합니다.

(출력문 예제)
[O] 1번째 손님 (소요시간 : 15분)
[  ] 2번째 손님 (소요시간 : 50분)
[O] 3번째 손님 (소요시간 : 5분)
...
[  ] 50번째 손님 (소요시간 : 16분)

총 탑승 승객 : 2 분
```

- ### 풀이

---

#### 처음 내가 푼 답

```python
from random import *
sum=0
for i in range(1,51): # 총 탑승 승객 수
    lst=range(5, 51) # 승객당 시간 할당
    lst=list(lst) # list로 변환 / 사실 할 필요없음 shuffle때만 필요
    minute = sample(lst, 1) # lst리스트에서 하나를 뽑아냄
    x=minute[0]
    if x in range(5, 16): #5분이상 15분이하
        print("[0] {0}번째 손님 (소요시간 : {1}분)".format(i, x))
        sum+=1
    else: # 16분이상
        print("[ ] {0}번째 손님 (소요시간 : {1}분)".format(i, x))
print(sum)
```

#### 보완해본 내 답

```python
from random import *
sum=0
for i in range(1,51):
    minute = sample(range(5, 51), 1) #range(1,51)=[1,2,3,4,,,,50]이므로 리스트 중 하나를 뽑는 것이다.
    #만약 sample(range(1, 51), 2)이면 두개를 뽑아서 [5,10]으로 저장. 즉, 배열로 저장된다.
    if minute[0] in range(5, 16): #5분이상 15분이하
        print("[0] {0}번째 손님 (소요시간 : {1}분)".format(i, minute[0]))
        sum+=1
    else: # 16분이상
        print("[ ] {0}번째 손님 (소요시간 : {1}분)".format(i, minute[0]))
print(sum)
```

#### 문제해답

```python
from random import *

cnt = 0  # 총 탑승 승객 수
for i in range(1, 51):
    time = randrange(5, 51)
    if 5 <= time <= 15:
        print("[O] {0}번째 손님 (소요시간 : {1}분)".format(i, time))
        cnt += 1
    else:
        print("[ ] {0}번째 손님 (소요시간 : {1}분)".format(i, time))
print("총 탑승 승객 : {0}분".format(cnt))
```

✔️randrange와 sample의 차이

---

내 답이랑 차이는 randrange와 sample의 차이다. sample함수를 이해못했으며 sample은 배열내에서의 랜덤 인덱스, randrange는 랜덤 숫자이다.

# < 3️⃣. 함수와 변수 >

## 1. 함수

- ### 구조

```python
'''
def 함수이름(전달값1, 전달값2, ...):
    실행 명령문1
    실행 명령문2
    ....
    return 반환값1, 반환값2, ...
'''
```

- ### 기본

```python
def deposit(balance,money): #입금
    balance += money # 잔액에 돈을 입금한다
    print("{0}원이 입금완료되었습니다. 잔액은 {1}원입니다.".format(money, balance))
    return balance # 잔액
def withdraw(balance,money): #출금
    commission=100 # 수수료
    if balance+commission<money: # 잔액보다 출금금액이 클 경우
        print("잔액을 초과하였습니다. 출금이 불가능합니다.")
        return money, balance, commission
    else: # 잔액보다 출금금액이 작을  경우
        print("{0}를 출금하였습니다. 남은 금액은 {1}입니다.".format(money, balance-money-100))
        return money, balance-money-100, commission

balance =0 # 초기 자본 0원
balance = deposit(balance, 1000) # 1000원입금
balance = deposit(balance, 1000) # 1000원입금
money,balance,commission=withdraw(balance,500) # 튜플 형식으로 반환된다.
print("{0}의 출금결과.{1}금액 남았습니다. 수수료는 {2}입니다.".format(money, balance, commission))

'''
1000원이 입금완료되었습니다. 잔액은 1000원입니다.
1000원이 입금완료되었습니다. 잔액은 2000원입니다.
500를 출금하였습니다. 남은 금액은 1400입니다.
500의 출금결과.1400금액 남았습니다. 수수료는 100입니다.
'''
```

## 2. 기본값

기본값이란 초기설정을 해놓을수 있다.

```python
def profile(name, age, main_language):
    print("{0} 은 나이가 {1}이고 주요 언어는 {2}입니다." .format(name, age, main_language))

profile("김찬영", 29, "python")
#김찬영 은 나이가 29이고 주요 언어는 python입니다.
```

만약 age와 main_language가 기본값이 설정되있다면?

```python
def profile(name, age=18, main_language = "python"):
    print("{0} 은 나이가 {1}이고 주요 언어는 {2}입니다." .format(name, age, main_language))

profile("김도규")
profile("김찬영")
profile("이성우", 33)
profile("강민숙", 40, "java")


'''
김찬영 은 나이가 29이고 주요 언어는 python입니다.
김도규 은 나이가 18이고 주요 언어는 python입니다.
김찬영 은 나이가 18이고 주요 언어는 python입니다.
이성우 은 나이가 33이고 주요 언어는 python입니다.
강민숙 은 나이가 40이고 주요 언어는 java입니다.
'''
```

## 3. 키워드 인자

```python
profile("강민숙",, "java")
```

위 문장은 안된다. 두번째 인자만 기본값이 정해져있으면 어떻게 해야할까?

- ### 기본

```python
#다음과 같이 키워드인자를 사용하여 출력할수있다.
profile(name="강민숙", main_language="java")
#강민숙 은 나이가 18이고 주요 언어는 java입니다.

#뒤죽박죽도 가능하다.
profile(main_language="c", name="이경돈")
#이경돈 은 나이가 18이고 주요 언어는 c입니다.
```

## 4. 가변인자

만약 인자가 항상 다른 수일 경우면 어떻게 해야할까?
예를 들면 A는 사용가능한 언어가 2개고 B가 사용가능한 언어가 5개이다.

- ### 구조

```python
'''
def 함수이름(전달값1, 전달값2, ..., *가변인자):
    실행 명령문1
    실행 명령문2
    ....
    return 반환값
'''
```

- ### 기본

**end=" "** 이 구문이 없으면 자동으로 줄바꿈이 된다. 하지만 구문을 넣음으로써 줄바꿈대신 스페이스로 대체된다.

```python
def profile(name, age, *language): # *language는 튜플로 반환된다.
    print("이름은 {0}이고 나이는 {1}살이며, 사용가능한 언어는".format("name", age), end=" ")
    #end=" " 이 구문이 없으면 자동으로 줄바꿈이 된다. 하지만 구문을 넣음으로써 줄바꿈대신 스페이스로 대체된다.
    for lang in language: #language는 튜플형식이다.
        print("{0}".format(lang), end=" ") # =print(lang,end=" ")
    print("입니다. ")

profile("김찬영", 18, "Python", "Java", "C")
#이름은 name이고 나이는 18살이며, 사용가능한 언어는 Python Java C 입니다.
```

```python
profile(name="김찬영",age= 18, *langauge=("Python", "Java", "C"))
```

위 문장은 오류가 생긴다. 키워드 문자로는 답이 없을까?

## 5. 전역변수

- ### 구조

```python
global
```

- ### 기본

10개의 총기 중 2개의 총기를 경계근무에 쓸 경우

#### 1. 전역변수를 사용

```python
gun=10
def check_gun(use_gun):
    # gun -= use_gun # 전체 총 = 전체 총 - 사용한 총
    # 위와 같은 경우 오류가 뜬다. 함수 외부에 있는 변수를 사용할땐 global키워드를 사용한다.
    global gun #전역변수
    gun -= use_gun
    print("[함수 내] 남은 총 : {0}" .format(gun))

print("전체 총 : {0}" .format(gun))
check_gun(2) # 총2개사용
print("남은 총 : {0}" .format(gun))
'''
전체 총 : 10
[함수 내] 남은 총 : 8
남은 총 : 8
'''
```

#### 2. 지역변수를 사용

전달값과 반환값을 적절히 활용하는 방법

```python
gun=10
def check_gun(gun,use_gun):
    gun -= use_gun
    print("[함수 내] 남은 총 : {0}" .format(gun))
    return gun # 남은 총 반환

print("전체 총 : {0}" .format(gun))
gun = check_gun(gun, 2) #현재 총갯수, 사용한 총 매개변수로 사용
rint("남은 총 : {0}" .format(gun))

'''
전체 총 : 10
[함수 내] 남은 총 : 8
남은 총 : 8
'''
```

## 6. Quiz

- ### 문제

```python
Quiz) 표준 체중을 구하는 프로그램을 작성하시오
* 표준 체중 : 각 개인의 키에 적당한 체중

(성별에 따른 공식)
남자 : 키(m) * 키(m) * 22
여자 : 키(m) * 키(m) * 21

조건1 : 표준 체중은 별도의 함수 내에서 계산
    * 함수명 : std_weight
    * 전달값 : 키(height), 성별(gender)
조건2 : 표준 체중은 소수점 둘째자리까지 표시

(출력 예제)
키 175cm남자의 표준 체중은 67.38kg입니다.
```

- ### 정답

```python
def std_weight(height, gender):
    if gender == "남자":
        weight = height * height * 22 / 10000 # 키가 m이므로 cm로 변환 100*100
    elif gender == "여자":
        weight = height * height * 21 / 10000 # 키가 m이므로 cm로 변환 100*100
    else:
        print("잘못된 입력입니다.")
        weight=0
    return weight

gender = input("성을 입력하세요:")
height = int(input("키를 입력하세요:"))
weight = round(std_weight(height, gender), 2) #소수둘째자리에서 반올림
print("키{0}{1}의 표준 체중은 {2}kg입니다.".format(height, gender, weight))

'''
성을 입력하세요:남자
키를 입력하세요:175
키175남자의 표준 체중은 67.38kg입니다.
'''
```

# < 4️⃣. input & output >

## 1. 표준 입출력

- ### 출력

  - #### sep
    구분짓는 부호나 단어

  ```python
  #default는 공백이다
  print("Python", "Java")
  # Python Java
  print("Python", "Java", "JavaScript", sep=" vs ")
  #Python vs Java vs JavaScript
  ```

  - #### end

  끝에는 원래 개행문자(줄바꿈)이 자동으로 들어가는데 수동으로 줄바꿈대신 뭘넣을지 정하는 것

  ```python
  print("Python", "Java", sep=",", end="?")
  print("무엇이 더 재밌을까요?")
  #Python,Java?무엇이 더 재밌을까요?
  ```

  - #### ljust() & rjsut()

    왼쪽으로 정렬 , 오른쪽으로 정렬

    - 정렬을 사용하지 않을 경우

    ```python
    scores = {"수학":0, "영어":50, "코딩":100}
    for subject, scores in scores.items():
        print(subject, scores)
    '''
    수학 0
    영어 50
    코딩 100
    '''
    ```

    - ljust() & rjust() 를 사용할 경우

    ```python
    scores = {"수학":0, "영어":50, "과학":100}
    for subject, score in scores.items():
        print(subject.ljust(4), str(score).rjust(8), sep=":")
    '''
    수학  :       0
    영어  :      50
    과학  :     100
    '''
    ```

  - #### zfill

  * 채우기 기능
    길이가 문자열보다 적을 경우에는 모든 문자열을 출력합니다.  
    빈공간 0으로 채우기
    `python for i in range(1,21): print("대기번호"+ str(i).zfill(3)) #print("대기번호 {0}".format(i)zfill(3)) = X ''' 대기번호001 대기번호002 ~ 대기번호019 대기번호020 ''' `

  * 정수타입일 경우 0채우기

    ```python
    target = 2
    a = format(target, '03')
    b = '{0:06d}'.format(target)

    print(a, b)
    #002 000002
    ```

  - ### \*
    ```
    print("-" * 40)
    #--------------
    ```

- ### 입력

  ```python
  answer = input("아무 값이나 입력하세요 : ")
  print("입력하신 값은 " + answer + "입니다.")
  '''
  아무 값이나 입력하세요 : 34
  입력하신 값은 34입니다.
  '''
  ```

  answer가 숫자였으면 print문 안에서는 str(answer)로 묶어줘야하는데 묶지않아도 출력이 잘 나온다.  
   type(answer)를 하면 이유를 알 수 있는데

  ```python
  answer = input("아무 값이나 입력하세요 : ")
  print(type(answer))
  '''
  아무 값이나 입력하세요 : 34
  <class 'str'>
  '''
  ```

  **🦊 숫자를 입력하든 무엇을 입력하든 str이다.**

  - #### eval
    인수를 유효한 파이썬 표현식으로 인식한다.

  ```python
  data = eval(input("실수를 입력하시오 : "))
  print(data, type(data), data + 1.2)

  # 실수를 입력하시오 : 3.14
  # 3.14 <class 'float'> 4.34

  string = eval( input("(1,2) 처럼입력하시오 "))
  print(string, type(string))

  #(1,2) 처럼입력하시오 (1,2)
  #(1, 2) <class 'tuple'>
  ```

## 2. 다양한 출력포맷(format)

- ### 기본

```python
print("{0:^>+10}".format(500))
# ^ : 빈칸을 ^으로 채움
# > : 오른쪽 정렬
# + : 부호 표시
# 10 : 10개 공간 확보하기
# ^^^^^^+500
```

- ### 응용

  - #### 3자리수 마다 ,/ㅡ 찍기

    ```python
    print("{0:,}".format(100000000))
    # 100,000,000,000
    print("{0:+,}".format(-100000000))
    # 부호 표시 추가
    # -100,000,000,000
    print('[{0:>5_}] [{1:>5_}][{2:>5_}]'.format(11544435,-2544254,35454343))
    # [11_544_435] [-2_544_254] [35_454_343]
    ```

    - #### 실수형태

    ```python
    print("{0:f}".format(5/3))
    #1.666667
    ```

    ```python
    # 반올림
    print("{0:.2f}".format(5/3))
    # .(소수점) 2(둘째자리)까지 출력
    # 1.67
    ```

  - #### 진법
    ```python
    print('[{0:5b}] [{1:5b}] [{2:5b}]'.format(11,-22,33))    # [ 1011] [-10110] [100001]
    print('[{0:5o}] [{1:5o}] [{2:5o}]'.format(11,-22,33))    # [   13] [  -26] [   41]
    print('[{0:5x}] [{1:5x}] [{2:5x}]'.format(11,-22,33))    # [    b] [  -16] [   21]
    print('[{0:5X}] [{1:5X}] [{2:5X}]'.format(11,-22,33))    # [    B] [  -16] [   21]
    ```
  - #### 출력형식지정

    ```python
    number = 12345
    print("{0:,}".format(number)) #12,345

    # 문자열로 변경
    numberString = format(number, ',')
    print(numberString) #12,345

    # format 함수 사용
    # format(데이터,"출력형식")
    # 출력 형식은 표준 입출력의 출력 부분을 참조하세요
    print(format(1234567890.56789, ",")) # 3자리마다 , 추가 #1,234,567,890.56789
    print(format(1234567890.56789, "E")) # 지수로 표현 #1.234568E+09
    print(format(123, "x")) # 16진수로 표현 # 7b
    print(format(123, "o")) # 8진수로 표현 # 173
    print(format(123, "b")) # 2진수로 표현 # 1111011
    print(format(12345.56789, ">-12,.2f")) # 12,345.57
    print(format(12345.56789, "^-012,.2f")) # 012,345.5700
    print(format(12345.56789, "<-012,.2f")) # 12,345.57000
    print(format(12345.56789, "@>12,.2f")) # @@@12,345.57
    print(format(-12345.56789, "12,.2f")) # -12,345.57
    print(format(-12345.56789, "-12,.2f")) # -12,345.57
    print(format(12345.56789, "+12,.2f")) # +12,345.57
    print(format(0.1234, ".1%")) # 백분위 표시 / 소수점은 한자리까지만 # 12.3%
    ```

## 3. 파일입출력

- ### 구조

```python
open("파일명", "열기 모드", encoding="인코딩")
```

**모드는 읽기(r), 쓰기(w) ,이어쓰기(a)**  
encoding은 파일 내용으로 쓰는 언어와 관련된 것인데 utf8로 설정하면 한글도 포함

- ### 기본

  - #### 쓰기(w)

  ```python
  score_file = open("score.txt", "w", encoding="utf8") # w 모드로 열기
  print("수학 : 0", file = score_file) # 터미널 출력이 아닌 파일 출력
  print("영어: 50", file = score_file)
  score_file.close() # 파일 닫기
  # 출력은 안되지만 디렉토리에 score.txt파일이 생겼고 파일에 출력이 있다.
  ```

  - #### 이어쓰기(a)

  ```python
  score_file = open("score.txt", "a", encoding="utf8")
  score_file.write("과학 : 80") # = print("과학 : 80",file = score_file)
  score_file.write("\n코딩 : 100\n") # = print("코딩 : 100",file = score_file)
  #print 와 다른 점은 끝에 개행문자(\n)가 자동으로 포함되있지않아서 수동으로 포함시켜줘야한다.
  score_file.close()
  ```

  - #### 읽기(r)

    - 파일전체읽기

    ```python
    score_file = open("score.txt", "r", encoding="utf8")
    print(score_file.read()) #전체읽어오기
    score_file.close()
    '''
    수학 : 0
    영어 : 50
    과학 : 80
    코딩 : 100
    '''
    ```

    - 한줄씩 읽기

    ```python
    score_file = open("score.txt", "r", encoding="utf8")
    print(score_file.readline(), end="")
    print(score_file.readline(), end="")
    print(score_file.readline(), end="")
    print(score_file.readline(), end="")
    # print는 자체적으로 개행문자가 끝에 포함되어있는데, score.txt에서의 한줄에서도 하나씩 개행문자가 포함되어있으므로
    # end처리를 안하면 개행이 두번이나 된다. 그러므로 개행하나를 없애기위해 end=""로 처리해준다.
    score_file.close()
    '''
    수학 : 0
    영어 : 50
    과학 : 80
    코딩 : 100
    '''
    ```

    - while반복문을 이용하여 줄파악
      하지만 파일을 열어보기전까진 파일이 총 몇 줄로 구성되어있는지는 모른다.
      이 때 while 반복문을 이용하여 줄이 있는 동안 읽어오기를 해보자

      ```python
      score_file = open("score.txt", "r", encoding = "utf8")

      while True:
          line = score_file.readline()
          if not line: # line이 더이상 없다면
              break # 반복문 탈출
          print(line, end="") #줄바꿈 2번연속을 방지하기 위해 end 처리

      score_file.close()
      ```

    - readlines()를 이용하여 파일이 몇 줄인지 파악하기
      readlines()는 **list**형태로 저장한다.

      ```python
      score_file = open("score.txt", "r", encoding="utf8")

      lines = score_file.readlines()  # 모든 줄을 읽어와서 list 형태로 저장
      for line in lines:
          print(line, end="")  #줄바꿈 2번연속을 방지하기 위해 end 처리

      score_file.close()
      ```

# < 5️⃣. 클래스>

## 1. 클래스의 필요성

- #### ex)스타크래프트

---

#### 마린

```python
marine_name = "마린" # 이름
marine_hp = 40 # 체력
marine_damage = 5 # 공격력

print("{0} 유닛이 생성되었습니다.".format(marine_name))
print("체력 {0}, 공격력 {1}\n".format(marine_hp, marine_damage))

'''
마린 유닛이 생성되었습니다.
체력 40, 공격력 5
'''
```

#### 탱크

```python
tank_name = "탱크"
tank_hp = 150
tank_damage = 35
'''
탱크 유닛이 생성되었습니다.
체력 150, 공격력 35
'''

print("{} 유닛이 생성되었습니다.".format(tank_name))
print("체력 {0}, 공격력 {1}\n".format(tank_hp, tank_damage))
```

#### 탱크 2

```python
tank2_name = "탱크"
tank2_hp = 150
tank2_damage = 35

print("{} 유닛이 생성되었습니다.".format(tank2_name))
print("체력 {0}, 공격력 {1}\n".format(tank2_hp, tank2_damage))
```

이런 식으로 계속 하다간 너무 오래걸려 객체로 묶는 클래스로 구현하는 방법이 생겼다.

## 2. 클래스

- ### 구조

```python
'''
class 클래스명:
    def 메소드1(self, 전달값1, 전달값2, ...):
        실행명령문1
        실행명령문2
        ...

    def 메소드2(self, 전달값1, 전달값2, ...):
        실행명령문1
        실행명령문2
        ...
'''
```

- ### 위 유닛들을 클래스로 작성

```python
class Unit:
    def __init__(self, name, hp, damage):
        self.name = name #멤버변수
        self.hp = hp #멤버변수
        self.damage = damage #멤버변수
        print("{} 유닛이 생성되었습니다.".format(self.name))
        print("체력 {0}, 공격력 {1}".format(self.hp, self.damage))

marine = Unit("마린", 40, 5)
tank = Unit("탱크", 150, 35)
tank2 = Unit("탱크", 150, 35)
'''
마린 유닛이 생성되었습니다.
체력 40, 공격력 5
탱크 유닛이 생성되었습니다.
체력 150, 공격력 35
탱크 유닛이 생성되었습니다.
체력 150, 공격력 35
'''
```

## 3. **init**

**init**는 생성자와 같다. 사용자가 따로 호출하지 않아도 클래스 객체를 생성할 때 자동적으로 호출된다.  
이 때, 전달값에 해당하는 갯수만큼 넘겨줘야한다.

---

예제) 위 코드를 기반으로 봤을때

```python
marine2= Unit("마린")
# TypeError: __init__() missing 2 required positional arguments: 'hp' and 'damage'
```

위처럼 2개의 인자에 대한 값을 넘기라고 오류가 뜬다.

## 4. 멤버변수

클래스 내에서 정의된 변수, self.와 함께 사용  
클래스 내에서는 self.로 멤버변수 접근  
클래스 외부에서는 객체 이름뒤에 .을 찍고 접근

---

클로킹 기능

```python
wraith = Unit("레이스", 80, 5)
print("유닛 이름 : {0}, 공격력 : {1}".format(wraith.name, wraith.damage))

# 마인드 컨트롤 상대방 유닛을 내 것으로 만듬
wraith2 = Unit("빼앗은 레이스", 80, 5)

# 클로킹 기능 있을경우
wraith2.cloaking = True

# 클로킹 확인
if wraith2.cloaking == True:
    print("{0}은 클로킹 상태입니다.".format(wraith2.name)) #외부에서 호출하기때문에 객체이름뒤에 .으로 호출
```

이와 같이 클래스로부터 객체를 만든 다음 그 객체만을 위한 멤버 변수 정의가 필요한 경우  
클래스 외부에서 별도로 정의할 수 있다.

---

객체만 아닌 그 인스턴스만 가능하다.

| wraith1의 멤버 변수 | wraith2의 멤버변수 |
| ------------------- | ------------------ |
| name                | name               |
| hp                  | hp                 |
| damage              | damage             |
|                     | **_cloaking_**     |

```python
# 내가 만든 레이스 클로킹 확인
#if wraith1.cloaking == True:
#    print("{0}은 클로킹 상태입니다.".format(wraith1.name))
# NameError: name 'wraith1' is not defined 다음과 같은 오류가 뜬다.
'''
# Unit클래스에는 3개의 멤버변수(name, hp, damage)밖에 없기 때문이다.
# wraith2는 클래스 외부에서 직접 cloaking이라는 멤버 변수를 정의했었기때문에
# 모든 Unit객체가 아닌 오직 wraith2에만 해당된다.
'''
```

## 5. 메소드

메소드는 한 클래스에서 여러가지함수를 작성할수 있다.

- ### 구조

```python
Class A:
	def 함수명:
```

---

```python
# 공격형 유닛 클래스 작성
class AttackUnit:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage
    def attack(self, location): # 공격 함수
        print("{0} : {1}방향으로 적군을 공격합니다 . [ 공격력 {2} ]" \
              .format(self.name, location, self.damage)) # 보기 좋게 두줄로 나눌때 \ 사용
        # location 은 공격 방향이며, 명령을 받을 때마다 달라지고 외부에서 입력받기 때문에 self없이 전달
    def damaged(self, damage): # 데미지를 받았을때
        print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))  # 데미지 정보 출력
        self.hp -= damage  # 유닛의 체력에서 전달받은 damage 만큼 감소
        print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))  # 남은 체력 출력
        if self.hp <= 0:  # 남은 체력이 0 이하이면?
            print("{0} : 파괴되었습니다.".format(self.name))

# 공격형 유닛 클래스 사용

firebat = AttackUnit("파이어뱃", 50, 16)

# 공격형 유닛의 함수 사용
firebat.attack("5시")
# 파이어뱃 : 5시방향으로 적군을 공격합니다. [ 공격력 16 ]

firebat.damaged(25) # 남은 체력 25
firebat.damaged(25) # 남은 체력 0 , 파괴
'''
파이어뱃 : 25 데미지를 입었습니다.
파이어뱃 : 현재 체력은 25 입니다.
파이어뱃 : 25 데미지를 입었습니다.
파이어뱃 : 현재 체력은 0 입니다.
파이어뱃 : 파괴되었습니다.
'''
```

## 6. 상속

공격형 유닛이 아닌 메딕을 만들어보자

---

Unit클래스와 Attack 클래스는 **공통점**이 있다.
hp(체력)과 name(이름)이 있다는 점이다.
모든 유닛의 공통적인 부분일 것이고 이 부분을 Unit 클래스로 정의하면
나중에 다른 클래스(공격형,마법형) 등을 사용할때 상속하여 정의하면 된다.

---

- ### 구조

```python
class 자식클래스(상속받을 부모클래스):
```

---

```python
class Unit:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

class AttackUnit(Unit): #Unit를 상속받음
    def __init__(self, name, hp, damage):
        Unit.__init__(self, name, hp)
        self.damage = damage
    def attack(self, location):
        print("{0} : {1}방향으로 적군을 공격합니다 . [ 공격력 {2} ]" \
              .format(self.name, location, self.damage)) # 보기 좋게 두줄로 나눌때 \ 사용
        # location 은 공격 방향이며, 명령을 받을 때마다 달라지고 외부에서 입력받기 때문에 self없이 전달
    def damaged(self, damage):
        print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))  # 데미지 정보 출력
        self.hp -= damage  # 유닛의 체력에서 전달받은 damage 만큼 감소
        # self.damage가 아닌이유는 자기의 공격력이 아니라 외부에서 맞은 공격력이기때문이다.
        print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))  # 남은 체력 출력
        if self.hp <= 0:  # 남은 체력이 0 이하이면?
            print("{0} : 파괴되었습니다.".format(self.name))
#파이어뱃 생성
firebat = AttackUnit("파이어뱃", 50, 16)
firebat.attack("5시") # 5시로 공격
# 파이어뱃 : 5시방향으로 적군을 공격합니다 . [ 공격력 16 ]
firebat.damaged(25) # 공격1번받음
#파이어뱃 : 25 데미지를 입었습니다.
#파이어뱃 : 현재 체력은 25 입니다.
```

## 7. 다중상속

공격력 없는 공중유닛 드랍쉽
공격력 있는 공중유닛 레이스
둘의 공통점 : 날 수 있다.
날 수 있는기능 클래스를 만들자
공통적으로 공중은 날라다니기때문에
클래스 함수로는 날라가기가 있다. ex) AttackUnit의 attack느낌

---

- ### 구조

```python
class 자식클래스(부모클래스1, 부모클래스2, ...):
```

![다중상속](./Class/img/다중상속.png "다중상속")

```python
class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print("{0} : {1} 방향으로 날라갑니다. [ 속도 : {2} ] ".format(name, location, self.flying_speed))
        #AttackUnit의 attack 함수내 name은 self.name이다. 하지만 여기선 생성자에서 name이 생성안되어서 그냥 name이다.
```

---

발키리 = 공중 + 공격유닛
다중상속을 사용하자

---

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, damage)
        Flyable.__init__(self, flying_speed)

# 발키리
valkyrie = FlyableAttackUnit("발키리", 200, 6, 5)
valkyrie.fly(valkyrie.name, "5시")
```

## 8. 오버라이딩

앞선 공중유닛에게는 공중속도(fly)가 있었다.
하지만 지상유닛도 지상속도(move)가 있다.

```python
class Unit:
    def __init__(self, name, hp, speed): #speed 추가
        self.name = name
        self.hp = hp
        self.speed = speed
    def move(self, location): # 이동함수
        print(" {0} : {1} 방향으로 이동합니다. [ 속도 : {2} ]"\
              .format(self.name, location, self.speed))
```

---

Unit를 상속받는 클래스에서도 speed를 추가해줘야한다.

```python
class AttackUnit(Unit):
    def __init__(self, name, hp, speed, damage): # speed 추가
        Unit.__init__(self, name, hp, speed) # speed 추가
        self.damage = damage
```

---

공중유닛은 지상속도가 0이기때문에 0을 대입해준다.

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage) # 지상 speed 0
        Flyable.__init__(self, flying_speed)

# 지상유닛, 공중유닛 비교
# 벌쳐와 배틀크루져
# 벌쳐
vulture = AttackUnit("벌쳐", 80, 10, 20)
# 배틀크루져
battlecruiser = FlyableAttackUnit("배틀크루저", 500, 25, 3)

vulture.move("11시")
battlecruiser.fly(battlecruiser.name, "9시")
```

---

하지만 지상유닛의 이동과 공중유닛의 이동은 공중과 지상의 차이일뿐 결국 같은 개념이다.
오버라이딩 개념을 이용!

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)
        Flyable.__init__(self, flying_speed)

    def move(self, location): # Unit 클래스의 move() 메소드를 새롭게 정의 (오버라이딩)
        self.fly(self.name, location)
# 벌쳐
vulture = AttackUnit("벌쳐", 80, 10, 20)
# 배틀크루져
battlecruiser = FlyableAttackUnit("배틀크루저", 500, 25, 3)

vulture.move("11시")
battlecruiser.move("9시")
'''
 벌쳐 : 11시 방향으로 이동합니다. [ 속도 : 10 ]
배틀크루저 : 9시 방향으로 날라갑니다. [ 속도 : 3 ]
'''
```

## ![Overriding](./Class/img/overriding.png "오버라이딩")

- ### 현재까지 전체코드

```python
# 일반 유닛
class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed
        print("{0} 유닛이 생성되었습니다.".format(name))

    def move(self, location):
        print("[지상 유닛 이동]")
        print("{0} : {1} 방향으로 이동합니다. [속도 {2}]"\
            .format(self.name, location, self.speed))

# 공격 유닛
class AttackUnit(Unit):
    def __init__(self, name, hp, speed, damage):
        Unit.__init__(self, name, hp, speed)
        self.damage = damage

    def attack(self, location):
        print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]" \
            .format(self.name, location, self.damage))

    def damaged(self, damage):
        print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))
        self.hp -= damage
        print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))
        if self.hp <= 0:
            print("{0} : 파괴되었습니다.".format(self.name))

# 날 수 있는 기능을 가진 클래스
class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]"\
            .format(name, location, self.flying_speed))

# 공중 공격 유닛
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)
        Flyable.__init__(self, flying_speed)

    def move(self, location):
        print("[공중 유닛 이동]")
        self.fly(self.name, location)

# 벌쳐 : 지상 유닛, 기동성이 좋음
vulture = AttackUnit("벌쳐", 80, 10, 20) # 지상 speed 10

# 배틀크루저 : 공중 유닛, 체력도 굉장히 좋음, 공격력도 좋음
battlecruiser = FlyableAttackUnit("배틀크루저", 500, 25, 3)

vulture.move("11시")
# battlecruiser.fly(battlecruiser.name, "9시")
battlecruiser.move("9시") # 오버라이딩된 move() 호출

```

## 9. pass

함수를 다 작성하지 않아도 오류가 생기지 않는다.  
미완성하거나 나중에 작성할 것을 pass함수를 사용하면 된다.

---

```python
# 건물 클래스작성

class BuildingUnit(Unit):
    def __init__(self, name, hp, location):
        pass

supply_depot = BuildingUnit("서플라이 디폿", 500, "7시")
# 실행시 오류가 없다.
```

## 10. super

**super는 부모클래스에 접근하는 것**

```python
class BuildingUnit(Unit):
    def __init__(self, name, hp, location):
        super().__init__(name, hp, 0)
        # super().__init__(self, name, hp, 0) self는 제외
        # = Unit.__init__(self, name, hp, 0)
        self.location = location
```

---

Q) 만약 부모클래스가 두개라면?  
A) 제일 먼저 선언된 부모클래스로 한다.

```python
class Unit:
    def __init__(self):
        print("Unit 생성자")

class Flyable:
    def __init__(self):
        print("Flyable 생성자")

class FlyableUnit(Unit, Flyable):
    def __init__(self):
        super().__init__()

dropship = FlyableUnit()
# Unit 생성자
```

super는 제일 먼저 생성된 Unit로 인식하는 것을 확인할 수 있다.

## 11. 클래스 변수

클래스 변수는 클래스 이름과 함께 어디서든지 사용가능.
멤버변수는 각 클래스 객체마다 다른 값을 가진다면
클래스 변수는 모든 객체가 동일한 값을 가진다

- ### 구조

```python
class 클래스명:
    클래스변수 = False
    def __init__(self)
```

- ### 예제

---

##### 시즈모드

```python
class Tank(AttackUnit):
    siege_developed = False # 시즈모드가 개발되었나.
    #클래스변수
    def __init__(self):
        AttackUnit.__init__(self, "탱크", 150, 1, 35)
        self.siege_mode = False # 처음엔 시즈모드 해체상태이다.
    #시즈모드
    def set_siege_mode(self):
        if Tank.siege_developed == False: # 시즈모드개발이 안됐을경우, 메소드 탈출
            return # 클래스변수는 self가아니라 Tank(객체)로 선언해줘야한다.

        if self.siege_mode == True:
            print("{0} : 시즈모드를 해체합니다.".format(self.name))
            self.damage /= 2
            self.siege_mode = False
        else:
            print("{0} : 시즈모드를 시작합니다.".format(self.name))
            self.damage *= 2
            self.siege_mode = True
```

##### 마린

```python
class Marine(AttackUnit):
    def __init__(self):
        AttackUnit.__init__(self, "마린", 40, 1, 5) # 이름, 체력, 이동속도, 공격력

    # 스팀팩 : 일정 시간 동안 이동 및 공격 속도를 증가, 체력 10 감소
    def stimpack(self):
        if self.hp > 10:
            self.hp -= 10
            print("{0} : 스팀팩을 사용합니다. (HP 10 감소)".format(self.name))
        else:
            print("{0} : 체력이 부족하여 스팀팩을 사용하지 않습니다".format(self.name))
```

##### 마린생성

```python
m1 = Marine()
m2 = Marine()
m3 = Marine()
```

##### 탱크생성

```python
t1 = Tank()
t2 = Tank()
```

##### 유닛관리(부대지정) / append사용

```python
attack_units = []
attack_units.append(m1)
attack_units.append(m2)
attack_units.append(m3)
attack_units.append(t1)
attack_units.append(t2)

for unit in attack_units:
    unit.move("1시")
```

![종합](./Class/img/result.png "종합")

## 12. 인스턴스

객체가 특정 인스턴스인지 여부를 확인
각 유닛 객체들이 Marine 클래스의 인스턴스인지 Tank인지 여부 확인

- ### 구조

```python
isinstance(객체, 클래스)
```

---

```python
# 시즈모드 개발
Tank.siege_developed = True # 클래스변수이기때문에 클래스명 사용
print("시즈모드 개발 완료")

for unit in attack_units:
    if isinstance(unit,Marine):
        unit.stimpack()
    elif isinstance(unit, Tank):
        unit.set_siege_mode()
    else:
        print("잘못된 값입니다.")

for unit in attack_units:
    unit.attack("1시")
from random import *
for unit in attack_units:
    unit.damaged(randint(5, 20))
```

## 13. 퀴즈

- ### 문제

---

```python
Quiz) 주어진 코드를 활용하여 부동산 프로그램을 작성하시오.

(출력 예제)
총 3대의 매물이 있습니다.
강남 아파트 매매 10억 2010년
마포 오피스텔 전세 5억 2007년
송파 빌라 월세 500/50 2000년
```

- ### 해답

---

```python
class House:
    # 매물 초기화 : 위치, 건물 종류, 매물 종류, 가격, 준공년도
    def __init__(self, location, house_type, deal_type, price, completion_year):
        self.location = location
        self. house_type = house_type
        self.deal_type = deal_type
        self.price = price
        self.completion_year = completion_year
    # 매물 정보 표시
    def show_detail(self):
        print("{0} {1} {2} {3}억 {4}년"\
              .format(self.location, self.house_type, self.deal_type,\
                      self.price, self.completion_year))
house1 = House("강남", "아파트", "매매", 10, 2010)
house2 = House("마포", "오피스텔", "전세", 5, 2007)
house3 = House("송파", "빌라", "월세", 500, 2000)

houses = []
houses.append(house1)
houses.append(house2)
houses.append(house3)
for house in houses:
    house.show_detail()
```

# < 6️⃣. 예외처리 >

## 1. 예외처리

- ### 구조

```python
try:
    실행 명령문1
    실행 명령문2
    ...
except 에러 종류1:
    예외 처리 명령문1
    예외 처리 명령문2
    ...
except 에러 종류2:
    예외 처리 명령문1
    예외 처리 명령문2
    ...
```

- ### 실습

  ```python
  num1 = 6
  num2 = 3
  print("{0} / {1} = {2} 입니다.".format(num1, num2, int(num1/num2)))
  # 6 / 3 = 2 입니다.

  #num1 = int(input("1번째 숫자 입력:"))
  #num2 = int(input("2번째 숫자 입력:"))
  #print("{0} / {1} = {2} 입니다.".format(num1, num2, int(num1/num2)))
  # ValueError: invalid literal for int() with base 10: '삼'
  ```

  위 에러를 예외처리하자

  - #### 숫자가아닌 문자가 입력되었을땐
    ```python
    try:
        num1 = int(input("1번째 숫자 입력:"))
        num2 = int(input("2번째 숫자 입력:"))
        print("{0} / {1} = {2} 입니다.".format(num1, num2, int(num1/num2)))
    except ValueError:
        print("잘못된 값을 입력하였습니다.")
        '''
    '''
    1번째 숫자 입력:6
    2번째 숫자 입력:삼
    잘못된 값을 입력하였습니다.
    ```
  - #### 분모에 0을 입력했을때
    0을 입력했을때 에러 출력내용 : ZeroDivisionError: division by zero
    ```python
    try:
        num1 = int(input("1번째 숫자 입력:"))
        num2 = int(input("2번째 숫자 입력:"))
        print("{0} / {1} = {2} 입니다.".format(num1, num2, int(num1/num2)))
    except ValueError:
        print("잘못된 값을 입력하였습니다.")
    except ZeroDivisionError as err:
        print(err)
        '''
    '''
    1번째 숫자 입력:6
    2번째 숫자 입력:0
    division by zero # 에러 내용이 뜬다.
    ```
  - #### 나머지 모든 에러에 대한 처리
    ```python
    try:
        print("나누기 전용 계산기입니다.")
        nums = []
        nums.append(int(input("첫 번째 숫자를 입력하세요 : ")))
        nums.append(int(input("두 번째 숫자를 입력하세요 : ")))
        # nums.append(int(nums[0] / nums[1])) # 계산 결과를 리스트에 추가
        print("{0} / {1} = {2}".format(nums[0], nums[1], nums[2]))
    except ValueError:
        print("에러! 잘못된 값을 입력하였습니다.")
    except ZeroDivisionError as err:
        print(err)
    except Exception as err: # 나머지 모든 에러에 대한 처리
        print("알 수 없는 에러가 발생하였습니다.")
        print(err)
    '''
    나누기 전용 계산기입니다.
    첫 번째 숫자를 입력하세요 : 10
    두 번째 숫자를 입력하세요 : 5
    알 수 없는 에러가 발생하였습니다.
    list index out of range
    '''
    ```

## 2. raise

일부러 에러를 발생시키게 한다.

- ### 구조

```python
raise 에러종류
```

- ### 실습

```python
try:
    print("한 자리 숫자 나누기 전용 계산기입니다.")
    num1 = int(input("첫 번째 숫자를 입력하세요: "))
    num2 = int(input("두 번째 숫자를 입력하세요: "))
    if num1 >= 10 or num2 >= 10: # 입력받은 수가 한 자리수가 아니면 에러 발
        raise ValueError
    print("{0} / {1} = {2}".format(num1, num2, int(num1 / num2)))
except ValueError:
    print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.")

'''
한 자리 숫자 나누기 전용 계산기입니다.
첫 번째 숫자를 입력하세요: 10
두 번째 숫자를 입력하세요: 5
잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.
'''
```

## 3. 사용자 에러처리

에러가 발생하였을때 에러 내용을 사용자가 정의할 수 있다

```python
class BigNumberError(Exception): # 사용자 정의 에러
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return self.msg

try:
    print("한 자리 숫자 나누기 전용 계산기입니다.")
    num1 = int(input("첫 번째 숫자를 입력하세요: "))
    num2 = int(input("두 번째 숫자를 입력하세요: "))
    if num1 >= 10 or num2 >= 10: # 입력받은 수가 한 자리인지 확인
        raise BigNumberError("입력값 : {0}, {1}".format(num1, num2)) # 사용자가 정의한 자세한 에러 내
    print("{0} / {1} = {2}".format(num1, num2, int(num1 / num2)))
except ValueError:
    print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.")
except BigNumberError as err:
    print("에러가 발생하였습니다. 한 자리 숫자만 입력하세요.")
    print(err) # 에러 메시지 출력
'''
한 자리 숫자 나누기 전용 계산기입니다.
첫 번째 숫자를 입력하세요: 10
두 번째 숫자를 입력하세요: 5
에러가 발생하였습니다. 한 자리 숫자만 입력하세요.
입력값 : 10, 5
'''
```

## 4. finally

에러가 발생하건 말건 무조건 처리되는 것

- ### 구조

```python
try와 except 구문 맨밑
'''
try:
    실행 명령문1
    실행 명령문2
    ...
except 에러 종류1:
    예외 처리 명령문1
    예외 처리 명령문2
    ...
except 에러 종류2:
    예외 처리 명령문1
    예외 처리 명령문2
    ...
finally:
    실행 명령문1
    실행 명령문2
    ...
'''
```

- ### 실습

```python
class BigNumberError(Exception):
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return self.msg

try:
    print("한 자리 숫자 나누기 전용 계산기입니다.")
    num1 = int(input("첫 번째 숫자를 입력하세요: "))
    num2 = int(input("두 번째 숫자를 입력하세요: "))
    if num1 >= 10 or num2 >= 10:
        raise BigNumberError("입력값 : {0}, {1}".format(num1, num2))
    print("{0} / {1} = {2}".format(num1, num2, int(num1 / num2)))
except ValueError:
    print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.")
except BigNumberError as err:
    print("에러가 발생하였습니다. 한 자리 숫자만 입력하세요.")
    print(err)
finally: # 에러 발생 여부 상관 없이 항상 실행
    print("계산기를 이용해 주셔서 감사합니다.")

'''
한 자리 숫자 나누기 전용 계산기입니다.
첫 번째 숫자를 입력하세요: 10
두 번째 숫자를 입력하세요: 5
에러가 발생하였습니다. 한 자리 숫자만 입력하세요.
입력값 : 10, 5
계산기를 이용해 주셔서 감사합니다.
'''
```

## 5. 퀴즈

- ### 문제

```
Quiz) 동네에 항상 대기 손님이 있는 맛있는 치킨집이 있습니다.

대기 손님의 치킨 요리 시간을 줄이고자 자동 주문 시스템을 제작하였습니다.

시스템 코드를 확인하고 적절한 예외처리 구문을 넣으시오.



조건1 : 1보다 작거나 숫자가 아닌 입력값이 들어올 때는 ValueError 로 처리

        출력 메세지 : "잘못된 값을 입력하였습니다."

조건2 : 대기 손님이 주문할 수 있는 총 치킨량은 10마리로 한정

        치킨 소진 시 사용자 정의 에러[SoldOutError]를 발생시키고 프로그램 종료

        출력 메세지 : "재고가 소진되어 더 이상 주문을 받지 않습니다."
```

- ### 내가 푼 문제해설

```python
chicken = 10 # 남은 치킨 수
waiting = 1 # 홀 안에는 현재 만석. 대기번호 1부터 시작

class minusOrder(Exception):
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return self.msg

while(True):
    try:
        print("[남은 치킨 : {0}]".format(chicken))
        order = int(input("치킨 몇 마리 주문하시겠습니까?"))
        if order < 1:
            raise minusOrder("입력값: {0}".format(order))

        if order > chicken: # 남은 치킨보다 주문량이 많을 때
            print("재료가 부족합니다.")
        else:
            print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다.".format(waiting, order))
            waiting += 1 # 대기번호 증가
            chicken -= order # 주문 수 만큼 남은 치킨 감소
    except minusOrder as err:
        print("0이나 음수는 입력받을 수 없습니다.")
        print(err)
    except Exception as err:
        print("알 수 없는 에러가 발생하였습니다.")
        print(err)

```

- ### 문제 해설

```python
class soldOut(Exception):
    pass

while(True):
    try:
        print("[남은 치킨 : {0}]".format(chicken))
        order = int(input("치킨 몇 마리 주문하시겠습니까?"))
        if chicken == 0:
            raise soldOut

        if order > chicken: # 남은 치킨보다 주문량이 많을 때
            print("재료가 부족합니다.")
        elif order < 1:
            raise ValueError
        else:
            print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다.".format(waiting, order))
            waiting += 1 # 대기번호 증가
            chicken -= order # 주문 수 만큼 남은 치킨 감소
    except ValueError:
        print("0이나 음수는 입력받을 수 없습니다.")
    except soldOut:
        print("재고가 소진되었습니다.")
        break
```

ValueError는 애초에 지정되있는 함수이다. 내가 임의로 예외처리 클래스를 지을 땐 위와 같이 하자!## 1. 예외처리

- ### 구조

```python
try:
    실행 명령문1
    실행 명령문2
    ...
except 에러 종류1:
    예외 처리 명령문1
    예외 처리 명령문2
    ...
except 에러 종류2:
    예외 처리 명령문1
    예외 처리 명령문2
    ...
```

- ### 실습

  ```python
  num1 = 6
  num2 = 3
  print("{0} / {1} = {2} 입니다.".format(num1, num2, int(num1/num2)))
  # 6 / 3 = 2 입니다.

  #num1 = int(input("1번째 숫자 입력:"))
  #num2 = int(input("2번째 숫자 입력:"))
  #print("{0} / {1} = {2} 입니다.".format(num1, num2, int(num1/num2)))
  # ValueError: invalid literal for int() with base 10: '삼'
  ```

  위 에러를 예외처리하자

  - #### 숫자가아닌 문자가 입력되었을땐
    ```python
    try:
        num1 = int(input("1번째 숫자 입력:"))
        num2 = int(input("2번째 숫자 입력:"))
        print("{0} / {1} = {2} 입니다.".format(num1, num2, int(num1/num2)))
    except ValueError:
        print("잘못된 값을 입력하였습니다.")
        '''
    '''
    1번째 숫자 입력:6
    2번째 숫자 입력:삼
    잘못된 값을 입력하였습니다.
    ```
  - #### 분모에 0을 입력했을때
    0을 입력했을때 에러 출력내용 : ZeroDivisionError: division by zero
    ```python
    try:
        num1 = int(input("1번째 숫자 입력:"))
        num2 = int(input("2번째 숫자 입력:"))
        print("{0} / {1} = {2} 입니다.".format(num1, num2, int(num1/num2)))
    except ValueError:
        print("잘못된 값을 입력하였습니다.")
    except ZeroDivisionError as err:
        print(err)
        '''
    '''
    1번째 숫자 입력:6
    2번째 숫자 입력:0
    division by zero # 에러 내용이 뜬다.
    ```
  - #### 나머지 모든 에러에 대한 처리
    ```python
    try:
        print("나누기 전용 계산기입니다.")
        nums = []
        nums.append(int(input("첫 번째 숫자를 입력하세요 : ")))
        nums.append(int(input("두 번째 숫자를 입력하세요 : ")))
        # nums.append(int(nums[0] / nums[1])) # 계산 결과를 리스트에 추가
        print("{0} / {1} = {2}".format(nums[0], nums[1], nums[2]))
    except ValueError:
        print("에러! 잘못된 값을 입력하였습니다.")
    except ZeroDivisionError as err:
        print(err)
    except Exception as err: # 나머지 모든 에러에 대한 처리
        print("알 수 없는 에러가 발생하였습니다.")
        print(err)
    '''
    나누기 전용 계산기입니다.
    첫 번째 숫자를 입력하세요 : 10
    두 번째 숫자를 입력하세요 : 5
    알 수 없는 에러가 발생하였습니다.
    list index out of range
    '''
    ```

## 2. raise

일부러 에러를 발생시키게 한다.

- ### 구조

```python
raise 에러종류
```

- ### 실습

```python
try:
    print("한 자리 숫자 나누기 전용 계산기입니다.")
    num1 = int(input("첫 번째 숫자를 입력하세요: "))
    num2 = int(input("두 번째 숫자를 입력하세요: "))
    if num1 >= 10 or num2 >= 10: # 입력받은 수가 한 자리수가 아니면 에러 발
        raise ValueError
    print("{0} / {1} = {2}".format(num1, num2, int(num1 / num2)))
except ValueError:
    print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.")

'''
한 자리 숫자 나누기 전용 계산기입니다.
첫 번째 숫자를 입력하세요: 10
두 번째 숫자를 입력하세요: 5
잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.
'''
```

## 3. 사용자 에러처리

에러가 발생하였을때 에러 내용을 사용자가 정의할 수 있다

```python
class BigNumberError(Exception): # 사용자 정의 에러
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return self.msg

try:
    print("한 자리 숫자 나누기 전용 계산기입니다.")
    num1 = int(input("첫 번째 숫자를 입력하세요: "))
    num2 = int(input("두 번째 숫자를 입력하세요: "))
    if num1 >= 10 or num2 >= 10: # 입력받은 수가 한 자리인지 확인
        raise BigNumberError("입력값 : {0}, {1}".format(num1, num2)) # 사용자가 정의한 자세한 에러 내
    print("{0} / {1} = {2}".format(num1, num2, int(num1 / num2)))
except ValueError:
    print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.")
except BigNumberError as err:
    print("에러가 발생하였습니다. 한 자리 숫자만 입력하세요.")
    print(err) # 에러 메시지 출력
'''
한 자리 숫자 나누기 전용 계산기입니다.
첫 번째 숫자를 입력하세요: 10
두 번째 숫자를 입력하세요: 5
에러가 발생하였습니다. 한 자리 숫자만 입력하세요.
입력값 : 10, 5
'''
```

## 4. finally

에러가 발생하건 말건 무조건 처리되는 것

- ### 구조

```python
try와 except 구문 맨밑
'''
try:
    실행 명령문1
    실행 명령문2
    ...
except 에러 종류1:
    예외 처리 명령문1
    예외 처리 명령문2
    ...
except 에러 종류2:
    예외 처리 명령문1
    예외 처리 명령문2
    ...
finally:
    실행 명령문1
    실행 명령문2
    ...
'''
```

- ### 실습

```python
class BigNumberError(Exception):
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return self.msg

try:
    print("한 자리 숫자 나누기 전용 계산기입니다.")
    num1 = int(input("첫 번째 숫자를 입력하세요: "))
    num2 = int(input("두 번째 숫자를 입력하세요: "))
    if num1 >= 10 or num2 >= 10:
        raise BigNumberError("입력값 : {0}, {1}".format(num1, num2))
    print("{0} / {1} = {2}".format(num1, num2, int(num1 / num2)))
except ValueError:
    print("잘못된 값을 입력하였습니다. 한 자리 숫자만 입력하세요.")
except BigNumberError as err:
    print("에러가 발생하였습니다. 한 자리 숫자만 입력하세요.")
    print(err)
finally: # 에러 발생 여부 상관 없이 항상 실행
    print("계산기를 이용해 주셔서 감사합니다.")

'''
한 자리 숫자 나누기 전용 계산기입니다.
첫 번째 숫자를 입력하세요: 10
두 번째 숫자를 입력하세요: 5
에러가 발생하였습니다. 한 자리 숫자만 입력하세요.
입력값 : 10, 5
계산기를 이용해 주셔서 감사합니다.
'''
```

## 5. 퀴즈

- ### 문제

```
Quiz) 동네에 항상 대기 손님이 있는 맛있는 치킨집이 있습니다.

대기 손님의 치킨 요리 시간을 줄이고자 자동 주문 시스템을 제작하였습니다.

시스템 코드를 확인하고 적절한 예외처리 구문을 넣으시오.



조건1 : 1보다 작거나 숫자가 아닌 입력값이 들어올 때는 ValueError 로 처리

        출력 메세지 : "잘못된 값을 입력하였습니다."

조건2 : 대기 손님이 주문할 수 있는 총 치킨량은 10마리로 한정

        치킨 소진 시 사용자 정의 에러[SoldOutError]를 발생시키고 프로그램 종료

        출력 메세지 : "재고가 소진되어 더 이상 주문을 받지 않습니다."
```

- ### 내가 푼 문제해설

```python
chicken = 10 # 남은 치킨 수
waiting = 1 # 홀 안에는 현재 만석. 대기번호 1부터 시작

class minusOrder(Exception):
    def __init__(self, msg):
        self.msg = msg

    def __str__(self):
        return self.msg

while(True):
    try:
        print("[남은 치킨 : {0}]".format(chicken))
        order = int(input("치킨 몇 마리 주문하시겠습니까?"))
        if order < 1:
            raise minusOrder("입력값: {0}".format(order))

        if order > chicken: # 남은 치킨보다 주문량이 많을 때
            print("재료가 부족합니다.")
        else:
            print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다.".format(waiting, order))
            waiting += 1 # 대기번호 증가
            chicken -= order # 주문 수 만큼 남은 치킨 감소
    except minusOrder as err:
        print("0이나 음수는 입력받을 수 없습니다.")
        print(err)
    except Exception as err:
        print("알 수 없는 에러가 발생하였습니다.")
        print(err)

```

- ### 문제 해설

```python
class soldOut(Exception):
    pass

while(True):
    try:
        print("[남은 치킨 : {0}]".format(chicken))
        order = int(input("치킨 몇 마리 주문하시겠습니까?"))
        if chicken == 0:
            raise soldOut

        if order > chicken: # 남은 치킨보다 주문량이 많을 때
            print("재료가 부족합니다.")
        elif order < 1:
            raise ValueError
        else:
            print("[대기번호 {0}] {1} 마리 주문이 완료되었습니다.".format(waiting, order))
            waiting += 1 # 대기번호 증가
            chicken -= order # 주문 수 만큼 남은 치킨 감소
    except ValueError:
        print("0이나 음수는 입력받을 수 없습니다.")
    except soldOut:
        print("재고가 소진되었습니다.")
        break
```

ValueError는 애초에 지정되있는 함수이다. 내가 임의로 예외처리 클래스를 지을 땐 위와 같이 하자!

# < 7️⃣. 모듈 >

## 1. 모듈

아래코드로 theater_module.py로 메인코드(module.py)와 같은 경로에 작성.

```python
def price(people):
    print("{0} 명의 가격은 {1}원입니다.".format(people, people*10000))
def price_morning(people):
    print("{0}명의 가격은 {1}입니다".format(people, people*6000))
def price_soldier(people):
    print("{0}명의 가격은 {1}입니다".format(people, people * 4000))
```

theater_module.py 파일에 있는 함수들을 사용해보자

- ### import

  - #### import
    module.py에 아래 코드를 실습해보자

  ```python
  import theater_module
  theater_module.price(3)
  theater_module.price_morning(3)
  theater_module.price_soldier(3)
  '''
  3 명의 가격은 30000원입니다.
  3명의 가격은 18000입니다
  3명의 가격은 12000입니다
  '''
  ```

  - #### import ~ as

  ```python
  import theater_module as mv
  mv.price(3)
  mv.price_morning(3)
  mv.price_soldier(3)


  '''
  3 명의 가격은 30000원입니다.
  3명의 가격은 18000입니다
  3명의 가격은 12000입니다
  '''
  ```

- ### from ~ import
  - #### from ~ import \*
    모듈내 모든 것을 가져다가 사용하겠다.
  ```python
  from theater_module import *
  price(3)
  price_morning(3)
  price_soldier(3)
  '''
  3 명의 가격은 30000원입니다.
  3명의 가격은 18000입니다
  3명의 가격은 12000입니다
  '''
  ```
  - #### from ~ import A, B
  ```python
  from theater_module import price, price_morning
  price(3)
  price_morning(3)
  price_soldier(3)
  #NameError: name 'price_soldier' is not defined
  ```
  - #### from ~ import ~ as ~
    필요한 함수를 줄임말로 사용한다
  ```python
  from theater_module import price_soldier as price # price_soldier가 새로운 별명인 price 사용
  price(3)
  # 3명의 가격은 12000입니다
  ```

## 2. 패키지

여러 모듈을 모아 놓은 집합이다

- ### 실습
  travel 파이썬 패키지를 만들고 그 안에 thailand.py, vietnam.py, \_\_init\_\_.py를 만든다.  
   그 뒤 vietnam.py과 thailand.py에 다음과 같은 코드 추가
  ```python
  class VietnamPackage:
      def detail(self):
          print("[베트남 패키지 3박 5일] 다낭 효도 여행 60만원")
  ```
  module.py 메인코드로 돌아와서 아래 코드 작성
  ***
  - #### import 패키지.모듈
  ```python
  import travel.thailand
  trip_to = travel.thailand.ThailandPackage()
  trip_to.detail()
  # [태국 패키지 3박 5일] 방콕, 파타야 여행 (야시장 투어) 50만원
  ```
  - #### import로 직접 클래스나 함수 import는 불가능
  ```python
  #import travel.thailand.ThailandPackage # 클래스 직접 import 불가
  trip_to = travel.thailand.ThailandPackage()
  trip_to.detail()
  #ModuleNotFoundError: No module named 'travel.thailand.ThailandPackage'; 'travel.thailand' is not a package
  ```
  - #### from ~ import ~ 는 클래스나 함수 바로 import가능
  ```python
  from travel.thailand import ThailandPackage
  trip_to = ThailandPackage()
  trip_to.detail()
  # [태국 패키지 3박 5일] 방콕, 파타야 여행 (야시장 투어) 50만원
  ```
  - #### from 패키지 import 모듈
  ```python
  from travel import vietnam
  trip_to = vietnam.VietnamPackage()
  trip_to.detail()
  # [베트남 패키지 3박 5일] 다낭 효도 여행 60만원
  ```

## 3. 권한

```python
from random import *
```

random 모듈을 import 함으로써 random 모듈 내의 모든 것을 가져다 쓴다.

---

그렇다면 앞선 travl도 적용해보자

```python
from travel import *
trip_to = vietnam.VietnamPackage()
trip_to.detail()
# NameError: name 'vietanm' is not defined
```

why? 공개설정을 해야된다.  
travel/\_\_init\_\_.py 파일 수정

```python
__all__ = ["vietanm"] # vietnam 모듈 공개
```

module.py를 다시 실행하면

```python
# [베트남 패키지 3박 5일] 다낭 효도 여행 60만원
```

성공적으로 잘 나타난다.

## 4. 모듈 직접 실행

모듈이 외부에서 호출되어 실행하는지 직접 실행하는지 확인하기

- ### 실습
  thailand.py에서 다음과 같은 코드 추가

```python
if __name__ == "__main__": # 모듈이 직접 실행되는 경우
    print("Thailand 모듈을 직접 실행")
    print("이 문장은 모듈을 직접 실행할 때만 실행돼요")
    trip_to = ThailandPackage()
    trip_to.detail()
else: # 외부에서 모듈 호출되는 경우
    print("Thailand 외부에서 모듈 호출")
```

처음 import 할때만 어디서 호출이 됐는지 뜬다.

```python
from travel import *
trip_to = thailand.ThailandPackage()
# 이 때 'Thailand 외부에서 모듈 호출' 출력
# 이 이후로는 thailand를 import 선언해도 이미 선언했기때문에 안 뜬다.
trip_to.detail()
# [태국 패키지 3박 5일] 방콕, 파타야 여행 (야시장 투어) 50만원
```

## 5. 패키지, 모듈위치

### inspect

패키지나 모듈의 경로 확인

```python
import inspect
import random
print(inspect.getfile(random))
# /usr/local/Cellar/python/3.7.4/Frameworks/Python.framework/Versions/3.7/lib/python3.7/random.py
```

**random 모듈이 있는 lib폴더에 내가 만들어 놓은 travel패키지를 붙여넣으면  
같은 경로가 아니더라도 어디서든지 호출을 할수 있다.**

## 6. pip install

파이썬은 유용한 패키지가 많다. 그 패키지를 찾는 방법 중 하나는 https://pypi.org 사이트이다.

### 패키지 사용해보기

패키지 중 웹스크래핑에서의 대표적인 beautifulsoup 패키지를 사용해보자

1. [https://pypi.org](https://pypi.org "pypi") 접속
2. beautifulsoup4 검색
3. 터미널에서 pip install beautifulsoup4 입력
4. 잘 설치되었는지 확인하기
   ![terminal](./img/terminal.png "terminal")
5. 사이트에 나와있는 quick start 예제로 동작확인
   ![beautifulsoup4](./img/pypi_beautifulsoup4.png "beautifulsoup4")

```python
from bs4 import BeautifulSoup
soup = BeautifulSoup("<p>Some<b>bad<i>HTML")
print(soup.prettify())
```

경고 메세지는 무시해도 좋다. 설치방법을 알기 위한 것일 뿐

## 7. 내장함수

별도로 import를 하지 않고도 사용할 수 있도록 내장되어 있는 함수  
ex) input,upper 등등

- ### dir()
  어떤 객체가 매개변수로 들어갔을때 어떤 변수와 함수를 갖고있는지를 알려준다.  
   매개변수가 없을 경우 소스코드 범위내에 사용가능한 모듈 또는 객체가 출력된다.
  - #### 매개변수가 없을 경우
  ```python
  print(dir())
  # ['ThailandPackage', '__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'inspect', 'mv', 'price', 'price_morning', 'price_soldier', 'random', 'thailand', 'theater_module', 'travel', 'trip_to', 'vietnam']
  import pickle
  print(dir())
  # ['ThailandPackage', '__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'inspect', 'mv', 'price', 'price_morning', 'price_soldier', 'random', 'thailand', 'theater_module', 'travel', 'trip_to', 'vietnam']
  # pickle이 추가
  ```
  pickle이 추가된것을 확인할 수 있다.
  - #### random모듈을 직접 전달값으로 설정
  ```python
  print(dir(random))
  # ['BPF', 'LOG4', 'NV_MAGICCONST', 'RECIP_BPF', 'Random', 'SG_MAGICCONST', 'SystemRandom', 'TWOPI', '_BuiltinMethodType', '_MethodType', '_Sequence', '_Set', '__all__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', '_acos', '_bisect', '_ceil', '_cos', '_e', '_exp', '_inst', '_itertools', '_log', '_os', '_pi', '_random', '_sha512', '_sin', '_sqrt', '_test', '_test_generator', '_urandom', '_warn', 'betavariate', 'choice', 'choices', 'expovariate', 'gammavariate', 'gauss', 'getrandbits', 'getstate', 'lognormvariate', 'normalvariate', 'paretovariate', 'randint', 'random', 'randrange', 'sample', 'seed', 'setstate', 'shuffle', 'triangular', 'uniform', 'vonmisesvariate', 'weibullvariate']
  ```
  randint, randrange, sample, shuffle등 확인 가능
  - #### 모듈이 아닌 리스트를 확인해보자
  ```python
  lst = [1,2,3]
  print(dir(lst))
  # ['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
  ```
  append, clear, count, extend, index, reverse, sort 등을 확인 가능
  - #### 문자열인 경우
  ```python
  name = "Jim"
  print(dir(name))
  # ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
  ```
  upper, lower, find 등 다양한 기능 확인 가능
  ***
  더 자세한 내장함수에 대한 내용은 [list of python builtins](https://docs.python.org/3/library/functions.html "내장함수") 검색

## 8. 외장함수

외장함수는 내장함수와는 다르게 반드시 import를 해야한다. ex)random  
대표적인 외장함수를 보자

- ### glob
  어떤 경로 내의 폴더 또는 파일의 목록을 조회할 때 사용하며 윈도우에서의 dir명령이다.

```python
import glob
print(glob.glob("*.py")) # 확장자가 py인 모든 파일을 조회

# ['module.py', 'theater_module.py']
```

- ### os

  운영체제에서 제공하는 기본 기능

  - #### getcwd
    현재 작업 디렉토리 의미, cwd란 current working directory

  ```python
  import os
  print(os.getcwd()) # 현재 디렉토리
  #/Users/gimchan-yeong/PycharmProjects/HelloWorld/1. Basic/Module
  ```

  - #### path.exists, makedirs, rm
    path.exists : 매개변수와 동일한 이름의 폴더가 존재하는지 확인  
    makedirs : 새로운 폴더 생성  
    rm : 삭제

  ```python
  import os
  folder = "sample_dir"

  if os.path.exists(folder):
      print("이미 존재하는 폴더입니다.")
      os.rmdir(folder)
      print(folder, "폴더를 삭제하였습니다. ")
  else:
      os.makedirs(folder)
      print(folder, "폴더를 생상하였습니다.")
  ```

  처음 실행시 sample_dir폴더 생기는 것을 확인할 수 있다.

- ### listdir()
  ls와 비슷한 기능
  ```python
  import os
  print(os.listdir())
  # ['__pycache__', 'sample_dir', 'module.py', 'travel', 'theater_module.py']
  ```
- ### time

  - #### localtime()

    현재시간정보 확인

    ```python
    import time
    print(time.localtime())
    # time.struct_time(tm_year=2021, tm_mon=8, tm_mday=5, tm_hour=19, tm_min=46, tm_sec=23, tm_wday=3, tm_yday=217, tm_isdst=0)
    ```

    알아보기가 힘들다

  - #### strftime()
    문자열형태로 나타내기
    ```python
    print(time.strftime("%Y-%m-%d %H:%M:%S"))
    #2021-08-05 19:48:01
    ```

- ### datetime

  오늘 날짜출력

  ```python
  import datetime
  print("오늘 날짜는", datetime.date.today())
  #오늘 날짜는 2021-08-05
  ```

- ### timedelta
  일수를 저장한다. 디데이에 유용
  ```python
  import datetime
  today = datetime.date.today() # 오늘 날짜 저장
  td = datetime.timedelta(days=100) # 100일 저장
  print("우리가 만난지 100일은", today + td) # 오늘부터 100일 후
  ```
  더 자세한 외장함수에 대한 내용은 [list of python modules](https://docs.python.org/3/py-modindex.html "외장함수") 검색
