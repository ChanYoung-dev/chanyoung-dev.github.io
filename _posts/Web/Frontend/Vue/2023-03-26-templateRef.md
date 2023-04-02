---
permalink: /Frontend/Vue/templateRef/
title: "Template ref"
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

<span style = "font-size:1.5em;  font-weight: 700;">template ref</span><br>
태그 같은 DOM element요소를 ref를 이용하여 접근하자 
{: .notice--info}





# templateRef
## 기본
```js
<script setup>
  const inputRef = ref(null);
  console.log('setup이후의 ref:', inputRef.value);//null
  onMounted(()=>{
    inputRef.value.value = 'hello ref'
    console.log('마운트이후의 ref:', inputRef.value);
</script>

{% raw %}
<template>
  <div>
    <input ref="inputRef" type="text" />
    <p>
      {{ inputRef }}
    </p>
    <!--mounted가 되어야만 출력가능하기때문에 에러
    <p>
      {{ inputRef.value }}
    </p>
    -->
    <p v-if="inputRef">
      {{ inputRef.value }}
    </p>
    <p>
      {{ inputRef === $refs.inputRef }} 
    </p>
      
  </div>
</template>
{% endraw %}
```
<figure align="center" class="half">
<img width="402" alt="image" src='https://user-images.githubusercontent.com/46098949/229329630-15a3d996-8c85-4951-b68a-383febab84cc.png'>
<img width="402" alt="image" src='https://user-images.githubusercontent.com/46098949/229329701-39b6ebf3-717b-4594-adde-55c7c6b36784.png'>
<figcaption align="center"></figcaption>
</figure>
<br>
<br>

## for을 통한 ref

```js
<script setup>
  import { ref, onMounted } from 'vue'
  const arrayRefs = ref([]);
  const fruits = ref(['사과', '딸기', '포도']);
  onMounted(()=>{
    arrayRefs.value.forEach(item => console.log('item1: ', item.textContent));
    
    arrayRefs.value.forEach(item => console.log('item: ', item));
  })
</script>

{% raw %}
<template>
  <div>
    <ul>
      <li
          v-for="fruit in fruits"
          :key="fruit"
          ref="arrayRefs">변수이용: {{ fruit }}</li>
    </ul>
    <ul>
      <li
          v-for="fruit in fruits"
          :key="fruit"
          ref="element => arrayRefs.push(element.textContent)">함수 이용: {{ fruit }}</li>
    </ul>
  </div>
</template>
{% endraw %}
```

<figure align="center" class="half">
<img width="402" alt="image" src='https://user-images.githubusercontent.com/46098949/229330254-5b3a8e3d-8c79-4c79-b0a3-5eb88a6b84f8.png'>
<img width="402" alt="image" src='https://user-images.githubusercontent.com/46098949/229330273-63ffbf23-8226-47b3-99a5-8f1750590fb7.png'>
<figcaption align="center"></figcaption>
</figure>
<br>
<br>

## 자식, 부모Component에서의 ref

권장하지않음(`props`를 사용하자.)
{: .notice--warning}

**자식Component**
```js
<template>
  <div>
    {{ $parent }} <!--부모접근가능-->
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  const message = ref('Hello Im Child');
  const say = () =>{
    console.log(message.value);
  }
</script>
```



**부모Component**
```js
<script setup>
  import { ref, onMounted } from 'vue'
    import TemplateChildRefs from './TemplateChildRefs.vue'
  const child = ref(null);
  onMounted(()=>{
    console.log('child.message', child.value.message);
    child.value.say();
  })
</script>

<template>
  <TemplateChildRefs ref="child"></TemplateChildRefs>
</template>

```


참고자료: [Vue3 완벽 마스터: 기초부터 실전까지 - "기본편"](https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EA%B8%B0%EB%B3%B8)

[소스코드 바로확인하기](https://sfc.vuejs.org/#eNq1VU9L3EAU/yrTICQLJkOva3ZBpNAeeim9NT2k66wbm39kJtsuy4IUDyKCHrrtYivtRWxhD4JS9uAnMtnv0DfJZDbRqBVrQJl5/+b33vu9t0NlNQyNfkyUpmLSTuSEDFHC4rBt+Y4XBhFDQxSR7jIK/JdB7DOyjkaoGwUeUsFLlVaviRe6NiOvSJcKvYHLQv4ImCN0xWE1iuxBrZfU3OS61nPc9VpXqZGulm/iPD/IDC5MWMINIbMMtG1WcFcNJKaS1UJWMV2gg/q1LKXD75ZScpQW4GhiiUhZVvJEdc8OjU0a+NCcYZaEUFBLaaJMwmWQIr9bSo+xkDYxpt0Oz3uTGkG0geFkRNA5xyMGoZ7+Lgo+UBJBYEvhIUaWP4Inr/aqhhCyAXdQgsN6QKs6gU8ZcvwwZiBHLf6Y5seu21gp1IFLDDfY0NQMWnp0Pv+2nR5NuGVTXZa+Rt92Y9JYwZi7L2JnrbgWWKajaY1WW5S3Gir/D55qj7huwAOIfCuokpOd9PB8vju7E5no4fUQGUTDI5TaGwQc83sOQkgLb4zLSmoPtFwzatxO+nWnnx3gmMESPC0gWgpig5CAhJGPDG64sM65wL/hcNGnERApU+NCbz7RdS8v6eXpFkoOJumX83R8kZzsofTP9+TnMYiT3eP5eHI5O03Ge8l0ln49QPCX/Jje9pjow/UndV2CRH3dqeZzr0g3ZNlqtdASFIoapcRFAwtnExel/S/LoHYfPmg88ymw5ebNJ+HN28WAMfCIHSZVavppenl2AURUk88z6BY/zfenyf62Ktxqx0e+IdjZDaJndqenOZAgarWrnOfCp03ExwROBqfdWgARfdaoTsq9o8qgItA9RiN2JQ9M1ymO/Ovr8C70MqsUMESULN+qxdd8TwaFTVWTE0GmAmRIzrbSnQnsjPTwN+z3YR4Q+GVi1ynwYAnosaERl3hQe17QRcHDmPY0oal0CPDPx78AP/rHBIopqSd75WeBk/2mBsErS6EdcaD5ENfEzTr8wGkRS1cMhPo82/8vPJQBVcuTAxsYrLQGFE5MQZmPIk75BwBgSzIqo79pdFdt)