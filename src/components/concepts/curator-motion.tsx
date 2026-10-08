"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CuratorMotion() {
  useGSAP(() => {
    if (!document.querySelector(".ac-hero")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.fromTo(
      ".ac-masthead",
      { y: -14, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      0,
    )
      .fromTo(
        ".ac-hero h1 .ac-line > span",
        { yPercent: 114 },
        { yPercent: 0, duration: 1.15, stagger: 0.1 },
        0.15,
      )
      .fromTo(
        ".ac-hero-plate",
        { clipPath: "inset(0 0 100% 0)" },
        { clipPath: "inset(0 0 0% 0)", duration: 1.15 },
        0.4,
      )
      .fromTo(
        ".ac-wall-label",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.9,
      )
      .fromTo(
        ".ac-hero-kicker, .ac-hero-sub, .ac-hero-actions, .ac-hero-colophon",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
        0.6,
      )
      .fromTo(".ac-hero-eye", { opacity: 0 }, { opacity: 0.07, duration: 1.4 }, 0.9);

    // The engraved eye breathes very slowly.
    gsap.to(".ac-hero-eye", {
      rotate: 4,
      scale: 1.03,
      duration: 9,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    document.querySelectorAll<HTMLElement>("[data-ac-reveal]").forEach((el) => {
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

    document.querySelectorAll<HTMLElement>("[data-ac-clip]").forEach((el) => {
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

export function CuratorMobileMenu() {
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
        className="ac-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>
      <nav className="ac-mobile-nav" data-open={open} aria-hidden={!open} inert={!open}>
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
