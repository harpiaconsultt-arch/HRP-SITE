## 2025-05-22 - Skip Link Implementation in Static HTML
**Learning:** In hybrid projects (static HTML + React/Vite), a "Skip to Content" link is a critical first-step for keyboard accessibility. When using manual `.sr-only` styles, it's essential to explicitly reset all clipping properties (`clip`, `width`, `height`, `overflow`, `margin`) on `:focus` to ensure the link becomes fully visible.
**Action:** Always implement a "Skip to Content" link as the first element in `<body>` and ensure the target (usually `<main>`) has a unique `id` and `tabindex="-1"`.
