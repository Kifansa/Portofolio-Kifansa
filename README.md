# Kifansa Naufal Fadhlurrohman — Data Analyst Portfolio

Professional portfolio website built with Astro, React, and Tailwind CSS.

## Tech Stack

- **Framework:** Astro + React Islands
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion + CSS Transitions
- **Icons:** Lucide Icons (inline SVG)
- **Fonts:** Space Grotesk (headings) + Inter (body)
- **Contact Form:** Web3Forms
- **Hosting:** Vercel

## Getting Started (Local Development)

### Prerequisites
- Node.js 18+ (recommended: 22+)
- npm

### Install & Run

```bash
# Navigate to the project folder
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
npm run preview  # preview the build locally
```

## Deploy to Vercel

1. Push this `portfolio` folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**
3. Import your GitHub repository
4. Vercel will auto-detect Astro — no configuration needed
5. Click **Deploy**

### Environment Variables (if using Web3Forms)

If you set up Web3Forms for the contact form:
1. Get a free access key at [web3forms.com](https://web3forms.com)
2. In Vercel dashboard → Project Settings → Environment Variables
3. Add: `PUBLIC_WEB3FORMS_KEY` = your access key
4. Update `src/components/ContactForm.tsx` to use `import.meta.env.PUBLIC_WEB3FORMS_KEY`

## Project Structure

```
portfolio/
├── public/
│   ├── images/           # Profile photo, certificates, project screenshots
│   └── favicon.svg
├── src/
│   ├── components/       # Astro + React components
│   ├── data/             # TypeScript data files (skills, experience, etc.)
│   ├── layouts/          # Base HTML layout
│   ├── pages/            # Route pages
│   └── styles/           # Global CSS
├── astro.config.mjs
└── package.json
```

## Features

- ✅ Dark/Light mode toggle (persisted in localStorage)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Scroll-reveal animations (IntersectionObserver)
- ✅ Functional contact buttons (mailto, LinkedIn, GitHub, Instagram)
- ✅ Copy-to-clipboard for email
- ✅ Certificate verification links
- ✅ Live Tableau dashboard embed link
- ✅ SEO meta tags
- ✅ Accessible (keyboard navigable, alt texts, ARIA labels)
- ✅ Performance optimized (static HTML, lazy loading, minimal JS)
