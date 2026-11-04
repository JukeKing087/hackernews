# Durable Coroutines for TypeScript

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [calvinfo](https://news.ycombinator.com/user?id=calvinfo) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50366192) |
| **Posted** | Wed, 04 Nov 2026 14:42:00 GMT |

## Link
https://restate.dev/blog/durable_coroutines

## Article Preview
Durable Coroutines for TypeScript: Fault-tolerant Agents with millisecond overhead | Restate Restate announces $20M Series A Read more 4.7k Talk to us Login Docs Use Cases Restate Cloud Pricing Company Blog 4.7k Talk to us Login Blog Durable Coroutines for TypeScript: Fault-tolerant Agents with millisecond overhead November 3, 2026 Igal Shilman, Stephan Ewen, Giselle van Dongen We added durable coroutines to Restate&#x27;s TypeScript SDK: persistent, concurrent, multi-step routines that provide the same persistence and recovery semantics as workflows , but add only milliseconds of overhead per durable action, instead of the 50-100 milliseconds often experienced in workflow solutions 1 . In production deployments, a durable step in a coroutine adds a latency overhead of P50=2.5ms, P99=9ms at rates of &gt;10,000 durable_actions/second for a synchronously replicated 3-AZ setup on GCP. We developed Durable Coroutines together with users building durable agents . Modern agent harnesses pers

---
_Auto-generated · Wed, 04 Nov 2026 14:42:27 GMT_
