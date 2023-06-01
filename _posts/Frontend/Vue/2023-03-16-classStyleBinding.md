---
permalink: /Frontend/Vue/classStyleBinding/
title: "classStyleBinding"
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


<span style = "font-size:1.5em;  font-weight: 700;">classStyleBinding</span><br>
v-bind를 이용한 class binding을 알아보고, ref와 Array,reactive,computed의 관계를 알아보자
{: .notice--info}

# class binding
```js
{% raw %}
<script setup>
import { ref, reactive,computed } from 'vue'

const count = ref(0);
const countState = reactive({
  counts: count, 
});

let tag = ref(true);

const computedObject = computed(
() => {
  return {
    testClass: tag.value
  }
}
)

const classObject = reactive({
  active: tag, //.value = no
  'text-danger': false
})



const activeClass = ref('activeClass')
const arrayObject = reactive([activeClass])


const countUp = () =>{
  console.log('count:', countState.counts);
  return countState.counts++;
}
const changeRef = () =>  {
  tag.value = !(tag.value);
  console.log('tag:', tag.value);
}
const chageObject = () =>  {
  classObject.active = !(classObject.active);
  console.log('classObject.active', classObject.active);
}
const chageArray = () =>  {
  arrayObject[0].value = arrayObject[0].value + 's';
  console.log('arrayObject[0].value', arrayObject[0].value);
}
const chageComputed = () =>  {
  computedObject.testClass = !(computedObject.testClass)
  console.log('computedObject.testClass', computedObject.testClass);
}

</script>

<template>
  <button @click="countUp">
    countUp: {{ countState.counts }}
  </button>
  <br>
  
  <button @click="changeRef">
    ref is true ? {{ tag }}
  </button>
  <br>
  
  <button @click="changeObject">
    object ? {{ classObject.active }}
  </button>
  <br>
  
  <button @click="chageArray">
    array ? {{ arrayObject[0].value }}
  </button>
  <br>
  
  <button @click="chageComputed">
    computed ? {{ computedObject.testClass }}
  </button>
  <br>
  
  
  
  <div class="A" :class="computedObject">
    A Box
  </div>
  <div class="B" :class="{ testClass2: tag }">
    B Box
  </div>
  <div class="C" :class="classObject">
    C Box
  </div>
  <div class="D" :class="[activeClass]">
    D Box
  </div>
  <div class="E" :class="computedObject">
    E Box
  </div>
</template>
{% endraw %}
```


# ref와 객체의 조합


## ref + reactive
```js
let tag = ref(true);
const classObject = reactive({
  active: tag, //.value = no
  'text-danger': false
})
const chageObject = () =>  {
  classObject.active = !(classObject.active);
  console.log('classObject.active', classObject.active);
}
```
- ref + reactive => `.value` 붙일 필요가 없다


## ref + computed
```js
let tag = ref(true);
const computedObject = computed(
() => {
  return {
    testClass: tag.value
  }
}
)

const chageComputed = () =>  {
  computedObject.testClass = !(computedObject.testClass)
  console.log('computedObject.testClass', computedObject.testClass);
}

```
- ref + computed => `.value` 붙여야함
- 대신 computed에서 값을 변경하여도 ref는 반응이 없다. 즉, 단방향이다


## ref + Array
```js
const activeClass = ref('activeClass')
const arrayObject = reactive([activeClass])

const chageArray = () =>  {
  arrayObject[0].value = arrayObject[0].value + 's';
  console.log('arrayObject[0].value', arrayObject[0].value);
}
```
- reactive객체 안에서는 `.value`를 붙이지않고, reactive객체를 사용할 땐 `.value`를 붙인다

[소스코드 바로확인하기](https://sfc.vuejs.org/#__SSR__eNqdlcFy2yAQhl9ly0XORJYyPapOWsfJuTPt5BRyUGTsKJVAA8hNx+N37wISQZZSd3yxBbt8/7Isy54smybZtYxkZKEKWTYaFNNtc0N5WTdCatiDZJsYf/JClzsWF6JuWs3WcICNFDVEuDqinPJCcKWhEC3XcG0Wza4uvgymf+pcM2tzrNmecnAmlbn/GCg/mGWUV0yDzrcdS8uWufke6ML4/vzKCiPYT8won13A9Q1YuMTNSO6+ATRTelXlCtWQnOzyqmXGckBRyi8CunHy6GG87tsSYkhTR0EvLow10uxNz9c53zIZZbDJK4USB8t+5zuGDaXbXxRMRejd+UmZ/xnH8Rg4P3XoIM8PDTrbJHQJ5kpULKnEdhZZhyyKgxNJ3AmY7PqEjayXl2jGJHUyL2aDP9imFwKXYp9VnP808yOHHsSBNhPFwCXEb5nfdigQHEzikmCVxtMTkmMnk4bJlcNIluYUjgIJTubx6slvenL6EiIVjeOZ8sWIpqbHMa36a3iUn8G1SHzBuyx9YMQKGlXJtKetmw8gLkTKF6lrJNhCcKBZ3VRYRjgCWDy3WgsO34qqLH5dU9KVKyXW3PWChyaD/X5cgnBAPkJSR+mI0v5P0/sq9Xy8aVAqMM0EvhoR02DOw7r9e7Jw1WqhE0V6hkZXd17B1oUTmKyysyT6MgpOoKsrt5OPyumEmBddlzuXDhRcUgJZPxiSvfwSbsWbQ+NSxw0ZtyEDj68P6LPtx9jIe9DtCdBqEMz7gXnA6gTgLgQMGrJH3J1A3P9HQu6PGYvUXykSE/dIz+u8SV6V4PiM2zZAO4OiBO+SI1GCL7UZU/KidaOyNFWbwjz+ryoRcpviVyLxopU1S5iq589S/FZMIpiSOGCkOLljci4ZXzPJ5L+YR64jbv/6ksNfbxDqzg==)  <br>

참고자료: [Vue3 완벽 마스터: 기초부터 실전까지 - "기본편"](https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EA%B8%B0%EB%B3%B8)