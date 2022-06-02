---
permalink: /Web/Frontend/Javascript/JSObject/
title: "Javascript 객체"
toc: true
categories:
  - Web🐮Frontend
comments: true
sidebar:
  - title: "Web🐮"
  - nav: "Web-menu"
tags:
  - Javascript
  - Frontend

---
자바스크립트-객체지향 개념의 객체(object)


```js

// 1. Literals and properties
const name = 'chan';
const age = 4;
printA(name, age);
function printA(name, age) {
    console.log(name);
    console.log(age);
}

// 하지만 주소, 가족관계,  학교출신 등등 여러가지 요소가 추가되면 매번 불편해진다.

//이를 해결하기 위해 object를 사용한다.

function printB(person) {
    console.log(person.name);
    console.log(person.age);
}
//object = { key:value }
const user1 = { name: 'chan', age: 4 }
printB(user1);


const obj1 = {}; //'object literal'
const obj2 = new Object(); //'object constructor'
// 두개는 같은 출력이다.


//object추가
user1.hasJob = true;
console.log(user1.hasJob);

//object삭제
delete user1.hasJob;
console.log(user1.hasJob);

// 2. COmputed properties
console.log(user1.name);
console.log(user1['name']);
// 같은 출력이다.
// 대신 ''가 들어가야한다.

user1['hasJob'] = true;
console.log(user1.hasJob);

// 3. Property value shorthand
const person1 = { name: 'minsoo', age: 2 };
const person2 = { name: 'chan', age: 3 };
const person3 = { name: 'jin', age: 4 };
const person4 = makePerson('hyun', 30);
console.log(person4);
function makePerson(name, age) {
    return {
        name,
        age,
    };
}


// 4. Constructor function 
const person5 = Person('mom', 45);
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당하는 키가 object에 있는지
console.log('name' in person1);

// 6. for..in / for..of
for (whatkey in person1) {
    console.log(whatkey);
}
/*
for (whatvalue of person1) {
    console.log(whatvalue);
}
iterable이 아니기때문에 오류
*/
const array = [1, 2, 3, 4]
for (whatvalue of array) {
    console.log(whatvalue);
}

// 6. assign
const userA = { name: 'chan', age: '20' };
const userB = {};
Object.assign(userB, userA);
console.log(userB);
//{name: "chan", age: "20"}
```