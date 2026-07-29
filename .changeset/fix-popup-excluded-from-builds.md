---
"@eatsjobs/media-mock-browser-extension": patch
---

Fix a `manifest.exclude` meta tag in the popup entrypoint that was accidentally excluding the popup from every browser target (Chrome, Firefox, and Safari), causing built extensions to ship without a popup UI.
