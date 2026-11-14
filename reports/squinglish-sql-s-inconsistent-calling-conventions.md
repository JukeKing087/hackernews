# Squinglish: SQL's Inconsistent Calling Conventions

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ludsan](https://news.ycombinator.com/user?id=ludsan) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50502080) |
| **Posted** | Sat, 14 Nov 2026 23:16:15 GMT |

## Link
https://blog.delightql.org/post/2026/10/23/squinglish-sqls-inconsistent-calling-conventions/

## Article Preview
Squinglish: SQL's Inconsistent Calling Conventions | Delightql Programming Language Home Posts Tags RSS Squinglish: SQL&rsquo;s Inconsistent Calling Conventions 2026-10-23 One of the main motivations for writing delightql was to provide a more consistent syntax for querying a database. There have been many criticisms raised about SQL&rsquo;s syntax. Classically, the order of relational operations is implicit and opaque and there is no useful abstraction for reusability. These are both true. But my particular bugbear is the inconsistent calling convention for functions and predicates. A calling convention is nothing more than the syntax for invoking a subroutine/function/method/whatever. In most programming languages the consistency is so built-into the language that you won&rsquo;t realize what you have &rsquo;till it&rsquo;s gone. To get to the point, consider these valid SQL calls: select overlay ( &#39;w3333333rce&#39; placing &#39;resou&#39; from 3 ); select substring ( &#39;w3reso

---
_Auto-generated · Sat, 14 Nov 2026 23:26:20 GMT_
