## 2025-05-14 - Skip to Content for Static/React Hybrid
**Learning:** In a hybrid static/React environment where the main entry point is a large static HTML file, standard accessibility utilities like 'sr-only' may be missing from the build artifact even if Tailwind is present in the development environment.
**Action:** Always verify the presence of accessibility helper classes in the primary stylesheet or internal <style> block and add them if necessary when implementing keyboard navigation improvements.
