# I want to build a time machine for running programs

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [hypervs](https://news.ycombinator.com/user?id=hypervs) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50078427) |
| **Posted** | Tue, 13 Oct 2026 20:42:34 GMT |

## Link
https://trigora.dev/blog/i-want-to-build-a-time-machine-for-running-programs/

## Article Preview
I want to build a time machine for running programs | Trigora Trigora Docs Pricing Research Blog GitHub Docs Pricing Research Blog GitHub Start building → Start building → Blog I want to build a time machine… for running programs Omar Abdelrahman · 12 October 2026 A few months ago, I started working on a problem that seemed much narrower: Why should a long-running program have to replay its history just to recover from a failure? Durable execution systems make programs survive crashes, machines disappearing, long waits, retries, and external events. But many of them recover by reconstructing execution from an event history. That works. But the longer the program lives, the more history there is to reconstruct. So I started working on a different model. I called it Transparent Continuation Checkpointing , or TCC. Instead of treating execution history as the thing you reconstruct the program from, TCC commits the continuation state needed to resume the program directly. In other words: s

---
_Auto-generated · Tue, 13 Oct 2026 20:44:03 GMT_
