# Lean Now Ships with Verified Kernels

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [matt_d](https://news.ycombinator.com/user?id=matt_d) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50114758) |
| **Posted** | Fri, 16 Oct 2026 06:16:13 GMT |

## Link
https://leodemoura.github.io/blog/2026-10-15-lean-now-ships-with-verified-kernels/

## Article Preview
Lean Now Ships with Verified Kernels — Leonardo de Moura Leonardo de Moura home about me publications blog notes presentations Lean Now Ships with Verified Kernels 2026-10-15 AI agents are very effective at finding vulnerabilities in our software. This includes the kernel (the proof checker) of the Lean proof assistant. See our two recent postmortems ( August 1 , August 24 ). We are strengthening the official kernel, adding new kernels, and building new tools that simplify rechecking your Lean developments with external kernels. Lean v4.35.0 comes with the lake check command. This command exports your development and rechecks it with leanchecker , the official Lean kernel without all the baggage around it. The whole process runs inside a sandbox. You can disable the sandbox using lake check --inadvisably-no-sandbox . Lean now ships with four additional kernels: nanoda , lean4lean , con-leche , and con-ron . You can recheck your development with all of them using the command lake check 

---
_Auto-generated · Fri, 16 Oct 2026 06:24:25 GMT_
