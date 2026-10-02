# Shell into a remote environment before downloading it

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [andreygrehov](https://news.ycombinator.com/user?id=andreygrehov) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49934167) |
| **Posted** | Fri, 02 Oct 2026 14:51:46 GMT |

## Link
https://getrange.sh/

## Article Preview
Range: use a remote environment before downloading it R ange Use a remote environment before downloading it. ~/range Name About README.md What Range is demo.txt A chat, and a 1 TB model bench.log Against docker pull problem.txt What you wait for today design.txt How it works install.txt Get it running about_me.txt Who made it Pick a file here. It opens in the pane on the right. README.md README.md Use a remote environment before downloading it. Range opens a shell in a container image, a Hugging Face repository, or an environment in S3 or on any HTTP server, without downloading it first. Only the bytes your program reads cross the network. $ range shell python:3.12 $ range shell python:3.12 --mount hf://moonshotai/Kimi-K2-Instruct:/model $ range shell s3://&lt;your-bucket&gt;/dev.range 2.8 s to run Python in python:3.12 48 MB moved, of a 435 MB image 9.5 MB read, of a 1.03 TB model No Docker, no daemon and no pull. Linux runs it natively. On macOS, Range runs Linux in a small VM that i

---
_Auto-generated · Fri, 02 Oct 2026 14:52:41 GMT_
