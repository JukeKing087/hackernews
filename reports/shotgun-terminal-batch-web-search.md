# Shotgun – Terminal Batch Web Search

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [bweller](https://news.ycombinator.com/user?id=bweller) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50359933) |
| **Posted** | Wed, 04 Nov 2026 00:02:04 GMT |

## Link
https://bweller.me/terminal-batch-web-search/

## Article Preview
Terminal Batch Web Search Ben Weller&#x27;s Blog Home About Sign in Subscribe We've all been there, Google doesn't one shot your search query and so you have to add "hackernews", "reddit" or "stackoverflow" to your query to find the relevant results. Most of the time you know even prior to sending that search if it'll be in this camp, so why not send multiple searches at once? In the spirit of the relevant XKCD and uzi I've created a batch search function you can use from the terminal, pull the trigger once and you've covered your bases. Pre-reqs Oh my ZSH Web search plugin Default web browser Implementation plugins=( ... web-search) function shotgun { web_search google $1; web_search google site:news.ycombinator.com $1; web_search reddit $1; web_search stackoverflow $1; } Terminal Batch Web Search Ben Weller 28 Nov 2025 ← Previous Next → Sign up Ben Weller&#x27;s Blog © 2026. Powered by Ghost

---
_Auto-generated · Wed, 04 Nov 2026 00:12:20 GMT_
