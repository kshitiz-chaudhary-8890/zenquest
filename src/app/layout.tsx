import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";

import "./globals.css";
import { Header } from "@/components/interactive";
import { Footer, WhatsAppFloatingButton } from "@/components/site";
import { MotionRoot } from "@/components/motion-root";
export const metadata: Metadata = {
  title: {
    default: "ZenQuest by Pooja — A more personal perspective",
    template: "%s | ZenQuest by Pooja",
  },
  description:
    "Thoughtful astrology and tarot consultations with Pooja Khera. Explore readings and enquire privately on WhatsApp.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <MotionRoot>{children}</MotionRoot>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
