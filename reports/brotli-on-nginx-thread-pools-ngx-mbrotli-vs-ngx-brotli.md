# Brotli on Nginx thread pools: ngx_mbrotli vs. ngx_brotli

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [Mnwa](https://news.ycombinator.com/user?id=Mnwa) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50193476) |
| **Posted** | Thu, 22 Oct 2026 10:22:17 GMT |

## Link
https://m-compressors.github.io/2026/ngx-mbrotli-thread-pool-benchmarks/

## Article Preview
Brotli on NGINX thread pools: ngx_mbrotli vs ngx_brotli | M-Compressors Skip to content M-Compressors Posts Projects About GitHub Brotli on NGINX thread pools: ngx_mbrotli vs ngx_brotli On-the-fly Brotli blocks the NGINX event loop. ngx_mbrotli on a thread pool against google/ngx_brotli: p99 latency, requests per second, CPU time and memory. Published 22 October 2026 Author Mikhail Panfilov Reading time 13 min Projects ngx_mbrotli 0.4.5 mbrotli 0.5.16 Summary With google/ngx_brotli, each response is compressed inside the NGINX worker’s event loop, so every other request on that worker waits. While large responses were compressed at Brotli levels 6 and 11, the p99 latency of small uncompressed requests rose from 1.9 ms to 17–514 ms. ngx_mbrotli with brotli_thread_pool compresses on NGINX thread pools. In the same test, the p99 of small requests stayed at 1.7–3.3 ms, the same as with no compression. One NGINX worker with a 4-thread pool served 3.8–15 times as many Brotli responses per se

---
_Auto-generated · Thu, 22 Oct 2026 10:31:23 GMT_
