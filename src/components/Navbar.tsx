"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = typeof window !== "undefined" && localStorage.getItem("theme");
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
        setIsDark(true);
        return;
      }
      if (saved === "light") {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
        return;
      }
      // default to system preference
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setIsDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDark(false);
      }
    } catch {
      setIsDark(false);
    }
  }, []);

  function toggleTheme() {
    try {
      const nowDark = !document.documentElement.classList.contains("dark");
      if (nowDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      setIsDark(nowDark);
    } catch (e) {
      // ignore
    }
  }

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800 w-full">
      <div className="w-full px-0">
        <div className="flex items-center justify-between h-16 w-full">
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white pl-2">
            Portfolio
          </Link>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 dark:text-white"
                      : "text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 active:scale-95 transition-colors"
            >
              {isDark ? (
                // sun icon for light (currently dark -> show sun to indicate switch)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 3v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 19v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 5l1.5 1.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 17.5L19 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 12h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 12h2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 19l1.5-1.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17.5 6.5L19 5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                // moon icon for dark (currently light -> show moon to indicate switch)
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-100" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
