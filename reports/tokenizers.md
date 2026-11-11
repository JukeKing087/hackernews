# Tokenizers

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [j_echevarria](https://news.ycombinator.com/user?id=j_echevarria) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50448976) |
| **Posted** | Wed, 11 Nov 2026 02:05:20 GMT |

## Link
https://jechevarria.com/blog/2026/11/11/tokenizers/

## Article Preview
Tokenizers Home Blog Tokenizers I explain why tokenizers are useful, and I introduce the BPE tokenizer. Published 11 November 2026 Tokens are the smallest units of text that language models process. At a high level, a language model takes a sequence of tokens as input and generates a sequence of tokens as output. A tokenizer is an algorithm that takes raw text and converts it into a sequence of tokens, and back again. See Figure 1. Figure 1. A tokenizer acts as an interface between the user and the language model. But what should we use as tokens? Naive solutions Word-level tokens Perhaps the most intuitive choice is to use words, alongside whitespace and punctuation. Tokenization ␣ is ␣ easy ! Each word is assigned a unique token ID, forming a vocabulary. However, this approach has several serious drawbacks: The vocabulary is too large. There are hundreds of thousands of common words in English; millions if we include technical terminology, proper nouns, slang and inflections. The pro

---
_Auto-generated · Wed, 11 Nov 2026 02:14:05 GMT_
