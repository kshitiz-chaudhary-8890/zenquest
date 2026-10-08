import { ConsultationPage } from "@/components/site";
import { tarotServices } from "@/lib/content";
export const metadata = { title: "Tarot & Astro-Tarot Readings" };
export default function Tarot() {
  return <ConsultationPage kind="tarot" services={tarotServices} />;
}
