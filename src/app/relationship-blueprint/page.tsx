import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BrandMotif } from "@/components/brand-motif";
import { BookButton, InstagramEnquiry, ServiceDetail } from "@/components/site";
import { Reveal } from "@/components/interactive";
import { relationshipServices } from "@/lib/content";

export const metadata = {
  title: "The Relationship Blueprint",
  description:
    "Personal relationship guidance with Pooja Khera. Explore patterns, understand your needs and work towards more fulfilling connections.",
};

export default function Blueprint() {
  return (
    <>
      <section className="relationship-hero">
        <div className="relationship-title">
          <h1>
            The Relationship <br />
            <em>Blueprint.</em>
          </h1>
          <p className="relationship-lede">
            Relationships aren’t one-size-fits-all. <br />
            Your guidance shouldn’t be either.
          </p>
          <p className="relationship-subtitle">
            A personal space to understand your patterns, reconnect with
            yourself, and explore what a fulfilling relationship means to you.
          </p>
          <div className="hero-actions">
            <BookButton
              service="Relationship Blueprint"
              label="Explore this with Pooja"
            />
            <a href="#understanding" className="text-link">
              Discover the approach <ArrowDown size={15} />
            </a>
          </div>
        </div>
        <div className="relationship-portrait">
          <div className="relationship-photo">
            <Image
              src="/images/relationship.jpg"
              alt="Pooja Khera outdoors, smiling"
              fill
              priority
              sizes="(max-width:760px) 90vw, 40vw"
            />
          </div>
          <p>
            Personal guidance. <br />
            <em>Human connection.</em>
          </p>
        </div>
      </section>
      <section
        className="section relationship-understanding"
        id="understanding"
      >
        <Reveal>
          <h2>
            Before changing a pattern, <br />
            <em>make space to understand it.</em>
          </h2>
        </Reveal>
        <div className="relationship-explanation">
          <div>
            <p>
              Every relationship can become difficult to navigate sometimes. The
              Relationship Blueprint is Pooja’s personal relationship guidance
              offering: a space to look at recurring patterns, understand where
              growth is needed, and develop practical ways forward.
            </p>
            <p>
              Through conversation, strategy and exercises within your chosen
              format, the focus is on reconnecting with yourself and working
              towards healthier, more fulfilling relationships.
            </p>
          </div>
        </div>
      </section>
      <section className="relationship-for">
        <div className="section relationship-for-inner">
          <div>
            <h2>
              For the moments <br />
              you want to <br />
              <em>understand more.</em>
            </h2>
            <p>
              This offering is for women navigating relationship patterns,
              heartbreak and changes in their lives. You don’t need to have all
              the answers before beginning.
            </p>
          </div>
          <div className="relationship-prompts">
            {[
              [
                "The patterns that repeat",
                "You find yourself in relationships that seem to end in familiar ways, and want to understand why.",
              ],
              [
                "The connection you want",
                "You long for a healthy partnership and want to explore your confidence, self-worth and needs.",
              ],
              [
                "The changes you are navigating",
                "Stress, heartbreak or a changing work–life balance have made you pause and reconsider what matters.",
              ],
              [
                "The work of growing together",
                "You want to understand how to move through challenges and put more intention into your relationships.",
              ],
            ].map(([title, copy]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section relationship-perspective">
        <blockquote>
          “Think of me as your personal trainer
          <br className="desktop-break" /> but <em>for your heart.</em>”
        </blockquote>
        <div className="perspective-caption">
          <span className="signature">Pooja</span>
          <p>
            From Pooja’s original Relationship Blueprint introduction. Her own
            experience of relationship challenges and work with a coach inform
            the personal perspective she brings to this offering.
          </p>
        </div>
      </section>
      <section className="section relationship-formats" id="ways-to-work">
        <div className="section-heading">
          <div>
            <h2>
              The right space <br />
              <em>for your conversation.</em>
            </h2>
          </div>
          <p>
            Three ways to work together. <br />
            Fees and availability shared privately.
          </p>
        </div>
        {relationshipServices.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </section>
      <section className="relationship-process">
        <div className="section">
          <div className="section-heading">
            <div>
              <h2>
                A conversation. <br />
                <em>A clearer next step.</em>
              </h2>
            </div>
            <p>
              The depth of the work follows <br />
              the session format you choose.
            </p>
          </div>
          <div className="steps">
            {[
              [
                "01",
                "Begin with your experience",
                "Enquire privately, choose your session and share what you would like to explore.",
              ],
              [
                "02",
                "Understand the pattern",
                "Use your time with Pooja to examine your questions, relationship dynamics or an area of growth.",
              ],
              [
                "03",
                "Work towards change",
                "In the deeper session and package, build on the conversation with strategy, practical tools and, in the package, exercises.",
              ],
            ].map(([n, title, copy]) => (
              <div key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section relationship-notes">
        <div>
          <h2>
            A few thoughtful <br />
            <em>details.</em>
          </h2>
        </div>
        <div className="important-notes">
          <div>
            <h3>What is the format?</h3>
            <p>
              Choose from live Zoom sessions: 30 minutes, 60 minutes, or a
              package of four 60-minute sessions.
            </p>
          </div>
          <div>
            <h3>Which option should I choose?</h3>
            <p>
              A focused question can begin with the shorter session. The longer
              session includes strategy and tools; the package offers a
              step-by-step framework and exercises. Ask Pooja if you are unsure.
            </p>
          </div>
          <div>
            <h3>How do I confirm a booking?</h3>
            <p>
              Enquire on WhatsApp or Instagram. Pooja will share fees,
              availability, payment instructions and the applicable terms
              privately before you confirm.
            </p>
          </div>
          <div>
            <h3>Looking for astrological connection analysis?</h3>
            <p>
              Two-Chart Guidance is listed separately under{" "}
              <Link href="/astrology#two-chart">
                Astrology Consultations <ArrowUpRight size={12} />
              </Link>
              . Its scope and preparation requirements are different.
            </p>
          </div>
        </div>
      </section>
      <section className="booking-cta relationship-cta">
        <BrandMotif />
        <div>
          <h2>
            A little understanding. <br />
            <em>A more meaningful connection.</em>
          </h2>
          <p>Make space for the conversation you have been wanting to have.</p>
          <BookButton
            service="Relationship Blueprint"
            label="Enquire about the Blueprint"
            light
          />
          <InstagramEnquiry />
        </div>
      </section>
    </>
  );
}
