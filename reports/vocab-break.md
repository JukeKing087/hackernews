# Vocab Break

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [gmays](https://news.ycombinator.com/user?id=gmays) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50512913) |
| **Posted** | Mon, 16 Nov 2026 01:25:10 GMT |

## Link
https://ianbarber.blog/2026/08/24/vocab-break/

## Article Preview
Vocab Break &#8211; Ian’s Blog Skip to content Ian’s Blog About Archive Vocab Break Written by Ian in Modelling Tokenizer enthusiast Sander Land recently reproduced something very like Claude’s current tokenizer , and it appears to only have about 16,000 entries. That is surprising! Qwen 3.8, a very strong release, has about 250k tokens in its vocab. In general the trend had seemed to be more is better in this space. One theory is that Anthropic have been working around a bottleneck caused by the final softmax layer. There is a recent(ish) paper about this: “Lost in Backpropagation: The LM Head is a Gradient Bottleneck“ , but, if this is the reason, then the folks at Throppy have known this for way longer. The basic idea is that you have to project at the end of the forward pass from the model’s latent space, dimension D, to a much bigger vocabulary space, dimension V, to select a token. Sticking with Qwen, their 2.4T parameter flagship model has a hidden size, D, of 8,192, and a V of 

---
_Auto-generated · Mon, 16 Nov 2026 01:26:34 GMT_
