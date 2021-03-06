---
permalink: /Python/Basic/Module/
title: "Module"
toc: true
categories:
  - PythonπΈPython-Bible
comments: true
sidebar:
  - title: "PythonπΈ"
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
excerpt: νμ΄μ¬ λͺ¨λμ λν΄
---

# 1. λͺ¨λ

μλμ½λλ‘ theater_module.pyλ‘ λ©μΈμ½λ(module.py)μ κ°μ κ²½λ‘μ μμ±.

```python
def price(people):
    print("{0} λͺμ κ°κ²©μ {1}μμλλ€.".format(people, people*10000))
def price_morning(people):
    print("{0}λͺμ κ°κ²©μ {1}μλλ€".format(people, people*6000))
def price_soldier(people):
    print("{0}λͺμ κ°κ²©μ {1}μλλ€".format(people, people * 4000))
```

theater_module.py νμΌμ μλ ν¨μλ€μ μ¬μ©ν΄λ³΄μ

- ## import

  - ### import
    module.pyμ μλ μ½λλ₯Ό μ€μ΅ν΄λ³΄μ

  ```python
  import theater_module
  theater_module.price(3)
  theater_module.price_morning(3)
  theater_module.price_soldier(3)
  '''
  3 λͺμ κ°κ²©μ 30000μμλλ€.
  3λͺμ κ°κ²©μ 18000μλλ€
  3λͺμ κ°κ²©μ 12000μλλ€
  '''
  ```

  - ### import ~ as

  ```python
  import theater_module as mv
  mv.price(3)
  mv.price_morning(3)
  mv.price_soldier(3)


  '''
  3 λͺμ κ°κ²©μ 30000μμλλ€.
  3λͺμ κ°κ²©μ 18000μλλ€
  3λͺμ κ°κ²©μ 12000μλλ€
  '''
  ```

- ## from ~ import
  - ### from ~ import \*
    λͺ¨λλ΄ λͺ¨λ  κ²μ κ°μ Έλ€κ° μ¬μ©νκ² λ€.
  ```python
  from theater_module import *
  price(3)
  price_morning(3)
  price_soldier(3)
  '''
  3 λͺμ κ°κ²©μ 30000μμλλ€.
  3λͺμ κ°κ²©μ 18000μλλ€
  3λͺμ κ°κ²©μ 12000μλλ€
  '''
  ```
  - ### from ~ import A, B
  ```python
  from theater_module import price, price_morning
  price(3)
  price_morning(3)
  price_soldier(3)
  #NameError: name 'price_soldier' is not defined
  ```
  - ### from ~ import ~ as ~
    νμν ν¨μλ₯Ό μ€μλ§λ‘ μ¬μ©νλ€
  ```python
  from theater_module import price_soldier as price # price_soldierκ° μλ‘μ΄ λ³λͺμΈ price μ¬μ©
  price(3)
  # 3λͺμ κ°κ²©μ 12000μλλ€
  ```

# 2. ν¨ν€μ§

μ¬λ¬ λͺ¨λμ λͺ¨μ λμ μ§ν©μ΄λ€

- ## μ€μ΅
  travel νμ΄μ¬ ν¨ν€μ§λ₯Ό λ§λ€κ³  κ·Έ μμ thailand.py, vietnam.py, \_\_init\_\_.pyλ₯Ό λ§λ λ€.  
   κ·Έ λ€ vietnam.pyκ³Ό thailand.pyμ λ€μκ³Ό κ°μ μ½λ μΆκ°
  ```python
  class VietnamPackage:
      def detail(self):
          print("[λ² νΈλ¨ ν¨ν€μ§ 3λ° 5μΌ] λ€λ­ ν¨λ μ¬ν 60λ§μ")
  ```
  module.py λ©μΈμ½λλ‘ λμμμ μλ μ½λ μμ±
  ***
  - ### import ν¨ν€μ§.λͺ¨λ
  ```python
  import travel.thailand
  trip_to = travel.thailand.ThailandPackage()
  trip_to.detail()
  # [νκ΅­ ν¨ν€μ§ 3λ° 5μΌ] λ°©μ½, ννμΌ μ¬ν (μΌμμ₯ ν¬μ΄) 50λ§μ
  ```
  - ### importλ‘ μ§μ  ν΄λμ€λ ν¨μ importλ λΆκ°λ₯
  ```python
  #import travel.thailand.ThailandPackage # ν΄λμ€ μ§μ  import λΆκ°
  trip_to = travel.thailand.ThailandPackage()
  trip_to.detail()
  #ModuleNotFoundError: No module named 'travel.thailand.ThailandPackage'; 'travel.thailand' is not a package
  ```
  - ### from ~ import ~ λ ν΄λμ€λ ν¨μ λ°λ‘ importκ°λ₯
  ```python
  from travel.thailand import ThailandPackage
  trip_to = ThailandPackage()
  trip_to.detail()
  # [νκ΅­ ν¨ν€μ§ 3λ° 5μΌ] λ°©μ½, ννμΌ μ¬ν (μΌμμ₯ ν¬μ΄) 50λ§μ
  ```
  - ### from ν¨ν€μ§ import λͺ¨λ
  ```python
  from travel import vietnam
  trip_to = vietnam.VietnamPackage()
  trip_to.detail()
  # [λ² νΈλ¨ ν¨ν€μ§ 3λ° 5μΌ] λ€λ­ ν¨λ μ¬ν 60λ§μ
  ```

# 3. κΆν

```python
from random import *
```

random λͺ¨λμ import ν¨μΌλ‘μ¨ random λͺ¨λ λ΄μ λͺ¨λ  κ²μ κ°μ Έλ€ μ΄λ€.

---

κ·Έλ λ€λ©΄ μμ  travlλ μ μ©ν΄λ³΄μ

```python
from travel import *
trip_to = vietnam.VietnamPackage()
trip_to.detail()
# NameError: name 'vietanm' is not defined
```

why? κ³΅κ°μ€μ μ ν΄μΌλλ€.  
travel/\_\_init\_\_.py νμΌ μμ 

```python
__all__ = ["vietanm"] # vietnam λͺ¨λ κ³΅κ°
```

module.pyλ₯Ό λ€μ μ€ννλ©΄

```python
# [λ² νΈλ¨ ν¨ν€μ§ 3λ° 5μΌ] λ€λ­ ν¨λ μ¬ν 60λ§μ
```

μ±κ³΅μ μΌλ‘ μ λνλλ€.

# 4. λͺ¨λ μ§μ  μ€ν

λͺ¨λμ΄ μΈλΆμμ νΈμΆλμ΄ μ€ννλμ§ μ§μ  μ€ννλμ§ νμΈνκΈ°

- ## μ€μ΅
  thailand.pyμμ λ€μκ³Ό κ°μ μ½λ μΆκ°

```python
if __name__ == "__main__": # λͺ¨λμ΄ μ§μ  μ€νλλ κ²½μ°
    print("Thailand λͺ¨λμ μ§μ  μ€ν")
    print("μ΄ λ¬Έμ₯μ λͺ¨λμ μ§μ  μ€νν  λλ§ μ€νλΌμ")
    trip_to = ThailandPackage()
    trip_to.detail()
else: # μΈλΆμμ λͺ¨λ νΈμΆλλ κ²½μ°
    print("Thailand μΈλΆμμ λͺ¨λ νΈμΆ")
```

μ²μ import ν λλ§ μ΄λμ νΈμΆμ΄ λλμ§ λ¬λ€.

```python
from travel import *
trip_to = thailand.ThailandPackage()
# μ΄ λ 'Thailand μΈλΆμμ λͺ¨λ νΈμΆ' μΆλ ₯
# μ΄ μ΄νλ‘λ thailandλ₯Ό import μ μΈν΄λ μ΄λ―Έ μ μΈνκΈ°λλ¬Έμ μ λ¬λ€.
trip_to.detail()
# [νκ΅­ ν¨ν€μ§ 3λ° 5μΌ] λ°©μ½, ννμΌ μ¬ν (μΌμμ₯ ν¬μ΄) 50λ§μ
```

# 5. ν¨ν€μ§, λͺ¨λμμΉ

## inspect

ν¨ν€μ§λ λͺ¨λμ κ²½λ‘ νμΈ

```python
import inspect
import random
print(inspect.getfile(random))
# /usr/local/Cellar/python/3.7.4/Frameworks/Python.framework/Versions/3.7/lib/python3.7/random.py
```

**random λͺ¨λμ΄ μλ libν΄λμ λ΄κ° λ§λ€μ΄ λμ travelν¨ν€μ§λ₯Ό λΆμ¬λ£μΌλ©΄  
κ°μ κ²½λ‘κ° μλλλΌλ μ΄λμλ μ§ νΈμΆμ ν μ μλ€.**

# 6. pip install

νμ΄μ¬μ μ μ©ν ν¨ν€μ§κ° λ§λ€. κ·Έ ν¨ν€μ§λ₯Ό μ°Ύλ λ°©λ² μ€ νλλ https://pypi.org μ¬μ΄νΈμ΄λ€.

## ν¨ν€μ§ μ¬μ©ν΄λ³΄κΈ°

ν¨ν€μ§ μ€ μΉμ€ν¬λνμμμ λνμ μΈ beautifulsoup ν¨ν€μ§λ₯Ό μ¬μ©ν΄λ³΄μ

1. [https://pypi.org](https://pypi.org "pypi") μ μ
2. beautifulsoup4 κ²μ
3. ν°λ―Έλμμ pip install beautifulsoup4 μλ ₯
4. μ μ€μΉλμλμ§ νμΈνκΈ°
   ![terminal]({{site.baseurl}}/assets/images/python/terminal.png "terminal")
5. μ¬μ΄νΈμ λμμλ quick start μμ λ‘ λμνμΈ
   ![beautifulsoup4]({{site.baseurl}}/assets/images/python/pypi_beautifulsoup4.png "beautifulsoup4")

```python
from bs4 import BeautifulSoup
soup = BeautifulSoup("<p>Some<b>bad<i>HTML")
print(soup.prettify())
```

κ²½κ³  λ©μΈμ§λ λ¬΄μν΄λ μ’λ€. μ€μΉλ°©λ²μ μκΈ° μν κ²μΌ λΏ

# 7. λ΄μ₯ν¨μ

λ³λλ‘ importλ₯Ό νμ§ μκ³ λ μ¬μ©ν  μ μλλ‘ λ΄μ₯λμ΄ μλ ν¨μ  
ex) input,upper λ±λ±

- ## dir()
  μ΄λ€ κ°μ²΄κ° λ§€κ°λ³μλ‘ λ€μ΄κ°μλ μ΄λ€ λ³μμ ν¨μλ₯Ό κ°κ³ μλμ§λ₯Ό μλ €μ€λ€.  
   λ§€κ°λ³μκ° μμ κ²½μ° μμ€μ½λ λ²μλ΄μ μ¬μ©κ°λ₯ν λͺ¨λ λλ κ°μ²΄κ° μΆλ ₯λλ€.
  - ### λ§€κ°λ³μκ° μμ κ²½μ°
  ```python
  print(dir())
  # ['ThailandPackage', '__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'inspect', 'mv', 'price', 'price_morning', 'price_soldier', 'random', 'thailand', 'theater_module', 'travel', 'trip_to', 'vietnam']
  import pickle
  print(dir())
  # ['ThailandPackage', '__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'inspect', 'mv', 'price', 'price_morning', 'price_soldier', 'random', 'thailand', 'theater_module', 'travel', 'trip_to', 'vietnam']
  # pickleμ΄ μΆκ°
  ```
  pickleμ΄ μΆκ°λκ²μ νμΈν  μ μλ€.
  - ### randomλͺ¨λμ μ§μ  μ λ¬κ°μΌλ‘ μ€μ 
  ```python
  print(dir(random))
  # ['BPF', 'LOG4', 'NV_MAGICCONST', 'RECIP_BPF', 'Random', 'SG_MAGICCONST', 'SystemRandom', 'TWOPI', '_BuiltinMethodType', '_MethodType', '_Sequence', '_Set', '__all__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', '_acos', '_bisect', '_ceil', '_cos', '_e', '_exp', '_inst', '_itertools', '_log', '_os', '_pi', '_random', '_sha512', '_sin', '_sqrt', '_test', '_test_generator', '_urandom', '_warn', 'betavariate', 'choice', 'choices', 'expovariate', 'gammavariate', 'gauss', 'getrandbits', 'getstate', 'lognormvariate', 'normalvariate', 'paretovariate', 'randint', 'random', 'randrange', 'sample', 'seed', 'setstate', 'shuffle', 'triangular', 'uniform', 'vonmisesvariate', 'weibullvariate']
  ```
  randint, randrange, sample, shuffleλ± νμΈ κ°λ₯
  - ### λͺ¨λμ΄ μλ λ¦¬μ€νΈλ₯Ό νμΈν΄λ³΄μ
  ```python
  lst = [1,2,3]
  print(dir(lst))
  # ['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
  ```
  append, clear, count, extend, index, reverse, sort λ±μ νμΈ κ°λ₯
  - ### λ¬Έμμ΄μΈ κ²½μ°
  ```python
  name = "Jim"
  print(dir(name))
  # ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isascii', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
  ```
  upper, lower, find λ± λ€μν κΈ°λ₯ νμΈ κ°λ₯
  ***
  λ μμΈν λ΄μ₯ν¨μμ λν λ΄μ©μ [list of python builtins](https://docs.python.org/3/library/functions.html "λ΄μ₯ν¨μ") κ²μ

# 8. μΈμ₯ν¨μ

μΈμ₯ν¨μλ λ΄μ₯ν¨μμλ λ€λ₯΄κ² λ°λμ importλ₯Ό ν΄μΌνλ€. ex)random  
λνμ μΈ μΈμ₯ν¨μλ₯Ό λ³΄μ

- ## glob
  μ΄λ€ κ²½λ‘ λ΄μ ν΄λ λλ νμΌμ λͺ©λ‘μ μ‘°νν  λ μ¬μ©νλ©° μλμ°μμμ dirλͺλ Ήμ΄λ€.

```python
import glob
print(glob.glob("*.py")) # νμ₯μκ° pyμΈ λͺ¨λ  νμΌμ μ‘°ν

# ['module.py', 'theater_module.py']
```

- ## os

  μ΄μμ²΄μ μμ μ κ³΅νλ κΈ°λ³Έ κΈ°λ₯

  - ### getcwd
    νμ¬ μμ λλ ν λ¦¬ μλ―Έ, cwdλ current working directory

  ```python
  import os
  print(os.getcwd()) # νμ¬ λλ ν λ¦¬
  #/Users/gimchan-yeong/PycharmProjects/HelloWorld/1. Basic/Module
  ```

  - ### path.exists, makedirs, rm
    path.exists : λ§€κ°λ³μμ λμΌν μ΄λ¦μ ν΄λκ° μ‘΄μ¬νλμ§ νμΈ  
    makedirs : μλ‘μ΄ ν΄λ μμ±  
    rm : μ­μ 

  ```python
  import os
  folder = "sample_dir"

  if os.path.exists(folder):
      print("μ΄λ―Έ μ‘΄μ¬νλ ν΄λμλλ€.")
      os.rmdir(folder)
      print(folder, "ν΄λλ₯Ό μ­μ νμμ΅λλ€. ")
  else:
      os.makedirs(folder)
      print(folder, "ν΄λλ₯Ό μμνμμ΅λλ€.")
  ```

  μ²μ μ€νμ sample_dirν΄λ μκΈ°λ κ²μ νμΈν  μ μλ€.

- ## listdir()
  lsμ λΉμ·ν κΈ°λ₯
  ```python
  import os
  print(os.listdir())
  # ['__pycache__', 'sample_dir', 'module.py', 'travel', 'theater_module.py']
  ```
- ## time

  - ### localtime()

    νμ¬μκ°μ λ³΄ νμΈ

    ```python
    import time
    print(time.localtime())
    # time.struct_time(tm_year=2021, tm_mon=8, tm_mday=5, tm_hour=19, tm_min=46, tm_sec=23, tm_wday=3, tm_yday=217, tm_isdst=0)
    ```

    μμλ³΄κΈ°κ° νλ€λ€

  - ### strftime()
    λ¬Έμμ΄ννλ‘ λνλ΄κΈ°
    ```python
    print(time.strftime("%Y-%m-%d %H:%M:%S"))
    #2021-08-05 19:48:01
    ```

- ## datetime

  μ€λ λ μ§μΆλ ₯

  ```python
  import datetime
  print("μ€λ λ μ§λ", datetime.date.today())
  #μ€λ λ μ§λ 2021-08-05
  ```

- ## timedelta
  μΌμλ₯Ό μ μ₯νλ€. λλ°μ΄μ μ μ©
  ```python
  import datetime
  today = datetime.date.today() # μ€λ λ μ§ μ μ₯
  td = datetime.timedelta(days=100) # 100μΌ μ μ₯
  print("μ°λ¦¬κ° λ§λμ§ 100μΌμ", today + td) # μ€λλΆν° 100μΌ ν
  ```
  λ μμΈν μΈμ₯ν¨μμ λν λ΄μ©μ [list of python modules](https://docs.python.org/3/py-modindex.html "μΈμ₯ν¨μ") κ²μ
