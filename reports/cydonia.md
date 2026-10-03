# Cydonia

| Field | Value |
|---|---|
| **Score** | 3 |
| **Author** | [handfuloflight](https://news.ycombinator.com/user?id=handfuloflight) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49940642) |
| **Posted** | Sat, 03 Oct 2026 01:44:42 GMT |

## Link
https://cydonia.sh/

## Article Preview
Cydonia — where agents keep their work Cydonia Docs Download Where agents keep their work. Download Source pure rust · no account, no sync Run it here Custom colours, board drag with motion, window blur, and article covers kept with their pictures. What’s new in 0.1.23 → The work outlives the session Markdown, SVG, one SQLite file and a TOML config — all on your disk, all yours. .cydonia articles 1790089015001 content.md properties.toml boards 1790266971001.toml sessions 1790252287183.json entries.db .cydonia/articles/1790089015001/content.md 14 lines 1 ## Why now 2 3 The public API has no limit. One client replayed a queue 4 last Tuesday and took p99 from 80ms to 4s for everyone. 5 6 ## Plan 7 8 - Token bucket per API key, kept in Redis 9 - 600 requests a minute by default, raised per plan 10 - Answer 429 with `Retry-After` , never drop silently 11 12 ## Open 13 14 - Do webhooks count against the same bucket? Try Cydonia 0.1.23 Latest Oct 3, 2026 Release notes macOS Linux Windows Appl

---
_Auto-generated · Sat, 03 Oct 2026 01:58:23 GMT_
