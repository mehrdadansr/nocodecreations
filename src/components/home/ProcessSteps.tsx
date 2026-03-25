"use client";

import { Search, PenTool, Code, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We learn about your business, goals, and users to shape the perfect strategy.",
    number: "01",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Wireframes and high-fidelity designs that bring your vision to life before a line of code is written.",
    number: "02",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Clean, performant code using modern technologies — built to scale with your business.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Rigorous testing, deployment, and ongoing support to ensure your product thrives.",
    number: "04",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Our Process"
            title="From idea to launch in four steps"
            description="A proven, transparent process that keeps you involved every step of the way."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />

          {steps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 0.15}>
              <div className="relative text-center">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">
                  Step {step.number}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-1 mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
