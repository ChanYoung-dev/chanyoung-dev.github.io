---
permalink: /Frontend/Vue/refReactive/
title: "Ref와 Reactive"
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


<span style = "font-size:1.5em;  font-weight: 700;">반응형 데이터</span><br>
반응형 데이터 `ref`와 `reactive`에 대하여
{: .notice--info}

# reactive와 ref
## 1. reactive



```html
<h2>
  객체나 배열과 같은 데이터를 반응형으로 만들려면 `reactive`를 사용해야한다
</h2>
<button v-on:click="increament">Click !! Count: {% raw %} {{ state.count }} {% endraw %}</button>
```
```js
setup(){
  const state = reactive({
			count: 0,
		});
  const increament = () => {
    ++state.count;
  };
}
```

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/224872203-36021b29-14e2-4abf-8611-7d17af666765.png'>
<figcaption align="center">누르면 count가 증가한다</figcaption>
</figure>
<br>
<br>

## 2. reactive - primitive
원시데이터(number, string)의 경우 `reactive`로 감싸면 동작하지않는다  
그이유는 **object type**만 받기때문이다.  
> `reactive <type of Object>`
  
  

```js
let primitiveData = reactive('테스트데이터');
const increamentPrimitiveData = () => {
  primitiveData = primitiveData + '!';
  console.log(primitiveData);
};
```


```html
<h2>원시데이터는 reactive를 사용하면 문제가 생긴다</h2>
<button @click="increamentPrimitiveData">
  primitiveData = {% raw %} {{ primitiveData }} {% endraw %}, 클릭하면 !가 붙는다.
</button>
```

<figure align="center">
<img width="805" alt="image" src='{{site.baseurl}}/assets/images/web/123.gif'>
<figcaption align="center">클릭해도 무반응</figcaption>
</figure>
<br>
<br>

**console**  


```sh
테스트데이터!
테스트데이터!!
테스트데이터!!!
```

## 3. wrapping해서 reactive사용하여 primitive Data 사용
이를 해결하기 위해서는 **Object**형으로 한번더 감아서 선언해야한다.

```js
let primitiveDataByObject = reactive({
  value: '객체로 한번 더 감싼 원시데이터입니다',
});
const increamentPrimitiveDataByObject = () => {
  primitiveDataByObject.value = primitiveDataByObject.value + '!';
};
```

```html
<h2>그래서 객체로 사용해야한다.</h2>
<button @click="increamentPrimitiveDataByObject">
  클릭하면 {% raw %} {{ primitiveDataByObject.value }} {% endraw %}에서 !가 붙습니다.
</button>
```

<figure align="center">
<img width="805" alt="image" src='{{site.baseurl}}/assets/images/web/124.gif'>
<figcaption align="center">클릭해면 !가 붙는다</figcaption>
</figure>
<br>
<br>

## 4. refs
결국 위와 같이 Wrapping을 이용한 `Object`인 `refs`가 나타난다
```js
let refData = ref('refData입니다');
const increamentRefData = () => {
  refData.value = refData.value + '!'; //value를 붙여야함
};
```

```
<h2>
  이것을 간단하게 만든 것이 ref이다. ref의 내부를 보면 결국 ref는
  object인것을 알 수 있다.
</h2>
<button @click="increamentRefData">
  클릭하면 {% raw %} {{ refData }} {% endraw %} 에서 !가 붙습니다. <!-- {% raw %} {{}} {% endraw %} 안에는 value를 안붙어도 알아서 value가 붙은걸로 인식한다.-->
</button>
```

<figure align="center">
<img width="805" alt="image" src='{{site.baseurl}}/assets/images/web/125.gif'>
<figcaption align="center">클릭하면 !가 붙는다</figcaption>
</figure>
<br>
<br>

# ref와 reative 동시사용

## 1. reactive의 object 필드값으로 ref를 사용
`ref` 변수를 `reactive`의 필드값으로 사용하면 `.value`를 붙이지 않아도 된다.
```js
const count = ref(0);
const countState = reactive({
  count, //key value가 서로 같으면 생략가능 = count: count,
});

count.value++;
count.value++;
countState.count++;
//countState.count.value++; error
console.log('ref를 reactive-object에서 사용할땐 value를 붙이지 않는다');
console.log('count.value', count.value);
console.log('countState.count.value', countState.count.value); //undefined가 뜬다
console.log('countState.count', countState.count);
```

**console**

```sh
ref를 reactive-object에서 사용할땐 value를 붙이지 않는다
count.value 3
countState.count.value undefined
countState.count 3
```

결국 `ref`변수가 필드로 사용되건, 일반 변수가 필드로 사용되건 `.value`가 사용하면 안된다.
{: .notice--success}

### cf) ref와 reactive type
```
		console.log('count: ', count);
		console.log('countState:', countState);
```
<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/224896382-2f68cdcf-65ad-474d-8157-7a4bcf04fdf5.png'>
<figcaption align="center">ref와 reactive를 콘솔에 찍었을때</figcaption>
</figure>
<br>
<br>

## 2. reactive의 array 필드값으로 ref를 사용
`Array`의 원소값으로 `ref`를 사용하면 `value`를 사용해야한다
```js
//Array의 원소값으로 ref를 넣을 때
const refData2 = ref('ref content');
const reactiveData2 = reactive([refData2]);
console.log(reactiveData2[0].value);
console.log(reactiveData2[0]); //ref로 반환

//Array의 원소값으로 일반 string을 넣을 때
const reactiveData2_1 = reactive(['hello']);
console.log('reactiveData2_1[0].value', reactiveData2_1[0].value);
console.log('reactiveData2_1[0]', reactiveData2_1[0]); 
```

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/224899554-a8233689-36e1-4e54-8ce0-fe50c102c4af.png'>
<figcaption align="center">ref와 reactive를 콘솔에 찍었을때</figcaption>
</figure>
<br>
<br>

# 반응성

## 1. reactive의 필드값을 다른 곳에서 대입하여 사용하면 반응성을 잃는다

```js
const reactiveData3 = reactive({
  testData: 'hello',
  testData2: 'World',
});
let normalData = reactiveData3.testData; //반응성이 없는 데이터 normalData
const function1 = () => {
  normalData = normalData + '!';
  console.log('normalData', normalData);
  console.log('reactiveData3.testData', reactiveData3.testData);
}
const function2 = () => {
  reactiveData3.testData = reactiveData3.testData + '!';
  console.log('normalData', normalData);
  console.log('reactiveData3.testData', reactiveData3.testData);
}
```

```html
<h2>반응형객체의 필드를 변수명에 대입하여 사용하면 반응형이 먹히지않는다</h2>
<button @click="function1">reactiveData3.testData: {% raw %} {{ reactiveData3.testData }}, normalData: {{ normalData }} {% endraw %}</button>
<button @click="function2">reactiveData3.testData: {% raw %} {{ reactiveData3.testData }}, normalData: {{ normalData }} {% endraw %}</button>
```

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/224901082-761ca13c-3c55-4db1-bff2-39267e424232.png'>
<figcaption align="center">아무것도 클릭안한 처음상태</figcaption>
</figure>
<br>
<br>

*function1 버튼을 4번 클릭시*
```sh
normalData hello!
reactiveData3.testData hello
normalData hello!!
reactiveData3.testData hello
normalData hello!!!
reactiveData3.testData hello
normalData hello!!!
reactiveData3.testData hello
```
`console`에는 정상적으로 `!`가 추가된다

<figure align="center">
<img width="805" alt="image" src='{{site.baseurl}}/assets/images/web/126.gif'>
<figcaption align="center">값이 전부 반응이 없다.</figcaption>
</figure>
<br>
<br>

*function2 버튼을 4번 클릭시*
```sh
normalData hello!!!!
reactiveData3.testData hello!
normalData hello!!!!
reactiveData3.testData hello!!
normalData hello!!!!
reactiveData3.testData hello!!!
```
`console`에는 정상적으로 `!`가 추가된다

<figure align="center">
<img width="805" alt="image" src='{{site.baseurl}}/assets/images/web/127.gif'>
<figcaption align="center">클릭하면 반응성데이터에만 !가 붙는다</figcaption>
</figure>
<br>
<br>

## 2. 반응성 유지:toRef
반응성을 유지하기위해서는 `toRef`를 사용한다

```js
const reactiveData4 = reactive({
  testData: 'hello',
  testData2: 'World',
});
let helloData = toRef(reactiveData4, 'testData'); //toRef를 쓰면 Ref형이된다.
const function3 = () => {
  helloData.value += '!';
  console.log('helloData.value', helloData.value);
  console.log('reactiveData4.testData', reactiveData4.testData);
}
```

```html
<h2>toRef를 사용하여 해결한다</h2>
<button @click="function3"> {% raw %} {{ reactiveData4.testData }} {% endraw %}, {% raw %} {{ helloData }} {% endraw %} </button>
```

<figure align="center">
<img width="805" alt="image" src='{{site.baseurl}}/assets/images/web/128.gif'>
<figcaption align="center">클릭하면 모든 데이터에 !가 붙는다</figcaption>
</figure>
<br>
<br>

# ReadOnly
복제를 해서 사용할 경우
```js
const original = reactive({
  count: 0,
});
const copy = original; //필드값을 전달할때는 반응성을 잃지만 객체그대로 보내면 반응성 유지
const changeOriginal = () =>{
  copy.count++;
}
```

```html
<h2>readOnly 사용안할때</h2>
<button @click="changeOriginal">{% raw %} {{ original }}, {{ copy }} {% endraw %}</button>
```

<figure align="center">
<img width="805" alt="image" src='{{site.baseurl}}/assets/images/web/129.gif'>
<figcaption align="center">클릭하면 모든 데이터가 반응한다</figcaption>
</figure>
<br>
<br>

## readonly

```js
const original = reactive({
  count: 0,
});
const copy2 = readonly(original);
const changeOriginal2 = () =>{
  copy2.count++;
}

````


```html
<h2>readOnly 사용</h2>
<button @click="changeOriginal2">{{ original }}, {{ copy2 }}</button>
```

<figure align="center">
<img width="805" alt="image" src='{{site.baseurl}}/assets/images/web/130.gif'>
<figcaption align="center">클릭하면 데이터에 반응이 없다.</figcaption>
</figure>
<br>
<br>

<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/224905423-d7c0ba67-a03a-4fb6-b8c7-b8abb0391d49.png'>
<figcaption align="center">아래와 같은 경고문이 뜬다</figcaption>
</figure>
<br>
<br>