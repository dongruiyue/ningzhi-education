type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-white border border-neutral-100 rounded-2xl p-8 ${hover ? "hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
