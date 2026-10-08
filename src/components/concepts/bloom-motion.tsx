"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whatsapp as whatsappHref } from "@/lib/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function BloomMotion() {
  useGSAP(() => {
    if (!document.querySelector(".bl-hero")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "back.out(1.4)" } });
    tl.fromTo(
      ".bl-hero-copy .bl-label",
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55 },
      0.05,
    )
      .fromTo(
        ".bl-hero-copy h1",
        { y: 34, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.12,
      )
      .fromTo(
        ".bl-hero-sub, .bl-hero-actions, .bl-hero-note",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out" },
        0.34,
      )
      .fromTo(
        ".bl-portrait",
        { y: 60, opacity: 0, rotate: 3 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.9 },
        0.3,
      )
      .fromTo(
        ".bl-polaroid",
        { y: 50, opacity: 0, rotate: -10 },
        { y: 0, opacity: 1, rotate: -5, duration: 0.8 },
        0.5,
      )
      .fromTo(
        ".bl-badge",
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.7 },
        0.62,
      )
      .fromTo(".bl-blob", { opacity: 0 }, { opacity: 0.55, duration: 1.2 }, 0.4);

    // Gentle perpetual drift on collage layers (skipped for reduced motion).
    gsap.to(".bl-polaroid", {
      y: -10,
      rotate: -3.4,
      duration: 3.4,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.4,
    });
    gsap.to(".bl-badge", {
      y: -8,
      duration: 2.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.6,
    });

    document.querySelectorAll<HTMLElement>("[data-bl-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });
  });

  return null;
}

export function BloomMobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <button
        className="bl-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>
      <nav className="bl-mobile-nav" data-open={open} aria-hidden={!open} inert={!open}>
        <a href="#practice" onClick={() => setOpen(false)}>
          The practice <span aria-hidden="true">→</span>
        </a>
        <a href="#consultations" onClick={() => setOpen(false)}>
          Consultations <span aria-hidden="true">→</span>
        </a>
        <a href="#steps" onClick={() => setOpen(false)}>
          Booking <span aria-hidden="true">→</span>
        </a>
        <a href="#faqs" onClick={() => setOpen(false)}>
          FAQs <span aria-hidden="true">→</span>
        </a>
        <a href="/about">About Pooja</a>
      </nav>
    </>
  );
}

export function BloomBadge() {
  return (
    <a
      className="bl-badge bl-float"
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a reading on WhatsApp"
    >
      <svg className="bl-badge-ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id="bl-ring" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text style={{ fontSize: 10.2, letterSpacing: 2.6, fill: "currentColor", fontFamily: "Manrope, sans-serif", fontWeight: 700 }}>
          <textPath href="#bl-ring">BOOK A READING ✶ BOOK A READING ✶</textPath>
        </text>
      </svg>
      <span className="bl-badge-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  );
}
