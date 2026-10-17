# Show HN: Sys2txt – transcribe system audio to text in the CLI with a local LLM

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [joeheffer](https://news.ycombinator.com/user?id=joeheffer) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50129017) |
| **Posted** | Sat, 17 Oct 2026 08:14:12 GMT |

## Link
https://Joe-Heffer.github.io/sys2txt/

## Article Preview
sys2txt Skip to content sys2txt Overview Initializing search Joe-Heffer/sys2txt sys2txt Joe-Heffer/sys2txt Overview Overview Table of contents Overview Installation Quick start CLI reference Engines & devices Live mode Output formats Examples Python API Architecture Troubleshooting Changelog Table of contents Overview System audio to text &para; Record system audio and automatically transcribe to text using ✨AI✨. Overview &para; sys2txt is a command-line tool that records your system audio (via PulseAudio/PipeWire monitor sources) with ffmpeg and transcribes it locally using Whisper . It supports both: On-demand: Record until you stop, then transcribe once Live-ish: Segment the recording every N seconds and transcribe each segment as it's created (prints continuously) You can use any of three transcription engines: faster-whisper - Default, best for CPU and NVIDIA GPUs openai-whisper - Reference Python implementation whisper.cpp - C++ implementation with Vulkan GPU support for AMD GPUs

---
_Auto-generated · Sat, 17 Oct 2026 08:39:13 GMT_
