import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  astrologyServices,
  faqs,
  instagram,
  instagramProfile,
  relationshipServices,
  tarotServices,
  whatsapp,
} from "@/lib/content";
import { ConceptAccordion } from "@/components/concepts/faq";
import { ConceptSwitcher } from "@/components/concepts/switcher";
import { EngravedEye } from "@/components/concepts/ornaments";
import { FolioMobileMenu, FolioMotion } from "@/components/concepts/folio-motion";
import "./atelier-iii.css";

export const metadata: Metadata = {
  title: "Atelier III — The Folio",
  robots: { index: false, follow: false },
};

function ZodiacWheel() {
  const spokes = Array.from({ length: 12 }).map((_, index) => {
    const angle = (index / 12) * Math.PI * 2;
    return {
      x1: 150 + Math.cos(angle) * 92,
      y1: 150 + Math.sin(angle) * 92,
      x2: 150 + Math.cos(angle) * 142,
      y2: 150 + Math.sin(angle) * 142,
      key: index,
    };
  });
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
      <circle cx="150" cy="150" r="142" />
      <circle cx="150" cy="150" r="92" />
      <circle cx="150" cy="150" r="34" />
      {spokes.map((spoke) => (
        <line key={spoke.key} x1={spoke.x1} y1={spoke.y1} x2={spoke.x2} y2={spoke.y2} />
      ))}
      <circle cx="150" cy="150" r="3" fill="currentColor" />
    </svg>
  );
}

const principles = [
  {
    no: "i.",
    title: "Personal, always",
    body: "Every consultation is one-to-one with Pooja — never an app, a marketplace, or a template answer.",
  },
  {
    no: "ii.",
    title: "Clear scope",
    body: "Each service lists exactly what it covers and what it doesn't, so you always know what you are booking.",
  },
  {
    no: "iii.",
    title: "Private by design",
    body: "Fees, availability and personal details live in the conversation — never on a public page.",
  },
];

const steps = [
  {
    no: "1.",
    title: "Choose your consultation",
    body: "Explore the services and choose the format that fits the questions on your mind. Every page lists what is — and isn't — included.",
  },
  {
    no: "2.",
    title: "Enquire on WhatsApp",
    body: "Message Pooja with your preferred consultation. Fees and availability are shared privately, in conversation.",
  },
  {
    no: "3.",
    title: "Confirm your time",
    body: "Once details are agreed, your session is confirmed. Astrology consultations share accurate birth details in advance.",
  },
];

export default function FolioConcept() {
  return (
    <div data-concept-shell className="af-root" style={{ "--concept-bg": "#F6F1E9" } as React.CSSProperties}>
      <FolioMotion />

      <header className="af-masthead">
        <div className="af-container af-masthead-row">
          <Link href="/" className="af-brand" aria-label="ZenQuest by Pooja">
            <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} priority />
          </Link>
          <nav className="af-nav" aria-label="Concept navigation">
            <a href="#practice">The practice</a>
            <a href="#consultations">Consultations</a>
            <a href="#process">Process</a>
            <a href="#faqs">Questions</a>
            <a className="af-enquire-btn" href={whatsapp()} target="_blank" rel="noopener noreferrer">
              Book a reading
            </a>
          </nav>
          <FolioMobileMenu />
        </div>
      </header>

      <section className="af-hero">
        <div className="af-hero-grid">
          <div className="af-hero-copy">
            <div className="af-hero-kicker">
              <span className="af-caps"><b>Astrology · Tarot · Personal guidance</b></span>
            </div>
            <h1>
              <span className="af-line"><span>A little clarity.</span></span>
              <span className="af-line"><span>A deeper</span></span>
              <span className="af-line af-line--big"><span><em>connection.</em></span></span>
            </h1>
            <p className="af-hero-sub">
              Private astrology and tarot consultations with Pooja Khera — one-to-one,
              unhurried, and shaped around the questions you bring.
            </p>
            <div className="af-hero-actions">
              <a className="af-enquire-btn" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                Book a reading ↗
              </a>
              <a className="af-ink-link" href="#consultations">
                Read the folio ↓
              </a>
            </div>
          </div>
          <figure className="af-hero-figure" style={{ margin: 0 }}>
            <div className="af-hero-mount" aria-hidden="true" />
            <div className="af-hero-media" data-af-clip>
              <Image
                src="/images/pooja.jpg"
                alt="Pooja Khera, founder of ZenQuest"
                fill
                priority
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
            <span className="af-hero-vert" aria-hidden="true">
              Pooja Khera — the practice, Chandigarh
            </span>
          </figure>
        </div>
        <div className="af-container af-hero-foot">
          <div className="af-hero-foot-inner">
            <nav className="af-toc" aria-label="Page contents">
              <a href="#practice"><b>01</b> The practice</a>
              <a href="#consultations"><b>02</b> Consultations</a>
              <a href="#process"><b>03</b> Process</a>
              <a href="#faqs"><b>04</b> Questions</a>
              <a href="#enquire"><b>05</b> Enquire</a>
            </nav>
            <span className="af-hero-draft">
              18+ years · 1,000+ readings — draft figures, awaiting confirmation
            </span>
          </div>
        </div>
      </section>

      <section className="af-section" id="practice">
        <div className="af-container">
          <div className="af-folio-head" data-af-reveal>
            <span className="af-caps"><b>01</b> — The practice</span>
            <span className="af-rule" />
            <span className="af-folio-page">p. 01</span>
          </div>
          <div className="af-practice-grid">
            <p className="af-practice-statement" data-af-reveal>
              ZenQuest is the private practice of Pooja Khera —{" "}
              <em>
                tarot reader, astrologer and relationship coach.
              </em>{" "}
              Every consultation is one-to-one, shaped around the questions you bring.
            </p>
            <div className="af-practice-side" data-af-reveal>
              <p>
                After a corporate career in Chandigarh, Pooja turned a lifelong study of
                tarot and astrology into her life&apos;s work — blending spiritual insight
                with practical, grounded guidance.
              </p>
              <p>
                The intention has never changed: to help you find joy, peace, harmony and
                balance in your own story.
              </p>
              <div className="af-practice-figures">
                <div>
                  <strong>18+ yrs</strong>
                  <span className="af-caps">Experience · draft</span>
                </div>
                <div>
                  <strong>1,000+</strong>
                  <span className="af-caps">Readings · draft</span>
                </div>
                <small>Proposed figures — published only after confirmation.</small>
              </div>
              <a className="af-ink-link" href="/about">
                A little more about Pooja →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="consultations">
        <div className="af-folio-head af-container" style={{ paddingTop: "clamp(40px, 5vw, 72px)" }} data-af-reveal>
          <span className="af-caps"><b>02</b> — Consultations</span>
          <span className="af-rule" />
          <span className="af-folio-page">p. 02</span>
        </div>

        {/* Spread I — Tarot (image bleeds left) */}
        <div className="af-spread">
          <div className="af-spread-media" data-af-clip>
            <Image src="/images/tarot.jpg" alt="Tarot cards laid out for a reading" fill sizes="50vw" style={{ objectPosition: "50% 52%" }} />
            <span className="af-plate-no">Spread I — the deck</span>
          </div>
          <div className="af-spread-copy">
            <span className="af-spread-ghost" aria-hidden="true" data-af-ghost>I.</span>
            <p className="af-caps af-spread-kicker"><b>Spread I</b> — Five readings</p>
            <h2>
              Tarot &amp; <em>Astro-Tarot</em>
            </h2>
            <p>
              Readings that go beyond yes and no — your situation, its influences, and the
              guidance worth acting on. Five formats, from a recorded voice reading to a
              combined astrology and tarot session.
            </p>
            <div className="af-index-table" data-af-reveal>
              {tarotServices.map((service, index) => (
                <a key={service.id} href={`/book-a-reading-with-pooja#${service.id}`}>
                  <span className="af-index-no">{String(index + 1).padStart(2, "0")}</span>
                  <span className="af-index-name">{service.title}</span>
                  <span className="af-index-leader" aria-hidden="true" />
                  <span className="af-index-format">{service.format}</span>
                </a>
              ))}
            </div>
            <p className="af-spread-note">
              Returning clients may be eligible for a Tarot Continuation —{" "}
              <a href="/book-a-reading-with-pooja">conditions on the Tarot page</a>.
            </p>
            <div className="af-spread-cta" data-af-reveal>
              <a className="af-ink-link" href="/book-a-reading-with-pooja">
                Explore the five readings →
              </a>
            </div>
          </div>
        </div>

        {/* Spread II — Astrology (tinted plate bleeds right) */}
        <div className="af-spread af-spread--flip af-spread--tint">
          <div className="af-spread-media" data-af-reveal>
            <ZodiacWheel />
            <span className="af-plate-no">Spread II — the chart</span>
          </div>
          <div className="af-spread-copy">
            <span className="af-spread-ghost" aria-hidden="true" data-af-ghost>II.</span>
            <p className="af-caps af-spread-kicker"><b>Spread II</b> — Four consultations</p>
            <h2>
              Astrology, <em>told honestly</em>
            </h2>
            <p>
              Your birth chart in the context of your life today — an honest, sometimes
              challenging conversation about agency, timing and what the chart suggests.
            </p>
            <div className="af-index-table" data-af-reveal>
              {astrologyServices.map((service, index) => (
                <a key={service.id} href={`/astrology#${service.id}`}>
                  <span className="af-index-no">{String(index + 1).padStart(2, "0")}</span>
                  <span className="af-index-name">{service.title}</span>
                  <span className="af-index-leader" aria-hidden="true" />
                  <span className="af-index-format">{service.format}</span>
                </a>
              ))}
            </div>
            <p className="af-spread-note">
              Accurate birth details are required in advance for chart work —{" "}
              <a href="/astrology">details on the Astrology page</a>.
            </p>
            <div className="af-spread-cta" data-af-reveal>
              <a className="af-ink-link" href="/astrology">
                Explore the four consultations →
              </a>
            </div>
          </div>
        </div>

        {/* Spread III — Relationship Blueprint (image bleeds right) */}
        <div className="af-spread af-spread--flip">
          <div className="af-spread-media" data-af-clip>
            <Image src="/images/relationship.jpg" alt="Pooja Khera outdoors" fill sizes="50vw" style={{ objectPosition: "50% 26%" }} />
            <span className="af-plate-no">Spread III — the work</span>
          </div>
          <div className="af-spread-copy">
            <span className="af-spread-ghost" aria-hidden="true" data-af-ghost>III.</span>
            <p className="af-caps af-spread-kicker"><b>Spread III</b> — Coaching</p>
            <h2>
              Relationship <em>Blueprint</em>
            </h2>
            <p>
              For women navigating recurring relationship patterns — a precise strategy,
              practical tools and exercises, built step by step with Pooja. Live on Zoom,
              in three formats.
            </p>
            <div className="af-index-table" data-af-reveal>
              {relationshipServices.map((service, index) => (
                <a key={service.id} href={`/relationship-blueprint#${service.id}`}>
                  <span className="af-index-no">{String(index + 1).padStart(2, "0")}</span>
                  <span className="af-index-name">{service.title}</span>
                  <span className="af-index-leader" aria-hidden="true" />
                  <span className="af-index-format">{service.format}</span>
                </a>
              ))}
            </div>
            <div className="af-spread-cta" data-af-reveal>
              <a className="af-enquire-btn" href={whatsapp("Relationship Blueprint")} target="_blank" rel="noopener noreferrer">
                Enquire about the Blueprint ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <figure className="af-pull" style={{ margin: 0 }}>
        <div className="af-container">
          <div className="af-pull-rule" aria-hidden="true" />
          <blockquote data-af-reveal>
            Think of me as a <em>personal trainer</em> for your heart.
          </blockquote>
          <figcaption className="af-caps" data-af-reveal>Pooja Khera — on the Relationship Blueprint</figcaption>
        </div>
      </figure>

      <section className="af-section" id="principles" style={{ paddingTop: 0 }}>
        <div className="af-container">
          <div className="af-folio-head" data-af-reveal>
            <span className="af-caps"><b>03</b> — How Pooja works</span>
            <span className="af-rule" />
            <span className="af-folio-page">p. 03</span>
          </div>
          <div className="af-triad">
            {principles.map((principle) => (
              <div key={principle.title} data-af-reveal>
                <span className="af-no">{principle.no}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="af-section" style={{ paddingTop: 0 }}>
        <div className="af-container">
          <div className="af-folio-head" data-af-reveal>
            <span className="af-caps"><b>04</b> — Kind words</span>
            <span className="af-rule" />
            <span className="af-folio-page">p. 04</span>
          </div>
          <div className="af-reserved-grid" data-af-reveal>
            {["Slot i — awaiting permission", "Slot ii — awaiting permission", "Slot iii — awaiting permission"].map((slot) => (
              <div key={slot}>
                <p>—</p>
                <small>{slot}</small>
              </div>
            ))}
          </div>
          <p data-af-reveal style={{ marginTop: 22, maxWidth: 560, color: "var(--af-dim)", fontSize: 13 }}>
            Genuine client feedback will appear here once permissions are in place. Nothing
            is invented for this preview.
          </p>
        </div>
      </section>

      <section className="af-section" id="process" style={{ paddingTop: 0 }}>
        <div className="af-container">
          <div className="af-folio-head" data-af-reveal>
            <span className="af-caps"><b>05</b> — The process</span>
            <span className="af-rule" />
            <span className="af-folio-page">p. 05</span>
          </div>
          <div className="af-triad">
            {steps.map((step) => (
              <div key={step.title} data-af-reveal>
                <span className="af-no">{step.no}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
          <p data-af-reveal style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid var(--af-line)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px 32px", fontSize: 12, color: "var(--af-dim)" }}>
            <span>No payment gateway. No calendar automation. A personal conversation, end to end.</span>
            <a href="/book-a-reading" style={{ color: "var(--af-purple)", borderBottom: "1px solid currentColor", paddingBlock: 4 }}>
              How booking works →
            </a>
          </p>
        </div>
      </section>

      <section className="af-section" id="faqs" style={{ paddingTop: 0 }}>
        <div className="af-container">
          <div className="af-folio-head" data-af-reveal>
            <span className="af-caps"><b>06</b> — Questions</span>
            <span className="af-rule" />
            <span className="af-folio-page">p. 06</span>
          </div>
          <div className="af-faq-grid">
            <div className="af-faq-sticky">
              <h2 className="af-h2" data-af-reveal>
                You may be <em>wondering.</em>
              </h2>
              <p data-af-reveal>
                Short answers to what visitors ask most. Anything else — ask Pooja directly
                on WhatsApp.
              </p>
            </div>
            <div data-af-reveal>
              <ConceptAccordion items={faqs} numbered />
            </div>
          </div>
        </div>
      </section>

      <section className="af-finale" id="enquire">
        <EngravedEye className="af-finale-eye" rays={32} />
        <div className="af-container af-finale-inner">
          <span className="af-caps af-finale-kicker" data-af-reveal>05 — Enquire</span>
          <h2 data-af-reveal>
            The answers begin <em>with you.</em>
          </h2>
          <p data-af-reveal>
            Send a WhatsApp enquiry and Pooja will personally help you choose a
            consultation, share fees and availability, and take it from there.
          </p>
          <div className="af-finale-actions" data-af-reveal>
            <a className="af-finale-btn" href={whatsapp()} target="_blank" rel="noopener noreferrer">
              Let&apos;s talk on WhatsApp ↗
            </a>
            <a className="af-finale-link" href={instagram} target="_blank" rel="noopener noreferrer">
              Enquire on Instagram →
            </a>
          </div>
          <p className="af-finale-note" data-af-reveal>
            Prefer to browse first?{" "}
            <a href={instagramProfile} target="_blank" rel="noopener noreferrer">
              @zenquestbypooja
            </a>
          </p>
        </div>
      </section>

      <footer className="af-footer">
        <div className="af-container">
          <div className="af-footer-grid">
            <div className="af-footer-brand">
              <Link href="/" className="af-brand" aria-label="ZenQuest by Pooja">
                <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} />
              </Link>
              <p>
                The private practice of Pooja Khera. Tarot, astrology and relationship
                guidance — one conversation at a time.
              </p>
            </div>
            <div className="af-footer-links">
              <h3>Collections</h3>
              <div>
                <a href="/book-a-reading-with-pooja">Tarot &amp; Astro-Tarot</a>
                <a href="/astrology">Astrology consultations</a>
                <a href="/relationship-blueprint">Relationship Blueprint</a>
              </div>
            </div>
            <div className="af-footer-links">
              <h3>The practice</h3>
              <div>
                <a href="/about">About Pooja</a>
                <a href="/media">Media</a>
                <a href="/book-a-reading">How booking works</a>
                <a href="/consultation-policies">Consultation policies</a>
              </div>
            </div>
            <div className="af-footer-links">
              <h3>Enquiries</h3>
              <div>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
                  WhatsApp — +91 96500 93836
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  Instagram — @zenquestbypooja
                </a>
              </div>
            </div>
          </div>
          <div className="af-footer-bottom">
            <span>© {new Date().getFullYear()} ZenQuest by Pooja</span>
            <span>Set in Cormorant Garamond &amp; Manrope</span>
            <span>Fees &amp; availability shared privately</span>
          </div>
        </div>
      </footer>

      <ConceptSwitcher current="atelier-iii" tone="light" />
    </div>
  );
}
