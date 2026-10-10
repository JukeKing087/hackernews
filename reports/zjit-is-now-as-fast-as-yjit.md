# ZJIT is now as fast as YJIT

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [riffraff](https://news.ycombinator.com/user?id=riffraff) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50029945) |
| **Posted** | Sat, 10 Oct 2026 05:41:19 GMT |

## Link
https://railsatscale.com/2026-10-09-zjit-is-now-as-fast-as-yjit/

## Article Preview
ZJIT is now as fast as YJIT | Rails at Scale Rails at Scale About ZJIT is now as fast as YJIT 2026-10-09 • Max Bernstein After some infrastructure deployment shenanigans, we deployed some regions of storefront renderer (SFR) running on ZJIT. We have seen some promising numbers. Get in losers, we’re going benchmarking ZJIT is our new SSA-based method JIT compiler for Ruby. We’ve been working on it and blogging about it for a year and a half and recently deployed it to production. I’m going to share some screenshots from our internal Grafana instance and use them to draw some very exciting preliminary conclusions about ZJIT. First, ZJIT is probably as fast as or faster than YJIT . Here is a 24-hour chart of request response time comparing YJIT and ZJIT. YJIT is the green line and ZJIT is the yellow line. If you look closely, you can see there’s a gap between YJIT and ZJIT, where ZJIT sits lower, and lower is better! It seems like we can serve requests a little faster than YJIT. Exciting 

---
_Auto-generated · Sat, 10 Oct 2026 06:03:42 GMT_
