## 2025-05-14 - Skip Links and Dynamic ARIA States
**Learning:** In hybrid static/React environments, skip-to-content links require `tabindex="-1"` on the target element to ensure cross-browser focus management. Additionally, dynamic UI toggles (like service selection buttons) must explicitly manage `aria-pressed` via JavaScript to maintain accessibility parity with visual states.
**Action:** Always verify focus shifts with automation tools (like Playwright) and ensure every visual toggle state is reflected in the DOM with appropriate ARIA attributes.
