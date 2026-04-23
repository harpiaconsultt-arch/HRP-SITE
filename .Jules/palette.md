## 2025-05-15 - Accessiblity Improvements: Skip Link and ARIA States
**Learning:** For hybrid landing pages with large static HTML, a "Skip to Content" link is the most immediate accessibility win for keyboard users. Additionally, using `aria-pressed` for custom toggle-like buttons (service selection) provides necessary state feedback for screen readers that visual classes like `.selected` do not.
**Action:** Always check for a skip link as the first focusable element on landing pages and ensure interactive selection elements use `aria-pressed`.
