---
permalink: /Frontend/Vue/eventParameter/
title: "event Parameter"
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
  teaser: https://markettraders.kr/wp-content/uploads/2021/12/javascript-696x365.jpg
  overlay_image: https://markettraders.kr/wp-content/uploads/2021/12/javascript-696x365.jpg
---


<span style = "font-size:1.5em;  font-weight: 700;">$event 파라미터</span><br>
v-on을 통해서 실행할 함수를 연결할수있는데, 함수에 event Parameter에 대해 알아보자
{: .notice--info}

# 함수 인자가 없을 경우 event
```js
const printEventInfo = (event) => {
    console.log('event.target', event.target);
    console.log('event.target.tagName', event.target.tagName);
  }
```

```html
<button @click="printEventInfo">
  $event를 명시하지않는 버튼
</button>
```

`button`태그에 따로 함수인자를 선언안하면 기본적으로 첫번째 변수는 event로 인식한다.

# 함수 인자를 명시적으로 가지고 올 경우
```js
const printEventInfoUsingEvent = (message, event) => {
  console.log('message', message);
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
}
```

```html
<button @click="printEventInfoUsingEvent('Hello Vue3', $event)">
  $event를 사용한 버튼
</button>
```

참고자료: [Vue3 완벽 마스터: 기초부터 실전까지 - "기본편"](https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EA%B8%B0%EB%B3%B8)


[소스코드 바로확인하기](https://sfc.vuejs.org/#eNq1U01Lw0AQ/SvDIqQFTRBvNS16EPTiTU97iXEaU7Mf7G7qIQRE9FKvFkR6FVE8ee4/avof3HzULyz14inzdt/OvJk3yciulO4wRdIhvg5VLA1oNKnsUR4zKZSBDBT2IYe+EgwcS3UopxwgFFwbkCrmZm+I3BzwvoAutLAEbej2ICtpNVEk6CYiajnVrWsCFaFx1uErbG+v4NtPdBgw/PFucVy/z5dpO9IxjypUqmSodRBhk2mp3IZmKzbRSpH/1ZTv1fZYYywwyGQSGLQIwD/b7GUZMB1BnvueRdXpaTysAhuepMYIDjthEofnXUq+T4aShgewVmmYPU5h9nJT3E7m4/vi6bIYj2ajO5i9Xc9H0yalV+f8W4XP2becfUwSAccpbtmW63rtXxUUV6/Fw/N8PFle2PfqJn3vYyBkndSLu8EC6Q604Ha1K2tpc6Ep6SzMpsQudIkpOTNG6o7n6X5Y/hAD7QoVeTZyVcpNzNBFzTZOlLjQqGxiShpncpK/A/jRLJQ=)