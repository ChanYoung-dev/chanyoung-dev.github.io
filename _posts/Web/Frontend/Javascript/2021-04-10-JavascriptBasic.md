---
permalink: /Frontend/Javascript/JSBasic/
title: "Javascript ๋ณ์"
toc: true
categories:
  - Frontend๐ฎJavascript
comments: true
sidebar:
  - title: "Frontend๐ฎ"
  - nav: "Frontend-menu"
tags:
  - Javascript
  - Frontend
sexy: 1
main: "Javascript"
header:
  teaser: https://markettraders.kr/wp-content/uploads/2021/12/javascript-696x365.jpg
  overlay_image: https://markettraders.kr/wp-content/uploads/2021/12/javascript-696x365.jpg
---
์๋ฐ์คํฌ๋ฆฝํธ์์ ๋ณ์๋?


```js
console.log("Hellow")


//mutable data
//let : ES6์์ ์ถ๊ฐ๋์๋ค.
//block scope
// {}์ ์ง์ญ๋ณ์๋ก ์ฌ์ฉํ๋ค๋ ๋ป์ด๋ค.
// {}๋ฐ์์๋ ์ธ์ ์๋ค.
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


// ์ซ์๋ number์ด๋ค.
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

//Symbol ๊ณ ์ ํ id๋ฅผ ์ฃผ๊ณ ์ถ์๋
// ๊ฐ์ ๋ด์ฉ์ string์ด๋ฉด ๊ฐ์ id๋ก ์ธ์
// ์ด๋ด๋ ๊ฐ๋ณํ๋ก ๋ง๋ค๊ณ ์ถ์๋ ์ด๋ค.
const symbol1 = Symbol('hello');
const symbol2 = Symbol('hello');
console.log(symbol1 == symbol2);
//false
const gsymbol1 = Symbol.for('hello');
const gsymbol2 = Symbol.for('hello');
console.log(gsymbol1 == gsymbol2);
//true
```