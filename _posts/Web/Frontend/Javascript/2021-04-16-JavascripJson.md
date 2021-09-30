---
permalink: /Web/Frontend/Javascript/JSJson/
title: "Json"
toc: true
categories:
  - Web🐮Frontend
comments: true
sidebar:
  - title: "Web🐮"
  - nav: "Web-menu"
tags:
  - Javascript

---
자바스크립트에서 Xml을 대체하는 데이터 포맷


```js
// 1. Object to Json(string)
//stringfy(obj)

// obj가 boolean일경우
let json = JSON.stringify(true);
console.log(json);
//true

// obj가 obj일경우

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);
//{"name":"tori","color":"white","size":null,"birthDate":"2021-08-31T02:50:41.780Z"}
// 함수는 출력되지않는다.
// 모든 언어에서 공통적으로 쓰이는것이기때문에 자바스크립트에서 쓰이는 symbol같은 것도 되지않는다.

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);
//{"name":"tori","color":"white"}

//callback함수
//콜백함수

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);
/*
key: , value: [object Object]
key: name, value: tori
key: color, value: white
size, value: null
key: birthDate, value: 2021-08-31T03:08:21.021Z
 key: jump, value: () => {
        console.log(`${this.name} can jump!`);
    }
{"name":"tori","color":"white","size":null,"birthDate":"2021-08-31T03:08:21.021Z"}
*/
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'chan' : value;
});
console.log(json);
/*
key: , value: [object Object]
key: name, value: tori
key: color, value: white
size, value: null
key: birthDate, value: 2021-08-31T03:08:21.021Z
 key: jump, value: () => {
        console.log(`${this.name} can jump!`);
    }
{"name":"chan","color":"white","size":null,"birthDate":"2021-08-31T03:08:21.021Z"}
*/


//2.JSON to Object

//parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
//{name: "tori", color: "white", size: null, birthDate: "2021-08-31T03:14:01.163Z"}

rabbit.jump();
//can jump!
//obj.jump();
// json.js:78 Uncaught TypeError: obj.jump is not a function
// rabbit(obj)가 json(string)으로 변환될때 jump(함수)는 포함되지않았기때문이다.

console.log(rabbit.birthDate.getDate());
//31
//console.log(obj.birthDate.getDate());
//Uncaught TypeError: obj.birthDate.getDate is not a function
// rabbit(obj)의 birthDate는 date형식이지만
// json(string)으로 변환되면서 string형식이 된다.
// 이 string형식을 obj화 시켜도(obj) 원래 데이터를 string으로 인식하기때문에
// string obj로 인식한다.

```