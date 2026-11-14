# SSH Keys in the Secure Enclave, Without an Agent

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [moonlighter](https://news.ycombinator.com/user?id=moonlighter) |
| **Comments** | [1](https://news.ycombinator.com/item?id=50492698) |
| **Posted** | Sat, 14 Nov 2026 01:43:43 GMT |

## Link
https://lograker.app/blog/secure-enclave-ssh-keys-without-an-agent

## Article Preview
SSH Keys in the Secure Enclave, Without an Agent - LogRaker Blog LogRaker Features Pricing Docs Release Notes Blog Download ← Blog ~/blog $ cat secure-enclave-ssh-keys-without-an-agent.md grep '^#' secure-enclave-ssh-keys-without-an-agent.md Date: Thu, 12 Nov 2026 From: Thomas Gumz &lt;thomas@lograker.app&gt; To: You Subject: SSH Keys in the Secure Enclave, Without an Agent A key that lives in your Mac’s Secure Enclave can’t be copied, period. The private half gets created inside a separate little processor and never comes out again, not to the app, not to macOS, and not even to you (which is exactly the point). That makes it just about the best place there is for an SSH key, and also the most annoying one to actually use, because OpenSSH wants to read a key before it can sign anything with it… and reading it is the one thing the Secure Enclave won’t let anybody do. So most people go the agent route. Tools like Secretive keep the key in the Secure Enclave and run an ssh-agent that Open

---
_Auto-generated · Sat, 14 Nov 2026 01:52:43 GMT_
