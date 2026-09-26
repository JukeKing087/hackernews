# A single function Jev-like wrapper for LLMs, including vision models

| Field | Value |
|---|---|
| **Score** | 3 |
| **Author** | [allanrbo](https://news.ycombinator.com/user?id=allanrbo) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49853175) |
| **Posted** | Sat, 26 Sep 2026 04:20:58 GMT |

## Link
http://allanrbo.blogspot.com/2026/09/a-jev-like-wrapper-for-llms-including.html

## Article Preview
Allan's Blog: A Jev-like wrapper for LLMs, including vision models skip to main | skip to sidebar Allan's Blog Allan Riordan Boll's blog Friday, September 25, 2026 A Jev-like wrapper for LLMs, including vision models I was intrigued by Jev and the self-hostable projects appearing around it, such as OpenJev and SemIf . Reading about them introduced me to a neat trick: reading an LLM's token probabilities. Apparently this is an old trick for some people. See e.g. OpenAI's logprobs cookbook . But it was new to me. I believe the basic idea is to write a prompt like this: State: My order arrived broken and I want a refund. Question: Which team should handle this? [A] billing [B] shipping [C] returns Answer with the letter of the best option only. Then add a few JSON request parameters to a compatible Chat Completions request: { &quot;max_completion_tokens&quot;: 1, &quot;logprobs&quot;: true, &quot;top_logprobs&quot;: 20 } The LLM API will return the letter plus the model's log probabilitie

---
_Auto-generated · Sat, 26 Sep 2026 04:49:02 GMT_
