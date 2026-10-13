# Making a language with row types and bidirectional typing, targeting WASM

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [fanf2](https://news.ycombinator.com/user?id=fanf2) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50078421) |
| **Posted** | Tue, 13 Oct 2026 20:42:07 GMT |

## Link
https://thunderseethe.dev/series/making-a-language/

## Article Preview
Making a Language · Thunderseethe's Devlog Thunderseethe's Devlog Posts Making a Language Making a Language This is a series that teaches you how to make a statically-typed functional programming language. It was motivated by a gap between compilers as taught and compilers as seen in production. Production compilers are deeply concerned with being interactive, accomodating IDE usage and incremental compilation. In trying to learn how these work, I encounterd a dearth of material. We implement a query-based compiler and a language server atop that, which you can see in the playground . Our language will have a healthy reverence for the theory, but won't be partaking. We're happy to rely on the results of theory, but we won't be picking apart how it achieves those results. This series focus will be on the practical side of things. Runnable code can be found alongside each section in the repository . Our implementation is divided up into passes: Typechecking, Lowering, etc. Each pass has 

---
_Auto-generated · Tue, 13 Oct 2026 20:44:05 GMT_
