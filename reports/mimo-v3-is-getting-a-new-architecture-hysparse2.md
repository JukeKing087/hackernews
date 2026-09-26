# MiMo-V3 is getting a new architecture. HySparse2

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ksec](https://news.ycombinator.com/user?id=ksec) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49853136) |
| **Posted** | Sat, 26 Sep 2026 04:13:36 GMT |

## Link
https://twitter.com/_LuoFuli/status/2102766365190901957

## Article Preview
Fuli Luo on X: &quot;MiMo-V3 is getting a new architecture. The core of it, HySparse2, is out today. Less prefill, a smaller KV cache, better long-context retrieval—and we got all three at once. Compared with MiMo-V2.6&#x27;s Hybrid SWA architecture: • 5.02× lower prefill FLOPs at 1M tokens • 4.5× smaller … / X Post Log in Sign up Post Log in Sign up Fuli Luo on X: &quot;MiMo-V3 is getting a new architecture. The core of it, HySparse2, is out today. Less prefill, a smaller KV cache, better long-context retrieval—and we got all three at once. Compared with MiMo-V2.6&#x27;s Hybrid SWA architecture: • 5.02× lower prefill FLOPs at 1M tokens • 4.5× smaller KV cache at 1M tokens • Better MRCRv2 and RULER-v2 scores, plus lower AgentPPL and LongPPL Why build a new architecture? Agentic inference is a very different workload. Each round, a short action can return a long observation that needs to be prefilled, while the context keeps growing. That puts prefill cost, KV-cache size, and retrieval 

---
_Auto-generated · Sat, 26 Sep 2026 04:49:04 GMT_
