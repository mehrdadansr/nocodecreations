"use client";

import { Check } from "lucide-react";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export default function StepIndicator({
  steps,
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                index < currentStep
                  ? "bg-primary text-white"
                  : index === currentStep
                    ? "bg-gradient-to-r from-primary to-accent text-white scale-110"
                    : "bg-surface border border-border text-muted"
              }`}
            >
              {index < currentStep ? <Check size={18} /> : index + 1}
            </div>
            <span
              className={`text-xs mt-1.5 hidden sm:block ${
                index <= currentStep ? "text-foreground" : "text-muted"
              }`}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-8 sm:w-12 h-0.5 transition-colors duration-300 ${
                index < currentStep ? "bg-primary" : "bg-border"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
