# Duong Ngoc Vu — Academic Website

Personal academic website of **Duong Ngoc Vu**, Researcher at [Business AI Lab](https://bailab.vn/), National Economics University.

**Live:** https://duongvu05.github.io/NgocDuong.github.io/

## About

- **Email:** duongvn.bai@st.neu.edu.vn
- **GitHub:** [Duongvu05](https://github.com/Duongvu05)
- **LinkedIn:** [ngoc-duong-47a058292](https://www.linkedin.com/in/ngoc-duong-47a058292/)
- **ORCID:** [0009-0003-5917-4881](https://orcid.org/0009-0003-5917-4881)

## Research Interests

- AI for Healthcare
- Fraud Detection
- Graph Neural Networks
- Multimodal Learning

## Stack

Built with [Jekyll](https://jekyllrb.com/) and deployed on [GitHub Pages](https://pages.github.com/).

## Local Development

```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

## Add New Publications

Create a file in `_publications/YYYY-title.md`:

```yaml
---
title: "Paper Title"
authors:
  - name: "Duong Ngoc Vu"
    type: "self"
  - name: "Co-author Name"
year: 2026
venue: "Conference or Journal Name"
type: "conference"  # or "journal"
tags: ["Tag1", "Tag2"]
abstract: |
  Abstract here.
---
```

## Add News

Edit `_data/news.yml`:

```yaml
- date: "May. 2026"
  content: "Your news item here."
```
