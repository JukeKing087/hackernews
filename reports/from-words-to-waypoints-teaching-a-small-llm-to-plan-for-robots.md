# From Words to Waypoints: Teaching a Small LLM to Plan for Robots

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [sundw](https://news.ycombinator.com/user?id=sundw) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50345968) |
| **Posted** | Mon, 02 Nov 2026 23:51:20 GMT |

## Link
https://www.daweisun.me/blog/stl-planning-rl/

## Article Preview
From Words to Waypoints: Teaching a Small LLM to Plan for Robots — Dawei Sun Dawei Sun Blog About From Words to Waypoints: Teaching a Small LLM to Plan for Robots November 1, 2026 Large language models are increasingly asked to act as the high-level planner of a robot: given a task in words or in a formal language, decide where to go, in which order, and when. For tasks written in temporal logic, the classical approach is to encode the whole problem as a mixed-integer linear program (MILP) and hand it to a solver. That works, but it can take a very long time, and the cost grows quickly with the length of the task and the number of conditions. A MILP solver is a powerful but blind search: every operator, at every time step, becomes a set of binary variables and constraints, and the solver has no notion of what they mean. A language model can understand the semantics of the temporal operators, for instance that &ldquo;stay out of D until K is reached&rdquo; means visiting K before enteri

---
_Auto-generated · Mon, 02 Nov 2026 23:55:27 GMT_
