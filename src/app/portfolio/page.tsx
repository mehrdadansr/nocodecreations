import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our case studies and see how we've helped businesses across Australia grow with custom websites, web apps, and digital solutions.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
