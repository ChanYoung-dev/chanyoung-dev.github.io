---
permalink: /Web/Frontend/Javascript/JSBasic/
title: "Javascript 변수"
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
자바스크립트에서 변수란?


```js
console.log("Hellow")


//mutable data
//let : ES6에서 추가되었다.
//block scope
// {}은 지역변수로 사용한다는 뜻이다.
// {}밖에서는 쓸수 없다.
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
//console.log(name); 
//variable.js:13 Uncaught ReferenceError: glbalName is not defined
console.log(globalName);

//constant Immutable data


// 숫자는 number이다.
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
//value: 17,type: number
console.log(`value: ${size}, type: ${typeof size}`);
//value: 17.1,type: number


const infinity = 1 / 0;
//Infinity
const negativeInfinity = -1 / 0;
//-Infinity
const nAn = 'not a number' / 2;
//NaN
console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
//value: hellobrendan, type: string
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
//value: hi brendan!, type: string
console.log('value' + helloBob + ' type: ' + typeof helloBob);
//valuehi brendan! type: string

//boolean
//false : 0, null, undefined, NaN, ''
//true : any anoter value

//Symbol 고유한 id를 주고싶을때
// 같은 내용의 string이면 같은 id로 인식
// 이럴때 개별화로 만들고싶을때 쓴다.
const symbol1 = Symbol('hello');
const symbol2 = Symbol('hello');
console.log(symbol1 == symbol2);
//false
const gsymbol1 = Symbol.for('hello');
const gsymbol2 = Symbol.for('hello');
console.log(gsymbol1 == gsymbol2);
//true
```