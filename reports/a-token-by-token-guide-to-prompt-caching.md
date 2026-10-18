# A Token-by-Token Guide to Prompt Caching

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [hdit](https://news.ycombinator.com/user?id=hdit) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50143965) |
| **Posted** | Sun, 18 Oct 2026 18:35:20 GMT |

## Link
https://www.sithankanna.com/posts/prompt-caching-vs-kv-caching.html

## Article Preview
A Token-by-Token Guide to Prompt Caching Sithan Kanna Contents 1. Why Two Layers? 2. Generate D, Then E 3. The Next Turn 4. How Do We Find the Cache? 5. How Does It Grow? 6. Across Sessions and Users 7. How Long Does It Last? A Token-by-Token Guide to Prompt Caching 18 October 2026 Suppose we send a model three tokens, A, B, C, and it answers with the tokens D, E. We then append X, Y, Z as new input (e.g., a user message or a tool result). Figure 1. The previous input and answer become part of the next turn's input. In Why KV Cache and Not QKV Cache? , we saw that, within a single answer, we do not have to reprocess tokens the model has already seen. Their keys and values have already been computed. Why should the same idea not apply to another turn? We will use two transformer layers, with one causal attention head per layer. Each upright letter labels one token; it is not a matrix or the cache itself. We leave out chat formatting and end-of-turn tokens; in a real request, those are p

---
_Auto-generated · Sun, 18 Oct 2026 18:43:49 GMT_
