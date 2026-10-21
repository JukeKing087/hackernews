# Correcting a 2400 dpi A3 Scanner in Software

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [dezgeg](https://news.ycombinator.com/user?id=dezgeg) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50178581) |
| **Posted** | Wed, 21 Oct 2026 10:26:18 GMT |

## Link
https://www.pagetable.com/302

## Article Preview
Correcting a 2400 dpi A3 Scanner in Software &#8211; pagetable.com Skip to content pagetable.com Some Assembly Required Menu Menu About Correcting a 2400 dpi A3 Scanner in Software 2026-10-17 by Michael Steil The VIISAN VF3240 is a 2400 dpi A3 flatbed scanner, sold under several names for a few hundred euros. Above 600 dpi, every scan has three defects, coming from the LEDs, from the motor, and from the sensor. vf3240 is an open source driver that talks to the scanner directly over USB and removes them. This article is about the three defects and how they are corrected. The device There is a sensor bar under the glass, a little wider than the bed. It is made of 18 chips side by side, with 1728 pixels each, 31104 pixels in all. 1 Three LEDs, red, green and blue, are flashed one after the other for every line, so a color line is three exposures. A stepper motor pulls the bar along the bed. An ASIC buffers the lines and sends them over USB, at up to about 8.5&nbsp;MB/s. A full bed at 8 bi

---
_Auto-generated · Wed, 21 Oct 2026 10:28:52 GMT_
