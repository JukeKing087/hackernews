# How RC2's π table was made

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [KhalidH](https://news.ycombinator.com/user?id=KhalidH) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50146286) |
| **Posted** | Sun, 18 Oct 2026 22:48:07 GMT |

## Link
https://khalidhamadeh.com/writing/rc2-pi-table

## Article Preview
How RC2’s π table was made (PITABLE, RFC 2268) | Khalid Hamadeh Khalid Hamadeh Writing Projects Contact Research note · Cryptography How RC2’s π table was made The 256 numbers in the key schedule of Ron Rivest’s RC2 cipher were said to come from π, but the method was never published. A card shuffle that uses π’s digits as dice reproduces both of RC2’s tables exactly. Khalid Hamadeh 18 October 2026 Code: github.com/khalid-hamadeh/rc2-pi-tables Summary RFC 2268 says the 256-byte table PITABLE in RC2’s key schedule is “based on the digits of PI”, but gives no method, and a second table in the same document is given no origin at all. Both are reproduced exactly by the Fisher–Yates shuffle, using the decimal digits of π as its source of randomness: each draw reads exactly three digits, and draws that would bias the result are discarded. PITABLE starts at the leading 3; the second table starts four digits later. Rivest’s MD2 hash uses the same shuffle but reads a varying number of digits per

---
_Auto-generated · Sun, 18 Oct 2026 23:00:57 GMT_
