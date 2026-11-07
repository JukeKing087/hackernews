# How hard could implementing DTLS 1.3 possibly be?

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [Sean-Der](https://news.ycombinator.com/user?id=Sean-Der) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50400502) |
| **Posted** | Sat, 07 Nov 2026 00:47:35 GMT |

## Link
https://joturk.net/posts/dtls

## Article Preview
How hard could implementing DTLS 1.3 possibly be? | Jo Turk jo turk ← all posts How hard could implementing DTLS 1.3 possibly be? Nov 6, 2026 In January 2026, I somehow ended up leading Pion&#39;s DTLS 1.3 implementation and building most of it. It was still mostly an idea at that point, and I didn&#39;t really know how DTLS 1.3 worked. Most of the people who ended up building it with me didn&#39;t either :) Ten months and ~400 commits later, DTLS 1.3 is the default in pion/dtls: a one-round-trip handshake post-quantum key exchange Connection IDs, so your connection survives your phone switching networks 0-RTT resumption Encrypted Client Hello I wanted to write down the lore of how this happened, and also explain DTLS the way I wish someone had explained it to me. So this is both, with interactive demos you can poke and break along the way. Client wants to talk to the server, privately Server wants to know it is really talking to the client Mallory sits on the wire, reads everything, c

---
_Auto-generated · Sat, 07 Nov 2026 01:10:20 GMT_
