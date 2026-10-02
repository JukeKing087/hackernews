# Writing Small CLI Programs in Common Lisp

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [birdculture](https://news.ycombinator.com/user?id=birdculture) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49934118) |
| **Posted** | Fri, 02 Oct 2026 14:47:19 GMT |

## Link
https://stevelosh.com/blog/2021/03/small-common-lisp-cli-programs/

## Article Preview
Writing Small CLI Programs in Common Lisp / Steve Losh Steve Losh Blog - Projects - Photography - Links - Feed Writing Small CLI Programs in Common Lisp Posted on March 17th, 2021. I write a lot of command-line programs. For tiny programs I usually go with the typical UNIX approach: throw together a half-assed shell script and move on. For large programs I make a full Common Lisp project, with an ASDF system definition and such. But there's a middle ground of small ish programs that don't warrant a full repository on their own, but for which I still want a real interface with proper --help and error handling. I've found Common Lisp to be a good language for writing these small command line programs. But it can be a little intimidating to get started (especially for beginners) because Common Lisp is a very flexible language and doesn't lock you into one way of working. In this post I'll describe how I write small, stand-alone command line programs in Common Lisp. It might work for you, 

---
_Auto-generated · Fri, 02 Oct 2026 14:52:42 GMT_
