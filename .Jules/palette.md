## 2026-05-02 - Accessibility Baseline for Static Landing Pages
**Learning:** For static landing pages with fixed headers, a 'Skip to Content' link and global focus-visible indicators are essential first steps to ensure keyboard navigability and bypass repetitive header links.
**Action:** Implement 'Skip to Content' pointing to a main landmark with id='main-content' and tabindex='-1', and use @layer base in CSS to define high-contrast :focus-visible outlines.
