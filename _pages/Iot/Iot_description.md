---
permalink: /Iot/
title: "Iot🐵"
sidebar:
  - title: "Iot🐵"
  - nav: "Iot-menu"
taxonomy:
  - Iot🐵SBC
layout: categories_archive
---

## 목차

{% for s in page.sidebar %}
{% if s.image %}
<img src="{{ s.image | relative_url }}"
             alt="{% if s.image_alt %}{{ s.image_alt }}{% endif %}">
{% endif %}
{% if s.nav %}{% include nav_list_home nav=s.nav %}{% endif %}
{% endfor %}

## 최근 글
