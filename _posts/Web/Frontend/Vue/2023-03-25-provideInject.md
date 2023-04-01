---
permalink: /Frontend/Vue/provideInject/
title: "provide와 inject"
toc: true
categories:
  - Frontend🐮Vue
comments: true
sidebar:
  - title: "Frontend🐮"
  - nav: "Frontend-menu"
tags:
  - Javascript
  - Frontend
  - Vue
sexy: 1
main: "Vue"
header:
  teaser: ./assets/images/web/vue.jpeg
  overlay_image: ./assets/images/web/vue.jpeg
---

<span style = "font-size:1.5em;  font-weight: 700;">provide와 inject</span><br>
1단계위인 부모Component가 아닌 고조할아버지Componennt와 고손자Component와의 데이터 통신방법을 알아보자
{: .notice--info}



<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/228710485-f6515641-28b8-409c-b243-577617d3b746.png'>
<figcaption align="center">Footer를 들리지않고 직속으로 DeepChild에게 전달</figcaption>
</figure>
<br>
<br>

# provide
## 기본
**Root.vue**
```js
provide("name", "chanYeong");
```

**DeepChild.vue**
```js
const nameInDeepChild = inject("name");
<h1>{{ nameInDeepChild }}</h1>
```

## 관련유틸은 상위컴포넌트가 제공
자식이 상위데이터를 조종하는것보다는 관련된 기능함수를 부모가 제공해야한다

**Root.vue**
```js
  const age = ref(15);
  const updateAge = () => age.value++;
  const ageUtil ={
    age,
    updateAge,
  }
  provide('age', {age, updateAge});//구조분해로 제공
  //provide('age', ageUtil);
```

**DeepChild.vue**
```js
const obj = inject("age");
obj.updateAge(); //age가 올라간다

...

<h1>
  {{ obj.age }}
</h1>
```


## readonly를 사용하면 변화를 막을수 있음
**Root.vue**
```js
//readonly사용
const count = ref(1);
const countUp = () => count.value = count.value+1;
provide('count', {count: readonly(count), countUp});
```

**DeepChild.vue**
```js
  const countObj = inject("count");
  countObj.countUp();//안먹힘 readonly때문

  ...

  <h1>
    {{ countObj.count }}
  </h1>
```

이외에도 직접 Vue에다가 provide를 사용하여 데이터를 글로벌적으로 사용할수도있다.

참고자료: [Vue3 완벽 마스터: 기초부터 실전까지 - "기본편"](https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EA%B8%B0%EB%B3%B8)

[소스코드 바로확인하기](https://sfc.vuejs.org/#eNqFVM1q20AQfpVFF9tYkfChF/9BaCn01FMOBV0Ue23LWFohyS7FCNzGhZC0kEMFptghKQ24xQfTOCEFP5FWfofO7sqS7IbkINiZ+WZ2vtlvNJQObVsZ9LFUlqpuwzFsD7nY69t1zTJMmzgeGiIHt2TbIQOjiWUw9Caxeh+Qj1oOMVEOknMJ+DUhHnbiiKIKk9UHiGYhFJfJa5Klm1iTZKRJjY5uvcPEamtSocJA7FPV6PIiOp9FsxWKTj5G0zH9ugRjM17SmzWKrpfRj8+bYELPvoV/Tujtip7/hDMKVyN6NacXUxQ+LOnZzSaYR6cTlkLvR/T3PFyOUHQ1DW/vNsEqCtabYAqZ7MYGsVwP6W2MaoxxvvRCdCP8fbupe/iQR/MFVKszpDLQe31cLGZw4D3yjB6qDZkPMVsWp6QCt/3sNHKAysloyMApzi9UVDW8WwBXej+Gdun1NO5dTGgvPb46nWE6y+2jRZ8W0fdfabcN0re8Ld8sXR44shOy3BZ0wZexiiWelbTCQ4wLP5QTueS5XZC3lYGcaK+qCtmB4MDwsGn3gD5YCFWFfOrVWEfgrKoJQpIlIboDU7eVrkss0DCfuhYHXE0qo/gdNAlEyGxN6nie7ZZV1W01mDK7rkKctgonxYHWDBMr2DUPjh3y3gXtdqFK/GA+XJkq+pmNeXw/XmFsv+wYvWayIokn3pKn5pFgYSTpeX8qOxWf22vD6uKGt9es0ADb0DdW2nENCXCyvFnBkONuFgBa3MYhoiSazhcqIEeI8j2cLOhsHS7HOxvIBfJ2txz3pRcKgBJLCWrC3yI4pfO/m8tJojgafKGLh6cH2inVh8P/iPp+VYXIFiEEBDjGhP0ffL68j2N2m9uFZp/J/wcWzxNG)