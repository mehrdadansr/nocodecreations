"use client";

import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question:
      "What types of applications and websites do you specialize in building with no-code platforms?",
    answer:
      "We build custom websites, web applications, and app-style experiences—including marketplaces, directories, booking and membership tools, internal dashboards, and creative platforms. No-code fits rapid MVPs and business workflows; we combine it with traditional development when you need deeper performance, security, or integrations. Every project is scoped to the right stack for your goals and budget.",
  },
  {
    question: "What is your development process like from start to finish?",
    answer:
      "We follow a clear four-phase path: Discovery—we align on your business, users, and success metrics; Design—wireframes and UI so you approve the experience before build; Development—iterative build with regular check-ins; Launch—testing, deployment, handover, and optional ongoing support. You stay involved at each stage so there are no surprises at go-live.",
  },
  {
    question: "Do you work only with no-code, or also with custom code?",
    answer:
      "We are no-code specialists first—platforms like Bubble and similar tools when they are the fastest path to value—but we also deliver custom websites, web apps, and integrations where code is the better fit. Many projects blend both: no-code for speed on core workflows, and code or APIs for parts that need it.",
  },
  {
    question: "Who do you typically work with, and where are you based?",
    answer:
      "We partner with founders, SMEs, and teams across Australia (including Sydney, Melbourne, and Brisbane) and remotely where it makes sense. Whether you have a rough idea or an existing product to extend, we scope work to match your stage—from MVP to growth and optimisation.",
  },
];

export default function HomeFAQ() {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="FAQs"
            title="Your most frequently asked questions, answered."
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto flex flex-col gap-8 md:gap-16">
          {faqs.map((item, index) => (
            <AnimatedSection key={item.question} delay={index * 0.08}>
              <details className="group border border-border rounded-2xl bg-background open:shadow-sm transition-shadow">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none px-5 py-4 md:px-6 md:py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-sm md:text-base font-semibold text-foreground leading-snug pr-2">
                    {item.question}
                  </span>
                  <ChevronDown
                    aria-hidden
                    className="shrink-0 w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div className="px-5 pb-5 md:px-6 md:pb-6 -mt-1">
                  <p className="text-sm md:text-base text-muted leading-relaxed border-t border-border pt-4">
                    {item.answer}
                  </p>
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
