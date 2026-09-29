# Modern Web Types

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ibobev](https://news.ycombinator.com/user?id=ibobev) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49900444) |
| **Posted** | Tue, 29 Sep 2026 20:59:13 GMT |

## Link
https://philipwalton.com/articles/modern-web-types/

## Article Preview
Modern Web Types — Philip Walton Philip Walton Engineer @ Google Articles About Modern Web Types September 14, 2026 One of my biggest annoyances with TypeScript is that any time you use it on a project with newer web features, you inevitably run into type errors. For example, here’s a screenshot of an error I got just the other day when trying to use element-scoped view transitions : “Property ‘startViewTransition’ does not exist on type ‘HTMLElement’.” Or this error when trying to use the Long Animation Frame API to measure and optimize JavaScript execution performance: “Property ‘scripts’ does not exist on type ‘PerformanceEntry’.” Or yet another one when trying to feature-detect and use fetchLater() to batch and reduce the overall number of analytics beacons: “Property ‘fetchLater’ does not exist on type ‘Window &amp; typeof globalThis’.” All of these APIs are available in Chrome, and all of them can be safely used now as progressive enhancements. Still, TypeScript makes it seem lik

---
_Auto-generated · Tue, 29 Sep 2026 21:03:37 GMT_
