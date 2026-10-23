# Curled Noise

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [ibobev](https://news.ycombinator.com/user?id=ibobev) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50210472) |
| **Posted** | Fri, 23 Oct 2026 15:15:39 GMT |

## Link
https://catlikecoding.com/godot/procedural-gpu-patterns/10-curled-noise/

## Article Preview
Curled Noise - Procedural GPU Patterns Curled Noise Value noise warped with curl noise. This is the tenth Godot tutorial in a series that covers the creation of procedural patterns on the GPU with shaders, using the Godot Engine , version 4.7. It follows Tiling Noise and adds UV warping to it. Warping U coordinates Aside from some experimenting we've mostly kept our UV coordinate system constant. It's a square for the plane and a rectangle around the torus. We use the bumpiness configuration option to scale the derivatives so they better match the surface, and that's it. This time we're going to warp the UV coordinates and thus the pattern that gets generated with them. We start with some simple modifications and end up with curl noise. Our starting point is the plane with a single octave of value noise, at frequency 8, with adaptive fractal scale enabled. Displacement is set to 1, but vertex displacement is disabled so we can get a clear look at the pattern. Original unwarped coordina

---
_Auto-generated · Fri, 23 Oct 2026 15:16:24 GMT_
