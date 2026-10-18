# Show HN: Gspot, a tool to lint gstack code

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [dr__stoney](https://news.ycombinator.com/user?id=dr__stoney) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50146332) |
| **Posted** | Sun, 18 Oct 2026 22:54:39 GMT |

## Link
https://generativespotting.com/

## Article Preview
Lint the code your AI agent writes | gspot Skip to content gspot Docs GitHub Lint the code your AI agent writes gspot is a command-line tool that lints AI-generated code and installs rules for AI coding agents. Human Agent Package manager npm pnpm Yarn Bun mise Copy $ npm i -D -E @gspothq/cli $ npx gspot init $ npx gspot install Set up gspot in a repository. Run curl -fsSL https:// generativespotting.com/ llms.txt and follow its steps. Read the docs → Works with these tools ESLint Prettier Ruff Stylelint ShellCheck Semgrep Knip Trivy gspot stops the commit and names each problem An agent added a checkout function to a TypeScript project and made three mistakes. The pre-commit hook found all three. Before: what the agent wrote src/checkout.ts 1 import type { Cart } from &#39;./cart.js&#39; ; 2 import { charge } from &#39;./payments.js&#39; ; 3 Problem 1 4 export async function pay (cart: Cart ) { Problem 1 5 try { Problem 2 6 // eslint-disable-next-line 7 charge (cart.total); Problem 3 

---
_Auto-generated · Sun, 18 Oct 2026 23:00:56 GMT_
