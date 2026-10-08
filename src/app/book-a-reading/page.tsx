import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BookingSteps, BookingCTA } from "@/components/site";
export const metadata = { title: "Book a Reading" };
export default function Booking() {
  return (
    <>
      <section className="section page-intro">
        <h1>
          Make room for <br />
          <em>a little clarity.</em>
        </h1>
        <p>
          Choose a consultation, or ask Pooja to help you find the right one.
          Fees, availability and payment instructions are shared privately.
        </p>
        <div className="booking-choices">
          <Link href="/book-a-reading-with-pooja">
            Tarot & Astro-Tarot Readings <ArrowUpRight />
          </Link>
          <Link href="/astrology">
            Astrology Consultations <ArrowUpRight />
          </Link>
          <Link href="/relationship-blueprint">
            Relationship Blueprint <ArrowUpRight />
          </Link>
        </div>
      </section>
      <BookingSteps />
      <BookingCTA help />
    </>
  );
}
