---
permalink: /Blog/Markdown/PutImage/
title: "github page, Jekyll에서의 마크다운 파일에 image(사진) 넣기"
toc: true
categories:
  - Blog🐨Markdown
comments: true
sidebar:
  - title: "Blog🐨"
  - nav: "Blog-menu"
excerpt: >
  로컬이 아닌 github page에 이미지 올리기
tags:
  - Markdown
sexy: 1
main: "Markdown"
header:
  teaser: https://images.velog.io/images/jinsol/post/c15a0e78-fa22-46fc-84fc-9c2d70c8492a/Qu0P4ouF-markdown.png
  overlay_image: https://images.velog.io/images/jinsol/post/c15a0e78-fa22-46fc-84fc-9c2d70c8492a/Qu0P4ouF-markdown.png
  overlay_filter: 0.5
list_name:
  - Markdown
  - Markup
  - HTML
---
로컬에선 이미지가 잘 올라가지만, github page상에서는 안 뜨는 경우가 있다.  
assets으로 접근해야한다. baseurl의 설정을 안했을 때의 가정.

```

![](site.baseurl/assets/해당파일.png)

```

> sitebaseurl 양옆에 \{\{ 와 \}\}를 넣어야한다.
