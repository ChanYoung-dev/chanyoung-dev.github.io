---
permalink: /Python/Basic/Conditional_Sentence
title: "Python/Basic/Conditional_Sentence"
toc: true
categories:
  - Conditional_Sentence
comments: true
sidebar:
  - title: "Python"
  - nav: "python-menu"
---

# 조건문

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

## 8. Map

> map(function, iterable)

map은 첫번째 인자에 함수 두번째 인자에 iterable객체가 들어간다.

```python
def plus_two(x):
    return x+2

a = list(map(plus_two, [1, 2, 3, 4]))
print(a) # [3, 4, 5, 6]
a = list(map(lambda a:a+2, [1, 2, 3, 4]))
print(a) # [3, 4, 5, 6]
a = [a+2 for a in range(1,5)]
print(a) # [3, 4, 5, 6]
```

## 9. 퀴즈

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
