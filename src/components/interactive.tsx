"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, Minus, Plus, X } from "lucide-react";
import { faqs, whatsapp } from "@/lib/content";

export function Brand() {
  return (
    <span className="brand">
      <Image
        src="/images/zenquest-logo.png"
        alt="ZenQuestByPooja"
        width={378}
        height={285}
        priority
        className="brand-logo"
      />
    </span>
  );
}
export function Header() {
  const path = usePathname();
  return <HeaderContent key={path} path={path} />;
}
function HeaderContent({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (drop) dropdown.current?.querySelector("button")?.focus();
        else if (open) toggle.current?.focus();
        setOpen(false);
        setDrop(false);
      }
    };
    const outside = (e: PointerEvent) => {
      if (!dropdown.current?.contains(e.target as Node)) setDrop(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open, drop]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" aria-label="ZenQuest by Pooja home">
          <Brand />
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="/" aria-current={path === "/" ? "page" : undefined}>
            Home
          </Link>
          <div
            className="dropdown"
            ref={dropdown}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setDrop(false);
            }}
          >
            <button
              aria-expanded={drop}
              aria-controls="consultation-menu"
              onClick={() => setDrop(!drop)}
            >
              Consultations <ChevronDown size={13} />
            </button>
            {drop && (
              <div
                id="consultation-menu"
                className="dropdown-panel"
                onClick={() => setDrop(false)}
              >
                <Link href="/book-a-reading-with-pooja">
                  Tarot & Astro-Tarot Readings <ArrowUpRight size={16} />
                </Link>
                <Link href="/astrology">
                  Astrology Consultations <ArrowUpRight size={16} />
                </Link>
              </div>
            )}
          </div>
          <Link href="/about">About Pooja</Link>
          <Link href="/relationship-blueprint">Relationship Blueprint</Link>
        </nav>
        <a
          className="button header-book"
          href={whatsapp()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Reading <ArrowUpRight size={15} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className="mobile-menu"
        data-open={open}
        aria-hidden={!open}
        inert={!open}
      >
        <div>
          <MobileNavigation onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </header>
  );
}
export function MobileNavigation({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav
      id="mobile-nav"
      className="mobile-nav"
      aria-label="Mobile navigation"
      onClick={onNavigate}
    >
      <Link href="/">Home</Link>
      <p>Consultations</p>
      <Link href="/book-a-reading-with-pooja">
        Tarot & Astro-Tarot Readings <ArrowUpRight size={18} />
      </Link>
      <Link href="/astrology">
        Astrology Consultations <ArrowUpRight size={18} />
      </Link>
      <Link href="/about">About Pooja</Link>
      <Link href="/relationship-blueprint">Relationship Blueprint</Link>
      <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
        Book a Reading <ArrowUpRight size={18} />
      </a>
    </nav>
  );
}
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className} data-reveal>
      {children}
    </div>
  );
}
export function FAQAccordion() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="section faq-section" id="faqs">
      <div>
        <h2>
          You may be
          <br />
          <em>wondering.</em>
        </h2>
        <p className="muted">A few things to help you feel prepared.</p>
      </div>
      <div className="faq-list">
        {faqs.map(([q, a], i) => (
          <div className="faq-item" key={q}>
            <h3>
              <button
                aria-expanded={active === i}
                aria-controls={`answer-${i}`}
                id={`question-${i}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                {q}
                {active === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
            </h3>
            <div
              className="faq-answer"
              data-open={active === i}
              aria-hidden={active !== i}
              inert={active !== i}
              id={`answer-${i}`}
              role="region"
              aria-labelledby={`question-${i}`}
            >
              <div>
                <p>{a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
