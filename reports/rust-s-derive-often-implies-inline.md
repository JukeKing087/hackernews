# Rust's derive often implies inline

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [woodruffw](https://news.ycombinator.com/user?id=woodruffw) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49949680) |
| **Posted** | Sun, 04 Oct 2026 01:27:02 GMT |

## Link
https://yossarian.net/til/post/rust-s-derive-often-implies-inline/

## Article Preview
TIL: Rust&#x27;s derive often implies inline All TILs Homepage Blog Rust&#x27;s derive often implies inline 2026-10-03 rust In Rust, one of the most common ways to implement core traits (like Debug , Display , and Clone ) is to #[derive(...)] them, e.g.: # [ derive ( Debug ) ] struct Widgets { foo : u32 , bar : usize , } What I didn't know until recently is that Rust currently emits #[inline] as part of these derivations. This is seemingly not guaranteed, but is implied by example in the reference and can also be seen if one expands the macros. Using the example above, this is what you get when you expand the #[derive(Debug)] in the playground : struct Widgets { foo : u32 , bar : usize , } # [ automatically_derived ] impl :: core :: fmt :: Debug for Widgets { # [ inline ] fn fmt ( &amp; self , f : &amp; mut :: core :: fmt :: Formatter ) -&gt; :: core :: fmt :: Result { :: core :: fmt :: Formatter :: debug_struct_field2_finish ( f , &quot; Widgets &quot; , &quot; foo &quot; , &amp; self

---
_Auto-generated · Sun, 04 Oct 2026 01:42:16 GMT_
