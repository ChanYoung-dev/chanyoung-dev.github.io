---
permalink: /Web/Frontend/Javascript/JSClass/
title: "Javascript 클래스"
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
자바스크립트-객체지향 개념의 클래스


```js
//1. declare
class Person {
    //생성자
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
// 공통으로 사용하는 것

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
// 원래는 위처럼 했는데 static을 정의해놓으면 오류가 생긴다.

console.log(Article.publisher);
Article.printPublisher();

//위처럼 해야한다.
```