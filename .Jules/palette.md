## 2026-04-21 - Accessibility: Skip Link & State Feedback
**Learning:** For static landing pages with fixed headers, a "Skip to Content" link is a critical accessibility requirement for keyboard navigation. Additionally, visual-only selection states (like a '.selected' class) are invisible to screen readers; 'aria-pressed' is necessary to communicate this state.
**Action:** Always verify the presence of a 'Skip to Content' link as the first focusable element. Ensure all interactive 'toggle' or 'selection' buttons use ARIA attributes to reflect their state.
