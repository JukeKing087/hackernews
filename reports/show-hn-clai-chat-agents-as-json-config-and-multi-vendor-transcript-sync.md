# Show HN: Clai.chat – Agents as JSON, config and (multi-vendor) transcript sync

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [baalimago](https://news.ycombinator.com/user?id=baalimago) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50263951) |
| **Posted** | Tue, 27 Oct 2026 18:51:18 GMT |

## Link
https://www.clai.chat/

## Article Preview
clai — Agents as Unix commands Skip to content clai Docs Guides Reference Compare Hub Pricing Search the docs Search docs ⌘K System Light Dark GitHub Sign in Agents as Unix commands. clai is command line artificial intelligence: pipe data in, get data out. Give it a profile and it is a full agent, with tools, MCP servers, skills and workers of its own. Build agents with alias , chain them with | . Install the CLI Browse the Hub go install github.com/baalimago/clai@latest ~/work Pause $ alias review judge fix alias review='clai -p reviewer -r q' alias judge='clai -cm jev-latest -rf $HOME/ship.json q' alias fix='clai -l -t &quot;cat,go,apply_patch&quot; -check &quot;go test ./...&quot; q' $ git diff --stat api/api.go | 1 + limiter.go | 5 + ---- 2 files changed, 2 insertions(+), 4 deletions(-) $ git diff | review 'Risks of this change, two lines.' Swallowing the Incr error makes the limiter fail open: if the store is down or errors, n is likely 0, so every request is allowed and nothing i

---
_Auto-generated · Tue, 27 Oct 2026 18:56:08 GMT_
