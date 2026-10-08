# AXI Stream is broken (2022)

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [RicoElectrico](https://news.ycombinator.com/user?id=RicoElectrico) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50003990) |
| **Posted** | Thu, 08 Oct 2026 10:14:03 GMT |

## Link
https://zipcpu.com/blog/2022/02/23/axis-abort.html

## Article Preview
AXI Stream is broken Main/Blog About Us FPGA Hell Tutorial Formal training Quizzes Projects Site Index @zipcpu Reddit Support AXI Stream is broken Feb 23, 2022 There, I said it. One of the simplest and most useful AXI protocols, AXI Stream , is fundamentally flawed. Let’s quickly review AXI Stream, and then I’ll tell you what I mean by saying the protocol is broken. Then I’ll propose a method of fixing at least part of the problem. What is AXI Stream? We’ve discussed AXI Stream s a couple of times on this blog already, most recently when discussing the basic AXI handshaking rules . As a quick background, AXI Stream is a protocol that can be useful for transferring stream data around within a chip. Unlike memory data, there’s no address associated with stream data–it’s just a stream of information. Fig 1. AXI stream signals But how fast shall the stream run? As fast as it can be produced, or as fast as it can be consumed? This is determined by a pair of values: TVALID , indicating that 

---
_Auto-generated · Thu, 08 Oct 2026 10:19:14 GMT_
