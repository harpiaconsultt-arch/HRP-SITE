## 2026-05-13 - Skip to Content link for Accessibility
**Learning:** For landing pages with large hero sections and fixed headers, a "Skip to Content" link is essential for keyboard users to reach the main content efficiently. Tailwind v4's 'sr-only' and 'focus:not-sr-only' utilities work well for this without needing manual CSS.
**Action:** Always include a Skip to Content link as the first child of <body> and ensure the target element has a corresponding ID and tabindex="-1" for focus management.
