## 2026-04-27 - [Accessible Toggle Buttons and Skip Links]
**Learning:** In hybrid static/React environments, ensuring focusable jump targets (tabindex="-1") and stateful ARIA attributes (aria-pressed) significantly improves navigation for keyboard and screen reader users without requiring complex state management.
**Action:** Always verify that 'Skip to Content' links have a corresponding ID and tabindex on the target element, and use aria-pressed for custom toggle components.
