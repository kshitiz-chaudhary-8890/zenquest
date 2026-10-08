"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const cursorImages = [
  { src: "/images/tarot.jpg", alt: "" },
  { src: "/images/pooja.jpg", alt: "" },
  { src: "/images/relationship.jpg", alt: "" },
];

export function NocturneMotion() {
  const floatRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!document.querySelector(".nc-hero")) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.fromTo(
      ".nc-hero h1 .nc-line > span",
      { yPercent: 112 },
      { yPercent: 0, duration: 1.15, stagger: 0.11 },
      0.1,
    )
      .fromTo(
        ".nc-hero-portrait",
        { clipPath: "inset(0 0 0 100%)" },
        { clipPath: "inset(0 0 0 0%)", duration: 1.3 },
        0,
      )
      .fromTo(".nc-hero-portrait img", { scale: 1.12 }, { scale: 1, duration: 1.6 }, 0)
      .fromTo(
        ".nc-hero .nc-label, .nc-hero-sub, .nc-hero-actions, .nc-hero-meta",
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
        0.55,
      )
      .fromTo(".nc-watermark", { opacity: 0 }, { opacity: 1, duration: 1.4 }, 0.7);

    document.querySelectorAll<HTMLElement>("[data-nc-reveal]").forEach((el) => {
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
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

    // Cursor-following preview image on consultation rows (fine pointers only).
    const media = gsap.matchMedia();
    media.add("(min-width: 981px) and (pointer: fine)", () => {
      const float = floatRef.current;
      if (!float) return;
      const xTo = gsap.quickTo(float, "left", { duration: 0.45, ease: "power3" });
      const yTo = gsap.quickTo(float, "top", { duration: 0.45, ease: "power3" });
      const move = (event: PointerEvent) => {
        xTo(event.clientX);
        yTo(event.clientY);
      };
      const rows = Array.from(document.querySelectorAll<HTMLElement>(".nc-index-row"));
      const images = Array.from(float.querySelectorAll("img"));
      const enter = (row: HTMLElement) => {
        const index = Number(row.dataset.imgIndex ?? 0);
        images.forEach((img, i) => {
          img.style.opacity = i === index ? "1" : "0";
        });
        gsap.to(float, { opacity: 1, scale: 1, duration: 0.35, overwrite: "auto" });
      };
      const leave = () => {
        gsap.to(float, { opacity: 0, scale: 0.9, duration: 0.3, overwrite: "auto" });
      };
      rows.forEach((row) => {
        row.addEventListener("pointerenter", () => enter(row));
        row.addEventListener("pointerleave", leave);
      });
      window.addEventListener("pointermove", move);
      return () => {
        rows.forEach((row) => {
          row.removeEventListener("pointerenter", () => enter(row));
          row.removeEventListener("pointerleave", leave);
        });
        window.removeEventListener("pointermove", move);
        gsap.set(float, { clearProps: "all" });
      };
    });
    return () => media.revert();
  });

  return (
    <div className="nc-cursor-img" ref={floatRef} aria-hidden="true">
      {cursorImages.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={image.src} src={image.src} alt="" style={{ opacity: index === 0 ? 1 : 0 }} />
      ))}
    </div>
  );
}

export function NocturneMobileMenu() {
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
        className="nc-menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>
      <nav className="nc-mobile-nav" data-open={open} aria-hidden={!open} inert={!open}>
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
        <a href="/relationship-blueprint">Relationship Blueprint</a>
      </nav>
    </>
  );
}
