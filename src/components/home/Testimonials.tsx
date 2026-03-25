"use client";

import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "NoCode Creations turned our rough idea into a polished product in just 8 weeks. The team was responsive, transparent, and genuinely invested in our success. Our conversion rate jumped 35% after launch.",
    name: "Sarah Mitchell",
    title: "Founder & CEO",
    company: "GreenLeaf Co.",
    avatar: "SM",
  },
  {
    quote:
      "We'd been burned by agencies before, but NoCode Creations was different. They delivered on time, on budget, and the AI features they integrated have saved us over 20 hours a week in manual work.",
    name: "James Chen",
    title: "CTO",
    company: "FinTrack",
    avatar: "JC",
  },
  {
    quote:
      "From branding to website to SEO, they handled everything. Our organic traffic is up 120% and we're consistently generating quality leads. Best investment we've made for our business.",
    name: "Emma Lawson",
    title: "Managing Director",
    company: "Artisan Collective",
    avatar: "EL",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Testimonials"
            title="What our clients say"
            description="Don't just take our word for it. Here's what business owners have to say about working with us."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.15}>
              <div className="bg-background border border-border rounded-2xl p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="text-muted text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
