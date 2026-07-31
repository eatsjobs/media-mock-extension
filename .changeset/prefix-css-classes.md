---
"@eatsjobs/media-mock-browser-extension": patch
---

Prefix every CSS class and `@keyframes` name in the popup stylesheet with `mm-` (e.g. `.section` → `.mm-section`, `pulse` → `mm-pulse`) to stop styles from leaking onto the host page.

The in-page overlay (`overlay.content.tsx`) injects this stylesheet directly into the page's `<head>`. It already scoped `:root` and `body` to `.mm-popup`, but every other selector — `.section`, `.button`, `.input`, `.active`, `.error`, `.disabled`, and all ten `@keyframes` — was completely unscoped, so it applied globally to any element on any page that happened to share those very common class names, and vice versa. Verified with a page containing its own `.button`/`.section` elements: before this fix they picked up our gradient/uppercase/margin/animation styles, after they don't.
