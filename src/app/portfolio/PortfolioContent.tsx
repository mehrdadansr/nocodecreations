"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import {
  portfolioProjects,
  portfolioDetailUrl,
} from "@/data/portfolio";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolioProjects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const detailUrl = portfolioDetailUrl(project.slug);

  return (
    <AnimatedSection delay={index * 0.15}>
      <div className="bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
        <a
          href={detailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-56 w-full bg-muted/30"
        >
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </a>

        <div className="p-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {project.category}
            </span>
            <a
              href={detailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label={`View ${project.title} on no-code-creations.com`}
            >
              <ExternalLink size={16} />
            </a>
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
            type="button"
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
                  The challenge
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Our approach
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Outcome
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {project.result}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Technologies
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
              <a
                href={detailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Open full project on no-code-creations.com{" "}
                <ExternalLink size={14} />
              </a>
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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Ideas turned into
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                real products
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
              See how we&apos;ve turned ideas into reality with tailored web and
              app solutions—built with no code and modern tooling.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-20 text-center bg-surface border border-border rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Want to be our next success story?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Let&apos;s discuss your project and build something your users
              will love.
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
