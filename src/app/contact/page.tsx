import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NoCode Creations. We'd love to hear about your project. Based in Sydney, Australia — available globally.",
};

export default function ContactPage() {
  return <ContactContent />;
}
