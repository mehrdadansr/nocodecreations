import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end web and app development, no code builds, mobile-friendly products, UI/UX, AI, growth marketing, and support — No Code Creations, Australia.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
