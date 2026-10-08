import { whatsapp } from "@/lib/content";

/** Fine-line engraved eye with radiating rays, derived from the ZenQuest mark. */
export function EngravedEye({
  className,
  rays = 28,
}: {
  className?: string;
  rays?: number;
}) {
  const rayLines = Array.from({ length: rays }).map((_, index) => {
    const angle = (index / rays) * Math.PI * 2;
    const spread = Math.cos(angle) >= 0 ? 1 : 0.62;
    const x1 = 200 + Math.cos(angle) * 128 * spread;
    const y1 = 200 + Math.sin(angle) * 92 * spread;
    const x2 = 200 + Math.cos(angle) * 178 * spread;
    const y2 = 200 + Math.sin(angle) * 138 * spread;
    return { x1, y1, x2, y2, key: index };
  });
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <path d="M 60 200 C 110 130, 290 130, 340 200 C 290 270, 110 270, 60 200 Z" />
      <circle cx="200" cy="200" r="46" />
      <circle cx="200" cy="200" r="18" />
      {rayLines.map((ray) => (
        <line key={ray.key} x1={ray.x1} y1={ray.y1} x2={ray.x2} y2={ray.y2} strokeWidth="0.7" />
      ))}
    </svg>
  );
}

export { whatsapp };
