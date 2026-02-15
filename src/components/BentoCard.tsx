import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

export function BentoCard({
  children,
  className = "",
  title,
  description,
}: BentoCardProps) {
  return (
    <div
      className={`bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900/80 transition-colors ${className}`}
    >
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {description && <p className="text-zinc-400 text-sm mb-4">{description}</p>}
      {children}
    </div>
  );
}
