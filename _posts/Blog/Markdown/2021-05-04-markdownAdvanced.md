---
permalink: Blog/Markdown/AdvancedMarkdown/
title: "고급 Markdown"
toc: true
categories:
  - Blog🐨Markdown
comments: true
sidebar:
  - title: "Blog🐨"
  - nav: "Blog-menu"
tags:
  - Markdown
---

기본적인 Markdown말고 고급 Markdown 스킬  

## 텍스트를 작게

텍스트 끝에 `{: .small}` 추가
- #### 적용
<cite>Steve Jobs</cite> --- Apple Worldwide Developers' Conference, 1997
{: .small}

## 테이블

```markdown
| 이름             | 봉금    |                                                              |
| --------        | ------ | ------------------------------------------------------------ |
| [김찬영](#link)   | 1억원   | 그는 너무 지나치게 일을 잘하고 아주 스펙타클합니다. 믿을 수가 없어요.        |
| [김지언](#link)   | 100원  | 그는 노는 것을 좋아합니다. 롤을 무진장 못해요.                          |
| [남의현](#link)   | -1억원  | 고자입니다.                                                     |
| [강민숙](#link)   | 0원    | 여성스러우면서 섬세한 성격을 갖고 술고래입니다.                           |

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |
```

- #### 적용

| 이름             | 봉금    |                                                              |
| --------        | ------ | ------------------------------------------------------------ |
| [김찬영](#link)   | 1억원   | 그는 너무 지나치게 일을 잘하고 아주 스펙타클합니다. 믿을 수가 없어요.        |
| [김지언](#link)   | 100원  | 그는 노는 것을 좋아합니다. 롤을 무진장 못해요.                          |
| [남의현](#link)   | -1억원  | 고자입니다.                                                     |
| [강민숙](#link)   | 0원    | 여성스러우면서 섬세한 성격을 갖고 술고래입니다.                           |

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |



## Form 만들기

```html
<form>
  <fieldset>
    <legend>개인정보:</legend>
    이름: <input type="text" size="30"><br>
    이메일: <input type="text" size="30"><br>
    생년월일: <input type="text" size="10">
  </fieldset>
</form>
```

- #### 적용
<form>
  <fieldset>
    <legend>개인정보:</legend>
    이름: <input type="text" size="30"><br>
    이메일: <input type="text" size="30"><br>
    생년월일: <input type="text" size="10">
  </fieldset>
</form>

## 버튼

`.btn` 클래스를 활용하여 버튼을 올린다.

- html

```html
<a href="#" class="btn--success">Success Button</a>
```

- markdown - 버튼종류

```markdown
[Default Button Text](#link){: .btn}
[Primary Button Text](#link){: .btn .btn--primary}
[Success Button Text](#link){: .btn .btn--success}
[Warning Button Text](#link){: .btn .btn--warning}
[Danger Button Text](#link){: .btn .btn--danger}
[Info Button Text](#link){: .btn .btn--info}
[Inverse Button](#link){: .btn .btn--inverse}
[Light Outline Button](#link){: .btn .btn--light-outline}
```

- #### 적용
[Default Button](#){: .btn}  
[Primary Button](#){: .btn .btn--primary}  
[Success Button](#){: .btn .btn--success}  
[Warning Button](#){: .btn .btn--warning}  
[Danger Button](#){: .btn .btn--danger}  
[Info Button](#){: .btn .btn--info}  
[Inverse Button](#){: .btn .btn--inverse}  
[Light Outline Button](#){: .btn .btn--light-outline}  


- markdown - 버튼크기

```markdown
[X-Large Button](#link){: .btn .btn--primary .btn--x-large}
[Large Button](#link){: .btn .btn--primary .btn--large}
[Default Button](#link){: .btn .btn--primary }
[Small Button](#link){: .btn .btn--primary .btn--small}
```

- #### 적용
[X-Large Button](#){: .btn .btn--primary .btn--x-large}  
[Large Button](#){: .btn .btn--primary .btn--large}  
[Default Button](#){: .btn .btn--primary }  
[Small Button](#){: .btn .btn--primary .btn--small}  

## 텍스트 박스 강조

여러가지 notice 종류가 있다. `{: .notice}`로 텍스트박스를 강조할 수 있다.

```markdown
**Watch out!** Text~
{: .notice}

**Watch out!** Text~
{: .notice--primary}

**Watch out!** Text~
{: .notice--info}

**Watch out!** Text~
{: .notice--warning}

**Watch out!** Text~
{: .notice--success}

**Watch out!** Text~
{: .notice--danger}
```

**Watch out!** Lorem ipsum [dolor](#) sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.
{: .notice}

**Watch out!** Lorem ipsum [dolor](#) sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.
{: .notice--primary}

**Watch out!** Lorem ipsum [dolor](#) sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.
{: .notice--info}

**Watch out!** Lorem ipsum [dolor](#) sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.
{: .notice--warning}

**Watch out!** Lorem ipsum [dolor](#) sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.
{: .notice--success}

**Watch out!** Lorem ipsum [dolor](#) sit amet, consectetuer adipiscing elit. Donec mollis. Quisque convallis libero in sapien pharetra tincidunt. Aliquam elit ante, malesuada id, tempor eu, gravida id, odio. Maecenas suscipit, risus et eleifend imperdiet, nisi orci ullamcorper massa, et adipiscing orci velit quis magna. Praesent sit amet ligula id orci venenatis auctor. Phasellus porttitor, metus non tincidunt dapibus, orci pede pretium neque, sit amet adipiscing ipsum lectus et libero. Aenean bibendum. Curabitur mattis quam id urna. Vivamus dui. Donec nonummy lacinia lorem. Cras risus arcu, sodales ac, ultrices ac, mollis quis, justo. Sed a libero. Quisque risus erat, posuere at, tristique non, lacinia quis, eros.
{: .notice--danger}

위에서 확인해보면 링크 텍스트인 `dolor` 마다 색깔이 다른 것을 확인할 수 있다.


## 기타 HTML Tags

### 참조 설명
```markdown
이 문구는 무엇[^1]일까요?
```
이 문구는 무엇[^1]일까요?

### Address Tag
주소를 나타낼경우의 태그이다, `<br>`은 줄바꿈
```markdown
<address>
  권선구 삼천병마로<br /> 경기도 수원시 <br /> 대한민국
</address>
```

<address>
  권선구 삼천병마로<br /> 경기도 수원시 <br /> 대한민국
</address>


### Abbreviation Tag
약어로 쓰이는 태그이다.
```markdown
Web에는 CSS 로 디자인할 수 있습니다.

*[CSS]: Cascading Style Sheets
```

Web에는 CSS 로 디자인할 수 있습니다.

*[CSS]: Cascading Style Sheets

### Cite Tag
창작물이나 저작물등의 제목을 명시할경우  
```markdown
"넌 도전했고 도전에는 용기가 필요하지, 네가 자랑스럽구나" ---<cite>Little Miss Sunshine</cite>
```
"넌 도전했고 도전에는 용기가 필요하지, 네가 자랑스럽구나" ---<cite>Little Miss Sunshine</cite>

### Code Tag

```markdown
  이 태그는 `코드태그`입니다.
```
이 태그는 `코드태그`입니다.

### 지우기 Tag

```markdown
이 태그는 <strike>지우기 태그</strike>입니다.
```
이 태그는 <strike>지우기 태그</strike>입니다.

### 강조 Tag

```markdown
이 태그는 _강조태그_ 입니다. 이 태그는 *강조태그*와도 효과가 같습니다.
```
이 태그는 _강조태그_ 입니다. 이 태그는 *강조태그*와도 효과가 같습니다.

### 밑줄 Tag
```markdown
이 태그는 <ins>밑줄 태그</ins> 입니다.
```
이 태그는 <ins>밑줄 태그</ins> 입니다.

### 키보드 Tag
```markdown
이 태그는 <kbd>키보드 태그</kbd>입니다.
```
이 태그는 <kbd>키보드 태그</kbd>입니다.

### Preformatted Tag
```markdown
<pre>
  이 태그는
  Preformatted tag라고 하며
  pre 태그입니다.
</pre>
```
<pre>
  이 태그는
  Preformatted tag라고 하며
  pre 태그입니다.
</pre>


### Subscript Tag
```markdown
이 태그는 H<sub>2</sub>O를 표현할 수 있습니다.
```
이 태그는 H<sub>2</sub>O를 표현할 수 있습니다.

### Superscript Tag
```markdown
이 태그는 2<sup>2</sup>를 표현할수 있습니다.
```
이 태그는 2<sup>2</sup>를 표현할수 있습니다.



[^1]: 참조할 수 있다는 뜻입니다.