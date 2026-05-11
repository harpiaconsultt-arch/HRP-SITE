## 2025-05-14 - Semantic Form Groups for Selection Buttons
**Learning:** Button-based selection groups (like service options) benefit significantly from semantic grouping using `<fieldset>` and `<legend>`, combined with `aria-pressed` to communicate the selection state to screen readers.
**Action:** Always wrap interactive selection buttons in a `<fieldset>` and use `aria-pressed` to manage state.

## 2025-05-14 - Maintainability in Hybrid Repositories
**Learning:** In projects with large static HTML files and separate CSS/JS, avoid modifying internal minified styles. Instead, use `index.css` with `@layer base` for global accessibility overrides to ensure they are correctly bundled and maintainable.
**Action:** Target semantic elements like `legend` in `index.css` rather than patching minified HTML style blocks.
