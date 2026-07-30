---
"@eatsjobs/media-mock-browser-extension": patch
---

Update `@eatsjobs/media-mock` to 2.0.2. Pure bug-fix release, no API changes: fixes a race where `getUserMedia()` called right after an un-awaited `setSource()` could grab a blank placeholder frame instead of the real source, and adds a warning when a source swap can't reach an already-running stream. Also corrects the 2.0.0 changelog's inaccurate claim that `setMediaURL()` was kept as a backward-compatible alias.
