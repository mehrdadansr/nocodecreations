"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CTABand() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Ready to build something
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              amazing?
            </span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-10">
            Let&apos;s talk about your project. Whether you&apos;re launching a
            startup or scaling an existing business, we&apos;re here to help you
            succeed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/get-a-quote" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Book a Call
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
