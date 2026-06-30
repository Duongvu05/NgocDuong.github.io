---
title: "PhenSPINE: Why Spine AI Needs a Standardized Benchmark"
date: 2026-01-15
description: "The motivation behind PhenSPINE - a standardized benchmark dataset for spine pathology diagnosis on MRI, presented at CITA 2026."
tags: ["Research", "Medical Imaging", "Benchmark", "Healthcare"]
featured: true
---

Spine pathology diagnosis from MRI is a clinically important task, yet the AI research community has struggled with a fundamental problem: **there is no agreed-upon benchmark**.

## The Current State

Most papers on automated Pfirrmann grading (a 5-level scale for intervertebral disc degeneration) report results on private, institution-specific datasets. This makes it nearly impossible to fairly compare methods or know which one is actually best.

The consequence? Researchers keep solving the same problem in isolation, and clinicians have no reliable guidance on which tool to trust.

## Introducing PhenSPINE

PhenSPINE is a standardized benchmark we developed at Business AI Lab that addresses this gap. It provides:

- **Curated MRI data** with multiple sequences (T1, T2, STIR)
- **Standardized annotations** reviewed by radiologists
- **Fixed train/val/test splits** so comparisons are apples-to-apples
- **An evaluation framework** with agreed-upon metrics

## What Makes a Good Benchmark?

Building PhenSPINE taught me that a good medical imaging benchmark needs more than just data:

1. **Annotation protocol** - radiologists need clear, unambiguous labeling guidelines
2. **Inter-rater agreement** - at least two annotators per case, with disagreement resolution
3. **Diverse cases** - different scanners, field strengths, patient demographics
4. **Public leaderboard** - so the community can track progress over time

## Impact

Since presenting PhenSPINE at CITA 2026, we've had interest from several research groups who want to evaluate their methods on it. Standardized benchmarks are what move a research field forward - we're excited to contribute one to spine AI.

The dataset details are in the [paper](/publications).
