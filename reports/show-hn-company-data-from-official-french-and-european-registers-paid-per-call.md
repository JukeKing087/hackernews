# Show HN: Company data from official French and European registers, paid per call

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [sirenic](https://news.ycombinator.com/user?id=sirenic) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50259044) |
| **Posted** | Tue, 27 Oct 2026 13:33:07 GMT |

## Link
https://api.sirenic.eu/en

## Article Preview
Company data API, France and Europe: KYB, sanctions | Sirenic sirenic Pricing Guides API reference Connectors Workflows FR Account Official data · France and Europe Check a European company in one call, against the official registers. Registry, officers, filed accounts, default score, sanctions. For developers, compliance teams and AI agents. Paid per call, no subscription. Every response is signed and sourced. Create an account · 150 free calls/month Try the search Errors are never charged Ed25519-signed No key for agents api.sirenic.eu · 402 flow from $0.002 to $1 # a call without payment gets a quote curl -i https://api.sirenic.eu/v1/entreprise/552032534 HTTP/2 402 Payment Required payment-required: x402Version 2 · eip155:8453 · USDC · 0.005 # the agent signs the payment and retries HTTP/2 200 OK x-sirenic-signature: Ed25519 { "denomination" : "DANONE" , "etat_administratif" : "actif" , … } 20 countries served, one response shape 129 priced routes · 120 MCP tools 30.1M French legal 

---
_Auto-generated · Tue, 27 Oct 2026 13:37:00 GMT_
