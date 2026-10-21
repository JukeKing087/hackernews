# Qpack amplification attacks against HTTP/3 servers

| Field | Value |
|---|---|
| **Score** | 3 |
| **Author** | [kozika](https://news.ycombinator.com/user?id=kozika) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50188612) |
| **Posted** | Wed, 21 Oct 2026 22:32:45 GMT |

## Link
https://foxio.io/blog/header-accordions-qpack-amplification-attacks-against-http-3-servers

## Article Preview
Header Accordions: QPACK amplification attacks against HTTP/3 servers - FoxIO | Cyber Innovation ')"> Home About JA4+ JA4DB Intel Blog Code Merch Contact ')"> Header Accordions: QPACK amplification attacks against HTTP/3 servers Sébastien Féry Oct 20, 2026 TLDR A remote, unauthenticated client can force an HTTP/3 server to allocate tens to thousands of times more memory than it sends. One connection is enough to OOM or pin a default-configured server. Seven of the ten implementations tested are vulnerable; several are already fixed. QPACK compresses HTTP/3 headers to minimize traffic sent over the wire. Across the affected implementations, decoded-header limits are missing, incomplete, or applied too late. A small HEADERS frame can therefore expand into hundreds of thousands of header objects in memory. Preventing that expansion from exhausting resources requires enforcing a cumulative budget as fields are decoded and retained. Patched as of October 20, 2026 Library Fixed version Advis

---
_Auto-generated · Wed, 21 Oct 2026 22:38:11 GMT_
