# Novel Collision Approximation (2023)

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [vismit2000](https://news.ycombinator.com/user?id=vismit2000) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50654041) |
| **Posted** | Thu, 26 Nov 2026 11:17:14 GMT |

## Link
https://www.friedgil.com/collisions

## Article Preview
Novel Collision Approximation – Gil home [#1393] Created with Sketch. github [#142] Created with Sketch. Gil Novel Collision Approximation Apr 09, 2023 Game engines use state to handle collisions, constantly updating the positions of particles until a collision is detected. This approach is logical for games because graphics are displayed chronologically, but this isn’t necessarily the best system for education-oriented physics simulations, as to get the state for a time far in the future we’d need to simulate all ticks up until that point. Instead, we can use a little bit of math to create a stateless and functional approach to collision simulation. To demonstrate, I use algebra to calculate the range of times when two particles can collide on the x axis, and use these bounds to calculate the specifics of potential collisions. The first step is to isolate t in the following equation, which is the solution for all times two point masses will collide on the x axis given uniform accelera

---
_Auto-generated · Thu, 26 Nov 2026 11:33:20 GMT_
