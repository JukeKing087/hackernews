# Memelang: Token-Terse Query Language

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [bri-holt](https://news.ycombinator.com/user?id=bri-holt) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49957433) |
| **Posted** | Sun, 04 Oct 2026 20:21:57 GMT |

## Link
https://memelang.net/11/

## Article Preview
Memelang v11 Memelang Memelang is a terse query language that substantially reduces compute costs for LLMs emitting billions of SQL queries daily. Low-token Memelang is emitted as an intermediate representation which is then programatically translated into higher-token SQL for the database. Example: Memelang (20 tokens) roles actor :$a="Mark Hamill";movie _;@ @ @;actor !$a SQL (36 tokens) SELECT x.actor,x.movie,y.movie,y.actor FROM roles AS x,roles AS y WHERE x.actor='Mark Hamill' AND y.id!=x.id AND y.movie=x.movie Video Overview arXiv Paper GitHub Repo Patent Spec document.getElementById('copy').style.background='',500);return false">Copy all code # Copy-and-paste this code into your LLM to ask how Memelang works # info@memelang.net | (c)2026 HOLTWORK LLC | Patented # MEMELANG is a terse query DSL IR for LLM text-to-SQL # Axial grammar: Axis2 -&gt; Axis1 -&gt; Axis0 -&gt; Cell # Whitespaces are syntactic and trigger "new Cell" # Never space between operator/comparator/comma/flag and v

---
_Auto-generated · Sun, 04 Oct 2026 20:25:20 GMT_
