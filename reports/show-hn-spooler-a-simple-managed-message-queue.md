# Show HN: Spooler – a simple, managed message queue

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [gobwas](https://news.ycombinator.com/user?id=gobwas) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50359936) |
| **Posted** | Wed, 04 Nov 2026 00:02:30 GMT |

## Link
https://spooler.sh/

## Article Preview
Spooler | A simple message queue About Docs Pricing Sign in Start free trial Read the docs A message queue that moves out of your way Spooler is a simple, fully managed message queue. So you can build your next big thing. Read the docs Start free trial One two three, loop 1 Send message 1 Send message 2 Receive message 3 Ack the message 0:curl 1:CLI 2:Go Send message # The body is the message: bytes in, bytes out, no envelope. # 201 means stored; the queue &quot;orders&quot; was created beforehand. $ curl -si -X POST &quot;$SPOOLER_API/spools/default/queues/orders/send&quot; \ > -H &quot;Authorization: Bearer $SPOOLER_KEY&quot; \ > --data-binary 'hello, spooler!' HTTP/1.1 201 Created Spooler-Message-Id : 1-1 Date : Wed, 21 Oct 2026 18:19:16 GMT Content-Length : 0 $ # The body is the message: bytes in, bytes out, no envelope. # 201 means stored; the queue &quot;orders&quot; was created beforehand. $ curl -si -X POST &quot;$SPOOLER_API/spools/default/queues/orders/send&quot; \ > -H &quot

---
_Auto-generated · Wed, 04 Nov 2026 00:12:20 GMT_
