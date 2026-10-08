"use client";

import { useState } from "react";

export type ConceptFaqItem = readonly string[];

export function ConceptAccordion({
  items,
  className = "",
  numbered = false,
}: {
  items: ConceptFaqItem[];
  className?: string;
  numbered?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className={className}>
      {items.map((item, index) => {
        const [question, answer] = item;
        return (
          <div className="concept-faq-item" key={question}>
            <h3>
              <button
                aria-expanded={active === index}
                aria-controls={`concept-answer-${index}`}
                id={`concept-question-${index}`}
                onClick={() => setActive(active === index ? null : index)}
              >
                {numbered && (
                  <span className="concept-faq-no" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="concept-faq-question">{question}</span>
                <span className="concept-faq-mark" aria-hidden="true">
                  {active === index ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div
              className="concept-faq-answer"
              data-open={active === index}
              aria-hidden={active !== index}
              inert={active !== index}
              id={`concept-answer-${index}`}
              role="region"
              aria-labelledby={`concept-question-${index}`}
            >
              <div>
                <p>{answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
