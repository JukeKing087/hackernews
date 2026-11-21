# RCE in Gnupg

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [gdgghhhhh](https://news.ycombinator.com/user?id=gdgghhhhh) |
| **Comments** | [0](https://news.ycombinator.com/item?id=50587208) |
| **Posted** | Sat, 21 Nov 2026 08:32:58 GMT |

## Link
https://lists.gnupg.org/pipermail/gnupg-announce/2026q4/000517.html

## Article Preview
[Announce] GnuPG Security Advisory for GPGME (T8557,CVE-2026-129975) [Announce] GnuPG Security Advisory for GPGME (T8557,CVE-2026-129975) Werner Koch wk at gnupg.org Fri Nov 20 19:01:51 CET 2026 Messages sorted by: [ date ] [ thread ] [ subject ] [ author ] Hello! We are pleased to announce the availability of a new GPGME release: version 2.3.1. This version fixes a *critical security bug* found in all prior versions. We also release a new Gpg4win versions and and GnuPG Desktop and GnuPG VS-Desktop versions which all make use of GPGME. Description =========== By using an OpenPGP key containing a crafted very long user id it is possible to trigger a double free. This double free can be used exfiltrate data from applications by sending for example signed data. Exploiting this bug to mount an Remote Code Execution attack (RCE) can&#x27;t be ruled out. Thus an immediate update is highly suggested. Our internal ID is T8557 ( https://static.dev.gnupg.org/T8557 ) The CVE-id is CVE-2026-129975

---
_Auto-generated · Sat, 21 Nov 2026 08:47:04 GMT_
