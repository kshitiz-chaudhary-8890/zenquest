import { BookButton } from "@/components/site";
export const metadata = { title: "Consultation Policies" };
export default function Policies() {
  return (
    <section className="section page-intro">
      <h1>
        Consultation <br />
        <em>policies.</em>
      </h1>
      <p>
        Pooja’s approved consultation policies will appear here. Cancellation,
        rescheduling, refund and privacy terms are awaiting confirmation and are
        not represented by this placeholder.
      </p>
      <p>
        Please ask Pooja for the applicable terms before confirming a booking.
        Service-specific inclusions and exclusions are listed on each
        consultation page.
      </p>
      <BookButton
        label="Ask about consultation terms"
        service="consultation terms"
      />
    </section>
  );
}
