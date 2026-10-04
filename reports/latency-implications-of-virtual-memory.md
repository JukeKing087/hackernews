# Latency Implications of Virtual Memory

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [porridgeraisin](https://news.ycombinator.com/user?id=porridgeraisin) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49953642) |
| **Posted** | Sun, 04 Oct 2026 13:12:40 GMT |

## Link
https://rigtorp.se/virtual-memory/

## Article Preview
Latency Implications of Virtual Memory | Erik Rigtorp Erik Rigtorp Latency implications of virtual memory 2020-07-09 This is a short guide describing the latency implications of the virtual memory abstraction. If you are building systems requiring low and predictable latency such as realtime audio processing, control and high frequency trading (HFT) / algorithmic trading systems this guide will be useful to you. It is written from the perspective Linux kernel running on AMD64 / x86-64 architecture, but the general concepts applies to most operating systems and CPU architectures. In summary to minimize latency introduced by the virtual memory abstraction you should: Minimize page faults by pre-faulting, locking and pre-allocating needed memory. Disable swap. Reduce TLB misses by minimizing your working set memory and utilizing huge pages. Prevent TLB shootdowns by not modifying your programs page tables after startup. Prevent stalls due to page cache writeback by not creating file backe

---
_Auto-generated · Sun, 04 Oct 2026 13:19:23 GMT_
