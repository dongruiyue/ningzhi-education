type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "brand" | "outline";
};

const variantStyles = {
  default: "bg-neutral-100 text-neutral-600",
  brand: "bg-brand/10 text-brand",
  outline: "border border-neutral-200 text-neutral-600",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
