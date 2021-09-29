---
permalink: /Blog/
title: "Blog🐨"
toc: true
comments: true
sidebar:
  - title: "Blog🐨"
  - nav: "Blog-menu"
---

- # Introduce

Jekyll와 github page와 Markdown 파일을 이용하여 만든 블로그 개발일지

- # 목차

{% for s in page.sidebar %}
{% if s.image %}
<img src="{{ s.image | relative_url }}"
             alt="{% if s.image_alt %}{{ s.image_alt }}{% endif %}">
{% endif %}
{% if s.nav %}{% include nav_list_home nav=s.nav %}{% endif %}
{% endfor %}

> 👇 Github소스

[블로그 소스 ↗️ ](https://github.com/ChanYoung-dev/chanyoung-dev.github.io)
