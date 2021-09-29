---
permalink: /Python/
title: "Python🐸"
toc: true
comments: true
sidebar:
  - title: "Python🐸"
  - nav: "python-menu"
---

- # Introduce

파이썬(python) 기본 공부 / Study for python basic

- # 목차

{% for s in page.sidebar %}
{% if s.image %}
<img src="{{ s.image | relative_url }}"
             alt="{% if s.image_alt %}{{ s.image_alt }}{% endif %}">
{% endif %}
{% if s.nav %}{% include nav_list_home nav=s.nav %}{% endif %}
{% endfor %}

> 👇 Github소스

{% gist ChanYoung-dev/08afabaf65e0bebdcde1d350b1df292c %}
