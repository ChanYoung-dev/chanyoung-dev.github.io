---
permalink: /Python/Basic/Basic/
title: "Basic"
toc: true
comments: true
categories:
  - Python๐ธPython-Bible
sidebar:
  - title: "Python๐ธ"
  - nav: "python-menu"
tags: 
  - Python-Bible
list_name: Python-Bible
sexy: 1
main: "Python-Bible"
header:
  teaser: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_image: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_filter: 0.5
excerpt: ํ์ด์ฌ ๊ธฐ๋ณธ๋ฌธ๋ฒ
---

# 1. Basic

- ## ๊ธฐ์ด

```python
->๋ฌธ์์ด
print("ใ"*3) #ใใใ

->boolean
print(5>10) # = print(False) = print(not True) = print(not (5<10))

->๋ณ์ํ
animal = "๊ณ ์์ด"
name = "ํดํผ"
age = 4
hobby = "๋ฎ์ "
is_adult = age >= 3

print("์ฐ๋ฆฌ์ง" + animal + "์ ์ด๋ฆ์ " + name + "์์")
hobby = "๊ณต๋์ด" #์ค๊ฐ์ ๋ฐ๊ฟ ์ ์์.
print(name + "๋ " + str(age) + "์ด์ด๋ฉฐ, " + hobby + "์ ์์ฃผ ์ข์ํด์") #๋ณ์ํ์ ๋ฌธ์ฅ์์ ๋ฃ์๋ str์ ํด์ค์ผํ๋ค.
print(name, "๋ ", age, "์ด์ด๋ฉฐ, ", hobby, "์ ์์ฃผ ์ข์ํด์")
# ๊ฒฐ๊ณผ๋ ๊ฐ๊ณ  ๋ณ์์ str์ ํด์ค ํ์๊ฐ ์๋ค..๊ทธ๋ฌ๋ ๊ณต๋ฐฑ์ด ํฌํจ๋๋ค.
print(name, "๋ ", age, "์ด์ด๋ฉฐ, ", hobby, "์ ์์ฃผ ์ข์ํด์", sep='')
#sep์ ๋ฃ์ด์ฃผ๋ฉด ๊ณต๋ฐฑ์ด ์์ด์ง๋ค. default๊ฐ sep=' '์ด๊ธฐ๋๋ฌธ์ ๊ณต๋ฐฑ์ด ๋ค์ด๊ฐ๊ฒ์ด๋ค.
print(name + "๋ ์ด๋ฅธ์ผ๊น์? " + str(is_adult))

->์ฐ์ฐ์
print(2**3) # 2^3=8 =3์ ๊ณฑ
print(5//3) # 1 =๋ชซ
```

- ## ์ซ์์ฒ๋ฆฌํจ์

```python
print(abs(-5)) # 5
print(pow(4,2)) # 4^2 = 4*4 = 16
print(max(5,12)) # 12
print(min(5,12)) # 5
print(round(3.14)) # 3 ๋ฐ์ฌ๋ฆผ
print(round(4.99)) # 5 ๋ฐ์ฌ๋ฆผ
print(divmod(10, 3))  # (3.0, 1.0) ๋ชซ๊ณผ ๋๋จธ์ง

from math import *
print(floor(4.99)) # 4 ๋ด๋ฆผ
print(ceil(3.14)) # 4 ์ฌ๋ฆผ
print(sqrt(16)) # 4 ๋ฃจํธ,์ ๊ณฑ๊ทผ

from random import *
print(random()) #๋๋ค๊ฐ 0.0~ 1.0 ๋ฏธ๋ง์ ์์์ ๊ฐ ์์ฑ
print(random() * 10) #๋๋ค๊ฐ 0.0~ 10.0 ๋ฏธ๋ง์ ์์์ ๊ฐ ์์ฑ
print(int(random() * 10)) # 0 ~ 10 ๋ฏธ๋ง์ ์์์ ๊ฐ ์์ฑ
print(int(random() * 10) + 1) # 1~10 ๋ฏธ๋ง์ ์์์ ๊ฐ ์์ฑ
print(int(random() * 45) + 1) # 1~45 ์ดํ์ ์์์ ๊ฐ ์์ฑ

print(randrange(1, 46)) #1~46 ๋ฏธ๋ง์ ์์์ ๊ฐ ์์ฑ
print(randint(1, 45)) #1~45 ์ดํ์ ์์์ ๊ฐ ์์ฑ

sentence = '๋๋ ์๋์๋๋ค' # = "๋๋ ์๋์๋๋ค"
sentence2 = """๋๋ ์๋์ด๊ณ ,
ํ์ด์ฌ์ ์ฌ์์"""
print(sentence2)
```

- ## ์ซ์์ด ๋ถ๋ฆฌํ๊ธฐ

```python
birth = 19920822
year = birth//10000 # 1992
month1 = birth%10000//100 #08
month2 = birth//100%100 #08
date = birth%100 # 22

```

- ## ์ฌ๋ผ์ด์ฑ

```python
jumin = "990120-1234567"
print("์ฑ๋ณ : " + jumin[7])
print("์ฐ : " + jumin[0:2]) # 0 ๋ถํฐ 2 ์ง์ ๊น์ง
print("์ : " + jumin[2:4])
print("์ผ : " + jumin[4:6])
print("์๋์์ผ : " + jumin[0:6]) # jumin[0:6]==jum[:6]
print("๋ค 7์๋ฆฌ : " + jumin[7:])
print("๋ค 7์๋ฆฌ (๋ค์์๋ถํฐ) : " + jumin[-7:]) # 990120-1234567 ์์ ๋งจ ๋ง์ง๋ง์๋ฆฌ์ธ 7์ -1๋ฒ์งธ์ด๋ค =jumin[-1] ๊ทธ๋ฌ๋ฏ๋ก 1์ jumin[-7]์ด๋ค.
```

- ## ๋ฌธ์์ด ์ฒ๋ฆฌ

```python
python = "Python is Amazing"
print(python.lower()) # ์ ๋ถ ์๋ฌธ์๋ก ๋ฐ๊พธ๊ธฐ
print(python.upper()) # ์ ๋ถ ๋๋ฌธ์๋ก ๋ฐ๊พธ๊ธฐ
print(python[0].isupper()) # 0๋ฒ์งธ์๋ฆฌ๊ฐ ๋๋ฌธ์์ธ๊ฐ? True
print(len(python)) #๋ฌธ์์ด ๊ธธ์ด
print(python.replace("Python", "Java")) #Java is Amazing
print(python.replace("!", "^-^", 2)) # 3๋ฒ์งธ ์ธ์ ๊ฐฏ์๋งํผ ๋ฐ๊พธ์ด์ค๋ค. #Python is Amazing^-^^-^
#Python๋ฌธ์์ด๋ถ๋ถ์ Java๋ก ๋ฐ๊พธ๊ธฐ
print(python) # Pythio is Amazing. ์ ์ฅ์ ์๋๋ค.

index = python.index("n") # n์ ๋ช๋ฒ์งธ์ ์์
print(index)
index = python.index("n", index + 1) # n์ ๋ช๋ฒ์งธ์ ์๋๊ฐ ์์์์น๋ index+1๋ถํฐ์ด๋ค.
print(index)

print(python.find("Python")) # ์์ผ๋ฉด 0 ์์ผ๋ฉด -1
print(python.index("Python")) #  ์์ผ๋ฉด 0 ์์ผ๋ฉด ์ค๋ฅ

print(python.count("n")) # n ์นด์ดํฐ
```

- ## ๋ฌธ์์ด ๋๋๊ธฐ, ํฉ์น๊ธฐ

  > ๋๋๊ธฐ : ๋ฌธ์์ด.split(self, sep=None, maxsplit=-1)

      ํฉ์น๊ธฐ : ๋ฌธ์์ด.join(self, iterable)

  ```python
  str = "๊ฐ ๋ ๋ค ๋ผ ๋ง"
  print("str : {0} type: {1}".format(str, type(str)))
  # str : ๊ฐ ๋ ๋ค ๋ผ ๋ง type: <class 'str'>

  str_split = str.split(" ") # list๋ก ๋ฐ๋๋ค.
  print("str_split : {0} type: {1}".format(str_split, type(str_split)))
  # str_split : ['๊ฐ', '๋', '๋ค', '๋ผ', '๋ง'] type: <class 'list'>

  str_join_comma = ','.join(str_split) # str๋ก ๋ฐ๋๋ค
  print("str_join_comma : {0} type: {1}".format(str_join_comma, type(str_join_comma)))
  # str_join_comma : ๊ฐ,๋,๋ค,๋ผ,๋ง type: <class 'str'>

  str_join_empty = ''.join(str_split) # str๋ก ๋ฐ๋๋ค
  print("str_join_empty : {0} type: {1}".format(str_join_empty, type(str_join_empty)))
  # str_join_empty : ๊ฐ๋๋ค๋ผ๋ง type: <class 'str'>
  ```

  - ### ์์ฉ
    ์ซ์ / ๋ฌธ์์ด ๋ค์ง๊ธฐ

  ```python
  # ์ ์ํ์ ๋ฌธ์์ด๋ก ๋ณํ
  # ๋ฌธ์์ด์ ๋ฆฌ์คํธ๋ก ๋ณํ
  # ๋ฆฌ์คํธ๋ฅผ ๊ฑฐ๊พธ๋ก ์ ๋ ฌ
  # ๋ฆฌ์คํธ๋ฅผ ๋ฌธ์์ด๋ก ๋ฐํ
  num = 123456
  print("num:{0}".format(num)) #123456

  str_num = str(num) # ๋ฌธ์์ด ๋ณํ
  print("str_num:{0},type: {1}, str_num[0] : {2} ".format(str_num, type(str_num), str_num[0]))
  # str_num:123456,type: <class 'str'>, str_num[0] : 1

  str_list = list(str_num) # ๋ฌธ์์ด์ ๋ฆฌ์คํธ๋ก ๋ณํ
  str_list.reverse() # reverse๋ ๋ฆฌ์คํธ์์๋ง ์ฌ์ฉํ  ์ ์๊ธฐ๋๋ฌธ์ ๋ฆฌ์คํธ๋ก ๋ณํํด์ค๋ค
  print("str_list(reverse)  : {0} type: {1}".format(str_list, type(str_list)))
  # str_list(reverse)  : ['6', '5', '4', '3', '2', '1'] type: <class 'list'>

  str_list=''.join(str_list) # ๋ฆฌ์คํธ์์ ๋ฌธ์์ด๋ก ๋ณํํด์ค๋ค.
  print("str_list(reverse)  : {0} type: {1}".format(str_list, type(str_list)))
  # str_list(reverse)  : 654321 type: <class 'str'>
  ```

- ## ๋ณํํจ์
  > ord : ๋ฌธ์์ ์์คํค ์ฝ๋๊ฐ์ ๋ฆฌํดํ๋ ํจ์  
  > hex : hex(x)๋ ์ ์๊ฐ์ ์๋ ฅ๋ฐ์ 16์ง์(hexadecimal)๋ก ๋ณํํ์ฌ ๋ฆฌํดํ๋ ํจ์  
  > otc : oct(x)๋ ์ ์ ํํ์ ์ซ์๋ฅผ 8์ง์ ๋ฌธ์์ด๋ก ๋ฐ๊พธ์ด ๋ฆฌํดํ๋ ํจ์  
  > chr : ์์คํค(ASCII) ์ฝ๋๊ฐ์ ์๋ ฅ์ผ๋ก ๋ฐ์ ๊ทธ ์ฝ๋์ ํด๋นํ๋ ๋ฌธ์๋ฅผ ๋ฆฌํดํ๋ ํจ์  
  > capitalize : ๋จ์ด์ ์ฒซ๊ธ์๋ง ๋๋ฌธ์๋ก ๋ณํํ๋ ํจ์

```
print(ord("A"))       # 65
print(hex(ord("A")))  # 0x41
print(oct(ord("A")))  # 0o101

# chr : ์์คํค(ASCII) ์ฝ๋๊ฐ์ ์๋ ฅ์ผ๋ก ๋ฐ์ ๊ทธ ์ฝ๋์ ํด๋นํ๋ ๋ฌธ์๋ฅผ ๋ฆฌํดํ๋ ํจ์
print(chr(65))        # A
print(chr(0x41))      # A

# ๋์๋ฌธ์ ๋ณํ
print(chr(ord('A')+32))  # a
print(chr(ord('Z')+32))  # z
print(chr(ord('a')-32))  # A
print(chr(ord('z')-32))  # Z

# 1์๋ฆฌ ์ซ์ ๋ฌธ์์ด์ ์ซ์๋ก ๋ณํ
print(ord('1') - ord('0'), type(ord('1') - ord('0'))) # 1 <class 'int'>
print(ord('9') - ord('0'), type(ord('9') - ord('0'))) # 9 <class 'int'>

# 1์๋ฆฌ ์ซ์๋ฅผ ์ซ์ ๋ฌธ์์ด๋ก ๋ณํ
print(chr(1 + ord('0')), type(chr(1 + ord('0')))) # 1 <class 'str'>
print(chr(9 + ord('0')), type(chr(9 + ord('0')))) # 9 <class 'str'>
```

---

```python
# ์ง๋ฒ ์ด๊ธฐํ
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

# ์ถ๋ ฅ
i = 0x100
print("i = ", i)
print("i = ", bin(i))
print("i = ", int(i))
print("i = ", oct(i))
print("i = ", hex(i))
print("-"*20)

# ๋ฌธ์์ด์ ํ๋ณํ
i = "111"
print("i = ", int(i)) # 111
print("i = ", int(i, 2)) # 7
print("i = ", int(i, 8)) # 73
print("i = ", int(i, 16)) # 273
print("i = ", int(i, 5)) # 31
print("-"*20)
```

- ## ๋ฌธ์์ด ํ

  - #### ๊ธฐ๋ณธ

  ```python
  print("๋๋ %d์ด์๋๋ค." % 20)
  print("๋๋ %s์ ์ข์ํด์." % "ํ์ด์ฌ")
  print("Apple์ %c๋ก ์์ํด์." % "A")
  print('๋์ด๋ %03d์ธ์ด๊ณ  ์ ์ฅ์ %6.2f์๋๋ค. ๋์ ์ด๋ฆ์ "%s"์๋๋ค. '%(33,56.789,'ํ์ฌ๋'))
  #๋์ด๋ 033์ธ์ด๊ณ  ์ ์ฅ์  56.79์๋๋ค. ๋์ ์ด๋ฆ์ "ํ์ฌ๋"์๋๋ค.
  ```

  - #### %s๋ ๋ค ํฌํจํ  ์ ์๋ค.

  ```python
  print("๋๋ %s์ด์๋๋ค. " % 20)
  print("๋๋ %s์๊ณผ %s์์ ์ข์ํด์." % ("ํ๋", 20))
  ```

  - #### ๋ค๋ฅธ ๋ฐฉ๋ฒ

  ```python
  print("๋๋ {}์ด์๋๋ค.".format(20))
  print("๋๋ {}์๊ณผ {}์์ ์ข์ํด์.".format("ํ๋", "๋นจ๊ฐ"))
  print("๋๋ {0}์๊ณผ {1}์์ ์ข์ํด์.".format("ํ๋", "๋นจ๊ฐ"))
  print("๋๋ {1}์๊ณผ {0}์์ ์ข์ํด์.".format("ํ๋", "๋นจ๊ฐ"))
  ```

  - #### ๋ค๋ฅธ ๋ฐฉ๋ฒ2

  ```python
  print("๋๋ {age}์ด์ด๋ฉฐ {color}์์ ์ข์ํด์.".format(age=20, color="๋นจ๊ฐ"))
  ```

  - #### ๋ค๋ฅธ ๋ฐฉ๋ฒ 3 (v3.6์ด์)

  ```python
  age = 20
  color = "๋นจ๊ฐ"
  print(f"๋๋ {age}์ด์ด๋ฉฐ, {color}์์ ์ข์ํด์.")
  ```

- ## ํ์ถ๋ฌธ์

  - #### \n : ์ค๋ฐ๊ฟ

  ```python
   print("๋ฐฑ๋ฌธ์ด ๋ถ์ฌ์ผ๊ฒฌ \n๋ฐฑ๊ฒฌ์ด ๋ถ์ฌ์ผํ")
    # ๋ฐฑ๋ฌธ์ด ๋ถ์ฌ์ผ๊ฒฌ
    # ๋ฐฑ๊ฒฌ์ด ๋ถ์ฌ์ผํ
  ```

  - #### \\',\ \" -> ์ ๋ "๋๋์ฝ๋ฉ"์๋๋ค.

  ```python
  print("์ ๋ \"๋๋์ฝ๋ฉ\"์๋๋ค.")
  print("์ ๋ \'๋๋์ฝ๋ฉ\'์๋๋ค.") # ์ ๋ "๋๋์ฝ๋ฉ"์๋๋ค.
  ```

  - #### \\\ : ๋ฌธ์ฅ ๋ด์์ \

  ```python
  # \bin\python์ ์ถ๋ ฅํ๋ คํจ
  # print("\bin\python") ์ค๋ฅ
  print("\\bin\\python") #\bin\python
  ```

  - #### \r : ์ปค์๋ฅผ ๋งจ ์์ผ๋ก ์ด๋

  ```python
  print("Red Appleeeeee\rPine A") #Pine A
  ```

  - #### \b : ๋ฐฑ์คํ์ด์ค (ํ ๊ธ์ ์ญ์ )

  ```python
  print("Redd\bApple") #RedApple
  ```

---

- ## ํด์ฆ

#### ๋ฌธ์ 

```
๊ธฐ์ด๋ฌธ๋ฒ(basic.py)์ ๋ฐฐ์ด ํ ํด์ฆ

Quiz) ์ฌ์ดํธ๋ณ๋ก ๋น๋ฐ๋ฒํธ๋ฅผ ๋ง๋ค์ด ์ฃผ๋ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.

์) http://naver.com
๊ท์น1 : http:// ๋ถ๋ถ์ ์ ์ธ => naver.com
๊ท์น2 : ์ฒ์ ๋ง๋๋ ์ (.) ์ดํ ๋ถ๋ถ์ ์ ์ธ => naver
๊ท์น3 : ๋จ์ ๊ธ์ ์ค ์ฒ์ ์ธ์๋ฆฌ + ๊ธ์ ๊ฐฏ์ + ๊ธ์ ๋ด 'e'๊ฐฏ์ + "!"๋ก ๊ตฌ์ฑ

์) ์์ฑ๋ ๋น๋ฐ๋ฒํธ : nav51!
```

#### ํด๋ต

```python
sentence = "http://naver.com"
url = sentence
sentence = sentence[7:sentence.index(".")]
print(sentence) #๊ท์น 1๊ณผ 2 ๋์ ์์ // ๊ท์น1์ =sentence.replace("http://", "")๋ก๋ ํํ์ด ๊ฐ๋ฅํ๋ค.
password = sentence[:3] + str(len(sentence)) + str(sentence.count("e")) + "!"
print(f"url์ {url}์ด๋ฉฐ, ๋น๋ฐ๋ฒํธ๋ {password}์๋๋ค.")
'''
์๋๋ ๊ฐ์ ์๋ฏธ
print("url์ {1}์ด๋ฉฐ, ๋น๋ฐ๋ฒํธ๋ {0}์๋๋ค.".format(password, url))
print("url์ %s์ด๋ฉฐ, ๋น๋ฐ๋ฒํธ๋ %s์๋๋ค."%(url, password))
'''
```

---

## ์ถ๊ฐ

- ### ํ๋ถ๋ฆฌ : ์ญ์ฌ๋ ์, ๊ดํธ
  ๊ธด ๋ด์ฉ์ ํ์ค์ธ๊ฒ ์ฒ๋ผ ์ธ์ ์ํค๊ธฐ(\ ์ฌ์ฉ)

```python
a = 1 + 2 + 3 + \
      4 + 5 + 6
```

๊ธด ๋ด์ฉ์ ํ์ค์ธ๊ฒ ์ฒ๋ผ ์ธ์ ์ํค๊ธฐ(๊ดํธ ์ฌ์ฉ

```python
b = (1 + 2 + 3 +
        4 + 5 + 6)
```

ํ๋ผ๋ฉํฐ๋ฅผ ๋๊ธฐ๋ ๊ฒ์ด๋ผ๋ฉด ์ฝค๋ง(comma) ๋ค์์ ๊ทธ๋ฅ ์ํฐ๋ฅผ ์ฐ๋ฉด ๋ฉ๋๋ค.

```python
print("Hello",  "Python",
          end="\n", sep="\t")
```

๋ฌธ์์ด ์ค๊ฐ์ ์ค๋ฐ๊ฟ์ ํ๋ฉด ์๋์ผ๋ก ""๊ฐ ์ด๊ณ ๋ซํ๋ฉฐ 1์ค๋ก ์ธ์ํ๋ค.

```python
print("์์ฃผ ์์ฃผ ์์ฃผ ๊ธด ๋ฌธ์์ด์ด๋ผ๊ณ  ๊ฐ์ ํ์ "
         "ํ์ค์ ๋ชจ๋ ํ์ดํ์ด ํ๋ค๋ค๋ฉด")
```

- ### ์ฌ๋ฌ๊ฐ ๋ณ์์ ์ฌ๋ฌ๊ฐ ํ ๋นํ๊ธฐ

```python
a=b=c="๋ชจ๋๊ฐ์ ๊ฐ"
print("a์ ๊ฐ : {}".format(a))
print("b์ ๊ฐ : {}".format(b))
print("c์ ๊ฐ : {}".format(c))

d,e,f = "ํ์ฌ๋",23,178.9
print("d์ ๊ฐ : {}".format(d))
print("e์ ๊ฐ : {}".format(e))
print("f์ ๊ฐ : {}".format(f))
'''
a์ ๊ฐ : ๋ชจ๋๊ฐ์ ๊ฐ
b์ ๊ฐ : ๋ชจ๋๊ฐ์ ๊ฐ
c์ ๊ฐ : ๋ชจ๋๊ฐ์ ๊ฐ
d์ ๊ฐ : ํ์ฌ๋
e์ ๊ฐ : 23
f์ ๊ฐ : 178.9
'''

```

- ### SWAP

```python
g,h = 100,200
print("g์ ๊ฐ : {}, h์ ๊ฐ :{}".format(g,h))
g,h = h,g
print("g์ ๊ฐ : {}, h์ ๊ฐ :{}".format(g,h))
'''
g์ ๊ฐ : 100, h์ ๊ฐ :200
g์ ๊ฐ : 200, h์ ๊ฐ :100
'''
```

- ### ๋ฆฌํฐ๋ด
  0b 2์ง์  
  0o 8์ง์  
  0x 16์ง์  
  j๋ก ๋๋๋ฉด ๋ณต์์์ ํ์

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

์ฐธ์กฐ : https://wikidocs.net/20369
