# A Terminal Protocol for Program Status (OSC 7501)

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [mfiguiere](https://news.ycombinator.com/user?id=mfiguiere) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49984159) |
| **Posted** | Tue, 06 Oct 2026 21:08:00 GMT |

## Link
https://mitchellh.com/writing/program-status-osc7501

## Article Preview
A Terminal Protocol for Program Status (OSC 7501) – Mitchell Hashimoto Mitchell Hashimoto About Writing Misc Mitchell Hashimoto A Terminal Protocol for Program Status (OSC 7501) October 6, 2026 I wrote a specification for a new terminal escape sequence: OSC 7501, the Program Status Protocol . It lets any program tell the terminal what it&#x27;s doing: idle, working, waiting on the user, finished, or failed, and why. For example, here is how Terraform could indicate that it is blocked waiting for user input, with the message &quot;Apply 3 to add, 1 to change, 0 to destroy?&quot; (base64-encoded). A terminal (or any other tool running Terraform) could show this information however it feels appropriate: a notification, an inbox, a status icon, etc. ESC ] 7501 ; state=blocked:kind=permission:app=terraform:msg=QXBwbHkgMyB0byBhZGQsIDEgdG8gY2hhbmdlLCAwIHRvIGRlc3Ryb3k/ ESC \ This post covers why I think this protocol needs to exist, why the existing approaches aren&#x27;t good enough (especial

---
_Auto-generated · Tue, 06 Oct 2026 21:17:06 GMT_
