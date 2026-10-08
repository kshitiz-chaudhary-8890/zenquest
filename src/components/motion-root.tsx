"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/** Progressive enhancement: all server-rendered content is visible without GSAP. */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLElement>(null);
  const path = usePathname();

  // Opt-in read-only probe for lifecycle tests; absent from normal builds.
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MOTION_DIAGNOSTICS !== "true") return;
    const inspect = () =>
      window.dispatchEvent(
        new CustomEvent("zenquest:motion-state", {
          detail: {
            count: ScrollTrigger.getAll().length,
            stale: ScrollTrigger.getAll().filter(
              (trigger) => !trigger.trigger?.isConnected,
            ).length,
          },
        }),
      );
    window.addEventListener("zenquest:inspect-motion", inspect);
    return () => window.removeEventListener("zenquest:inspect-motion", inspect);
  }, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(
        {
          desktop: "(min-width: 761px)",
          mobile: "(max-width: 760px)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (context.conditions?.reduced || !scope.current) return;
          const distance = context.conditions?.mobile ? 6 : 12;
          const hero = scope.current.querySelector(".hero");
          if (hero) {
            const timeline = gsap.timeline({
              defaults: {
                duration: 0.48,
                ease: "power2.out",
                clearProps: "transform,opacity",
              },
            });
            timeline.fromTo(
              hero.querySelectorAll(
                ".hero-copy h1, .hero-description, .hero-actions",
              ),
              { y: distance, opacity: 0.72 },
              { y: 0, opacity: 1, stagger: 0.06 },
              0,
            );
            timeline.fromTo(
              hero.querySelector(".hero-visual"),
              { y: distance, opacity: 0.8 },
              { y: 0, opacity: 1, duration: 0.6 },
              0.04,
            );
          }
          scope.current
            .querySelectorAll<HTMLElement>("[data-reveal]")
            .forEach((element) => {
              // Each section is one unit. Mobile uses a shorter, smaller movement.
              gsap.fromTo(
                element,
                { y: distance, opacity: 0.8 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.45,
                  ease: "power2.out",
                  clearProps: "transform,opacity",
                  immediateRender: false,
                  scrollTrigger: {
                    trigger: element,
                    start: "top 92%",
                    once: true,
                  },
                },
              );
            });
        },
      );
      return () => media.revert();
    },
    { scope, dependencies: [path], revertOnUpdate: true },
  );

  return (
    <main id="main" ref={scope}>
      {children}
    </main>
  );
}
