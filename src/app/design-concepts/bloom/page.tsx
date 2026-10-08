import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faqs, instagram, instagramProfile, whatsapp } from "@/lib/content";
import { ConceptAccordion } from "@/components/concepts/faq";
import { ConceptSwitcher } from "@/components/concepts/switcher";
import { BloomBadge, BloomMobileMenu, BloomMotion } from "@/components/concepts/bloom-motion";
import "./bloom.css";

export const metadata: Metadata = {
  title: "Concept C — Bloom",
  robots: { index: false, follow: false },
};

function LotusMark() {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M60 22 C 46 44, 46 66, 60 84 C 74 66, 74 44, 60 22 Z" />
      <path d="M28 44 C 34 66, 46 80, 60 84 C 56 64, 46 50, 28 44 Z" />
      <path d="M92 44 C 86 66, 74 80, 60 84 C 64 64, 74 50, 92 44 Z" />
      <path d="M16 62 C 30 84, 44 90, 60 84" />
      <path d="M104 62 C 90 84, 76 90, 60 84" />
      <circle cx="60" cy="100" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

const steps = [
  {
    title: "Choose your consultation",
    body: "Explore the services and choose the format that fits the questions on your mind.",
  },
  {
    title: "Enquire on WhatsApp",
    body: "Message Pooja with your preferred consultation. Fees and availability are shared privately, in conversation.",
  },
  {
    title: "Confirm your time",
    body: "Once details are agreed, your session is confirmed. Astrology consultations share accurate birth details in advance.",
  },
];

const principles = [
  {
    icon: "✶",
    title: "Personal, always",
    body: "Every consultation is one-to-one with Pooja. Never an app, a marketplace, or a template answer.",
  },
  {
    icon: "❋",
    title: "Clear scope",
    body: "Each service lists exactly what it covers and what it doesn't, so you always know what you are booking.",
  },
  {
    icon: "☾",
    title: "Private by design",
    body: "Fees, availability and personal details live in the conversation — never on a public page.",
  },
];

export default function BloomConcept() {
  return (
    <div data-concept-shell className="bl-root" style={{ "--concept-bg": "#F6F1F4" } as React.CSSProperties}>
      <BloomMotion />

      <header className="bl-header">
        <div className="bl-header-card">
          <Link href="/" className="bl-brand" aria-label="ZenQuest by Pooja">
            <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} priority />
          </Link>
          <nav className="bl-nav" aria-label="Concept navigation">
            <a href="#practice">The practice</a>
            <a href="#consultations">Consultations</a>
            <a href="#steps">Booking</a>
            <a href="#faqs">FAQs</a>
            <a className="bl-button" href={whatsapp()} target="_blank" rel="noopener noreferrer">
              Book a reading <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <BloomMobileMenu />
        </div>
      </header>

      <section className="bl-container bl-hero">
        <div className="bl-hero-grid">
          <div className="bl-hero-copy">
            <p className="bl-label">Astrology · Tarot · Personal guidance</p>
            <h1>
              A little clarity.
              <br />
              A deeper{" "}
              <span className="bl-accent">
                connection.
              </span>
            </h1>
            <p className="bl-hero-sub">
              When life brings questions, make space for perspective. Private astrology
              and tarot consultations with Pooja Khera — one-to-one, unhurried, and
              shaped around you.
            </p>
            <div className="bl-hero-actions">
              <a className="bl-button" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                Book a reading <span aria-hidden="true">↗</span>
              </a>
              <a className="bl-soft-link" href="#consultations">
                Explore consultations <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="bl-hero-note">
              18+ years · 1,000+ readings — draft figures, awaiting confirmation.
            </p>
          </div>

          <div className="bl-collage">
            <div className="bl-blob bl-blob--1" aria-hidden="true" />
            <div className="bl-blob bl-blob--2" aria-hidden="true" />
            <div className="bl-portrait bl-float">
              <Image
                src="/images/pooja.jpg"
                alt="Pooja Khera, founder of ZenQuest"
                fill
                priority
                sizes="(max-width: 940px) 100vw, 44vw"
              />
            </div>
            <figure className="bl-polaroid bl-float" style={{ margin: 0 }}>
              <span className="bl-tape" aria-hidden="true" />
              <div className="bl-polaroid-media">
                <Image src="/images/tarot.jpg" alt="Tarot cards from a recent reading" fill sizes="230px" style={{ objectPosition: "50% 55%" }} />
              </div>
              <figcaption>the deck, mid-reading</figcaption>
            </figure>
            <BloomBadge />
          </div>
        </div>
      </section>

      <section className="bl-container bl-section" id="practice" style={{ paddingTop: 0 }}>
        <div className="bl-intro" data-bl-reveal>
          <p className="bl-intro-statement">
            ZenQuest is the private practice of Pooja Khera — <em>tarot reader, astrologer
            and relationship coach.</em> Every consultation is one-to-one, shaped around
            the questions you bring.
          </p>
          <div className="bl-intro-side">
            <p>
              After a corporate career in Chandigarh, Pooja turned a lifelong study of
              tarot and astrology into her life&apos;s work — blending spiritual insight
              with practical, grounded guidance.
            </p>
            <div className="bl-intro-facts">
              <div>
                <strong>18+ yrs</strong>
                <span>Experience · draft</span>
              </div>
              <div>
                <strong>1,000+</strong>
                <span>Readings · draft</span>
              </div>
              <small>Proposed figures — published only after the client confirms them.</small>
            </div>
            <a className="bl-soft-link" href="/about">
              A little more about Pooja <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bl-container bl-section" id="consultations" style={{ paddingTop: 0 }}>
        <div className="bl-label" data-bl-reveal>Two ways in — plus the Blueprint</div>
        <h2 className="bl-h2" data-bl-reveal style={{ marginTop: 16, marginBottom: 44 }}>
          Start where <em>you are.</em>
        </h2>
        <div className="bl-cards">
          <a className="bl-card" href="/book-a-reading-with-pooja" data-bl-reveal>
            <div className="bl-card-media">
              <Image src="/images/tarot.jpg" alt="Tarot cards laid out for a reading" fill sizes="(max-width: 860px) 100vw, 50vw" style={{ objectPosition: "50% 55%" }} />
              <span className="bl-card-chip">5 readings</span>
            </div>
            <div className="bl-card-body">
              <h3>
                Tarot &amp; <em>Astro-Tarot</em>
              </h3>
              <p>
                Readings that go beyond yes and no — your situation, its influences, and
                the guidance worth acting on. Live sessions or recorded voice readings.
              </p>
              <span className="bl-soft-link">
                Explore the readings <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>

          <a className="bl-card bl-card--text" href="/astrology" data-bl-reveal>
            <div className="bl-card-media">
              <LotusMark />
              <span className="bl-card-chip">4 consultations</span>
            </div>
            <div className="bl-card-body">
              <h3>
                Astrology, <em>told honestly</em>
              </h3>
              <p>
                Your birth chart in the context of your life today — an honest, sometimes
                challenging conversation about agency and timing.
              </p>
              <span className="bl-soft-link">
                Explore the consultations <span aria-hidden="true">→</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      <section className="bl-container" data-bl-reveal>
        <div className="bl-ribbon">
          <div>
            <h2>
              The Relationship <em>Blueprint</em>
            </h2>
            <p>
              For women navigating recurring relationship patterns — a precise strategy,
              practical tools and exercises, built step by step with Pooja. Live on Zoom,
              30 · 60 · 4×60 minutes.
            </p>
          </div>
          <div className="bl-ribbon-actions">
            <a className="bl-button bl-button--light" href="/relationship-blueprint">
              Explore the Blueprint <span aria-hidden="true">→</span>
            </a>
            <a className="bl-soft-link" href={whatsapp("Relationship Blueprint")} target="_blank" rel="noopener noreferrer">
              Enquire on WhatsApp <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bl-container bl-section">
        <div className="bl-label" data-bl-reveal>How Pooja works</div>
        <div className="bl-principles" style={{ marginTop: 36 }}>
          {principles.map((principle) => (
            <div className="bl-principle" key={principle.title} data-bl-reveal>
              <span className="bl-principle-icon" aria-hidden="true">{principle.icon}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bl-container bl-section bl-testimonials" style={{ paddingTop: 0 }}>
        <div className="bl-label" data-bl-reveal>Kind words, held carefully</div>
        <h2 className="bl-h2" data-bl-reveal style={{ marginTop: 16 }}>
          Real words, <em>when they&apos;re ready.</em>
        </h2>
        <div className="bl-quote-stack" data-bl-reveal>
          {["Awaiting permission · i", "Awaiting permission · ii", "Awaiting permission · iii"].map((slot) => (
            <div className="bl-quote-card" key={slot}>
              —
              <small>{slot}</small>
            </div>
          ))}
        </div>
        <p className="bl-testimonials-note" data-bl-reveal>
          Genuine client feedback will appear here once permissions are in place. Nothing
          is invented for this preview.
        </p>
      </section>

      <section className="bl-container bl-section" id="steps" style={{ paddingTop: 0 }}>
        <div className="bl-label" data-bl-reveal>Booking a reading</div>
        <h2 className="bl-h2" data-bl-reveal style={{ marginTop: 16, marginBottom: 56 }}>
          Three small steps.
        </h2>
        <div className="bl-steps">
          {steps.map((step, index) => (
            <div className="bl-step" key={step.title} data-bl-reveal>
              <span className="bl-step-num" aria-hidden="true">{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bl-container bl-section" id="faqs" style={{ paddingTop: 0 }}>
        <div className="bl-faq-grid">
          <div>
            <div className="bl-label" data-bl-reveal>Before you book</div>
            <h2 className="bl-h2" data-bl-reveal style={{ marginTop: 16 }}>
              You may be <em>wondering.</em>
            </h2>
            <p data-bl-reveal style={{ color: "var(--bl-dim)", marginTop: 18, fontSize: 14, maxWidth: 380 }}>
              Short answers to the questions visitors ask most. Anything else — just ask
              Pooja directly.
            </p>
          </div>
          <div className="bl-faq-card" data-bl-reveal>
            <ConceptAccordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="bl-container" style={{ paddingBottom: "clamp(64px, 9vw, 128px)" }}>
        <div className="bl-cta" data-bl-reveal>
          <div className="bl-cta-sticker bl-cta-sticker--1" aria-hidden="true">
            <Image src="/images/tarot.jpg" alt="" fill sizes="150px" style={{ objectPosition: "50% 55%" }} />
          </div>
          <div className="bl-cta-sticker bl-cta-sticker--2" aria-hidden="true">
            <Image src="/images/relationship.jpg" alt="" fill sizes="130px" style={{ objectPosition: "50% 25%" }} />
          </div>
          <h2>
            The answers begin <em>with you.</em>
          </h2>
          <p>
            Send a WhatsApp enquiry and Pooja will personally help you choose a
            consultation, share fees and availability, and take it from there.
          </p>
          <div className="bl-cta-actions">
            <a className="bl-button bl-button--light" href={whatsapp()} target="_blank" rel="noopener noreferrer">
              Let&apos;s talk on WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="bl-soft-link" style={{ color: "#ecd6f6" }} href={instagram} target="_blank" rel="noopener noreferrer">
              Enquire on Instagram →
            </a>
          </div>
          <p className="bl-cta-note">
            Prefer to browse the profile first?{" "}
            <a href={instagramProfile} target="_blank" rel="noopener noreferrer">
              @zenquestbypooja
            </a>
          </p>
        </div>
      </section>

      <footer className="bl-footer" style={{ paddingTop: 0 }}>
        <div className="bl-container">
          <div className="bl-footer-card">
            <div className="bl-footer-brand">
              <Link href="/" className="bl-brand" aria-label="ZenQuest by Pooja">
                <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} />
              </Link>
              <p>
                The private practice of Pooja Khera. Tarot, astrology and relationship
                guidance — one conversation at a time.
              </p>
            </div>
            <div className="bl-footer-links">
              <h3>Explore</h3>
              <div>
                <a href="/book-a-reading-with-pooja">Tarot &amp; Astro-Tarot</a>
                <a href="/astrology">Astrology consultations</a>
                <a href="/relationship-blueprint">Relationship Blueprint</a>
                <a href="/about">About Pooja</a>
                <a href="/media">Media</a>
              </div>
            </div>
            <div className="bl-footer-links">
              <h3>Enquiries</h3>
              <div>
                <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
                  WhatsApp — +91 96500 93836
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  Instagram — @zenquestbypooja
                </a>
                <a href="/book-a-reading">How booking works</a>
                <a href="/consultation-policies">Consultation policies</a>
              </div>
            </div>
          </div>
          <div className="bl-footer-bottom">
            <span>© {new Date().getFullYear()} ZenQuest by Pooja — Private practice</span>
            <span>Fees &amp; availability are always shared privately.</span>
          </div>
        </div>
      </footer>

      <ConceptSwitcher current="bloom" tone="light" />
    </div>
  );
}
