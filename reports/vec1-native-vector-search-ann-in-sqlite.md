# Vec1: Native vector search (ANN) in SQLite

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [thunderbong](https://news.ycombinator.com/user?id=thunderbong) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50030011) |
| **Posted** | Sat, 10 Oct 2026 05:52:34 GMT |

## Link
https://sqlite.org/vec1/doc/trunk/doc/vec1.md

## Article Preview
Vec1: Vec1 Vector Extension Vec1 Vec1 Vector Extension Login &#9776; Home Timeline Forum Contents: 1. Overview 2. Building The Extension 3. Usage 4. Roadmap 1. Overview Vec1 is an SQLite extension that provides approximate nearest-neighbor (ANN) vector search using SQLite's virtual table interface. Euclidean (L2) and cosine distances are supported. Vec1 is implemented in portable C and has no external dependencies. It uses AVX2 on x86 and NEON on ARM. Vec1 uses IVFADC (Inverted File with Asymmetric Distance Computation) with OPQ (Optimized Product Quantization). Tests on publicly available datasets are available here . 2. Building the Extension The extension is implemented in a single C file, "vec1.c". The current release is version 0.7 . It may be compiled in the same way as other SQLite extensions . For best performance, compile with SIMD support and aggressive compiler optimizations. For example, on Linux or macOS x86-64 with gcc or clang: cc -g -O3 -DNDEBUG -mavx2 -mfma vec1.c -sha

---
_Auto-generated · Sat, 10 Oct 2026 06:03:42 GMT_
