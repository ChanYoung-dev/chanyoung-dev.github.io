---
permalink: /Frontend/Javascript/JSClass/
title: "Javascript ํด๋์ค"
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
์๋ฐ์คํฌ๋ฆฝํธ-๊ฐ์ฒด์งํฅ ๊ฐ๋์ ํด๋์ค


```js
//1. declare
class Person {
    //์์ฑ์
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
const chan = new Person('chan', 20);
chan.speak();

//2. Getter & Setter
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('chan', -1);
console.log(user1.age) // 0


// 3. Static
// ๊ณตํต์ผ๋ก ์ฌ์ฉํ๋ ๊ฒ

class Article {
    static publisher = 'chan';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}


const article1 = new Article(1);
//console.log(article1.publisher);
//article1.printPublisher();
// ์๋๋ ์์ฒ๋ผ ํ๋๋ฐ static์ ์ ์ํด๋์ผ๋ฉด ์ค๋ฅ๊ฐ ์๊ธด๋ค.

console.log(Article.publisher);
Article.printPublisher();

//์์ฒ๋ผ ํด์ผํ๋ค.
```