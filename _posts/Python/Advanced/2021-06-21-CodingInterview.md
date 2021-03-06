---
permalink: /Python/Advanced/CodingInterview/
title: "CodingInterview์์์ Python"
toc: true
categories:
  - Python๐ธAdvanced
comments: true
sidebar:
  - title: "Python๐ธ"
  - nav: "python-menu"
excerpt: >
  "์ฝ๋ฉ์ธํฐ๋ทฐ ์ฑ์ ๊ธฐ๋ฐ์ผ๋ก ํ์ฌ ์ ๋ฆฌํ ํ์ด์ฌ"
tags: 
  - python์ฌํ
  - Advanced
  - Tip
list_name: python์ฌํ
sexy: 1
main: "Advanced"
header:
  teaser: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_image: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_filter: 0.5
---

# 1๏ธโฃ. ํ์ด์ฌ

# 1. ํ์ด์ฌ ๋ฌธ๋ฒ

## 1. ์ธ๋ดํธ

> ์ธ๋ดํธ๋ ๊ณต๋ฐฑ 4์นธ์ด๋ค. ํ์ง๋ง ์ฐ๋ฆฌ๋ pyCharm์ ์ด์ฉํ์ฌ ์ธ๋ดํธ์ ์ ๊ฒฝ์ ์์ฐ๊ณ  ๊ฐ๋ฐํ  ์ ์๋ค.  
> ์ค๋ง ์๋ชป์๋ ฅํ๋๋ผ๋ pycharm์์ Reformat Code๋ฅผ ์คํํ๋ฉด ๋๋ค.

## 2. ๋ค์ด๋ฐ ์ปจ๋ฒค์

๋ณ์๋ ํจ์์ด๋ฆ์ ์ง๋ ๋ฐฉ์์ด๋ค.

> ์นด๋ฉ์ผ์ด์ค = camelCase.
> ์ค๋ค์ดํฌ์ผ์ด์ค = snake_case  
> ํ์ค์นผ์ผ์ด์ค = CameCase

## 3. ํ์ ํํธ

๋์ ์ธ ํ์ด์ฌ์ ์ ์ ์ธ ๊ธฐ๋ฅ์ ๋ฃ์ ๊ฒ

```python
def fn(a)
# ๋น ๋ฅด๊ฒ ์ ์ํด์ ์ฌ์ฉํ ์ ์๋ค๋ ์ฅ์ ์ด ์์ง๋ง ์ด๋ค ์์ผ๋ก ํ๋ผ๋ฏธํฐ๋ฅผ ๋๊ธฐ๊ณ  ๋ฌด์จ ๋ฆฌํด๊ฐ์ด ๋์ค๋์ง๋ฅผ ์ ์๊ฐ ์๋ค.
def fn(a: int) -> bool:
# ํ๋ผ๋ฏธํฐ๊ฐ ์ ์ํ์ธ ๊ฒ๊ณผ ๋ฆฌํด ๊ฐ์ผ๋ก True or False๋ฅผ ๋ฐํํ๋ ๊ฒ๋ ์์ ์๋ค.

a: str = "1"
b: int = 1
# ์ ์ธํ  ์ ์๋ ํ์์ ์ ๋ช์ํ  ์ ์๋ค.

# ํ์ง๋ง, ์ฌ์ ํ ๋์ ์ธ ํ์ด์ฌ์ด๋ฏ๋ก ์ค์  ๋ฌธ์์ดํ์ ์ ์ํ ๋ณ์๋ฅผ ๋์ํ๋คํด๋ ์ค๋ฅ๋ ๋จ์ง ์๋๋ค.
a: str = 1
# ์ค๋ฅ๋ ๋ํ๋์ง์๋๋ค

# ํ์ง๋ง mypy๋ฅผ ์ฌ์ฉํ๋ฉด ํ์ธํ  ์ ์๋ค.
# pip install mypy ๋ก mypy๋ฅผ ์ค์นํ ๋ค,
# mypy ํ์ผ๋ช.py ๋ฅผ ํ๋ฉด ๋๋ค.
```

## 4. Comprehension

์ฝ๋๋ฅผ ๋ ๋จ์ํ ํ ์ ์๋ค.

- ### No List Comprehension Code

```python
no_list_comprehension = []
for n in range(1, 10+1):
    if n % 2 == 0:
        no_list_comprehension.append(n*2)

print(no_list_comprehension)
# [4, 8, 12, 16, 20]

```

- ### List Comprehension Code

```python
list_comprehension = [ n * 2 for n in range(1, 10+1) if not n%2]
print(list_comprehension)
# [4, 8, 12, 16, 20]
```

- ### no_Dictionary Comprehension Code

```python
original = {"๋": "๊น์ฐฌ์", "์น๊ตฌ": "๊ฐ๋ฏผ์"}

no_dict_comprehension = {}
for key, value in original.items():
    no_dict_comprehension[key] = value
print(original)
print(no_dict_comprehension)
#{'๋': '๊น์ฐฌ์', '์น๊ตฌ': '๊ฐ๋ฏผ์'}
```

- ### Dictionary Comprehension Code

```python
dict_comprehension = {key: value for key, value in original.items()}
print(dict_comprehension)
#{'๋': '๊น์ฐฌ์', '์น๊ตฌ': '๊ฐ๋ฏผ์'}
```

## 5. generator

๋ฃจํ์ ๋ฐ๋ณต(iteration)๋์์ ์ ์ดํ  ์ ์๋ ๋ฃจํดํํ.

> iterator๋ ํด๋์ค์ **iter**, **next** ๋๋ **getitem** method๋ฅผ ๊ตฌํํด์ผ ํ์ง๋ง  
> ์ ๋๋ ์ดํฐ๋ yield๋ง ์ฌ์ฉํ๋ฉด ๋๋ค.

```python
def number_generator():
    yield 0
    yield 1
    yield 2

print(number_generator())
ng= number_generator()

'''
for i in ng:
    print(i, end=' ')
# 0 1 2
'''

#next๋ ์ถ์ถ์ด๋ค.
print(next(ng))
# 0
print(next(ng))
# 1
print(next(ng))
# 2
#print(next(ng))
# Error : StopIteration
```

## 6. range

generator๋ฅผ ํ์ฉํ๋ ๋ํ์ ์ธ ํจ์

```python
range_a = [n for n in range(100)]
range_b = range(0, 100+1)
#๋ชจ๋ ๊ฒ์ด ๋ค ๋๊ฐ์ง๋ง ๋ฉ๋ชจ๋ฆฌ์ฐจ์ง ํฌ๊ธฐ๊ฐ ๋ค๋ฅด๋ค.
print(range_a)
# [0, 1, 2, 3, 4, 5,...,100]
# ๋ฉ๋ชจ๋ฆฌ์ ์ ์จ ์์ฒญ ๋๋ค
print(range_b)
# range(0, 101)
# ๋ฉ๋ชจ๋ฆฌ์ ์ ์จ ์์ฒญ ๋ฎ๋ค.
```

## 7. enmerate

์ฌ๋ฌ๊ฐ์ง ์๋ฃํ์ ์ธ๋ฑ์ค๋ฅผ ํฌํจํ enmerate ๊ฐ์ฒด๋ก ๋ฆฌํดํ๋ค.

```python
enum = [1, 2, 3]
print(list(enumerate(enum)))
# [(0, 1), (1, 2), (2, 3)]

for i, v in enumerate(enum):
    print(i, v)
'''
0 1
1 2
2 3
'''
```

## 8. locals

์ฌ์ฉ๋๋ ์ง์ญ๋ณ์ ์กฐํ

> ๋๋ฒ๊น์ ํ์ํ๋ค  
> ํจ์ ๋ด๋ถ์ ์ง์ญ ์ ๋ณด๋ฅผ ์กฐํํด ์๋ชป ์ ์ธํ ๋ถ๋ถ์ด ์๋์ง ํ์ธํ๋ ์ฉ๋

```python
def local_function():
    local_a = 1
    local_b = 2
    print(locals())


local_function()
# local_a:1, local_b:2
print(locals())
'''
'__name__': '__main__', '__doc__': '\n์ธ๋ดํธ๋ ๊ณต๋ฐฑ 4์นธ์ด๋ค. ํ์ง๋ง ์ฐ๋ฆฌ๋ pyCharm์ ์ด์ฉํ์ฌ ์ธ๋ดํธ์ ์ ๊ฒฝ์ ์์ฐ๊ณ  ๊ฐ๋ฐํ  ์ ์๋ค.\n์ค๋ง ์๋ชป์๋ ฅํ๋๋ผ๋ pycharm์์ Reformat Code๋ฅผ ์คํํ๋ฉด ๋๋ค.\n',\
 '__package__': None, '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x102215490>,\
  '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>,\
   '__file__': '/Users/gimchan-yeong/PycharmProjects/HelloWorld/3. Coding Interview/python.py',\
    '__cached__': None, 'list_comprehension': [4, 8, 12, 16, 20], 'no_list_comprehension': [4, 8, 12, 16, 20],\
     'n': 10, 'original': {'๋': '๊น์ฐฌ์', '์น๊ตฌ': '๊ฐ๋ฏผ์'}, 'no_dict_comprehension': {'๋': '๊น์ฐฌ์', '์น๊ตฌ': '๊ฐ๋ฏผ์'},\
      'key': '์น๊ตฌ', 'value': '๊ฐ๋ฏผ์', 'dict_comprehension': {'๋': '๊น์ฐฌ์', '์น๊ตฌ': '๊ฐ๋ฏผ์'},\
       'number_generator': <function number_generator at 0x102268cb0>, 'ng': <generator object number_generator at 0x102248cd0>,\
        'range_a': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,\
         51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],\
         'range_b': range(0, 101), 'enum': [1, 2, 3], 'i': 2, 'v': 3, 'local_function': <function local_function at 0x102268d40>}
'''
```

local_a์ local_b๊ฐ ์๋ค. -> ์ง์ญ๋ณ์์ด๊ธฐ๋๋ฌธ

# 2. ์ฝ๋ฉ์คํ์ผ

## 1. ๋ฆฌ์คํธ ์ปดํ๋ฆฌํจ์

```python
str1 = [ str1[i:i + 2].lower() for i in range(len(str1 - 1) if re.findall('[a-z]{2}', str1[i:i +2].lower()))]
```

์ด๋ ๊ฒ ํ์ค๋ก ํํํ๋ฉด ๊ฐ๋์ฑ์ด ๋จ์ด์ง๋ค.

```python
str1s = [
    str1[i:i + 2].lower() for i in range(len(str1 - 1)
    if re.findall('[a-z]{2}', str1[i:i +2].lower())
]
```

ํ์ค ํ์ด์ ์ง์ฐฉํ๊ธฐ๋ณด๋ค๋ ๋ผ์ธ์ ์ข๋ ์ฌ์ ์๊ฒ ํ์ฉํ์

```python
str1s=[]
for i in range(len(str1 - 1):
    if re.findall('[a-z]{2}', str1[i:i +2].lower())
        str1s.append(str1[i:i + 2].lower())
```

์์ฒ๋ผ ๋ชจ๋ ํ์ด ์ฐ๋ ๊ฒ๋ ๊ฐ๋์ฑ์ ์ํด์๋ผ๋ฉด ์ข๋ค. ์์์ ์๋๊น์ง ์ฐจ๋ก๋๋ก ์ ๋ฐฉํฅ์ด๊ธฐ๋๋ฌธ์ ์ดํดํ๊ธฐ๊ฐ ์ฝ๋ค.

## 2. ๊ตฌ๊ธ ํ์ด์ฌ ์คํ์ผ ๊ฐ์ด๋

ํจ์์ ๊ธฐ๋ณธ๊ฐ์ผ๋ก ๊ฐ๋ณ ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ์ง๋ง์  
ํจ์๊ฐ ๊ฐ์ฒด๋ฅผ ์์ ํ๋ฉด(๋ฆฌ์คํธ์ ์์ดํ์ ์ถ๊ฐํ๋ค๋ ์ง)  
๊ธฐ๋ณธ๊ฐ์ด ๋ณ๊ฒฝ๋๊ธฐ๋๋ฌธ์ด๋ค.

```python
def foo(a, b=[]):
```

์ ๋ฐฉ๋ฒ๋ณด๋จ ๋ถ๋ณ ๊ฐ์ฒด๋ฅผ ์ฌ์ฉํ๋ค.

```python
def foo(a, b = None):
    if b is None:
        b=[]
```

No

```python
if len(users) == 0:
    print('no users')

if foo is not None and not foo:
    self.handle_zero()

if not i % 10:
    self.handle_multiple_of_ten()
```

Yes

```python
if not users:
    print('no useres')

if foo == 0:
    self.handle_zero()

if i % 10 == 0:
    self.handle_multiple_of_ten()
```

# 2๏ธโฃ.๋น์ค

## 1. ๋น์ค

๋น์ค(big-O)๋ ์๋ ฅ๊ฐ์ด ๋ฌดํ๋๋ก ํฅํ ๋ ํจ์์ ์ํ์ ์ค๋ชํ๋ ์ํ์  ํ๊ธฐ ๋ฐฉ๋ฒ์ด๋ค.

> 4n+3 ์ด๋ฉด ์ต๊ณ ์ฐจํญ๋ง ๊ณ ๋ คํ๊ณ  ๊ณ์๋ ๋ฌด์ํ๋ค. ์ฆ n์ด๋ค.  
> O(1) > O(logN) > O(n) > O(nlogN) > O(n**2) > O(2**n) > O(n!)
> ์๊ฐ๋ณต์ก๋์ ๊ณต๊ฐ๋ณต์ก๋๋ ๋ฐ๋น๋ก๊ด๊ณ์ด๋ค.  
> ๋น์คํ๊ธฐ๋ฒ์ ์ฃผ์ด์ง(์ต์ /์ต์/ํ๊ท ) ๊ฒฝ์ฐ์ ์ํ ์๊ฐ์ ์ํ์ ๋ํ๋ธ๋ค.  
> ๋ถํ  ์ํ ๋ถ์ : ์๊ณ ๋ฆฌ์ฆ์ ๋ณต์ก๋๋ฅผ ๊ณ์ฐํ  ๋, ์๊ณ ๋ฆฌ์ฆ ์ ์ฒด๋ฅผ ๋ณด์ง ์๊ณ  ์ต์์ ๊ฒฝ์ฐ๋ง์ ์ดํด๋ณด๋ ๊ฒ์ ๋ฐฉ์ง ex)๋์ ๋ฐฐ์ด

## 2. ์๋ฃํ

> C๋ ์์ํ์์ธ ๋ฐ๋ฉด์ ํ์ด์ฌ์ ๋ชจ๋  ๊ฒ์ด ๊ฐ์ฒด์ด๋ค.  
> ์ซ์๋ C์คํ์ผ์ ๊ณ ์  ์ ๋ฐ๋๊ฐ ์๋๋ผ ์์ ์ ๋ฐ๋์ด๋ค.  
> ์์ ์ ๋ฐ๋๋ ์๋๋ ๋๋ฆฌ์ง๋ง ๋จ์ผํ์ผ๋ก ์ฒ๋ฆฌํ  ์ ์์ด ๋งค์ฐ ๋จ์ํ ๊ตฌ์กฐ๋ก ๋ง๋ค ์ ์๊ณ  ์ค๋ฒํ๋ก๋ฌธ์ ๊ฐ ์๋ค.

- ### ๋ถ๋ณ๊ณผ ๊ฐ๋ณ

  - ### Sequence

    ์์ ์๋ ๋์ด.

    > Immutable : ๋ฌธ์์ด(str), ํํ(tuple), ๋ฐ์ดํธ(bytes)  
    > Mutable : ๋ฆฌ์คํธ(list)

  - ### str์ด ๋ถ๋ณ์ธ ์ด์ 

  ```
  a = 'abc'
  print(id(a)) # 4555406768
  print(id('abc')) # 4555406768
  a = 'def'
  print(id(a)) # 4555913456
  print(id('def')) # 4555913456
  ```

  abc๋ ์ฌ๋ผ์ง์ง์๊ณ  ๋ฉ๋ชจ๋ฆฌ ์ด๋๊ฐ์ ๋จ์์๋ค.

  ```
  a[1] = 'd'
  # TypeError: 'str' object does not support item assignment
  ```

  ๋ถ๋ณ์ด๊ธฐ๋๋ฌธ์ ์๋๋ค.

  - ### ๋ถ๋ณ

  ```python
  a = 10
  b = a
  print(id(10), id(a), id(b)) # 4486029360 4486029360 4486029360
  a = 11
  print(id(a)) # 4308631632
  ```

  ์ด๋ก์จ ์ซ์์ ๋ฌธ์์ด์ ๋ถ๋ณ ๊ฐ์ฒด์์ ์ ์๊ฐ ์๋ค.

  - ### ๊ฐ๋ณ

  ```python
  a = [1, 2, 3, 4, 5]
  b = a
  print(a, b) # [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]
  a[2] = 4
  print(a, b) # [1, 2, 4, 4, 5] [1, 2, 4, 4, 5]
  ```

# 3๏ธโฃ. ๋ฆฌ์คํธ, ๋์๋๋ฆฌ

## 1. ๋ฆฌ์คํธ

์์๋๋ก ์ ์ฅํ๋ sequence์ด์ ๋ณ๊ฒฝ ๊ฐ๋ฅํ ๋ชฉ๋ก(Mutable List)

- ### ๋ฆฌ์คํธ์ ํ์ฉ๋ฐฉ๋ฒ

```python
# append
a=[1,2,3]
a.append(4)
print(a) # [1, 2, 3, 4]

# insert
a.insert(3,5)
print(a) # [1, 2, 3, 5, 4]

# ์ฌ๋ผ์ด์ฑ
print(a[1:4:2]) #์ธ๋ฑ์ค 1,3์ ๊ฐ

# ์ธ๋ฑ์ค๊ฐ ๋ฆฌ์คํธ ๊ธธ์ด๋ฅผ ๋์๊ฒฝ์ฐ
#print(a[5]) # IndexError: list index out of range
# ์์ธ์ฒ๋ฆฌ๋ฅผ ํด์ฃผ์
try:
    print(a[5])
except IndexError:
    print('์กด์ฌํ์ง์๋ ์ธ๋ฑ์ค')


# del
del a[1]
print(a) # [1, 3, 5, 4]

#remove
print(a) # [1, 5, 4]

# pop
print(a.pop(2)) # 5 / ๊ฐ์ ๋ฐํํ๋ค.
```

- ### ๋ฆฌ์คํธ์ ํน์ง
  > ํ์ด์ฌ์ ๋ชจ๋  ๊ฒ์ด ๊ฐ์ฒด๋ฉฐ, ํ์ด์ฌ์ List๋ ๊ฐ์ฒด์ ๋ํ ํฌ์ธํฐ ๋ชฉ๋ก์ ๊ด๋ฆฌํ๋ ํํ  
  > ์ฌ์ค์ ์ฐ๊ฒฐ ๋ฆฌ์คํธ์ ๋ํ ํฌ์ธํฐ ๋ชฉ๋ก์ ๋ฐฐ์ด ํํ๋ก ๊ด๋ฆฌ  
  > ๊ทธ๋ฌ๊ธฐ๋๋ฌธ์ ๋ฐฐ์ด์ ์ ์๋ ๋ฌธ์ ๋ถ๋ฆฌ์ธ๋ฑ ์ ๊ฐ๊ฐ ์๋ฃํ์ ์ ์ธํ ์ ์๋ค.

## 2. ๋์๋๋ฆฌ

> ํค/๊ฐ ๊ตฌ์กฐ๋ก ์๋ ฅ ์์๊ฐ ์ ์ง๋๋ฉฐ ํด์ํ์ด๋ธ๋ก ๊ตฌํ๋์ด์๋ค.

- ### ๋์๋๋ฆฌ ํ์ฉ๋ฐฉ๋ฒ

```python
#์ด๊ธฐํ
a = {}
a = dict()

a = {'key1':'value1', 'key2':'value2'}
print(a) # {'key1': 'value1', 'key2': 'value2'}

# ๊ฐ ์ถ๊ฐ

a['key3'] = 'value3'
print(a) # {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}

# ์กด์ฌํ์ง์๋ ์ธ๋ฑ์ค๋ฅผ ์กฐํํ  ๊ฒฝ์ฐ
# print(a['key4']) #KeyError: 'key4'
# ์์ธ์ฒ๋ฆฌ๋ฅผ ํด์ฃผ์
try:
    print(a['key4'])
except:
    print('์กด์ฌํ์ง ์๋ ํค')

# ๋ค์๊ณผ ๊ฐ์ ๋ฐฉ๋ฒ์ผ๋ก ์์ธ์ฒ๋ฆฌ ๊ฐ๋ฅ
print('key4' in a) # False
if 'key4' in a:
    print('์กด์ฌํ๋ ํค')
else:
    print('์กด์ฌํ์ง ์๋ ํค')


# items๋ฅผ ์ด์ฉํ์ฌ ํค/๊ฐ ์กฐํํ๊ธฐ
for k,v in a.items():
    print(k,v)
'''
key1 value1
key2 value2
key3 value3
'''
```

- ### ๋์๋๋ฆฌ ๋ชจ๋
  - defaultdict
    > ์กด์ฌํ์ง ์๋ ํค๋ฅผ ์กฐํํ ๊ฒฝ์ฐ ์๋ฌ ๋ฉ์์ง๋ฅผ ์ถ๋ ฅํ๋ ๋์  ๋ํดํธ ๊ฐ์ ๊ธฐ์ค์ผ๋ก ํด๋น ํค์ ๋ํ ๋์๋๋ฆฌ ์์ดํ ์์ฑ
  ```python
  import _collections
  a = _collections.defaultdict(int) # default๊ฐ int์ด๋ค.
  print(int()) # int๋ 0์ด๋ค.
  a['A'] = 5
  print(a) # defaultdict(<class 'int'>, {'A': 5})
  a['B'] += 1 # default ๊ธฐ์ค์ผ๋ก +1์ ํด์ค๋ค.
  print(a) # defaultdict(<class 'int'>, {'A': 5, 'B': 1})
  ```
  - Counter
    > ์์ดํ์ ๋ํ ๊ฐ์๋ฅผ ๊ณ์ฐํ์ฌ ๋์๋๋ฆฌ๋ก ๋ฐํ
  ```python
  a = [1, 2, 3, 4, 5, 5, 5, 6, 6]
  b = _collections.Counter(a) # ์ค๋ฅ๊ฐ ๋ฌ๋ค.  Counter๊ฐ ์ญ์ ๋์๋?
  #AttributeError: module '_collections' has no attribute 'Counter
  ```
