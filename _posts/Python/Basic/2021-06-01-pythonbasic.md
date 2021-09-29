---
permalink: /Python/Basic/Basic/
title: "Python/Basic/Basic"
toc: true
comments: true
categories:
  - Python🐸Basic
sidebar:
  - title: "Python🐸"
  - nav: "python-menu"
---

# 1. Basic

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
