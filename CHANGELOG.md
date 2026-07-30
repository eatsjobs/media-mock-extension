# @eatsjobs/media-mock-browser-extension

## 1.2.1

### Patch Changes

- 21e4575: Update `@eatsjobs/media-mock` to 2.0.2. Pure bug-fix release, no API changes: fixes a race where `getUserMedia()` called right after an un-awaited `setSource()` could grab a blank placeholder frame instead of the real source, and adds a warning when a source swap can't reach an already-running stream. Also corrects the 2.0.0 changelog's inaccurate claim that `setMediaURL()` was kept as a backward-compatible alias.

## 1.2.0

### Minor Changes

- f4eb739: Add a Canvas Scale Factor control to the popup, letting you adjust how much of the canvas the mocked image fills (0.1-1.0) before or after starting the mock.
- 29bb676: Update `@eatsjobs/media-mock` to 2.0.0.

  2.0.0 removes `setMediaURL()` in favor of `setSource()` — despite the upstream changelog claiming it "keeps working unchanged", the shipped package has no trace of it in either the compiled bundle or the type declarations. Updated both call sites in `inject-mediamock.ts` accordingly. `setCanvasScaleFactor()` and reading `settings` are unaffected and continue to work as before.

### Patch Changes

- 7faa4e8: Keep the Canvas Scale Factor slider enabled while the mock is active, in both the toolbar popup and the in-page overlay. Changing it now sends a live `SET_CANVAS_SCALE_FACTOR` update to the running mock, the same way the media URL can already be changed live.
- bfbae66: Fix a `manifest.exclude` meta tag in the popup entrypoint that was accidentally excluding the popup from every browser target (Chrome, Firefox, and Safari), causing built extensions to ship without a popup UI.
- 0ee164e: Move the Canvas Scale Factor control into the Media Source section, directly below the image/video URL input, instead of a separate section.
- 753ac32: Add Canvas Scale Factor state and control to the in-page overlay widget (`overlay.content.tsx`), matching the toolbar popup. Previously only the toolbar popup exposed this control.
- 53c2094: Update `@eatsjobs/media-mock` dependency to 1.4.1.
- 2069bed: Upgrade wxt from 0.20.26 to 0.21.2. Migrated the deprecated `runner: { disabled: true }` config to the new `webExt: { enabled: false }` option per the v0.21 upgrade guide.

## 1.1.1

### Patch Changes

- 9e9ef93: Fix Safari release path and add iOS extension artifact to GitHub releases

## 1.1.0

### Minor Changes

- 8aad1d8: Better UI, support for ios extension

## 1.0.0

### Major Changes

- 9c6a1d0: Release 1.0.0 @eatsjobs/media-mock-browser-extension

  ## Features

  - Mock camera devices for testing with multiple presets (iPhone 12, Samsung Galaxy M53, Mac Desktop)
  - File upload support for custom media (images and videos)
  - Automatic device detection based on user agent
  - Debug mode for development
  - Modern glassmorphism UI with dark/light theme support
  - Cross-browser compatibility (Chrome, Firefox, Safari)
  - Drag-and-drop file upload functionality
  - Real-time status indicators
  - Version information display

  ## Browser Support

  - Chrome/Chromium (Manifest V3)
  - Firefox (Manifest V2)
  - Safari (WebExtensions)

  ## Installation

  Load as unpacked extension in your browser's developer mode after extracting the appropriate browser-specific archive.
