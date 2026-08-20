# Expertstack — Enterprise IT Infrastructure Website

A premium B2B website for an enterprise IT infrastructure and technology solutions
company, built with **Next.js 14 (App Router)**, **React 18**, **TypeScript** and
**Tailwind CSS**.

The design brief combined two references, used for **structure and UX only** — no
logos, copy, imagery or code were taken from either:

| Reference | Used for |
| --- | --- |
| Corporate telco-style header (orange.com) | Header architecture: utility strip, sticky bar, shallow two-level mega-menu, right-side search + primary CTA, full-screen mobile drawer |
| Enterprise IT integrator presentation (binaryglobal.com) | Main UI language: large typography, solution cards, dark technical sections, section rhythm and spacing |

Everything on the page — brand, wordmark, artwork, copy and content model — is
original to this project.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm start   # production build
npm run lint                 # eslint
```

Requires Node 18.18+ (Node 20 LTS recommended).

> **Note:** this project was authored on a machine without registry access, so
> `npm install` has not been run against it yet. It pins standard, widely-used
> versions (Next 14.2, React 18.3, Tailwind 3.4) with no exotic dependencies.

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx                  # shell: metadata, fonts, navbar, footer
│  ├─ page.tsx                    # homepage — composes the 15 sections
│  ├─ globals.css                 # base layer, blueprint grids, eyebrow rule
│  ├─ not-found.tsx               # 404 with quick links
│  ├─ icon.svg, robots.ts, sitemap.ts
│  ├─ api/enquiry/route.ts        # contact form endpoint (server-side validation)
│  ├─ solutions/[slug]/page.tsx   # 6 static solution pages
│  ├─ products/[slug]/page.tsx    # 6 static product pages
│  ├─ services/[slug]/page.tsx    # 7 static service pages
│  ├─ industries/[slug]/page.tsx  # 8 static industry pages
│  └─ company/…                   # about, why-choose-us, partners, case studies, legal
├─ components/
│  ├─ layout/     Navbar · MegaMenu · MobileMenu · SearchOverlay · Footer
│  ├─ home/       Hero · CategoryGrid · CoreSolutions · RackServerSection ·
│  │              NetworkSection · SecuritySection · DataCenterSection ·
│  │              ProcessSection · IndustriesSection · WhyChooseUs ·
│  │              PartnerSection · CaseStudiesSection · AboutSection ·
│  │              FinalCTA · ContactSection
│  ├─ cards/      SolutionCard · ProductCard · ServiceCard · IndustryCard · CaseStudyCard
│  ├─ sections/   DetailPageView · PageBanner · Breadcrumbs · DetailVisual · LegalBody
│  ├─ forms/      ContactForm
│  ├─ ui/         Button · Container · SectionHeading · Reveal · Logo
│  ├─ visuals/    ServerRackVisual · RackServerVisual · NetworkSwitchVisual ·
│  │              SecurityVisual · DataCenterVisual · PatternVisual
│  └─ icons/      Icon (single 24×24 line-icon set)
└─ lib/
   ├─ site.ts        # brand name, contact details, legal links
   ├─ navigation.ts  # header mega-menus + footer columns
   ├─ search.ts      # flat search index derived from navigation
   ├─ utils.ts
   └─ data/
      ├─ home.ts     # categories, core solutions, process, industries, reasons,
      │              # partner categories, case studies
      └─ catalog.ts  # 27 detail pages (solutions/products/services/industries)
```

---

## Customising

### 1. Brand

Everything brand-level lives in [`src/lib/site.ts`](src/lib/site.ts) — company name,
legal name, tagline, phone, email, address, hours, social links. Change it there and
the header, footer, contact section, metadata and legal pages all follow.

The wordmark is [`src/components/ui/Logo.tsx`](src/components/ui/Logo.tsx). Replace
the inline `<svg>` with a real logo asset when brand files exist; the favicon is
`src/app/icon.svg`.

### 2. Navigation

[`src/lib/navigation.ts`](src/lib/navigation.ts) drives the desktop mega-menus, the
mobile drawer, the search index and the 404 quick links. Add a link once and it
appears in all four.

### 3. Content

- Homepage content → `src/lib/data/home.ts`
- Detail pages → `src/lib/data/catalog.ts` (each entry generates a static route)

Adding a new solution/product/service/industry means adding one object to the
relevant array — the route, metadata, sibling links and sitemap entry follow
automatically.

### 4. Colour and type

`tailwind.config.ts` holds the palette:

| Token | Role |
| --- | --- |
| `navy.*` | Primary — deep navy, the structural colour |
| `accent.*` | Strong modern blue — all interactive elements |
| `ember.*` | Small warm accent — eyebrow rules, numerals, single logo bar |
| `surface.*`, `ink.*` | Whites, light greys and text greys |

Typography is Inter (body) + Manrope (display), loaded via a `<link>` in
`layout.tsx` rather than `next/font` so the project builds without network access.
Both fall back to the system UI stack.

### 5. Imagery

All artwork is **generated SVG**, not photography: rack elevations, a 2U server face,
a 48-port switch, a segmentation diagram, a cold-aisle view, plus four abstract
`PatternVisual` variants for cards. This keeps the repo dependency-free and free of
any licensing question.

To move to photography, replace the component inside
[`DetailVisual.tsx`](src/components/sections/DetailVisual.tsx) and the card media
slots with `next/image` elements. Add `images.remotePatterns` to `next.config.mjs` if
the images are remote.

### 6. Contact form

The form posts JSON to `POST /api/enquiry`. That route re-validates every field
server-side (the browser form can be bypassed) and currently logs the enquiry. Wire
real delivery at the marked `TODO` in
[`src/app/api/enquiry/route.ts`](src/app/api/enquiry/route.ts) — SMTP, a transactional
email API or a CRM webhook. Keep credentials in `.env.local`; they must stay
server-side.

The form also carries a hidden honeypot field; submissions that fill it are silently
discarded.

### 7. Partner logos

`PartnerSection` renders **empty placeholder slots** by design. Real manufacturer
marks should only be added once partnership or authorisation is confirmed in
writing — trade marks remain the property of their owners.

---

## Notes on content accuracy

No statistics, client names, certifications or partnership claims are invented
anywhere in this site. Credibility copy describes *how the company works* rather than
asserting numbers that would need substantiating. The legal pages are a drafting
starting point and should be reviewed by a legal adviser before publication.

---

## Accessibility & responsiveness

- Skip-to-content link, focus-visible rings on every interactive element
- `Escape` closes the mega-menu, search and mobile drawer; menus close on route change
- Body scroll locks behind the mobile drawer
- All motion is behind `prefers-reduced-motion`
- Single-column mobile, two-column tablet, multi-column desktop; no horizontal scroll
- Breakpoints: `sm` 640 · `md` 768 · `lg` 1024 (nav switches here) · container max 1320px
