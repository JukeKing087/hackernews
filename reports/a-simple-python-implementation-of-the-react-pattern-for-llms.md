# A simple Python implementation of the ReAct pattern for LLMs

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [auraham](https://news.ycombinator.com/user?id=auraham) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50447258) |
| **Posted** | Tue, 10 Nov 2026 22:33:34 GMT |

## Link
https://til.simonwillison.net/llms/python-react-pattern

## Article Preview
A simple Python implementation of the ReAct pattern for LLMs | Simon Willison’s TILs Simon Willison's TILs My blog A simple Python implementation of the ReAct pattern for LLMs A popular nightmare scenario for AI is giving it access to tools, so it can make API calls and execute its own code and generally break free of the constraints of its initial environment. Let's do that now! The ReAct pattern (for Reason+Act) is described in this paper . It's a pattern where you implement additional actions that an LLM can take - searching Wikipedia or running calculations for example - and then teach it how to request that those actions are run, then feed their results back into the LLM. See also my post Could you train a ChatGPT-beating model for $85,000 and run it in a browser? . Matt Webb wrote a great piece about that here: The surprising ease and effectiveness of AI in a loop . In it Matt points out that the 1/10 price reduction on ChatGPT compared to GPT-3 makes it an ideal candidate for ch

---
_Auto-generated · Tue, 10 Nov 2026 22:38:09 GMT_
