# I let Claude review the C code I wrote as a math intern in 2013

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [MathLab](https://news.ycombinator.com/user?id=MathLab) |
| **Comments** | [1](https://news.ycombinator.com/item?id=50210297) |
| **Posted** | Fri, 23 Oct 2026 15:05:53 GMT |

## Link
https://mitsudomoe.github.io/Kinetic-Solver/

## Article Preview
Kinetic-Solver Skip to content Kinetic-Solver Home Initializing search mitsudomoe/Kinetic-Solver Kinetic-Solver mitsudomoe/Kinetic-Solver Home Home Table of contents In thirty seconds Where to go next Status Getting started Theory Implementation Validation Contributing References Table of contents In thirty seconds Where to go next Status Kinetic-Solver &para; A finite volume solver for the one-dimensional Saint-Venant (shallow water) system with topography , built around the kinetic scheme with reflections of B. Perthame and C. Simeoni (Calcolo, 2001). \[ \partial_t h + \partial_x (hu) = 0, \qquad \partial_t (hu) + \partial_x\!\left(hu^2 + \tfrac{g}{2}h^2\right) = -g\,h\,\partial_x Z . \] The scheme treats the bottom \(Z\) as a potential barrier for fictitious particles: particles cross a step when they have enough kinetic energy and are reflected otherwise. This gives a finite volume method that keeps the water height non-negative , dry areas included; preserves the lake at rest ( \(

---
_Auto-generated · Fri, 23 Oct 2026 15:16:27 GMT_
