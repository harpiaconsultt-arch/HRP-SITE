## 2026-04-30 - Accessible Interactive Selections
**Learning:** For interactive elements that act as selectors but aren't standard form inputs (like buttons in a grid used to pick a service), using `aria-pressed` correctly communicates the current selection state to screen readers, especially when the state is also indicated visually via classes like `.selected`.
**Action:** Always pair visual 'selected' or 'active' states on buttons with the `aria-pressed` attribute and ensure JavaScript toggles both.
