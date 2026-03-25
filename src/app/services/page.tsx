import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website development, web apps, UI/UX design, no-code solutions, AI development, growth marketing, and more. Full-service digital agency in Australia.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
