## 2026-04-18 - Accessibility: Skip to Content Link
**Learning:** For landing pages with large navigation menus and fixed headers, a "Skip to Content" link is a critical micro-UX improvement for keyboard users. It must be the first focusable element and explicitly handle visibility reset on focus to bypass fixed-position overlays.
**Action:** Implement 'Skip to Content' links as the standard first element of the body, using .sr-only and .focus:not-sr-only patterns with high z-index and explicit background colors.
