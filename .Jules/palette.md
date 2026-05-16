## 2026-05-16 - Improving Keyboard and Screen Reader Accessibility
**Learning:** For static/hybrid landing pages, skip links and explicit focus-visible styles are low-effort, high-impact improvements that significantly benefit keyboard users. Communicating state (like selection) via `aria-pressed` is essential for screen reader users when using non-standard form controls (like button groups).
**Action:** Always check for skip links and focus visibility in landing pages. Use `aria-pressed` for toggleable button-based selections.
