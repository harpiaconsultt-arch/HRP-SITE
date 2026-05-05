## 2026-05-05 - Semantic grouping for service selection
**Learning:** Interactive button-based selection groups should be wrapped in a semantic `<fieldset>` with a `<legend>` and use `aria-pressed` to communicate state to assistive technologies, rather than relying on generic `label` or `div` tags.
**Action:** Always group related selection buttons using `<fieldset>` and manage `aria-pressed` in the associated JavaScript logic.
