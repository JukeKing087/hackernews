# Jev for Input Validation

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [ScottWRobinson](https://news.ycombinator.com/user?id=ScottWRobinson) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49847802) |
| **Posted** | Fri, 25 Sep 2026 17:52:56 GMT |

## Link
https://unstack.io/jev-for-input-validation

## Article Preview
Jev for input validation Posts About Posts About Posts Jev for input validation By Scott Robinson · September 25, 2026 Ever since the Jev announcement , I&#x27;ve been seeing tons of use-cases and how it can be applied to problems that didn&#x27;t work well with traditional LLMs. There are demos out there from playing Tetris to driving cars . While these demos are really cool, I&#x27;m more interested in exploring how the various ways it can actually be used in real production software. Jev&#x27;s core use case is as a classifier. You give it some state and a question whose answers you have already listed. It returns a score for those answers instead of generating text, so you can drop it into normal validation code without a training step. The biggest shift here is that, instead of getting raw text output like you get from traditional LLMs, you get a &quot;confidence score&quot; for each output. This means you get a smart, general classifier without having to do any training or fine-t

---
_Auto-generated · Fri, 25 Sep 2026 18:05:03 GMT_
