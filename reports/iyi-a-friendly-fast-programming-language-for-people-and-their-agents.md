# Iyi: A friendly, fast programming language for people and their agents

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ksec](https://news.ycombinator.com/user?id=ksec) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50610050) |
| **Posted** | Mon, 23 Nov 2026 10:54:52 GMT |

## Link
https://iyi.dev/

## Article Preview
iyi: the programming language for people and their agents Skip to content iyi Why iyi Learn Reference Agents Playground Blog Install Packages GitHub Switch the color scheme A friendly, fast programming language for people and their agents. iyi is a compiled programming language written for two readers: the person editing the code and the agent editing it beside them. One rule serves both. A module builds against its dependencies' declarations, never their bodies, so: a build reads less a program carries less a model reads an interface instead of a repository Install 0.22.0 Try it in the browser What 0.22.0 changed → one line changed in one of 30 modules 7,207 lines real speed · fastest of 3 sessions Replay app/greeter.iyi module app/greeter pub def polite(name : String) : String "Dear #&#123;name&#125;, welcome." ▍ end declaration · what consumers read · unchanged body · the edit $ build Same compiler, Crystal&#39;s rules reads every body again 1.17 s built iyi reads 29 declarations, 1

---
_Auto-generated · Mon, 23 Nov 2026 11:05:45 GMT_
