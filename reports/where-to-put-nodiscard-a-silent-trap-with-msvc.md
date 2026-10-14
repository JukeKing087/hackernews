# Where to Put [[Nodiscard]]: A Silent Trap with MSVC

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [ibobev](https://news.ycombinator.com/user?id=ibobev) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50095866) |
| **Posted** | Wed, 14 Oct 2026 21:48:51 GMT |

## Link
https://giodicanio.com/2026/10/12/where-to-put-nodiscard-a-silent-trap-with-msvc/

## Article Preview
Where to Put [[nodiscard]]: A Silent Trap with MSVC! &#8211; Giovanni Dicanio&#039;s Blog Skip to content Giovanni Dicanio&#039;s Blog Giovanni Dicanio&#039;s Programming Corner on the Internet Menu Home Contact My Courses on Pluralsight Where to Put [[nodiscard]]: A Silent Trap with&nbsp;MSVC! An example of silent sneaky bug, with MSVC giving a *false* sense of security with [[nodiscard]]. Consider the following C++ code snippet: static &#91;&#91;nodiscard]] int GetSomething() { return 64; } If you invoke this function like this: int main() { GetSomething(); } the code compiles successfully with MSVC! Even at warning level 4 (/W4, which I use on almost all my VC++ projects)! Why am I upset? Because in the above code I do discard the return value of GetSomething(), and even with the [[nodiscard]] attribute applied to the function, and compiling at /W4, the MSVC C++ compiler does not complain. I do want the compiler to complain in this case! 🙂 Dear MSVC C++ compiler, speak up! Say some

---
_Auto-generated · Wed, 14 Oct 2026 21:57:14 GMT_
