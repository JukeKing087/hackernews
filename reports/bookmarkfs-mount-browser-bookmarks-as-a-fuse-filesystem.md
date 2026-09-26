# BookmarkFS – mount browser bookmarks as a FUSE filesystem

| Field | Value |
|---|---|
| **Score** | 1 |
| **Author** | [Curiositry](https://news.ycombinator.com/user?id=Curiositry) |
| **Comments** | [0](https://news.ycombinator.com/item?id=49853298) |
| **Posted** | Sat, 26 Sep 2026 04:47:11 GMT |

## Link
https://www.nongnu.org/bookmarkfs/

## Article Preview
BookmarkFS BookmarkFS About &para; BookmarkFS is a FUSE -based pseudo-filesystem which provides an interface to the bookmark data of web browsers. Currently, the following browsers (and their derivatives) are supported: Firefox Chromium BookmarkFS is free software, distributed under the terms of the GNU General Public License , either version 3, or any later version of the license. Getting Started &para; Download Server down? Try the SourceHut Mirror or Codeberg Mirror . User Manual Last updated August 14, 2026. Mailing Lists Example Usage &para; #!/bin/sh # Mount Firefox bookmarks. # - Replace &lt;profile-name&gt; with the actual profile directory name. mount.bookmarkfs -o backend = firefox , rw \ ~ /.mozilla/firefox/ &lt;profile-name&gt; /places.sqlite \ /mnt/firefox # Change working dir into Firefox's "Other Bookmarks" directory. cd /mnt/firefox/bookmarks/unfiled # Remove duplicate bookmark URLs (while keeping the first one). # - Install "fdupes" using your distro's package manager,

---
_Auto-generated · Sat, 26 Sep 2026 04:48:59 GMT_
