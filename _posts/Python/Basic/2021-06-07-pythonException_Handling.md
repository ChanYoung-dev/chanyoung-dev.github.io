---
permalink: /Python/Basic/Exception_Handling
title: "Python/Basic/Exception_Handling"
toc: true
categories:
  - Python🐸Basic
comments: true
sidebar:
  - title: "Python"
  - nav: "python-menu"
---

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

ValueError는 애초에 지정되있는 함수이다. 내가 임의로 예외처리 클래스를 지을 땐 위와 같이 하자!
