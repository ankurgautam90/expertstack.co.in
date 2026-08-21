# Expertstack — IT Solutions & Systems Integration

A B2B website for a technology solutions and systems integration company, built with
**Next.js 14 (App Router)**, **React 18**, **TypeScript** and **Tailwind CSS**.

**Positioning:** consulting, solution architecture, technology integration,
implementation, cybersecurity, cloud and managed services. Compute, network,
security and storage appear as *technology layers* that solutions are built from —
never as a product catalogue.

The visual design (header, navigation, colours, typography, spacing, cards,
buttons, animations, footer, responsive behaviour) is unchanged from the approved
UI. The repositioning was done in content, information architecture and imagery.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # eslint
```

Requires Node 18.18+ (Node 20 LTS recommended). Verified on Node 18.20.8:
`tsc --noEmit` clean, `next build` clean, 32 static routes generated.

---

## Information architecture

| Nav | Route | Notes |
| --- | --- | --- |
| Home | `/` | 17-section narrative (see below) |
| Solutions | `/solutions/[slug]` | 6 solution areas |
| Services | `/services/[slug]` | 7 lifecycle stages |
| Industries | `/industries/[slug]` | 8 sectors |
| Technology | `/technology/[slug]` | 6 platform layers |
| Company | `/company/*` | about, why-us, ecosystem, case studies, legal |
| Insights | `/insights`, `/insights/[slug]` | 6 engineering notes |
| Contact | `/contact` | Primary conversion route |

Primary CTA throughout: **Talk to an Expert**.

### Homepage narrative

The section order deliberately tells one story:

1. **Business challenge** — `Hero`, `ChallengeSection`
2. **Solution** — `SolutionsGrid`, `CoreSolutions`
3. **Technology + integration** — `IntegrationSection`, `AppIntegrationSection`,
   `CloudSection`, `SecuritySection`, `TechnologyLayersSection`
4. **Implementation** — `ProcessSection` (7 stages)
5. **Operations** — `ManagedServicesSection`
6. **Outcome** — `IndustriesSection`, `WhyChooseUs`, `PartnerSection`,
   `CaseStudiesSection`, `AboutSection`, `FinalCTA`, `ContactSection`

---

## Where the content lives

Everything is data-driven. **Edit the data, not the JSX.**

| File | Contains |
| --- | --- |
| `src/lib/site.ts` | Brand name, tagline, contact details, legal links |
| `src/lib/navigation.ts` | Header mega-menus + footer columns (also feeds search and the 404 page) |
| `src/lib/data/home.ts` | Every homepage section: challenges, solution areas, core solutions, integration layers, cloud, security, technology layers, process, managed services, industries, reasons, ecosystem, case studies |
| `src/lib/data/catalog.ts` | The 27 detail pages across solutions / technology / services / industries |
| `src/lib/data/insights.ts` | Insight articles |

Adding a solution, service, technology layer or industry means adding one object to
the relevant array — route, metadata, sibling links and sitemap entry follow
automatically.

---

## Components

```
src/components/
├─ layout/     Navbar · MegaMenu · MobileMenu · SearchOverlay · Footer
├─ home/       Hero · ChallengeSection · SolutionsGrid · CoreSolutions ·
│              IntegrationSection · AppIntegrationSection · CloudSection ·
│              SecuritySection · TechnologyLayersSection · ProcessSection ·
│              ManagedServicesSection · IndustriesSection · WhyChooseUs ·
│              PartnerSection · CaseStudiesSection · AboutSection ·
│              FinalCTA · ContactSection
├─ cards/      SolutionCard · SolutionAreaCard · ServiceCard · IndustryCard · CaseStudyCard
├─ sections/   DetailPageView · PageBanner · Breadcrumbs · DetailVisual · LegalBody
├─ forms/      ContactForm
├─ ui/         Button · Container · SectionHeading · Reveal · Logo
├─ visuals/    IntegrationStackVisual · AppFlowVisual · CloudVisual ·
│              SecurityVisual · DataCenterVisual · NetworkSwitchVisual ·
│              RackServerVisual · ServerRackVisual · PatternVisual
└─ icons/      Icon (single 24×24 line-icon set)
```

---

## Imagery

All artwork is **generated SVG** — no photography, no external assets, no licensing
question. The primary visuals now communicate integration rather than hardware:

- `IntegrationStackVisual` — the seven-layer architecture (used in the hero)
- `AppFlowVisual` — application ↔ API layer ↔ application ↔ database ↔ analytics
- `CloudVisual` — hybrid platform with workload placement

The hardware drawings (`RackServerVisual`, `NetworkSwitchVisual`, `ServerRackVisual`,
`DataCenterVisual`) are retained but demoted to technology-layer pages, where they
illustrate a component rather than advertise a product.

To move to photography, swap the component inside `sections/DetailVisual.tsx` and the
card media slots for `next/image`, and add `images.remotePatterns` to
`next.config.mjs` if the sources are remote.

---

## Contact form

Fields: Name, Company, Business Email, Phone, Industry, Requirement, Message.
Requirement options are solution-oriented (Cloud Solutions, Software Integration,
Cybersecurity, Network Solutions, Infrastructure, Data Center, Managed Services,
Digital Transformation, Other). Submit button: **Talk to Our Experts**.

Posts JSON to `POST /api/enquiry`, which re-validates every field server-side and
currently logs the enquiry. Wire real delivery at the marked `TODO` in
`src/app/api/enquiry/route.ts` — SMTP, a transactional email API or a CRM webhook.
Credentials belong in `.env.local` and must stay server-side.

A hidden honeypot field silently discards bot submissions.

---

## Legacy URLs

`next.config.mjs` holds permanent redirects from the previous hardware-catalogue
URLs (`/products/*` and the old solution/service/industry slugs) to their current
equivalents, so existing links and bookmarks do not break.

---

## Notes on content accuracy

No statistics, client names, certifications or partnership claims are invented
anywhere on this site. Credibility copy describes *how the company works* rather than
asserting numbers that would need substantiating.

- `PartnerSection` renders **empty logo placeholders** by design — real vendor marks
  should only be added once authorisation is confirmed in writing.
- Insight articles carry no publication dates, because inventing a posting history
  would be dishonest. Add a `date` field to `insights.ts` when publishing for real.
- Legal pages are a drafting starting point and need review by a legal adviser.

---

## Accessibility & responsiveness

- Skip-to-content link; focus-visible rings on every interactive element
- `Escape` closes the mega-menu, search and mobile drawer; menus close on route change
- Mega-menu closes on pointer-out (the backdrop is a header descendant, so it forwards
  the leave intent — see `Navbar.tsx`)
- Body scroll locks behind the mobile drawer
- All motion sits behind `prefers-reduced-motion`
- Single-column mobile, two-column tablet, multi-column desktop; no horizontal scroll
- Breakpoints: `sm` 640 · `md` 768 · `lg` 1024 (nav switches here) · container max 1320px
