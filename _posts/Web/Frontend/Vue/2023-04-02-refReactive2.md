---
permalink: /Frontend/Vue/refReactive2/
title: "object의 변수인 경우 ref와 reactive 어느 것을 사용할까"
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

<span style = "font-size:1.5em;  font-weight: 700;">object변수는 ref와 reactive 중 어떤 것으로 선언해야할까</span><br>
각각의 장단점이 있다 확인해보자
{: .notice--info}

다음과 같은 object가 있다고 가정

```js
const data = { id: 1, title: '제목1', content: '내용1', createdAt: '2023-01-01' }
```

**이 data를 ref로 선언하는 경우**
```js
  const form = ref({});
  form.value = { ...data };

{% raw %}
  <template>
    <h2> {{ form.id }}</h2>
    ...
  </template>
{% endraw %}
```

- 장점: 손쉬운 객체 할당(`reactive`에 비해)
- 장점2: reactive는 object만 가능한 반면 ref는 primitive 변수도 사용 가능하여 일관성이 있다.
- 단점: 데이터 조회를 위해선 `form.value.title`과 같이 `.value`를 붙여야한다

**이 data를 reactive로 선언하는 경우**
```js
  const form = reactive({});
  form.title = data.title;
  form.content = data.content; 
  //이런식으로 일일이 복사해준다

{% raw %}
  <template>
    <h2> {{ form.id }}</h2>
    ...
  </template>
{% endraw %}
```
- 장점: `.value`를 붙일 필요가 없다. 즉 `form.title` 이렇게 사용 가능하다.
- 단점: 객체 할당이 불가능하여 하나하나 필드값을 복사해주어야한다

일반적으로는 일관성을 위해 ref를 더 많이 사용한다는 의견..
{: .notice--success}


참고자료: [Vue3 완벽 마스터: 기초부터 실전까지 - "실전편"](https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EC%8B%A4%EC%A0%84/dashboard)
