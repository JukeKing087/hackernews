# Realtime Raytracing in Bevy 0.20 (Solari)

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ibobev](https://news.ycombinator.com/user?id=ibobev) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49761434) |
| **Posted** | Fri, 18 Sep 2026 23:04:24 GMT |

## Link
https://jms55.github.io/posts/2026-09-18-solari-bevy-0-20/

## Article Preview
Realtime Raytracing in Bevy 0.20 (Solari) Introduction Reducing Shadow Lag MIS for the Combined Estimator MIS in RIS MIS in ReSTIR MIS in Solari Unified ReSTIR Historical Background A Unified Pathtracer Implementation Choices Benefits Downsides Saying Goodbye to ReSTIR What in the Denoiser? Reflection Denoising CPU Performance Improvements Atmosphere and Skybox Lighting ← Back Realtime Raytracing in Bevy 0.20 (Solari) Sep 18, 2026 # bevy # raytracing Introduction Bevy 0.20 is going to release soon, so it's time to talk about all the improvements I've been working on for Solari, Bevy's realtime pathtracer. Whereas last cycle was mostly incremental improvements, this cycle was the complete opposite. Solari 0.20 features nothing less than a complete rewrite of the renderer! Lots to cover, so let's get started! Zero Day rendered in realtime via Bevy Solari 0.20 Reducing Shadow Lag This section is going to start off with a good bit of math, but we'll get to the practical applications toward

---
_Auto-generated · Fri, 18 Sep 2026 23:12:04 GMT_
