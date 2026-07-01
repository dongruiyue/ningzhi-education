import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-sm",
  secondary:
    "bg-neutral-900 text-white hover:bg-neutral-800",
  ghost:
    "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200";

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
