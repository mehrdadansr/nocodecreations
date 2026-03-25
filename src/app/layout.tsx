import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NoCode Creations | Web Development Agency Australia",
    template: "%s | NoCode Creations",
  },
  description:
    "We build custom websites, web apps, and digital products that drive growth. No-code, AI-powered, and traditionally coded solutions for startups and businesses across Australia.",
  keywords: [
    "web development",
    "web design",
    "Australia",
    "custom websites",
    "web apps",
    "no-code",
    "AI development",
    "startup",
    "digital agency",
  ],
  openGraph: {
    title: "NoCode Creations | Web Development Agency Australia",
    description:
      "We build custom websites, web apps, and digital products that drive growth.",
    url: "https://nocodecreations.com.au",
    siteName: "NoCode Creations",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoCode Creations | Web Development Agency Australia",
    description:
      "We build custom websites, web apps, and digital products that drive growth.",
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
