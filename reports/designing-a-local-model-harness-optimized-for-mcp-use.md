# Designing a local model harness optimized for MCP use

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [alviso](https://news.ycombinator.com/user?id=alviso) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50008688) |
| **Posted** | Thu, 08 Oct 2026 17:16:06 GMT |

## Link
https://portlandaiworks.com/articles/local-model-harness-for-mcp

## Article Preview
Designing a local model harness optimized for MCP use · Portland AI Works Portland AI Works Peter Varga · Portland, Oregon Work with me Workshops Enterprise &amp; SAP Articles About Book a call Article · September 24, 2026 Designing a local model harness optimized for MCP use Three days and about forty scripted runs of Gemma 4 and Qwen3 against an ERP over MCP. The pass rate went from 1 of 4 to 4 of 4 without changing the model. What changed was the layer between the model and the system. I spent three days running a small local model against my own ERP over MCP. Not because I think a 4B-active model is the right tool for bookkeeping. Because a small model does not cover for a missing rule the way a frontier model does, so you can see what the layer between the model and the system is actually doing. This is what I found. The setup The system is Saybooks, an open-source ERP I built. It has one registry that produces the MCP tools, the web UI, the validation and the audit log, so an age

---
_Auto-generated · Thu, 08 Oct 2026 17:26:12 GMT_
