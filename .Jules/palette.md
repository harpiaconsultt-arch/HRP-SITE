## 2026-05-01 - Accessible Service Selection
**Learning:** Using interactive buttons as radio-like selection options requires `aria-pressed` and a semantic `fieldset`/`legend` wrapper to ensure screen readers communicate the selection state and group context correctly.
**Action:** Always wrap custom interactive selection groups in a `fieldset` and use `aria-pressed` for toggleable states.
