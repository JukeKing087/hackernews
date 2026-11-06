# Scriptable GeoDNS: Leaving AWS for Bunny

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [sshah03](https://news.ycombinator.com/user?id=sshah03) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50394292) |
| **Posted** | Fri, 06 Nov 2026 16:15:03 GMT |

## Link
https://vincent.bernat.ch/en/blog/2026-bunny-geodns

## Article Preview
Scriptable GeoDNS: leaving AWS for Bunny Scriptable GeoDNS: leaving AWS for Bunny Vincent Bernat November 6, 2026 9-minute read Also available in français Filed under web network To op­ti­mize the per­for­mance met­rics of this blog, I re­lied on Ama­zon CloudFront to serve the as­sets, 1 and Route 53 for the geo-aware DNS 2 to di­rect read­ers to the clos­est host serv­ing the con­tent. But Route 53 is ex­pen­sive: US$0.50 per zone per month, US$0.70 per mil­lion ge­olo­ca­tion queries, and US$0.75 per healthcheck per month [1] , plus US$1 per month for the KMS key [2] needed to sign zones with DNSSEC. When I dis­cov­ered that Bunny DNS is al­most free [3] for up to 500 do­mains and fea­tures script­able an­swers, I made the jump! Plus, it’s a Eu­ro­pean com­pany based in Slovenia. 1 I had been host­ing me­dia as­sets on CloudFront since 2011. ❦ 2 Route 53 had served bernat.ch since De­cem­ber 2021. I didn’t use healthchecks as they were too ex­pen­sive. I didn’t host most of my zones

---
_Auto-generated · Fri, 06 Nov 2026 16:20:40 GMT_
