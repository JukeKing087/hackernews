# CliDoc – JSDoc/TSDoc but for command line tools

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [bhouston](https://news.ycombinator.com/user?id=bhouston) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49847829) |
| **Posted** | Fri, 25 Sep 2026 17:54:48 GMT |

## Link
https://clidoc.dev/

## Article Preview
CLI documentation from the source | clidoc Skip to main content clidoc Docs CLI reference Core API GitHub Built upon the OpenCLI specification CLI documentation from the source Generate a CLI document from yargs, Commander.js, or oclif, then publish it with Docusaurus or VitePress. Get started Explore the CLI Built for your CLI framework Use built-in integrations for yargs, Commander.js, and oclif to generate an OpenCLI document from the command definitions you already maintain. Explore the frameworks → yargs Commander.js oclif import { Command } from &#x27;commander&#x27;; import { createDocgenCommand, fromCommander } from &#x27;@clidoc/commander&#x27;; import { infoFromPackageJson } from &#x27;@clidoc/core&#x27;; const info = infoFromPackageJson(pkg); const program = new Command(info.binary); // ...register your commands... const document = () =&gt; fromCommander(program, info); program.addCommand(createDocgenCommand(document)); program.parse(); Publish where your docs live Publishin

---
_Auto-generated · Fri, 25 Sep 2026 18:05:02 GMT_
