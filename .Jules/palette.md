## 2025-05-15 - [Skip to Content Link Implementation]
**Learning:** Implementing a "Skip to Content" link is a high-impact, low-complexity accessibility win for landing pages with significant navigation headers. In a Tailwind environment, using `sr-only` and `focus:not-sr-only` is the standard way to handle this without custom CSS.
**Action:** Always check for skip links in landing pages and use `sr-only` / `focus:not-sr-only` for implementation. Ensure the target `main` element has a corresponding `id`.

## 2025-05-15 - [PR Hygiene and Scope]
**Learning:** Committing newly generated lockfiles (`pnpm-lock.yaml`) in a micro-UX task violates the "under 50 lines" constraint and can clutter the PR, making review harder.
**Action:** Avoid including lockfiles in PRs unless explicitly required for a dependency change. Use `.gitignore` or manual cleanup to ensure only relevant changes are staged.
