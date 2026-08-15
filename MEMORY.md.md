# Project Memory — Nawal Bashir Portfolio Website

This file is the running memory for this project. Claude reads and updates it each session so context carries forward. Last updated: 2026-08-15 (session 8 — hero polish + logo strip label sizing).

## Session 8 (2026-08-15) — polish pass
Hero: increased overall vertical presence (`pt-20 md:pt-28` instead of default `.section` padding), headline bumped to `text-5xl md:text-6xl` (was `4xl/5xl`), subtext to `text-lg md:text-xl`. "E-Commerce" wrapped in a `whitespace-nowrap` span so it can never break mid-word onto its own line regardless of viewport. Fixed missing space in "with a focus on profitability" (same line-break whitespace-collapse issue as before, fixed with `{" "}`). Photo, grid layout, and single "Get in Touch" CTA untouched, as instructed.

Logo strip label ("Brands & agencies I've worked with", `LogoStrip.astro`): `text-xs font-semibold` → `text-base md:text-lg font-bold`. Same font family and `text-slate` color, sizing/weight only. Logos themselves untouched.

**Pronoun note — RESOLVED (session 4, 2026-08-14):** Nawal confirmed directly: "I'm not a woman, I'm a male." He/him is correct. Session 1's "I'm a woman" was wrong/outdated. This closes flag #1 below. Site copy is still written in first person throughout (that was the original brief's voice anyway), so no content rewrite was needed — this just removes the open question.

## Status — first build pass complete (2026-08-14, session 3)
A working static site now exists in this folder: **Astro 7 + Tailwind v4**, static output, ready for Cloudflare Pages. `npm install` and `npm run build` both succeed (13 pages generated); dev/preview server smoke-tested and pages return 200.

**Stack decisions:** Astro (content-collections fit the 9 markdown case studies well, zero-JS by default for a fast/premium feel), Tailwind v4 via `@tailwindcss/vite`, Inter font, navy/blue-on-white design tokens in `src/styles/global.css`.

**What's built:**
- `src/content.config.ts` + `src/content/case-studies/case-study-01..09.md` — all 9 case studies as structured frontmatter (title, order, category, summary, stats[], problem, solution, results, images[]), copied faithfully from the original prose in `content/case-studies/*.md`.
- `src/layouts/Base.astro`, `src/components/Nav.astro`, `Footer.astro` — site chrome.
- `src/components/LogoStrip.astro` (auto-scrolling client logos), `Testimonials.astro` (client quotes carousel), `References.astro` ("Professional references" section, visually separate from client testimonials), `CaseStudyCard.astro`, `CTASection.astro`.
- `src/pages/index.astro` (Home), `about.astro`, `contact.astro` (Web3Forms), `case-studies/index.astro`, `case-studies/[slug].astro` (dynamic, with prev/next nav).
- Assets reorganized into `public/images/{logos/clients, logos/marketplaces, personal, case-studies/case-study-0N}` — copied from the original `assets/images/...` folders, case-study images matched strictly by folder number per Nawal's instruction.
- `.gitignore` added (node_modules, dist, .astro, .env). **Not yet a git repo** — no `git init`/commit/push has been done; that's a deliberate next step to confirm with Nawal before doing.

**Not done yet / stubbed (current as of session 7):**
- Contact form: fully wired with a real Web3Forms access key (session 9), domain-restricted to nawalbashir.com — will only actually work once live on that domain, not on localhost.
- No git repo / GitHub push / Cloudflare Pages connection yet — **now in progress**, see "Going live" section below.
- Service descriptions on `/services` and the homepage Services section were written by Claude to match Nawal's positioning — not yet reviewed line-by-line by him.

## Session 5 (2026-08-15) — design revision pass
Feedback: liked the case-study content adaptation, the hero banner, the logo strip, and the case study images, but said the overall feel was too close to a generic freelancer-template look and wanted it more premium/editorial. Changes made:
- **Typography**: added Fraunces (serif, optical sizing) as a display font for all h1/h2/h3 via `--font-display` token in `src/styles/global.css`, paired with Inter for body/UI — the main lever for a less templated, more editorial feel. Bumped major heading sizes up a step (hero to `text-6xl`, section h2s from `text-4xl` to `text-5xl` at desktop). Buttons changed from full pill (`border-radius: 999px`) to a moderate rounded-rectangle (`0.75rem`) — reads more consulting-grade, less generic-SaaS. One restrained signature touch: "profitability" in the hero subhead is set in italic Fraunces.
- Marketplace logos in the hero enlarged (`h-6` → `h-9`/`h-11` desktop) — were flagged as too small.
- Removed the "Strategy is also informed by Amazon Marketing Cloud data..." paragraph from the homepage Why-Work-With-Me section entirely (disliked).
- Removed the "Selected results" eyebrow label above "Real results from real brands" on the homepage case studies preview (kept the heading and everything else in that section).
- Testimonial cards (`Testimonials.astro`) and reference cards (`References.astro`) now show the client/employer's logo next to the reviewer's name and company, not just text.
- Footer rebuilt to match the original mockup's column structure (Quick Links / Contact Info) more closely; phone number slot added but empty (see flag #1).

## Session 6 (2026-08-15) — major section-by-section revision
Nawal gave a detailed, section-by-section spec referencing https://timmaule.com/ for structural inspiration (header pattern, service breakout, stat badge, testimonial block) — explicitly NOT for wording/content. Confirmed understanding back to her before building, per her request. Changes:

**Site-wide**: every CTA is now a pair — "Get a Free Audit" + "Get in Touch," both → `/contact` — via new shared `src/components/CTAButtons.astro` (used in Nav, hero, `CTASection.astro`, Footer). Phone number **+1 (771) 220-4872** added to header top bar, mobile menu, and footer.

**Header** (`Nav.astro`, all pages): rebuilt as a two-tier header per timmaule.com's pattern — slim navy top bar (phone + email) above the main nav. Main nav now has a navy "NB" monogram badge (`LogoMark.astro`) next to a larger wordmark, bigger nav links, and the CTA pair on the right. Added "Services" to nav (Home / About / Services / Case Studies / Contact).

**Homepage hero**: same fonts, but headline size dialed back (was too large/tight last pass), hero photo made noticeably smaller and contained (was too dominant), copy hierarchy is now a shorter bold line → smaller supporting line → CTA pair. Marketplace logos **removed** from the hero (moved to Services, see below).

**New stats tile section**: added right after the hero — $80M+ / $7M+ / 45+ / 5+ Years, in a 4-tile row.

**Brand/agency logo strip** (`LogoStrip.astro`): sized up significantly (h-8 → h-14/h-16) — now a real trust signal, not a footnote.

**New Services section + standalone page**: `src/data/services.ts` (5 services: Amazon, Walmart, Target, TikTok Shop, AMC — each with short + long description) and `src/components/ServiceIcon.astro` (5 simple hand-drawn line icons — cart, spark, target, play, cloud — no external icon library). `ServicesGrid.astro` renders the homepage version (short descriptions + the 4 marketplace logos, now living here instead of the hero) and `src/pages/services.astro` is the new standalone page (long descriptions, one section per service, marketplace logos again, own CTA).

**Why Work With Me**: "Serious account experience" → "Enterprise account experience" (same content), retention card now says "90%+ client retention," "Cross-category range" card removed entirely (6 cards → 5).

**Testimonials unified**: `References.astro` deleted entirely (component + all usages). Kate Grubel's quote is gone from the site. Matthew Koski folded into the main `Testimonials.astro` carousel as a normal 4th entry — no client/colleague distinction or labeling anywhere. Heading changed from "What Clients Say" to "What People I've Worked With Say." Visual size/format of the carousel itself unchanged (Nawal said it was working well).

**About page**: bio rewritten in third person ("Nawal Bashir is a retail media strategist who..."), pipe-separated expertise line added above the headline ("Amazon Advertising | Retail Media Strategy | Multi-Marketplace Growth"), key phrases bolded throughout, photo treatment improved (shadow, contained aspect ratio) with a floating "5+ Years Experience" stat badge overlapping the bottom-right corner (timmaule.com pattern). `References.astro` import/usage removed here too — About now just has bio → unified Testimonials → CTA.

**Contact page**: fixed missing space in "Reach out directly at hello@nawalbashir.com" (was two text nodes butting together across a line break — fixed with an explicit `{" "}`).

**Case studies**: untouched, confirmed working as-is.

All of the above verified in the built HTML output (grepped the served preview for every specific change) after a clean `npm run build` — 13 pages generated, all key routes return 200.

## Session 7 (2026-08-15) — final revision round
Nawal reversed the CTA-pairing rule from session 6 and gave a detailed final pass across every section. Confirmed understanding back to her first, per her request. Changes:

**CTA system rewritten**: `CTAButtons.astro` (pair) deleted, replaced with `CTAButton.astro` (single button, `label` prop). No location shows two CTA buttons together anymore. Current per-location mapping (varies deliberately, and specifically avoids two adjacent single-CTA spots ever showing the same label — e.g. a page's bottom banner never matches the footer right below it):
- Header (`Nav.astro`, all pages, desktop + mobile): "Get a Free Audit"
- Footer (all pages): "Get in Touch"
- Home hero: "Get in Touch"; Home bottom `CTASection`: "Get a Free Audit"
- About `CTASection`: "Get a Free Audit"
- Services `CTASection`: "Get a Free Audit"
- Case studies index `CTASection`: "Get a Free Audit"
- Case study detail `CTASection`: "Get a Free Audit"
(`CTASection.astro` takes a `cta="audit"|"touch"` prop per call site.)

**Header**: single "Get a Free Audit" button only (was a pair).

**Homepage hero**: eyebrow "Retail media strategy" removed. New headline: "Retail Media Partner for E-Commerce Brands." New subtext: "Driving growth across Amazon, Walmart, Target, and TikTok Shop — with a focus on profitability, not just ad spend." This **replaces** the earlier "exact framing" hero statement from session 2 — `CLAUDE.md` has been updated to reflect this as current, don't revert to the old sentence.

**Why Work With Me → "Why brands choose to work with me"**: renamed with new tagline ("Built around your results and growth, not around a task list"), all 6 cards replaced with Nawal's exact new set (Custom-Built Strategies, Profit-First Advertising, Multi-Platform Expertise — Amazon/Walmart/Target/TikTok Shop only, no Etsy/Chewy —, Transparent Reporting, Proven Track Record — 90%+ retention folded in —, All-In-One Advertising Partner). Same font/size/navy scheme as before, content-only swap.

**Marketplace logos fully removed** from the site — were in Services (homepage section + standalone page) after session 6's move out of the hero; now gone entirely per Nawal's call ("redundant... read too small/odd regardless"). `src/data/marketplaces.ts` deleted (no remaining usage).

**Stats section**: now animated count-up counters (`src/components/StatsRow.astro`) that trigger via IntersectionObserver when scrolled into view, easing over ~1.4s, respects `prefers-reduced-motion` (jumps straight to final value). Same 4 numbers as before. Also added to the About page (new for session 7 — About didn't have a stats section before).

**Footer**: tagline replaced with "Take the stress of advertising off your plate. Get a free account audit and a personalized growth plan to identify opportunities for profitable growth." LinkedIn is now an actual brand-blue (#0A66C2) LinkedIn icon + the word "LinkedIn" together (inline SVG, Simple Icons glyph). LinkedIn URL used: `https://www.linkedin.com/in/nawalbashir` — the one from Nawal's original session-1 notes; her session-7 message referenced pasting a URL but it didn't come through (literal unfilled placeholder text arrived instead) — **flag this back to her to confirm it's still correct.**

**About page**: spacing bug fixed ("established eight-figure brands"). New headline: "The person running your account is the person you talk to." Final bio paragraph trimmed — dropped the flat-retainer sentence (that messaging now lives only in the Why-Work-With-Me "Profit-First Advertising" card, not repeated on About). Animated stats block added.

**References.astro and Kate Grubel — now fully gone (supersedes the session-5 resolution below).** Nawal asked to unify testimonials into one section: `References.astro` deleted (component file + both usages, on About). Kate Grubel's quote is not used anywhere on the site anymore. Matthew Koski's quote was folded into the main `Testimonials.astro` carousel as an ordinary 4th entry, with zero client/colleague labeling — heading changed from "What Clients Say" to "What People I've Worked With Say." Visual size/format of the carousel unchanged.

All changes grep-verified against the built/served HTML after a clean `npm run build` (13 pages, all key routes 200) — including confirming no two adjacent CTA spots repeat the same label.

## Open flags — still need Nawal's input
1. ~~Web3Forms access key~~ — **RESOLVED session 9**: real key added to `src/pages/contact.astro` (`WEB3FORMS_ACCESS_KEY`), domain-restricted to nawalbashir.com in the Web3Forms dashboard. Form will only actually submit successfully once live on that domain — local/preview testing will show an error, which is expected, not a bug. Verify the confirmation email from Web3Forms was confirmed at hello@nawalbashir.com or submissions won't deliver.
2. **Service descriptions** (`src/data/services.ts`, `short`/`long` per service) were written by Claude to match Nawal's positioning/tone — not yet reviewed line-by-line by him. Worth a read-through before treating as final.
3. ~~LinkedIn URL~~ — **RESOLVED session 9**: confirmed `linkedin.com/in/nawalbashir` is correct, no change needed.

## Resolved session 5/6/7 (do not re-flag)
- Phone number: **+1 (771) 220-4872** — provided session 6, live in header top bar, mobile menu, and footer.
- Stats: **confirmed final** — $80M+ Revenue Generated, $7M+ Ad Spend Managed, 45+ Brands Managed, 5+ Years Experience. Live on Home and About, now animated (session 7).
- Categories: don't list categories — the "Cross-category range" pillar card was removed entirely (session 6), and the whole pillar set was replaced again in session 7 with no category list.
- CTA button pairing: session 6 wanted every CTA paired; **session 7 reversed this — never pair, single button per location, varying label.** Current mapping logged above under Session 7.
- Marketplace logos: removed from hero (session 6), then removed from Services entirely too (session 7) — no longer anywhere on the site.

## Resolved (do not re-flag)
- Gender/pronouns: confirmed male, he/him (session 4). Photos and testimonial pronouns (Matthew Koski, Junior Gupta) already consistent with this.
- Case study display order: **folder order, final and authoritative** (now 1–7, 9 — see below).
- "Arby Coin – Great Eagle Lightning Corporation" testimonial: confirmed real, used as-is.
- Matthew Koski / Junior Gupta testimonial pronouns: confirmed accurate as written, not edited.
- **Colleague references (Matthew Koski, Kate Grubel) — resolved session 5, then superseded session 7.** Session 5: Nawal confirmed both were real colleagues at Envision Horizons and approved using their actual feedback text, kept visually separate from client testimonials in `References.astro`. **Session 7 changed this**: References.astro deleted entirely, Kate Grubel dropped from the site completely, Matthew Koski merged into the main unified testimonials carousel with no colleague/client distinction. See Session 7 log above — this bullet is kept only for history.
- **Case-study-08 (TikTok Shop) removed entirely (session 5)** — Nawal said it looked odd with no image, keep only the 8 with images. Deleted `src/content/case-studies/case-study-08.md`; site now has 8 case studies. Homepage featured cards swapped `case-study-08` → `case-study-06` (Drift). Case studies index copy updated from "Nine accounts..." to "Eight accounts...".

## Folder map
- `assets/images/Company Logos/` — Baby Proof Me, Envision Horizons, Great Eagle, Homespice, Ultimate Footwear, Umbrella Fund, US Polo, XP Strategy (for "Brands & Agencies I've Worked With" logo carousel).
- `assets/images/Marketplace LOGOS/` — Amazon Ads, Target Ads, TikTok Shop Ads, Walmart Connect (hero marketplace row + Services section).
- `assets/images/personal photos/` — 6 headshots (`11.jpg`–`66.jpg`) + `NB Photo Current Website.png` (the photo currently live on nawalbashir.com — navy shirt, grey background; default hero photo unless told otherwise).
- `assets/images/Ideas - Instructions & Order of case Studies/` — design references, all screenshots from the *current live* nawalbashir.com (Webflow) site:
  - `Free audit - Idea.png` — the Free Audit CTA banner (dark blue block, bullet list, "Book a Free Audit" button).
  - `Upsides of working with me - IDEA.png` — the "Why Brands Choose to Work With Me" 6-card grid (alternating filled/outline blue cards).
  - `contact form - idea.png` — contact form fields: First Name, Last Name, Phone Number, Email, Message, Submit.
  - `Order of case study.png` — screenshot of a Google Doc's tab list. **This is the only place the intended case-study display order exists.**
  - `Case study Instruction.txt` — each case study should follow Snapshot/Scorecards → Problem → Solution → Results, images placed thoughtfully, visuals matching site theme.
- `assets/images/Images for Case Studies (Numbered)/case-study-01..09/` — supporting screenshots per case study (`case-study-08` has none).
- `content/case-studies/case-study-01.md` … `-09.md` — full copy per case study (title, snapshot stats, Problem, Solution, Results). See table below.
- `content/Reviews/Reviews.md` — 4 usable client testimonials (below). `Reviews - Guidance.md` — slider UX spec. The 3 `.png` files in that folder are internal Envision Horizons feedback-tool screenshots (peer praise, not client quotes) — supporting evidence only, not publishable testimonial text.
- `content/home page guidance.md` — detailed, authoritative 9-section homepage brief.
- `content/About me section.md` — despite the filename, this is an *alternate simpler draft* of full homepage copy, not About-page-specific content. Its "About" paragraph (Section 3) is the best personal-narrative copy available so far.
- `content/Additional Guidance & Relevant websites.md` — duplicate of this file's original raw notes (kept below).

## Design direction
Clean, premium, "consulting-grade": white background, deep professional blue accents, **Inter** font (headings + body), generous white space, minimal/simple icons, soft card shadows, smooth hover effects, large headlines.

Reference sites: szadil.com, envisionhorizons.com, incrementumdigital.com, myamazonguy.com, btrmedia.com, triviumco.com. szadil.com/case-studies/ specifically called out as the case-studies-page model.

The current nawalbashir.com Webflow site already matches the intended look — lean on its screenshots directly for the Free Audit CTA, the "Why Choose Me" grid, and the contact form.

## Homepage structure (from `home page guidance.md`, authoritative)
1. **Hero** — two-column (left text / right photo). Headline: "One-Stop Advertising Growth for E-commerce Brands" (alt: "An In-House Growth Partner for Multi-Marketplace Brands"). Supporting line, primary CTA "Get Your Free Audit", marketplace logos row, secondary "View Services" button.
2. **Social Proof stats** (animated counters): $50M+ Revenue Generated · $6M+ Ad Spend Managed · 45+ Brands Managed · 5+ Years Experience.
3. **Brands/Agencies logo carousel** — auto-scrolling, logos from Company Logos folder.
4. **Why Choose Me** — 6 cards: Custom-Built Strategies, Profit-First Advertising, Multi-Platform Expertise, Transparent Reporting, Proven Track Record, All-In-One Advertising Partner.
5. **Services Overview** — cards: Amazon Ads Management, Walmart Ads Management, Amazon DSP, TikTok Shop Advertising, Multi-Marketplace Advertising, Complimentary Advertising Audit. Each has "Learn More" → Services page.
6. **Case Studies Preview** — 3 cards (category, problem, key result, "View Case Study" button) → full case studies page.
7. **Testimonials** — 1-at-a-time slider, auto-slide right→left, infinite loop, optional pause-on-hover. Shown on **both** Homepage and About Me page.
8. **Final CTA** — "Ready to Scale Your Advertising?" → "Request Your Free Audit".
9. **Footer** — logo/name, short description, nav links, email, LinkedIn, copyright.

## About narrative (usable copy, from "About me section.md" Section 3)
Started in eCommerce 5+ years ago, working inside agencies, with aggregators, alongside experienced Amazon operators. Managed/scaled brands across marketplaces — building from scratch to 7 figures, and unlocking growth for established 8-figure brands. Role expanded beyond campaign management: led advertising teams, built SOPs, developed internal training systems, streamlined operations for brands and agencies. Today works directly with founders, CEOs, CMOs, and media teams — six-figure monthly ad spend accounts, catalogs with thousands of SKUs, brands competing at the top of their category.

## Testimonials (content/Reviews/Reviews.md)
- **Matthew Koski – Envision Horizons (5★):** "His work is clean, reporting is very detailed, and always on time. Takes ownership, helps beyond just his scope, and you can rely on him to deliver. Communication is clear, consistent. Just reliable overall."
- **Junior Gupta – HomeSpice (5★):** "I was working with My Amazon Guy before, so switching to in-house… tbh wasn't sure. But Nawal changed that. Within 3 months of bringing him on, we hit highest monthly revenue, while staying within our TACoS targets. Biweekly calls with him are effective and he always brings great recommendations. I am not an easy client to work with and I appreciate the hard work."
- **Tim Kopnia – XP Strategy (5★):** "Really solid working with Nawal. Very proactive. Strong on problem solving. Communication is clear. Execution is strong, things actually get done."
- **Arby coin – Great Eagle Lightning Corporation (5★):** "Having worked with 2 different agencies before, this level of ownership and follow-through is rare. Nawal's very strong with the data, but also explains things in a way that actually makes sense. Good communication."
- Kate Grubel — Envision Horizons — listed as a reviewer but no quote text was ever filled in.

## Case studies — topic map + images
| # | Subject | Headline result | Images |
|---|---------|------------------|--------|
| 01 | VERSA (Amazon) | From Zero to $2M in 12 Months | 4 |
| 02 | Ultimate Footwear (8-fig, 10K+ SKUs) | +70.7% YoY, $7.2M+ YTD | 2 |
| 03 | AKA (Q4 gift launch) | $129K rev, 4.6% TACoS, 26.5% margin | 1 |
| 04 | Catch-All campaigns (strategy piece, no brand) | Incremental revenue via long-tail coverage | 3 |
| 05 | Valentine's Day seasonal launch | 574 units, $6.5K+ rev, 23%+ margin | 1 |
| 06 | Drift (8-fig automotive) | +115% YoY, on track to $50M | 3 |
| 07 | Walmart account | +53.71% GMV, Q3 vs Q2, ~6% TACoS | 2 |
| 08 | TikTok Shop | 3.2x growth in 90 days | **none** |
| 09 | AMC / Amazon Marketing Cloud | 2.3x ROAS lift (1.31→3.05) | 4 (generic) |

**Case study display order (NOT the numeric order above)** — from `Order of case study.png` (Google Doc tabs): **1, 2, 6, 4, 7, 3, 5, 8, 9**.

## Contact / footer info
- Email: hello@nawalbashir.com
- LinkedIn: www.linkedin.com/in/nawalbashir
- Footer CTA: "Reach out for a free Audit"
- Marketplaces served: Amazon, Walmart, Target, TikTok Shop, Etsy, Chewy.

---

## Original raw notes (kept for reference, unedited)

Website color Scheme

Look at the example website and picture above. I want a clean premium style design. White background with deep professional blues. The website should feel modern, minimal, and consulting-grade. Use the Inter font for headings and body text. The design should have lots of white space, clean sections, and simple icons

Homepage Guidance

https://docs.google.com/document/d/1hmM_GS16pEgmCyiwzTZQnlTfGQJdL9tsLiG8kLrW_Nc/edit?tab=t.0

**Relevant Websites**

Use these to take an idea or any additional content if you need

https://szadil.com/
https://www.envisionhorizons.com/
https://incrementumdigital.com/
https://myamazonguy.com/
https://btrmedia.com/
https://triviumco.com/

Contact form

Email
hello@nawalbashir.com

Linkedin Profile
www.linkedin.com/in/nawalbashir

You can these in the Footer section

You can add a CTA Button
Reach out for a free Audit

There will also be an About Me section on the homepage where I want to share a bit of my personal story and my overall approach to advertising.

I want this section to feel very human and personal — explaining how I think about advertising, how I work with brands, and the philosophy behind my approach. It should feel more like a short story rather than something overly corporate.

I'm still working on writing this part because I want it to be authentic and well thought out. I'll send you the final content for this section shortly once I finish it.
