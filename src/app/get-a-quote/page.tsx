import type { Metadata } from "next";
import QuoteWizard from "./QuoteWizard";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free estimate for apps, web platforms, no code products, and digital strategy — tailored to your goals, budget, and timeline.",
};

export default function GetAQuotePage() {
  return <QuoteWizard />;
}
