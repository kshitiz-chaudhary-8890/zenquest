export function BrandMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`brand-motif ${className}`}
      viewBox="0 0 600 440"
      fill="none"
      aria-hidden="true"
    >
      <path d="M45 220Q300 18 555 220Q300 422 45 220Z" />
      <path d="M45 220Q300 72 555 220M45 220Q300 368 555 220" />
      <circle cx="300" cy="220" r="66" />
      <circle cx="300" cy="220" r="23" />
      {Array.from({ length: 11 }, (_, i) => {
        const x = 85 + i * 43;
        return (
          <g key={i}>
            <path
              d={`M${x} ${220 - Math.sin(((i + 1) * Math.PI) / 12) * 105} Q${300 + (x - 300) * 0.82} 45 ${300 + (x - 300) * 1.07} ${20 + Math.abs(i - 5) * 13}`}
            />
            <path
              d={`M${x} ${220 + Math.sin(((i + 1) * Math.PI) / 12) * 105} Q${300 + (x - 300) * 0.82} 395 ${300 + (x - 300) * 1.07} ${420 - Math.abs(i - 5) * 13}`}
            />
          </g>
        );
      })}
    </svg>
  );
}
