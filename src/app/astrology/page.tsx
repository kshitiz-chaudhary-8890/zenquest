import { ConsultationPage } from "@/components/site";
import { astrologyServices } from "@/lib/content";
export const metadata = { title: "Astrology Consultations" };
export default function Astrology() {
  return <ConsultationPage kind="astrology" services={astrologyServices} />;
}
