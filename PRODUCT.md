# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary: individuals at a personal crossroads (relationships, career, timing decisions) seeking private 1:1 guidance from a human reader, not an app or marketplace.
- They arrive with a specific question in mind and want to know which consultation fits, what happens in it, and how to enquire — then they message directly.
- (Inferred — not yet confirmed by interview:) audience skews toward women familiar with tarot/astrology vocabulary; many enquire from mobile via WhatsApp or Instagram.

## Product Purpose

Client-acquisition website for Pooja Khera's consultation practice, "ZenQuest by Pooja": Tarot & Astro-Tarot readings, Astrology consultations, and the Relationship Blueprint program. Success means a visitor understands the practice, trusts Pooja, picks the right consultation, and sends an enquiry on WhatsApp or Instagram. There is no online booking, cart, or checkout.

## Positioning

A private practice, not a platform: every consultation is one-to-one, shaped around the visitor's own questions, and every enquiry is handled directly by Pooja. Fees and availability are shared privately in conversation — never published.

## Operating Context

- Enquiry and booking happen off-site: WhatsApp chat (`https://wa.me/919650093836`) and Instagram DMs (`https://ig.me/m/zenquestbypooja`). The site's CTAs open those conversations.
- Content authority: the original WordPress site (thezenquestbypooja.com), the client SOW PDF, and `docs/website-content-architecture.md`.
- Preview/concept routes carry noindex/nofollow and never ship to production navigation.

## Capabilities and Constraints

- No consultation prices visible publicly, ever. No checkout or payment UI.
- Service inventory is fixed by the SOW: Tarot page shows 5 services, Astrology 4, Relationship Blueprint 3.
- Removed from navigation: crystals, advisors, tarotscope links. Retained: Media links.
- Relationship Blueprint content and design are preserved unless a substantial redesign is separately approved by the client.
- Testimonials: clearly labelled placeholders only — never invented quotes, names, or results.
- Figures "18+ years" and "1,000+ readings" are DRAFT and unconfirmed — render only with a draft/awaiting-confirmation label, never as established fact.
- Motion must respect reduced-motion preferences; keyboard focus must stay visible.

## Brand Commitments

- Name: "ZenQuest by Pooja". Practitioner: Pooja Khera.
- Logo: original purple mark; brand purple `#803F9D`. Existing token family (ivory `#F8F5EE`, plum `#392044`, lavender) is incumbent evidence, not a constraint on a replacement world.
- Voice: personal and direct, first-person Pooja voice ("A little clarity. A deeper connection."); plain verbs, sentence case, no filler. Never clever at the expense of clear.

## Evidence on Hand

- `ZenQuest_Website_Final_SOW.pdf` + `research/CONTENT-AUDIT.md`: authoritative scope and content inventory.
- `docs/website-content-architecture.md`: page-wise content plan (validate against SOW before use).
- `src/lib/content.ts`: service data, WhatsApp/Instagram link helpers.
- `public/images/`: real photography and logo assets (verify per use).
- Absences future work must not fabricate: confirmed experience figures, client testimonials, pricing.

## Product Principles

1. Content guides design — every section earns its place from a visitor question, never from a template.
2. Personal over generic — the site must feel like one practitioner's private practice, not a wellness marketplace.
3. Private by design — fees, availability, and personal details live in conversation, not on pages.
4. Proof before promise — labelled placeholders and honest drafts beat invented credibility.
5. One action per surface — each page moves the visitor toward a single conversation.

## Accessibility & Inclusion

WCAG 2.2 AA target: visible focus, 4.5:1 text contrast, full keyboard operability, `prefers-reduced-motion` disables non-essential motion. Touch targets ≥ 44px on mobile.
