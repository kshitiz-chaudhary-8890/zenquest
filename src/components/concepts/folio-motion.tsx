"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function FolioMotion() {
  useGSAP(() => {
    if (!document.querySelector(".af-hero")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.fromTo(
      ".af-masthead",
      { y: -14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      0,
    )
      .fromTo(
        ".af-hero h1 .af-line > span",
        { yPercent: 114 },
        { yPercent: 0, duration: 1.15, stagger: 0.1 },
        0.15,
      )
      .fromTo(
        ".af-hero-media",
        { clipPath: "inset(0 0 0 100%)" },
        { clipPath: "inset(0 0 0 0%)", duration: 1.25 },
        0.35,
      )
      .fromTo(
        ".af-hero-media img",
        { scale: 1.1 },
        { scale: 1, duration: 1.6 },
        0.35,
      )
      .fromTo(
        ".af-hero-kicker, .af-hero-sub, .af-hero-actions, .af-hero-vert, .af-hero-foot",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
        0.65,
      )
      .fromTo(".af-hero-mount", { opacity: 0 }, { opacity: 1, duration: 1 }, 0.9);

    document.querySelectorAll<HTMLElement>("[data-af-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });

    document.querySelectorAll<HTMLElement>("[data-af-clip]").forEach((el) => {
      gsap.fromTo(
        el,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.05,
          ease: "power3.inOut",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        },
      );
    });

    document.querySelectorAll<HTMLElement>("[data-af-ghost]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
    });
  });

  return null;
}

export function FolioMobileMenu() {
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
        className="af-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>
      <nav className="af-mobile-nav" data-open={open} aria-hidden={!open} inert={!open}>
        <a href="#practice" onClick={() => setOpen(false)}>
          01 — The practice
        </a>
        <a href="#consultations" onClick={() => setOpen(false)}>
          02 — Consultations
        </a>
        <a href="#process" onClick={() => setOpen(false)}>
          03 — The process
        </a>
        <a href="#faqs" onClick={() => setOpen(false)}>
          04 — Questions
        </a>
        <a href="/about">About Pooja</a>
      </nav>
    </>
  );
}
