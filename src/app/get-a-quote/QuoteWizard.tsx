"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Code2,
  ShoppingCart,
  Smartphone,
  BrainCircuit,
  HelpCircle,
  Palette,
  Blocks,
  TrendingUp,
  Wrench,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Send,
  Zap,
  Clock,
  CalendarRange,
  Hourglass,
} from "lucide-react";
import StepIndicator from "@/components/ui/StepIndicator";

const stepLabels = [
  "Project",
  "Services",
  "Budget",
  "Timeline",
  "Details",
];

const projectTypes = [
  { id: "website", label: "Website", icon: Globe },
  { id: "webapp", label: "Web App", icon: Code2 },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "mobile", label: "Mobile App", icon: Smartphone },
  { id: "ai", label: "AI Solution", icon: BrainCircuit },
  { id: "other", label: "Other", icon: HelpCircle },
];

const serviceOptions = [
  { id: "design", label: "UI/UX Design", icon: Palette },
  { id: "development", label: "Development", icon: Code2 },
  { id: "nocode", label: "No-Code Build", icon: Blocks },
  { id: "ai", label: "AI Features", icon: BrainCircuit },
  { id: "marketing", label: "Marketing", icon: TrendingUp },
  { id: "maintenance", label: "Maintenance", icon: Wrench },
];

const budgetRanges = [
  { id: "5k-10k", label: "$5K – $10K", description: "Small project or MVP" },
  {
    id: "10k-25k",
    label: "$10K – $25K",
    description: "Standard website or app",
  },
  {
    id: "25k-50k",
    label: "$25K – $50K",
    description: "Complex application",
  },
  {
    id: "50k-100k",
    label: "$50K – $100K",
    description: "Enterprise solution",
  },
  { id: "100k+", label: "$100K+", description: "Large-scale platform" },
];

const timelineOptions = [
  { id: "asap", label: "ASAP", description: "As soon as possible", icon: Zap },
  {
    id: "1-2months",
    label: "1–2 Months",
    description: "Short timeline",
    icon: Clock,
  },
  {
    id: "3-6months",
    label: "3–6 Months",
    description: "Standard timeline",
    icon: CalendarRange,
  },
  {
    id: "flexible",
    label: "Flexible",
    description: "No rush",
    icon: Hourglass,
  },
];

interface FormData {
  projectType: string;
  services: string[];
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  description: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 200 : -200,
    opacity: 0,
  }),
};

export default function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    projectType: "",
    services: [],
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  });

  const canProceed = () => {
    switch (step) {
      case 0:
        return form.projectType !== "";
      case 1:
        return form.services.length > 0;
      case 2:
        return form.budget !== "";
      case 3:
        return form.timeline !== "";
      case 4:
        return form.name !== "" && form.email !== "";
      default:
        return false;
    }
  };

  const next = () => {
    if (canProceed() && step < 4) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const prev = () => {
    if (step > 0) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const toggleService = (id: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter((s) => s !== id)
        : [...prev.services, id],
    }));
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setLoading(true);

    try {
      const { db } = await import("@/lib/db");
      const { id, tx } = await import("@instantdb/react");
      await db.transact(
        tx.quotes[id()].update({
          projectType: form.projectType,
          services: JSON.stringify(form.services),
          budget: form.budget,
          timeline: form.timeline,
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company || undefined,
          description: form.description || undefined,
          createdAt: Date.now(),
        })
      );
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-28 pb-24 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-lg mx-auto px-4"
        >
          <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-success" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Quote request received!
          </h1>
          <p className="text-muted leading-relaxed mb-8">
            Thanks, {form.name}! We&apos;ve received your project details and
            will get back to you within 24 hours with a tailored proposal.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get a Free Quote
          </h1>
          <p className="text-muted">
            Tell us about your project in a few simple steps.
          </p>
        </div>

        <StepIndicator steps={stepLabels} currentStep={step} />

        <div className="relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {step === 0 && (
                <StepProjectType
                  selected={form.projectType}
                  onSelect={(v) => setForm({ ...form, projectType: v })}
                />
              )}
              {step === 1 && (
                <StepServices
                  selected={form.services}
                  onToggle={toggleService}
                />
              )}
              {step === 2 && (
                <StepBudget
                  selected={form.budget}
                  onSelect={(v) => setForm({ ...form, budget: v })}
                />
              )}
              {step === 3 && (
                <StepTimeline
                  selected={form.timeline}
                  onSelect={(v) => setForm({ ...form, timeline: v })}
                />
              )}
              {step === 4 && (
                <StepDetails
                  form={form}
                  onChange={(field, value) =>
                    setForm({ ...form, [field]: value })
                  }
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prev}
            disabled={step === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} /> Back
          </button>

          {step < 4 ? (
            <button
              onClick={next}
              disabled={!canProceed()}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity cursor-pointer"
            >
              Continue <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || loading}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity cursor-pointer"
            >
              {loading ? "Submitting..." : <>Submit Request <Send size={16} /></>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function StepProjectType({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2">
        What type of project do you need?
      </h2>
      <p className="text-muted text-sm mb-8">Select one option.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {projectTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onSelect(type.id)}
            className={`p-6 rounded-xl border text-center transition-all cursor-pointer ${
              selected === type.id
                ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                : "border-border bg-surface hover:border-muted"
            }`}
          >
            <type.icon
              className={`w-8 h-8 mx-auto mb-3 ${
                selected === type.id ? "text-primary" : "text-muted"
              }`}
            />
            <span
              className={`text-sm font-medium ${
                selected === type.id ? "text-foreground" : "text-muted"
              }`}
            >
              {type.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepServices({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2">
        What services do you need?
      </h2>
      <p className="text-muted text-sm mb-8">Select all that apply.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {serviceOptions.map((service) => {
          const isSelected = selected.includes(service.id);
          return (
            <button
              key={service.id}
              onClick={() => onToggle(service.id)}
              className={`p-6 rounded-xl border text-center transition-all cursor-pointer ${
                isSelected
                  ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                  : "border-border bg-surface hover:border-muted"
              }`}
            >
              <service.icon
                className={`w-8 h-8 mx-auto mb-3 ${
                  isSelected ? "text-primary" : "text-muted"
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  isSelected ? "text-foreground" : "text-muted"
                }`}
              >
                {service.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StepBudget({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2">
        What&apos;s your budget range?
      </h2>
      <p className="text-muted text-sm mb-8">
        This helps us tailor our proposal. All figures in AUD.
      </p>
      <div className="space-y-3">
        {budgetRanges.map((range) => (
          <button
            key={range.id}
            onClick={() => onSelect(range.id)}
            className={`w-full p-5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
              selected === range.id
                ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                : "border-border bg-surface hover:border-muted"
            }`}
          >
            <div>
              <span
                className={`text-base font-semibold ${
                  selected === range.id ? "text-foreground" : "text-muted"
                }`}
              >
                {range.label}
              </span>
              <p
                className={`text-sm mt-0.5 ${
                  selected === range.id ? "text-muted" : "text-muted/60"
                }`}
              >
                {range.description}
              </p>
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selected === range.id ? "border-primary" : "border-border"
              }`}
            >
              {selected === range.id && (
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepTimeline({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2">
        What&apos;s your ideal timeline?
      </h2>
      <p className="text-muted text-sm mb-8">
        When do you need this project completed?
      </p>
      <div className="grid grid-cols-2 gap-4">
        {timelineOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`p-6 rounded-xl border text-center transition-all cursor-pointer ${
              selected === option.id
                ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                : "border-border bg-surface hover:border-muted"
            }`}
          >
            <option.icon
              className={`w-8 h-8 mx-auto mb-3 ${
                selected === option.id ? "text-primary" : "text-muted"
              }`}
            />
            <span
              className={`text-sm font-semibold block ${
                selected === option.id ? "text-foreground" : "text-muted"
              }`}
            >
              {option.label}
            </span>
            <span
              className={`text-xs mt-1 block ${
                selected === option.id ? "text-muted" : "text-muted/60"
              }`}
            >
              {option.description}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function StepDetails({
  form,
  onChange,
}: {
  form: FormData;
  onChange: (field: string, value: string) => void;
}) {
  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

  return (
    <div>
      <h2 className="text-xl font-semibold text-foreground mb-2">
        Almost done! Tell us about yourself.
      </h2>
      <p className="text-muted text-sm mb-8">
        We&apos;ll use this to send you a tailored proposal.
      </p>
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="q-name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Full Name *
            </label>
            <input
              id="q-name"
              type="text"
              required
              value={form.name}
              onChange={(e) => onChange("name", e.target.value)}
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="q-email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email *
            </label>
            <input
              id="q-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => onChange("email", e.target.value)}
              className={inputClass}
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="q-phone"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Phone
            </label>
            <input
              id="q-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => onChange("phone", e.target.value)}
              className={inputClass}
              placeholder="+61 400 000 000"
            />
          </div>
          <div>
            <label
              htmlFor="q-company"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Company
            </label>
            <input
              id="q-company"
              type="text"
              value={form.company}
              onChange={(e) => onChange("company", e.target.value)}
              className={inputClass}
              placeholder="Your company"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="q-description"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Project Description
          </label>
          <textarea
            id="q-description"
            rows={4}
            value={form.description}
            onChange={(e) => onChange("description", e.target.value)}
            className={`${inputClass} resize-none`}
            placeholder="Tell us more about your project, goals, and any specific requirements..."
          />
        </div>
      </div>
    </div>
  );
}
