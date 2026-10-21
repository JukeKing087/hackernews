# Real Transactions Are Serializable

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [b-man](https://news.ycombinator.com/user?id=b-man) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50174665) |
| **Posted** | Wed, 21 Oct 2026 00:43:18 GMT |

## Link
https://www.cockroachlabs.com/blog/acid-rain/

## Article Preview
Real transactions are serializable Products Solutions Resources Pricing Company Sign In Contact Us Try for Free Home / Resources / Back to Blog Blog Real transactions are serializable Ben Darnell Published on September 21, 2017 | 0 minute read Most databases offer a choice of several transaction isolation levels, offering a tradeoff between correctness and performance. However, that performance comes at a price, as developers must study their transactional interactions carefully or risk introducing subtle bugs. CockroachDB provides strong (“ SERIALIZABLE ”) isolation by default to ensure that your application always sees the data it expects. In this post I&#x27;ll explain what this means and how insufficient isolation impacts real-world applications. Isolation in the SQL Standard The SQL standard defines four isolation levels: SERIALIZABLE REPEATABLE READ READ COMMITTED READ UNCOMMITTED SERIALIZABLE transactions run as if only one transaction were running at a time; the other isolation

---
_Auto-generated · Wed, 21 Oct 2026 00:53:30 GMT_
