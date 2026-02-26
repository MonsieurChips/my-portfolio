"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 w-full">
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16 w-full">
          <Link href="/" className="text-3xl font-bold text-zinc-900 dark:text-white pl-4">
            Portfolio
          </Link>
          <div className="flex items-center space-x-6 pr-4">
            <div className="flex space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 dark:text-white"
                      : "text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
