"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactContent() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
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
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Let&apos;s start a
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                conversation
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
              Have a project in mind? Send us a message and we&apos;ll get back
              to you within 24 hours.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection>
              {submitted ? (
                <div className="text-center py-20 bg-surface border border-border rounded-2xl">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Message sent successfully!
                  </h3>
                  <p className="text-muted max-w-md mx-auto">
                    Thanks for reaching out. A member of our team will get back
                    to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary font-medium hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-surface border border-border rounded-2xl p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="c-name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="c-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="c-email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="c-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="c-phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="c-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="+61 400 000 000"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="c-company"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Company
                      </label>
                      <input
                        id="c-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your company"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="c-message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="c-message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-full bg-primary text-foreground font-semibold flex items-center gap-2 hover:bg-primary-light shadow-sm transition-colors disabled:opacity-50 cursor-pointer"
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

          <div>
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div className="bg-surface border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                  </div>
                  <a
                    href="mailto:hello@no-code-creations.com"
                    className="text-muted text-sm hover:text-primary transition-colors"
                  >
                    hello@no-code-creations.com
                  </a>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                  </div>
                  <a
                    href="tel:+61400000000"
                    className="text-muted text-sm hover:text-primary transition-colors"
                  >
                    +61 400 000 000
                  </a>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                  </div>
                  <p className="text-muted text-sm">Melbourne, Australia</p>
                </div>

                <div className="bg-surface border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      Response Time
                    </h3>
                  </div>
                  <p className="text-muted text-sm">
                    We respond within 24 hours, Monday to Friday (AEST)
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
