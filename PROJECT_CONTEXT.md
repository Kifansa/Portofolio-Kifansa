# Project Context & AI Operational Handbook

> **Notice for AI Assistants:** This document contains the definitive, authoritative context, technical architecture, candidate persona, design system rules, and design decisions for Kifansa Naufal Fadhlurrohman's Portfolio Website. Read and adhere strictly to these guidelines before making any modifications to the codebase.

---

## 1. Executive Summary & Core Positioning

- **Candidate Identity:** Kifansa Naufal Fadhlurrohman
- **Academic Background:** Undergraduate in Information Systems (*Sistem Informasi*) at Telkom University Surabaya (Cumulative GPA: **3.86 / 4.00**).
- **Core Role & Positioning:** **High-Impact Data Analyst bridging Strategic Business Intelligence & Predictive Data Science**.
  - A dual-threat analyst: combines executive data visualization and KPI storytelling (Tableau Public, Power BI, Looker Studio, Excel) with technical data engineering and predictive modeling (Python, SQL, Pandas, Scikit-Learn, ETL pipelines, Data Mining).
- **Target Audience:**
  1. **Technical Recruiters & HR Managers (Indonesia & Global):** Rapid 6–8 second initial screening looking for clear headline value, 1-click contact actions, zero fluff, and verifiable credentials.
  2. **Technical Peers & Hiring Managers (Heads of Data, Lead Analysts, Data Scientists):** Inspecting methodology, SQL query hygiene, statistical rigor, and business impact.
  3. **Software Engineers / Developers:** Inspecting web performance, clean code architecture, accessibility, and smooth interactions.

---

## 2. Technical Stack & Architecture

- **Framework:** [Astro](https://astro.build/) (Static Site Generation with Islands Architecture)
- **Styling Framework:** Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss: ^4.3.3`)
- **Interactive Islands:** React 19 (`@astrojs/react`, `lucide-react`)
- **Animation & Motion:** Framer Motion, GSAP, native CSS transitions, and high-performance native `IntersectionObserver` scripts
- **Deployment & Hosting:** Optimized static output (`dist/`) deployable to Cloudflare Pages, Vercel, or custom domain (`https://kifansa.my.id`).

---

## 3. Design System & Impeccable Aesthetic Rules

The website follows an **Obsidian Monochrome Modern Minimalist** design language with deep frosted glass optical depth:

### Color Palette & Tokens
- **Zero Neon Halos or AI Slop:** No saturated rainbow drops, no neon cyan/purple glows, and no decorative gradients.
- **Light Theme:** Pure White surface on `#FAFAFA` background, Jet Black `#09090B` typography, buttons, and `1px` subtle borders (`#E4E4E7`).
- **Dark Theme:** Deep Obsidian `#09090B` background, matte card surfaces (`#121215`), Pure White `#FAFAFA` typography, solid buttons, and `1px` crisp borders (`#27272A`).
- **Muted Accents:** Zinc / Slate `#71717A` (Light) / `#A1A1AA` (Dark).

### Frosted Glass Architecture
- Universal Frosted Blur: `-webkit-backdrop-filter: blur(36px) saturate(200%); backdrop-filter: blur(36px) saturate(200%);` on cards, panels, and buttons.
- Border radius: standard pills (`rounded-full`) for interactive buttons and badges; `rounded-2xl` / `rounded-3xl` for cards and modals.

### Typography
- **Headings & Quantitative Metrics:** `Space Grotesk` with `tabular-nums` for precise numerical alignment.
- **Prose & Body Copy:** `Inter` at comfortable 55–70ch line lengths with `leading-relaxed` (1.625).
- **Language Standard:** CEFR B2–C1 Business Professional American English. Active voice, strong action verbs (*engineered, transformed, optimized, uncovered*), and quantified business metrics.

---

## 4. Key Architectural Decisions (Q&A Log)

The following architectural and design decisions were aligned and confirmed directly with the project owner:

### Q1: Certificate Pagination Layout
- **Decision:** **6 certificates per page** (desktop: 2 rows × 3 columns).
- **Rationale:** 6 items maintain optimal visual balance in a 3-column responsive grid without overwhelming recruiters with infinite vertical scrolling.

### Q2: Top-Positioned Pagination & Category Filter Controls
- **Decision:** Position pagination bar at the **top** of the certificates section (between section header and cards grid), accompanied by quick filter tabs:
  - `All Credentials` (13)
  - `BNSP & Google` (4)
  - `Digitalent Komdigi` (9)
- **Rationale:** High visibility for recruiters who can immediately switch pages or filter by credential authority without scrolling down to the bottom.

### Q3: Hero KPI Counter Synchronization
- **Decision:** Hero KPI stat counter updated to **`13 Certs`** with subtitle badge **`BNSP, Google & Komdigi`**.
- **Rationale:** Reflects all verified credentials across national standards, global technology leaders, and government talent academies.

### Q4: Credential Verification & Inspection Action Pattern
- **Decision:** **Image Thumbnail is Click-to-Inspect** (opens high-resolution Lightbox modal with zoom and direct verification link). On the card footer, only a single **"Verify Certificate"** button is displayed.
- **Verification Portals:**
  - **BNSP:** `https://bnsp.go.id/check-certification`
  - **Komdigi Digitalent:** `https://digitalent.komdigi.go.id/cek-sertifikat`
  - **Google / Coursera:** Direct Coursera verification URLs.
- **Rationale:** Keeps card layout clean without redundant inspect buttons, while giving recruiters instant full-size image inspection when tapping or clicking the certificate graphic itself.

### Q5: Technical Stack & Tools Section Structure
- **Decision:** Changed section title from "Skills & Analytics Stack" to **"Tools & Stack"** and merged all items into **1 unified card container**.
- **Filtered Content:** Removed abstract methodology badges (such as A/B Testing, Process Optimization, Stakeholder Presentations) to display strictly 14 concrete tools and software stacks (Python, SQL, Tableau, Power BI, Looker Studio, Excel, Pandas, NumPy, Scikit-Learn, Jupyter, Git/GitHub, R, Java, HTML5/CSS3).
- **Styling Architecture:** Borderless tiles with prominent logo scaling (40–44px official vector marks leading over pure white `#FFFFFF` text) and soft ambient hover lift without hard inner card borders.
- **Border Beam Animation:** The unified master card features an orbiting light beam animation traveling around the perimeter with an ambient glow bloom, implemented with CSS `mask-composite: exclude` so the frosted glass card content remains crisp and unwashed while a luminous beam circles the border.
- **Rationale:** Eliminates conceptual clutter; gives recruiters an instant, unified, visual-first snapshot of production tools with a high-end dynamic visual accent.

---

## 5. Verified Credentials & Certifications Registry (13 Certifications)

All certificates reside in `portfolio/public/images/certs/`:

| # | Name | Issuer | Date | Category | Duration / Scope | Credential ID / Verification |
|---|---|---|---|---|---|---|
| 1 | **Google Advanced Data Analytics** | Google (Coursera) | Jun 28, 2026 | Google | 7 Courses | [Coursera Verify](https://coursera.org/verify/professional-cert/ANXJMLILC9IV) |
| 2 | **Google AI Professional Certificate** | Google (Coursera) | May 28, 2026 | Google | 7 Courses | [Coursera Verify](https://coursera.org/verify/professional-cert/ZOKE01X12M1V) |
| 3 | **Google Data Analysis with Python** | Google (Coursera) | May 26, 2026 | Google | 6 Courses | [Coursera Verify](https://coursera.org/verify/specialization/4ERW920KM1X2) |
| 4 | **Sertifikasi Kompetensi Analis Data** | BNSP (LSP DKS) | Aug 15, 2026 | BNSP | SKKNI Standard | [BNSP Verify Portal](https://bnsp.go.id/check-certification) (`04.0594/LSP-DKS/SRTF/VIII/2026`) |
| 5 | **Fundamental of Data Analyst** | Komdigi (DTS x DQLab) | Sep 24, 2026 | Digitalent | 260 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212186840-80`) |
| 6 | **Practical Real Business Application for Data Analyst** | Komdigi (DTS x DQLab) | Sep 26, 2026 | Digitalent | 89 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212201840-68`) |
| 7 | **Fundamental of Data Engineering** | Komdigi (DTS x DQLab) | Sep 26, 2026 | Digitalent | 276 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212187840-72`) |
| 8 | **Practical Real Business Application for Data Engineer** | Komdigi (DTS x DQLab) | Sep 26, 2026 | Digitalent | 90 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212189840-66`) |
| 9 | **Associate Data Scientist + Python** | Komdigi (DTS) | Sep 25, 2026 | Digitalent | 31 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212182840-234`) |
| 10 | **Data Scientist** | Komdigi (DTS) | Sep 23, 2026 | Digitalent | 18 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212196840-113`) |
| 11 | **Data Scientist Supervisor** | Komdigi (DTS) | Sep 22, 2026 | Digitalent | 20 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212185840-137`) |
| 12 | **Fundamental of Machine Learning** | Komdigi (DTS x DQLab) | Sep 26, 2026 | Digitalent | 292 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212200840-65`) |
| 13 | **Practical Real Business Application using ML** | Komdigi (DTS x DQLab) | Sep 26, 2026 | Digitalent | 122 Hours | [Komdigi Verify](https://digitalent.komdigi.go.id/cek-sertifikat) (`21212205840-60`) |

*Note: Total Komdigi Digitalent training investment equals **1,198 hours** of rigorous coursework.*

---

## 6. Codebase File Structure & Guidelines

```
portfolio/
├── public/
│   ├── images/
│   │   ├── certs/                      # 13 verified certificate images (.webp)
│   │   │   ├── DIGITALENT/             # Organized into DATA ANALYST, DATA ENGINEER, DATA SCIENTIST, MACHINE LEARNING
│   │   │   ├── Google Advanced Data Analytics.webp
│   │   │   ├── Google AI.webp
│   │   │   ├── Google Data Analysis with Python.webp
│   │   │   └── SK KOMPETEN-Analis Data (Data Analyst)-...webp
│   │   ├── logo.webp                   # Monogram brand mark
│   │   └── profile.webp                # Professional transparent cutout portrait
├── src/
│   ├── components/
│   │   ├── Certifications.astro        # Interactive paginated certifications section with Lightbox
│   │   ├── Hero.astro                  # Hero with telemetry count-up KPIs & identity
│   │   ├── Navbar.astro                # Frosted glass floating navigation & theme switch
│   │   ├── Projects.astro              # Enterprise BI case studies & modal dossiers
│   │   └── ...
│   ├── data/
│   │   ├── certifications.ts           # Centralized credentials data array
│   │   └── projects.ts                 # Featured project dossiers & telemetry metrics
│   ├── styles/
│   │   └── global.css                  # Design tokens, frosted glass classes, scroll animations
│   └── pages/
│       └── index.astro                 # Main single-page application entry point
├── AGENTS.md                           # AI assistant entry point instructions
├── CLAUDE.md                           # Claude / Cursor entry point instructions
└── PROJECT_CONTEXT.md                  # This document
```

---

## 7. Instructions for Future AI Systems

When modifying this repository:
1. **Never break build:** Always execute `npm run build` inside `portfolio/` to confirm TypeScript validation and Astro compilation pass with zero warnings/errors.
2. **Preserve Design Language:** Adhere to `DESIGN.md`. Do not introduce colorful gradients, colored shadows, or inconsistent font families. Use existing CSS variables (`var(--bg-card)`, `var(--border)`, `var(--text)`, `var(--accent)`).
3. **Respect Performance:** Keep client-side JavaScript zero-dependency and lightweight. Maintain smooth 60fps animations.
4. **Update This File:** If new projects, certifications, or major structural changes are made, update this `PROJECT_CONTEXT.md` file to keep the shared context synchronized.
