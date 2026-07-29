---
"@eatsjobs/media-mock-browser-extension": minor
---

Update `@eatsjobs/media-mock` to 2.0.0.

2.0.0 removes `setMediaURL()` in favor of `setSource()` — despite the upstream changelog claiming it "keeps working unchanged", the shipped package has no trace of it in either the compiled bundle or the type declarations. Updated both call sites in `inject-mediamock.ts` accordingly. `setCanvasScaleFactor()` and reading `settings` are unaffected and continue to work as before.
