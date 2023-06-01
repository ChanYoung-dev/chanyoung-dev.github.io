---
permalink: /Frontend/Vue/componentVmodel/
title: "v-model을 통한 3depth 양방향 바인딩"
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


<span style = "font-size:1.5em;  font-weight: 700;">3depth의 양방향 바인딩</span><br>
component의 3개 depth를 갖는다했을 때 처리 방법
{: .notice--info}

[emit, component, v-model 관계]()에 이어쓰는 포스팅

# 3DEPTH COMPONENT 양방향 바인딩
제일 부모 component: **TheView.vue**  
가운데 component: **UserName.vue**  
제일 자식 component: **LabelInput.vue**

## 최상단 부모component
**TheView.vue**

js
```js
const firstname = ref('');
const lastname = ref('');
```

html
```html
{% raw %}
  <template>
  <p>
    Username
  </p>
  <Username v-model:firstnameProps="firstname" v-model:lastname="lastnameProps"></Username>
  {{ firstname }}{{ lastname }}  
  {% endraw %}
</template>
```
- 자식component의 `props.firstnameProps`, `props.lastnameProps`로 전달된다
- 아무것도 지정을 안하는 경우 `modelValue` 이름으로 전달된다.
  ```js
    // 자식 Component에게 props.modelValue로 전달된다.
    // 또한, 자식 Component는 $emit('update:modelValue')로 현재 Componet에게 값을 전달한다.
    <Username v-model="firstname"></Username>
  ```
- 즉 부모 자기자신의 `firstname`과 자식의 `props.firstnameProps`를 이용하여 서로 연결된다
- 이 경우에는 자식Componet가 `$emit('update:firstnameProps')`로 값을 전달한다.

## 그다음 부모 component

**Username.vue**
```js
const props = defineProps({
  firstnameProps: String,
  lastnameProps: String,
});

//html에서 v-model을 사용하므로 아래 코드 추가
const computedFirstname = computed(
  {
    get() {
      return props.firstnameProps;
    },
    set(inputValue) {
      emit('update:firstnameProps', inputValue);
    }
  }
)
  
const emit = defineEmits({
  'update:firstnameProps': null,
  'update:lastnameProps': null,
})

```

```html
  <!-- v-model 사용 -->
  <LabelInput v-model="computedFirstname" label="성"></LabelInput>
  <!-- v-mdoel을 사용안하고 그냥 사용 -->
  <LabelInput :modelValue="lastnameProps" @update:modelValue="value => $emit('update:lastnameProps',value)" label="이름"></LabelInput>
```
[v-model사용 ,component]() 처럼 그냥 `v-model`만 선언해놓고 `computed`를 사용안하면 어떻게 될까?  

```html
<LabelInput v-model="firstnameProps" label="성"></LabelInput>
```
`computed` 안에서의 `set()`을 실행시키지 못하여 결국 `emit('update:firstnameProps')`를 실행못한다.  
즉, 자식Component가 `$emit('ùpdate:modelValue', 'test')`실행하여 `firstnameProps = 'test'`만 실행되고 props값만 갱신된다. 결국 emit를 실행시키지 못하여 부모에게 값을 전달하지못한다.






## 최하위 component
**LabelInput.vue**
```js
const props = defineProps({
  modelValue: String,
});
```

```html
{% raw %}
{{ label }}
{% endraw %}
<input 
        type="text"
  :value="props.modelValue"
  @input="event => $emit('update:modelValue', event.target.value)"
        />
```

# 응용
중간 Component에서 `v-model:name`을 줘보자

## 중간 Component
```js
const computedFirstname = computed(
  {
    get() {
      return props.firstnameProps;
    },
    set(inputValue) {
      emit('update:firstnameProps', inputValue);
    }
  }
)

<LabelInput v-model:seong="computedFirstname" label="성 입력하시오"></LabelInput>
<LabelInput :modelValue="lastnameProps" @update:modelValue="value => $emit('update:lastnameProps',value)" label="이름 입력하시오"></LabelInput>
```
자기자신의 `computedFirstname`의 변수와 자식component의 `seong` 변수를 통하여 연결하겠다라는 뜻.  

## 자식 component
``html
{% raw %}
<template>
  <label>
    {{ label }}
    <p>이름 입력:</p>
  	<input 
           type="text"
      :value="props.modelValue"
      @input="event => $emit('update:modelValue', event.target.value)"
           />
    <!-- 이부분은 "
    <LabelInput :modelValue="lastnameProps" @update:modelValue="value => $emit('update:lastnameProps',value)" label="이름 입력하시오"></LabelInput>"
    한테 영향을 끼침 -->

    <p>
      성 입력:
    </p>
    <input 
           type="text"
      :value="props.seong"
      @input="event => $emit('update:seong', event.target.value)"
           />
    <!-- 이부분은 
   <LabelInput v-model:seong="computedFirstname" label="성 입력하시오"></LabelInput>
    한테 영향을 끼침 -->
    
    
    
  </label>
</template>
{% endraw %}
```
`v-model`을 사용하려면 여기서도 `computed`를 사용하면 된다

```js
const props = defineProps({
  modelValue: String,
  seong: String,
});

const emit = defineEmits({
  'update:modelValue': null,
  'update:seong':null,
})
  
```



참고자료: [Vue3 완벽 마스터: 기초부터 실전까지 - "기본편"](https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EA%B8%B0%EB%B3%B8)

[소스코드 바로확인하기](https://sfc.vuejs.org/#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)