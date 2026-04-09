# Palette's UX Journal

## 2026-03-30 - Accessible Skip-to-Content Pattern in Static/React Hybrids
**Learning:** For landing pages exported from Google Stitch with a large static `index.html` structure, standard accessibility features like "Skip to Content" links are often overlooked. Implementing these requires both the visual utility classes (`.sr-only` and `.focus:not-sr-only`) in the internal style block and ensuring the `<main>` element has `tabindex="-1"` to receive focus correctly during keyboard navigation.
**Action:** When working with hybrid static/React projects, always verify the presence of a "Skip to Content" link as the first focusable element in the DOM and ensure the main container is properly tagged for focus receipt.
