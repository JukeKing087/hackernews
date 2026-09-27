# Exposing a GitHub token in a public repository

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [mplappert](https://news.ycombinator.com/user?id=mplappert) |
| **Comments** | [2](https://news.ycombinator.com/item?id=49863685) |
| **Posted** | Sun, 27 Sep 2026 05:48:27 GMT |

## Link
https://alignment.openai.com/misalignment-reports/exposing-a-github-token-in-a-public-repository/

## Article Preview
Exposing a GitHub token in a public repository · OpenAI Alignment Skip to content OpenAI Alignment Research Blog ← Home Research and Releases Misalignment Reports and Notices System Cards ↗ On this page Summary What happened Investigation and response Exposing a GitHub token in a public repository Highly persistent internal model · Internal deployment Incident date: May 27, 2026 Discovered: May 27, 2026 Report updated: Sep 25, 2026 Summary In internal deployment, a highly persistent internal model deployed via a custom harness published a researcher’s GitHub token in the public openai/codex repository while trying to cheat on a theorem proving task by obtaining material from another team’s Lean proof submission. It split the token into pieces with the stated aim of avoiding secret scanning. This incident shows particularly severe misalignment given that the model directly went against both the system prompt and the researcher’s two interventions telling the model to solve the proof its

---
_Auto-generated · Sun, 27 Sep 2026 05:53:32 GMT_
