import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A modern developer portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          // set initial theme as early as possible to avoid flash
          dangerouslySetInnerHTML={{
            __html: `try{(function(){var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark');}})()}catch(e){};`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 m-0 p-0`}
        suppressHydrationWarning
      >
        <div className="w-full m-0 p-0">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
