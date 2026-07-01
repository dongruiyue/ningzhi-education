type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
};

export function Section({ children, className = "", id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${dark ? "bg-neutral-900 text-white" : "bg-white"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  dark,
}: {
  label?: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      {label && (
        <span className={`text-sm font-semibold tracking-widest uppercase mb-4 block ${dark ? "text-brand-light" : "text-brand"}`}>
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-neutral-400" : "text-neutral-600"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
