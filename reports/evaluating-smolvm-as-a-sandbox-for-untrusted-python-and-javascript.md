# Evaluating smolvm as a sandbox for untrusted Python and JavaScript

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [binsquare](https://news.ycombinator.com/user?id=binsquare) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49808722) |
| **Posted** | Tue, 22 Sep 2026 21:55:53 GMT |

## Link
https://simonwillison.net/2026/Aug/19/smolmachines-untrusted-sandbox/

## Article Preview
Research: smolmachines / smolvm as a sandbox for untrusted Python &amp; JavaScript Simon Willison’s Weblog Subscribe Sponsored by: Teleport &mdash; See what 13 engineers learned from “pressure washing” their codebase using LLMs for 90 days. Hint: Quality &gt; quantity for finding security vulnerabilities. 19th August 2026 Research smolmachines / smolvm as a sandbox for untrusted Python &amp; JavaScript &mdash; Testing smolvm 1.8.3 shows it is well suited for sandboxing untrusted Python and JavaScript data transformations using hardware-isolated VMs rather than shared-kernel containers. Offline local images, no-network execution, CPU/RAM limits, guest-enforced timeouts, storage quotas, read-only input mounts, writable output mounts, and `--unprivileged` all worked as intended, with cold starts around 0.6–1.5 seconds and warm executions around 50 ms. I tasked Claude Fable 5 running in Claude Code for web with the following research task: Put https://smolmachines.com through its paces as 

---
_Auto-generated · Tue, 22 Sep 2026 22:02:08 GMT_
