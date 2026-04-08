## 2025-05-15 - [Accessibility] Keyboard Navigation & Screen Reader States
**Learning:** For large static landing pages, a "Skip to Content" link is essential to bypass repetitive navigation. Additionally, when using buttons as selection toggles, `aria-pressed` provides necessary semantic feedback that visual classes like `.selected` lack.
**Action:** Implement a skip link as the first body child and sync `aria-pressed` with selection state in future static hybrid projects.
