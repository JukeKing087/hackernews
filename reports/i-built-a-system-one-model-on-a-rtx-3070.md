# I Built a System One Model on a RTX 3070

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [lafalce](https://news.ycombinator.com/user?id=lafalce) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49770066) |
| **Posted** | Sat, 19 Sep 2026 20:57:12 GMT |

## Link
https://twitter.com/lafalcemateo/status/2101414901365248059

## Article Preview
Mateo Lafalce on X: &quot;https://t.co/znReYJcyRo&quot; / X Article Log in Sign up Article Log in Sign up Mateo Lafalce @lafalcemateo I Built a System One Model on a RTX 3070 My implementation focuses on a local, open-weight specialist for short English text, trained on an RTX 3070 (8 GB of VRAM). Here is what I built and how I trained it: System One accepts a state and a set of typed questions. Each question uses one of three primitives: choice : select an option and return its probability distribution. score : evaluate an ordered rubric and return an expected score. noul : return the probability that a statement is true/false. The runtime produces structured responses directly from model scores. There is no autoregressive decoding or generated text to parse into JSON. Starting with a pretrained encoder I used ModernBERT-base (149M-parameter pretrained backbone), with LoRA adapters and a trainable decision head. Each input contains the question, candidate options, and state. A [MASK] 

---
_Auto-generated · Sat, 19 Sep 2026 21:13:33 GMT_
