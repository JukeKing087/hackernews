# Image similarity using ORB from OpenCV

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [jonatron](https://news.ycombinator.com/user?id=jonatron) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49883330) |
| **Posted** | Mon, 28 Sep 2026 19:43:55 GMT |

## Link
https://jonatron.github.io/orb_similarity/demo/similarity.html

## Article Preview
ORB descriptor similarity — multi-image demo ORB descriptor similarity Uses cv.ORB from OpenCV.js. Every pair of images is compared: for each descriptor find the Hamming distance of the 256 descriptor bits, computed in a separate wasm module built from src/popcnt.ts . Pairs with the most low-distance matches are the most similar. Load 20 test images descriptors per image 200 max match distance 50 Choose two or more images to compare. Loaded images (keypoints overlaid) Pairwise good matches (dist &le; threshold) Brighter green = more descriptors with a low-distance counterpart. Click a cell to compare that pair. Pair ranking — most similar first Selected pair Pipeline timing

---
_Auto-generated · Mon, 28 Sep 2026 19:49:34 GMT_
