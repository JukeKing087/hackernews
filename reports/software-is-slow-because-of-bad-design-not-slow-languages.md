# Software is slow because of bad design, not slow languages

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [speckx](https://news.ycombinator.com/user?id=speckx) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50206715) |
| **Posted** | Fri, 23 Oct 2026 10:14:17 GMT |

## Link
https://www.seangoedecke.com/software-is-slow-because-of-bad-design-not-slow-languages/

## Article Preview
Software is slow because of bad design, not slow languages sean goedecke October 23, 2026 │ software design Software is slow because of bad design, not slow languages Many people are saying that AI will make software faster by rewriting it in faster languages, but this isn’t generally true. Most programs cannot be meaningfully sped up by rewriting them in C or Rust. How can this be true? Some languages are orders-of-magnitude faster than others: for instance, C can be fifty times faster than Python. Won’t rewriting my Python program in C thus make it fifty times faster? No, it won’t. Software performance is usually dominated by I/O, not the speed of the language. Where language speed matters, most slow languages already have popular libraries that allow them to unlock C-like speed. In general, performance is a matter of design , not of language choice. Most real programs are I/O-bound Consider a simple CRUD website with a database. For any given request, 50% of the request time 1 might

---
_Auto-generated · Fri, 23 Oct 2026 10:24:49 GMT_
