## 2026-04-13 - Skip Link Implementation in Static HTML
**Learning:** In a hybrid environment with a large static index.html and modern Tailwind (v4), adding a skip link requires both utility classes (sr-only) and manual CSS focus overrides to ensure visibility in all serving contexts (e.g., direct static serve vs Vite).
**Action:** Always provide explicit CSS resets for .sr-only on :focus for skip links in static entry points to guarantee accessibility for keyboard users.
