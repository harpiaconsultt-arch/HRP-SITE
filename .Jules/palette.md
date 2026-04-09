## 2026-04-01 - [Skip Link Implementation]
**Learning:** For static HTML landing pages with large headers, a 'Skip to Content' link is essential for keyboard accessibility. Using 'focus:fixed' ensures the link overlays other content without causing layout shifts that push the header down.
**Action:** Use 'sr-only focus:not-sr-only focus:fixed' in Tailwind for skip links to maintain visual stability while ensuring they are discoverable for keyboard users.
