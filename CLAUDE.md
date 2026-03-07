# Sommer Landing Pages — Claude Instructions

## Git & Large Files
- **Git LFS is configured** for `*.mp4` and `*.mov` files (see `.gitattributes`)
- All video files must be committed normally — LFS handles them automatically
- Do NOT skip video files from commits due to size; they will upload via LFS
- Other videos in the repo: `general-b-roll.mp4`, `leaf-b-roll.mov`, `mowing-b-roll.mp4`

## Project Stack
- Astro + Tailwind CSS, hosted on Netlify
- Brand colors: dark bg `#0a0a0a`, smurf blue `#00AEEF`
- Tailwind custom colors: `dark`, `dark-card`, `dark-border`, `smurf`, `smurf-dark`, `smurf-light`

## Pages
- `src/pages/index.astro` — homepage
- `src/pages/[city].astro` — dynamic city landing pages (8 cities, SEO-targeted)
- `src/pages/mowing.astro` — upsell landing page (no nav)
- `src/pages/leaf-removal.astro` — upsell landing page (no nav)
- `src/pages/services.astro` — services overview

## Components
- `Nav.astro` — transparent over hero, solid on scroll; logo white pill only when scrolled
- Nav is used on homepage and city pages only — NOT on mowing/leaf-removal landing pages
- `Hero.astro`, `Testimonials.astro`, `Footer.astro`, `SignupForm.astro`

## Personalization
- Landing pages personalized via URL params (e.g. `?first=John`) from Zoho Marketing Automation
