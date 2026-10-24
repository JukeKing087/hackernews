# Who Wrote This Byte: git blame for your build’s bytes

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ingve](https://news.ycombinator.com/user?id=ingve) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50225513) |
| **Posted** | Sat, 24 Oct 2026 21:27:24 GMT |

## Link
https://fzakaria.com/2026/10/23/who-wrote-this-byte

## Article Preview
Who wrote this byte? | Farid Zakaria’s Blog Skip to content Farid Zakaria 2026-10-23 &middot; 13 min read Who wrote this byte? git blame for your build’s bytes. 🔍 A build is bit reproducible when the same inputs give the same bytes. Why does reproducibility matter? They provide certainty that software is genuine and has not been tampered with. See reproducible-builds.org . Nix is infamously not bit reproducible, but rather input-addressed : the hash of a package is calculated from the inputs rather than the output. We still prefer though to have bit reproducibility, because it allows us to verify that the package we downloaded is the same as the one built from source. It is something many packages aspire to achieve. When the outputs differ, you want to know why. The first step is to find the bytes that differ, and the second is to find the program that wrote them. Finding the cause of a difference has traditionally been the challenging part of process making builds reproducible…until 

---
_Auto-generated · Sat, 24 Oct 2026 21:32:46 GMT_
