import Image from "next/image";
import { BookingCTA, WhyPooja } from "@/components/site";
export const metadata = { title: "About Pooja" };
export default function About() {
  return (
    <>
      <section className="section about-hero">
        <div className="about-image">
          <Image
            src="/images/pooja.jpg"
            fill
            priority
            alt="Pooja Khera, founder of ZenQuest"
            sizes="(max-width:760px) 90vw, 43vw"
          />
        </div>
        <div>
          <h1>
            Hi, I’m Pooja. <br />
            <em>
              Let’s find your <br />
              perspective.
            </em>
          </h1>
          <p>
            I’m Pooja Khera, an astrologer, Tarot expert and relationship coach.
            My work brings spiritual and practical perspectives together,
            creating space to explore your own life and questions.
          </p>
          <p>
            I believe personal guidance begins with your individual story.
            Together, we can look at the patterns, possibilities and choices in
            front of you.
          </p>
          <span className="signature">Pooja</span>
        </div>
      </section>
      <section className="section about-story">
        <h2>
          A journey toward <br />
          <em>more meaningful work.</em>
        </h2>
        <div>
          <p>
            Originally from Chandigarh, Pooja’s journey began in the corporate
            world. A period of personal and professional change led her to Tarot
            and later to her work in personal guidance.
          </p>
          <p>
            Today, ZenQuest brings together astrology, Tarot and relationship
            guidance, with distinct consultations for different questions and
            moments in life.
          </p>
          <p className="approval-note">
            Biography adapted from Pooja’s existing About page; final wording
            and professional credentials await client approval.
          </p>
          <div className="draft-stats">
            <div>
              <strong>18+</strong>
              <span>Years of experience*</span>
            </div>
            <div>
              <strong>1,000+</strong>
              <span>Readings*</span>
            </div>
            <small>*Draft figures · Awaiting Pooja’s confirmation</small>
          </div>
        </div>
      </section>
      <WhyPooja />
      <BookingCTA />
    </>
  );
}
