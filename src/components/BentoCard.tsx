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
      className={`bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-none ${className}`}
    >
      {title && <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">{title}</h3>}
      {description && <p className="text-zinc-600 dark:text-zinc-400 text-base mb-4">{description}</p>}
      {children}
    </div>
  );
}
