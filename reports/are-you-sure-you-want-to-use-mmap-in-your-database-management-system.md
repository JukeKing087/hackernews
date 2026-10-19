# Are You Sure You Want to Use MMAP in Your Database Management System?

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [b-man](https://news.ycombinator.com/user?id=b-man) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50156251) |
| **Posted** | Mon, 19 Oct 2026 18:44:50 GMT |

## Link
https://db.cs.cmu.edu/mmap-cidr2022/

## Article Preview
Are You Sure You Want to Use MMAP in Your Database Management System? (CIDR 2022) Are You Sure You Want to Use MMAP in Your Database Management System? Andrew Crotty Carnegie Mellon University Viktor Leis Friedrich-Alexander-Universität Andy Pavlo Carnegie Mellon University Memory-mapped ( MMAP ) file I/O is an OS-provided feature that maps the contents of a file on secondary storage into a program&#8217;s address space. The program then accesses pages via pointers as if the file resided entirely in memory. The OS transparently loads pages only when the program references them and automatically evicts pages if memory fills up. MMAP &#8216;s perceived ease of use has seduced database management system (DBMS) developers for decades as a viable alternative to implementing a buffer pool. There are, however, severe correctness and performance issues with MMAP that are not immediately apparent. Such problems make it difficult, if not impossible, to use MMAP correctly and efficiently in a mod

---
_Auto-generated · Mon, 19 Oct 2026 18:50:09 GMT_
