---
layout: home
permalink: /
hidden: true
sexy: 1

title: "📝개발 일지"
#header:
#  overlay_color: "#5e616c"
#  overlay_image: /assets/images/mm-home-page-feature.jpg
#  actions:
#    - label: " 프로필 보기 ↗️"
#      url: "/docs/quick-start-guide/"
#excerpt: >
#  역경과 고난을 극복해놓는 개발 일지록<br />
#  <small><a href="https://chanyoung-dev.github.io/Profile/">심플한게 최고야! by chan</a></small>

toc: true
comments: true
sidebar:
  - title: "전체 목차"
  - nav: "Total"
---
{% for s in page.sidebar %}
{% if s.image %}
<img src="{{ s.image | relative_url }}"
             alt="{% if s.image_alt %}{{ s.image_alt }}{% endif %}">
{% endif %}



{% endfor %}

