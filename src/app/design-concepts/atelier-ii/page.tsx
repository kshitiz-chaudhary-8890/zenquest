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
import { CuratorMobileMenu, CuratorMotion } from "@/components/concepts/curator-motion";
import "./atelier-ii.css";

export const metadata: Metadata = {
  title: "Atelier II — The Curator",
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
    no: "§ i.",
    title: "Personal, always",
    body: "Every consultation is one-to-one with Pooja — never an app, a marketplace, or a template answer.",
  },
  {
    no: "§ ii.",
    title: "Clear scope",
    body: "Each service lists exactly what it covers and what it doesn't, so you always know what you are booking.",
  },
  {
    no: "§ iii.",
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

export default function CuratorConcept() {
  return (
    <div data-concept-shell className="ac-root" style={{ "--concept-bg": "#F3EEE4" } as React.CSSProperties}>
      <CuratorMotion />

      <header className="ac-masthead">
        <div className="ac-container">
          <div className="ac-masthead-top">
            <Link href="/" className="ac-brand" aria-label="ZenQuest by Pooja">
              <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} priority />
            </Link>
            <span className="ac-masthead-catalogue">Catalogue of consultations — Vol. I</span>
            <a className="ac-caps" href={whatsapp()} target="_blank" rel="noopener noreferrer" style={{ paddingBlock: 6 }}>
              Enquire ↗
            </a>
          </div>
          <div className="ac-masthead-row">
            <span className="ac-caps">The private practice of Pooja Khera</span>
            <nav className="ac-nav" aria-label="Concept navigation">
              <a href="#practice">The practice</a>
              <a href="#consultations">Consultations</a>
              <a href="#process">Process</a>
              <a href="#faqs">Questions</a>
              <a className="ac-enquire-btn" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                Book a reading
              </a>
            </nav>
            <CuratorMobileMenu />
          </div>
        </div>
      </header>

      <section className="ac-hero">
        <EngravedEye className="ac-hero-eye" rays={30} />
        <div className="ac-container">
          <div className="ac-hero-grid">
            <div className="ac-hero-copy">
              <div className="ac-hero-kicker">
                <span className="ac-caps"><b>Astrology · Tarot · Personal guidance</b></span>
              </div>
              <h1>
                <span className="ac-line"><span>A little clarity.</span></span>
                <span className="ac-line ac-line--indent"><span>A deeper</span></span>
                <span className="ac-line"><span><em>connection.</em></span></span>
              </h1>
              <p className="ac-hero-sub">
                Private astrology and tarot consultations with Pooja Khera — one-to-one,
                unhurried, and shaped around the questions you bring.
              </p>
              <div className="ac-hero-actions">
                <a className="ac-enquire-btn" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                  Book a reading ↗
                </a>
                <a className="ac-ink-link" href="#consultations">
                  View the collections ↓
                </a>
              </div>
            </div>

            <figure className="ac-hero-figure" style={{ margin: 0 }}>
              <div className="ac-hero-plate" data-ac-clip>
                <div className="ac-hero-plate-media">
                  <Image
                    src="/images/pooja.jpg"
                    alt="Pooja Khera, founder of ZenQuest"
                    fill
                    priority
                    sizes="(max-width: 960px) 100vw, 40vw"
                    style={{ objectPosition: "50% 28%" }}
                  />
                </div>
              </div>
              <div className="ac-wall-label">
                <span>Wall label — No. 1</span>
                <strong>Pooja Khera</strong>
                <small>
                  Tarot reader, astrologer and relationship coach. The practice — Chandigarh,
                  open to clients worldwide.
                </small>
              </div>
            </figure>
          </div>

          <div className="ac-hero-colophon">
            <nav className="ac-toc" aria-label="Page contents">
              <a href="#practice"><b>01</b> The practice</a>
              <a href="#consultations"><b>02</b> Consultations</a>
              <a href="#process"><b>03</b> Process</a>
              <a href="#faqs"><b>04</b> Questions</a>
              <a href="#enquire"><b>05</b> Enquire</a>
            </nav>
            <span className="ac-hero-draft">
              18+ years · 1,000+ readings — draft figures, awaiting confirmation
            </span>
          </div>
        </div>
      </section>

      <section className="ac-section" id="practice">
        <div className="ac-container">
          <div className="ac-folio-head" data-ac-reveal>
            <span className="ac-caps"><b>01</b> — The practice</span>
            <span className="ac-rule" />
            <span className="ac-folio-page">p. 01</span>
          </div>
          <div className="ac-practice">
            <p className="ac-practice-statement" data-ac-reveal>
              ZenQuest is the private practice of Pooja Khera — <em>tarot reader, astrologer
              and relationship coach.</em> Every consultation is one-to-one, shaped around
              the questions you bring.
            </p>
            <div className="ac-practice-plate">
              <div className="ac-mini-plate" data-ac-clip>
                <div className="ac-mini-plate-media">
                  <Image src="/images/tarot.jpg" alt="Tarot cards laid out for a reading" fill sizes="(max-width: 960px) 60vw, 34vw" style={{ objectPosition: "50% 55%" }} />
                </div>
                <div className="ac-mini-plate-caption">
                  <span><b>Plate II.</b> The deck</span>
                  <span>Shadowscapes</span>
                </div>
              </div>
            </div>
            <div className="ac-practice-body">
              <div data-ac-reveal>
                <p>
                  After a corporate career in Chandigarh, Pooja turned a lifelong study of
                  tarot and astrology into her life&apos;s work — blending spiritual insight
                  with practical, grounded guidance.
                </p>
                <p style={{ marginTop: 14 }}>
                  The intention has never changed: to help you find joy, peace, harmony and
                  balance in your own story.
                </p>
              </div>
              <div className="ac-practice-figures" data-ac-reveal>
                <div>
                  <strong>18+ yrs</strong>
                  <span>Experience · draft</span>
                </div>
                <div>
                  <strong>1,000+</strong>
                  <span>Readings · draft</span>
                </div>
                <small>Proposed figures — published only after confirmation.</small>
              </div>
            </div>
            <div className="ac-practice-cta" data-ac-reveal>
              <a className="ac-ink-link" href="/about">
                A little more about Pooja →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ac-section" id="consultations">
        <div className="ac-container">
          <div className="ac-folio-head" data-ac-reveal>
            <span className="ac-caps"><b>02</b> — Consultations</span>
            <span className="ac-rule" />
            <span className="ac-folio-page">p. 02</span>
          </div>
          <h2 className="ac-h2" data-ac-reveal style={{ marginBottom: "clamp(48px, 6vw, 96px)" }}>
            The <em>collections.</em>
          </h2>

          {/* I. Tarot & Astro-Tarot */}
          <div className="ac-collection ac-collection--flip">
            <div className="ac-collection-plate">
              <div className="ac-mini-plate" data-ac-clip>
                <div className="ac-mini-plate-media">
                  <Image src="/images/tarot.jpg" alt="Tarot cards from a reading" fill sizes="(max-width: 960px) 100vw, 42vw" style={{ objectPosition: "50% 52%" }} />
                </div>
                <div className="ac-mini-plate-caption">
                  <span><b>Plate III.</b> A reading, mid-session</span>
                  <span>Tarot &amp; Astro-Tarot</span>
                </div>
              </div>
            </div>
            <div className="ac-collection-copy">
              <span className="ac-collection-ghost" aria-hidden="true">I.</span>
              <p className="ac-caps ac-collection-kicker"><b>Collection I</b> — Five readings</p>
              <h3>
                Tarot &amp; <em>Astro-Tarot</em>
              </h3>
              <p>
                Readings that go beyond yes and no — your situation, its influences, and the
                guidance worth acting on. Five formats, from a recorded voice reading to a
                combined astrology and tarot session.
              </p>
              <div className="ac-index-table" data-ac-reveal>
                {tarotServices.map((service, index) => (
                  <a key={service.id} href={`/book-a-reading-with-pooja#${service.id}`}>
                    <span className="ac-index-no">{String(index + 1).padStart(2, "0")}</span>
                    <span className="ac-index-name">{service.title}</span>
                    <span className="ac-index-leader" aria-hidden="true" />
                    <span className="ac-index-format">{service.format}</span>
                  </a>
                ))}
              </div>
              <p className="ac-collection-note">
                Returning clients may be eligible for a Tarot Continuation —{" "}
                <a href="/book-a-reading-with-pooja">conditions on the Tarot page</a>.
              </p>
              <div className="ac-collection-cta" data-ac-reveal>
                <a className="ac-ink-link" href="/book-a-reading-with-pooja">
                  Explore the five readings →
                </a>
              </div>
            </div>
          </div>

          {/* II. Astrology */}
          <div className="ac-collection ac-collection--type">
            <div className="ac-collection-plate">
              <div className="ac-mini-plate" data-ac-reveal>
                <div className="ac-mini-plate-media">
                  <ZodiacWheel />
                </div>
                <div className="ac-mini-plate-caption">
                  <span><b>Plate IV.</b> The chart</span>
                  <span>Astrology</span>
                </div>
              </div>
            </div>
            <div className="ac-collection-copy">
              <span className="ac-collection-ghost" aria-hidden="true">II.</span>
              <p className="ac-caps ac-collection-kicker"><b>Collection II</b> — Four consultations</p>
              <h3>
                Astrology, <em>told honestly</em>
              </h3>
              <p>
                Your birth chart in the context of your life today — an honest, sometimes
                challenging conversation about agency, timing and what the chart suggests.
              </p>
              <div className="ac-index-table" data-ac-reveal>
                {astrologyServices.map((service, index) => (
                  <a key={service.id} href={`/astrology#${service.id}`}>
                    <span className="ac-index-no">{String(index + 1).padStart(2, "0")}</span>
                    <span className="ac-index-name">{service.title}</span>
                    <span className="ac-index-leader" aria-hidden="true" />
                    <span className="ac-index-format">{service.format}</span>
                  </a>
                ))}
              </div>
              <p className="ac-collection-note">
                Accurate birth details are required in advance for chart work —{" "}
                <a href="/astrology">details on the Astrology page</a>.
              </p>
              <div className="ac-collection-cta" data-ac-reveal>
                <a className="ac-ink-link" href="/astrology">
                  Explore the four consultations →
                </a>
              </div>
            </div>
          </div>

          {/* Insert — Relationship Blueprint */}
          <figure className="ac-insert" style={{ margin: 0 }} data-ac-reveal>
            <div className="ac-insert-head">
              <span className="ac-caps"><b>Inserted plate</b> — Collection III</span>
              <span className="ac-folio-page">Relationship Blueprint</span>
            </div>
            <blockquote>
              Think of me as a personal trainer for your heart.
            </blockquote>
            <figcaption className="ac-caps">Pooja Khera — on the Blueprint</figcaption>
            <div className="ac-insert-formats">
              {relationshipServices.map((service, index) => (
                <div key={service.id}>
                  <span className="ac-f-no">{["i.", "ii.", "iii."][index]}</span>
                  <h4>{service.title}</h4>
                  <p>{service.purpose}</p>
                  <span className="ac-index-format">{service.format}</span>
                </div>
              ))}
            </div>
            <div className="ac-insert-actions">
              <a className="ac-enquire-btn" href={whatsapp("Relationship Blueprint")} target="_blank" rel="noopener noreferrer">
                Enquire about the Blueprint ↗
              </a>
              <a className="ac-ink-link" href="/relationship-blueprint">
                Read the full plate →
              </a>
            </div>
          </figure>
        </div>
      </section>

      <section className="ac-section" id="principles">
        <div className="ac-container">
          <div className="ac-folio-head" data-ac-reveal>
            <span className="ac-caps"><b>03</b> — How Pooja works</span>
            <span className="ac-rule" />
            <span className="ac-folio-page">p. 03</span>
          </div>
          <div className="ac-process">
            {principles.map((principle) => (
              <div className="ac-process-step" key={principle.title} data-ac-reveal>
                <span className="ac-no">{principle.no}</span>
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ac-section" id="reserved" style={{ paddingTop: 0 }}>
        <div className="ac-container">
          <div className="ac-folio-head" data-ac-reveal>
            <span className="ac-caps"><b>04</b> — Kind words</span>
            <span className="ac-rule" />
            <span className="ac-folio-page">p. 04</span>
          </div>
          <h2 className="ac-h2" data-ac-reveal>
            Held <em>carefully.</em>
          </h2>
          <div className="ac-reserved">
            {["Plate i", "Plate ii", "Plate iii"].map((plate) => (
              <div className="ac-reserved-frame" key={plate} data-ac-reveal>
                <span>Reserved</span>
                <small>{plate} · awaiting permission</small>
              </div>
            ))}
          </div>
          <p className="ac-reserved-note" data-ac-reveal>
            Genuine client feedback will appear here once permissions are in place. Nothing
            is invented for this preview — the frames stay honestly, visibly reserved.
          </p>
        </div>
      </section>

      <section className="ac-section" id="process" style={{ paddingTop: 0 }}>
        <div className="ac-container">
          <div className="ac-folio-head" data-ac-reveal>
            <span className="ac-caps"><b>05</b> — The process</span>
            <span className="ac-rule" />
            <span className="ac-folio-page">p. 05</span>
          </div>
          <div className="ac-process">
            {steps.map((step) => (
              <div className="ac-process-step" key={step.title} data-ac-reveal>
                <span className="ac-no">{step.no}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
          <div className="ac-process-note" data-ac-reveal>
            <span>No payment gateway. No calendar automation. A personal conversation, end to end.</span>
            <a href="/book-a-reading">How booking works →</a>
          </div>
        </div>
      </section>

      <section className="ac-section" id="faqs" style={{ paddingTop: 0 }}>
        <div className="ac-container">
          <div className="ac-folio-head" data-ac-reveal>
            <span className="ac-caps"><b>06</b> — Questions</span>
            <span className="ac-rule" />
            <span className="ac-folio-page">p. 06</span>
          </div>
          <div className="ac-faq-grid">
            <div className="ac-faq-sticky">
              <h2 className="ac-h2" data-ac-reveal>
                You may be <em>wondering.</em>
              </h2>
              <p data-ac-reveal>
                Short answers to what visitors ask most. Anything else — ask Pooja directly
                on WhatsApp.
              </p>
            </div>
            <div data-ac-reveal>
              <ConceptAccordion items={faqs} numbered />
            </div>
          </div>
        </div>
      </section>

      <section className="ac-bookplate-wrap" id="enquire">
        <div className="ac-container">
          <div className="ac-bookplate" data-ac-reveal>
            <EngravedEye className="ac-bookplate-eye" rays={24} />
            <h2>
              Begin the <em>conversation.</em>
            </h2>
            <p>
              Send a WhatsApp enquiry and Pooja will personally help you choose a
              consultation, share fees and availability, and take it from there.
            </p>
            <div className="ac-bookplate-actions">
              <a className="ac-enquire-btn" href={whatsapp()} target="_blank" rel="noopener noreferrer">
                Let&apos;s talk on WhatsApp ↗
              </a>
              <a className="ac-ink-link" href={instagram} target="_blank" rel="noopener noreferrer">
                Enquire on Instagram →
              </a>
            </div>
            <p className="ac-bookplate-note">
              Prefer to browse first?{" "}
              <a href={instagramProfile} target="_blank" rel="noopener noreferrer">
                @zenquestbypooja
              </a>
            </p>
            <span className="ac-bookplate-corner ac-bookplate-corner--tl" aria-hidden="true">ex libris</span>
            <span className="ac-bookplate-corner ac-bookplate-corner--br" aria-hidden="true">ZenQuest · MMXXVI</span>
          </div>
        </div>
      </section>

      <footer className="ac-footer">
        <div className="ac-container">
          <div className="ac-footer-grid">
            <div className="ac-footer-brand">
              <Link href="/" className="ac-brand" aria-label="ZenQuest by Pooja">
                <Image src="/images/zenquest-logo.png" alt="ZenQuestByPooja" width={378} height={285} />
              </Link>
              <p>
                The private practice of Pooja Khera. Tarot, astrology and relationship
                guidance — one conversation at a time.
              </p>
            </div>
            <div className="ac-footer-links">
              <h3>Collections</h3>
              <div>
                <a href="/book-a-reading-with-pooja">Tarot &amp; Astro-Tarot</a>
                <a href="/astrology">Astrology consultations</a>
                <a href="/relationship-blueprint">Relationship Blueprint</a>
              </div>
            </div>
            <div className="ac-footer-links">
              <h3>The practice</h3>
              <div>
                <a href="/about">About Pooja</a>
                <a href="/media">Media</a>
                <a href="/book-a-reading">How booking works</a>
                <a href="/consultation-policies">Consultation policies</a>
              </div>
            </div>
            <div className="ac-footer-links">
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
          <div className="ac-footer-bottom">
            <span>© {new Date().getFullYear()} ZenQuest by Pooja</span>
            <span>Set in Cormorant Garamond &amp; Manrope</span>
            <span>Fees &amp; availability shared privately</span>
          </div>
        </div>
      </footer>

      <ConceptSwitcher current="atelier-ii" tone="light" />
    </div>
  );
}
