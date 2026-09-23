# Loopjacking in A2A Implementations: Hijacking Human-in-the-Loop Approvals

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [akoffsec](https://news.ycombinator.com/user?id=akoffsec) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49820349) |
| **Posted** | Wed, 23 Sep 2026 18:23:47 GMT |

## Link
https://adithyanak.com/loopjacking-in-a2a-implementations/

## Article Preview
Loopjacking in A2A Implementations: Hijacking Human-in-the-Loop Approvals Skip to field note FN- 10 / Field note Field note index ↗ FN- 10 / Agentic Security Research Filed 21 SEP 2026 Revised 23 SEP 2026 Read 13 min Independent research field note Loopjacking in A2A Implementations: Hijacking Human-in-the-Loop Approvals A2A keeps agent work addressable across messages. In a tested LangGraph Agent Server composition, an update changed a pending operation after its approval view was read. The implementation then used the earlier decision for the changed action. Author Adithyan Arun Kumar Discipline Agentic Security Research Loopjacking AI Agent Security Human-in-the-Loop A2A Authorization In a controlled LangGraph Agent Server test, the approval role received a human-in-the-loop interrupt for mock_wire_transfer(20, approved-vendor) . A separate maker could update the pending thread but could not approve or execute a protected transfer. The maker sent another message through the server&#

---
_Auto-generated · Wed, 23 Sep 2026 18:29:04 GMT_
