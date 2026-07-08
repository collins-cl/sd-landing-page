# SkillDuel — Landing Page Design Spec

> Companion to the master `design.md`. This file governs **only** the marketing landing page at `/`. It's a single scrollable route rendered by `src/pages/Landing.tsx` with no `AppLayout` chrome, no bottom nav, and no in-app navlinks.

---

## 1. Intent

The landing page has one job: **turn a curious visitor into an authenticated duelist**, or — for a returning user — a duel starter. Every section is written and framed to defer to that outcome.

- **Aesthetic north star:** Awwwards editorial + Mobbin product marketing. Think Linear's homepage rhythm, Rauno's typographic restraint, Arc's confident hero mockups.
- **What it must feel like:** quiet, premium, confident. Slightly oversized type. Real product screenshots as evidence, never illustration.
- **What it must not feel like:** a SaaS template. No feature-bullet triads with generic icons in colored circles-on-white. No hero-with-abstract-blob. No stock photography.

---

## 2. Route & wiring

| Concern | Value |
|---|---|
| Route | `/` |
| Component | `src/pages/Landing.tsx` |
| Layout | Standalone — **does not** use `AppLayout`. No bottom tab bar, no top navlinks. |
| Dashboard moved to | `/home` (updated in `src/App.tsx` and `src/components/AppLayout.tsx`) |
| Post-auth redirect | `navigate("/home")` in `src/pages/Auth.tsx` |

**Only two CTAs exist on the page** — repeated in the header, hero, and closing section:

1. **Primary** → `/auth` — "Create your account" / "Sign up"
2. **Secondary** → `/duel/topic` — "Start a duel"

No "Features", "Pricing", "About", "Docs", "Blog", or hamburger menu — desktop or mobile.

---

## 3. Design tokens (inherited)

All values reference the master design system in `src/index.css`. Do not hardcode.

| Token | Used for |
|---|---|
| `--background` / `paper` `40 20% 98%` | Page canvas, sticky header (blurred), footer |
| `--foreground` / `ink` `230 25% 12%` | Display type, wordmark tile, first-half of two-tone headline |
| `--muted-foreground` `230 10% 48%` | Body copy, second-half of two-tone headline, footer text |
| `--muted` `230 15% 94%` | Marquee band, alternating section bands, "Start a duel" hover |
| `--primary` / `indigo` `234 60% 50%` | Primary CTA fill, wordmark tile, "thirty seconds away" accent, marquee dot, live-beta pulse dot, feature icon color |
| `--accent` `234 60% 95%` | Feature-icon square background |
| `--border` `230 15% 90%` | Hairlines: header, section dividers, feature-grid gutters, pill borders, device frames, footer |
| `--card` `0 0% 100%` | Secondary CTA fill, topic pills, feature grid cell |

**One accent per screen** rule still applies: indigo is the only chromatic color. Coral does not appear on the landing page.

---

## 4. Typography scale (landing-specific overrides)

Master spec caps `display` at 32px because it targets in-app. Landing intentionally goes larger — this is where the page earns its Awwwards look.

| Role | Mobile | Desktop | Weight | Tracking | Notes |
|---|---|---|---|---|---|
| Hero H1 | 44 / 1.02 | 88 / 0.98 | 700 | -0.03em | Two lines, second line in `--muted-foreground` for calm counterweight |
| Section H2 | 32 / 1.05 | 52–56 / 1.02 | 700 | -0.02em | Never centered except in the closing CTA |
| Closing H2 | 40 / 1.02 | 92 / 0.98 | 700 | -0.03em | Centered. Second line color `--primary` |
| Overline | 11 | 11 | 600 UPPER | 0.18em | Section eyebrows ("THE MECHANICS") — always `--primary` |
| Lead paragraph | 16 / 1.6 | 19 / 1.6 | 400 | 0 | Hero + section leads, max-width ~`max-w-lg` |
| Body | 15 / 1.55 | 15 / 1.55 | 400 | 0 | Feature-card body, checklist rows |
| Micro | 12–13 | 12–13 | 500 | 0 | Pills, footer, CTA fine print |

Family stays `Inter` only, weights 400/500/600/700. No secondary display face.

---

## 5. Motion

Uses `framer-motion`. Everything respects `prefers-reduced-motion` — transforms degrade to opacity fades (inherited from master spec).

| Interaction | Behavior | Timing |
|---|---|---|
| Hero entrance | H1, lead, CTA row: `opacity 0→1` + `y 12→0`, staggered 0/50/150/250 ms | 600–700 ms, standard ease |
| Hero mockup cluster | Three phones fan in: center rises, left/right rotate to ±6° | 900 ms, delay 50–200 ms |
| Hero parallax | `useScroll` on hero section → `y: 0 → -80`, `opacity: 1 → 0.4` on the copy block only (mockups stay put) | Bound to scroll progress |
| Topic marquee | Horizontal loop `x: 0% → -50%`, list tripled for seamless wrap | 40 s linear, infinite |
| Live-beta dot | `animate-pulse` (Tailwind) | Continuous |
| Section reveal | Editorial trio phones: `y 24→0`, `opacity 0→1`, on view, `once: true`, stagger 80 ms | 600 ms |
| CTA hover | Primary: shadow softens up (see §6). Secondary: `bg-card → bg-muted`. Icon arrow: `translate-x-0.5` | 180 ms |
| Closing H2 | Fades and rises on scroll into view | 700 ms |

**No confetti, no scroll-jack, no cursor blob, no auto-playing video.** Motion is atmospheric, not demanding.

---

## 6. Elevation & radii

- **Header:** hairline bottom border only. `backdrop-blur-md` on `--background / 70%`.
- **Device frames (`DeviceFrame`):** outer soft glow `blur-2xl` at 5% ink opacity behind the frame; frame itself is `--foreground` at 90% opacity, `p-2`, `rounded-[2.5rem]`, screenshot clipped in a `rounded-[2rem]` inner window. Drop shadow: `0 30px 80px -30px hsl(230 25% 12% / 0.35)`.
- **Primary CTA shadow:** `0 10px 30px -8px hsl(234 60% 50% / 0.5)` at rest → `0 16px 40px -8px hsl(234 60% 50% / 0.55)` on hover. This is the **only** colored shadow on the page — reserved for the primary CTA.
- **Pills, cards, feature cells:** `hair` shadow or none. Structure comes from radius + border, not blur.
- **Radii used:** `rounded-full` (pills, CTAs, wordmark dot inside marquee), `rounded-xl` (feature icon square, wordmark tile), `rounded-3xl` (feature grid outer container), `rounded-[2rem]` / `rounded-[2.5rem]` (device frames — deliberately larger than any in-app radius).

---

## 7. Section-by-section blueprint

### 7.1 Header (sticky)

- Height: `h-14`.
- Left: wordmark — 28px `bg-primary` rounded-lg tile with white `Swords` lucide icon (14px, stroke 2.5) + `SkillDuel` in 15px/600.
- Right: **one** CTA — `Sign up` pill, `bg-foreground text-background`, `ArrowRight` 14px trailing icon. Deliberately monochrome so the indigo primary CTA in the hero remains the visual center.
- **No navlinks. No mobile menu icon.** Mobile shows exactly the same two elements.

### 7.2 Hero

Structure top-to-bottom:

1. **Eyebrow pill** — "NOW IN OPEN BETA", live pulse dot in `--primary`.
2. **H1** — "Prove you know it." + line break + "In under two minutes." (second line in `--muted-foreground`).
3. **Lead** — max ~520 px, muted.
4. **CTA row** — Primary + Secondary (see §3).
5. **Device cluster** — three phones fanned:
   - Left, rotated -6°, 26% width (desktop) / 52% (mobile) — asset `leaderboard`.
   - Center, upright, 30% width (desktop) / 62% (mobile), on top — asset `dashboard`.
   - Right, rotated +6°, 26% width (desktop) / 52% (mobile) — asset `play`.
   - Container height: `h-[520px]` mobile / `h-[720px]` desktop; children `absolute` positioned.

### 7.3 Topic marquee band

- Full-bleed strip on `--muted / 40%`, hairline top and bottom.
- Overline: "DUEL ON ANYTHING", centered.
- Infinite horizontal marquee of `.sd-pill`-style rounded chips: 1px `--border`, `--card` bg, `text-foreground/80`, small indigo dot prefix.
- Topic list (13 items, tripled for wrap): Coding, History, Finance, Astrophysics, Design, Chess Openings, Machine Learning, Roman Empire, Product, World Cinema, Poker Theory, Neuroscience, Music Theory.

### 7.4 "The mechanics" — feature grid

- Overline "THE MECHANICS" in `--primary`.
- H2 "Built like a game. Sharp like a benchmark."
- 2×2 grid, borders form the gutters (`gap-px` on `--border/60` with `bg-background` cells) inside a `rounded-3xl` clipped container.
- Each cell: 40×40 `--accent` square with `--primary` lucide icon → title (20–22px/600) → body (15/1.55, muted).
- Icons (lucide-react, stroke 2.2): `Sparkles`, `Timer`, `Trophy`, `Users`.

### 7.5 Editorial section — "The duel"

- Band on `--muted / 40%`, hairline top.
- Two-column, copy left, phone right.
- Overline "THE DUEL", H2 "Five questions. One winner.", lead, then a 4-row checklist (small indigo dot inside a soft indigo circle + label).
- Phone: `play` asset in `DeviceFrame`, capped at 320 px.

### 7.6 Editorial section — "The reward"

- Plain background (no band) for rhythm alternation.
- Two-column, order flipped on desktop (`md:order-1/2`): phone left, copy right.
- Overline "THE REWARD", H2 "Rank up. Or don't. Either way — rematch.", lead.
- Phone: `result` asset in `DeviceFrame`, capped at 320 px.

### 7.7 Editorial trio — "The stage"

- Band on `--muted / 40%`, hairline top.
- Overline "THE STAGE", H2 "A quiet arena for loud minds."
- Three phones side-by-side (`grid-cols-2 md:grid-cols-3`), middle phone offset `-translate-y-6` for editorial rhythm.
- Under each: 13px/500 muted caption.

### 7.8 Closing CTA

- Plain background, centered.
- Massive H2 (`text-[92px]` desktop): "Your first duel" + break + "is thirty seconds away." (second line in `--primary`).
- Both CTAs again, centered.
- Fine print: "Free. No credit card. Bring your own curiosity." — 13px, muted.

### 7.9 Footer

- Hairline top border.
- Left: mini wordmark tile (20×20, `rounded-md`) + `SkillDuel © {year}`.
- Right: "Made for curious minds."
- 12px muted, single row.

---

## 8. Assets — used by name

All landing mockup screenshots live under `src/assets/landing/` as `.asset.json` CDN pointers. They were captured with Playwright at a 420×900 phone viewport, 2× DPR, and uploaded via `lovable-assets`. Referenced in `Landing.tsx` by their imported binding name.

| Import binding | Pointer file | Depicts | Used in sections |
|---|---|---|---|
| `dashboardShot` | `src/assets/landing/dashboard.png.asset.json` | Home dashboard — greeting, rank + XP card, "Start a Duel" CTA, active duels, mini leaderboard | §7.2 Hero (center phone) |
| `playShot` | `src/assets/landing/play.png.asset.json` | Live duel — topic banner, VS score header, timer bar, question card, four options | §7.2 Hero (right phone), §7.5 The duel |
| `resultShot` | `src/assets/landing/result.png.asset.json` | Duel result — trophy hero, "Victory!", score card, XP + rank deltas, action buttons | §7.6 The reward |
| `leaderboardShot` | `src/assets/landing/leaderboard.png.asset.json` | Leaderboard — Global/Friends tabs, 2-1-3 podium, ranked list with "You" highlight | §7.2 Hero (left phone), §7.7 The stage (right) |
| `topicsShot` | `src/assets/landing/topics.png.asset.json` | Topic selection — search, topics grid, custom topic input, difficulty pills, dual CTAs | §7.7 The stage (left) |
| `profileShot` | `src/assets/landing/profile.png.asset.json` | Profile — avatar, rank, stats row, badges grid, recent duels | §7.7 The stage (middle, `-translate-y-6`) |

**Regeneration workflow** (when any in-app screen changes materially):

```bash
# 1. Capture at 420×900, DPR 2, waiting for networkidle + 600 ms
python /tmp/browser/shots.py

# 2. Re-upload and overwrite the pointer JSON
cd /tmp/browser/shots
for n in dashboard play result leaderboard topics profile; do
  lovable-assets create --file $n.png --filename skillduel-$n.png \
    > src/assets/landing/$n.png.asset.json
done
```

Do not hand-edit `.asset.json` files. Do not commit the raw PNGs into `src/assets/landing/` — only the pointers.

### Icons (lucide-react)

| Icon | Location | Purpose |
|---|---|---|
| `Swords` | Header wordmark tile, footer wordmark tile, "Start a duel" CTA (hero & closing) | Brand mark + secondary CTA glyph |
| `ArrowRight` | "Sign up" header CTA, "Create your account" CTA (hero & closing) | Forward affordance; hover `translate-x-0.5` |
| `Zap` | Hero "Start a duel" CTA | Instant-play cue |
| `Sparkles` | Feature grid, cell 1 ("Any topic. Instantly.") | AI generation |
| `Timer` | Feature grid, cell 2 ("Thirty seconds a question.") | Time pressure |
| `Trophy` | Feature grid, cell 3 ("Rank, don't grind.") | Competition |
| `Users` | Feature grid, cell 4 ("Duel anyone, anywhere.") | Social |

Stroke width `2` everywhere except the wordmark tile Swords (`2.5`). No icons appear inside the editorial mockup sections — the phones do the talking.

### Fonts

`Inter` 400/500/600/700, loaded via Google Fonts import in `src/index.css`. No landing-only fonts.

---

## 9. Copy — the exact strings

Voice: smart, encouraging, terse (per master §2). Sentence case throughout. Em dashes, not hyphen-minus. Curly quotes.

- **Header CTA:** "Sign up"
- **Hero eyebrow:** "Now in open beta"
- **Hero H1:** "Prove you know it. / In under two minutes."
- **Hero lead:** "SkillDuel turns curiosity into a game. Challenge anyone to a five-question duel on any topic in the world — chess-clock tight, Duolingo satisfying."
- **Hero CTAs:** "Create your account" · "Start a duel"
- **Marquee overline:** "Duel on anything"
- **Mechanics overline:** "The mechanics"
- **Mechanics H2:** "Built like a game. Sharp like a benchmark."
- **Feature 1:** "Any topic. Instantly." — "Type anything from "18th-century opera" to "Rust lifetimes." We generate five sharp multiple-choice questions on demand."
- **Feature 2:** "Thirty seconds a question." — "No time to Google. Just what you already know — versus what they do. Five rounds. Best mind wins."
- **Feature 3:** "Rank, don't grind." — "Rookie → Scholar → Expert → Master. XP earned in real duels, not tutorials. Every point is contested."
- **Feature 4:** "Duel anyone, anywhere." — "Find an opponent in seconds, or send a private link. If they open it, the duel is on."
- **Duel section:** overline "The duel", H2 "Five questions. / One winner.", lead "A 30-second timer, four options, one correct answer. Each question comes with a short explanation — so even when you lose, you leave a little smarter." Checklist: "30-second timer per question" · "AI-generated on your topic" · "Instant explanations" · "Bonus XP for streaks"
- **Reward section:** overline "The reward", H2 "Rank up. Or don't. / Either way — rematch.", lead "XP is earned, never given. Climb from Rookie to Master, unlock topical badges, and defend your place on a leaderboard that only counts real duels."
- **Stage section:** overline "The stage", H2 "A quiet arena for loud minds.", captions "Choose a topic" · "Global ranks" · "Your record"
- **Closing H2:** "Your first duel / is thirty seconds away."
- **Closing fine print:** "Free. No credit card. Bring your own curiosity."
- **Footer:** "SkillDuel © {year}" · "Made for curious minds."

---

## 10. Responsive rules

- **Mobile-first.** Every section is a single column below `md` (768 px).
- **No hamburger, no drawer, no bottom bar.** The page is content-driven; scrolling is the only navigation.
- **Container:** `max-w-6xl mx-auto`, `px-5` mobile, `px-10` desktop.
- **Hero mockup cluster** compresses gracefully: at mobile the three phones sit at 52 / 62 / 52% widths in a 520 px tall stage; at desktop they spread across 26 / 30 / 26% in a 720 px stage.
- **Editorial two-column sections** stack copy-above-phone on mobile regardless of `md:order-1/2` on desktop.
- **Closing H2** scales from 40 → 92 px; no clamp, uses explicit `text-[40px] md:text-[92px]` per master philosophy of intentional per-screen sizes.

---

## 11. Accessibility

- Single `<h1>` on the page (hero). All other section titles are `<h2>`.
- All CTAs are real `<Link>` elements to real routes; no `<div onClick>`.
- Every mockup `<img>` has a descriptive `alt` naming the screen ("SkillDuel dashboard", "Live duel question screen", etc.). Decorative glow divs use `aria-hidden`.
- Sticky header uses `backdrop-blur` over a translucent `--background` — contrast for the wordmark and Sign-up pill exceeds 4.5:1 in both light and dark neutrals.
- Marquee: `overflow-hidden` on parent; the animation is purely decorative and pauses under `prefers-reduced-motion` (framer-motion respects it automatically because `animate` is a transform).
- Focus states inherit from the master `:focus-visible` ring — not overridden here.

---

## 12. Anti-patterns (landing-specific)

In addition to the master rejection list:

- No email capture / newsletter form — the primary CTA is account creation, don't dilute it.
- No logo cloud ("Trusted by…") — SkillDuel is a consumer product, not B2B SaaS.
- No testimonial cards with round headshots — until we have real ones worth quoting.
- No stat counters ("10,000 duels played") — invented numbers cheapen the design.
- No purple gradient hero background. The hero is `--background` (paper). Depth comes from the mockup cluster's own drop shadow.
- No cursor followers, no scroll-jack, no auto-playing hero video.
- No third CTA. Ever. Sign up, or start a duel.

---

*Companion:* `design.md` (master system) · `src/pages/Landing.tsx` (implementation) · `src/assets/landing/*.asset.json` (mockup pointers).
