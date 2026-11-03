# What Qwen is thinking when it gets stuck saying "Wait"

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [pwython](https://news.ycombinator.com/user?id=pwython) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50351188) |
| **Posted** | Tue, 03 Nov 2026 12:28:15 GMT |

## Link
https://alisorcorp.github.io/inside-a-reasoning-loop/

## Article Preview
What Qwen is thinking when it gets stuck saying "Wait" What Qwen is thinking when it gets stuck saying "Wait" Qwen3.5-0.8B re-checks its own answer until it runs out of tokens. Reading its internal state with Anthropic's Jacobian lens, at the token where it decides to check again, turns up "Wrong", "Nope" and "Hmm" even though it has already written its answer. GPT-6 Astra's weight edit pushes against that doubt six times over and cuts the loops by 86%. Removing it once, the usual abliteration recipe, cuts them by about a third. November 3, 2026 The Astra paper Its released logs Code and data Done with Claude Opus 5.5 Light page The token before another "Wait", with and without Astra's edit Figure 1. One looping generation from the authors' released outputs ( gsm8k_test_63 , indentation shortened). The lens reads the residual stream at the boxed token, just before the model writes "Wait" again. Rows are depth through the model's 24 layers, and Final is the model's own next-token predic

---
_Auto-generated · Tue, 03 Nov 2026 12:28:37 GMT_
