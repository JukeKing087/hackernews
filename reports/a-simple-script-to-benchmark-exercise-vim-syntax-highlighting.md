# A simple script to benchmark/exercise Vim syntax highlighting

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [speckx](https://news.ycombinator.com/user?id=speckx) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50072961) |
| **Posted** | Tue, 13 Oct 2026 15:10:44 GMT |

## Link
https://dustri.org/b/a-simple-script-to-benchmarkexercise-vim-syntax-highlighting.html

## Article Preview
A simple script to benchmark/exercise vim syntax highlighting Artificial truth archives | latest | homepage The more you see, the less you believe. A simple script to benchmark/exercise vim syntax highlighting Mon 12 October 2026 — download Because I dislike tree-sitter , I've been looking at optimizing vim syntax-based code highlighting, sending ~30 pull requests as a result. It's surprisingly non-trivial to profile syntax highlighting, as vim has some pty /terminal relate checks, as well as a bunch of screen/display optimizations, so I've been using the following script quite extensively: &quot; Profile a runtime syntax file with a sequential full-buffer parse. &quot; Pass this as Vim&#39;s vimrc, e.g.: &quot; src/vim -Nu profile_syntax.vim file.py &quot; Inputs are extended to 100,000 lines. The report is written to &quot; output-YYYYMMDD-HHMMSS.txt in the current directory. set nocompatible execute &#39;set runtimepath^=&#39; . fnameescape ( getcwd () . &#39;/runtime&#39; ) filetyp

---
_Auto-generated · Tue, 13 Oct 2026 15:18:46 GMT_
