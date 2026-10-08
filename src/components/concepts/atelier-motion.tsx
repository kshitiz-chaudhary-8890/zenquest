"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function AtelierMotion() {
  useGSAP(() => {
    if (!document.querySelector(".at-hero")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.fromTo(
      ".at-hero-copy h1 .at-line > span",
      { yPercent: 114 },
      { yPercent: 0, duration: 1.1, stagger: 0.1 },
      0.05,
    )
      .fromTo(
        ".at-hero .at-plate-media",
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.1 },
        0.35,
      )
      .fromTo(
        ".at-hero-vert, .at-hero-sub, .at-hero-actions, .at-hero-index, .at-hero-draft",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.07 },
        0.5,
      );

    document.querySelectorAll<HTMLElement>("[data-at-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 26, opacity: 0 },
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

    document.querySelectorAll<HTMLElement>("[data-at-clip]").forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1,
          ease: "power3.inOut",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        },
      );
    });
  });

  return null;
}

export function AtelierMobileMenu() {
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
        className="at-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>
      <nav className="at-mobile-nav" data-open={open} aria-hidden={!open} inert={!open}>
        <a href="#practice" onClick={() => setOpen(false)}>
          01 — The practice
        </a>
        <a href="#consultations" onClick={() => setOpen(false)}>
          02 — Consultations
        </a>
        <a href="#steps" onClick={() => setOpen(false)}>
          03 — Booking
        </a>
        <a href="#faqs" onClick={() => setOpen(false)}>
          04 — FAQs
        </a>
        <a href="/about">About Pooja</a>
      </nav>
    </>
  );
}
