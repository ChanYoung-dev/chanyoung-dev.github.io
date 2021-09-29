---
permalink: /Python/Basic/Class
title: "Python/Basic/Class"
toc: true
categories:
  - Python🧑🏻‍💻Basic
comments: true
sidebar:
  - title: "Python"
  - nav: "python-menu"
---

# 클래스

## 1. 클래스의 필요성

- #### ex)스타크래프트

---

#### 마린

```python
marine_name = "마린" # 이름
marine_hp = 40 # 체력
marine_damage = 5 # 공격력

print("{0} 유닛이 생성되었습니다.".format(marine_name))
print("체력 {0}, 공격력 {1}\n".format(marine_hp, marine_damage))

'''
마린 유닛이 생성되었습니다.
체력 40, 공격력 5
'''
```

#### 탱크

```python
tank_name = "탱크"
tank_hp = 150
tank_damage = 35
'''
탱크 유닛이 생성되었습니다.
체력 150, 공격력 35
'''

print("{} 유닛이 생성되었습니다.".format(tank_name))
print("체력 {0}, 공격력 {1}\n".format(tank_hp, tank_damage))
```

#### 탱크 2

```python
tank2_name = "탱크"
tank2_hp = 150
tank2_damage = 35

print("{} 유닛이 생성되었습니다.".format(tank2_name))
print("체력 {0}, 공격력 {1}\n".format(tank2_hp, tank2_damage))
```

이런 식으로 계속 하다간 너무 오래걸려 객체로 묶는 클래스로 구현하는 방법이 생겼다.

## 2. 클래스

- ### 구조

```python
'''
class 클래스명:
    def 메소드1(self, 전달값1, 전달값2, ...):
        실행명령문1
        실행명령문2
        ...

    def 메소드2(self, 전달값1, 전달값2, ...):
        실행명령문1
        실행명령문2
        ...
'''
```

- ### 위 유닛들을 클래스로 작성

```python
class Unit:
    def __init__(self, name, hp, damage):
        self.name = name #멤버변수
        self.hp = hp #멤버변수
        self.damage = damage #멤버변수
        print("{} 유닛이 생성되었습니다.".format(self.name))
        print("체력 {0}, 공격력 {1}".format(self.hp, self.damage))

marine = Unit("마린", 40, 5)
tank = Unit("탱크", 150, 35)
tank2 = Unit("탱크", 150, 35)
'''
마린 유닛이 생성되었습니다.
체력 40, 공격력 5
탱크 유닛이 생성되었습니다.
체력 150, 공격력 35
탱크 유닛이 생성되었습니다.
체력 150, 공격력 35
'''
```

## 3. **init**

**init**는 생성자와 같다. 사용자가 따로 호출하지 않아도 클래스 객체를 생성할 때 자동적으로 호출된다.  
이 때, 전달값에 해당하는 갯수만큼 넘겨줘야한다.

---

예제) 위 코드를 기반으로 봤을때

```python
marine2= Unit("마린")
# TypeError: __init__() missing 2 required positional arguments: 'hp' and 'damage'
```

위처럼 2개의 인자에 대한 값을 넘기라고 오류가 뜬다.

## 4. 멤버변수

클래스 내에서 정의된 변수, self.와 함께 사용  
클래스 내에서는 self.로 멤버변수 접근  
클래스 외부에서는 객체 이름뒤에 .을 찍고 접근

---

클로킹 기능

```python
wraith = Unit("레이스", 80, 5)
print("유닛 이름 : {0}, 공격력 : {1}".format(wraith.name, wraith.damage))

# 마인드 컨트롤 상대방 유닛을 내 것으로 만듬
wraith2 = Unit("빼앗은 레이스", 80, 5)

# 클로킹 기능 있을경우
wraith2.cloaking = True

# 클로킹 확인
if wraith2.cloaking == True:
    print("{0}은 클로킹 상태입니다.".format(wraith2.name)) #외부에서 호출하기때문에 객체이름뒤에 .으로 호출
```

이와 같이 클래스로부터 객체를 만든 다음 그 객체만을 위한 멤버 변수 정의가 필요한 경우  
클래스 외부에서 별도로 정의할 수 있다.

---

객체만 아닌 그 인스턴스만 가능하다.

| wraith1의 멤버 변수 | wraith2의 멤버변수 |
| ------------------- | ------------------ |
| name                | name               |
| hp                  | hp                 |
| damage              | damage             |
|                     | **_cloaking_**     |

```python
# 내가 만든 레이스 클로킹 확인
#if wraith1.cloaking == True:
#    print("{0}은 클로킹 상태입니다.".format(wraith1.name))
# NameError: name 'wraith1' is not defined 다음과 같은 오류가 뜬다.
'''
# Unit클래스에는 3개의 멤버변수(name, hp, damage)밖에 없기 때문이다.
# wraith2는 클래스 외부에서 직접 cloaking이라는 멤버 변수를 정의했었기때문에
# 모든 Unit객체가 아닌 오직 wraith2에만 해당된다.
'''
```

## 5. 메소드

메소드는 한 클래스에서 여러가지함수를 작성할수 있다.

- ### 구조

```python
Class A:
	def 함수명:
```

---

```python
# 공격형 유닛 클래스 작성
class AttackUnit:
    def __init__(self, name, hp, damage):
        self.name = name
        self.hp = hp
        self.damage = damage
    def attack(self, location): # 공격 함수
        print("{0} : {1}방향으로 적군을 공격합니다 . [ 공격력 {2} ]" \
              .format(self.name, location, self.damage)) # 보기 좋게 두줄로 나눌때 \ 사용
        # location 은 공격 방향이며, 명령을 받을 때마다 달라지고 외부에서 입력받기 때문에 self없이 전달
    def damaged(self, damage): # 데미지를 받았을때
        print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))  # 데미지 정보 출력
        self.hp -= damage  # 유닛의 체력에서 전달받은 damage 만큼 감소
        print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))  # 남은 체력 출력
        if self.hp <= 0:  # 남은 체력이 0 이하이면?
            print("{0} : 파괴되었습니다.".format(self.name))

# 공격형 유닛 클래스 사용

firebat = AttackUnit("파이어뱃", 50, 16)

# 공격형 유닛의 함수 사용
firebat.attack("5시")
# 파이어뱃 : 5시방향으로 적군을 공격합니다. [ 공격력 16 ]

firebat.damaged(25) # 남은 체력 25
firebat.damaged(25) # 남은 체력 0 , 파괴
'''
파이어뱃 : 25 데미지를 입었습니다.
파이어뱃 : 현재 체력은 25 입니다.
파이어뱃 : 25 데미지를 입었습니다.
파이어뱃 : 현재 체력은 0 입니다.
파이어뱃 : 파괴되었습니다.
'''
```

## 6. 상속

공격형 유닛이 아닌 메딕을 만들어보자

---

Unit클래스와 Attack 클래스는 **공통점**이 있다.
hp(체력)과 name(이름)이 있다는 점이다.
모든 유닛의 공통적인 부분일 것이고 이 부분을 Unit 클래스로 정의하면
나중에 다른 클래스(공격형,마법형) 등을 사용할때 상속하여 정의하면 된다.

---

- ### 구조

```python
class 자식클래스(상속받을 부모클래스):
```

---

```python
class Unit:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp

class AttackUnit(Unit): #Unit를 상속받음
    def __init__(self, name, hp, damage):
        Unit.__init__(self, name, hp)
        self.damage = damage
    def attack(self, location):
        print("{0} : {1}방향으로 적군을 공격합니다 . [ 공격력 {2} ]" \
              .format(self.name, location, self.damage)) # 보기 좋게 두줄로 나눌때 \ 사용
        # location 은 공격 방향이며, 명령을 받을 때마다 달라지고 외부에서 입력받기 때문에 self없이 전달
    def damaged(self, damage):
        print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))  # 데미지 정보 출력
        self.hp -= damage  # 유닛의 체력에서 전달받은 damage 만큼 감소
        # self.damage가 아닌이유는 자기의 공격력이 아니라 외부에서 맞은 공격력이기때문이다.
        print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))  # 남은 체력 출력
        if self.hp <= 0:  # 남은 체력이 0 이하이면?
            print("{0} : 파괴되었습니다.".format(self.name))
#파이어뱃 생성
firebat = AttackUnit("파이어뱃", 50, 16)
firebat.attack("5시") # 5시로 공격
# 파이어뱃 : 5시방향으로 적군을 공격합니다 . [ 공격력 16 ]
firebat.damaged(25) # 공격1번받음
#파이어뱃 : 25 데미지를 입었습니다.
#파이어뱃 : 현재 체력은 25 입니다.
```

## 7. 다중상속

공격력 없는 공중유닛 드랍쉽
공격력 있는 공중유닛 레이스
둘의 공통점 : 날 수 있다.
날 수 있는기능 클래스를 만들자
공통적으로 공중은 날라다니기때문에
클래스 함수로는 날라가기가 있다. ex) AttackUnit의 attack느낌

---

- ### 구조

```python
class 자식클래스(부모클래스1, 부모클래스2, ...):
```

![다중상속](./img/다중상속.png "다중상속")

```python
class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print("{0} : {1} 방향으로 날라갑니다. [ 속도 : {2} ] ".format(name, location, self.flying_speed))
        #AttackUnit의 attack 함수내 name은 self.name이다. 하지만 여기선 생성자에서 name이 생성안되어서 그냥 name이다.
```

---

발키리 = 공중 + 공격유닛
다중상속을 사용하자

---

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, damage)
        Flyable.__init__(self, flying_speed)

# 발키리
valkyrie = FlyableAttackUnit("발키리", 200, 6, 5)
valkyrie.fly(valkyrie.name, "5시")
```

## 8. 오버라이딩

앞선 공중유닛에게는 공중속도(fly)가 있었다.
하지만 지상유닛도 지상속도(move)가 있다.

```python
class Unit:
    def __init__(self, name, hp, speed): #speed 추가
        self.name = name
        self.hp = hp
        self.speed = speed
    def move(self, location): # 이동함수
        print(" {0} : {1} 방향으로 이동합니다. [ 속도 : {2} ]"\
              .format(self.name, location, self.speed))
```

---

Unit를 상속받는 클래스에서도 speed를 추가해줘야한다.

```python
class AttackUnit(Unit):
    def __init__(self, name, hp, speed, damage): # speed 추가
        Unit.__init__(self, name, hp, speed) # speed 추가
        self.damage = damage
```

---

공중유닛은 지상속도가 0이기때문에 0을 대입해준다.

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage) # 지상 speed 0
        Flyable.__init__(self, flying_speed)

# 지상유닛, 공중유닛 비교
# 벌쳐와 배틀크루져
# 벌쳐
vulture = AttackUnit("벌쳐", 80, 10, 20)
# 배틀크루져
battlecruiser = FlyableAttackUnit("배틀크루저", 500, 25, 3)

vulture.move("11시")
battlecruiser.fly(battlecruiser.name, "9시")
```

---

하지만 지상유닛의 이동과 공중유닛의 이동은 공중과 지상의 차이일뿐 결국 같은 개념이다.
오버라이딩 개념을 이용!

```python
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)
        Flyable.__init__(self, flying_speed)

    def move(self, location): # Unit 클래스의 move() 메소드를 새롭게 정의 (오버라이딩)
        self.fly(self.name, location)
# 벌쳐
vulture = AttackUnit("벌쳐", 80, 10, 20)
# 배틀크루져
battlecruiser = FlyableAttackUnit("배틀크루저", 500, 25, 3)

vulture.move("11시")
battlecruiser.move("9시")
'''
 벌쳐 : 11시 방향으로 이동합니다. [ 속도 : 10 ]
배틀크루저 : 9시 방향으로 날라갑니다. [ 속도 : 3 ]
'''
```

## ![Overriding](./img/overriding.png "오버라이딩")

- ### 현재까지 전체코드

```python
# 일반 유닛
class Unit:
    def __init__(self, name, hp, speed):
        self.name = name
        self.hp = hp
        self.speed = speed
        print("{0} 유닛이 생성되었습니다.".format(name))

    def move(self, location):
        print("[지상 유닛 이동]")
        print("{0} : {1} 방향으로 이동합니다. [속도 {2}]"\
            .format(self.name, location, self.speed))

# 공격 유닛
class AttackUnit(Unit):
    def __init__(self, name, hp, speed, damage):
        Unit.__init__(self, name, hp, speed)
        self.damage = damage

    def attack(self, location):
        print("{0} : {1} 방향으로 적군을 공격 합니다. [공격력 {2}]" \
            .format(self.name, location, self.damage))

    def damaged(self, damage):
        print("{0} : {1} 데미지를 입었습니다.".format(self.name, damage))
        self.hp -= damage
        print("{0} : 현재 체력은 {1} 입니다.".format(self.name, self.hp))
        if self.hp <= 0:
            print("{0} : 파괴되었습니다.".format(self.name))

# 날 수 있는 기능을 가진 클래스
class Flyable:
    def __init__(self, flying_speed):
        self.flying_speed = flying_speed

    def fly(self, name, location):
        print("{0} : {1} 방향으로 날아갑니다. [속도 {2}]"\
            .format(name, location, self.flying_speed))

# 공중 공격 유닛
class FlyableAttackUnit(AttackUnit, Flyable):
    def __init__(self, name, hp, damage, flying_speed):
        AttackUnit.__init__(self, name, hp, 0, damage)
        Flyable.__init__(self, flying_speed)

    def move(self, location):
        print("[공중 유닛 이동]")
        self.fly(self.name, location)

# 벌쳐 : 지상 유닛, 기동성이 좋음
vulture = AttackUnit("벌쳐", 80, 10, 20) # 지상 speed 10

# 배틀크루저 : 공중 유닛, 체력도 굉장히 좋음, 공격력도 좋음
battlecruiser = FlyableAttackUnit("배틀크루저", 500, 25, 3)

vulture.move("11시")
# battlecruiser.fly(battlecruiser.name, "9시")
battlecruiser.move("9시") # 오버라이딩된 move() 호출

```

## 9. pass

함수를 다 작성하지 않아도 오류가 생기지 않는다.  
미완성하거나 나중에 작성할 것을 pass함수를 사용하면 된다.

---

```python
# 건물 클래스작성

class BuildingUnit(Unit):
    def __init__(self, name, hp, location):
        pass

supply_depot = BuildingUnit("서플라이 디폿", 500, "7시")
# 실행시 오류가 없다.
```

## 10. super

**super는 부모클래스에 접근하는 것**

```python
class BuildingUnit(Unit):
    def __init__(self, name, hp, location):
        super().__init__(name, hp, 0)
        # super().__init__(self, name, hp, 0) self는 제외
        # = Unit.__init__(self, name, hp, 0)
        self.location = location
```

---

Q) 만약 부모클래스가 두개라면?  
A) 제일 먼저 선언된 부모클래스로 한다.

```python
class Unit:
    def __init__(self):
        print("Unit 생성자")

class Flyable:
    def __init__(self):
        print("Flyable 생성자")

class FlyableUnit(Unit, Flyable):
    def __init__(self):
        super().__init__()

dropship = FlyableUnit()
# Unit 생성자
```

super는 제일 먼저 생성된 Unit로 인식하는 것을 확인할 수 있다.

## 11. 클래스 변수

클래스 변수는 클래스 이름과 함께 어디서든지 사용가능.
멤버변수는 각 클래스 객체마다 다른 값을 가진다면
클래스 변수는 모든 객체가 동일한 값을 가진다

- ### 구조

```python
class 클래스명:
    클래스변수 = False
    def __init__(self)
```

- ### 예제

---

##### 시즈모드

```python
class Tank(AttackUnit):
    siege_developed = False # 시즈모드가 개발되었나.
    #클래스변수
    def __init__(self):
        AttackUnit.__init__(self, "탱크", 150, 1, 35)
        self.siege_mode = False # 처음엔 시즈모드 해체상태이다.
    #시즈모드
    def set_siege_mode(self):
        if Tank.siege_developed == False: # 시즈모드개발이 안됐을경우, 메소드 탈출
            return # 클래스변수는 self가아니라 Tank(객체)로 선언해줘야한다.

        if self.siege_mode == True:
            print("{0} : 시즈모드를 해체합니다.".format(self.name))
            self.damage /= 2
            self.siege_mode = False
        else:
            print("{0} : 시즈모드를 시작합니다.".format(self.name))
            self.damage *= 2
            self.siege_mode = True
```

##### 마린

```python
class Marine(AttackUnit):
    def __init__(self):
        AttackUnit.__init__(self, "마린", 40, 1, 5) # 이름, 체력, 이동속도, 공격력

    # 스팀팩 : 일정 시간 동안 이동 및 공격 속도를 증가, 체력 10 감소
    def stimpack(self):
        if self.hp > 10:
            self.hp -= 10
            print("{0} : 스팀팩을 사용합니다. (HP 10 감소)".format(self.name))
        else:
            print("{0} : 체력이 부족하여 스팀팩을 사용하지 않습니다".format(self.name))
```

##### 마린생성

```python
m1 = Marine()
m2 = Marine()
m3 = Marine()
```

##### 탱크생성

```python
t1 = Tank()
t2 = Tank()
```

##### 유닛관리(부대지정) / append사용

```python
attack_units = []
attack_units.append(m1)
attack_units.append(m2)
attack_units.append(m3)
attack_units.append(t1)
attack_units.append(t2)

for unit in attack_units:
    unit.move("1시")
```

![종합](./img/result.png "종합")

## 12. 인스턴스

객체가 특정 인스턴스인지 여부를 확인
각 유닛 객체들이 Marine 클래스의 인스턴스인지 Tank인지 여부 확인

- ### 구조

```python
isinstance(객체, 클래스)
```

---

```python
# 시즈모드 개발
Tank.siege_developed = True # 클래스변수이기때문에 클래스명 사용
print("시즈모드 개발 완료")

for unit in attack_units:
    if isinstance(unit,Marine):
        unit.stimpack()
    elif isinstance(unit, Tank):
        unit.set_siege_mode()
    else:
        print("잘못된 값입니다.")

for unit in attack_units:
    unit.attack("1시")
from random import *
for unit in attack_units:
    unit.damaged(randint(5, 20))
```

## 13. 퀴즈

- ### 문제

---

```python
Quiz) 주어진 코드를 활용하여 부동산 프로그램을 작성하시오.

(출력 예제)
총 3대의 매물이 있습니다.
강남 아파트 매매 10억 2010년
마포 오피스텔 전세 5억 2007년
송파 빌라 월세 500/50 2000년
```

- ### 해답

---

```python
class House:
    # 매물 초기화 : 위치, 건물 종류, 매물 종류, 가격, 준공년도
    def __init__(self, location, house_type, deal_type, price, completion_year):
        self.location = location
        self. house_type = house_type
        self.deal_type = deal_type
        self.price = price
        self.completion_year = completion_year
    # 매물 정보 표시
    def show_detail(self):
        print("{0} {1} {2} {3}억 {4}년"\
              .format(self.location, self.house_type, self.deal_type,\
                      self.price, self.completion_year))
house1 = House("강남", "아파트", "매매", 10, 2010)
house2 = House("마포", "오피스텔", "전세", 5, 2007)
house3 = House("송파", "빌라", "월세", 500, 2000)

houses = []
houses.append(house1)
houses.append(house2)
houses.append(house3)
for house in houses:
    house.show_detail()
```
