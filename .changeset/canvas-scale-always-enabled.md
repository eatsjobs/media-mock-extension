---
"@eatsjobs/media-mock-browser-extension": patch
---

Keep the Canvas Scale Factor slider enabled while the mock is active, in both the toolbar popup and the in-page overlay. Changing it now sends a live `SET_CANVAS_SCALE_FACTOR` update to the running mock, the same way the media URL can already be changed live.
