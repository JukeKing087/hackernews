# Kiesel JavaScript Engine v0.4.0

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ErenayDev](https://news.ycombinator.com/user?id=ErenayDev) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50036823) |
| **Posted** | Sat, 10 Oct 2026 20:28:13 GMT |

## Link
https://linus.dev/posts/kiesel-devlog-15/

## Article Preview
Kiesel Devlog #15: Release 0.4.0 &mdash; Linus Groh Home Posts Codeberg GitHub Kiesel Devlog #15: Release 0.4.0 Published on 2026-10-08. This week I completed the update to Zig 0.17 and released Kiesel 0.4.0! It contains 64 commits across 2.5 months, see the changelog for the full list of user-facing changes. Kiesel.args / Kiesel.env I mostly build rather than use this project, and it shows — beyond the core language implementation only a few APIs needed for real-world programs are available. We did have file I/O for a while, and with the addition of arguments and environment reading a simple cat(1) clone becomes feasible: #!/usr/bin/env kiesel const [ _exe , _script , ... files ] = Kiesel . args ; if ( files . length === 0 ) { const contents = Kiesel . readStdin ( ) ; Kiesel . print ( contents , { newline : false } ) ; } else { for ( const file of files ) { const contents = Kiesel . readFile ( file ) ; Kiesel . print ( contents , { newline : false } ) ; } } $ ./cat.js cat.js Even More

---
_Auto-generated · Sat, 10 Oct 2026 20:37:09 GMT_
