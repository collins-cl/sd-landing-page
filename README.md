# SkillDuel — Landing Page

The marketing landing page for **SkillDuel**, a real-time quiz duel game: challenge anyone to a five-question duel on any topic in the world — chess-clock tight, Duolingo satisfying.

A single scrollable route (`/`) designed to turn a curious visitor into a duelist. Quiet, premium, confident — oversized editorial type, real product screenshots as evidence, and exactly two CTAs: **Create your account** and **Start a duel**.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) — static, server components by default
- Plain JSX — no TypeScript
- SCSS modules — one stylesheet per component, design tokens as CSS custom properties
- [framer-motion](https://www.framer.com/motion/) — entrance, parallax, marquee and scroll-reveal animations (respects `prefers-reduced-motion`)
- [lucide-react](https://lucide.dev) — icons

## Getting started

```bash
npm install
npm run dev       # development server on http://localhost:3000
```

```bash
npm run build     # production build
npm run start     # serve the production build
```

## Page anatomy

| Section | What it does |
|---|---|
| Sticky header | Wordmark + a single monochrome "Sign up" pill. No navlinks, no hamburger. |
| Hero | Two-tone H1, lead, both CTAs, and three fanned phone mockups with a scroll parallax on the copy. |
| Topic marquee | Infinite horizontal loop of duel topics on a muted band. |
| The mechanics | 2×2 feature grid — hairline gutters inside a rounded container. |
| The duel | Editorial two-column: copy + checklist left, live-duel mockup right. |
| The reward | Rhythm-alternated two-column: result mockup left, copy right. |
| The stage | Trio of mockups, middle phone raised, captioned. |
| Closing CTA | Massive centered headline, both CTAs repeated, fine print. |
| Footer | Mini wordmark, copyright, one quiet sentence. |

The CTAs link to `/auth` and `/duel/topic` — routes owned by the SkillDuel app itself, not this repo.

## Project structure

```
app/
├── layout.jsx            # root layout — Inter font, global styles, metadata
├── page.jsx              # the landing page, assembled from sections
├── globals.scss          # design tokens (CSS custom properties) + base styles
└── icon.svg              # favicon — the swords wordmark tile

components/landing/
├── _shared.scss          # shared mixins: container, overline, section H2, lead
├── header/               # each component: component.jsx + component.module.scss
├── hero/
├── cta/
├── device-frame/
├── topic-marquee/
├── mechanics/
├── duel-section/
├── reward-section/
├── stage-section/
├── closing-cta/
├── footer/
└── motion-provider/      # MotionConfig wrapper (reduced-motion support)

pictures/                 # product mockup screenshots (420×900 @2×)
design-landing.md         # the design spec this page implements
```

## Conventions

- App Router exclusively; every route is a `page.jsx`
- Server components by default — `"use client"` only where hooks or browser APIs are required
- Each component lives in its own folder with its own `.module.scss`
- No index barrel files
- Design values come from tokens in `globals.scss` — nothing hardcoded in components

## Design spec

The page is a faithful implementation of [`design-landing.md`](./design-landing.md) — section blueprints, exact copy, type scale, motion timings, and anti-patterns are all defined there.
