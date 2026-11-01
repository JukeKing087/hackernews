# Write eBPF programs in pure Python

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [varunrmallya](https://news.ycombinator.com/user?id=varunrmallya) |
| **Comments** | [1](https://news.ycombinator.com/item?id=50327886) |
| **Posted** | Sun, 01 Nov 2026 17:52:07 GMT |

## Link
https://pythonbpf.github.io/

## Article Preview
PythonBPF Write eBPF programs in Python. Playground Docs Talks Authors GitHub PyPI PythonBPF is a compiler for eBPF programs. You write the kernel side as ordinary Python functions with a few decorators, and it emits LLVM IR (via llvmlite ) and then a BPF object file. There is no C, and it doesn't use BCC. pylibbpf loads and attaches the result, so the whole thing can live in one script. The example here prints a line every time something calls execve . Maps, structs, helpers, loops and calls between functions all work. There are still gaps, so bug reports are welcome. from pythonbpf import bpf, section, bpfglobal, BPF, trace_pipe from ctypes import c_void_p, c_int64 @bpf @section ( "tracepoint/syscalls/sys_enter_execve" ) def hello_world (ctx: c_void_p) -&gt; c_int64: print ( "Hello, World!" ) return 0 @bpf @bpfglobal def LICENSE () -&gt; str : return "GPL" b = BPF() b.load() b.attach_all() trace_pipe() $ pip install pythonbpf pylibbpf $ sudo python3 hello_world.py Try it pythonbpf.xe

---
_Auto-generated · Sun, 01 Nov 2026 17:54:17 GMT_
