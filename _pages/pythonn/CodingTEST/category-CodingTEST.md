---
title: "level0 집합"
layout: archive
permalink: pythonn/CodingTEST/
sidebar_main: true
sidebar:
  nav: "python-menu"
---

Hellow
{% assign posts = site.categories.level0 %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
hi
{% assign posts = site.categories.level1 %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
