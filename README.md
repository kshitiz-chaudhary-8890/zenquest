# ZenQuest by Pooja — client design preview

Complete local Next.js App Router / TypeScript / Tailwind CSS preview. No live WordPress changes, deployment, payments, database, authentication or booking engine.

## Run locally

Node.js 20.9+ required. From this folder:

```sh
npm install
npm run dev
```

Open http://localhost:3000. To check a production build: `npm run build`, then `npm start`. If a local server already uses 3000, Next.js reports its chosen port.

Validation: `npm run typecheck` and, with the preview running, `node scripts/verify.mjs`.

## Routes

| Route | Content |
| --- | --- |
| `/` | Full homepage, consultation choices, draft credentials, three testimonial placeholders, booking steps, FAQ, final CTA |
| `/book-a-reading-with-pooja` | Four Tarot / Astro-Tarot offerings and Tarot Continuation |
| `/astrology` | Three astrology offerings and Astrology Continuation |
| `/about` | Original portrait and source-based draft biography |
| `/relationship-blueprint` | Recovered original layout and copy, public prices removed |
| `/book-a-reading` | Consultation choices and enquiry process |
| `/media` | Selected genuine links recovered from the existing media page |
| `/consultation-policies` | Clearly marked placeholder for approved consultation policies |

Preview aliases: `/about-pooja`, `/consultations/astrology`, `/consultations/tarot`. Relevant existing About, Astrology, Tarot booking, Relationship Blueprint and Media URLs are retained. Retired shopping and horoscope pages do not exist in this preview. Production redirect/retirement planning remains a separate migration task.

## Design direction and research

Original site: https://thezenquestbypooja.com/ (the brief's www hostname was unavailable on the initial attempt). Audited original HTML and styles: vivid purple (#A254EB / #5E06AA), Cirka display typography, Lato text, photographic banners, and shopping/advisor/tarotscope-heavy navigation. Preserve the personal brand, real photographs, core services, relevant URLs, Blueprint design and genuine media references. Replace the crowded navigation, shop flows, public prices and outdated policy presentation.

References studied: https://www.chani.com/ for astrology symbolism and clear entry points; https://www.anandaspa.com/ for spacious wellness presentation and photographic hierarchy. No reference-site assets copied.

New system: warm ivory #F8F5EE, deep plum #482435, warm charcoal #30282B, champagne #AA8653, paper #EEE9DF. Self-hosted Cormorant Garamond and Manrope. Signature composition: an arched original portrait within a restrained astrological ring, balanced by oversized editorial type. Uneven consultation layouts and quiet motion avoid repeated card grids. Reduced-motion CSS and Motion preferences supported.

## Source and assets

- Original Pooja portrait: existing `/about/` image `imgpsh_fullsize_anim-1-scaled-e1663750075286.jpg`.
- Tarot photograph: existing homepage `zenquest-by-pooja-tarot01-768x1024.jpg`.
- Relationship Blueprint: recovered from `/relationship-blueprint/`, original Elementor body, fonts and imagery retained locally. Shared site navigation/footer updated; three prices removed; old embedded booking calendar replaced by three service-specific WhatsApp links. Copy and service conditions remain unchanged. No live scripts, tracking, or calendar embeds are loaded. `scripts/prepare-blueprint.py` documents the transformation; `src/lib/blueprint.json` is the served body.
- `research/` and root source snapshots are audit material, not publicly served. The supplied SOW PDF is outside `public/` and is not linked.
- Cormorant Garamond, Manrope and Lato come from Fontsource packages with their supplied licenses. Existing Cirka font assets are reused only for the original Blueprint preview; confirm the client's license before any future launch.
- Custom astrology ornament is decorative, not a computed chart.

## Client approvals still needed

1. Confirm 18+ years and 1,000+ readings. Both are visibly marked as draft figures.
2. Supply 3–5 permission-cleared anonymous testimonials. Three explicit placeholder slots are shown. Old reviews were not republished without approval.
3. Approve the rewritten homepage/About wording, selected portrait, photo crops, typographic wordmark and selected media features. No new qualifications or awards invented.
4. Supply cancellation, rescheduling, refund and privacy terms; the policy route is an explicit placeholder.
5. Approve public naming: selected Live 30: Clarity (alternative Live: Clarity), Live 60: Deep Dive (alternative Live: Deep Dive), Complete Horoscope & Current Timing (alternative Birth Chart & Current Timing). Alternatives are not presented as separate public services.
6. Personal Tarot Voice Reading uses the brief's “up to two” clear, non-compound questions. The SOW records exactly two in the Indian menu; final audience-specific wording needs confirmation.

## Booking behavior and limits

All WhatsApp links use `wa.me/919650093836` and URL-encoded service messages. No messages are sent automatically. Instagram uses `https://ig.me/m/zenquestbypooja` with a visible profile-and-Message fallback. The DM URL was attempted in the browser and returned an HTTP response failure; authenticated Instagram messaging and the Instagram in-app browser still need real-device verification. This preview does not claim that a profile link opens messaging.

Live delivery arrangements, fees, availability and payment instructions remain private. No calendar slots, checkout, payment processing or confirmations are simulated. Preview pages have noindex/nofollow metadata; this is an indexing instruction, not access control.

## Validation

- Production build and TypeScript verification.
- Eight routes checked in the browser at 320, 768 and 1440 pixels: one primary heading, no horizontal overflow, no broken loaded images, no visible prices.
- Desktop dropdown, Escape close behavior, mobile menu/category navigation and FAQ interaction checked.
- Service-specific WhatsApp destinations and original Blueprint's three enquiry buttons checked.
- See `QA.md` for final checks and explicit test limitations.
