# Claude & Cursor Operating Guidelines: Kifansa Portfolio

This repository hosts the official portfolio website of **Kifansa Naufal Fadhlurrohman** (Data Analyst & Information Systems, Telkom University Surabaya).

> [!IMPORTANT]
> **Complete Project Context & Guidelines:**
> Before proposing or implementing any changes, read [`PROJECT_CONTEXT.md`](file:///D:/penting/WEBSITE%20PORTOFOLIO/portfolio/PROJECT_CONTEXT.md), [`DESIGN.md`](file:///D:/penting/WEBSITE%20PORTOFOLIO/DESIGN.md), [`PRODUCT.md`](file:///D:/penting/WEBSITE%20PORTOFOLIO/PRODUCT.md), and [`ketentuan.md`](file:///D:/penting/WEBSITE%20PORTOFOLIO/ketentuan.md).

---

## Technical Stack & Commands

- **Framework**: Astro 5 (Static Site Generation with Island Architecture)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`), custom CSS variables in `src/styles/global.css`
- **Islands**: React 19 (`@astrojs/react`, `lucide-react`)
- **Node Requirement**: `>=22.12.0`

### Development Commands
```bash
# Start Astro dev server in background
npm run dev

# Production build verification (must always pass with 0 errors)
npm run build

# Preview production build
npm run preview
```

---

## Design System & Impeccable Quality Standards

1. **Pure Obsidian Monochrome:** No neon glows, saturated rainbow drops, or arbitrary colored borders. All styling must derive from design tokens in `DESIGN.md` and `src/styles/global.css`.
2. **Deep Frosted Glass:** Use `-webkit-backdrop-filter: blur(36px) saturate(200%); backdrop-filter: blur(36px) saturate(200%);` with `var(--bg-card)` and `var(--border)`.
3. **Typography Hierarchy:** `Space Grotesk` with `tabular-nums` for headings, metrics, and KPI counts. `Inter` for technical copy.
4. **Copy & Voice:** CEFR B2–C1 Business Professional American English. Active voice, quantified metrics, zero ungrounded buzzwords.
5. **Interactive Patterns:** Use lightweight, zero-dependency client scripts or React islands when necessary. Maintain accessibility (`aria-modal`, keyboard navigation, contrast ratios).
