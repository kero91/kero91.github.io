---
layout: page
title: 운영
permalink: /ko/operations/
lang: ko
---
{% assign sorted = site.view_ko_operations | sort: 'index' %}
{% for sub_page in sorted %}
  {% capture my_include %}{{ sub_page.content | markdownify }}{% endcapture %}
  {% assign remain = sub_page.index | modulo: 1 %}
  {% assign margin = 3 %}
  {% assign margin_left = 3 %}
  {% assign min_height = 0 %}
  {% if remain == 0 %}
    {% assign margin_left = 0 %}
    {% if forloop.first == false %}
      {% assign margin = 10 %}
    {% endif %}
  {% endif %}
  {% if forloop.last == true %}
    {% assign min_height = 30 %}
  {% endif %}
  <div style="margin-top:{{ margin }}rem; margin-left:{{ margin_left}}rem; min-height:{{ min_height }}rem;">
  {% if remain == 0 %}
    <h2 id="{{sub_page.index}}">{{sub_page.display_index}}. {{sub_page.title}}</h2>
  {% else %}
    <h3 id="{{sub_page.index}}">{{sub_page.display_index}} {{sub_page.title}}</h3>
  {% endif %}
  {{ "- - -" | markdownify}}
  {{ my_include }}
  </div>
{% endfor %}

<div id="affix">
  <ul>
    {% assign open_count = 0 %}
    {% for sub_page in sorted %}
      {% assign remain = sub_page.index | modulo: 1 %}
      {% if remain == 0 %}
        {% if forloop.first == false %}
        </ul>
        {% capture open_count %}{{ open_count | minus: 1 }}{% endcapture %}
        {% endif %}
        <li class="collapsible">
          <a href="#{{ sub_page.index }}">{{sub_page.display_index}}. {{ sub_page.title }}</a>
        </li>
        <ul>
        {% capture open_count %}{{ open_count | plus: 1 }}{% endcapture %}
      {% else %}
        <li>
          <a href="#{{ sub_page.index }}{{sub_page.sub_index}}">{{sub_page.display_index}}  {{ sub_page.title }}</a>
        </li>
      {% endif %}
    {% endfor %}
    {% for i in (1..open_count) %}
      </ul>
    {% endfor %}
  </ul>
</div>
