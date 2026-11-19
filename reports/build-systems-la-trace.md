# Build systems à la trace

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [setheron](https://news.ycombinator.com/user?id=setheron) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50556806) |
| **Posted** | Thu, 19 Nov 2026 06:52:39 GMT |

## Link
https://fzakaria.com/2026/11/18/build-systems-a-la-trace

## Article Preview
Build systems à la trace | Farid Zakaria’s Blog Skip to content Farid Zakaria 2026-11-18 &middot; 10 min read Build systems à la trace As a build systems enthusiast, Build Systems à la Carte is one of my favourite papers. It defines a way to think about build systems that is both precise and surprisingly practical. As a Nix enthusiast, I am deeply fond of hermetic builds, where every dependency is explicitly declared and the build can be replicated. I have already explored the idea of leveraging Guix derivations in Nix by proving that any system that claims to be hermetic can be transmogrified into another lossless one. Where else can this idea be applied? The holy grail of build systems is to combine the best of both worlds: the hermetic guarantees of Nix with the efficient scheduling and incremental rebuilds of systems like Bazel. In the paper’s vocabulary, it defines tasks as being either applicative or monadic . Applicative tasks have static dependencies that can be listed before r

---
_Auto-generated · Thu, 19 Nov 2026 07:10:09 GMT_
