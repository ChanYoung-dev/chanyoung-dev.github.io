---
permalink: /Web/Frontend/Javascript/JArray/
title: "Javascript 배열"
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
자바스크립트에서 배열


```js
// 1. Declare array

const arr1 = new Array();
const arr2 = [1, 2];

//2. forEach
arr2.forEach((arr) => console.log(arr));
// 1, 2

//3. shift, unshift
//push와 pop과 다르게 앞에서 데이터삽입, 삭제가 이루어진다.
//shift = remove
arr2.shift();
console.log(arr2);
// 2


//unshift = add
arr2.unshift(3);
console.log(arr2);
// 3,2

//4. splice 특정외치에서 삭제
//splice(n,i) n번째 인덱스부터 i개를 삭제하겠다.
//splice(n,i,A,B) n번째 인덱스부터 i개를 삭제하고 그자리에 A와 B를 넣는다.
arr2.splice(1, 1, 5);
console.log(arr2);
// 3,5


//5. concat
const arr3 = [1, 1, 1, 1, 1];
const newArr = arr2.concat(arr3);
console.log(newArr);
//3,5,1,1,1,1,1

//6. Searching

console.log(newArr.indexOf(5)); // 1
// 인덱스1번째위치에 있다.
console.log(newArr.lastIndexOf(1)); //6
// 원소가 어디 마지막에 있는지 검사.
console.log(newArr.includes(0)); // false
//0 은 없다.

```