---
permalink: /Frontend/Vue/githubWithVue/
title: "github pages에서 vue router 404 에러"
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

배경1. vue 프로젝트를 github pages를 통해 myurl.com에 배포를 했다
배경2. vue router를 사용하여 myurl.com/posts 페이지가 있다  
배경3. vue router의 history모드는 `createWebHistory`를 사용한다
<br>
<br>
myurl.com에서 myurl.com/posts로 이동하는 기능은 정상적으로 동작한다. 만약 여기서 이동한 상태에서 새로고침을 하거나, 주소창에 직접 myurl.com/posts를 사용한다면?<br>
동작하지않는다!!!!!ㅜㅜ 물론 localhost에서 돌렸을 경우에는 정상적으로 동작한다.
{: .notice--success}

이유는 history의 모드가 `createWebHistory`이기 때문이다  

# history 모드
## webHistory
`createWebHistory`를 사용하여 /posts를 접속하게되면


<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/231499964-37b59bbf-1f14-4478-b33d-c4d7aa82d876.png'>
<figcaption align="center">/posts에 접속한 경우</figcaption>
</figure>
<br>
Request URL을 보면 /posts로 되어있고 이는 즉, 서버에게 `/posts`의 자원을 달라고 요청한 것인데 서버는 `/posts`를 `/posts/index.html`을 인식하고 이를 찾으려하지만 없기때문에 404 에러가 나타난다.  
<br>
<br>

반대로 history를 hash모드로 하는 경우에는 다르다.(`createWebHashHistory`)

## webHashHistory
`/posts`로 요청할 경우 url은 `/#/posts`로 바뀐다. 그리고.. 
<figure align="center">
<img width="805" alt="image" src='https://user-images.githubusercontent.com/46098949/231499964-37b59bbf-1f14-4478-b33d-c4d7aa82d876.png'>
<figcaption align="center">/posts에 접속한 경우</figcaption>
</figure>
<br>
<br>
위 이미지를 보면 Request URL에서 끝에 아무것도 붙지않고 `/`로 되어있는 것을 확인할 수 있다. 이는 서버에게 `/index.html` 를 요청한 것이다.  
우리는 `npm build`를 통해 vue프로젝트를 github에 올리거나 git action을 통해 `npm build`자동화를 통해 정적파일을 만들어 배포한다.  
이 때 만들어지는 정적파일은 `/dist`폴더이며 이 안에는 `index.html`이 포함되어있다. 서버는 `/`를 `dist`기준으로 생각하고 `dist/index.html`을 찾아서 실행시킨다.  
<br>




즉, webHistory를 사용하는 경우에는 Request URL이 /posts이므로 서버는 /posts/index.html를 찾으려하지만 실제로 /dist/posts/에는 index.html이 없기때문에 404 에러가 나타난다.
{: .notice--warning}

물론 서버에서 이러한 router url이 가능하도록 설정할 수있다. 하지만 **github pages**는 이를 지원하지않는다.  
이를 지원하는 **vercel**서버나 [router.vue.js공식사이트-server configureations](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations)를 참고해야한다  


참고자료: [Vue3 완벽 마스터: 기초부터 실전까지 - "실전편"](https://www.inflearn.com/course/vue-%EC%99%84%EB%B2%BD-%EC%8B%A4%EC%A0%84/dashboard)
