# Show HN: CompMD – Markdown with components that still reads as plain Markdown

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [hakanserce](https://news.ycombinator.com/user?id=hakanserce) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50573740) |
| **Posted** | Fri, 20 Nov 2026 12:24:21 GMT |

## Link
https://compmd.dev

## Article Preview
CompMD: Markdown with components Spec Guides Blog Playground CompMD Why CompMD What it adds Safe to open Still Markdown Plain Markdown too Use it in your app Under the hood Where next Markdown with components. Readable as text, rendered as a page. Boxes, grids, values from data and inputs the reader changes, written in lines that still read as Markdown. Open it in the playground Read the spec club.comp.md Loading the processor… --- md: import: - from: ./shelf.js names: [shelf] data: [{from: ./club.csv, as: books}] inputs: book: string = "Klara and the Sun" --- # Thursday Book Club We meet on the last Thursday of the month, at Ana's. Pick a cover to see what we made of it. :: shelf[] {books=(md.data.books) picked=book} ::: each {in=(md.data.books.filter(b, b.title == md.input.book)) as=b} **{{b.title}}**, {{b.author}}. {{b.verdict}} ::: if {when=(b.status == "read")} The club gave it :rating[4 of 5]{value=(b.rating)} :: #else Not rated yet. ::: /if ::: /each ```compmd component=shelf si

---
_Auto-generated · Fri, 20 Nov 2026 12:32:55 GMT_
