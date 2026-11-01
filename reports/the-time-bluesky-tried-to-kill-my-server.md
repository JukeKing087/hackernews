# The time Bluesky tried to kill my server

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [shintoist](https://news.ycombinator.com/user?id=shintoist) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50327832) |
| **Posted** | Sun, 01 Nov 2026 17:47:18 GMT |

## Link
https://jola.dev/posts/the-time-bluesky-tried-to-kill-my-server

## Article Preview
The time Bluesky tried to kill my server | jola.dev jola.dev Home About Blog Newsletter Projects Talks Home About Blog Newsletter Projects Talks The time Bluesky tried to kill my server October 20, 2026 10 min read atproto relay jetstream pds Ok, now that have your attention, it was actually more like “the time that the relays running indigo-relay, a codebase maintained Bluesky, tried to kill my PDS”. Because only some of them are actually operated by Bluesky, there are lots of independent ones running the same codebase! The story So I was minding my own business working on Kite when I suddenly get notifications that my server on Hetzner has been sitting at &gt;95% total CPU usage over the last 10 minutes. I go to Grafana and find this. That’s my postgres instance sending 1GB/s of data internally on the private network. And I quickly spotted the receiver: tranquil PDS, my self-hosted atproto personal data server. A combination of postgres, tranquil, and traefik were pinning my 8 vCPU s

---
_Auto-generated · Sun, 01 Nov 2026 17:54:19 GMT_
