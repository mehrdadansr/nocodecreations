import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See how No Code Creations turns ideas into reality — real web and app work built with no code and modern stacks for Australian businesses.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
