import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faqs, instagram, instagramProfile, whatsapp } from "@/lib/content";
import { ConceptAccordion } from "@/components/concepts/faq";
import { ConceptSwitcher } from "@/components/concepts/switcher";
import { AtelierMobileMenu, AtelierMotion } from "@/components/concepts/atelier-motion";
import "./atelier.css";

export const metadata: Metadata = {
  title: "Concept B — Atelier",
  robots: { index: false, follow: false },
};

function ZodiacWheel() {
  const spokes = Array.from({ length: 12 }).map((_, index) => {
    const angle = (index / 12) * Math.PI * 2;
    return {
      x1: 150 + Math.cos(angle) * 96,
      y1: 150 + Math.sin(angle) * 96,
      x2: 150 + Math.cos(angle) * 144,
      y2: 150 + Math.sin(angle) * 144,
    };
  });
  return (
    <svg viewBox="0 0 300 300" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
      <circle cx="150" cy="150" r="144" />
      <circle cx="150" cy="150" r="96" />
      <circle cx="150" cy="150" r="34" />
      {spokes.map((spoke, index) => (
        <line key={index} x1={spoke.x1} y1={spoke.y1} x2={spoke.x2} y2={spoke.y2} />
      ))}
      <circle cx="150" cy="150" r="3" fill="currentColor" />
    </svg>
  );
}

const steps = [
  {
    title: "Choose your consultation",
    body: "Explore the services and choose the format that fits the questions on your mind. Each service page lists exactly what is included.",
  },
  {
    title: "Enquire on WhatsApp",
    body: "Message Pooja with your preferred consultation. Fees and availability are shared privately, in conversation — never listed publicly.",
  },
  {
    title: "Confirm your time",
    body: "Once details are agreed, your session is confirmed. Astrology consultations share accurate birth details in advance.",
  },
];

const principles = [
  {
    num: "i.",
    title: "Personal, always",
    body: "Every consultation is one-to-one with Pooja — never an app, a marketplace, or a template answer.",
  },
  {
    num: "ii.",
    title: "Clear scope",
    body: "Each service lists exactly what it covers and what it doesn't, so you always know what you are booking.",
  },
  {
    num: "iii.",
    title: "Private by design",
    body: "Fees, availability and personal details live in the conversation — never on a public page.",
  },
];

export default function AtelierConcept() {
  return (
    <div data-concept-shell className="at-root" style={{ "--concept-bg": "#F4F0E8" } as React.CSSProperties}>
      <AtelierMotion />

      <header className="at-header">
        <div className="at-container">
          <div className="at-topbar">
            <span>ZenQuest by Pooja — Private practice</span>
            <span className="at-topbar-center">Astrology · Tarot · Guidance</span>
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
              Enquire — WhatsApp ↗
            </a>
          </div>
          <div className="at-mast">
            <Link href="/" className="at-brand" aria-label="ZenQuest by Pooja">
              <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} priority />
            </Link>
            <nav className="at-nav" aria-label="Concept navigation">
              <a href="#practice">The practice</a>
              <a href="#consultations">Consultations</a>
              <a href="#steps">Booking</a>
              <a href="#faqs">FAQs</a>
              <a className="at-book-link" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                Book a reading
              </a>
            </nav>
            <AtelierMobileMenu />
          </div>
        </div>
      </header>

      <section className="at-container at-hero">
        <span className="at-hero-vert">The answers begin with you — Chandigarh &amp; worldwide</span>
        <div className="at-hero-copy">
          <h1>
            <span className="at-line"><span>A little clarity.</span></span>
            <span className="at-line"><span>A deeper</span></span>
            <span className="at-line"><span><em>connection.</em></span></span>
          </h1>
          <p className="at-hero-sub">
            Private astrology and tarot consultations with Pooja Khera. One-to-one,
            unhurried, and shaped around the questions you bring.
          </p>
          <div className="at-hero-actions">
            <a className="at-book-link" href={whatsapp()} target="_blank" rel="noopener noreferrer">
              Book a reading ↗
            </a>
            <a className="at-ink-link" href="#consultations">
              Explore consultations ↓
            </a>
          </div>
        </div>
        <figure className="at-hero-plate" style={{ margin: 0 }}>
          <div className="at-plate">
            <div className="at-plate-media">
              <Image
                src="/images/pooja.jpg"
                alt="Pooja Khera, founder of ZenQuest"
                fill
                priority
                sizes="(max-width: 940px) 100vw, 26vw"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>
            <figcaption className="at-plate-caption">
              <span><b>Plate I.</b> Pooja Khera</span>
              <span>Practitioner</span>
            </figcaption>
          </div>
        </figure>
        <p className="at-hero-draft">
          18+ years of experience · 1,000+ readings — draft figures, awaiting confirmation.
        </p>
        <nav className="at-hero-index" aria-label="Page contents">
          <a href="#practice"><b>01</b> — The practice</a>
          <a href="#consultations"><b>02</b> — Consultations</a>
          <a href="#steps"><b>03</b> — Booking</a>
          <a href="#faqs"><b>04</b> — FAQs</a>
          <a href="#enquire"><b>05</b> — Enquire</a>
        </nav>
      </section>

      <section className="at-section" id="practice">
        <div className="at-container">
          <div className="at-section-head" data-at-reveal>
            <span className="at-label"><b>Cat. 01</b> — The practice</span>
            <span className="at-rule" />
            <span className="at-no">i</span>
          </div>
          <div className="at-intro">
            <p className="at-intro-statement" data-at-reveal>
              ZenQuest is the private practice of Pooja Khera — <em>tarot reader, astrologer
              and relationship coach.</em> Every consultation is one-to-one, shaped around
              the questions you bring.
            </p>
            <div className="at-intro-side" data-at-reveal>
              <p>
                After a corporate career in Chandigarh, Pooja turned a lifelong study of
                tarot and astrology into her life&apos;s work — blending spiritual insight
                with practical, grounded guidance.
              </p>
              <p>
                The intention has never changed: to help you find joy, peace, harmony and
                balance in your own story.
              </p>
              <div className="at-figures">
                <div>
                  <strong>18+ yrs</strong>
                  <span>Experience · draft</span>
                </div>
                <div>
                  <strong>1,000+</strong>
                  <span>Readings · draft</span>
                </div>
                <small>Figures are proposed and awaiting confirmation before publication.</small>
              </div>
              <a className="at-ink-link" href="/about">
                A little more about Pooja →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="at-section" id="consultations">
        <div className="at-container">
          <div className="at-section-head" data-at-reveal>
            <span className="at-label"><b>Cat. 02</b> — Consultations</span>
            <span className="at-rule" />
            <span className="at-no">ii</span>
          </div>
          <div className="at-plates">
            <div className="at-plate-row">
              <div className="at-plate" data-at-clip>
                <div className="at-plate-media">
                  <Image src="/images/tarot.jpg" alt="Tarot cards laid out for a reading" fill sizes="(max-width: 860px) 100vw, 48vw" style={{ objectPosition: "50% 55%" }} />
                </div>
                <div className="at-plate-caption">
                  <span><b>Plate II.</b> The deck</span>
                  <span>Tarot &amp; Astro-Tarot</span>
                </div>
              </div>
              <div className="at-plate-copy" data-at-reveal>
                <p className="at-format">Live sessions · Voice readings · From 30 minutes</p>
                <h3>
                  Tarot &amp; <em>Astro-Tarot</em>
                </h3>
                <p>
                  Readings that go beyond yes and no — exploring your situation, its
                  influences, and the guidance worth acting on. Choose a live session or a
                  recorded voice reading.
                </p>
                <a className="at-ink-link" href="/book-a-reading-with-pooja">
                  View the five readings →
                </a>
              </div>
            </div>

            <div className="at-plate-row">
              <div className="at-plate at-plate--type" data-at-reveal>
                <div className="at-plate-media">
                  <ZodiacWheel />
                </div>
                <div className="at-plate-caption">
                  <span><b>Plate III.</b> The chart</span>
                  <span>Astrology</span>
                </div>
              </div>
              <div className="at-plate-copy" data-at-reveal>
                <p className="at-format">Birth chart · Timing · Forecasts · Up to 75 minutes</p>
                <h3>
                  Astrology, <em>told honestly.</em>
                </h3>
                <p>
                  Your birth chart in the context of your life today — an honest, sometimes
                  challenging conversation about agency, timing and what the chart suggests.
                </p>
                <a className="at-ink-link" href="/astrology">
                  View the four consultations →
                </a>
              </div>
            </div>

            <div className="at-plate-row">
              <div className="at-plate" data-at-clip>
                <div className="at-plate-media">
                  <Image src="/images/relationship.jpg" alt="Pooja Khera outdoors" fill sizes="(max-width: 860px) 100vw, 48vw" style={{ objectPosition: "50% 28%" }} />
                </div>
                <div className="at-plate-caption">
                  <span><b>Plate IV.</b> The work</span>
                  <span>Relationship Blueprint</span>
                </div>
              </div>
              <div className="at-plate-copy" data-at-reveal>
                <p className="at-format">Coaching for recurring patterns · Zoom · 30 · 60 · 4×60</p>
                <h3>
                  Relationship <em>Blueprint</em>
                </h3>
                <p>
                  For women navigating recurring relationship patterns — a precise strategy,
                  practical tools and exercises, built step by step with Pooja.
                </p>
                <a className="at-ink-link" href="/relationship-blueprint">
                  Explore the Blueprint →
                </a>
              </div>
            </div>
          </div>
          <p data-at-reveal style={{ marginTop: 44, color: "var(--at-dim)", fontSize: 14 }}>
            Not sure which consultation fits?{" "}
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--at-purple)", borderBottom: "1px solid currentColor" }}
            >
              Ask Pooja on WhatsApp
            </a>{" "}
            — she will personally help you choose.
          </p>
        </div>
      </section>

      <section className="at-section" id="principles">
        <div className="at-container">
          <div className="at-section-head" data-at-reveal>
            <span className="at-label"><b>Cat. 03</b> — How Pooja works</span>
            <span className="at-rule" />
            <span className="at-no">iii</span>
          </div>
          <div className="at-index-list" data-at-reveal>
            {principles.map((principle) => (
              <div key={principle.title}>
                <span className="at-num">{principle.num}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <figure className="at-band" style={{ margin: 0 }}>
        <div className="at-band-media" data-at-clip>
          <Image src="/images/tarot.jpg" alt="Tarot cards, butterfly and stones on soft fabric" fill sizes="100vw" />
        </div>
        <figcaption className="at-band-caption">
          <span><b>Plate V.</b> A reading, mid-session</span>
          <span>The deck · The cards</span>
        </figcaption>
      </figure>

      <section className="at-section">
        <div className="at-container">
          <div className="at-section-head" data-at-reveal>
            <span className="at-label"><b>Cat. 04</b> — Kind words</span>
            <span className="at-rule" />
            <span className="at-no">iv</span>
          </div>
          <h2 className="at-h2" data-at-reveal style={{ marginBottom: 40 }}>
            Held <em>carefully.</em>
          </h2>
          <div className="at-testimonials-grid" data-at-reveal>
            {["Slot i", "Slot ii", "Slot iii"].map((slot) => (
              <div key={slot}>
                <span className="at-t-no">{slot}</span>
                <p>—</p>
                <small>Testimonial · awaiting permission</small>
              </div>
            ))}
          </div>
          <p data-at-reveal style={{ marginTop: 20, color: "var(--at-dim)", fontSize: 13 }}>
            Genuine client feedback will appear here once permissions are in place. Nothing
            is invented for this preview.
          </p>
        </div>
      </section>

      <section className="at-section" id="steps">
        <div className="at-container">
          <div className="at-section-head" data-at-reveal>
            <span className="at-label"><b>Cat. 05</b> — Booking a reading</span>
            <span className="at-rule" />
            <span className="at-no">v</span>
          </div>
          <div className="at-steps" data-at-reveal>
            {steps.map((step, index) => (
              <div key={step.title}>
                <span className="at-no">{index + 1}.</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section" id="faqs">
        <div className="at-container">
          <div className="at-section-head" data-at-reveal>
            <span className="at-label"><b>Cat. 06</b> — Before you book</span>
            <span className="at-rule" />
            <span className="at-no">vi</span>
          </div>
          <div className="at-faq-grid">
            <h2 className="at-h2" data-at-reveal>
              You may be <em>wondering.</em>
            </h2>
            <div data-at-reveal>
              <ConceptAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="at-cta" id="enquire">
        <div className="at-container">
          <span className="at-cta-mark" aria-hidden="true">✳</span>
          <h2 data-at-reveal>
            Begin the <em>conversation.</em>
          </h2>
          <p data-at-reveal>
            Send a WhatsApp enquiry and Pooja will personally help you choose a
            consultation, share fees and availability, and take it from there.
          </p>
          <div className="at-cta-actions" data-at-reveal>
            <a className="at-book-link" href={whatsapp()} target="_blank" rel="noopener noreferrer">
              Let&apos;s talk on WhatsApp ↗
            </a>
            <a className="at-ink-link" href={instagram} target="_blank" rel="noopener noreferrer">
              Enquire on Instagram →
            </a>
          </div>
          <p data-at-reveal style={{ marginTop: 24, fontSize: 12 }}>
            Prefer to browse the profile first?{" "}
            <a
              href={instagramProfile}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--at-purple)", borderBottom: "1px solid currentColor" }}
            >
              @zenquestbypooja
            </a>
          </p>
        </div>
      </section>

      <footer className="at-footer">
        <div className="at-container">
          <div className="at-footer-grid">
            <div className="at-footer-brand">
              <Link href="/" className="at-brand" aria-label="ZenQuest by Pooja">
                <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} />
              </Link>
              <p>
                The private practice of Pooja Khera. Tarot, astrology and relationship
                guidance — one conversation at a time.
              </p>
            </div>
            <div className="at-footer-links">
              <h3>Explore</h3>
              <div>
                <a href="/book-a-reading-with-pooja">Tarot &amp; Astro-Tarot</a>
                <a href="/astrology">Astrology consultations</a>
                <a href="/relationship-blueprint">Relationship Blueprint</a>
                <a href="/about">About Pooja</a>
                <a href="/media">Media</a>
              </div>
            </div>
            <div className="at-footer-links">
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
          <div className="at-colophon">
            <span>© {new Date().getFullYear()} ZenQuest by Pooja</span>
            <span>Set in Cormorant Garamond &amp; Manrope</span>
            <span>Fees &amp; availability shared privately</span>
          </div>
        </div>
      </footer>

      <ConceptSwitcher current="atelier" tone="light" />
    </div>
  );
}
