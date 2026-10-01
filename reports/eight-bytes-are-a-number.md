# Eight Bytes Are a Number

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [sebastianconcpt](https://news.ycombinator.com/user?id=sebastianconcpt) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49921532) |
| **Posted** | Thu, 01 Oct 2026 13:38:20 GMT |

## Link
https://blog.sebastiansastre.co/posts/eight-bytes-are-already-a-number/

## Article Preview
Eight Bytes Are Already a Number | Selective Creativity Selective Creativity Conceptual Stream by Sebastian Sastre Subscribe Search Tags Archives Eight Bytes Are Already a Number You needed a function to read a number, or a type. It also built a place to keep the bytes? That was not free. September 30, 2026 When you need to parse data for downstream processing, the enthusiasm to get the processing outcome quickly might induce you to overlook one interesting nuance: the cost of how it&rsquo;s parsed. See this &ldquo;parse me a u64 &rdquo; function for example: fn parse_id ( bytes : &amp; [ u8 ]) -&gt; Result &lt; u64 , ParserError &gt; { if bytes . len () &lt; 8 { return Err ( ParserError :: InputTooShortForU64 ); } let owned = bytes [ .. 8 ]. to_vec (); Ok ( u64 :: from_le_bytes ( owned . try_into (). map_err ( ParserError :: InvalidU64 ) ? )) } It checks the length, copies the right number of bytes from the slice into a Vec and parses those as a u64 . Returns adequate Err s for produc

---
_Auto-generated · Thu, 01 Oct 2026 13:38:58 GMT_
