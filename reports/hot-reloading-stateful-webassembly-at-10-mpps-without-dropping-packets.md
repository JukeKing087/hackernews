# Hot-Reloading Stateful WebAssembly at 10 Mpps Without Dropping Packets

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ninegamma](https://news.ycombinator.com/user?id=ninegamma) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50366168) |
| **Posted** | Wed, 04 Nov 2026 14:40:36 GMT |

## Link
https://ninegamma.com/blog/stateful-hot-reload/

## Article Preview
Hot-Reloading Stateful WebAssembly at 10 Mpps Without Dropping Packets · NineGamma Hot-Reloading Stateful WebAssembly at 10 Mpps Without Dropping Packets By Rainer Stademann 2026-11-03 Updating Code While Packets Keep Arriving One advantage of using WebAssembly in networking is that it simplifies the old and complex problem of hot-upgrading of stateful networking code significantly. This article describes how we made this work in Wabrix . Also, we were curious to test the performance limits of this approach: Can this approach sustain 10 Mpps per core? A network policy update has two continuity requirements: packets must keep moving, and the new code must pick up the state left by the old code. Losing a sequence counter is enough to corrupt loss measurements. Losing a connection table can break thousands of established sessions even when the packet queues stay intact. During a reload, we prepare a new replacement instance of a WebAssembly (WASM) component while keeping the worker with i

---
_Auto-generated · Wed, 04 Nov 2026 14:42:29 GMT_
