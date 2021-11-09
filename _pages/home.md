---
layout: archive
permalink: /
hidden: true
sexy: 1

title: "📝개발 일지 리스트"
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
  - nav: "Total"
---
{% for s in page.sidebar %}
{% if s.image %}
<img src="{{ s.image | relative_url }}"
             alt="{% if s.image_alt %}{{ s.image_alt }}{% endif %}">
{% endif %}
{% if s.title %}<a href=/{{ s.title }}/><h3>{{ s.title }}</h3></a>{% endif %}
{% if s.nav %}{% include nav_list_home nav=s.nav %}{% endif %}
{% endfor %}


<!--주석처리: post by categories
{{ content }}
주석처리: 최근 고생이력
<h3 class="archive__subtitle">{{ site.data.ui-text[site.locale].recent_posts | default: "최근에 고생한 일" }}</h3>
{% if paginator %}
  {% assign posts = paginator.posts %}
{% else %}
  {% assign posts = site.posts %}
{% endif %}
{% assign entries_layout = page.entries_layout | default: 'list' %}
<div class="entries-{{ entries_layout }}">
  {% for post in posts %}
    {% include archive-single.html type=entries_layout %}
  {% endfor %}
</div>
{% include paginator.html %}-->