# 35% Faster Than the Filesystem

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [prakashqwerty](https://news.ycombinator.com/user?id=prakashqwerty) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50348179) |
| **Posted** | Tue, 03 Nov 2026 04:44:30 GMT |

## Link
https://www.sqlite.org/fasterthanfs.html

## Article Preview
35% Faster Than The Filesystem Small. Fast. Reliable. Choose any three. Home Menu About Documentation Download License Support Purchase Search About Documentation Download Support Purchase Search Documentation Search Changelog 35% Faster Than The Filesystem Table Of Contents 1. Summary 1.1. Caveats 1.2. Related Studies 2. How These Measurements Are Made 2.1. Read Performance Measurements 2.2. Write Performance Measurements 2.3. Variations 3. General Findings 4. Additional Notes 4.1. Compiling And Testing on Android 1. Summary SQLite reads and writes small blobs (for example, thumbnail images) 35% faster&sup1; than the same blobs can be read from or written to individual files on disk using fread() or fwrite(). Furthermore, a single SQLite database holding 10-kilobyte blobs uses about 20% less disk space than storing the blobs in individual files. The performance difference arises (we believe) because when working from an SQLite database, the open() and close() system calls are invoked 

---
_Auto-generated · Tue, 03 Nov 2026 04:53:49 GMT_
