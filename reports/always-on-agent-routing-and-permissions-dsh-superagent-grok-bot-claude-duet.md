# Always-on agent routing and permissions: dsh-superagent, Grok Bot, Claude Duet

| Field | Value |
|---|---|
| **Score** | 4 |
| **Author** | [zfy0701](https://news.ycombinator.com/user?id=zfy0701) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50637332) |
| **Posted** | Wed, 25 Nov 2026 01:39:16 GMT |

## Link
https://www.agentconnect.md/blog/always-on-agents-router-worker/

## Article Preview
How always-on agents split routing, execution, and permissions — AgentConnect Blog Docs Blog Star 1.6k Get started All posts Comparisons 18 min read How always-on agents split routing, execution, and permissions A comparative study of dsh-superagent, Grok Bot, Claude Duet, and other implementations. The AgentConnect team Comparisons · 2026-11-23 Copy link Once you drop an agent into a team's chat tool, one piece of work rarely stays in one thread. Context spreads across DMs, channels, and replies while several unrelated tasks run at the same time. A common response is to split message coordination from task execution: a routing layer (the router) decides which piece of work an incoming event belongs to, and an execution layer (the worker) carries out each task in its own context. Throughout this post, a session means one continuous model context processing messages, and an always-on agent means an agent that keeps receiving events and following up on work over time. We studied three ex

---
_Auto-generated · Wed, 25 Nov 2026 01:54:21 GMT_
