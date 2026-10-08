import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faqs, instagram, instagramProfile, whatsapp } from "@/lib/content";
import { ConceptAccordion } from "@/components/concepts/faq";
import { ConceptSwitcher } from "@/components/concepts/switcher";
import { NocturneMobileMenu, NocturneMotion } from "@/components/concepts/nocturne-motion";
import "./nocturne.css";

export const metadata: Metadata = {
  title: "Concept A — Nocturne",
  robots: { index: false, follow: false },
};

const marqueeItems = [
  "Tarot readings",
  "Astrology consultations",
  "Astro-Tarot",
  "Relationship Blueprint",
  "Private enquiries",
];

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
    body: "Once the details are agreed, your session is confirmed. Astrology consultations share accurate birth details in advance.",
  },
];

const principles = [
  {
    label: "One — Personal",
    title: "Personal, always",
    body: "Every consultation is one-to-one with Pooja. Never an app, a marketplace, or a template answer.",
  },
  {
    label: "Two — Scope",
    title: "Clear scope",
    body: "Each service lists exactly what it covers and what it doesn't, so you always know what you are booking.",
  },
  {
    label: "Three — Privacy",
    title: "Private by design",
    body: "Fees, availability and personal details live in the conversation — never on a public page.",
  },
];

export default function NocturneConcept() {
  return (
    <div data-concept-shell className="nc-root" style={{ "--concept-bg": "#140B1B" } as React.CSSProperties}>
      <NocturneMotion />
      <div className="nc-frame" aria-hidden="true" />

      <header className="nc-header">
        <div className="nc-container nc-header-inner">
          <Link href="/" className="nc-brand" aria-label="ZenQuest by Pooja">
            <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} priority />
          </Link>
          <nav className="nc-header-nav" aria-label="Concept navigation">
            <a href="#practice">The practice</a>
            <a href="#consultations">Consultations</a>
            <a href="#steps">Booking</a>
            <a href="#faqs">FAQs</a>
            <a className="nc-book" href={whatsapp()} target="_blank" rel="noopener noreferrer">
              Book a reading
            </a>
          </nav>
          <NocturneMobileMenu />
        </div>
      </header>

      <section className="nc-hero">
        <div className="nc-hero-portrait">
          <Image src="/images/pooja.jpg" alt="Pooja Khera, founder of ZenQuest" fill priority sizes="(max-width: 980px) 100vw, 46vw" />
        </div>
        <div className="nc-watermark" aria-hidden="true">Zenquest</div>
        <div className="nc-container nc-hero-inner">
          <div className="nc-hero-copy">
            <p className="nc-label">
              Astrology · Tarot · Personal guidance <b>✶</b> Chandigarh → worldwide
            </p>
            <h1>
              <span className="nc-line"><span>A little clarity.</span></span>
              <span className="nc-line"><span>A deeper <em>connection.</em></span></span>
            </h1>
            <p className="nc-hero-sub">
              When life brings questions, make space for perspective. Private astrology and
              tarot consultations with Pooja Khera — one-to-one, unhurried, shaped around you.
            </p>
            <div className="nc-hero-actions">
              <a className="nc-book nc-book--solid" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                Book a reading <span aria-hidden="true">↗</span>
              </a>
              <a className="nc-ghost-link" href="#consultations">
                Explore consultations <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="nc-hero-meta">
            <span className="nc-label">A personal conversation. A path that is yours.</span>
            <span className="nc-note">
              18+ years · 1,000+ readings — draft figures, awaiting confirmation
            </span>
          </div>
        </div>
      </section>

      <div className="nc-marquee" aria-hidden="true">
        <div className="nc-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      <section className="nc-section" id="practice">
        <div className="nc-container">
          <div className="nc-section-head" data-nc-reveal>
            <span className="nc-label"><b>01</b> — The practice</span>
          </div>
          <div className="nc-intro-grid">
            <p className="nc-intro-statement" data-nc-reveal>
              ZenQuest is the private practice of Pooja Khera — <em>tarot reader, astrologer
              and relationship coach.</em> Every consultation is one-to-one, shaped around
              the questions you bring.
            </p>
            <div className="nc-intro-body" data-nc-reveal>
              <p>
                After a corporate career in Chandigarh, Pooja turned a lifelong study of
                tarot and astrology into her life&apos;s work — blending spiritual insight
                with practical, grounded guidance. The intention has never changed: help
                you find joy, peace, harmony and balance in your own story.
              </p>
              <div className="nc-figures">
                <div>
                  <strong>18+ yrs</strong>
                  <span>Experience — draft</span>
                </div>
                <div>
                  <strong>1,000+</strong>
                  <span>Readings — draft</span>
                </div>
                <small>Figures are proposed and awaiting the client&apos;s confirmation. They will be published only once verified.</small>
              </div>
              <div>
                <a className="nc-ghost-link" href="/about">
                  A little more about Pooja <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nc-section" id="consultations" style={{ paddingTop: 0 }}>
        <div className="nc-container">
          <div className="nc-section-head" data-nc-reveal>
            <span className="nc-label"><b>02</b> — Consultations</span>
          </div>
          <div className="nc-index" data-nc-reveal>
            <Link className="nc-index-row" href="/book-a-reading-with-pooja" data-img-index="0">
              <span className="nc-index-num">No. 1</span>
              <span className="nc-index-title">Tarot &amp; Astro-Tarot</span>
              <span className="nc-index-meta">
                Live sessions · Voice readings<br />From 30 minutes
              </span>
              <span className="nc-index-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="nc-index-row" href="/astrology" data-img-index="1">
              <span className="nc-index-num">No. 2</span>
              <span className="nc-index-title">Astrology</span>
              <span className="nc-index-meta">
                Birth chart · Timing · Forecasts<br />Up to 75 minutes
              </span>
              <span className="nc-index-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link className="nc-index-row" href="/relationship-blueprint" data-img-index="2">
              <span className="nc-index-num">No. 3</span>
              <span className="nc-index-title">Relationship Blueprint</span>
              <span className="nc-index-meta">
                Coaching for recurring patterns<br />30 · 60 · 4×60 minutes
              </span>
              <span className="nc-index-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
          <p data-nc-reveal style={{ marginTop: 28, color: "var(--nc-dim)", fontSize: 14 }}>
            Not sure which consultation fits?{" "}
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--nc-orchid)", borderBottom: "1px solid currentColor" }}
            >
              Ask Pooja on WhatsApp
            </a>{" "}
            — she will help you choose. Fees and availability are always shared privately.
          </p>
        </div>
      </section>

      <section className="nc-section nc-quote">
        <figure className="nc-container" data-nc-reveal style={{ margin: 0 }}>
          <blockquote>
            Think of me as a personal trainer for your heart.
          </blockquote>
          <figcaption>
            <span className="nc-label">Pooja Khera — on the Relationship Blueprint</span>
          </figcaption>
        </figure>
      </section>

      <section className="nc-section">
        <div className="nc-container">
          <div className="nc-section-head" data-nc-reveal>
            <span className="nc-label"><b>03</b> — How Pooja works</span>
          </div>
          <div className="nc-principles">
            {principles.map((principle) => (
              <div className="nc-principle" key={principle.title} data-nc-reveal>
                <span className="nc-label">{principle.label}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nc-section nc-testimonials" style={{ paddingTop: 0 }}>
        <div className="nc-container">
          <h2 className="nc-h2" data-nc-reveal>
            Kind words, <em>held carefully.</em>
          </h2>
          <p data-nc-reveal style={{ color: "var(--nc-dim)", marginTop: 18, fontSize: 14 }}>
            Genuine client feedback will appear here once permissions are in place. Nothing
            is invented for this preview.
          </p>
          <div className="nc-testimonials-grid" data-nc-reveal>
            {["Awaiting permission · slot 1", "Awaiting permission · slot 2", "Awaiting permission · slot 3"].map(
              (slot) => (
                <div key={slot}>
                  <p>—</p>
                  <small>{slot}</small>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="nc-section" id="steps" style={{ paddingTop: 0 }}>
        <div className="nc-container">
          <div className="nc-section-head" data-nc-reveal>
            <span className="nc-label"><b>04</b> — Booking a reading</span>
          </div>
          <div className="nc-steps">
            {steps.map((step, index) => (
              <div className="nc-step" key={step.title} data-nc-reveal>
                <div className="nc-step-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nc-section" id="faqs" style={{ paddingTop: 0 }}>
        <div className="nc-container">
          <div className="nc-section-head" data-nc-reveal>
            <span className="nc-label"><b>05</b> — Before you book</span>
          </div>
          <div className="nc-faq-wrap">
            <h2 className="nc-h2" data-nc-reveal>
              You may be <em>wondering.</em>
            </h2>
            <div data-nc-reveal>
              <ConceptAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="nc-section" style={{ paddingTop: 0 }}>
        <div className="nc-container">
          <div className="nc-cta" data-nc-reveal>
            <svg className="nc-eye" viewBox="0 0 400 400" aria-hidden="true" fill="none" stroke="currentColor">
              <ellipse cx="200" cy="200" rx="150" ry="62" />
              <circle cx="200" cy="200" r="34" />
              <circle cx="200" cy="200" r="12" />
              {Array.from({ length: 24 }).map((_, index) => {
                const angle = (index / 24) * Math.PI * 2;
                const x1 = 200 + Math.cos(angle) * 160;
                const y1 = 200 + Math.sin(angle) * 160 * 0.72;
                const x2 = 200 + Math.cos(angle) * 196;
                const y2 = 200 + Math.sin(angle) * 196 * 0.72;
                return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="0.8" />;
              })}
            </svg>
            <h2>
              The answers begin <em>with you.</em>
            </h2>
            <p>
              Send a WhatsApp enquiry and Pooja will personally help you choose a
              consultation, share fees and availability, and take it from there.
            </p>
            <div className="nc-cta-actions">
              <a className="nc-book nc-book--solid" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                Let&apos;s talk on WhatsApp <span aria-hidden="true">↗</span>
              </a>
              <a className="nc-ghost-link" href={instagram} target="_blank" rel="noopener noreferrer">
                Enquire on Instagram
              </a>
            </div>
            <p style={{ marginTop: 26, fontSize: 12 }}>
              Prefer to browse the profile first?{" "}
              <a
                href={instagramProfile}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderBottom: "1px solid currentColor" }}
              >
                @zenquestbypooja
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="nc-footer">
        <div className="nc-container">
          <div className="nc-footer-grid">
            <div className="nc-footer-brand">
              <Link href="/" className="nc-brand" aria-label="ZenQuest by Pooja">
                <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} />
              </Link>
              <p>
                The private practice of Pooja Khera. Tarot, astrology and relationship
                guidance — one conversation at a time.
              </p>
            </div>
            <div className="nc-footer-links">
              <h3>Explore</h3>
              <div>
                <a href="/book-a-reading-with-pooja">Tarot &amp; Astro-Tarot</a>
                <a href="/astrology">Astrology consultations</a>
                <a href="/relationship-blueprint">Relationship Blueprint</a>
                <a href="/about">About Pooja</a>
                <a href="/media">Media</a>
              </div>
            </div>
            <div className="nc-footer-links">
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
          <div className="nc-footer-bottom">
            <span>© {new Date().getFullYear()} ZenQuest by Pooja — Private practice</span>
            <span>Fees &amp; availability are always shared privately.</span>
          </div>
        </div>
      </footer>

      <ConceptSwitcher current="nocturne" tone="dark" />
    </div>
  );
}
