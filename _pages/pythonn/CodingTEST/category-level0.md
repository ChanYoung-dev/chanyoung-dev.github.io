---
title: "level0 집합"
layout: archive
permalink: pythonn/CodingTEST/level0
sidebar_main: true
sidebar:
  nav: "python-menu"
pythons:
  - level0
---

1
Hellow!!
{% assign posts = site.categories.level1 %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}

{% if page.sidebar.nav %}
{% include nav_list nav=page.sidebar.nav %}
{% endif %}
