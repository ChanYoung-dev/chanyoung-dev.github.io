---
permalink: /Python/Basic/Class/
title: "Class"
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
excerpt: ํ์ด์ฌ ํด๋์ค์ ๊ดํด
---

# ํด๋์ค

## 1. ํด๋์ค์ ํ์์ฑ

- #### ex)์คํํฌ๋ํํธ

---

#### ๋ง๋ฆฐ

```python
marine_name = "๋ง๋ฆฐ" # ์ด๋ฆ
marine_hp = 40 # ์ฒด๋ ฅ
marine_damage = 5 # ๊ณต๊ฒฉ๋ ฅ

print("{0} ์ ๋์ด ์์ฑ๋์์ต๋๋ค.".format(marine_name))
print("์ฒด๋ ฅ {0}, ๊ณต๊ฒฉ๋ ฅ {1}\n".format(marine_hp, marine_damage))

'''
๋ง๋ฆฐ ์ ๋์ด ์์ฑ๋์์ต๋๋ค.
์ฒด๋ ฅ 40, ๊ณต๊ฒฉ๋ ฅ 5
'''
```

#### ํฑํฌ

```python
tank_name = "ํฑํฌ"
tank_hp = 150
tank_damage = 35
'''
ํฑํฌ ์ ๋์ด ์์ฑ๋์์ต๋๋ค.
์ฒด๋ ฅ 150, ๊ณต๊ฒฉ๋ ฅ 35
'''

print("{} ์ ๋์ด ์์ฑ๋์์ต๋๋ค.".format(tank_name))
print("์ฒด๋ ฅ {0}, ๊ณต๊ฒฉ๋ ฅ {1}\n".format(tank_hp, tank_damage))
```

#### ํฑํฌ 2

```python
tank2_name = "ํฑํฌ"
tank2_hp = 150
tank2_damage = 35

print("{} ์ ๋์ด ์์ฑ๋์์ต๋๋ค.".format(tank2_name))
print("์ฒด๋ ฅ {0}, ๊ณต๊ฒฉ๋ ฅ {1}\n".format(tank2_hp, tank2_damage))
```

์ด๋ฐ ์์ผ๋ก ๊ณ์ ํ๋ค๊ฐ ๋๋ฌด ์ค๋๊ฑธ๋ ค ๊ฐ์ฒด๋ก ๋ฌถ๋ ํด๋์ค๋ก ๊ตฌํํ๋ ๋ฐฉ๋ฒ์ด ์๊ฒผ๋ค.

## 2. ํด๋์ค

- ### ๊ตฌ์กฐ

```python
'''
class ํด๋์ค๋ช:
    def ๋ฉ์๋1(self, ์ ๋ฌ๊ฐ1, ์ ๋ฌ๊ฐ2, ...):
        ์คํ๋ช๋ น๋ฌธ1
        ์คํ๋ช๋ น๋ฌธ2
        ...

    def ๋ฉ์๋2(self, ์ ๋ฌ๊ฐ1, ์ ๋ฌ๊ฐ2, ...):
        ์คํ๋ช๋ น๋ฌธ1
        ์คํ๋ช๋ น๋ฌธ2
        ...
'''
```

- ### ์ ์ ๋๋ค์ ํด๋์ค๋ก ์์ฑ

```python
class Unit:
    def __init__(self, name, hp, damage):
        self.name = name #๋ฉค๋ฒ๋ณ์
        self.hp = hp #๋ฉค๋ฒ๋ณ์
        self.damage = damage #๋ฉค๋ฒ๋ณ์
        print("{} ์ ๋์ด ์์ฑ๋์์ต๋๋ค.".format(self.name))
        print("์ฒด๋ ฅ {0}, ๊ณต๊ฒฉ๋ ฅ {1}".format(self.hp, self.damage))

marine = Unit("๋ง๋ฆฐ", 40, 5)
tank = Unit("ํฑํฌ", 150, 35)
tank2 = Unit("ํฑํฌ", 150, 35)
'''
๋ง๋ฆฐ ์ ๋์ด ์์ฑ๋์์ต๋๋ค.
์ฒด๋ ฅ 40, ๊ณต๊ฒฉ๋ ฅ 5
ํฑํฌ ์ ๋์ด ์์ฑ๋์์ต๋๋ค.
์ฒด๋ ฅ 150, ๊ณต๊ฒฉ๋ ฅ 35
ํฑํฌ ์ ๋์ด ์์ฑ๋์์ต๋๋ค.
์ฒด๋ ฅ 150, ๊ณต๊ฒฉ๋ ฅ 35
'''
```

## 3. **init**

**init**๋ ์์ฑ์์ ๊ฐ๋ค. ์ฌ์ฉ์๊ฐ ๋ฐ๋ก ํธ์ถํ์ง ์์๋ ํด๋์ค ๊ฐ์ฒด๋ฅผ ์์ฑํ  ๋ ์๋์ ์ผ๋ก ํธ์ถ๋๋ค.  
์ด ๋, ์ ๋ฌ๊ฐ์ ํด๋นํ๋ ๊ฐฏ์๋งํผ ๋๊ฒจ์ค์ผํ๋ค.

---

์์ ) ์ ์ฝ๋๋ฅผ ๊ธฐ๋ฐ์ผ๋ก ๋ดค์๋

```python
marine2= Unit("๋ง๋ฆฐ")
# TypeError: __init__() missing 2 required positional arguments: 'hp' and 'damage'
```

์์ฒ๋ผ 2๊ฐ์ ์ธ์์ ๋ํ ๊ฐ์ ๋๊ธฐ๋ผ๊ณ  ์ค๋ฅ๊ฐ ๋ฌ๋ค.

## 4. ๋ฉค๋ฒ๋ณ์

ํด๋์ค ๋ด์์ ์ ์๋ ๋ณ์, self.์ ํจ๊ป ์ฌ์ฉ  
ํด๋์ค ๋ด์์๋ self.๋ก ๋ฉค๋ฒ๋ณ์ ์ ๊ทผ  
ํด๋์ค ์ธ๋ถ์์๋ ๊ฐ์ฒด ์ด๋ฆ๋ค์ .์ ์ฐ๊ณ  ์ ๊ทผ

---

ํด๋กํน ๊ธฐ๋ฅ

```python
wraith = Unit("๋ ์ด์ค", 80, 5)
print("์ ๋ ์ด๋ฆ : {0}, ๊ณต๊ฒฉ๋ ฅ : {1}".format(wraith.name, wraith.damage))

# ๋ง์ธ๋ ์ปจํธ๋กค ์๋๋ฐฉ ์ ๋์ ๋ด ๊ฒ์ผ๋ก ๋ง๋ฌ
wraith2 = Unit("๋นผ์์ ๋ ์ด์ค", 80, 5)

# ํด๋กํน ๊ธฐ๋ฅ ์์๊ฒฝ์ฐ
wraith2.cloaking = True

# ํด๋กํน ํ์ธ
if wraith2.cloaking == True:
    print("{0}์ ํด๋กํน ์ํ์๋๋ค.".format(wraith2.name)) #์ธ๋ถ์์ ํธ์ถํ๊ธฐ๋๋ฌธ์ ๊ฐ์ฒด์ด๋ฆ๋ค์ .์ผ๋ก ํธ์ถ
```

์ด์ ๊ฐ์ด ํด๋์ค๋ก๋ถํฐ ๊ฐ์ฒด๋ฅผ ๋ง๋  ๋ค์ ๊ทธ ๊ฐ์ฒด๋ง์ ์ํ ๋ฉค๋ฒ ๋ณ์ ์ ์๊ฐ ํ์ํ ๊ฒฝ์ฐ  
ํด๋์ค ์ธ๋ถ์์ ๋ณ๋๋ก ์ ์ํ  ์ ์๋ค.

---

๊ฐ์ฒด๋ง ์๋ ๊ทธ ์ธ์คํด์ค๋ง ๊ฐ๋ฅํ๋ค.

| wraith1์ ๋ฉค๋ฒ ๋ณ์ | wraith2์ ๋ฉค๋ฒ๋ณ์ |
| ------------------- | ------------------ |
| name                | name               |
| hp                  | hp                 |
| damage              | damage             |
|                     | **_cloaking_**     |

```python
# ๋ด๊ฐ ๋ง๋  ๋ ์ด์ค ํด๋กํน ํ์ธ
#if wraith1.cloaking == True:
#    print("{0}์ ํด๋กํน ์ํ์๋๋ค.".format(wraith1.name))
# NameError: name 'wraith1' is not defined ๋ค์๊ณผ ๊ฐ์ ์ค๋ฅ๊ฐ ๋ฌ๋ค.
'''
# Unitํด๋์ค์๋ 3๊ฐ์ ๋ฉค๋ฒ๋ณ์(name, hp, damage)๋ฐ์ ์๊ธฐ ๋๋ฌธ์ด๋ค.
# wraith2๋ ํด๋์ค ์ธ๋ถ์์ ์ง์  cloaking์ด๋ผ๋ ๋ฉค๋ฒ ๋ณ์๋ฅผ ์ ์ํ์๊ธฐ๋๋ฌธ์
# ๋ชจ๋  Unit๊ฐ์ฒด๊ฐ ์๋ ์ค์ง wraith2์๋ง ํด๋น๋๋ค.
'''
```

## 5. ๋ฉ์๋

๋ฉ์๋๋ ํ ํด๋์ค์์ ์ฌ๋ฌ๊ฐ์งํจ์๋ฅผ ์์ฑํ ์ ์๋ค.

- ### ๊ตฌ์กฐ

```python
Class A:
	def ํจ์๋ช:
```

---

```python
# ๊ณต๊ฒฉํ ์ ๋ ํด๋์ค ์์ฑ
class AttackUnit:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage
    def attack(self, location): # ๊ณต๊ฒฉ ํจ์
        print("{0} : {1}๋ฐฉํฅ์ผ๋ก ์ ๊ตฐ์ ๊ณต๊ฒฉํฉ๋๋ค . [ ๊ณต๊ฒฉ๋ ฅ {2} ]" \
              .format(self.name, location, self.damage)) # ๋ณด๊ธฐ ์ข๊ฒ ๋์ค๋ก ๋๋๋ \ ์ฌ์ฉ
        # location ์ ๊ณต๊ฒฉ ๋ฐฉํฅ์ด๋ฉฐ, ๋ช๋ น์ ๋ฐ์ ๋๋ง๋ค ๋ฌ๋ผ์ง๊ณ  ์ธ๋ถ์์ ์๋ ฅ๋ฐ๊ธฐ ๋๋ฌธ์ self์์ด ์ ๋ฌ
    def damaged(self, damage): # ๋ฐ๋ฏธ์ง๋ฅผ ๋ฐ์์๋
        print("{0} : {1} ๋ฐ๋ฏธ์ง๋ฅผ ์์์ต๋๋ค.".format(self.name, damage))  # ๋ฐ๋ฏธ์ง ์ ๋ณด ์ถ๋ ฅ
        self.hp -= damage  # ์ ๋์ ์ฒด๋ ฅ์์ ์ ๋ฌ๋ฐ์ damage ๋งํผ ๊ฐ์
        print("{0} : ํ์ฌ ์ฒด๋ ฅ์ {1} ์๋๋ค.".format(self.name, self.hp))  # ๋จ์ ์ฒด๋ ฅ ์ถ๋ ฅ
        if self.hp <= 0:  # ๋จ์ ์ฒด๋ ฅ์ด 0 ์ดํ์ด๋ฉด?
            print("{0} : ํ๊ดด๋์์ต๋๋ค.".format(self.name))

# ๊ณต๊ฒฉํ ์ ๋ ํด๋์ค ์ฌ์ฉ

firebat = AttackUnit("ํ์ด์ด๋ฑ", 50, 16)

# ๊ณต๊ฒฉํ ์ ๋์ ํจ์ ์ฌ์ฉ
firebat.attack("5์")
# ํ์ด์ด๋ฑ : 5์๋ฐฉํฅ์ผ๋ก ์ ๊ตฐ์ ๊ณต๊ฒฉํฉ๋๋ค. [ ๊ณต๊ฒฉ๋ ฅ 16 ]

firebat.damaged(25) # ๋จ์ ์ฒด๋ ฅ 25
firebat.damaged(25) # ๋จ์ ์ฒด๋ ฅ 0 , ํ๊ดด
'''
ํ์ด์ด๋ฑ : 25 ๋ฐ๋ฏธ์ง๋ฅผ ์์์ต๋๋ค.
ํ์ด์ด๋ฑ : ํ์ฌ ์ฒด๋ ฅ์ 25 ์๋๋ค.
ํ์ด์ด๋ฑ : 25 ๋ฐ๋ฏธ์ง๋ฅผ ์์์ต๋๋ค.
ํ์ด์ด๋ฑ : ํ์ฌ ์ฒด๋ ฅ์ 0 ์๋๋ค.
ํ์ด์ด๋ฑ : ํ๊ดด๋์์ต๋๋ค.
'''
```

## 6. ์์

๊ณต๊ฒฉํ ์ ๋์ด ์๋ ๋ฉ๋์ ๋ง๋ค์ด๋ณด์

---

Unitํด๋์ค์ Attack ํด๋์ค๋ **๊ณตํต์ **์ด ์๋ค.
hp(์ฒด๋ ฅ)๊ณผ name(์ด๋ฆ)์ด ์๋ค๋ ์ ์ด๋ค.
๋ชจ๋  ์ ๋์ ๊ณตํต์ ์ธ ๋ถ๋ถ์ผ ๊ฒ์ด๊ณ  ์ด ๋ถ๋ถ์ Unit ํด๋์ค๋ก ์ ์ํ๋ฉด
๋์ค์ ๋ค๋ฅธ ํด๋์ค(๊ณต๊ฒฉํ,๋ง๋ฒํ) ๋ฑ์ ์ฌ์ฉํ ๋ ์์ํ์ฌ ์ ์ํ๋ฉด ๋๋ค.

---

- ### ๊ตฌ์กฐ

```python
class ์์ํด๋์ค(์์๋ฐ์ ๋ถ๋ชจํด๋์ค):
```

---

```python
class Unit:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

class AttackUnit(Unit): #Unit๋ฅผ ์์๋ฐ์
    def __init__(self, name, hp, damage):
        Unit.__init__(self, name, hp)
        self.damage = damage
    def attack(self, location):
        print("{0} : {1}๋ฐฉํฅ์ผ๋ก ์ ๊ตฐ์ ๊ณต๊ฒฉํฉ๋๋ค . [ ๊ณต๊ฒฉ๋ ฅ {2} ]" \
              .format(self.name, location, self.damage)) # ๋ณด๊ธฐ ์ข๊ฒ ๋์ค๋ก ๋๋๋ \ ์ฌ์ฉ
        # location ์ ๊ณต๊ฒฉ ๋ฐฉํฅ์ด๋ฉฐ, ๋ช๋ น์ ๋ฐ์ ๋๋ง๋ค ๋ฌ๋ผ์ง๊ณ  ์ธ๋ถ์์ ์๋ ฅ๋ฐ๊ธฐ ๋๋ฌธ์ self์์ด ์ ๋ฌ
    def damaged(self, damage):
        print("{0} : {1} ๋ฐ๋ฏธ์ง๋ฅผ ์์์ต๋๋ค.".format(self.name, damage))  # ๋ฐ๋ฏธ์ง ์ ๋ณด ์ถ๋ ฅ
        self.hp -= damage  # ์ ๋์ ์ฒด๋ ฅ์์ ์ ๋ฌ๋ฐ์ damage ๋งํผ ๊ฐ์
        # self.damage๊ฐ ์๋์ด์ ๋ ์๊ธฐ์ ๊ณต๊ฒฉ๋ ฅ์ด ์๋๋ผ ์ธ๋ถ์์ ๋ง์ ๊ณต๊ฒฉ๋ ฅ์ด๊ธฐ๋๋ฌธ์ด๋ค.
        print("{0} : ํ์ฌ ์ฒด๋ ฅ์ {1} ์๋๋ค.".format(self.name, self.hp))  # ๋จ์ ์ฒด๋ ฅ ์ถ๋ ฅ
        if self.hp <= 0:  # ๋จ์ ์ฒด๋ ฅ์ด 0 ์ดํ์ด๋ฉด?
            print("{0} : ํ๊ดด๋์์ต๋๋ค.".format(self.name))
#ํ์ด์ด๋ฑ ์์ฑ
firebat = AttackUnit("ํ์ด์ด๋ฑ", 50, 16)
firebat.attack("5์") # 5์๋ก ๊ณต๊ฒฉ
# ํ์ด์ด๋ฑ : 5์๋ฐฉํฅ์ผ๋ก ์ ๊ตฐ์ ๊ณต๊ฒฉํฉ๋๋ค . [ ๊ณต๊ฒฉ๋ ฅ 16 ]
firebat.damaged(25) # ๊ณต๊ฒฉ1๋ฒ๋ฐ์
#ํ์ด์ด๋ฑ : 25 ๋ฐ๋ฏธ์ง๋ฅผ ์์์ต๋๋ค.
#ํ์ด์ด๋ฑ : ํ์ฌ ์ฒด๋ ฅ์ 25 ์๋๋ค.
```

## 7. ๋ค์ค์์

๊ณต๊ฒฉ๋ ฅ ์๋ ๊ณต์ค์ ๋ ๋๋์ฝ
๊ณต๊ฒฉ๋ ฅ ์๋ ๊ณต์ค์ ๋ ๋ ์ด์ค
๋์ ๊ณตํต์  : ๋  ์ ์๋ค.
๋  ์ ์๋๊ธฐ๋ฅ ํด๋์ค๋ฅผ ๋ง๋ค์
๊ณตํต์ ์ผ๋ก ๊ณต์ค์ ๋ ๋ผ๋ค๋๊ธฐ๋๋ฌธ์
ํด๋์ค ํจ์๋ก๋ ๋ ๋ผ๊ฐ๊ธฐ๊ฐ ์๋ค. ex) AttackUnit์ attack๋๋

---

- ### ๊ตฌ์กฐ

```python
class ์์ํด๋์ค(๋ถ๋ชจํด๋์ค1, ๋ถ๋ชจํด๋์ค2, ...):
```

![๋ค์ค์์]({{site.baseurl}}/assets/images/python/๋ค์ค์์.png "๋ค์ค์์")

```python
class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print("{0} : {1} ๋ฐฉํฅ์ผ๋ก ๋ ๋ผ๊ฐ๋๋ค. [ ์๋ : {2} ] ".format(name, location, self.flying_speed))
        #AttackUnit์ attack ํจ์๋ด name์ self.name์ด๋ค. ํ์ง๋ง ์ฌ๊ธฐ์  ์์ฑ์์์ name์ด ์์ฑ์๋์ด์ ๊ทธ๋ฅ name์ด๋ค.
```

---

๋ฐํค๋ฆฌ = ๊ณต์ค + ๊ณต๊ฒฉ์ ๋
๋ค์ค์์์ ์ฌ์ฉํ์

---

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, damage)
        Flyable.__init__(self, flying_speed)

# ๋ฐํค๋ฆฌ
valkyrie = FlyableAttackUnit("๋ฐํค๋ฆฌ", 200, 6, 5)
valkyrie.fly(valkyrie.name, "5์")
```

## 8. ์ค๋ฒ๋ผ์ด๋ฉ

์์  ๊ณต์ค์ ๋์๊ฒ๋ ๊ณต์ค์๋(fly)๊ฐ ์์๋ค.
ํ์ง๋ง ์ง์์ ๋๋ ์ง์์๋(move)๊ฐ ์๋ค.

```python
class Unit:
    def __init__(self, name, hp, speed): #speed ์ถ๊ฐ
        self.name = name
        self.hp = hp
        self.speed = speed
    def move(self, location): # ์ด๋ํจ์
        print(" {0} : {1} ๋ฐฉํฅ์ผ๋ก ์ด๋ํฉ๋๋ค. [ ์๋ : {2} ]"\
              .format(self.name, location, self.speed))
```

---

Unit๋ฅผ ์์๋ฐ๋ ํด๋์ค์์๋ speed๋ฅผ ์ถ๊ฐํด์ค์ผํ๋ค.

```python
class AttackUnit(Unit):
    def __init__(self, name, hp, speed, damage): # speed ์ถ๊ฐ
        Unit.__init__(self, name, hp, speed) # speed ์ถ๊ฐ
        self.damage = damage
```

---

๊ณต์ค์ ๋์ ์ง์์๋๊ฐ 0์ด๊ธฐ๋๋ฌธ์ 0์ ๋์ํด์ค๋ค.

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage) # ์ง์ speed 0
        Flyable.__init__(self, flying_speed)

# ์ง์์ ๋, ๊ณต์ค์ ๋ ๋น๊ต
# ๋ฒ์ณ์ ๋ฐฐํํฌ๋ฃจ์ ธ
# ๋ฒ์ณ
vulture = AttackUnit("๋ฒ์ณ", 80, 10, 20)
# ๋ฐฐํํฌ๋ฃจ์ ธ
battlecruiser = FlyableAttackUnit("๋ฐฐํํฌ๋ฃจ์ ", 500, 25, 3)

vulture.move("11์")
battlecruiser.fly(battlecruiser.name, "9์")
```

---

ํ์ง๋ง ์ง์์ ๋์ ์ด๋๊ณผ ๊ณต์ค์ ๋์ ์ด๋์ ๊ณต์ค๊ณผ ์ง์์ ์ฐจ์ด์ผ๋ฟ ๊ฒฐ๊ตญ ๊ฐ์ ๊ฐ๋์ด๋ค.
์ค๋ฒ๋ผ์ด๋ฉ ๊ฐ๋์ ์ด์ฉ!

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)
        Flyable.__init__(self, flying_speed)

    def move(self, location): # Unit ํด๋์ค์ move() ๋ฉ์๋๋ฅผ ์๋กญ๊ฒ ์ ์ (์ค๋ฒ๋ผ์ด๋ฉ)
        self.fly(self.name, location)
# ๋ฒ์ณ
vulture = AttackUnit("๋ฒ์ณ", 80, 10, 20)
# ๋ฐฐํํฌ๋ฃจ์ ธ
battlecruiser = FlyableAttackUnit("๋ฐฐํํฌ๋ฃจ์ ", 500, 25, 3)

vulture.move("11์")
battlecruiser.move("9์")
'''
 ๋ฒ์ณ : 11์ ๋ฐฉํฅ์ผ๋ก ์ด๋ํฉ๋๋ค. [ ์๋ : 10 ]
๋ฐฐํํฌ๋ฃจ์  : 9์ ๋ฐฉํฅ์ผ๋ก ๋ ๋ผ๊ฐ๋๋ค. [ ์๋ : 3 ]
'''
```

## ![Overriding]({{site.baseurl}}/assets/images/python/overriding.png "์ค๋ฒ๋ผ์ด๋ฉ")

- ### ํ์ฌ๊น์ง ์ ์ฒด์ฝ๋

```python
# ์ผ๋ฐ ์ ๋
class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed
        print("{0} ์ ๋์ด ์์ฑ๋์์ต๋๋ค.".format(name))

    def move(self, location):
        print("[์ง์ ์ ๋ ์ด๋]")
        print("{0} : {1} ๋ฐฉํฅ์ผ๋ก ์ด๋ํฉ๋๋ค. [์๋ {2}]"\
            .format(self.name, location, self.speed))

# ๊ณต๊ฒฉ ์ ๋
class AttackUnit(Unit):
    def __init__(self, name, hp, speed, damage):
        Unit.__init__(self, name, hp, speed)
        self.damage = damage

    def attack(self, location):
        print("{0} : {1} ๋ฐฉํฅ์ผ๋ก ์ ๊ตฐ์ ๊ณต๊ฒฉ ํฉ๋๋ค. [๊ณต๊ฒฉ๋ ฅ {2}]" \
            .format(self.name, location, self.damage))

    def damaged(self, damage):
        print("{0} : {1} ๋ฐ๋ฏธ์ง๋ฅผ ์์์ต๋๋ค.".format(self.name, damage))
        self.hp -= damage
        print("{0} : ํ์ฌ ์ฒด๋ ฅ์ {1} ์๋๋ค.".format(self.name, self.hp))
        if self.hp <= 0:
            print("{0} : ํ๊ดด๋์์ต๋๋ค.".format(self.name))

# ๋  ์ ์๋ ๊ธฐ๋ฅ์ ๊ฐ์ง ํด๋์ค
class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print("{0} : {1} ๋ฐฉํฅ์ผ๋ก ๋ ์๊ฐ๋๋ค. [์๋ {2}]"\
            .format(name, location, self.flying_speed))

# ๊ณต์ค ๊ณต๊ฒฉ ์ ๋
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)
        Flyable.__init__(self, flying_speed)

    def move(self, location):
        print("[๊ณต์ค ์ ๋ ์ด๋]")
        self.fly(self.name, location)

# ๋ฒ์ณ : ์ง์ ์ ๋, ๊ธฐ๋์ฑ์ด ์ข์
vulture = AttackUnit("๋ฒ์ณ", 80, 10, 20) # ์ง์ speed 10

# ๋ฐฐํํฌ๋ฃจ์  : ๊ณต์ค ์ ๋, ์ฒด๋ ฅ๋ ๊ต์ฅํ ์ข์, ๊ณต๊ฒฉ๋ ฅ๋ ์ข์
battlecruiser = FlyableAttackUnit("๋ฐฐํํฌ๋ฃจ์ ", 500, 25, 3)

vulture.move("11์")
# battlecruiser.fly(battlecruiser.name, "9์")
battlecruiser.move("9์") # ์ค๋ฒ๋ผ์ด๋ฉ๋ move() ํธ์ถ

```

## 9. pass

ํจ์๋ฅผ ๋ค ์์ฑํ์ง ์์๋ ์ค๋ฅ๊ฐ ์๊ธฐ์ง ์๋๋ค.  
๋ฏธ์์ฑํ๊ฑฐ๋ ๋์ค์ ์์ฑํ  ๊ฒ์ passํจ์๋ฅผ ์ฌ์ฉํ๋ฉด ๋๋ค.

---

```python
# ๊ฑด๋ฌผ ํด๋์ค์์ฑ

class BuildingUnit(Unit):
    def __init__(self, name, hp, location):
        pass

supply_depot = BuildingUnit("์ํ๋ผ์ด ๋ํฟ", 500, "7์")
# ์คํ์ ์ค๋ฅ๊ฐ ์๋ค.
```

## 10. super

**super๋ ๋ถ๋ชจํด๋์ค์ ์ ๊ทผํ๋ ๊ฒ**

```python
class BuildingUnit(Unit):
    def __init__(self, name, hp, location):
        super().__init__(name, hp, 0)
        # super().__init__(self, name, hp, 0) self๋ ์ ์ธ
        # = Unit.__init__(self, name, hp, 0)
        self.location = location
```

---

Q) ๋ง์ฝ ๋ถ๋ชจํด๋์ค๊ฐ ๋๊ฐ๋ผ๋ฉด?  
A) ์ ์ผ ๋จผ์  ์ ์ธ๋ ๋ถ๋ชจํด๋์ค๋ก ํ๋ค.

```python
class Unit:
    def __init__(self):
        print("Unit ์์ฑ์")

class Flyable:
    def __init__(self):
        print("Flyable ์์ฑ์")

class FlyableUnit(Unit, Flyable):
    def __init__(self):
        super().__init__()

dropship = FlyableUnit()
# Unit ์์ฑ์
```

super๋ ์ ์ผ ๋จผ์  ์์ฑ๋ Unit๋ก ์ธ์ํ๋ ๊ฒ์ ํ์ธํ  ์ ์๋ค.

## 11. ํด๋์ค ๋ณ์

ํด๋์ค ๋ณ์๋ ํด๋์ค ์ด๋ฆ๊ณผ ํจ๊ป ์ด๋์๋ ์ง ์ฌ์ฉ๊ฐ๋ฅ.
๋ฉค๋ฒ๋ณ์๋ ๊ฐ ํด๋์ค ๊ฐ์ฒด๋ง๋ค ๋ค๋ฅธ ๊ฐ์ ๊ฐ์ง๋ค๋ฉด
ํด๋์ค ๋ณ์๋ ๋ชจ๋  ๊ฐ์ฒด๊ฐ ๋์ผํ ๊ฐ์ ๊ฐ์ง๋ค

- ### ๊ตฌ์กฐ

```python
class ํด๋์ค๋ช:
    ํด๋์ค๋ณ์ = False
    def __init__(self)
```

- ### ์์ 

---

##### ์์ฆ๋ชจ๋

```python
class Tank(AttackUnit):
    siege_developed = False # ์์ฆ๋ชจ๋๊ฐ ๊ฐ๋ฐ๋์๋.
    #ํด๋์ค๋ณ์
    def __init__(self):
        AttackUnit.__init__(self, "ํฑํฌ", 150, 1, 35)
        self.siege_mode = False # ์ฒ์์ ์์ฆ๋ชจ๋ ํด์ฒด์ํ์ด๋ค.
    #์์ฆ๋ชจ๋
    def set_siege_mode(self):
        if Tank.siege_developed == False: # ์์ฆ๋ชจ๋๊ฐ๋ฐ์ด ์๋์๊ฒฝ์ฐ, ๋ฉ์๋ ํ์ถ
            return # ํด๋์ค๋ณ์๋ self๊ฐ์๋๋ผ Tank(๊ฐ์ฒด)๋ก ์ ์ธํด์ค์ผํ๋ค.

        if self.siege_mode == True:
            print("{0} : ์์ฆ๋ชจ๋๋ฅผ ํด์ฒดํฉ๋๋ค.".format(self.name))
            self.damage /= 2
            self.siege_mode = False
        else:
            print("{0} : ์์ฆ๋ชจ๋๋ฅผ ์์ํฉ๋๋ค.".format(self.name))
            self.damage *= 2
            self.siege_mode = True
```

##### ๋ง๋ฆฐ

```python
class Marine(AttackUnit):
    def __init__(self):
        AttackUnit.__init__(self, "๋ง๋ฆฐ", 40, 1, 5) # ์ด๋ฆ, ์ฒด๋ ฅ, ์ด๋์๋, ๊ณต๊ฒฉ๋ ฅ

    # ์คํํฉ : ์ผ์  ์๊ฐ ๋์ ์ด๋ ๋ฐ ๊ณต๊ฒฉ ์๋๋ฅผ ์ฆ๊ฐ, ์ฒด๋ ฅ 10 ๊ฐ์
    def stimpack(self):
        if self.hp > 10:
            self.hp -= 10
            print("{0} : ์คํํฉ์ ์ฌ์ฉํฉ๋๋ค. (HP 10 ๊ฐ์)".format(self.name))
        else:
            print("{0} : ์ฒด๋ ฅ์ด ๋ถ์กฑํ์ฌ ์คํํฉ์ ์ฌ์ฉํ์ง ์์ต๋๋ค".format(self.name))
```

##### ๋ง๋ฆฐ์์ฑ

```python
m1 = Marine()
m2 = Marine()
m3 = Marine()
```

##### ํฑํฌ์์ฑ

```python
t1 = Tank()
t2 = Tank()
```

##### ์ ๋๊ด๋ฆฌ(๋ถ๋์ง์ ) / append์ฌ์ฉ

```python
attack_units = []
attack_units.append(m1)
attack_units.append(m2)
attack_units.append(m3)
attack_units.append(t1)
attack_units.append(t2)

for unit in attack_units:
    unit.move("1์")
```

![์ขํฉ]({{site.baseurl}}/assets/images/python/result.png "์ขํฉ")

## 12. ์ธ์คํด์ค

๊ฐ์ฒด๊ฐ ํน์  ์ธ์คํด์ค์ธ์ง ์ฌ๋ถ๋ฅผ ํ์ธ
๊ฐ ์ ๋ ๊ฐ์ฒด๋ค์ด Marine ํด๋์ค์ ์ธ์คํด์ค์ธ์ง Tank์ธ์ง ์ฌ๋ถ ํ์ธ

- ### ๊ตฌ์กฐ

```python
isinstance(๊ฐ์ฒด, ํด๋์ค)
```

---

```python
# ์์ฆ๋ชจ๋ ๊ฐ๋ฐ
Tank.siege_developed = True # ํด๋์ค๋ณ์์ด๊ธฐ๋๋ฌธ์ ํด๋์ค๋ช ์ฌ์ฉ
print("์์ฆ๋ชจ๋ ๊ฐ๋ฐ ์๋ฃ")

for unit in attack_units:
    if isinstance(unit,Marine):
        unit.stimpack()
    elif isinstance(unit, Tank):
        unit.set_siege_mode()
    else:
        print("์๋ชป๋ ๊ฐ์๋๋ค.")

for unit in attack_units:
    unit.attack("1์")
from random import *
for unit in attack_units:
    unit.damaged(randint(5, 20))
```

## 13. ํด์ฆ

- ### ๋ฌธ์ 

---

```python
Quiz) ์ฃผ์ด์ง ์ฝ๋๋ฅผ ํ์ฉํ์ฌ ๋ถ๋์ฐ ํ๋ก๊ทธ๋จ์ ์์ฑํ์์ค.

(์ถ๋ ฅ ์์ )
์ด 3๋์ ๋งค๋ฌผ์ด ์์ต๋๋ค.
๊ฐ๋จ ์ํํธ ๋งค๋งค 10์ต 2010๋
๋งํฌ ์คํผ์คํ ์ ์ธ 5์ต 2007๋
์กํ ๋น๋ผ ์์ธ 500/50 2000๋
```

- ### ํด๋ต

---

```python
class House:
    # ๋งค๋ฌผ ์ด๊ธฐํ : ์์น, ๊ฑด๋ฌผ ์ข๋ฅ, ๋งค๋ฌผ ์ข๋ฅ, ๊ฐ๊ฒฉ, ์ค๊ณต๋๋
    def __init__(self, location, house_type, deal_type, price, completion_year):
        self.location = location
        self. house_type = house_type
        self.deal_type = deal_type
        self.price = price
        self.completion_year = completion_year
    # ๋งค๋ฌผ ์ ๋ณด ํ์
    def show_detail(self):
        print("{0} {1} {2} {3}์ต {4}๋"\
              .format(self.location, self.house_type, self.deal_type,\
                      self.price, self.completion_year))
house1 = House("๊ฐ๋จ", "์ํํธ", "๋งค๋งค", 10, 2010)
house2 = House("๋งํฌ", "์คํผ์คํ", "์ ์ธ", 5, 2007)
house3 = House("์กํ", "๋น๋ผ", "์์ธ", 500, 2000)

houses = []
houses.append(house1)
houses.append(house2)
houses.append(house3)
for house in houses:
    house.show_detail()
```
