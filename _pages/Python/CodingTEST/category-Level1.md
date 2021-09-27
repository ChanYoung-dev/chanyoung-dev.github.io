---
title: "Level1"
layout: archive
permalink: Python/CodingTEST/Level1
sidebar_main: true
sidebar:
  nav: "python-menu"
---

{% assign posts = site.categories.Level1 %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
