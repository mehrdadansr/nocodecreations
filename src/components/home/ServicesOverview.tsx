"use client";

import {
  Globe,
  Code2,
  Smartphone,
  Palette,
  Blocks,
  BrainCircuit,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description:
      "Hand-crafted, responsive websites that look stunning and convert visitors into customers.",
    href: "/services#websites",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Powerful web apps built with modern frameworks to solve complex business problems.",
    href: "/services#webapps",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    description:
      "App-style UX, PWAs, and no code–driven mobile experiences your customers can use on the go.",
    href: "/services#mobile",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centred design that blends aesthetics with function for exceptional digital experiences.",
    href: "/services#design",
  },
  {
    icon: Blocks,
    title: "No-Code Solutions",
    description:
      "Rapid MVPs and business tools built on leading no-code platforms without sacrificing quality.",
    href: "/services#nocode",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Solutions",
    description:
      "Integrate AI and automation into your products to unlock efficiency and new capabilities.",
    href: "/services#ai",
  },
  {
    icon: TrendingUp,
    title: "Growth & Marketing",
    description:
      "Data-driven social media, paid ads, and lead generation strategies to scale your business.",
    href: "/services#growth",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="What We Do"
            title="Services built for growth"
            description="Web and mobile apps, no code builds, design, AI, and marketing—end-to-end support from idea to scale."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <Link href={service.href} className="block h-full">
                <Card className="h-full group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Card>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
