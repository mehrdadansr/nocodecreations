import type { Metadata } from "next";
import QuoteWizard from "./QuoteWizard";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Tell us about your project and get a free estimate. Custom websites, web apps, AI solutions, and more — tailored to your budget and timeline.",
};

export default function GetAQuotePage() {
  return <QuoteWizard />;
}
