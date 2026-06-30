---
title: "Building a Repository Harness for AI Research"
date: 2026-05-01
description: "How I structured a reproducible code harness for deep learning experiments in medical imaging and fraud detection research."
tags: ["Research", "Deep Learning", "Python", "Reproducibility"]
featured: true
---

Managing experiments in AI research can quickly become chaotic - scattered scripts, inconsistent configs, results that are hard to reproduce. Over the past year at Business AI Lab, I've developed a lightweight *repository harness* that keeps experiments clean and reproducible.

## The Problem

When you're running dozens of ablation studies on MRI spine data or testing different GNN architectures for fraud detection, it's easy to lose track of:

- Which hyperparameters produced which result
- Which dataset version was used
- Whether a "better" result was due to the model or a data preprocessing change

## The Solution: A Simple Harness

The harness I use is built around three principles:

### 1. Config-first experiments

Every run is fully defined by a YAML config file:

```yaml
experiment:
  name: crossspine_v3_ablation
  seed: 42

model:
  backbone: resnet50
  attention: cross_sequence
  scales: [1, 2, 4]

data:
  dataset: phenspine
  split: 0.8/0.1/0.1
  augment: true
```

### 2. Automatic logging

Every experiment auto-logs to a structured directory:

```
runs/
  crossspine_v3_ablation_20260501_142300/
    config.yaml        # exact config used
    metrics.json       # val/test metrics per epoch
    model_best.pt      # best checkpoint
    stdout.log         # full training log
```

### 3. Git-tagged results

Before each experiment run, the harness records the current git commit hash in `metrics.json`. This means any result can be traced back to the exact code that produced it.

## Results

Since adopting this harness, I've been able to:

- Reproduce any past experiment in under 5 minutes
- Share experiments with labmates by simply sharing the config file
- Spot regressions immediately when refactoring model code

The full template is available on my [GitHub](https://github.com/Duongvu05).
