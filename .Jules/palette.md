## 2025-05-14 - Accessibility and Semantic Forms
**Learning:** For hybrid static/React landing pages, implementing a "Skip to Content" link and semantic fieldsets for interactive groups significantly improves accessibility for keyboard and screen reader users with minimal code overhead.
**Action:** Always include a skip link as the first focusable element and wrap multi-button selection groups in `<fieldset>` with a `<legend>` and `aria-pressed` states.
