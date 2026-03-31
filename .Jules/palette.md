## 2025-05-14 - Skip Link implementation in hybrid static architecture
**Learning:** Static landing pages exported via automation tools often miss basic accessibility patterns like skip links and semantic landmarks. Standard Tailwind utilities like `sr-only` might not be immediately available if the build process doesn't scan the entire static HTML before injecting CSS.
**Action:** Manually define critical accessibility utilities (`sr-only`, `focus:not-sr-only`) within the internal `<style>` block of the entry HTML to ensure they work regardless of the build pipeline's scan state.
