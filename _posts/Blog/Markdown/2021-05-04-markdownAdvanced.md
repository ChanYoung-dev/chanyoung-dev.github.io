---
permalink: Blog/Markdown/AdvancedMarkdown/
title: "๊ณ ๊ธ Markdown"
toc: true
categories:
  - Blog๐จMarkdown
comments: true
sidebar:
  - title: "Blog๐จ"
  - nav: "Blog-menu"
tags:
  - Markdown
sexy: 1
main: "Markdown"
header:
  teaser: https://user-images.githubusercontent.com/46098949/174485025-f780e7a1-a796-4109-9d4f-527e2029f1a1.png
  overlay_image: https://user-images.githubusercontent.com/46098949/174485025-f780e7a1-a796-4109-9d4f-527e2029f1a1.png
  overlay_filter: 0.5
list_name:
  - Markdown
  - Jekyll
  
---

๊ธฐ๋ณธ์ ์ธ Markdown๋ง๊ณ  ๊ณ ๊ธ Markdown ์คํฌ  

## ํ์คํธ๋ฅผ ์๊ฒ

ํ์คํธ ๋์ `{: .small}` ์ถ๊ฐ
- #### ์ ์ฉ
<cite>Steve Jobs</cite> --- Apple Worldwide Developers' Conference, 1997
{: .small}

## ํ์ด๋ธ

```markdown
| ์ด๋ฆ             | ๋ด๊ธ    |                                                              |
| --------        | ------ | ------------------------------------------------------------ |
| [๊น์ฐฌ์](#link)   | 1์ต์   | ๊ทธ๋ ๋๋ฌด ์ง๋์น๊ฒ ์ผ์ ์ํ๊ณ  ์์ฃผ ์คํํํดํฉ๋๋ค. ๋ฏฟ์ ์๊ฐ ์์ด์.        |
| [๊น์ง์ธ](#link)   | 100์  | ๊ทธ๋ ๋ธ๋ ๊ฒ์ ์ข์ํฉ๋๋ค. ๋กค์ ๋ฌด์ง์ฅ ๋ชปํด์.                          |
| [๋จ์ํ](#link)   | -1์ต์  | ๊ณ ์์๋๋ค.                                                     |
| [๊ฐ๋ฏผ์](#link)   | 0์    | ์ฌ์ฑ์ค๋ฌ์ฐ๋ฉด์ ์ฌ์ธํ ์ฑ๊ฒฉ์ ๊ฐ๊ณ  ์ ๊ณ ๋์๋๋ค.                           |

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

- #### ์ ์ฉ

| ์ด๋ฆ             | ๋ด๊ธ    |                                                              |
| --------        | ------ | ------------------------------------------------------------ |
| [๊น์ฐฌ์](#link)   | 1์ต์   | ๊ทธ๋ ๋๋ฌด ์ง๋์น๊ฒ ์ผ์ ์ํ๊ณ  ์์ฃผ ์คํํํดํฉ๋๋ค. ๋ฏฟ์ ์๊ฐ ์์ด์.        |
| [๊น์ง์ธ](#link)   | 100์  | ๊ทธ๋ ๋ธ๋ ๊ฒ์ ์ข์ํฉ๋๋ค. ๋กค์ ๋ฌด์ง์ฅ ๋ชปํด์.                          |
| [๋จ์ํ](#link)   | -1์ต์  | ๊ณ ์์๋๋ค.                                                     |
| [๊ฐ๋ฏผ์](#link)   | 0์    | ์ฌ์ฑ์ค๋ฌ์ฐ๋ฉด์ ์ฌ์ธํ ์ฑ๊ฒฉ์ ๊ฐ๊ณ  ์ ๊ณ ๋์๋๋ค.                           |

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |



## Form ๋ง๋ค๊ธฐ

```html
<form>
  <fieldset>
    <legend>๊ฐ์ธ์ ๋ณด:</legend>
    ์ด๋ฆ: <input type="text" size="30"><br>
    ์ด๋ฉ์ผ: <input type="text" size="30"><br>
    ์๋์์ผ: <input type="text" size="10">
  </fieldset>
</form>
```

- #### ์ ์ฉ
<form>
  <fieldset>
    <legend>๊ฐ์ธ์ ๋ณด:</legend>
    ์ด๋ฆ: <input type="text" size="30"><br>
    ์ด๋ฉ์ผ: <input type="text" size="30"><br>
    ์๋์์ผ: <input type="text" size="10">
  </fieldset>
</form>

## ๋ฒํผ

`.btn` ํด๋์ค๋ฅผ ํ์ฉํ์ฌ ๋ฒํผ์ ์ฌ๋ฆฐ๋ค.

- html

```html
<a href="#" class="btn--success">Success Button</a>
```

- markdown - ๋ฒํผ์ข๋ฅ

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

- #### ์ ์ฉ
[Default Button](#){: .btn}  
[Primary Button](#){: .btn .btn--primary}  
[Success Button](#){: .btn .btn--success}  
[Warning Button](#){: .btn .btn--warning}  
[Danger Button](#){: .btn .btn--danger}  
[Info Button](#){: .btn .btn--info}  
[Inverse Button](#){: .btn .btn--inverse}  
[Light Outline Button](#){: .btn .btn--light-outline}  


- markdown - ๋ฒํผํฌ๊ธฐ

```markdown
[X-Large Button](#link){: .btn .btn--primary .btn--x-large}
[Large Button](#link){: .btn .btn--primary .btn--large}
[Default Button](#link){: .btn .btn--primary }
[Small Button](#link){: .btn .btn--primary .btn--small}
```

- #### ์ ์ฉ
[X-Large Button](#){: .btn .btn--primary .btn--x-large}  
[Large Button](#){: .btn .btn--primary .btn--large}  
[Default Button](#){: .btn .btn--primary }  
[Small Button](#){: .btn .btn--primary .btn--small}  

## ํ์คํธ ๋ฐ์ค ๊ฐ์กฐ

์ฌ๋ฌ๊ฐ์ง notice ์ข๋ฅ๊ฐ ์๋ค. `{: .notice}`๋ก ํ์คํธ๋ฐ์ค๋ฅผ ๊ฐ์กฐํ  ์ ์๋ค.

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

์์์ ํ์ธํด๋ณด๋ฉด ๋งํฌ ํ์คํธ์ธ `dolor` ๋ง๋ค ์๊น์ด ๋ค๋ฅธ ๊ฒ์ ํ์ธํ  ์ ์๋ค.


## ๊ธฐํ HTML Tags

### ์ฐธ์กฐ ์ค๋ช
```markdown
์ด ๋ฌธ๊ตฌ๋ ๋ฌด์[^1]์ผ๊น์?
```
์ด ๋ฌธ๊ตฌ๋ ๋ฌด์[^1]์ผ๊น์?

### Address Tag
์ฃผ์๋ฅผ ๋ํ๋ผ๊ฒฝ์ฐ์ ํ๊ทธ์ด๋ค, `<br>`์ ์ค๋ฐ๊ฟ
```markdown
<address>
  ๊ถ์ ๊ตฌ ์ผ์ฒ๋ณ๋ง๋ก<br /> ๊ฒฝ๊ธฐ๋ ์์์ <br /> ๋ํ๋ฏผ๊ตญ
</address>
```

<address>
  ๊ถ์ ๊ตฌ ์ผ์ฒ๋ณ๋ง๋ก<br /> ๊ฒฝ๊ธฐ๋ ์์์ <br /> ๋ํ๋ฏผ๊ตญ
</address>


### Abbreviation Tag
์ฝ์ด๋ก ์ฐ์ด๋ ํ๊ทธ์ด๋ค.
```markdown
Web์๋ CSS ๋ก ๋์์ธํ  ์ ์์ต๋๋ค.

*[CSS]: Cascading Style Sheets
```

Web์๋ CSS ๋ก ๋์์ธํ  ์ ์์ต๋๋ค.

*[CSS]: Cascading Style Sheets

### Cite Tag
์ฐฝ์๋ฌผ์ด๋ ์ ์๋ฌผ๋ฑ์ ์ ๋ชฉ์ ๋ช์ํ ๊ฒฝ์ฐ  
```markdown
"๋ ๋์ ํ๊ณ  ๋์ ์๋ ์ฉ๊ธฐ๊ฐ ํ์ํ์ง, ๋ค๊ฐ ์๋์ค๋ฝ๊ตฌ๋" ---<cite>Little Miss Sunshine</cite>
```
"๋ ๋์ ํ๊ณ  ๋์ ์๋ ์ฉ๊ธฐ๊ฐ ํ์ํ์ง, ๋ค๊ฐ ์๋์ค๋ฝ๊ตฌ๋" ---<cite>Little Miss Sunshine</cite>

### Code Tag

```markdown
  ์ด ํ๊ทธ๋ `์ฝ๋ํ๊ทธ`์๋๋ค.
```
์ด ํ๊ทธ๋ `์ฝ๋ํ๊ทธ`์๋๋ค.

### ์ง์ฐ๊ธฐ Tag

```markdown
์ด ํ๊ทธ๋ <strike>์ง์ฐ๊ธฐ ํ๊ทธ</strike>์๋๋ค.
```
์ด ํ๊ทธ๋ <strike>์ง์ฐ๊ธฐ ํ๊ทธ</strike>์๋๋ค.

### ๊ฐ์กฐ Tag

```markdown
์ด ํ๊ทธ๋ _๊ฐ์กฐํ๊ทธ_ ์๋๋ค. ์ด ํ๊ทธ๋ *๊ฐ์กฐํ๊ทธ*์๋ ํจ๊ณผ๊ฐ ๊ฐ์ต๋๋ค.
```
์ด ํ๊ทธ๋ _๊ฐ์กฐํ๊ทธ_ ์๋๋ค. ์ด ํ๊ทธ๋ *๊ฐ์กฐํ๊ทธ*์๋ ํจ๊ณผ๊ฐ ๊ฐ์ต๋๋ค.

### ๋ฐ์ค Tag
```markdown
์ด ํ๊ทธ๋ <ins>๋ฐ์ค ํ๊ทธ</ins> ์๋๋ค.
```
์ด ํ๊ทธ๋ <ins>๋ฐ์ค ํ๊ทธ</ins> ์๋๋ค.

### ํค๋ณด๋ Tag
```markdown
์ด ํ๊ทธ๋ <kbd>ํค๋ณด๋ ํ๊ทธ</kbd>์๋๋ค.
```
์ด ํ๊ทธ๋ <kbd>ํค๋ณด๋ ํ๊ทธ</kbd>์๋๋ค.

### Preformatted Tag
```markdown
<pre>
  ์ด ํ๊ทธ๋
  Preformatted tag๋ผ๊ณ  ํ๋ฉฐ
  pre ํ๊ทธ์๋๋ค.
</pre>
```
<pre>
  ์ด ํ๊ทธ๋
  Preformatted tag๋ผ๊ณ  ํ๋ฉฐ
  pre ํ๊ทธ์๋๋ค.
</pre>


### Subscript Tag
```markdown
์ด ํ๊ทธ๋ H<sub>2</sub>O๋ฅผ ํํํ  ์ ์์ต๋๋ค.
```
์ด ํ๊ทธ๋ H<sub>2</sub>O๋ฅผ ํํํ  ์ ์์ต๋๋ค.

### Superscript Tag
```markdown
์ด ํ๊ทธ๋ 2<sup>2</sup>๋ฅผ ํํํ ์ ์์ต๋๋ค.
```
์ด ํ๊ทธ๋ 2<sup>2</sup>๋ฅผ ํํํ ์ ์์ต๋๋ค.



[^1]: ์ฐธ์กฐํ  ์ ์๋ค๋ ๋ป์๋๋ค.