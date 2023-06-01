---
permalink: /Frontend/Javascript/JSOperator/
title: "Javascript 변수심화"
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
sexy: 1
main: "Javascript"
header:
  teaser: https://markettraders.kr/wp-content/uploads/2021/12/javascript-696x365.jpg
  overlay_image: https://markettraders.kr/wp-content/uploads/2021/12/javascript-696x365.jpg

---
자바스크립트에서 변수의 비교와 변수할당방식


```js
// ``
a = '1' + 2;
console.log(`string : 

'1' + 2 = ${a}
1 + 2 = ${1 + 2}

알아서 \n까지 포함시켜준다.`);



// Equality
const stringFive = '5';
const numberFive = 5;

// type와 상관없이 값이 같은지를 확인
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive); //false

// type와 상관하며 값이 같은지 확인
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object인 경우는 다르다. 
// object는 참조를 한다.
const chan1 = { name: 'chan' };
const chan2 = { name: 'chan' };
const chan3 = chan1;
console.log(chan1 == chan2); //false
console.log(chan1 === chan2); //false
console.log(chan1 == chan3); //true


console.log(0 == false);//true
console.log(0 === false);//false
console.log('' == false);//true
console.log('' === false);//false
console.log(null == undefined);//true
console.log(null === undefined); //false
```