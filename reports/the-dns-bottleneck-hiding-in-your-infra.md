# The DNS Bottleneck Hiding in Your Infra

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [mooreds](https://news.ycombinator.com/user?id=mooreds) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49997674) |
| **Posted** | Wed, 07 Oct 2026 19:29:58 GMT |

## Link
https://newsletter.masterpoint.io/p/the-dns-bottleneck-hiding-in-your-infra

## Article Preview
The DNS Bottleneck Hiding In Your Infra IaC Insights Login Subscribe 0 IaC Insights Posts The DNS Bottleneck Hiding In Your Infra The DNS Bottleneck Hiding In Your Infra If your Terraform or OpenTofu plans feel mysteriously slow on AWS, the culprit might be how you handle DNS records. It's easy to miss. Matt Gowie October 06, 2026 Hey folks, If you are using AWS and your Terraform/OpenTofu plans feel mysteriously slow, go look at how you're managing your DNS records. This bit one of our clients and it's really easy to miss. The issue: Most teams throw their Route 53 record resources right in alongside the rest of their infra; this feels natural. But AWS puts a hard 5 requests/second limit on the Route 53 API for record requests. Once you've got Terraform doing data lookups across a bunch of hosted zones, you blow right through it. Plans that should take seconds sit there grinding on the rate-limit backoff, and you're then multiplying that slowdown across every run. We hit this with our

---
_Auto-generated · Wed, 07 Oct 2026 19:35:48 GMT_
