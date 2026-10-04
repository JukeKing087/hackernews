# I ported the new Hare compiler to OpenBSD

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [birdculture](https://news.ycombinator.com/user?id=birdculture) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49958958) |
| **Posted** | Sun, 04 Oct 2026 23:19:22 GMT |

## Link
https://briancallahan.net/blog/20220427.html

## Article Preview
I ported the new Hare compiler to OpenBSD - Dr. Brian Robert Callahan Dr. Brian Robert Callahan academic, developer, with an eye towards a brighter techno-social life Home | Blog archives | Consulting | LinkedIn | CV | Code | Extras [prev] [next] 2022-04-27 I ported the new Hare compiler to OpenBSD As soon as I finished writing up the previous blog post , I was made aware of the announcement of a new programming language named Hare . It was pointed out to me that Hare released with Linux and FreeBSD support. We'll just have to port it to OpenBSD . Let's get to work. Compiler and runtime: A language in two parts Hare comes in two repositories: a compiler and a runtime . This blog post will only deal with porting the compiler; we'll port the runtime in a follow-up post. Getting started First I cloned the compiler and copied the rt/+freebsd directory to a new rt/+openbsd directory and did the rote renaming from FreeBSD to OpenBSD in the new directory. Next, I had to modify rt/+openbsd/err

---
_Auto-generated · Sun, 04 Oct 2026 23:22:56 GMT_
