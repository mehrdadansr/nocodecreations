import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact No Code Creations about your app or web project. Australia-wide — Sydney, Melbourne, Brisbane, and beyond.",
};

export default function ContactPage() {
  return <ContactContent />;
}
