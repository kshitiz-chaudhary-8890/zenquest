import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Instagram,
  MessageCircle,
  Sparkle,
} from "lucide-react";
import { Brand, Reveal } from "./interactive";
import { BrandMotif } from "./brand-motif";
import { instagram, instagramProfile, Service, whatsapp } from "@/lib/content";

export function BookButton({
  service,
  label = "Book a Reading",
  light = false,
}: {
  service?: string;
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-light" : ""}`}
      href={whatsapp(service)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <ArrowUpRight size={17} />
    </a>
  );
}
export function Zodiac({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`zodiac ${className}`}
      viewBox="0 0 500 500"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="250" cy="250" r="230" />
      <circle cx="250" cy="250" r="213" />
      <circle cx="250" cy="250" r="166" />
      <circle cx="250" cy="250" r="155" />
      {Array.from({ length: 60 }, (_, i) => (
        <path
          key={i}
          d={`M250 20v${i % 5 === 0 ? 18 : 6}`}
          transform={`rotate(${i * 6} 250 250)`}
        />
      ))}
      {Array.from({ length: 12 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 30} 250 250)`}>
          <path d="M250 37v47" />
          <circle cx="294" cy="66" r="3" fill="currentColor" stroke="none" />
        </g>
      ))}
      <path d="M250 94 385 328H115L250 94ZM250 406 115 172h270L250 406Z" />
      <circle cx="250" cy="250" r="65" />
      <path d="M250 207v86M207 250h86M220 220l60 60M220 280l60-60" />
      <circle cx="250" cy="250" r="18" />
    </svg>
  );
}
export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <h1>
          A little clarity. <br />A deeper <br />
          <em>connection.</em>
        </h1>
        <p className="hero-description">
          When life brings questions, make space for perspective.
          <br className="desktop-break" /> Thoughtful astrology and tarot
          guidance with Pooja Khera.
        </p>
        <div className="hero-actions">
          <BookButton />
          <Link className="text-link" href="#consultations">
            Explore Consultations <ArrowDown size={16} />
          </Link>
        </div>
        <p className="draft-credential">
          18+ years of experience · Draft figure, awaiting confirmation
        </p>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <Image
            src="/images/pooja.jpg"
            alt="Pooja Khera seated by a window"
            fill
            priority
            sizes="(max-width: 760px) 90vw, 43vw"
          />
        </div>
        <div className="portrait-caption">
          <span>Pooja Khera</span>
          <small>Astrology, Tarot & personal guidance</small>
        </div>
      </div>
    </section>
  );
}
export function Introduction() {
  return (
    <section id="introduction" className="introduction">
      <Reveal className="section intro-inner">
        <figure className="intro-portrait">
          <div className="intro-photo"><Image src="/images/relationship.jpg" alt="Pooja Khera smiling in a garden" fill sizes="(max-width: 760px) 80vw, 30vw" /></div>
          <figcaption><span>Pooja Khera</span><span>Founder, ZenQuest</span></figcaption>
        </figure>
        <div className="intro-heading">
          <h2>A little more harmony.<br /><em>A deeper connection.</em></h2>
        </div>
        <div className="intro-note">
          <p className="intro-lead">“I believe in bringing more joy, peace, harmony and balance to life.”</p>
          <p className="intro-body">I’m Pooja. Through a blend of spiritual and practical perspectives, I help you explore your unique situation and the pathways to personal growth.</p>
          <Link href="/about" className="button intro-button">A little more about me <ArrowUpRight size={17} /></Link>
        </div>
        <div className="intro-experience" aria-label="Experience figures awaiting confirmation">
          <div className="intro-figures">
            <p><strong>18+</strong><span>Years of<br /> experience*</span></p>
            <p><strong>1,000+</strong><span>Personal<br /> readings*</span></p>
          </div>
          <small>*Draft figures · Awaiting Pooja’s confirmation</small>
        </div>
      </Reveal>
    </section>
  );
}
export function ConsultationCategory() {
  return (
    <section className="section consultations" id="consultations">
      <div className="section-heading">
        <div>
          <h2>
            Meet yourself <br />
            <em>with a little guidance.</em>
          </h2>
        </div>
        <p>
          Start with what’s on your mind. <br />
          We’ll find the right space to explore it.
        </p>
      </div>
      <div className="category-layout">
        <Reveal className="tarot-category">
          <Link href="/book-a-reading-with-pooja" className="category-image">
            <Image
              src="/images/tarot.jpg"
              alt="An original ZenQuest tarot card arrangement"
              fill
              sizes="(max-width: 760px) 90vw, 52vw"
            />
            <span className="image-tag">INTUITION & PERSPECTIVE</span>
            <span className="image-arrow">
              <ArrowUpRight />
            </span>
          </Link>
          <div className="category-copy">
            <h3>Tarot & Astro-Tarot</h3>
            <p>
              Explore the questions closest to your heart. From a focused voice
              reading to a deeper live conversation.
            </p>
            <Link className="text-link" href="/book-a-reading-with-pooja">
              Explore Tarot Readings <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
        <Reveal className="astrology-category">
          <Link href="/astrology" className="category-image astrology-art">
            <Zodiac />
            <span className="image-tag">PATTERNS & POSSIBILITIES</span>
            <span className="image-arrow">
              <ArrowUpRight />
            </span>
          </Link>
          <div className="category-copy">
            <h3>Astrology Consultations</h3>
            <p>
              Bring your birth chart into the conversation. Understand personal
              themes, current timing, and the year ahead.
            </p>
            <Link className="text-link" href="/astrology">
              Explore Astrology <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function WhyPooja() {
  return (
    <section className="why-section">
      <div className="section why-inner">
        <div>
          <h2>
            Space to be heard. <br />
            <em>Perspective to take with you.</em>
          </h2>
        </div>
        <div className="principles">
          {[
            [
              "Personal, from the beginning",
              "A one-to-one consultation shaped around your questions and the service you choose.",
            ],
            [
              "Clear about what’s included",
              "Thoughtfully defined formats, time and scope, so you know what to expect.",
            ],
            [
              "A private conversation",
              "Enquiries, fees and booking details are shared directly with Pooja.",
            ],
          ].map(([title, body]) => (
            <div key={title}>
              <Sparkle size={21} />
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function TestimonialSection() {
  return (
    <section className="section testimonials">
      <h2>
        Every story is <em>personal.</em>
      </h2>
      <p className="muted">
        A space reserved for client voices, shared with permission.
      </p>
      <div className="testimonial-slots">
        {[1, 2, 3].map((n) => (
          <div key={n}>
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <p>
              Approved anonymous <br />
              testimonial to come.
            </p>
            <span className="placeholder-label">
              CLIENT FEEDBACK · PLACEHOLDER {n}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
export function BookingSteps() {
  return (
    <section className="section booking-steps" id="how-to-book">
      <div className="section-heading">
        <div>
          <h2>
            Your next step, <br />
            <em>made personal.</em>
          </h2>
        </div>
        <p>
          Bookings are handled directly with Pooja. <br />
          Start with a conversation.
        </p>
      </div>
      <div className="steps">
        {[
          [
            "01",
            "Choose your consultation",
            "Explore the readings and send an enquiry on WhatsApp or Instagram.",
          ],
          [
            "02",
            "Find a time that works",
            "Receive fees and availability privately, with room to ask your questions.",
          ],
          [
            "03",
            "Make it yours",
            "Confirm your booking with payment and the details required for your reading.",
          ],
        ].map(([num, title, text]) => (
          <div key={num}>
            <span className="step-number">{num}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function InstagramEnquiry() {
  return (
    <div className="instagram-enquiry">
      <a
        className="text-link"
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={16} /> Enquire on Instagram <ArrowUpRight size={15} />
      </a>
      <small>
        DM won’t open?{" "}
        <a href={instagramProfile} target="_blank" rel="noopener noreferrer">
          Visit the profile and tap Message.
        </a>
      </small>
    </div>
  );
}
export function BookingCTA({ help = false }: { help?: boolean }) {
  return (
    <section className={`booking-cta ${help ? "help-cta" : ""}`}>
      <BrandMotif />
      <div>
        <h2>
          {help ? (
            <>
              Not sure which <br />
              <em>reading to book?</em>
            </>
          ) : (
            <>
              Find the guidance <br />
              <em>you’re looking for.</em>
            </>
          )}
        </h2>
        <p>
          {help
            ? "Tell Pooja what you would like to explore. She can help you choose."
            : "You don’t need to have it all figured out to take the first step."}
        </p>
        <BookButton
          label={help ? "Ask Pooja on WhatsApp" : "Let’s talk on WhatsApp"}
          light
        />
        <InstagramEnquiry />
      </div>
    </section>
  );
}
export function ServiceDetail({ service }: { service: Service }) {
  return (
    <article className="service-detail" id={service.id}>
      <div className="service-summary">
        <p className="service-format">{service.format}</p>
        <h3>{service.title}</h3>
        <p>{service.purpose}</p>
        <BookButton
          service={service.bookingName ?? service.title}
          label={service.bookingLabel ?? "Book This Reading"}
        />
      </div>
      <div className="service-inclusions">
        <h4>Your consultation</h4>
        <ul>
          {service.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="conditions">
          <span>Please note</span>
          <p>{service.conditions}</p>
        </div>
      </div>
    </article>
  );
}
export function ConsultationPage({
  kind,
  services,
}: {
  kind: "tarot" | "astrology";
  services: Service[];
}) {
  const tarot = kind === "tarot";
  return (
    <>
      <section className={`consultation-hero ${tarot ? "" : "astro-hero"}`}>
        <div className="section">
          <p className="breadcrumb">
            Consultations / {tarot ? "Tarot & Astro-Tarot" : "Astrology"}
          </p>
          <h1>
            {tarot ? (
              <>
                Your questions. <br />
                <em>A fresh perspective.</em>
              </>
            ) : (
              <>
                Your chart. <br />
                <em>Your own unfolding.</em>
              </>
            )}
          </h1>
          <p>
            {tarot
              ? "Intuitive Tarot readings and thoughtful Astro-Tarot guidance, with space for what matters to you."
              : "Explore the patterns and timing in your birth chart through a personal conversation or a considered written forecast."}
          </p>
          <a href="#readings" className="text-link">
            Find your reading <ArrowDown size={16} />
          </a>
        </div>
        {tarot ? (
          <div className="consultation-hero-image">
            <Image
              src="/images/tarot.jpg"
              alt="Tarot cards from the ZenQuest collection"
              fill
              priority
              sizes="40vw"
            />
          </div>
        ) : (
          <Zodiac />
        )}
      </section>
      <section className="section service-list" id="readings">
        <div className="service-list-heading">
          <h2 className="service-list-title">
            {tarot ? "Tarot & Astro-Tarot Readings" : "Astrology Consultations"}
          </h2>
          <span>Fees & availability shared privately</span>
        </div>
        {services
          .filter((s) => !s.returning)
          .map((s) => (
            <ServiceDetail key={s.id} service={s} />
          ))}
        <div className="returning">
          <h2>For Returning Clients</h2>
          {services
            .filter((s) => s.returning)
            .map((s) => (
              <ServiceDetail key={s.id} service={s} />
            ))}
        </div>
      </section>
      <BookingCTA help />
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <Link href="/" aria-label="ZenQuest by Pooja home">
            <Brand />
          </Link>
          <p>
            Thoughtful guidance. <br />A more personal perspective.
          </p>
          <a
            href={instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            <Instagram size={17} />
            @zenquestbypooja
          </a>
        </div>
        <div>
          <h2 className="footer-heading">Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About Pooja</Link>
          <Link href="/relationship-blueprint">Relationship Blueprint</Link>
          <Link href="/media">In the Media</Link>
        </div>
        <div>
          <h2 className="footer-heading">Consultations</h2>
          <Link href="/book-a-reading-with-pooja">
            Tarot & Astro-Tarot Readings
          </Link>
          <Link href="/astrology">Astrology Consultations</Link>
          <Link href="/book-a-reading">Book a Reading</Link>
          <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
            WhatsApp <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ZenQuest by Pooja</span>
        <span>Client design preview · Content subject to approval</span>
        <Link href="/consultation-policies">Consultation policies</Link>
      </div>
    </footer>
  );
}
export function WhatsAppFloatingButton() {
  return (
    <div className="booking-dock">
      <a
        className="floating-whatsapp"
        href={whatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire with Pooja on WhatsApp"
      >
        <MessageCircle size={23} />
        <span>Enquire on WhatsApp</span>
      </a>
    </div>
  );
}
