import type { Metadata } from "next";
import "./concepts.css";

export const metadata: Metadata = {
  title: "Design Concepts",
  robots: { index: false, follow: false },
};

export default function DesignConceptsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
