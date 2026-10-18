# One [Nix] store, two front ends

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [ghuntley](https://news.ycombinator.com/user?id=ghuntley) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50139109) |
| **Posted** | Sun, 18 Oct 2026 08:26:38 GMT |

## Link
https://fzakaria.com/2026/10/17/one-store-two-frontends

## Article Preview
One store, two frontends | Farid Zakaria’s Blog Skip to content Farid Zakaria 2026-10-17 &middot; 15 min read One store, two frontends One of the big ideas I think the Nix community should pursue is relocatable binaries . I put my money where my mouth is and collaborated with the VFS Linux maintainer Christian Brauner to get $ORIGIN support in PT_INTERP and the shebang via EBPF 🐝. That work is in Linux 7.3 which is about to be released. Despite the amazing potential this unlocks, I found few to be as enthusiastic as I was. Instead of excitement, I was met with skepticism: “What’s the point beyond it being a cool technical trick?” First off, “The pursuit of excellence does not need justification.” by Mitchell Hashimoto should be enough. There is however a very practical reason to pursue relocatable binaries: it allows Nix to be a package set for other build systems, specifically Bazel and buck2. The two frontends can share the same store, and the machine doing the compiling does not ne

---
_Auto-generated · Sun, 18 Oct 2026 08:56:31 GMT_
