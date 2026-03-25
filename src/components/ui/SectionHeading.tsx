interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg text-muted max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
