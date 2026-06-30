---
title: "Cookiecutter vs Git Templates for Research Projects"
date: 2026-04-10
description: "Comparing two approaches for bootstrapping new AI research repositories: Cookiecutter and git template repos."
tags: ["Tooling", "Python", "Research", "Git"]
featured: false
---

When starting a new research project, one of the first decisions is how to bootstrap the codebase. Two popular approaches are **Cookiecutter** and **GitHub Template Repositories**. Here's my take after using both.

## Cookiecutter

[Cookiecutter](https://github.com/cookiecutter/cookiecutter) generates a project from a template using Jinja2. You define prompts, and it fills in values across your entire file tree.

```bash
cookiecutter gh:Duongvu05/ai-research-template
# Project name: CrossSpine
# Author: Duong Ngoc Vu
# Use GPU: yes
```

**Pros:**
- Highly customizable - can generate different file structures based on answers
- Language-agnostic
- Works offline once the template is cloned

**Cons:**
- Extra dependency (`pip install cookiecutter`)
- Template maintenance is non-trivial (Jinja2 syntax everywhere)
- No easy way to pull upstream template updates

## Git Template Repositories

GitHub's "Use this template" button creates a new repo with the same files but no shared history.

**Pros:**
- Zero friction - works directly in GitHub UI
- No extra tools needed
- Easy to keep a personal "starter" repo updated

**Cons:**
- No variable substitution - you manually rename things
- Can't easily parameterize the structure

## My Recommendation

For **research code** (experiments, models, data pipelines): use a **Git template repo**. The structure rarely varies much between projects, and the simplicity wins.

For **library/package** projects where you need proper naming, license headers, CI setup etc.: use **Cookiecutter** - the variable substitution is worth it.

At Business AI Lab, we now maintain a shared git template with our standard experiment harness, logging setup, and CI config. New projects start in under a minute.
