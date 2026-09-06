---
"@eatsjobs/media-mock-browser-extension": patch
---

Update `@eatsjobs/media-mock` to 2.3.1. No API changes needed on our side — the extension already uses the 2.0 `setSource()`/`setCanvasScaleFactor()` API and its single `getUserMedia()` call site (in `testCamera`) always passes an explicit `video` constraint, so it is unaffected by the 2.1 tightening of `getUserMedia({})`/`{ video: false }` and `deviceId: { exact }` behavior. Picks up `getCapabilities()` now describing the emulated camera (from 2.1), `emulateVideoFrameCallback` for WebKit-on-Linux test environments (2.2/2.3), and a fix so `applyConstraints()` (e.g. `torch`) honors capabilities the mock itself advertises (2.3.1).
