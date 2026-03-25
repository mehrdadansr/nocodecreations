"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  portfolioProjects,
  portfolioDetailUrl,
} from "@/data/portfolio";

export default function PortfolioPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Our Work"
            title="Projects that speak for themselves"
            description="A snapshot of live web and app work—talent marketplaces, property tools, and creative platforms."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.15}>
              <a
                href={portfolioDetailUrl(project.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative h-48 w-full bg-muted/30">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
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
                    View on no-code-creations.com <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Full case studies on this site <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
