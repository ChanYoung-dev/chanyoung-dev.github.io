---
permalink: /Web/Frontend/CSS/CSSCentering/
title: "CSS Centering"
toc: true
categories:
  - Web🐮Frontend
comments: true
sidebar:
  - title: "Web🐮"
  - nav: "Web-menu"
tags:
  - CSS

---
css의 `flexbox`을 사용할 수 없을 때 포지션변경을 해보자.

## 여러가지 기본 방법

- ### html

```html
    <h3>margin: auto</h3>
    <div class="box box1">
        <div class="inner inner1"></div>
    </div>

    <h3>text-align: auto</h3>
    <div class="box box2">
        <div class="inner inner2"></div>
      <button>button</button>
    </div>

    <h3>translate(50%, 50%)</h3>
    <div class="box box3">
        <div class="inner inner3"></div>
    </div>

    <h3>Text centering</h3>
    <div class="box box4">
        <h1>Text</h1>
    </div>
```

- ### CSS

```css
.box{
  width: 200px;
  height: 100px;
  background-color:beige;
}

.inner {
  width: 50%;
  height: 50%;
  background-color: blue;
}



.inner1 {
  margin: auto;
}
/*margin은 기본값이 오른쪽으로만 치우쳐져있는데
이 margin을 양옆으로 분산시켜준다*/


.box2{
  text-align: center;
}

/* text뿐만 아니라 다른 요소도 가능하다.
하지만 블럭레벨(ex.div)은 되지않는다.
content의 내용을 가운데로 */

.inner3{
  transform: translate(50%, 50%);
}
/* 자기몸의 절반만큼 옮긴다.*/

.box4 h1{
  text-align:center;
  /*가로상에서만 옮겨진다.*/
  line-height: 100px;
  /*부모요소의 hegiht만큼주면 가운데로 이동*/
  /* line-height는 한줄에 100px높이를 갖는다는 뜻이다 */
}
```

### Output

![]({{site.baseurl}}/assets/images/web/Centering1.png)



## 박스를 부모위치 가운데로 옮기기

- ### 기본 틀

```css
.box{
  width: 200px;
  height: 100px;
  background-color:blue;
}
```

![]({{site.baseurl}}/assets/images/web/Centering2.png)

- ### transform

자기자신의 몸 길이 만큼 옮긴다.

>transform: translate(50%, 50%)

```css
.box{
  width: 200px;
  height: 100px;
  background-color:blue;
  transform: translate(50%, 50%)
}
```

![]({{site.baseurl}}/assets/images/web/Centering3.png)

자기몸의 절반만큼씩 이동했지만 부모의 가운데위치에 오진 못하였다.

- ### position: absolute

부모의 길이만큼 이동한다.

>position:absolute;
>top:50%;
>left:50%;

```css
.box{
  width: 200px;
  height: 100px;
  background-color:blue;
  position:absolute;
  top:50%;
  left:50%;
  /*transform:translate(-50%,-50%)*/
}
```

![]({{site.baseurl}}/assets/images/web/Centering4.png)

잘 보면 box의 왼쪽위 모서리가 가운데 있는 것을 확인할 수 있다.

이 위치에서 자기몸의 절반만큼 반대로 이동하면 되니깐

> transform:translate(-50%,-50%) 추가

```css
.box{
  width: 200px;
  height: 100px;
  background-color:blue;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%)
}
```

![]({{site.baseurl}}/assets/images/web/Centering5.png)