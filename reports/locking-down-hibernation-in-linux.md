# Locking down hibernation in Linux

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [chmaynard](https://news.ycombinator.com/user?id=chmaynard) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50400495) |
| **Posted** | Sat, 07 Nov 2026 00:46:11 GMT |

## Link
https://lwn.net/SubscriberLink/1103190/767ab6f8d00fc0e3/

## Article Preview
Locking down hibernation for the winter [LWN.net] LWN .net News from the source Content Weekly Edition Archives Search Kernel Security Events calendar Unread comments LWN FAQ Write for us User: Password: | | Log in / Subscribe / Register Locking down hibernation for the winter [LWN subscriber-only content] By Daroc Alden November 6, 2026 When a computer hibernates, the kernel writes the contents of memory to disk and then shuts the system down. Resuming from hibernation involves reading that data back into memory, and then having the kernel pick up where it left off. Unfortunately, the kernel does not have any way to know that the data it is reading back has not been tampered with, which is why lockdown , an optional kernel feature that attempts to prevent modifications to the running kernel, disables hibernation. Matthew Garrett, who has been working on lockdown for many years, has shared a patch set that aims to fix this problem. His solution must also protect against downgrade attac

---
_Auto-generated · Sat, 07 Nov 2026 01:10:20 GMT_
