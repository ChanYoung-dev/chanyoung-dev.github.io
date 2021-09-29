---
permalink: /Python/Basic/Input&Output
title: "Python/Basic/Input&Output"
toc: true
categories:
  - Python🐸Basic
comments: true
sidebar:
  - title: "Python🐸"
  - nav: "python-menu"
---

# input & output

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
