# How PyTorch's autograd works, rebuilt in 60 lines of Python

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [ariaomarzadapar](https://news.ycombinator.com/user?id=ariaomarzadapar) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50637344) |
| **Posted** | Wed, 25 Nov 2026 01:40:39 GMT |

## Link
https://farid-alexander.github.io/autograd-from-scratch/

## Article Preview
How PyTorch&#x27;s autograd works, rebuilt in 60 lines of Python From The Complete Guide to PyTorch 2 by Farid Rahmani Code on GitHub How PyTorch's autograd works, rebuilt in 60 lines of Python Call loss.backward() and PyTorch fills in .grad for every parameter. It can look like magic, but the mechanism is small. During the forward pass, each operation leaves a note saying how to pass a gradient back through it. backward() follows those notes from the loss back to the parameters. This article builds that mechanism in about 60 lines of plain Python and checks it against PyTorch. It is adapted from Chapter 6 of my book, The Complete Guide to PyTorch 2: From Tensors to Compiled Deep Learning ( Kindle , paperback ). If you know Andrej Karpathy's micrograd , the idea is the same. The difference is that each piece here is named and shaped like PyTorch's own objects, so you can print PyTorch's graph and this one side by side, and every gradient is checked against PyTorch. The code below runs 

---
_Auto-generated · Wed, 25 Nov 2026 01:54:21 GMT_
