"use client";

import {
  Target,
  Lightbulb,
  Users,
  ShieldCheck,
  Zap,
  Heart,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const step = target / 40;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years in Business" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every decision we make is guided by outcomes. We measure success by the impact our work has on your business.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of the curve with the latest technologies, from AI-powered tools to cutting-edge frameworks.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "We don't just build and leave. We work alongside you as an extension of your team — from strategy to support.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "No shortcuts. Every line of code is reviewed, every design is pixel-perfect, and every launch is thoroughly tested.",
  },
  {
    icon: Zap,
    title: "Speed & Agility",
    description:
      "No-code when speed matters, custom code when complexity demands it. We choose the right tool for the job.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description:
      "We treat every project like our own. Your success is our success, and we genuinely care about getting it right.",
  },
];

export default function AboutContent() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              We&apos;re a team that cares about
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                building things that matter
              </span>
            </h1>
          </div>
        </AnimatedSection>

        {/* Story */}
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  NoCode Creations started with a simple observation: too many
                  great business ideas were dying because founders couldn&apos;t
                  find a development partner who truly understood their vision —
                  and their budget.
                </p>
                <p>
                  Based in Australia, we set out to bridge the gap between
                  ambitious ideas and polished digital products. We combine the
                  speed of no-code platforms, the power of traditional
                  engineering, and the intelligence of AI tools to deliver
                  solutions that work — and work fast.
                </p>
                <p>
                  Today, we partner with startups, SMBs, and entrepreneurs
                  across Australia and beyond. Whether it&apos;s a landing page
                  that converts or a full-scale SaaS platform, we bring the same
                  level of craft and care to every project.
                </p>
              </div>
            </div>
            <div className="bg-surface border border-border rounded-2xl p-10">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="text-sm text-muted mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What drives us
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 0.1}>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Why Choose Us */}
        <AnimatedSection>
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why choose NoCode Creations?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-left">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Full-Service Partner
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Design, development, marketing, and support — all under one
                  roof. No need to juggle multiple vendors.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Flexible Approach
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  No-code for speed, custom code for scale, AI for intelligence.
                  We pick the right approach for your specific needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Australian Based
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Real-time communication in your timezone. No overseas delays or
                  miscommunication — just a team that&apos;s here when you need
                  us.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Button href="/get-a-quote" size="lg">
                Start a Conversation
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
