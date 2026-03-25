"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { db } = await import("@/lib/db");
      const { id, tx } = await import("@instantdb/react");
      await db.transact(
        tx.contacts[id()].update({
          ...form,
          createdAt: Date.now(),
        })
      );
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            label="Get in Touch"
            title="Send us a message"
            description="Have a question or want to discuss a project? Drop us a message and we'll get back to you within 24 hours."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Message sent!
              </h3>
              <p className="text-muted">
                Thanks for reaching out. We&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
