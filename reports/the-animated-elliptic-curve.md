# The Animated Elliptic Curve

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [pedropiin](https://news.ycombinator.com/user?id=pedropiin) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49850076) |
| **Posted** | Fri, 25 Sep 2026 21:19:29 GMT |

## Link
https://curves.xargs.org/

## Article Preview
The Animated Elliptic Curve The Animated Elliptic Curve Visualizing Elliptic Curve Cryptography Every TLS 1.3 session starts with a key exchange made via an elliptic curve. The most popular curve is Curve25519, and the exchange involves adding a "base point" P to itself over and over again: Curve25519 point addition We're looking at the heart of TLS 1.3 key exchange, but what's going on? Let's break it down into simple parts. Adding points on a curve The elliptic curves we're going to use are in this form: `y^2 = x^3 + Ax + B` Examples of elliptic curves Let's define point addition : a way to combine two points on an elliptic curve to yield a third point (also on the curve). Point addition: draw a line between the two points (or if you're adding a point to itself, make a line tangent to the curve at that point), find where that line intersects the curve, and finally negate the y-value of that point. Repeated addition of a point P Point addition has two useful properties which we'll nee

---
_Auto-generated · Fri, 25 Sep 2026 21:30:19 GMT_
