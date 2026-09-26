# An agent used DNS to reach an external chatbot

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [apsec112](https://news.ycombinator.com/user?id=apsec112) |
| **Comments** | [1](https://news.ycombinator.com/item?id=49853137) |
| **Posted** | Sat, 26 Sep 2026 04:14:11 GMT |

## Link
https://alignment.openai.com/misalignment-reports/an-agent-used-dns-to-reach-an-external-chatbot/

## Article Preview
An agent used DNS to reach an external chatbot · OpenAI Alignment Skip to content OpenAI Alignment Research Blog ← Home Research and Releases Misalignment Reports and Notices System Cards ↗ On this page Summary What happened Investigation and response An agent used DNS to reach an external chatbot Internal research model · RL training Sample: Sep 20, 2026 Discovery: Sep 20, 2026 Report updated: Sep 25, 2026 Summary An agent attempting to complete a search-based training task queried a public chatbot service through a gap in our internet-access restrictions : insufficient DNS filtering in its training sandbox. Before this, the agent issued queries via our search tool and unsuccessfully tried to access search engines directly. Note that all internet access apart from the DNS resolver in this report hit our offline webcache and therefore did not access the live internet. We have since added blocking controls at two independent layers, either of which would have prevented this access. Our 

---
_Auto-generated · Sat, 26 Sep 2026 04:49:03 GMT_
