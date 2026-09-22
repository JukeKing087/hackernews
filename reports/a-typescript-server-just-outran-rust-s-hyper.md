# A TypeScript Server Just Outran Rust's Hyper

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [k3030](https://news.ycombinator.com/user?id=k3030) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49797267) |
| **Posted** | Tue, 22 Sep 2026 05:55:33 GMT |

## Link
https://geastack.com/blog-typescript-server-outran-hyper

## Article Preview
A TypeScript Server Just Outran Rust's hyper — GEA Blog Skip to content Executive summary Examples Docs Blog Services Contact Executive summary Examples Docs Blog Services Contact ← Blog Engineering A TypeScript Server Just Outran Rust's hyper Plain node:http , compiled to machine code: 313,000 requests per second on four cores, 14% ahead of hyper, 39% ahead of axum, 4.1× Node — in 4.3 MB of memory, from a 6 ms cold start. Armağan Amcalar · Sep 21, 2026 · updated Sep 22, 2026 · 10 min read GET / · REQ/S · 4 WORKERS · SAME BYTES ON THE WIRE epoll (C++) 365k gea · TypeScript 313k hyper (Rust) 274k Drogon (C++) 243k axum (Rust) 225k gea · Hono 150k Node.js 77k Node.js · Hono 41k This is the whole server. It is the TypeScript you would write for Node, and it runs under Node unchanged: import { createServer } from 'node:http' const server = createServer ((req, res) =&gt; { if (req.url === '/json' ) { res. writeHead ( 200 , { 'content-type' : 'application/json; charset=utf-8' }) res. end ( '

---
_Auto-generated · Tue, 22 Sep 2026 06:07:02 GMT_
