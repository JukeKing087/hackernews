# Coming from Ansible to Conn3x

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [jamesconwaydev](https://news.ycombinator.com/user?id=jamesconwaydev) |
| **Comments** | [1](https://news.ycombinator.com/item?id=50249494) |
| **Posted** | Mon, 26 Oct 2026 19:21:31 GMT |

## Link
https://conn3x.org/blog/coming-from-ansible

## Article Preview
Coming from Ansible Skip to content Blog Docs GitHub Blog , 25 October 2026 · James Conway Coming from Ansible If you write Ansible, you already think the way Conn3x does. Hosts, tasks that run in order, handlers that fire when something changed. None of that goes away. What changes is where it lives and what you get back before anything runs. This is the first of three short posts, one for each of the readers from Why Conn3x is one tool . This one is for you if your playbooks came first. What carries over A play becomes a circuit. Its hosts become a map of names to addresses, its tasks become steps, and its handlers stay handlers: Ansible Conn3x play, hosts: and inventory circuit , hosts = { ... } task step , in the same order notify: and handlers notify = [handler.NAME] and handler become: true become = true in the ssh block loop: [a, b] with {{ item }} for_each = ["a", "b"] with item.value --check --diff conn3x plan , every time Jinja templates templatefile syntax in a template step

---
_Auto-generated · Mon, 26 Oct 2026 19:28:23 GMT_
