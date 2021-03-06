---
permalink: /Python/Basic/String/
title: "String"
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
  - ์ ๊ทํํ์
list_name: 
  - Python-Bible
  - ์ ๊ทํํ์
sexy: 1
main: "Python-Bible"
header:
  teaser: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_image: https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/thumb-course-phthon-basic.jpg
  overlay_filter: 0.5
excerpt: ํ์ด์ฌ ์ ๊ทํํ์์ ๋ํด
---

[ํน์์ํธ์ค](#6-ํน์-์ํธ์ค)

# 1. ์ฌ๋ผ์ด์ฑ

```python
s = 'hellow'
print(s[1:4]) #ell / index1๋ถํฐ 4-1 ๊น์ง ์ถ๋ ฅ
print(s[1:-2]) #ell / index1๋ถํฐ ๋ค์์2๋ฒ์งธ์ด์ ๊น์ง ์ถ๋ ฅ / ๋ค์์ 1๋ฒ์งธ๊ฐ ์ธ๋ฑ์ค -1์ด๋ค.
print(s[:]) # hellow /๋ณต์ฌ๊ฐ ๋๋ค. ์ด๋ ์ฐธ์กฐ๊ฐ ์๋ ๊ฐ ๋ณต์ฌ์ด๋ค.
# list๊ฐ์๊ฒฝ์ฐ์ ์ ์ฉํ๋ค. ์๋ํ๋ฉด list๋ ๊ฐ๋ณ๊ฐ์ฒด์ด๊ธฐ๋๋ฌธ์ ์ฐธ์กฐํ๊ธฐ ๋๋ฌธ์ด๋ค.
print(s[1]) # e
print(s[::-1]) #wolleh
print(s[::2]) #hlo
```

# 2. ์ ๊ทํํ์(re)

> ํน์  ๋ฌธ์๋ฅผ ์ฐพ๊ฑฐ๋ ์ฐพ์ ๋ฌธ์๋ฅผ ๋ค๋ฅธ ๋ฌธ์๋ก ๋์ฒดํด์ฃผ๋ ๋ฑ ๋ฌธ์์ด ์กฐ์๋ฐฉ๋ฒ ์ค ํ๋

## 1. ๋ฉํ๋ฌธ์

**` $()\*+.?[\^{**

> ๊ธฐ๋ฅ์ ๊ฐ์ ๋ฌธ์์ด๋ค.  
> ์ด ๋ฌธ์๋ฅผ ์ฐพ๊ณ  ์ถ์ผ๋ฉด ๋ฐฑ์ฌ๋์(\)๋ฅผ ๋ถ์ฌ์ฃผ์ ์๋๋ฉด ๋๊ดํธ ์์ ๋ฃ์ด๋ ๋๋ค.

## 2. import

```python
import re
```

## 3. re์ ํจ์

- ### re.match
  > ๋ฌธ์์ด์ "์ฒ์"๋ถํฐ ์์ํ์ฌ ํจํด์ ์ฐพ๋๋ค.

```python
s = 'hellow'
print(re.match('h', s)) # <re.Match object; span=(0, 1), match='h'>
print(re.match('e', s)) # None
```

> h๊ฐ ์ฒ์๋ถํฐ ์์ผ๋ฏ๋ก span=(0,1)์ ํตํด h์ ์์น์ธ 0๋ถํฐ 1์ด์ (์ฆ,0)์ ํ์ธํ ์ ์๋ค.  
> e๋ hellow์์ ์์ง๋ง ์ฒ์๋ถํฐ ์์ผ๋ฏ๋ก X

- ### re.search
  > ํน์ ํจํด๋ฌธ์๊ฐ ๋ฌธ์์ด์์ ์๋์ง

```python
print(re.search('h', s)) # <re.Match object; span=(0, 1), match='h'>
print(re.search('e', s)) # <re.Match object; span=(1, 2), match='e'>
```

- ### re.findall
  > ํจํด๊ณผ ์ผ์นํ๋ ๋ชจ๋  ๋ถ๋ถ์ ์ฐพ์๋ธ๋ค.

```python
print(re.findall('h', s)) # ['h']
print(re.findall('l', s)) # ['l', 'l']
print(re.findall('z', s)) # []
_s = 'hhhh'
print(re.findall('hhh', _s)) # ['hhh']
# 'hhhh' ์์ index0~2์ธ hhh์ index1~3์ธ hhh๊ฐ ์์ง๋ง overlapping์ ํ์ง์๋๋ค.
```

- ### re.finditer
  > findall๊ณผ ๋น์ทํ์ง๋ง Iteratorํ์์ผ๋ก ํจํด ์ฐพ์ ๊ฒ์ ๋ณด์ฌ์ค๋ค.

```python
finditer_obj = re.finditer('h', s)
for obj in finditer_obj:
print(obj)
# <re.Match object; span=(0, 1), match='h'>

finditer_obj = re.finditer('hhh', _s)
for obj in finditer_obj:
    print(obj)
# <re.Match object; span=(0, 3), match='hhh'>

finditer_obj = re.finditer('l', s)
for obj in finditer_obj:
    print(obj)
# <re.Match object; span=(2, 3), match='l'>
# <re.Match object; span=(3, 4), match='l'>
```

- ### re.fullmatch
  > ์๋ฒฝํ๊ฒ ๊ฐ์ ๋ฌธ์์ดํจํด์ ์ฐพ์์ค๋ค.

```python
print(re.fullmatch('h', s)) # None
print(re.fullmatch('hell', s)) # None
print(re.fullmatch('hellow', s)) # <re.Match object; span=(0, 6), match='hellow'>
```

- ### match_object์ method

#### _group(), start(), end(), span()_

```python
match_Object = re.search('l', s)
print(match_Object) # <re.Match object; span=(2, 3), match='l'>
print(match_Object.group()) # l ์ผ์นํ ๋ฌธ์์ดํจํด ๋ฐํ
print(match_Object.start()) # 2 ์ผ์นํ ๋ฌธ์์ด ์์์์น
print(match_Object.end()) # 3 ์ผ์นํ ๋ฌธ์์ด ๋ ์์น
print(match_Object.span()) # (2, 3) ์ผ์นํ ๋ฌธ์์ด์ ์์,๋ ํํ๋ก ๋ฐํ
```

## 4.์ ๊ท์ ์๋ฃ

- ### ๋๊ดํธ

  > [abcd] == [ a or b or c or d ]  
  > a๋ b๋ c๋ d ์ค ํ๋๋ผ๋ ๋ค์ด๊ฐ์๋์ง

  ```python
  print(re.search('[zh]', s)) # <re.Match object; span=(0, 1), match='h'>
  # z๋ h๊ฐ ๋ค์ด๊ฐ๋ฉด ์ถ๋ ฅ  -> h๊ฐ ๋ค์ด๊ฐ์ผ๋ฏ๋ก ์ถ๋ ฅ
  print(re.search('he[zl]', s)) # <re.Match object; span=(0, 3), match='hel'>
  #hez ๋ hel ์ผ ๊ฒฝ์ฐ ์ถ๋ ฅ
  ```

  - #### -
    > -๋ ๋ฉํ๋ฌธ์๊ฐ ์๋์ง๋ง ๋๊ดํธ ์์ ์์ ๊ฒฝ์ฐ ๋ฉํ๋ฌธ์๋ก ๊ธฐ๋ฅ์ด ์ถ๊ฐ๋๋ค.  
    > ex) [0-9] 0๋ถํฐ 9๊น์ง ์ฌ์ด ์ซ์๊ฐ ์์ผ๋ฉด ์ถ๋ ฅ  
    > [A-z]๋ ๋ชจ๋  ์ํ๋ฒณ์ด ์๋๋ค. ์์คํค์ฝ๋๋ก ๋ฐ์ง๋ฉด ๋๋ฌธ์์ ์๋ฌธ์ ์ฌ์ด์ ํน์๋ฌธ์๊ฐ ์๋ค.  
    > ๊ทธ๋ฌ๋ฏ๋ก [A-Za-z]๋ก ์ฌ์ฉํด์ผํ๋ค. [A-Z,a-z]๊ฐ ์๋ ์ด์ ๋ [abcd]๋ฅผ ์๊ฐํ๋ฉด ๋๋ค.

  ```python
  print(re.search('[a-z]', s)) # <re.Match object; span=(0, 1), match='h'>
  print(re.search('h[a-z]', s)) # <re.Match object; span=(0, 2), match='he'>
  _s = ']01234'
  print(re.search('[A-z]', _s)) # <re.Match object; span=(0, 1), match=']'>
  # \๋ ์์คํค์ฝ๋ ๊ฐ์ผ๋ก Z์ a ์ฌ์ด์ ์๋ ์์คํค์ฝ๋์ด๋ค.
  # ์ฆ A-z๋ผ๋ ๊ฒ์ A-Z(65-90) + ํน์  ํน์ ๋ฌธ์(91-96) + a-z(97-122) ์ด๋ค.
  ```

  - #### ^
    > ^๋ ์ฌ๋ ๋๊ดํธ([) ๋ค์ ๋ฐ๋ก ์์ผ๋ฉด ^๋ค ๋ฌธ์๋ ์์ธ์ฒ๋ฆฌ์ด๋ค. ์ฆ ์ฌ์งํฉ
    >
    > > \[^abcd] a๋ b๋ c๊ฐ ์๋ ๊ฒ๋ค ~(a or b or c)

  ```python
  print(re.search('[^abcd]', s)) # <re.Match object; span=(0, 1), match='h'>
  print(re.search('[^helo]', s)) # <re.Match object; span=(5, 6), match='w'>
  ```

- ### .
  > .์ ๋ชจ๋  ๋ฌธ์์ ์ผ์น๋ฅผ ๋ํ๋ธ๋ค.  
  > ๊ฐํ๋ฌธ์๋ ํฌํจํ์ง์๋๋ค.

```python
print(re.search('h...o', s)) # <re.Match object; span=(0, 5), match='hello'>
```

- ### |
  > ์์ํ์ผ

#### ๋ฌธ์ ์ 

```python
s = 'one onetwo'
print(re.findall('one|onetwo', s)) # ['one', 'one']
```

onetwo๋ ๋์ค์ง ์๋๋ค. ๊ทธ ์ด์ ๋ ์ฒซ๋ฒ์งธ one์์ ์ฒซ'one'์ ์ถ์ถํ๊ณ  ๋๋ฒ์งธ onetwo์์ 'one'์ ์ถ์ถํ๋ฉด two๋ง ๊ฒ์ฌํ ํจํด์ด ๋จ์๊ธฐ๋๋ฌธ์ด๋ค.

#### ํด๊ฒฐ๋ฐฉ๋ฒ

```python
print(re.findall('onetwo|one', s)) #['one', 'onetwo']
#๊ธดํจํด์ ์์ ๋๊ฑฐ๋
print(re.findall(r'\bone\b|\bonetwo\b', s))  # ['one', 'onetwo']
#\b๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋ค.
```

## 5. flags

```python
re.search(pattern, string, flags)
```

๋งค๊ฐ๋ณ์ ์ค `flags`๋ฅผ ์ดํด๋ณด์

- ### re.I
  > ๋์๋ฌธ์ ๊ตฌ๋ถ ์์ด ์ผ์น

```python
s = 'Hello'
print(re.search('he', s)) # None
print(re.search('he', s, re.I)) # <re.Match object; span=(0, 2), match='He'>
```

- ### re.S
  > .์ ๊ฐํ๋ฌธ์๋ฅผ ํฌํจํ๋ค. ์๋๋ ํฌํจ๋์์ง์๋ค.

```python
s = 'Hello\nhello'
print(s)
print(re.search('o..', s)) # None
print(re.search('o..', s, re.S)) # <re.Match object; span=(4, 7), match='o\nh'>
```

- ### inline flag , |
  > ์ฌ๋ฌ ์ข๋ฅ๋ฅผ ํ๊บผ๋ฒ์ ์ฌ์ฉํ  ์๋ ์๋ค.

```python
# |์ฌ์ฉ
print(re.search('h...o..', s, re.S | re.I)) # <re.Match object; span=(0, 7), match='Hello\nh'>
# inline flag๋ก๋ ํ  ์ ์๋ค.
# i = re.I
# s = re.S
print(re.search('(?is)h...o..', s)) # <re.Match object; span=(0, 7), match='Hello\nh'>

# ์ผ๋ถ๋ก ์ฌ์ฉํ๋ ค๋ฉด (?s:pattern)์ผ๋ก ๋ฌถ์ด์ฃผ๋ฉด ๋๋ค.
print(re.search('o..ello', s)) # \n๊ฐ ํฌํจ์ด์๋๋ฏ๋ก None
print(re.search('(?is:O..)ello', s)) #<re.Match object; span=(4, 11), match='o\nhello'>
# \์ ๋์๋ฌธ์ ๊ตฌ๋ถ ์๊ด X
```

## 6. ํน์ ์ํธ์ค

- ### \d ์ซ์ํ \D ๋น์ซ์ํ

```python
s = '543he21'
print(re.search('\d\d', s)) # <re.Match object; span=(0, 2), match='54'>
print(re.search('[0-9][0-9]', s)) # <re.Match object; span=(0, 2), match='54'>
```

- ### \w ๋จ์ด \W ๋น๋จ์ด
  > \w -> ๋ฌธ์ํ = ์๋ฌธ+์ซ์+์ธ๋๋ฐ(\_)  
  > \W -> \w์ ๋ฐ๋

```python
s = '0_D a A'
print(re.search('\w\W\w', s)) # <re.Match object; span=(2, 5), match='D a'>
print(re.search('[0-9A-Za-z_][^0-9A-Za-z_][0-9A-Za-z_]', s)) #<re.Match object; span=(2, 5), match='D a'>
```

- ### \b \B
  > \b ๋จ์ด๋ฌธ์์ ๋น๋จ์ด๋ฌธ์์ฌ์ด  
  > ์ฆ a\b -> a๋ค์๋ ๋น๋ฌธ์๊ฐ ์์ผํ๋ค.  
  > !\b -> ๋๋ํ ๋ค์๋ ๋ฌธ์๊ฐ ์์ผํ๋ค.  
  > \B ๋จ์ด๋ฌธ์์ ๋จ์ด๋ฌธ์์ฌ์ด ํน์ ๋น๋จ์ด๋ฌธ์์ ๋น๋จ์ด๋ฌธ์์ฌ์ด
  > ์ฒซ๋ฒ์งธ ํ๋ผ๋ฏธํฐ์ `r`์ ๋ถ์ฌ์ค์ผํ๋ค.

```python
s = 'up date up'
print(re.findall(r'\bup\b', s)) # ['up', 'up']
print(re.search(r'\Bat\B', s)) #<re.Match object; span=(4, 6), match='at'>
```

> ์ฒ์๊ณผ ๋์ ๋น๋ฌธ์์ด๋ค.

```python
s = 'a'
print(re.findall(r'\b', s)) # ['', ''] ์ฒ์๋ถ๋ถ(๋น๋ฌธ์) + a(๋ฌธ์), a(๋ฌธ์) + ๋๋ถ๋ถ(๋น๋ฌธ์) ์ด๋์ 2๊ฐ
print(re.findall(r'\B', s)) # ๋น๋ฌธ์+๋น๋ฌธ์, ๋ฌธ์+๋ฌธ์๊ฐ ์๋ค.

s = 'a aa'
print(re.findall(r'\b', s)) # ['', '', '', '']
# ์ฒ์๋ถ๋ถ(๋น๋ฌธ์) + a(๋ฌธ์), a(๋ฌธ์) + ๋๋ถ๋ถ(๋น๋ฌธ์), ์ฒซ๋ฒ์งธa(๋ฌธ์)+ ์คํ์ด์ค(๋น๋ฌธ์), ์คํ์ด์ค(๋น๋ฌธ์)+ ์ฒซ๋ฒ์งธa(๋ฌธ์) ์ด4๊ฐ
print(re.findall(r'\B', s)) # ['']
# ๋๋ฒ์งธa(๋ฌธ์) + ์ธ๋ฒ์งธa(๋ฌธ์)

s = "!@"
print(re.search(r'\B!', s)) # <re.Match object; span=(0, 1), match='!'>
print(re.search(r'\B!\B', s))# <re.Match object; span=(0, 1), match='!'>
print(re.search(r'@\B', s)) # <re.Match object; span=(1, 2), match='@'>
```

- ### ^,$ ํ \A,\Z ๋ฌธ์์ด ์ ์ฒด
  - #### \A,\Z
    > ๋ฌธ์์ด์ ์์๊ณผ ๋์ ๋ํ๋ธ๋ค.
  ```python
  s = 'hello'
  print(re.search('\Ahello\Z', s)) #<re.Match object; span=(0, 5), match='hello'>
  s = 'hello\n'
  print(re.search('\Ahello\Z', s)) #None
  # \n์ ๋ฌธ์๋ก ์ธ์์ด ๋๋ค.
  print(re.search('\Ahello\n\Z', s)) #print(re.search('\Ahello\Z', s))
  ```
  - #### ^,$
    > ^์ $๋ ํ์ ์์๊ณผ ํ์ ๋์ด๋ค.
    > re.M์ต์์ ์ค์ผํ๋ค.  
    > ํ์ ๋ฌธ์์ด์ ์์๊ณผ ๊ฐํ๋ฌธ์ ์ฌ์ด, ๊ฐํ๋ฌธ์์ ๊ฐํ๋ฌธ์ ์ฌ์ด, ๊ฐํ๋ฌธ์์ ๋ฌธ์์ด์ ๋ ์ฌ์ด๋ถ๋ถ์ด๋ค.
  ```python
  s = ' hello1 \n hello2 \n hello3 '
  print(re.findall('^\shello\d\s$', s, re.M)) # [' hello1 ', ' hello2 ', ' hello3 ']
  ```
  - #### ๋น ๋ฌธ์์ด ํน์ ๋น ํ ๊ฒ์ฌ
  ```python
  print(re.fullmatch('\A\Z', '')) # <_sre.SRE_Match object; span=(0, 0), match=''>
  print(re.fullmatch('\A\Z', '\n')) # None
  print(re.fullmatch('^$', '')) # <_sre.SRE_Match object; span=(0, 0), match=''>
  print(re.fullmatch('^$', '\n')) # None
  print(re.findall('^$', '\n', re.M)) # ['', '']
  ```

## 7. ๋ฐ๋ณต

- ### ์ ๋์

  - #### \*
    > 0ํ์ด์ ๋ฐ๋ณต

  ```python
  s = 'llhello'
  print(re.search('l*', s))
  print(re.findall('l*', s)) # ['ll', '', '', 'll', '', '']
  # index[0] -> ์ฒซ๋ฒ์งธ ll์์ ํ๋ฒ
  # index[1] -> h ์
  # index[2] -> e ์
  # index[3] -> ๋๋ฒ์งธ ll ์
  # index[4] -> o ์
  # index[5] -> ๋๋ฌธ์์ด ์

  s = 'hello'
  print(re.search('l*', s))#<re.Match object; span=(0, 0), match=''>
  #์ด์ฒ๋ผ 0ํ์ด์ ๋ฐ๋ณต์ด๊ธฐ๋๋ฌธ์ ๋น์ด์๋ ๊ฒ๋ ํฌํจ์ด๋ค.
  ```

  - #### +
    > 1ํ์ด์๋ฐ๋ณต

  ```pyton
  s = 'llhello'
  print(re.findall('l+', s)) #['ll', 'll']
  # 1ํ์ด์ ๋ฐ๋ณต์ด๊ธฐ๋๋ฌธ์ ์ฑ๊ณต์ ์ผ๋ก ๋จ๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.
  s = '<p> Lorem ipsum... is boring. </p>'
  print(re.search('<p>.+</p>', s))
  # <re.Match object; span=(0, 34), match='<p> Lorem ipsum... is boring. </p>'>
  ```

  - #### {n, m}

  ```python
  '''
  a{n} : nํ๋งํผ ๋ฐ๋ณต
  a{n, m} : nํ์ด์ mํ์ดํ ๋ฐ๋ณต
  a{n,} : nํ์ด์ ๋ฐ๋ณต
  '''
  ```

  ***

  ```python
  s = 'aabbbaaaaaa'
  print(re.findall('a{2, 5}', s)) # [] / ์๋ฌด๊ฒ๋ ์๋ฌ๋ค.
  print(re.findall('a{2,5}', s)) # ['aa', 'aaaaa']
  ```

  > ex{2,5} aabbbaaaaaa -> ์ฒซ๋ฒ์งธ aa์์ 2๋ฒ์ด๋ฏ๋ก ๋ฐํํ๊ณ   
  >  ๋๋ฒ์งธ aaaaaa์ค aa๋ฅผ ํ์ธํ๊ณ  ๋ฐํํ๋๊ฒ์ด์๋๋ผ  
  >  ์ด๋๊น์ง a๊ฐ ๋ฐ๋ณต๋๋์ง ํ์ธํ๊ณ  ๋ฐ๋ณตํ์ ์ต๋ Max๋ฅผ 5๊น์ง๋ง ์ ํ์ ๋๋ค.  
  >  ๋จ, {,}์์ ๋์ด์ฐ๊ธฐ๋ฅผ ํ๋ฉด ์๋๋ค.

- ### ํ์/๋ํ์ ๋์
  > ์ ๋์๋ ์ต๋ํ ๋ง์ด ๊ฒน์น๋ ๋ถ๋ถ์ ๋ณด์ฌ์ค๋ค.  
  > ์ด๋ฌํ ์ ๋์๋ฅผ ํ์์ ๋์๋ผ๊ณ ํ๋ค.
- #### ํ์์ ๋์

```python
matchObj = re.search('<p>.*</p>', '''
<p> part 1 </p> part 2 </p>
<p> part 3 </p> part 4 </p>
''', re.DOTALL)
print(matchObj.group())
'''
<p> part 1 </p> part 2 </p>
<p> part 3 </p> part 4 </p>
'''
# ์ฌ๊ธฐ์ ํ์ธํด๋ณผ์ ์๋ ๊ฒ์ .์ด </p>๋ ๋ฌธ์๋ก ์ธ์ํ๋ค๋ ๊ฒ์ด๋ค.
```

์ด๊ฒ์ ํ์ ์ ๋์๋ผ๊ณ  ํ๋ค.  
์กฐ๊ฑด์ ๋ง๋๋ ๋๊น์ง ๊ฒ์ฌํ๊ณ  ๋ค๋ก ๊ฒ์ฌํ๋ค.  
์ญํ์ด๋ผ๊ณ ๋ ํํํ๋ค. ๋๊น์ง ๊ฐ๋ค์ ๋ง๋ ๊ฒ์ ํ์ธํ๊ธฐ๋๋ฌธ.

- #### ๋ํ์ ๋์
  > ์กฐ๊ฑด์ ํด๋น๋๋ ๋ถ๋ถ์ด ์์ผ๋ฉด ๋ฐ๋ก ๋๋๋ค.

```python
matchObj = re.search('<p>.*?</p>', '''
<p> part 1 </p> part 2 </p>
<p> part 3 </p> part 4 </p>
''', re.DOTALL)
print(matchObj.group())
'''
<p> part 1 </p>
'''
```

?์ ๋ถ์ด๋ฉด ๋ํ ์ ๋์๋ผ๊ณ  ํ๋ค.

- #### ์์ฉ
  > 1~8์๋ฆฌ 10์ฐ์์ ์ผ์นํ๋ ์ ๊ทํํ์

```python
# r'\b\d{1,8}\b'
```

> 4์๋ฆฌ ๋๋ 8์๋ฆฌ 16์ง์์ ์ผ์นํ๋ ์ ๊ทํํ์

```python
# r'\b[0-9a-f]{4}\b|\b[0-9a-f]{8}\b'
```

## 8. ()

> ()๋ ๊ทธ๋ฃนํ๊ธฐ๋ฅ๊ณผ ์บก์ฒ์ ๊ธฐ๋ฅ์ด ์๋ค.

- ### 1. ๊ทธ๋ฃนํ

  - #### ๊ทธ๋ฃนํ๋ฅผ ํด์ผํ๋ ์ด์ 

  ```python
  s = 'ab abab baba abbb'
  print(re.findall('ab+', s)) # ['ab', 'ab', 'ab', 'ab', 'abbb']
  ```

  abab๋ก ์ธ์์ ํ์ง์๊ณ  a๋ฐ๋ก b๋ฐ๋ก ์ด๊ธฐ๋๋ฌธ์  
   ab๋ abbb, abbbbb๊ฐ์ด b์๋ง +๊ฐ ์ ์ฉ๋๋ค.

  - #### ๊ทธ๋ฃนํ

  ```python
  s = 'abab'
  print(re.search('(ab)+', s)) # <re.Match object; span=(0, 4), match='abab'>
  print(re.findall('(ab)+', s)) #['ab']
  ```

  ํ์ง๋ง findall์์  abab๊ฐ ์๋๋ผ ab๊ฐ ๋จ๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค. ์ด์ ๋?

  > ๋ฐ๋ก ๊ดํธ๊ฐ ๊ทธ๋ฃนํ ๊ธฐ๋ฅ์ ํ๋ ๊ฒ์ด ์๋๋ผ ์บก์ฒ์ ์ญํ ์ ๊ธฐ๋ฅํด์ ์ผ์ด๋ ์ผ

  ##### ํด๊ฒฐ๋ฐฉ๋ฒ

  ```python
  print(re.findall('(?:ab)+', s)) # ['abab']
  # ์์ ๊ฐ์ด (?:<ํจํด>) ์ ์ฌ์ฉํด์ฃผ๋ฉด ๋๋ค.
  ```

- ### 2. ์บก์ฒ

  > ์บก์ฒ๋ ์ํ๋ ๋ถ๋ถ๋ง์ ์ถ์ถํด์ค๋ค.

  ```python
  s = '2018:10:20'
  print(re.findall('\d{4}:(\d\d):(\d\d)', s)) # [('10', '20')]
  ```

  ์ํ๋ ๋ถ๋ถ์ ( )์๊ดํธ ํด์ฃผ๋ฉด ์ถ์ถ๋๋ค.

  - #### groups()
    ์ ์์๋ findall์ด์๋ค. re.search๋ฅผ ํด๋ณด์

  ```python
  print(re.search('\d{4}:(\d\d):(\d\d)', s))
  # <re.Match object; span=(0, 10), match='2018:10:20'>
  ```

  ์ถ์ถ๋ ๊ฒ์ด ์๋๋ผ ๊ฒ์ํ ํจํด์์ฒด๊ฐ ๋ฌ๋ค.

  ***

  ์์์ ํ์ธํด๋ณธ match_object์ method๋ถ๋ถ์์ group์ ์ฌ์ฉํด๋ณด์.

  ```python
  match_Object = (re.search('\d{4}:(\d\d):(\d\d)', s))
  print(match_Object.group()) # 2018:10:20
  ```

  ๋ง์ฐฌ๊ฐ์ง๋ก ๊ฒ์ํ ๋ด์ฉ์ด ๋จ๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.

  ***

  ๊ทธ๋ ๋ค๋ฉด group()์ ๋งค๊ฐ๋ณ์์ ์ธ์๋ฅผ ์ ๋ฌํด์ฃผ๋ฉด ์ด๋ป๊ฒ ๋ ๊น?

  ```python
  for i in range(0, 2+1):
      print("group({0}):{1}".format(i, match_Object.group(i)))
  '''
  group(0):2018:10:20
  group(1):10
  group(2):20
  '''
  ```

  group(0)์ ๊ฒ์ํํจํด์ด ๋๊ฐ์ด ๋จ๋ ๊ฒ์ ํ์ธํ ์์๊ณ , group(1)๊ณผ (2)๋ ์บก์ฒํ ๋ชฉ๋ก์ด ๋ฌ๋ค.

  **groups**

  ```python
  print(match_Object.groups()) # ('10', '20')
  print(match_Object.groups()[0]) # 10
  print(match_Object.groups()[1]) # 20
  ```

  groups๋ ๋ฆฌ์คํธ ํ์์ผ๋ก ์บก์ฒํ ๊ฒ๋ค์ ์ถ๋ ฅํด์ค๋ค.

## 9. ์ฌ์ฐธ์กฐ

> ์์  ์บก์ฒ๊ธฐ๋ฅ์ ์ด์ฉํ์ฌ ์ฌ์ฐธ์กฐ๋ฅผ ํ  ์ ์๋ค.

### ๋ฐฉ๋ฒ1. \์ซ์

> \1 ์ ์ฒซ๋ฒ์งธ ์บก์ฒํ ๊ทธ๋ฃน, \2 ๋๋ฒ์งธ ์ฐธ์กฐํ ๊ทธ๋ฃน  
> ์๊ดํธ ( ) ์์ r์ ๋ถ์ฌ์ค์ผํ๋ค.

- #### ์์ 1) ์๋ค๊ฐ ๋๊ฐ์ ๋ฌธ์์ด ์ฐพ๊ธฐ
  - ##### re.search
    - ###### group()
    ```python
    print(re.search(r'(\w)\w\1', '๊ธฐ๋ฌ๊ธฐ ABC aba xyxy ').group())
    #๊ธฐ๋ฌ๊ธฐ
    ```
    group()์ผ๋ ์ฐพ๋ ํจํด์ด ๋ฌ๋ค. (์บก์ฒ ์๊ฐX) -> \w\w\1  
     ์ฌ๊ธฐ์ \1์ ์ฒซ๋ฒ์งธ ์บก์ฒํ ๊ฒ์ด๋ค.
    - ###### group(1)
    ```python
    print(re.search(r'(\w)\w\1', '๊ธฐ๋ฌ๊ธฐ ABC aba xyxy ').group(1))
    #๊ธฐ
    ```
    group(1)์ ์ฒซ๋ฒ์งธ ์บก์ฒํ ํญ๋ชฉ์ ๋ณด์ฌ์ค๋ค.  
     ํ์ง๋ง search์ด๊ธฐ๋๋ฌธ์ ์ฒ์ ํ๋ฒ ๊ฒ์ฌ๋ฅผ ํ๊ณ  ๊ทธ๋ถ๋ถ์์์ ์บก์ฒ๋ง ์ถ๋ ฅํ๋ค.
    - ###### groups()
    ```python
    print(re.search(r'(\w)\w\1', '๊ธฐ๋ฌ๊ธฐ ABC aba xyxy ').groups())
    #('๊ธฐ',)
    ```
    groups๋ ์บก์ฒํญ๋ชฉ๋ค์ ๋ฆฌ์คํธ๋ก ๋ณด์ฌ์ค๋ค.
  - ##### re.findall
  ```python
  print(re.findall(r'(\w)\w\1', '๊ธฐ๋ฌ๊ธฐ ABC aba xyxy ')) # ['๊ธฐ', 'a', 'x']
  ```
  ์ฌ๋ฌ๋ฒ ๊ฒ์ฌํ์ฌ ์๋ค๊ฐ ๊ฐ์ ๋ฌธ์์ธ ๊ธฐ๋ฌ๊ธฐ์ aba์ aba๋ฅผ ํจํด์ ์ฐพ์ง๋ง ์บก์ฒ๋ง ๋ฐํํ๋ฏ๋ก (\w)๋ถ๋ถ๋ง ๋ฐํํ๋ค.
  ***
  ์ด๋ด ๋, ์บก์ฒ๋ฅผ ํ๋ ๋ ๋ง๋ค๋ฉด ๋๋ค.
  > r'(\w)\w\1' -> r'((\w)\w\2)
  ```python
  match_List = re.findall(r'((\w)\w\2)', '๊ธฐ๋ฌ๊ธฐ ABC aba xyxy ')
  print(match_List) # [('๊ธฐ๋ฌ๊ธฐ', '๊ธฐ'), ('aba', 'a'), ('xyx', 'x')]
  ```
  ์บก์ฒ์ ์ฐ์ ์์๊ฐ ๋ฐ๊นฅ๊ดํธ๊ฐ ์ฐ์ ์ด๊ธฐ๋๋ฌธ์  
   ์ฒซ๋ฒ์งธ ์ธ์๋ก '๊ธฐ๋ฌ๊ธฐ'๊ฐ ๋ํ๋๊ณ  ๋๋ฒ์งธ ์ธ์๋ก ๋๋ฒ์งธ์บก์ฒ์ธ '๊ธฐ'๊ฐ ๋ํ๋๋ค.
  ์ฒซ๋ฒ์งธ์ธ์๋ง ์ถ๋ ฅ
  ```python
  for match in match_List:
      print(match[0],end=' ')
  #๊ธฐ๋ฌ๊ธฐ aba xyx
  ```
  ***
  - ##### re.finditer
  ```python
  match_Object_Iter = re.finditer(r'((\w)\w\2)', '๊ธฐ๋ฌ๊ธฐ ABC aba xyxy ')
  print(match_Object_Iter)
  for match in match_Object_Iter:
      print('์ฐพ์ ํจํด: {}, ์บก์ฒํ ํจํด: {}, ์ฒซ๋ฒ์งธ ์บก์ฒ: {}, ๋๋ฒ์งธ ์บก์ฒ:{} start/end position={}'.
            format(match.group(), match.groups(), match.group(1), match.group(2), match.span()))
  '''
  ์ฐพ์ ํจํด: ๊ธฐ๋ฌ๊ธฐ, ์บก์ฒํ ํจํด: ('๊ธฐ๋ฌ๊ธฐ', '๊ธฐ'), ์ฒซ๋ฒ์งธ ์บก์ฒ: ๊ธฐ๋ฌ๊ธฐ, ๋๋ฒ์งธ ์บก์ฒ:ํ  start/end position=(0, 3)
  ์ฐพ์ ํจํด: aba, ์บก์ฒํ ํจํด: ('aba', 'a'), ์ฒซ๋ฒ์งธ ์บก์ฒ: aba, ๋๋ฒ์งธ ์บก์ฒ:a start/end position=(8, 11)
  ์ฐพ์ ํจํด: xyx, ์บก์ฒํ ํจํด: ('xyx', 'x'), ์ฒซ๋ฒ์งธ ์บก์ฒ: xyx, ๋๋ฒ์งธ ์บก์ฒ:x start/end position=(12, 15)
  '''
  ```
  finditer๋ iterator ํ์์ผ๋ก ๋ฐํํ๊ธฐ๋๋ฌธ์ re.search๋ฅผ ๋ฐ๋ณตํด์ iterateํด์ค๋ค.
- #### ์์ 2) ๊ธธ์ด๊ฐ ์ง์์ธ ์ซ์ ์ฐพ๊ธฐ

```python
print(re.findall(r'\b(\d\d)+\b', '1, 25, 301, 4000, 55555')) # ['25', '00']
```

๊ธธ์ด๊ฐ ์ง์์ธ ์ซ์๋ฅผ ์ฐพ๊ณ  ์ถ๋ค.  
ํ์ง๋ง ๊ฒฐ๊ณผ ๊ฐ์? 4000์ด ์๋๋ผ 00์ด ๋ฌ๋ค.

##### ํด๊ฒฐ๋ฐฉ๋ฒ1.

```python
print(re.findall(r'\b(?:\d\d)+\b', '1, 25, 301, 4000, 55555')) #['25', '4000']
```

##### ํด๊ฒฐ๋ฐฉ๋ฒ2.

```python
print(re.search(r'\b(\d\d)+\b', '1, 4000, 301, 25, 55555')) # <re.Match object; span=(3, 7), match='4000'>
```

re.search๋ ์ฒ์ ๋ฐ๊ฒฌํ ๊ฒ๋ง ๋ฌ๋ค.  
์ด๋ฅผ ์ด์ฉํ์ฌ

```python
matchObj_iter = re.finditer(r'\b(\d\d)+\b', '1, 25, 301, 4000, 55555')

for matchObj in matchObj_iter:
    print(matchObj.group())
'''
25
4000
'''
```

re.search๋ฅผ ๋ฐํํ๋ re.finditer๋ฅผ ์ด์ฉํ์ฌ ์ถ๋ ฅํด์ค๋ค.

### ๋ฐฉ๋ฒ2. ?<>

> \1 \2 ๋์  (?P<name>pattern)์ ์ฌ์ฉํ์ฌ ์ง๊ด์ ์ผ๋ก ๋ณผ์์๋ค.

```python
print(re.search(r'(?P<name>\w{3}) (?P=name)\w',
 '๊ธฐ๋ฌ๊ธฐ ๊ธฐ๋ฌ๊ธฐ๊ธฐ aba xyxy '))
#<re.Match object; span=(0, 8), match='๊ธฐ๋ฌ๊ธฐ ๊ธฐ๋ฌ๊ธฐ๊ธฐ'>
```

์ฐพ๋ ํจํด -> (\w\w\w) (\w\w\w)\w  
์ฒซ๋ฒ์งธ(\w\w\w)์ ๋๋ฒ์งธ(\w\w\w)๋ ๊ฐ์์ผํ๋ค.

```python
print(re.search(r'(?P<name>\w{3}) (?P=name)\w',
 '๊ธฐ๋ฌ๊ธฐ ๊ธฐ๋ฌ๊ธฐ๊ธฐ aba xyxy ').groups()) #('๊ธฐ๋ฌ๊ธฐ',)
```

groups๋ ์บก์ฒํ ํญ๋ชฉ์ ๋ณด์ฌ์ค๋ค.  
์บก์ฒํญ๋ชฉ : (?p<name>) ๋ถ๋ถ

## 10. ์นํ๊ณผ ๋๋๊ธฐ

- ### ์นํ

  ```python
  re.sub(pattern, repl, string, count, flags)
  ```

  - #### ์นํ1
    - ##### ์ง์ ํ ๋ฌธ์๋ก ์นํํ๊ธฐ
    ```python
    password = 'abcdefg abcdefg abcdefg'
    print(re.sub('d\w{3}', 'XXXX', password))
    # abcXXXX abcXXXX abcXXXX
    ```
    - ##### count๋ ์นํํ  ์ซ์์ด๋ค.
    ```python
    print(re.sub('d\w{3}', 'XXXX', password, 2))
    # abcXXXX abcXXXX abcdefg
    ```
    - ##### ์นํ์ ์ด์ฉํ์ฌ ์ผ๋ถ๋ฌธ์์ด ์ ๊ฑฐ
    ```python
    print(re.sub('d\w{3}', '', password, 2))
    # abc abc abcdefg
    ```
  - #### ์นํ2

    > ์นํ์ผ๋ก ์ฒซ๋ฒ์งธ์ธ์ pattern์ ๋ฌธ์ฅ๊ณผ ์ผ์นํ๋ ๋ด์ฉ ๋ฃ๊ธฐ

    - ##### /g<0>

    ```python
    print(re.sub('๊น์ฐฌ์', '[๋ฒ์ธ]:\g<0>', '๊น์ฐฌ์์ ๋ฒ์ธ์ด๊ณ  ๊ฐ๋ฏผ์์ ๋ฒ์ธ์ ์ฌ์์น๊ตฌ์ด๋ค.'))
    # ๊น์ฐฌ์์ ๋ฒ์ธ์ด๊ณ  ~ -> [๋ฒ์ธ]๊น์ฐฌ์์ ๋ฒ์ธ์ด๊ณ ~
    ```

    /g<0>๋ pattern ์ ์ฒด ๋ณต์ฌ

    - ##### \1, \2

    ```python
    print(re.sub('(๊น์ฐฌ์)์ ๋ฒ์ธ์ด๊ณ  (๊ฐ๋ฏผ์)์ ๋ฒ์ธ์ ์ฌ์์น๊ตฌ์ด๋ค.',
     r'\1:๋ฒ์ธ \2:์ฌ์์น๊ตฌ', '๊น์ฐฌ์์ ๋ฒ์ธ์ด๊ณ  ๊ฐ๋ฏผ์์ ๋ฒ์ธ์ ์ฌ์์น๊ตฌ์ด๋ค.'))
    # ๊น์ฐฌ์:๋ฒ์ธ ๊ฐ๋ฏผ์:์ฌ์์น๊ตฌ
    ```

    \1,\2๋ฅผ ๋ฃ์๋ r์ ์๊ดํธ์์ ๋ฃ์ด์ฃผ์.

    - ##### ?P<>

    ```python
    print(re.sub('(?P<suspect>\w{3})์ ๋ฒ์ธ์ด๊ณ  (?P<girlfriend>\w{3})์ ๋ฒ์ธ์ ์ฌ์์น๊ตฌ์ด๋ค.',
                 '\g<suspect>:๋ฒ์ธ \g<girlfriend>:์ฌ์์น๊ตฌ',
                 '๊น์ฐฌ์์ ๋ฒ์ธ์ด๊ณ  ๊ฐ๋ฏผ์์ ๋ฒ์ธ์ ์ฌ์์น๊ตฌ์ด๋ค.'))
    #๊น์ฐฌ์:๋ฒ์ธ ๊ฐ๋ฏผ์:์ฌ์์น๊ตฌ
    ```

  - #### ์นํ3
    > ํจ์ํํ ๋ฌธ์ฅ์ ์นํํด์ ๋ฃ๊ธฐ

  ```python
  def convertToPercentage(matchObj):
      number = float(matchObj.group())
      return str(number * 100) + '%'

  print(re.sub(pattern=r'\b0\.\d+\b',
               repl=convertToPercentage,
               string='Red 0.250, Green 0.001, Blue 0.749, Black 1.5'))
  # Red 25.0%, Green 0.1%, Blue 74.9%, Black 1.5
  ```

  ์ฌ๊ธฐ์ matchObj๋ re.finditor๊ฐ์ธ ๊ฒ์ ์ ์ ์๋ค.

- ### ๋๋๊ธฐ
  ```python
  re.split(pattern, string, maxsplit, flags)
  ```
  #### ์์ 
  - ##### 1. ์๊ฐ ๋๋๊ธฐ
  ```python
  result = re.split(':', ':1992:03:05:')
  print(result)
  # ['', '1992', '03', '05', '']
  ```
  :๋ก ๋๋๊ธฐ ๋๋ฌธ์ ๋ฌธ์์ด ๋งจ์๋ถ๋ถ๊ณผ : ์ฌ์ด๊ฐ ''์ด๋ค.
  - ##### 2. ํ๊ทธ ๋๋๊ธฐ
  ```python
  result = re.split('<[^<>]*>',
                    '<html> Wow <head> header </head> <body> Hey </body> </html>')
  print(result)
  #['', ' Wow ', ' header ', ' ', ' Hey ', ' ', '']
  ```
  ์ฐธ์กฐ : https://greeksharifa.github.io/
  - ##### 3. ํ๋๋๊ธฐ ๋ฐฉ๋ฒ
  ```python
  string = '''java - Click on button until alert is present in Selenium	2017๋ 5์ 23์ผ
  Click OK on alert Selenium Webdriver	2016๋ 6์ 5์ผ
  python - Click the javascript popup through webdriver	2012๋ 5์ 29์ผ
  selenium - Read Message From Alert and click on OK	2012๋ 5์ 17์ผ
  stackoverflow.com ๊ฒ์๊ฒฐ๊ณผ ๋๋ณด๊ธฐ'''
  lines = re.split('\r?\n', string)
  print(lines[0])
  # ์๋์ฐ๋ \r\n ๋ฆฌ๋์ค๋ \n์ด๊ธฐ๋๋ฌธ
  print(re.findall('.+', string)[0])
  # .์ ๊ฐํ๋ฌธ์๊ฐ ํฌํจ์ด ์๋๋ฏ๋ก ๊ฐํ๋ฌธ์ ์ ๊น์ง ์ฐพ๋๋ค.
  print(re.findall('^.+$', string, re.M)[0])
  # ^์ $๋ re.M์ flags์ ๊ฐ์ด ์ฌ์ฉํ ์ ๊ฐํ๋ฌธ์์ ์๋ฏธ๋ฅผ ๊ฐ๋๋ค.
  ```
  ์ฐธ์กฐ : https://greeksharifa.github.io/

## 11. ํ์

```python
# ๊ธ์  ์ ๋ฐฉํ์ (?=<pattern>)
# ๊ธ์  ํ๋ฐฉํ์ (?<=<pattern>)
# ๋ถ์  ์ ๋ฐฉํ์ (?!<pattern>)
# ๋ถ์  ํ๋ฐฉํ์ (?<!pattern>)
```

---

### ๊ธ์ ํ์

```python
s = 'name๊น์ฐฌ์'
a = 'name'
print(re.search('(?<=name)\w+(?=\Z)', s))
#<re.Match object; span=(4, 7), match='๊น์ฐฌ์'>
```

(\w+) ์์ name์ด ์๊ณ  (\w+)๋ค์ \Z๊ฐ ์์ผ๋ฉด(๋์ด ๋๋ฉด) name์ ์ถ๋ ฅ

---

### ํ๋ฐฉํ์

```python
print(re.findall(r'[a-z]+\d+(?!!)\b', 'tube1109! gorio303 ryan416'))
```

๋์๋ฆฌ์ !๊ฐ ์๋ ๊ฒ ์ถ์ถ

---

- ์์๋ฆฌ 3๊ฐ ๋ง๊ณ ๋ ๋ค ๊ฐ๋ฆฌ๊ธฐ

```python
password = 'abcdefg'
print(re.sub('(?<=\w{3})\w+(?=\Z)','***' ,password))
```

- ๋ท์๋ฆฌ 3๊ฐ๋ง ๊ฐ๋ฆฌ๊ธฐ

```python
password = 'abcdefgggggggg'
print(re.sub('\w{3}(?=\Z)','XXX' ,password))
```

## 12. ๋ณ์

> ์ ๊ท์ ์์ ๋ณ์ ๋ฃ๊ธฐ

- ### ์ผ๋ฐ์ ์ธ pattern

```python
a ='abc'
print(re.sub(a+'d', 'X' ,password))
# Xefgggggggg
```

- ### '+๋ณ์+'

```python
a = str(len(password)//2) # str๋ก ๋ณํ
print("a:", type(a)) # strํ์ธ
print(re.sub('\w{'+a+'}(?=\Z)','X'*int(a) ,password))
```

๋ณ์๋ strํ๋ง ๊ฐ๋ฅํ๋ค.

- ### f ์ฌ์ฉ

```python
a = 'name'
print(re.search('(?<=name)\w+(?=\Z)', s))
#<re.Match object; span=(4, 7), match='๊น์ฐฌ์'>
```

์ด ์์ ๋ค์๊ณผ ๊ฐ์ด ์ฌ์ฉํ  ์๋ ์๋ค.

```python
print(re.search(f'(?<={a})\w+(?=\Z)', s))
#<re.Match object; span=(4, 7), match='๊น์ฐฌ์'>
```

๊ดํธ์์ f๋ฅผ ๋ฃ์ด์ค๋ค. ๊ทธ๋ฆฌ๊ณ  ๋ณ์๋ฅผ {}๋ก ๊ฐ์ธ์ค๋ค.

## 13. compile

> ๋งค๋ฒ re.search๋ re.match ๊ฐ์ด re๋ชจ๋๋ก ์ง์  ๊ฐ์ ธ๋ค์ฐ๋ฉด ์ฑ๋ฅ์ด ๋จ์ด์ง๋ค.  
> ์ด๋ฅผ ๊ฐ์ ํ๊ธฐ ์ํด re.compile๋ก ์ปดํ์ผ์ ๋ฏธ๋ฆฌํด๋์ ์๋ค.

```python
re.compile(pattern,flags)
```

- #### ๊ธฐ๋ณธ์ฌ์ฉ์

```python
s = 'Where are the parameter located?'
compile_Obj = re.compile('parameter') # ์ฒซ์ธ์์๋ pattern, ๋๋ฒ์งธ๋ ์ต์(flags)์ด๋ค.
where_Obj = compile_Obj.search(s) # ๋งค๊ฐ๋ณ์์ ๊ฒ์ํ  ๋ฌธ์์ด
print(where_Obj)
# <re.Match object; span=(14, 23), match='parameter'>
```
