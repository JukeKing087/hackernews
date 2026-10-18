# Row Locks with Joins Can Produce Surprising Results in PostgreSQL

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [mooreds](https://news.ycombinator.com/user?id=mooreds) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50143989) |
| **Posted** | Sun, 18 Oct 2026 18:38:36 GMT |

## Link
https://hakibenita.com/postgres-row-lock-with-join

## Article Preview
Row Locks With Joins Can Produce Surprising Results in PostgreSQL | Haki Benita Haki Benita About Subscribe 24 February 2026 PostgreSQL , SQL 16 &nbsp; 50 Row Locks With Joins Can Produce Surprising Results in PostgreSQL The strange edge case that triggered our assertions Here's a database riddle: you have two tables with data connected by a foreign key. The foreign key field is set as not null and the constraint is valid and enforced. You execute a query that joins these two tables and you get no results! How is that possible? We thought it wasn't possible, but a recent incident revealed an edge case we never thought about. In this article I show how under some circumstances row locks with joins can produce surprising results, and suggest ways to prevent it. Weird Join Image by abstrakt design Table of Contents The Problem Changing Ownership Changing Ownership Concurrently The Illusive Concurrency Issue Possible Solutions Lock the Related Row Use a Stricter Isolation Level Split the Q

---
_Auto-generated · Sun, 18 Oct 2026 18:43:48 GMT_
