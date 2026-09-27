# Diagnosing and Mitigating Tool-Call Repetition in MiMo-v2.6

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [bashtoni](https://news.ycombinator.com/user?id=bashtoni) |
| **Comments** | [1](https://news.ycombinator.com/item?id=49871280) |
| **Posted** | Sun, 27 Sep 2026 21:59:01 GMT |

## Link
https://mimo.xiaomi.com/blog/mimo-v2-6-tool-call-repetition

## Article Preview
English 简体中文 Product MiMo Code MiMo Desktop Research Paper Blog Join Us English 简体中文 September 27, 2026 Diagnosing and Mitigating Tool-Call Repetition in MiMo-V2.6 A lesson from scaling RL: the reward blind spot in optimizing for correctness Hugging Face › Tech Report › 中文 › Following the release of MiMo-V2.6, tool-call repetition emerged as one of the most noticeable issues affecting the user experience. In MiMo Desktop, MiMo Code, OpenCode, and other agentic settings, the model would sometimes issue the same or highly similar tool calls repeatedly, consuming substantial time and context without making meaningful progress. Our internal evaluations confirmed this pattern: the response-level repetition rate exceeded 0.05%. The table below breaks down the rates for MiMo-V2.6-Flash-RL and MiMo-V2.6-Pro-RL across different agent harnesses. Tool-call repetition rates of MiMo-V2.6-Flash-RL and MiMo-V2.6-Pro-RL across agent harnesses Harness MiMo-V2.6-Flash-RL MiMo-V2.6-Pro-RL OpenCode 1.02% 

---
_Auto-generated · Sun, 27 Sep 2026 22:11:58 GMT_
