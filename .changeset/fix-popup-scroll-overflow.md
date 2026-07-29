---
"@eatsjobs/media-mock-browser-extension": patch
---

Fix the popup card so it scrolls internally (with its already-styled custom scrollbar) instead of relying on an easy-to-miss body-level scroll. `.popup-container` had `overflow-y: visible` and an unconditional `min-height: 40rem`, which conflicted with a real popup window's height cap and pushed content near the bottom (like the Canvas Scale Factor slider and Start/Stop buttons) out of view.
