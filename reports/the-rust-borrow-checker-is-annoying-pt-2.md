# The Rust borrow checker is annoying, Pt. 2

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [Frotag](https://news.ycombinator.com/user?id=Frotag) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50189663) |
| **Posted** | Thu, 22 Oct 2026 00:47:42 GMT |

## Link
https://runa.yshui.dev/lifetime-p2.html

## Article Preview
Lifetime woes Pt.2 - The Adventure of Creating a Wayland Compositor Toolbox in Rust Introduction 1. Overview 2. I/O 3. Lifetime & variance woes Pt.1 4. Lifetime woes Pt.2 5. Variance woes Pt.1 6. Serialization & deserialization 7. Object storage 8. Events Project udpates 9. Jan 2023 Light (default) Rust Coal Navy Ayu The Adventure of Creating a Wayland Compositor Toolbox in Rust The Rust borrow checker is annoying, Pt. 2 OK, quick wayland primer. One of the central concepts in wayland is object. Each client connected to the wayland server has a set of objects bound to it. Client can invoke functions on those objects by sending a message to server with the right object ID. Let's have a look at how we might implement this in Rust. First of all, a set of objects indexed via their object IDs, seems easy: #![allow(unused)] fn main() { let objects: HashMap&lt;u32, Object&gt; = HashMap::new(); } Now let's handle the messages: #![allow(unused)] fn main() { let object_id = get_message_object_id

---
_Auto-generated · Thu, 22 Oct 2026 00:52:42 GMT_
