# Deny rules don't stop coding agents from seeing keys your program prints

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [mistle](https://news.ycombinator.com/user?id=mistle) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50073050) |
| **Posted** | Tue, 13 Oct 2026 15:16:24 GMT |

## Link
https://fidelius.blisslabs.dev/research/ai-coding-agents-api-keys-env/

## Article Preview
Do AI Coding Agents Leak Your API Keys? | fidelius f ı delius How It Works Security Pricing Help Download Do AI Coding Agents Leak Your API Keys? By Maria Otworowska , October 9, 2026 In January The Register showed Claude Code 2.1.12 reading a .env it had been told to ignore and printing the secrets in it. While I was working on my new Mac app, which keeps API keys in the Keychain instead of .env files, I wanted to check if that&#x27;s still the case with current models. I ran 202 tests over 8 models, using a small project with fake keys and normal developer tasks, and kept every transcript. Results in short Claude Code (with Sonnet 5.5) and Codex (with GPT-6 Sol) opened the .env freely when nothing told them not to. Both tried to pull out only the variable names. Codex never let a whole value through doing that. Claude&#x27;s own look at the file exposed a value in 6 runs, mostly a database URL its redaction pattern missed. With Claude Code driving DeepSeek, Gemini, Grok or GLM instea

---
_Auto-generated · Tue, 13 Oct 2026 15:18:44 GMT_
