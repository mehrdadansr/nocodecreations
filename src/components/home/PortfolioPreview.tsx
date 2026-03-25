"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "GreenLeaf E-Commerce",
    category: "Web Application",
    tags: ["Next.js", "Shopify", "UI/UX"],
    description:
      "A complete e-commerce rebuild that increased conversion rates by 45% and reduced page load times by 60%.",
    metric: "+45%",
    metricLabel: "Conversions",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "FinTrack Dashboard",
    category: "SaaS Platform",
    tags: ["React", "Node.js", "AI"],
    description:
      "AI-powered financial dashboard for a Sydney fintech startup. From MVP to 2,000 active users in 3 months.",
    metric: "2,000+",
    metricLabel: "Active Users",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Artisan Collective",
    category: "Brand & Website",
    tags: ["WordPress", "Branding", "SEO"],
    description:
      "Full brand identity and custom website for a Melbourne creative agency. Organic traffic grew 120% in 6 months.",
    metric: "+120%",
    metricLabel: "Organic Traffic",
    gradient: "from-orange-500/20 to-rose-500/20",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Our Work"
            title="Projects that speak for themselves"
            description="Real results from real partnerships. Here's a snapshot of what we've delivered."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.15}>
              <div className="group relative bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <p className="text-3xl font-bold text-foreground">
                      {project.metric}
                    </p>
                    <p className="text-sm text-muted">{project.metricLabel}</p>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-surface-light border border-border text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                    View case study <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View all projects <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
