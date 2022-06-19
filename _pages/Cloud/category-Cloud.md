---
permalink: /Cloud/
title: "Cloud🐦"
layout: categories_archive
sidebar:
  - title: "Cloud🐦CI&CD"
  - nav: "Cloud-menu"
taxonomy:
  - Cloud🐦CI&CD
  - Cloud🐦AWS
sexy: 1
main: "CI&CD"
entries_layout: grid
toc: true
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
