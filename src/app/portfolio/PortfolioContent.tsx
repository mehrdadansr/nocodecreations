"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const projects = [
  {
    title: "GreenLeaf E-Commerce",
    category: "Web Application",
    tags: ["Next.js", "Shopify", "UI/UX", "SEO"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    metric: "+45%",
    metricLabel: "Conversion Rate",
    problem:
      "GreenLeaf, a sustainable products retailer, was losing sales to a slow, template-based Shopify store with poor mobile UX. Cart abandonment sat at 78%.",
    solution:
      "We redesigned the entire shopping experience from scratch — custom Shopify theme, streamlined checkout, advanced product filtering, and mobile-first UX. We also implemented structured data for SEO and integrated Klaviyo for email automation.",
    result:
      "Conversion rates increased by 45%, cart abandonment dropped to 52%, and page load times went from 4.2s to under 1.5s. Monthly revenue grew by 60% within the first quarter post-launch.",
    technologies: [
      "Next.js",
      "Shopify Hydrogen",
      "Tailwind CSS",
      "Klaviyo",
      "Vercel",
    ],
  },
  {
    title: "FinTrack Dashboard",
    category: "SaaS Platform",
    tags: ["React", "Node.js", "AI", "Real-time"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    metric: "2,000+",
    metricLabel: "Active Users",
    problem:
      "A Sydney fintech startup needed to take their spreadsheet-based financial tracking tool and turn it into a scalable SaaS product before their seed funding deadline.",
    solution:
      "We designed and built a full-stack web application with real-time data syncing, AI-powered spending insights, multi-user collaboration, and bank-grade security. The MVP was delivered in 10 weeks.",
    result:
      "FinTrack launched on schedule, secured their seed round, and grew to 2,000+ active users within 3 months. The platform now processes over $50M in tracked transactions monthly.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
      "AWS",
      "Stripe",
    ],
  },
  {
    title: "Artisan Collective",
    category: "Brand & Website",
    tags: ["WordPress", "Branding", "SEO", "Content"],
    gradient: "from-orange-500/20 to-rose-500/20",
    metric: "+120%",
    metricLabel: "Organic Traffic",
    problem:
      "A Melbourne creative agency had an outdated website that didn't reflect their premium brand positioning. They were invisible on Google and relied entirely on word-of-mouth.",
    solution:
      "Full brand refresh including new logo, colour palette, and visual language. Custom WordPress website with portfolio showcasing, client testimonials, and a blog strategy. Comprehensive on-page SEO and local SEO optimisation.",
    result:
      "Organic traffic grew 120% in 6 months. The site now generates 15+ qualified leads per month compared to 2-3 before. Brand perception among clients improved significantly based on post-launch surveys.",
    technologies: [
      "WordPress",
      "ACF Pro",
      "Yoast SEO",
      "WP Rocket",
      "Figma",
      "Google Analytics",
    ],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 0.15}>
      <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
        <div
          className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
        >
          <div className="text-center">
            <p className="text-5xl font-bold text-foreground">
              {project.metric}
            </p>
            <p className="text-muted mt-1">{project.metricLabel}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            <ExternalLink size={16} className="text-muted" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-surface-light border border-border text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors cursor-pointer"
          >
            {expanded ? "Hide details" : "View case study"}
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expanded && (
            <div className="mt-6 space-y-6 pt-6 border-t border-border">
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  The Problem
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Our Solution
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  The Result
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {project.result}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function PortfolioContent() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Work that delivers
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                real results
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
              Every project is a partnership. Here&apos;s how we&apos;ve helped
              businesses transform their digital presence.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-20 text-center bg-surface border border-border rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Want to be our next success story?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Let&apos;s discuss your project and see how we can help you
              achieve similar results.
            </p>
            <Button href="/get-a-quote" size="lg">
              Start Your Project
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
