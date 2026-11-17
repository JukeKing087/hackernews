# The anatomy of a Tines gVisor sandbox

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [shayonj](https://news.ycombinator.com/user?id=shayonj) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50536683) |
| **Posted** | Tue, 17 Nov 2026 19:16:13 GMT |

## Link
https://notebook.tines.com/writing/anatomy-of-a-3b-step/

## Article Preview
The anatomy of a 3B step · Notebook Notebook The anatomy of a 3B step An example step Running Linux in the sentry Starting before the job arrives Who answers each path Files that outlive the sandbox Building the image Faulting the image in Startup is the slow part TCP egress goes through Pony Removing the sandbox Wrapping up The anatomy of a 3B step. From building the image to tearing down the sandbox, how we give each 3B step a fresh Linux environment. 16 November 2026 · Shayon Mukherjee Field notes At Tines we’re building 3B, where people work with an agent to automate enterprise software. Workflows, internal apps, and agents are all made of steps, each a directory with a Dockerfile and a program that reads stdin and writes stdout. The result becomes the input to whatever runs next. Each run gets a fresh Linux sandbox, including a fresh gVisor application kernel, which we delete afterwards because we have to treat the program as untrusted even if it appears to have worked. That means

---
_Auto-generated · Tue, 17 Nov 2026 19:19:41 GMT_
