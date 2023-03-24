---
permalink: /Frontend/Javascript/JSJson/
title: "Scope와 Closure"
toc: true
categories:
  - Frontend🐮Javascript
comments: true
sidebar:
  - title: "Frontend🐮"
  - nav: "Frontend-menu"
tags:
  - Javascript
  - Frontend
  - block scope
  - closure
sexy: 1
main: "Javascript"
header:
  teaser: https://markettraders.kr/wp-content/uploads/2021/12/javascript-696x365.jpg
  overlay_image: https://markettraders.kr/wp-content/uploads/2021/12/javascript-696x365.jpg
---

<span style = "font-size:1.5em;  font-weight: 700;">Scope와 Closure</span><br>
scope는 function Scope와 block Scope가 있다. 여기서 `var`, `function(){...}`는 function Scope이고, let과 const는 block Scope이다<br>
block은 `{`와 `}`가 포함되어 있으면 무조건 block scope이다. 그렇기때문에 function Scope는 block Scope에 포함된다.
{: .notice--info}

# function Scope

- function Scope로는 `var` 가 있다.
- **function**을 기준으로 영역을 나눈다는 뜻

```js
var a = 'a';
{
    var b = 'b'
}
console.log(a, b);  
```
에러 없음  
<br>
<br>  

```js
var a = 'a';
{
    var b = 'b'
    console.log(a, b);
}
```
에러 없음  
  
  
---

```js
var a = 'a';

function bFunction(){
    var c = 'c';
    console.log(a, b, c);
}

function aFunction(){
    var b = 'b';
    bFunction();
    
}
aFunction();

```
- `b is not defined` -> function Scope 적용됨
- 변수는 **선언된 함수 위치**에 따라 인식 범위가 다르다
- 현재 `bFunction()`은 글로벌에서 선언이 되었기때문에 `bFunction()`내에서 b변수가 없는 것을 확인하고 상위 영역(`aFunction`X)인 `Global(ex.var)`과 `Script(ex.let, const)`영역만 인지한다
- 
```js
var a = 'a' //Global
let b = 'b' //Script 
function aFunction(){ //Local
  var c = 'c' 
}
```
  
  
  
---


```js
var a = 'a';

function aFunction(){
    var b = 'b';
    function bFunction(){
      var c = 'c';
      console.log(a, b, c);
    }

    bFunction();
    
}
aFunction();
```
- 오류 X
- `bFunction()` 내에 b변수가 없음 -> `bFunction()`가 선언된 위치, 즉 자기 함수가 선언된 영역(`aFunction()`)에서 b변수를 찾음
- 만약 `aFunction()`에도 없으면 `Global(ex.var)`과 `Script(ex.let, const)`을 찾아본다

# block Scope

`let`과 `const`는 block Scope영역을 취급한다. block Scope = `{}`를 기준으로 나눈다는 뜻

```js
let a = 'a';
{
    let b = 'b'
}
console.log(a, b);
```
- b is not defined  
  
  
---

```js
let a = 'a';
{
    let b = 'b'
    console.log(a, b);
}
```
- 오류 X  
  
  
  
---  

```js
let a = 'a';

function bFunction(){
    let c = 'c';
    console.log(a, b, c);
}

function aFunction(){
    let b = 'b';
    bFunction();
    
}
aFunction();
```
- b is not defined  
  
  
---

```js
var a = 'a';

function aFunction(){
    var b = 'b';
    function bFunction(){
      var c = 'c';
      console.log(a, b, c);
    }

    bFunction();
    
}
aFunction();
```
- 오류 없음  

# 참고 - 중복호출
```js
var a = 'a';
var a = 'b';
```
- 가능

```js
let a = 'a';
let a = 'b';
```
- 불가능  
  
  
    
      


## 중복 호출 방지

변수가 선언되었는지 확인하기
```js
if(name === 'undefined'){
  var name = 'chan';
}

```