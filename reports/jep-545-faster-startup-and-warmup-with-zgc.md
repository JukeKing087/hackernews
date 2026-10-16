# JEP 545: Faster Startup and Warmup with ZGC

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ejboy](https://news.ycombinator.com/user?id=ejboy) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50119649) |
| **Posted** | Fri, 16 Oct 2026 15:29:58 GMT |

## Link
https://openjdk.org/jeps/545

## Article Preview
JEP 545: Faster Startup and Warmup with ZGC JEP 545: Faster Startup and Warmup with ZGC Owner Erik &#214;sterlund Type Feature Scope Implementation Status Targeted Release 28 Component hotspot&#8201;/&#8201;gc Discussion hotspot dash gc dash dev at openjdk dot org Effort M Duration M Relates to JEP 546: Adaptive Heap Sizing for ZGC Reviewed by Alex Buckley, Dan Heidinga, Mark Reinhold Endorsed by Vladimir Kozlov Created 2024/04/05 09:47 Updated 2026/10/15 14:37 Issue 8329758 Summary Improve application startup and warmup by enhancing the Z Garbage Collector to acquire and prepare physical memory more swiftly and efficiently in response to application needs. Goals Reduce startup time, i.e., the time to an application's first response. Reduce warmup time, i.e., the time needed to reach peak performance. Non-Goals It is not a goal to use the same memory management techniques on all operating systems. For example, we may use large pages by default on Linux but not on Windows. Motivation Th

---
_Auto-generated · Fri, 16 Oct 2026 15:33:30 GMT_
