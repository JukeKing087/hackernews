# We migrated agent-swarm from SQLite to Postgres

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [tarasyarema](https://news.ycombinator.com/user?id=tarasyarema) |
| **Comments** | [1](https://news.ycombinator.com/item?id=50665911) |
| **Posted** | Fri, 27 Nov 2026 12:02:40 GMT |

## Link
https://www.agent-swarm.dev/blog/sqlite-to-postgres-in-six-days

## Article Preview
SQLite to PostgreSQL in 6 Days: A Timeline | Agent Swarm Agent Swarm 1.1K Menu Install Agent Swarm Live demo Docs Case studies Blog Ranking Tools Pricing GitHub Discord YouTube Changelog Back to writing November 26, 2026 · 10 min read Taras Taras Yarema Co-founder, Desplega Labs GitHub Blog LinkedIn X + the swarm SQLite to PostgreSQL in 6 Days: A Timeline The log of 6 days: a swarm writes a PostgreSQL storage engine in one weekend, we copy 24 million rows 3 times, switch production at 01:44, and get the first error at 01:46. PostgreSQL SQLite database migration AI agents testing open source On Friday our production swarm stored everything in one SQLite file. 6 days later it ran on PostgreSQL. The plan said before Christmas. We started Agent Swarm on SQLite on purpose. One file is simple to run and easy to deploy. We knew that we would need PostgreSQL if we scaled. Then the scale came. Our own file grew to 87 GB, one long statement could stall the API, and the next steps on our list nee

---
_Auto-generated · Fri, 27 Nov 2026 12:04:23 GMT_
