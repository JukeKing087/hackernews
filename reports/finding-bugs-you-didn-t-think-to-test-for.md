# Finding bugs you didn't think to test for

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [wh33zle](https://news.ycombinator.com/user?id=wh33zle) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49839546) |
| **Posted** | Fri, 25 Sep 2026 02:29:58 GMT |

## Link
https://www.firezone.dev/blog/finding-bugs-you-didnt-think-to-test-for

## Article Preview
Finding bugs you didn’t think to test for | Firezone Blog Open main menu Product Docs Pricing Blog Support Book a demo Admin portal Book a demo Thomas Eizinger September 25, 2026 Finding bugs you didn’t think to test for Coverage-guided fuzzing meets deterministic simulation testing We&#x27;ve all been there. A support ticket comes in from a customer, stating that the product isn&#x27;t working. Apparently, the connection hangs and they can&#x27;t access the dashboard. You think: &quot;That is odd, we have a test for exactly that and it doesn&#x27;t happen for me.&quot; You dive into the logs and ping emails back and forth with the customer. After two hours of debugging, it turns out that a seemingly unrelated configuration option on the customer&#x27;s machine broke things in an unexpected way. You go and modify the existing test and, sure enough, it now fails. Despite knowing that this isn&#x27;t going to scale in the long run, you add a nearly identical copy of the test and commit i

---
_Auto-generated · Fri, 25 Sep 2026 02:37:07 GMT_
