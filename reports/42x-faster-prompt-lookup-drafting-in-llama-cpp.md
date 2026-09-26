# 42x faster prompt lookup drafting in llama.cpp

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [pptadversary](https://news.ycombinator.com/user?id=pptadversary) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49859982) |
| **Posted** | Sat, 26 Sep 2026 19:57:24 GMT |

## Link
https://jadidbourbaki.github.io/blog/prompt-lookup-llama-cpp/

## Article Preview
42x Faster Prompt Lookup Drafting in llama.cpp 42x faster prompt lookup drafting in llama.cpp Hayder Tirmazi [ homepage ] [ github ] [ twitter ] This article was originally published on 2026-09-26. TL;DR I make drafting for prompt lookup decoding in llama.cpp up to 42x faster while using up to 2.6x less memory through a set of simple performance optimizations largely based on the work of Daniel Lemire and Martin Ankerl . Many popular inference engines including llama.cpp and vllm, and machine learning libraries such as hugging face's transformers library, support prompt lookup decoding (also called n-gram speculation ) for faster token generation. Prompt lookup decoding is technically a special case of speculative decoding that uses a really stupid draft model, an n-gram model. When prompt lookup decoding is used, the inference engine drafts the next $k$ tokens using the following rule. Let $x_1, \ldots, x_t$ be the current tokens of a model. An n-gram is a sequence of $n$ consecutive 

---
_Auto-generated · Sat, 26 Sep 2026 20:01:04 GMT_
