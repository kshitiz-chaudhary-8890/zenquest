"use client";

import Link from "next/link";

const concepts = [
  { slug: "atelier-ii", label: "Atelier II · Curator" },
  { slug: "atelier-iii", label: "Atelier III · Folio" },
  { slug: "atelier", label: "Atelier I" },
  { slug: "nocturne", label: "Nocturne" },
  { slug: "bloom", label: "Bloom" },
];

export function ConceptSwitcher({
  current,
  tone = "dark",
}: {
  current: string;
  tone?: "dark" | "light";
}) {
  return (
    <nav
      aria-label="Design concept switcher"
      className={`concept-switcher is-${tone}`}
    >
      <Link href="/design-concepts" className="concept-switcher-index">
        Overview
      </Link>
      {concepts.map((concept) =>
        concept.slug === current ? (
          <span
            key={concept.slug}
            aria-current="true"
            className="concept-switcher-current"
          >
            {concept.label}
          </span>
        ) : (
          <Link key={concept.slug} href={`/design-concepts/${concept.slug}`}>
            {concept.label}
          </Link>
        ),
      )}
    </nav>
  );
}
