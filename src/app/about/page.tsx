import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NoCode Creations — an Australian web development agency that partners with startups and businesses to build digital products that drive growth.",
};

export default function AboutPage() {
  return <AboutContent />;
}
