import Link from "next/link";

const refined = [
  {
    slug: "atelier-ii",
    letter: "B·II",
    name: "The Curator",
    line: "Atelier, elevated — framed gallery drama",
    note: "Atelier's editorial DNA, pushed further: double-ruled plates, museum wall labels, engraved eye ornaments, roman ghost numerals, dotted-leader indexes of the real services, reserved-frame testimonials and a bookplate closing panel.",
    swatches: ["#F3EEE4", "#221F23", "#5E2A7B", "#D8D0BE"],
  },
  {
    slug: "atelier-iii",
    letter: "B·III",
    name: "The Folio",
    line: "Atelier, elevated — bleeding editorial spreads",
    note: "The same editorial DNA cut differently: photography bleeds to the viewport edge, text sits in the opposite margin, giant folio numerals anchor each spread, and a single dark closing panel gives the journey its final beat.",
    swatches: ["#F6F1E9", "#211E22", "#6A2E86", "#1E1520"],
  },
];

const concepts = [
  {
    slug: "nocturne",
    letter: "A",
    name: "Nocturne",
    line: "Dark cinematic editorial",
    note: "A plum-black evening world. Duotone photography, oversized serif with italic accents, consultation index rows with cursor-following image reveals. The practice as an evening ritual.",
    swatches: ["#140B1B", "#241030", "#B678D4", "#F2E9DC"],
  },
  {
    slug: "atelier",
    letter: "B",
    name: "Atelier",
    line: "Museum-catalogue paper editorial",
    note: "Warm paper, hairline rules, numbered plates and extreme type contrast. Photography framed like gallery works with captions. The practice as a gallery of one.",
    swatches: ["#F4F0E8", "#232025", "#6A2E86", "#C9BCA6"],
  },
  {
    slug: "bloom",
    letter: "C",
    name: "Bloom",
    line: "Warm gradient collage",
    note: "Atmospheric lilac fields, layered collage with tape and polaroids, a rotating booking badge and tilted cards. The practice as a living, personal garden.",
    swatches: ["#F7EFF0", "#EADCF1", "#7C3AA0", "#2C2130"],
  },
];

export default function DesignConceptsIndex() {
  return (
    <div
      data-concept-shell
      style={
        {
          "--concept-bg": "#221629",
        } as React.CSSProperties
      }
    >
      <main
        style={{
          minHeight: "100svh",
          background: "#221629",
          color: "#F2E9DC",
          fontFamily: "'Cormorant Garamond', serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 1080, margin: "0 auto", width: "100%" }}>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#B678D4",
              margin: "0 0 20px",
            }}
          >
            ZenQuest by Pooja — Homepage concepts
          </p>
          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 96px)",
              lineHeight: 1.02,
              margin: 0,
              fontWeight: 400,
            }}
          >
            Three new directions,
            <br />
            <em style={{ color: "#B678D4" }}>one practice.</em>
          </h1>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 14,
              lineHeight: 1.8,
              color: "#A793B0",
              maxWidth: 560,
              margin: "28px 0 48px",
            }}
          >
            Each concept is a complete homepage preview with its own art direction,
            typography, composition and motion. The existing site is untouched.
          </p>

          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#B678D4",
              margin: "0 0 20px",
            }}
          >
            Refined Atelier variations — for selection
          </p>
          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              marginBottom: 56,
            }}
          >
            {refined.map((concept) => (
              <Link
                key={concept.slug}
                href={`/design-concepts/${concept.slug}`}
                style={{
                  display: "block",
                  border: "1px solid rgba(182,120,212,0.55)",
                  borderRadius: 18,
                  padding: "30px 28px",
                  background: "rgba(128,63,157,0.14)",
                  color: "inherit",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.24em",
                      color: "#B678D4",
                    }}
                  >
                    CONCEPT {concept.letter}
                  </span>
                  <span style={{ display: "flex", gap: 6 }}>
                    {concept.swatches.map((swatch) => (
                      <span
                        key={swatch}
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: swatch,
                          display: "inline-block",
                          border: "1px solid rgba(242,233,220,0.2)",
                        }}
                      />
                    ))}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "clamp(30px, 3vw, 40px)",
                    lineHeight: 1.1,
                    display: "block",
                  }}
                >
                  {concept.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    color: "#B678D4",
                    display: "block",
                    marginTop: 6,
                  }}
                >
                  {concept.line}
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "#A793B0",
                    display: "block",
                    marginTop: 14,
                  }}
                >
                  {concept.note}
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    display: "inline-block",
                    marginTop: 22,
                    borderBottom: "1px solid #B678D4",
                    paddingBottom: 3,
                  }}
                >
                  Open preview →
                </span>
              </Link>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 11,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#A793B0",
              margin: "0 0 20px",
            }}
          >
            First-round directions — reference
          </p>
          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {concepts.map((concept) => (
              <Link
                key={concept.slug}
                href={`/design-concepts/${concept.slug}`}
                style={{
                  display: "block",
                  border: "1px solid rgba(242,233,220,0.16)",
                  borderRadius: 18,
                  padding: "30px 28px",
                  background: "rgba(242,233,220,0.03)",
                  color: "inherit",
                  transition: "border-color 0.2s ease, background 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: 11,
                      letterSpacing: "0.24em",
                      color: "#B678D4",
                    }}
                  >
                    CONCEPT {concept.letter}
                  </span>
                  <span style={{ display: "flex", gap: 6 }}>
                    {concept.swatches.map((swatch) => (
                      <span
                        key={swatch}
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: swatch,
                          display: "inline-block",
                          border: "1px solid rgba(242,233,220,0.2)",
                        }}
                      />
                    ))}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "clamp(30px, 3vw, 40px)",
                    lineHeight: 1.1,
                    display: "block",
                  }}
                >
                  {concept.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.06em",
                    color: "#B678D4",
                    display: "block",
                    marginTop: 6,
                  }}
                >
                  {concept.line}
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 13,
                    lineHeight: 1.7,
                    color: "#A793B0",
                    display: "block",
                    marginTop: 14,
                  }}
                >
                  {concept.note}
                </span>
                <span
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    display: "inline-block",
                    marginTop: 22,
                    borderBottom: "1px solid #B678D4",
                    paddingBottom: 3,
                  }}
                >
                  Open preview →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
