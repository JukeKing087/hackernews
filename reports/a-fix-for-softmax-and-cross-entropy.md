# A Fix for Softmax and Cross-Entropy

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [Georgelemental](https://news.ycombinator.com/user?id=Georgelemental) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50216027) |
| **Posted** | Fri, 23 Oct 2026 22:07:57 GMT |

## Link
https://jonbarron.info/softmaxfix/

## Article Preview
A Fix for Softmax and Cross-Entropy A Fix for Softmax and Cross-Entropy Interactive Demo arXiv Copy BibTeX Contents 1. Introduction 2. Softmax Collapse 3. Softmax Cancellation 4. The Slingshot Mechanism 5. Margin Equilibria 6. Grokking Across Precisions and Benchmarks 7. Soft-Target Distillation 8. Conclusion References A Fix for Softmax and Cross-Entropy Jonathan T. Barron Google DeepMind barron@google.com Dan Gnanapragasam Google DeepMind nanabyte@google.com Michael Tschannen Google DeepMind tschannen@google.com Abstract Standard implementations of softmax, log-softmax, and cross-entropy have two numerical bugs. The first bug, Softmax Collapse , rounds the target logit's gradient to zero if that one logit is much larger than the others, resulting in gradients that no longer sum to zero. The second bug, Softmax Cancellation , occurs when student logits are close to teacher logits, and produces non-zero gradients even when the student and teacher logits are equal. We present simple imp

---
_Auto-generated · Fri, 23 Oct 2026 22:20:39 GMT_
