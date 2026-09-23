# Shipping local speech-to-text inside a Tauri app

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [aavshr](https://news.ycombinator.com/user?id=aavshr) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49824356) |
| **Posted** | Wed, 23 Sep 2026 23:56:57 GMT |

## Link
https://writewithset.com/blog/shipping-local-speech-to-text-inside-a-tauri-app

## Article Preview
Shipping local speech-to-text inside a Tauri app · Set blog Write with Set / Blog Shipping local speech-to-text inside a Tauri app September 24, 2026 This post was written in Set , an open source Markdown notes app. Download · Try it · GitHub Set is a fully offline notes app that keeps every page as a Markdown file on your own disk. It also has local dictation as an opt-in feature. The speech recognition runs on device, using OpenAI's Whisper model through whisper.cpp . Set ships the 5-bit quantized version of Whisper small, a 190 MB download. On 1,000 LibriSpeech clips (almost 20,000 words), it got 3.9% of words wrong on clean speech and 10.2% on harder recordings. On a 2020 M1 MacBook Pro, once warmed up, it transcribes a minute of speech in 3.5 seconds with the GPU, or 4.9 seconds on the CPU alone, using under 350 MB of memory with the GPU. The code adds 2.8 MB to the app's binary. This is a rundown of why I built it, how it fits inside a Tauri app, and the benchmarks behind the mod

---
_Auto-generated · Wed, 23 Sep 2026 23:57:31 GMT_
