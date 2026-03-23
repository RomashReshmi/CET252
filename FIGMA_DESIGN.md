# Figma Design Requirements

## 1. Low-Fidelity Wireframes

**Dashboard View**
- **Top:** Simple horizontal navigation bar with a logo "PoultryFarm" on the left and three links: Dashboard, Inventory, Add Record.
- **Header:** "Dashboard Overview".
- **Content:** Three large rectangular skeleton boxes aligned horizontally for stats (Total Chickens, Health Status, Egg Production).

**List View**
- **Header:** "Chickens Inventory".
- **Content:** A simple wireframe table with 6 columns. Below each column header are simple straight lines simulating list data. On the far right column, small square boxes indicating action buttons (Edit, Delete).

**Form Page**
- **Header:** "Add New Record".
- **Content:** A vertically stacked setup of form fields. Labels are placed above rectangular input boxes. A primary "Save" button is at the bottom left.

---

## 2. High-Fidelity Prototype

**Color Palette:**
- **Background:** Deep Slate (`#0f172a`) to give a modern, clean dark mode aesthetic.
- **Cards/Containers:** Glassmorphism style, semi-transparent dark (`rgba(30, 41, 59, 0.7)`) with a subtle blur effect (`blur(12px)`) and a light border (`rgba(255, 255, 255, 0.1)`).
- **Primary Text:** White/Off-White (`#f8fafc`) for readability.
- **Secondary Text:** Slate Grey (`#94a3b8`) for labels and hints.
- **Accent/Action:** Vibrant Blue (`#3b82f6`) for primary buttons and interactive elements.
- **Status Colors:** Green (`#22c55e`) for "Healthy" tags, Red (`#ef4444`) for "Sick".

**Typography:**
- **Primary Font:** 'Inter', chosen for its modern sans-serif legibility and geometric structure on dashboards.
- **Headings:** Bold weights (700) for screen titles.
- **Body & Labels:** Regular weight (400), readable at smaller scales (14px).

**Layout Decisions:**
- **Sidebar Navigation:** Unlike the top nav in low-fidelity, the high-fidelity design adopts a modern left-side navigation sidebar for quick, persistent access to modules.
- **Dashboard Grid:** Responsive CSS Grid dynamically scales the stat cards based on viewport size. Stats have emphasis via large typography and clear descriptive labels.
- **Cards:** Used extensively to enclose information modules (forms, tables, dashboard widgets). Cards have a subtle drop-shadow (`box-shadow: 0 8px 32px 0 rgba(0,0,0,0.37)`) to lift them from the background, creating a floating "premium app" feel.

**Interactivity (Simulated Flow):**
- **Hover States:** Nav items gain a light blue background on hover. Stat cards float upwards (`translateY(-5px)`). Buttons slightly darken to indicate clickability.
- **Click Navigation:** Clicking "Chickens Inventory" instantly swaps the main content pane dynamically while highlighting the active sidebar tab.
- **Forms:** Input fields gain a soft blue glow outline on focus, providing clear visual feedback that they are active.
