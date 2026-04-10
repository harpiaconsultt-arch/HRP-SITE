## 2025-05-22 - Skip to Content for Static/Hybrid Apps
**Learning:** In hybrid projects where static HTML is the entry point, standard accessibility features like "Skip to Content" links must be manually implemented in the HTML and styled to ensure visibility on focus, as utility frameworks might not be fully active during the initial page load or static serve.
**Action:** Always check the initial entry point of hybrid apps for a "Skip to Content" link and implement it using a combination of .sr-only and :focus styles that override the hidden state.
