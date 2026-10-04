# Page Table Memory Consumption

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [signa11](https://news.ycombinator.com/user?id=signa11) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49951390) |
| **Posted** | Sun, 04 Oct 2026 07:03:32 GMT |

## Link
https://frn.sh/pagetables/

## Article Preview
Page table memory consumption · Fernando Simões Fernando Simões Page table memory consumption Oct 1, 2026 The other day I was reading Linus Torvalds punch some people over hashed page tables. His argument: in a tree, the entries of neighboring pages are adjacent, which means one cache-line fills several TLB entries at once. A hash table, on the other hand, scatters neighbors in buckets: The fact is, you just don&rsquo;t know what GOOD actually is. I&rsquo;ll tell you: t a good TLB fill should pre-populate the TLB with all the entries it can fit in one cache-line. Do you realize that a bog-standard Intel CPU will fetch 8 TLB entries in one go? Together with a self-mapping (or, as Andy points out, you can just cache the other levels in dedicated caches), that means that with a single memory reference you get eight_times the coverage that the silly Power hash tables get. This discussion happened in 2003, in 1997, on his master&rsquo;s thesis , he explains the adoption of the three multi-l

---
_Auto-generated · Sun, 04 Oct 2026 07:23:32 GMT_
