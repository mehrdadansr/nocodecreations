import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about No Code Creations — Australian experts in app development, no code platforms, and web & mobile solutions for startups and growing businesses.",
};

export default function AboutPage() {
  return <AboutContent />;
}
