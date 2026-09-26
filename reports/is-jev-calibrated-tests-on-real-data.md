# Is Jev calibrated? Tests on real data

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [cannedbread](https://news.ycombinator.com/user?id=cannedbread) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49858564) |
| **Posted** | Sat, 26 Sep 2026 17:15:38 GMT |

## Link
https://leonardgrazian.com/blog/jev-calibration/

## Article Preview
Is Jev Calibrated? | Leonard Grazian Home Contact September 26, 2026 Is Jev Calibrated? Jev answers a yes/no question about a text with a probability. A model is calibrated when these probabilities match reality. A recent post, “Jev can’t be calibrated” , claimed that Jev can’t be calibrated on every dataset. I tested that on 2 wildly different real datasets and found Jev is approximately calibrated on both. To accomplish this, I tuned a Jev prompt for each dataset, scored a held-out test set, and compared each score with the real outcome. This post describes the datasets, the method, and the results. The datasets Word-in-Context (WiC) Each example is a target word and two sentences. The task is to decide if the word has the same meaning in both sentences. For example, the dataset labels “degree” in “He earned his degree at Princeton” and “Water boils at 100 degrees Celsius” as two different meanings. This is a difficult NLP problem. The tuned prompt gets 79.97% accuracy on the test se

---
_Auto-generated · Sat, 26 Sep 2026 17:25:15 GMT_
