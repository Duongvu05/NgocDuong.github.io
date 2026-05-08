---
title: ''
summary: ''
date: 2022-10-24
type: landing

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  - block: markdown
    id: research
    content:
      title: 'Research Focus'
      subtitle: ''
      text: |-
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;">
          <div style="border:1px solid #e5e7eb;border-radius:8px;padding:1.2rem;">
            <h3 style="margin:0 0 0.5rem;">🏥 AI for Healthcare</h3>
            <p style="margin:0;font-size:0.92rem;color:#555;">Medical imaging analysis, spine pathology diagnosis (Pfirrmann grading), and multimodal deep learning frameworks for clinical decision support.</p>
          </div>
          <div style="border:1px solid #e5e7eb;border-radius:8px;padding:1.2rem;">
            <h3 style="margin:0 0 0.5rem;">🔗 Fraud Detection</h3>
            <p style="margin:0;font-size:0.92rem;color:#555;">Blockchain transaction fraud detection on Ethereum using structural temporal graph networks and feature selection techniques.</p>
          </div>
        </div>
    design:
      columns: '1'

  - block: collection
    id: publications
    content:
      title: Featured Publications
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: citation

  - block: resume-experience
    id: experience
    content:
      username: me
    design:
      date_format: Jan 2006
      is_education_first: false

  - block: collection
    id: news
    content:
      title: Activities & Honors
      subtitle: ''
      text: ''
      page_type: blog
      count: 10
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      offset: 0
      order: desc
    design:
      view: card
      spacing:
        padding: [0, 0, 0, 0]
---
