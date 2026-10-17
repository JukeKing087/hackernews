# Arpbleed: A 23-year-old DragonFly BSD kernel memory leak

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [khalidkhair](https://news.ycombinator.com/user?id=khalidkhair) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50126333) |
| **Posted** | Fri, 16 Oct 2026 23:51:40 GMT |

## Link
https://nathan.sapwell.net/posts/cve-2026-110912-arpbleed/

## Article Preview
CVE-2026-110912: Arpbleed | Nathan Sapwell | AI Engineer & Full-Stack Developer Nathan Sapwell Home About Latest Posts Experience Selected Work Github Projects Blog CVE-2026-110912: Arpbleed October 15, 2026 &#183; 13 min read security cve dragonflybsd arp kernel memory-disclosure glm 2026 Table of Contents What ARP asks you to trust The bug How I found it The PoC The leak, verified Why FreeBSD was already immune The fix Resources CVE-2026-110912 is my first published CVE! The fix is merged upstream and the record is live in the database. It lives in a 23-year-old corner of DragonFly BSD. The ARP input path trusts two one-byte length fields from any packet on the wire. Ask for a 200-byte hardware address and the kernel builds its reply with a 200-byte memcpy out of a 6-byte buffer, and sends the excess back to you. Same trick on the protocol length reads straight off the kernel stack. One crafted ARP request on the same L2 segment leaks up to 249 bytes of heap and 251 bytes of stack, k

---
_Auto-generated · Sat, 17 Oct 2026 00:09:08 GMT_
