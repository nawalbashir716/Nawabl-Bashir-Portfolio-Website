# Nawal Bashir Portfolio Website — Project Instructions

## Project
Replace the current Webflow site (nawalbashir.com) with a static site built via Claude Code, hosted on GitHub, deployed on **Cloudflare Pages**. Reason for migration: Webflow's CMS pricing made adding case studies too expensive. Domain (nawalbashir.com, via Google Workspace) stays and will be pointed at the new site once built.

**Hard constraint: this must be a fully static site. No backend server, no database.**

## Content & asset locations
Described target layout for the build:
- `content/home.md`, `content/about.md`, `content/reviews.md`
- `content/case-studies/case-study-01.md` … `case-study-09.md`, in order
- `assets/images/personal/` — personal photos
- `assets/images/case-studies/case-study-01/` … `case-study-09/`
- `assets/images/logos/` — client + marketplace logos (Amazon, Walmart, Target, TikTok Shop)

**Note:** as of 2026-08-14 the folder on disk does not yet match these exact paths/names (e.g. content is still under `content/home page guidance.md`, `content/About me section.md`, `content/Reviews/Reviews.md`; images are under `assets/images/Company Logos/`, `assets/images/Marketplace LOGOS/`, `assets/images/personal photos/`, `assets/images/Images for Case Studies (Numbered)/case-study-0N/`). Content has been fully read regardless of naming. Treat the paths above as the target structure to reorganize into during the build, not as confirmed current fact — see `MEMORY.md.md` for the live file map.

## Positioning (current, live as of session 6 — supersedes earlier drafts)
**Pronouns confirmed: he/him.**

**Hero (Home):** Headline "Retail Media Partner for E-Commerce Brands." Subtext: "Driving growth across Amazon, Walmart, Target, and TikTok Shop — with a focus on profitability, not just ad spend." No eyebrow label above the headline.

**"Why brands choose to work with me"** — a dedicated section further down the homepage, NOT the hero. Six cards, this exact set (do not silently add back Etsy/Chewy or a cross-category card — both were explicitly removed):
1. Custom-Built Strategies — tailored to niche, catalog structure, and growth goals
2. Profit-First Advertising — sustainable growth over vanity metrics; flat retainer, not a % of ad spend, that only grows when results grow
3. Multi-Platform Expertise — Amazon, Walmart, Target, TikTok Shop only
4. Transparent Reporting — clear communication, structured reporting, actionable insights
5. Proven Track Record — multi-agency experience scaling brands across marketplaces; 90%+ client retention folded in here
6. All-In-One Advertising Partner — strategy, execution, optimization, scaling end-to-end

**Stats (confirmed final, animated count-up on Home + About):** $80M+ Revenue Generated · $7M+ Ad Spend Managed · 45+ Brands Managed · 5+ Years Experience.

**Avoid entirely:** any mention of location/country as a cost signal; any "better than named/unnamed agencies" comparative claim; emoji or checkmark-list formatting; inflated/unverified numbers; positioning as a generalist (no FBA/listings/SEO bundling — advertising strategy only); marketplace logos in the hero or on the About page (they live only in the Services section/page).

**CTA rule (current — reversed from an earlier round, don't pair buttons):** every location gets exactly ONE CTA button, never a pair. Label varies by location, both route to `/contact`: Header = "Get a Free Audit", Hero = "Get in Touch", other CTA banners alternate between the two rather than repeating one everywhere (see `MEMORY.md.md` for the current per-page mapping).

## Content caution — testimonials
Some testimonial content was pulled from the old site. Before using any review, flag if:
- Pronouns don't match Nawal (he is a man — confirmed session 4)
- A testimonial is attributed to his current/former employer rather than an actual client
- A name/company looks fake or like placeholder text

Ask before including anything with these issues. Resolution history is in `MEMORY.md.md`.

## Site structure
Pages: Home, About, Services (standalone, detailed per-offering page), Case Studies (index linking to all — currently 8, case-study-08/TikTok was removed), individual case study pages, Contact. Logo strip using the client logo assets on Home; marketplace logos live only on the Services section/page, not in the hero.

## Contact form
Use **Web3Forms** (free, no backend code) — submissions email to hello@nawalbashir.com. Nawal will provide the access key from web3forms.com when needed.

## Design direction
Premium, editorial, restrained. Real typography and generous whitespace — must not read as a generic AI-template. No filler stock imagery, no repeated background graphics.

## Workflow rule
Before writing significant code, present a short plan (page structure, homepage section order, one-line visual direction) and get confirmation before building it out. This applies to major structural changes going forward, not just the first pass.
