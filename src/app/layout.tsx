import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://no-code-creations.com";
const ogImage =
  "https://fe36e5d2176d85fd69e79d6769db7309.cdn.bubble.io/cdn-cgi/image/w=1200,h=630,f=auto,dpr=1,fit=contain/f1722463142203x513211604871360450/No%20Code%20Creations%20Stacked%20Logo%20Colour.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Leading App Development & No Code Solutions Australia | Expert Web & Mobile Apps",
    template: "%s | No Code Creations",
  },
  description:
    "No Code Creations offers expert app development and no code solutions across Australia. Custom web and mobile apps, social media management, and digital strategy for Sydney, Melbourne, Brisbane, and beyond.",
  keywords: [
    "app development Australia",
    "no code Australia",
    "no code solutions Sydney",
    "mobile app development Melbourne",
    "custom web apps Brisbane",
    "Bubble developer Australia",
    "web development",
    "digital agency",
  ],
  openGraph: {
    title:
      "Leading App Development & No Code Solutions Australia | Expert Web & Mobile Apps",
    description:
      "No Code Creations specializes in end-to-end web and app solutions with expert social media management. No code platforms and digital strategies tailored to your business.",
    url: siteUrl,
    siteName: "No Code Creations",
    locale: "en_AU",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "No Code Creations" }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Leading App Development & No Code Solutions Australia | Expert Web & Mobile Apps",
    description:
      "Expert app and no code development across Australia—custom web and mobile solutions.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
