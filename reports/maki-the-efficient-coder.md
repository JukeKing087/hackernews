# Maki, the efficient coder

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [abc42](https://news.ycombinator.com/user?id=abc42) |
| **Comments** | [1](https://news.ycombinator.com/item?id=49797288) |
| **Posted** | Tue, 22 Sep 2026 06:01:28 GMT |

## Link
https://maki.sh/

## Article Preview
maki maki ? Docs Discord GitHub maki the efficient coder I got frustrated with existing coding agents and hitting hourly/weekly token limits. So I built Maki, a lightweight Rust TUI with some novel context token reduction techniques. In benchmarks, it reduces cost by 2x and finishes them 2x faster too. $ curl -fsSL https://maki.sh/install.sh | sh &gt; irm https://maki.sh/install.ps1 | iex on Windows? on macOS or Linux? 0:00 / 0:00 2.0x 0.5x 1.0x 1.5x 2.0x 3.0x Skip to 1:07 to see the snake game Opus 4.6 created Where tokens go index Parses 15 languages into skeletons: imports, type defs, function signatures with their line ranges. Costs 59 tok/turn, saves 224 on reads. Reads were ~65% of my tokens, so this one is big. code_execution A sandboxed Python interpreter where every tool is an async function. The model gathers 50 reads, greps them, prints the 3 lines that matter. The rest never touches your context. tool_search Datadog's MCP server has over 100 tools. Every definition sits in 

---
_Auto-generated · Tue, 22 Sep 2026 06:07:02 GMT_
