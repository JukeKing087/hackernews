# Information for Python users regarding eMudhra / emSign CA certificate security

| Field | Value |
|---|---|
| **Score** | 2 |
| **Author** | [tosh](https://news.ycombinator.com/user?id=tosh) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50193424) |
| **Posted** | Thu, 22 Oct 2026 10:12:25 GMT |

## Link
https://discuss.python.org/t/information-for-python-users-regarding-emudhra-emsign-ca-certificate-security-incident/109576

## Article Preview
Information for Python users regarding eMudhra / emSign CA certificate security incident - Announcements - Discussions on Python.org = 40rem)" rel="stylesheet" data-target="discourse-ai_desktop" /> = 40rem)" rel="stylesheet" data-target="discourse-reactions_desktop" /> = 40rem)" rel="stylesheet" data-target="poll_desktop" /> Discussions on Python.org Information for Python users regarding eMudhra / emSign CA certificate security incident Packaging Announcements security sethmlarson (Seth Michael Larson) October 20, 2026, 4:57pm 1 A security incident affecting eMudhra intermediate certificates has required removing the emSign root CA certificate from CA bundles such as “ certifi ”. It’s important to immediately upgrade the software packages below to at least the versions specified and rebuild container images to fetch the latest system certificates. Failure to do so could result in monster-in-the-middle (MITM) attacks against TLS clients, including python.org and pypi.org . certifi 2026

---
_Auto-generated · Thu, 22 Oct 2026 10:31:25 GMT_
