---
layout: default
title: "Contact"
permalink: /contact/
---

<div class="page-header">
  <div class="container">
    <h1>{{ page.title }}</h1>
    <p class="page-description">Feel free to reach out for research collaborations or discussions.</p>
  </div>
</div>

<div class="container">
  <section class="section">
    <h2>Contact Information</h2>
    <ul class="contact-list">
      {% for contact in site.data.contacts %}
      <li>
        <strong>{{ contact.label }}:</strong>
        <a href="{{ contact.url }}" {% if contact.url contains 'http' %}target="_blank" rel="noopener noreferrer"{% endif %}>
          {{ contact.url | remove: 'https://' | remove: 'http://' | remove: 'mailto:' }}
        </a>
      </li>
      {% endfor %}
    </ul>
  </section>

  <section class="section">
    <h2>Collaboration</h2>
    <p>I am open to collaborations on topics related to <strong>AI for Healthcare</strong> and <strong>Fraud Detection</strong>. Please reach out via email.</p>
  </section>
</div>
