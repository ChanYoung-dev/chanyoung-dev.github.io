---
permalink: /Python/Basic/InputOutput/
title: "InputOutput"
toc: true
categories:
  - Python๐ธPython-Bible
comments: true
sidebar:
  - title: "Python๐ธ"
  - nav: "python-menu"
tags: 
  - Python-Bible
  - Basic
list_name: Python-Bible
sexy: 1
main: "Python-Bible"
header:
  teaser: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_image: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_filter: 0.5
excerpt: ํ์ด์ฌ ์์ถ๋ ฅ
---

# input ๊ณผ output

## 1. ํ์ค ์์ถ๋ ฅ

- ### ์ถ๋ ฅ

  - #### sep
    ๊ตฌ๋ถ์ง๋ ๋ถํธ๋ ๋จ์ด

  ```python
  #default๋ ๊ณต๋ฐฑ์ด๋ค
  print("Python", "Java")
  # Python Java
  print("Python", "Java", "JavaScript", sep=" vs ")
  #Python vs Java vs JavaScript
  ```

  - #### end

  ๋์๋ ์๋ ๊ฐํ๋ฌธ์(์ค๋ฐ๊ฟ)์ด ์๋์ผ๋ก ๋ค์ด๊ฐ๋๋ฐ ์๋์ผ๋ก ์ค๋ฐ๊ฟ๋์  ๋ญ๋ฃ์์ง ์ ํ๋ ๊ฒ

  ```python
  print("Python", "Java", sep=",", end="?")
  print("๋ฌด์์ด ๋ ์ฌ๋ฐ์๊น์?")
  #Python,Java?๋ฌด์์ด ๋ ์ฌ๋ฐ์๊น์?
  ```

  - #### ljust() & rjsut()

    ์ผ์ชฝ์ผ๋ก ์ ๋ ฌ , ์ค๋ฅธ์ชฝ์ผ๋ก ์ ๋ ฌ

    - ์ ๋ ฌ์ ์ฌ์ฉํ์ง ์์ ๊ฒฝ์ฐ

    ```python
    scores = {"์ํ":0, "์์ด":50, "์ฝ๋ฉ":100}
    for subject, scores in scores.items():
        print(subject, scores)
    '''
    ์ํ 0
    ์์ด 50
    ์ฝ๋ฉ 100
    '''
    ```

    - ljust() & rjust() ๋ฅผ ์ฌ์ฉํ  ๊ฒฝ์ฐ

    ```python
    scores = {"์ํ":0, "์์ด":50, "๊ณผํ":100}
    for subject, score in scores.items():
        print(subject.ljust(4), str(score).rjust(8), sep=":")
    '''
    ์ํ  :       0
    ์์ด  :      50
    ๊ณผํ  :     100
    '''
    ```

  - #### zfill
    * ์ฑ์ฐ๊ธฐ ๊ธฐ๋ฅ
      ๊ธธ์ด๊ฐ ๋ฌธ์์ด๋ณด๋ค ์ ์ ๊ฒฝ์ฐ์๋ ๋ชจ๋  ๋ฌธ์์ด์ ์ถ๋ ฅํฉ๋๋ค.  
      ๋น๊ณต๊ฐ 0์ผ๋ก ์ฑ์ฐ๊ธฐ
      ```python 
      for i in range(1,21):
        print("๋๊ธฐ๋ฒํธ"+ str(i).zfill(3)) #print("๋๊ธฐ๋ฒํธ {0}".format(i)zfill(3)) = X 
      ''' ๋๊ธฐ๋ฒํธ001 ๋๊ธฐ๋ฒํธ002 ~ ๋๊ธฐ๋ฒํธ019 ๋๊ธฐ๋ฒํธ020 ''' 
      ```

    * ์ ์ํ์์ผ ๊ฒฝ์ฐ 0์ฑ์ฐ๊ธฐ

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

- ### ์๋ ฅ

  ```python
  answer = input("์๋ฌด ๊ฐ์ด๋ ์๋ ฅํ์ธ์ : ")
  print("์๋ ฅํ์  ๊ฐ์ " + answer + "์๋๋ค.")
  '''
  ์๋ฌด ๊ฐ์ด๋ ์๋ ฅํ์ธ์ : 34
  ์๋ ฅํ์  ๊ฐ์ 34์๋๋ค.
  '''
  ```

  answer๊ฐ ์ซ์์์ผ๋ฉด print๋ฌธ ์์์๋ str(answer)๋ก ๋ฌถ์ด์ค์ผํ๋๋ฐ ๋ฌถ์ง์์๋ ์ถ๋ ฅ์ด ์ ๋์จ๋ค.  
   type(answer)๋ฅผ ํ๋ฉด ์ด์ ๋ฅผ ์ ์ ์๋๋ฐ

  ```python
  answer = input("์๋ฌด ๊ฐ์ด๋ ์๋ ฅํ์ธ์ : ")
  print(type(answer))
  '''
  ์๋ฌด ๊ฐ์ด๋ ์๋ ฅํ์ธ์ : 34
  <class 'str'>
  '''
  ```

  **๐ฆ ์ซ์๋ฅผ ์๋ ฅํ๋  ๋ฌด์์ ์๋ ฅํ๋  str์ด๋ค.**

  - #### eval
    ์ธ์๋ฅผ ์ ํจํ ํ์ด์ฌ ํํ์์ผ๋ก ์ธ์ํ๋ค.

  ```python
  data = eval(input("์ค์๋ฅผ ์๋ ฅํ์์ค : "))
  print(data, type(data), data + 1.2)

  # ์ค์๋ฅผ ์๋ ฅํ์์ค : 3.14
  # 3.14 <class 'float'> 4.34

  string = eval( input("(1,2) ์ฒ๋ผ์๋ ฅํ์์ค "))
  print(string, type(string))

  #(1,2) ์ฒ๋ผ์๋ ฅํ์์ค (1,2)
  #(1, 2) <class 'tuple'>
  ```

## 2. ๋ค์ํ ์ถ๋ ฅํฌ๋งท(format)

- ### ๊ธฐ๋ณธ

```python
print("{0:^>+10}".format(500))
# ^ : ๋น์นธ์ ^์ผ๋ก ์ฑ์
# > : ์ค๋ฅธ์ชฝ ์ ๋ ฌ
# + : ๋ถํธ ํ์
# 10 : 10๊ฐ ๊ณต๊ฐ ํ๋ณดํ๊ธฐ
# ^^^^^^+500
```

- ### ์์ฉ

  - #### 3์๋ฆฌ์ ๋ง๋ค ,/ใก ์ฐ๊ธฐ

    ```python
    print("{0:,}".format(100000000))
    # 100,000,000,000
    print("{0:+,}".format(-100000000))
    # ๋ถํธ ํ์ ์ถ๊ฐ
    # -100,000,000,000
    print('[{0:>5_}] [{1:>5_}][{2:>5_}]'.format(11544435,-2544254,35454343))
    # [11_544_435] [-2_544_254] [35_454_343]
    ```

    - #### ์ค์ํํ

    ```python
    print("{0:f}".format(5/3))
    #1.666667
    ```

    ```python
    # ๋ฐ์ฌ๋ฆผ
    print("{0:.2f}".format(5/3))
    # .(์์์ ) 2(๋์งธ์๋ฆฌ)๊น์ง ์ถ๋ ฅ
    # 1.67
    ```

  - #### ์ง๋ฒ
    ```python
    print('[{0:5b}] [{1:5b}] [{2:5b}]'.format(11,-22,33))    # [ 1011] [-10110] [100001]
    print('[{0:5o}] [{1:5o}] [{2:5o}]'.format(11,-22,33))    # [   13] [  -26] [   41]
    print('[{0:5x}] [{1:5x}] [{2:5x}]'.format(11,-22,33))    # [    b] [  -16] [   21]
    print('[{0:5X}] [{1:5X}] [{2:5X}]'.format(11,-22,33))    # [    B] [  -16] [   21]
    ```
  - #### ์ถ๋ ฅํ์์ง์ 

    ```python
    number = 12345
    print("{0:,}".format(number)) #12,345

    # ๋ฌธ์์ด๋ก ๋ณ๊ฒฝ
    numberString = format(number, ',')
    print(numberString) #12,345

    # format ํจ์ ์ฌ์ฉ
    # format(๋ฐ์ดํฐ,"์ถ๋ ฅํ์")
    # ์ถ๋ ฅ ํ์์ ํ์ค ์์ถ๋ ฅ์ ์ถ๋ ฅ ๋ถ๋ถ์ ์ฐธ์กฐํ์ธ์
    print(format(1234567890.56789, ",")) # 3์๋ฆฌ๋ง๋ค , ์ถ๊ฐ #1,234,567,890.56789
    print(format(1234567890.56789, "E")) # ์ง์๋ก ํํ #1.234568E+09
    print(format(123, "x")) # 16์ง์๋ก ํํ # 7b
    print(format(123, "o")) # 8์ง์๋ก ํํ # 173
    print(format(123, "b")) # 2์ง์๋ก ํํ # 1111011
    print(format(12345.56789, ">-12,.2f")) # 12,345.57
    print(format(12345.56789, "^-012,.2f")) # 012,345.5700
    print(format(12345.56789, "<-012,.2f")) # 12,345.57000
    print(format(12345.56789, "@>12,.2f")) # @@@12,345.57
    print(format(-12345.56789, "12,.2f")) # -12,345.57
    print(format(-12345.56789, "-12,.2f")) # -12,345.57
    print(format(12345.56789, "+12,.2f")) # +12,345.57
    print(format(0.1234, ".1%")) # ๋ฐฑ๋ถ์ ํ์ / ์์์ ์ ํ์๋ฆฌ๊น์ง๋ง # 12.3%
    ```

## 3. ํ์ผ์์ถ๋ ฅ

- ### ๊ตฌ์กฐ

```python
open("ํ์ผ๋ช", "์ด๊ธฐ ๋ชจ๋", encoding="์ธ์ฝ๋ฉ")
```

**๋ชจ๋๋ ์ฝ๊ธฐ(r), ์ฐ๊ธฐ(w) ,์ด์ด์ฐ๊ธฐ(a)**  
encoding์ ํ์ผ ๋ด์ฉ์ผ๋ก ์ฐ๋ ์ธ์ด์ ๊ด๋ จ๋ ๊ฒ์ธ๋ฐ utf8๋ก ์ค์ ํ๋ฉด ํ๊ธ๋ ํฌํจ

- ### ๊ธฐ๋ณธ

  - #### ์ฐ๊ธฐ(w)

  ```python
  score_file = open("score.txt", "w", encoding="utf8") # w ๋ชจ๋๋ก ์ด๊ธฐ
  print("์ํ : 0", file = score_file) # ํฐ๋ฏธ๋ ์ถ๋ ฅ์ด ์๋ ํ์ผ ์ถ๋ ฅ
  print("์์ด: 50", file = score_file)
  score_file.close() # ํ์ผ ๋ซ๊ธฐ
  # ์ถ๋ ฅ์ ์๋์ง๋ง ๋๋ ํ ๋ฆฌ์ score.txtํ์ผ์ด ์๊ฒผ๊ณ  ํ์ผ์ ์ถ๋ ฅ์ด ์๋ค.
  ```

  - #### ์ด์ด์ฐ๊ธฐ(a)

  ```python
  score_file = open("score.txt", "a", encoding="utf8")
  score_file.write("๊ณผํ : 80") # = print("๊ณผํ : 80",file = score_file)
  score_file.write("\n์ฝ๋ฉ : 100\n") # = print("์ฝ๋ฉ : 100",file = score_file)
  #print ์ ๋ค๋ฅธ ์ ์ ๋์ ๊ฐํ๋ฌธ์(\n)๊ฐ ์๋์ผ๋ก ํฌํจ๋์์ง์์์ ์๋์ผ๋ก ํฌํจ์์ผ์ค์ผํ๋ค.
  score_file.close()
  ```

  - #### ์ฝ๊ธฐ(r)

    - ํ์ผ์ ์ฒด์ฝ๊ธฐ

    ```python
    score_file = open("score.txt", "r", encoding="utf8")
    print(score_file.read()) #์ ์ฒด์ฝ์ด์ค๊ธฐ
    score_file.close()
    '''
    ์ํ : 0
    ์์ด : 50
    ๊ณผํ : 80
    ์ฝ๋ฉ : 100
    '''
    ```

    - ํ์ค์ฉ ์ฝ๊ธฐ

    ```python
    score_file = open("score.txt", "r", encoding="utf8")
    print(score_file.readline(), end="")
    print(score_file.readline(), end="")
    print(score_file.readline(), end="")
    print(score_file.readline(), end="")
    # print๋ ์์ฒด์ ์ผ๋ก ๊ฐํ๋ฌธ์๊ฐ ๋์ ํฌํจ๋์ด์๋๋ฐ, score.txt์์์ ํ์ค์์๋ ํ๋์ฉ ๊ฐํ๋ฌธ์๊ฐ ํฌํจ๋์ด์์ผ๋ฏ๋ก
    # end์ฒ๋ฆฌ๋ฅผ ์ํ๋ฉด ๊ฐํ์ด ๋๋ฒ์ด๋ ๋๋ค. ๊ทธ๋ฌ๋ฏ๋ก ๊ฐํํ๋๋ฅผ ์์ ๊ธฐ์ํด end=""๋ก ์ฒ๋ฆฌํด์ค๋ค.
    score_file.close()
    '''
    ์ํ : 0
    ์์ด : 50
    ๊ณผํ : 80
    ์ฝ๋ฉ : 100
    '''
    ```

    - while๋ฐ๋ณต๋ฌธ์ ์ด์ฉํ์ฌ ์คํ์
      ํ์ง๋ง ํ์ผ์ ์ด์ด๋ณด๊ธฐ์ ๊น์ง ํ์ผ์ด ์ด ๋ช ์ค๋ก ๊ตฌ์ฑ๋์ด์๋์ง๋ ๋ชจ๋ฅธ๋ค.
      ์ด ๋ while ๋ฐ๋ณต๋ฌธ์ ์ด์ฉํ์ฌ ์ค์ด ์๋ ๋์ ์ฝ์ด์ค๊ธฐ๋ฅผ ํด๋ณด์

      ```python
      score_file = open("score.txt", "r", encoding = "utf8")

      while True:
          line = score_file.readline()
          if not line: # line์ด ๋์ด์ ์๋ค๋ฉด
              break # ๋ฐ๋ณต๋ฌธ ํ์ถ
          print(line, end="") #์ค๋ฐ๊ฟ 2๋ฒ์ฐ์์ ๋ฐฉ์งํ๊ธฐ ์ํด end ์ฒ๋ฆฌ

      score_file.close()
      ```

    - readlines()๋ฅผ ์ด์ฉํ์ฌ ํ์ผ์ด ๋ช ์ค์ธ์ง ํ์ํ๊ธฐ
      readlines()๋ **list**ํํ๋ก ์ ์ฅํ๋ค.

      ```python
      score_file = open("score.txt", "r", encoding="utf8")

      lines = score_file.readlines()  # ๋ชจ๋  ์ค์ ์ฝ์ด์์ list ํํ๋ก ์ ์ฅ
      for line in lines:
          print(line, end="")  #์ค๋ฐ๊ฟ 2๋ฒ์ฐ์์ ๋ฐฉ์งํ๊ธฐ ์ํด end ์ฒ๋ฆฌ

      score_file.close()
      ```
