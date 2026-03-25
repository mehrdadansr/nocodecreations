"use client";

import {
  Globe,
  Code2,
  Smartphone,
  Palette,
  Blocks,
  BrainCircuit,
  TrendingUp,
  HandCoins,
  Wrench,
  Check,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Code2,
  Smartphone,
  Palette,
  Blocks,
  BrainCircuit,
  TrendingUp,
  HandCoins,
  Wrench,
};

const services = [
  {
    id: "websites",
    icon: "Globe",
    title: "Custom Website Development",
    description:
      "We design and build bespoke websites from the ground up. No templates, no page builders — just clean, performant code that reflects your brand and converts visitors into customers.",
    features: [
      "Fully responsive, mobile-first design",
      "Lightning-fast performance (Core Web Vitals optimised)",
      "SEO-friendly architecture from day one",
      "CMS integration for easy content management",
      "E-commerce functionality when you need it",
      "Analytics and conversion tracking setup",
    ],
    technologies: ["Next.js", "React", "WordPress", "Shopify", "Webflow"],
  },
  {
    id: "webapps",
    icon: "Code2",
    title: "Web Application Development",
    description:
      "Complex business problems require custom software. We build scalable web applications — from SaaS platforms to internal dashboards — using modern frameworks and best practices.",
    features: [
      "Custom SaaS products and MVPs",
      "Internal business tools and dashboards",
      "API development and third-party integrations",
      "Real-time features and data processing",
      "User authentication and role-based access",
      "Database design and cloud infrastructure",
    ],
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "AWS",
      "Vercel",
    ],
  },
  {
    id: "mobile",
    icon: "Smartphone",
    title: "Mobile app experiences",
    description:
      "Customers live on their phones. We design and ship mobile-friendly and app-store-ready experiences—often powered by no code for speed, or paired with native wrappers when you need distribution on iOS and Android.",
    features: [
      "Progressive web apps (PWA) and responsive app-style UX",
      "No code mobile workflows on platforms like Bubble",
      "App store submission support and store listing assets",
      "Push notifications and deep links where the stack allows",
      "Offline-first patterns when your use case needs them",
      "Analytics and crash reporting setup",
    ],
    technologies: ["Bubble", "React Native", "Expo", "Figma", "Firebase"],
  },
  {
    id: "design",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "Great products start with great design. Our UX process ensures every interaction is intuitive, and our UI work ensures every pixel is polished. We design for people first.",
    features: [
      "User research and persona development",
      "Wireframing and interactive prototyping",
      "High-fidelity UI design systems",
      "Usability testing and iteration",
      "Design handoff with developer-ready specs",
      "Brand identity and visual language",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Framer", "Maze"],
  },
  {
    id: "nocode",
    icon: "Blocks",
    title: "No-Code Solutions",
    description:
      "Speed matters. When you need to validate an idea or launch quickly, we leverage the best no-code and low-code platforms to build functional products in days, not months.",
    features: [
      "Rapid MVP development and prototyping",
      "Workflow automation (Zapier, Make, n8n)",
      "No-code web apps and internal tools",
      "Database and CRM setup (Airtable, Notion)",
      "Landing pages and marketing sites",
      "Migration path to custom code when ready",
    ],
    technologies: [
      "Bubble",
      "Webflow",
      "Zapier",
      "Make",
      "Airtable",
      "Retool",
    ],
  },
  {
    id: "ai",
    icon: "BrainCircuit",
    title: "AI-Powered Solutions",
    description:
      "From intelligent chatbots to automated workflows, we integrate cutting-edge AI into your products. We use tools like Cursor, GPT, and custom models to supercharge your business.",
    features: [
      "AI chatbots and virtual assistants",
      "Content generation and automation",
      "Predictive analytics and recommendations",
      "Natural language processing integrations",
      "Computer vision and image recognition",
      "Custom AI agent development",
    ],
    technologies: [
      "OpenAI",
      "Claude",
      "LangChain",
      "Python",
      "TensorFlow",
      "Cursor",
    ],
  },
  {
    id: "growth",
    icon: "TrendingUp",
    title: "Growth & Marketing",
    description:
      "Building a great product is only half the battle. We help you get it in front of the right people with data-driven marketing strategies that deliver measurable ROI.",
    features: [
      "Social media strategy and management",
      "Paid advertising (Google Ads, Meta, LinkedIn)",
      "Lead generation funnels and landing pages",
      "Email marketing and automation",
      "SEO strategy and implementation",
      "Analytics, reporting, and optimisation",
    ],
    technologies: [
      "Google Ads",
      "Meta Ads",
      "Mailchimp",
      "HubSpot",
      "Google Analytics",
      "Semrush",
    ],
  },
  {
    id: "funding",
    icon: "HandCoins",
    title: "Investor & Funding Assistance",
    description:
      "Raising capital for your startup? We help founders prepare compelling pitch decks, build investor-ready MVPs, and craft the digital presence that makes investors take notice.",
    features: [
      "Pitch deck design and strategy",
      "Investor-ready MVP development",
      "Financial model review assistance",
      "Startup branding and positioning",
      "Crowdfunding campaign support",
      "Post-funding product development roadmap",
    ],
    technologies: [
      "Pitch.com",
      "Figma",
      "Notion",
      "Webflow",
      "Stripe",
      "Canva",
    ],
  },
  {
    id: "maintenance",
    icon: "Wrench",
    title: "Maintenance & Support",
    description:
      "Your product doesn't stop at launch. We offer ongoing maintenance, support, and optimisation to keep your digital products running smoothly and evolving with your business.",
    features: [
      "Regular updates and security patches",
      "Performance monitoring and optimisation",
      "Content updates and feature additions",
      "Bug fixes and issue resolution",
      "Uptime monitoring and alerts",
      "Monthly reporting and recommendations",
    ],
    technologies: [
      "Vercel",
      "AWS",
      "Cloudflare",
      "Sentry",
      "GitHub",
      "Datadog",
    ],
  },
];

export default function ServicesContent() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Everything you need to
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                succeed online
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
              Apps, web, no code, mobile, design, marketing, and support —
              we&apos;re your end-to-end partner.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.id}>
                <div
                  id={service.id}
                  className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      {Icon && <Icon className="w-7 h-7 text-primary" />}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`bg-surface border border-border rounded-2xl p-8 ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      What&apos;s included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection>
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Not sure what you need?
            </h2>
            <p className="text-muted mb-8 max-w-xl mx-auto">
              Tell us about your project and we&apos;ll recommend the right
              combination of services to achieve your goals.
            </p>
            <Button href="/get-a-quote" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
