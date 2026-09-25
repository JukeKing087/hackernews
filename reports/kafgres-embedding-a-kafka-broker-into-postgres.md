# Kafgres: Embedding a Kafka Broker into Postgres

| Field | Value |
|---|---|
| **Score** | 3 |
| **Author** | [enether](https://news.ycombinator.com/user?id=enether) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49850082) |
| **Posted** | Fri, 25 Sep 2026 21:20:05 GMT |

## Link
https://rynr.dev/blog/kafgres/

## Article Preview
Kafgres: Embedding a Kafka Broker into Postgres — rynr.dev blog rynr.dev home blog non-dev blog ← back to blog Kafgres: Embedding a Kafka Broker into Postgres September 7, 2026 • #postgres #kafka #rust TL;DR “Just use Postgres” Mostly compelling But why throw away the Kafka ecosystem Dozens of blogs, listicles and wikis center around the concept of “just use Postgres’. Many have contrasted the operational burden and cost of managing a Kafka cluster against just using various techniques to get message queues or event logs out of your existing Postgres clusters. Proposed options range from using Postgres locks to handle competitive consumption from tables (that can be treated as logs). SELECT FOR UPDATE SKIP LOCKED To using purpose built extensions extending psql for message queues SELECT * from pgmq . send ( queue_name =&gt; &#39; my_queue &#39;, msg =&gt; &#39; {&quot;foo&quot;: &quot;bar1&quot;} &#39; ); These blog posts are broadly correct, in that Postgres (especially when extended)

---
_Auto-generated · Fri, 25 Sep 2026 21:30:18 GMT_
