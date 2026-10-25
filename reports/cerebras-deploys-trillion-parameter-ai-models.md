# Cerebras Deploys Trillion-Parameter AI Models

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [gmays](https://news.ycombinator.com/user?id=gmays) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50227356) |
| **Posted** | Sun, 25 Oct 2026 01:33:49 GMT |

## Link
https://www.cerebras.ai/blog/how-we-deploy-trillion-parameter-frontier-models-on-cerebras

## Article Preview
How Cerebras Deploys Trillion-Parameter AI Models Skip to main content Products Customers Partners Developers Resources Pricing Company Contact us Get Started Oct 22 2026 How we deploy Trillion-parameter frontier models on Cerebras Sarah Chieng One of the most frequently asked questions we get is how we deploy large models on Cerebras wafer-scale chips. A single Cerebras WSE-3T wafer has 44 GB of on-chip memory, and trillion-parameter frontier models need terabytes for their weights alone. In this post, we’ll explain how we split a large frontier model across multiple WSE-3T wafers, to run multi-trillion parameter models at 1000-2000+ tokens per second. We’ll use the open source model Kimi K3, with ~3 trillion parameters, as an illustrative example. By the end, you&#x27;ll understand: How we fit the full model into on-chip memory How we map the model across multiple chips How we handle a high # of concurrent requests Breaking it down with Kimi K3 Kimi K3 is an open source, 3T parameter

---
_Auto-generated · Sun, 25 Oct 2026 01:35:28 GMT_
