# Only mock your own interfaces

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ykgoon](https://news.ycombinator.com/user?id=ykgoon) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50030021) |
| **Posted** | Sat, 10 Oct 2026 05:54:18 GMT |

## Link
https://henko.net/blog/only-mock-your-own-interfaces/

## Article Preview
Only mock your own interfaces 🦜 &middot; Henrik Jernevad &darr; Skip to main content About Blog More Only mock your own interfaces 🦜 November 19, 2024 #testing #softwaredesign Replacing real dependencies with test doubles 1 is a helpful tool when building unit tests. It allows us to isolate the unit under test from the surrounding parts, and ensure the behavior of that unit. However, some components make it hard to write true unit tests. Usual suspects include databases, remote services, frameworks, and user interfaces. If you include them, you essentially turn the unit test into small integration tests. Because of that, it can be tempting to mock such components. To replace that database or backend service with a mock, to verify the behavior of the code that calls them. But from my experience, that is a dangerous route to take. Don&rsquo;t mock what you don&rsquo;t own # Mocks encode our assumptions, which might differ from reality. When you replace a real component with a fake one,

---
_Auto-generated · Sat, 10 Oct 2026 06:03:41 GMT_
