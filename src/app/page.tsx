import {
  HeroSection,
  Introduction,
  ConsultationCategory,
  WhyPooja,
  TestimonialSection,
  BookingSteps,
  BookingCTA,
} from "@/components/site";
import { FAQAccordion } from "@/components/interactive";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Introduction />
      <ConsultationCategory />
      <WhyPooja />
      <TestimonialSection />
      <BookingSteps />
      <FAQAccordion />
      <BookingCTA />
    </>
  );
}
