"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

const answerClass = "text-sm md:text-base text-muted leading-relaxed space-y-3";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question:
      "What types of applications and websites do you specialize in building with no-code platforms?",
    answer: (
      <p>
        We specialize in creating a wide range of applications and websites
        using no-code platforms, including e-commerce stores, membership sites,
        landing pages, internal business tools, and more. We can cater to
        various industries such as healthcare, finance, education, and retail by
        leveraging the power and flexibility of no-code solutions.
      </p>
    ),
  },
  {
    question:
      "What is your development process like from start to finish using no-code platforms?",
    answer: (
      <>
        <p>
          Our no-code development process typically involves the following
          stages:
        </p>
        <ol className="list-decimal pl-5 space-y-3 marker:text-muted">
          <li>
            <span className="font-medium text-foreground">
              Discovery and Planning:
            </span>{" "}
            Understanding your requirements, goals, and target audience.
          </li>
          <li>
            <span className="font-medium text-foreground">Design:</span> Using
            no-code design tools to create wireframes and mockups.
          </li>
          <li>
            <span className="font-medium text-foreground">Development:</span>{" "}
            Building the application or website using no-code platforms like
            Bubble, Webflow, or Adalo, ensuring all required features are
            implemented.
          </li>
          <li>
            <span className="font-medium text-foreground">Testing:</span>{" "}
            Conducting thorough testing to ensure the product functions
            correctly and meets your needs.
          </li>
          <li>
            <span className="font-medium text-foreground">Deployment:</span>{" "}
            Launching the application or website on the desired platforms.
          </li>
          <li>
            <span className="font-medium text-foreground">
              Maintenance and Support:
            </span>{" "}
            Providing ongoing support, updates, and enhancements as needed.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: "How do you ensure the security of the no-code applications you build?",
    answer: (
      <p>
        Security is a crucial aspect of our development process. We utilize the
        built-in security features of no-code platforms, such as SSL encryption,
        user authentication, and data privacy measures. Additionally, we follow
        best practices for data protection and regularly update our security
        protocols to safeguard your applications against potential threats.
      </p>
    ),
  },
  {
    question: "What no-code platforms do you use?",
    answer: (
      <>
        <p>
          We work with several leading no-code platforms to meet the diverse
          needs of our clients. Some of the platforms we commonly use include:
        </p>
        <ul className="space-y-2 pl-0 list-none">
          <li>
            <span className="font-medium text-foreground">Web Development:</span>{" "}
            Bubble, Wix, LimeCube
          </li>
          <li>
            <span className="font-medium text-foreground">App Development:</span>{" "}
            Bubble
          </li>
          <li>
            <span className="font-medium text-foreground">Automation:</span>{" "}
            Zapier, Integromat (now Make)
          </li>
          <li>
            <span className="font-medium text-foreground">E-commerce:</span> We
            custom build
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How do you handle project timelines and deadlines using no-code platforms?",
    answer: (
      <>
        <p>
          Using no-code platforms allows us to develop applications and
          websites more quickly than traditional coding methods. We follow an
          agile methodology, setting clear milestones and deadlines for each
          phase of the project. We maintain regular communication with clients
          to ensure transparency and make adjustments as needed to meet project
          timelines.
        </p>
        <p className="text-sm italic text-muted/90">
          Note: Things can and do go wrong that can extend the timeline a bit.
        </p>
      </>
    ),
  },
  {
    question: "What is the cost structure for your no-code development services?",
    answer: (
      <p>
        Our pricing varies based on the complexity and scope of the project. We
        offer competitive and transparent pricing models, including fixed-price
        contracts for well-defined projects and hourly rates for more flexible
        requirements. We work closely with clients to ensure our services align
        with their budget and deliver maximum value.
      </p>
    ),
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

        <div className="max-w-3xl mx-auto flex flex-col rounded-2xl border border-border bg-background overflow-hidden divide-y divide-border">
          {faqs.map((item, index) => (
            <AnimatedSection
              key={item.question}
              delay={index * 0.08}
              className="w-full"
            >
              <details className="group open:bg-surface-light/40 transition-colors">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none px-5 py-3.5 md:px-6 md:py-4 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-sm md:text-base font-semibold text-foreground leading-snug pr-2">
                    {item.question}
                  </span>
                  <ChevronDown
                    aria-hidden
                    className="shrink-0 w-5 h-5 text-primary transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <div
                  className={`px-5 pb-4 md:px-6 md:pb-5 -mt-0.5 border-t border-border/80 pt-3.5 ${answerClass}`}
                >
                  {item.answer}
                </div>
              </details>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
