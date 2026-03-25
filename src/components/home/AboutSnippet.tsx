"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function AboutSnippet() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
              A team that cares about
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                your success
              </span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              NoCode Creations is an Australian web development agency that
              partners with startups, entrepreneurs, and growing businesses to
              build digital products that actually work. We combine no-code
              speed, traditional engineering rigour, and AI-powered innovation.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Whether you need a landing page that converts or a full-scale web
              application, our team delivers solutions tailored to your goals —
              not cookie-cutter templates. We treat every project like our own.
            </p>
            <Button href="/about" variant="outline">
              Learn more about us
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface border border-border rounded-2xl p-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
