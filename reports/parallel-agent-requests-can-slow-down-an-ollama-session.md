# Parallel agent requests can slow down an Ollama session

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [tensward](https://news.ycombinator.com/user?id=tensward) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50549638) |
| **Posted** | Wed, 18 Nov 2026 17:55:18 GMT |

## Link
https://tensward.com/blog/ollama-agent-cache

## Article Preview
How parallel agent requests can slow down an entire Ollama session | Tensward Skip to content Tensward Platform Solutions Specialty care Referral readiness and follow-up review More industries Finance, legal, government, R&amp;D Open source Results Blog Talk to us ← Field notes How parallel agent requests can slow down an entire Ollama session Two coding-agent sessions sharing one Ollama slot waited a median 46 seconds for a response to start, against one second with a slot each. Over half the prompt tokens the server processed were repeats. Why hybrid models lose their place, and which settings change it. 18 November 2026 7 min read Tensward L4 · Ollama and llama.cpp · Qwen3.8-27B Ollama llama.cpp prompt cache coding agents Ask a coding agent to fix a failing test. It might read a file, run the test, edit a function, then run the test again. Each time a tool returns a result, the agent sends another request to the model. From your terminal it looks like one conversation. From the serv

---
_Auto-generated · Wed, 18 Nov 2026 17:59:16 GMT_
