# A Real DuckDB Database in S3, with Nothing Else to Run

| Field | Value |
|---|---|
| **Score** | 3 |
| **Author** | [shenli3514](https://news.ycombinator.com/user?id=shenli3514) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50065288) |
| **Posted** | Tue, 13 Oct 2026 01:09:30 GMT |

## Link
https://dentiny.github.io/posts/duckdb-on-object-storage/

## Article Preview
A Real DuckDB Database in S3, With Nothing Else to Run | dentiny Skip to content dentiny Posts About ← All posts Oct 9, 2026 · 13 min read A Real DuckDB Database in S3, With Nothing Else to Run duckdb_object_storage stores native DuckDB databases (indexes, constraints, WAL and all) directly in object storage. There’s no table format, no catalog database and no fork of DuckDB. You just need DuckDB and a bucket. Every option stores data in object storage. The difference is what else you have to keep running next to it. In brief ATTACH 'duckdb_objfs://analytics.db' gives you an ordinary DuckDB database whose bytes live in S3. It’s a DuckDB community extension built on SlateDB and Apache OpenDAL . Nothing to run but the bucket. No catalog service, no Postgres, no coordinator, no compactor. All metadata, even writer fencing, lives in object storage. Everything DuckDB does still works. ART indexes, enforced keys, the WAL, checkpoints, COPY and extensions behave exactly as on a laptop, becaus

---
_Auto-generated · Tue, 13 Oct 2026 01:19:11 GMT_
