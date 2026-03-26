# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (hot reload)
npm run dev             # Chrome
npm run dev:firefox     # Firefox
npm run dev:safari      # Safari

# Build
npm run build           # Chrome (also zips output)
npm run build:firefox
npm run build:safari

# Type checking (no separate lint command)
npm run type-check
```

No test runner is configured. Use `npm run type-check` to catch errors statically.

## Architecture

This is a browser extension built with [WXT](https://wxt.dev/) that injects the `@eatsjobs/media-mock` library into web pages to simulate camera/microphone devices.

### Entry Points

- **`entrypoints/popup/`** — React UI. Handles device selection, file upload, and sends commands via `chrome.tabs.sendMessage`.
- **`entrypoints/background.ts`** — Minimal relay: forwards popup messages to the active tab's content script.
- **`entrypoints/content.ts`** — Runs in the **isolated world**. Bridges popup ↔ main world via `CustomEvent` (`mediamock:command` / `mediamock:response`).
- **`entrypoints/inject-mediamock.ts`** — Runs in the **main world** (page context). Directly accesses the `MediaMock` library and implements `startMock`, `stopMock`, `testCamera`.

### Communication Flow

```
Popup → (chrome.tabs.sendMessage) → Background → (chrome.tabs.sendMessage) → Content Script
Content Script → (CustomEvent: mediamock:command) → inject-mediamock (main world)
inject-mediamock → (CustomEvent: mediamock:response) → Content Script → Popup
```

The split between isolated world (content.ts) and main world (inject-mediamock.ts) is intentional — browser extensions cannot access page globals from isolated world scripts, so inject-mediamock.ts is declared as a `web_accessible_resource` and injected via `scripting.executeScript`.

### Versioning

Uses [Changesets](https://github.com/changesets/changesets) for releases:
```bash
npm run changeset           # Create a changeset
npm run changeset:version   # Bump versions
npm run changeset:publish   # Publish
```
