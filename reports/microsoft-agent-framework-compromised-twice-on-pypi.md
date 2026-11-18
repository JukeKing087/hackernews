# Microsoft agent-framework Compromised Twice on PyPI

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [nzp](https://news.ycombinator.com/user?id=nzp) |
| **Comments** | [1](https://news.ycombinator.com/item?id=50543774) |
| **Posted** | Wed, 18 Nov 2026 09:03:17 GMT |

## Link
https://safedep.io/blog/microsoft-agent-framework-pypi-compromise

## Article Preview
Microsoft agent-framework Compromised Twice on PyPI | SafeDep Skip to content New Blog: Microsoft agent-framework Compromised Twice on PyPI 18 Nov 2026 Product Pricing Open Source Blog Resources 2k Log in Start Now Back to Blog Microsoft agent-framework Compromised Twice on PyPI Malware SafeDep Team • Nov 18, 2026 • 8 min read On this page 12 sections On this page Affected versions Timeline How the releases differed from real ones A maintainer account created the same day How the payload runs What it steals Tokens it requests Exfiltration What changed in 1.26.2 Check your environments Indicators of compromise References Open Source · Free Protect your projects from malicious packages Get PMG on GitHub Two releases of agent-framework , Microsoft’s official Python metapackage for its Agent Framework, steal credentials from any environment that installs them. Nothing has to import the package. A .pth file runs the stealer each time Python starts, so a pip install in a CI job is enough. It

---
_Auto-generated · Wed, 18 Nov 2026 09:08:47 GMT_
