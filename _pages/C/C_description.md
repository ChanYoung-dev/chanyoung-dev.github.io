---
permalink: /C/
title: "C🐷"
toc: false
comments: false
sidebar:
  - title: "C🐷"
  - nav: "C-menu"
---

- # Introduce

프로그래밍 언어의 조상인 C를 해보자!

- # 목차

{% for s in page.sidebar %}
{% if s.image %}
<img src="{{ s.image | relative_url }}"
             alt="{% if s.image_alt %}{{ s.image_alt }}{% endif %}">
{% endif %}
{% if s.nav %}{% include nav_list_home nav=s.nav %}{% endif %}
{% endfor %}


