"use client";

import { BentoGrid } from "@/components/BentoGrid";
import { BentoCard } from "@/components/BentoCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faXTwitter,
  faGithub,
  faReact,
  faNodeJs,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopy, faCheck, faWind, faCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("initeyen@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-full px-6 sm:px-8 lg:px-10 py-6">
        <BentoGrid>
          <BentoCard 
            className="md:col-span-2 lg:col-span-1 md:row-span-2"
            title="Kennedy Michael"
            description="Full Stack Developer & Technical Writer"
          >
            <p className="text-zinc-600 dark:text-zinc-300">
              Passionate about building impactful software and sharing knowledge through writing.
            </p>
          </BentoCard>
          
          <BentoCard title="Project 1" description="A cool project I worked on">
            <p className="text-zinc-600 dark:text-zinc-300">Details about this project...</p>
          </BentoCard>
          
          <BentoCard title="Project 2" description="Another awesome project">
            <p className="text-zinc-600 dark:text-zinc-300">Details about this project...</p>
          </BentoCard>
          
          <BentoCard title="Skill 1" description="Expertise in this area">
            <p className="text-zinc-600 dark:text-zinc-300">Information about this skill...</p>
          </BentoCard>
          
          <BentoCard title="Skill 2" description="Another area of expertise">
            <p className="text-zinc-600 dark:text-zinc-300">Information about this skill...</p>
          </BentoCard>
          
          <BentoCard title="About" description="Get to know me better">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-2xl" aria-hidden>🥔</div>
              <div>
                <p className="text-zinc-600 dark:text-zinc-300">I'm a passionate full stack developer who loves creating elegant solutions to complex problems. With experience in modern web technologies, I focus on building user-centric applications that make an impact.</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard title="Got a project in mind?" description="" className="!p-3 w-max self-start">
            <div className="flex items-center gap-3">
              <p className="text-zinc-600 dark:text-zinc-300">Have a project idea? I'd love to hear about it.</p>
              <div className="flex items-center gap-2">
                <button onClick={copyEmail} className="inline-flex items-center gap-2 px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition">
                  <FontAwesomeIcon icon={copied ? faCheck : faCopy} className="text-xs text-zinc-600 dark:text-zinc-300" />
                  <span>{copied ? "Copied" : "Copy email"}</span>
                </button>
              </div>
            </div>
          </BentoCard>

          <BentoCard title="" description="" className="!p-2 w-max self-start flex items-center justify-center lg:col-start-3 lg:row-start-1">
            <div className="flex items-center gap-1.5">
              <BentoCard className="!p-0 w-8 h-8 flex items-center justify-center">
                <a href="https://wa.me/2347043386543" target="_blank" rel="noopener noreferrer" className="group w-full h-full flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-sm text-zinc-600 dark:text-zinc-300 transition group-hover:text-emerald-500 dark:group-hover:text-emerald-400" />
                </a>
              </BentoCard>

              <BentoCard className="!p-0 w-8 h-8 flex items-center justify-center">
                <a href="mailto:initeyen@gmail.com" target="_blank" rel="noopener noreferrer" className="group w-full h-full flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                  <FontAwesomeIcon icon={faEnvelope} className="text-sm text-zinc-600 dark:text-zinc-300 transition group-hover:text-amber-500 dark:group-hover:text-amber-400" />
                </a>
              </BentoCard>

              <BentoCard className="!p-0 w-8 h-8 flex items-center justify-center">
                <a href="https://www.instagram.com/90sp0tat0?utm_source=qr&igsh=ZXRoaXpmY2FjZm10" target="_blank" rel="noopener noreferrer" className="group w-full h-full flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                  <FontAwesomeIcon icon={faInstagram} className="text-sm text-zinc-600 dark:text-zinc-300 transition group-hover:text-pink-500 dark:group-hover:text-pink-400" />
                </a>
              </BentoCard>

              <BentoCard className="!p-0 w-8 h-8 flex items-center justify-center">
                <a href="https://x.com/PotatoKennedy" target="_blank" rel="noopener noreferrer" className="group w-full h-full flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                  <FontAwesomeIcon icon={faXTwitter} className="text-sm text-zinc-600 dark:text-zinc-300 transition group-hover:text-sky-500 dark:group-hover:text-sky-400" />
                </a>
              </BentoCard>

              <BentoCard className="!p-0 w-8 h-8 flex items-center justify-center">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group w-full h-full flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                  <FontAwesomeIcon icon={faGithub} className="text-sm text-zinc-600 dark:text-zinc-300 transition group-hover:text-zinc-900 dark:group-hover:text-zinc-100" />
                </a>
              </BentoCard>
            </div>
          </BentoCard>

          <BentoCard title="Stacks used" description="" className="lg:col-start-3 lg:row-start-2 lg:-mt-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="group flex items-center gap-2 px-2 py-1 bg-zinc-100 dark:bg-zinc-900/60 rounded transition transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-sky-400/10">
                <FontAwesomeIcon icon={faReact} className="text-sm text-blue-600 dark:text-blue-400 transition group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300 transition group-hover:text-zinc-900 dark:group-hover:text-zinc-100">React</span>
              </div>

              <div className="group flex items-center gap-2 px-2 py-1 bg-zinc-100 dark:bg-zinc-900/60 rounded transition transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-sky-400/10">
                <FontAwesomeIcon icon={faJsSquare} className="text-sm text-blue-600 dark:text-yellow-400 transition group-hover:text-blue-700 dark:group-hover:text-yellow-300" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300 transition group-hover:text-zinc-900 dark:group-hover:text-zinc-100">Next.js</span>
              </div>

              <div className="group flex items-center gap-2 px-2 py-1 bg-zinc-100 dark:bg-zinc-900/60 rounded transition transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-sky-400/10">
                <FontAwesomeIcon icon={faCode} className="text-sm text-blue-600 dark:text-sky-400 transition group-hover:text-blue-700 dark:group-hover:text-sky-300" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300 transition group-hover:text-zinc-900 dark:group-hover:text-zinc-100">TypeScript</span>
              </div>

              <div className="group flex items-center gap-2 px-2 py-1 bg-zinc-100 dark:bg-zinc-900/60 rounded transition transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-sky-400/10">
                <FontAwesomeIcon icon={faWind} className="text-sm text-blue-600 dark:text-cyan-300 transition group-hover:text-blue-700 dark:group-hover:text-cyan-200" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300 transition group-hover:text-zinc-900 dark:group-hover:text-zinc-100">Tailwind</span>
              </div>

              <div className="group flex items-center gap-2 px-2 py-1 bg-zinc-100 dark:bg-zinc-900/60 rounded transition transform hover:scale-105 hover:bg-blue-50 dark:hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-sky-400/10">
                <FontAwesomeIcon icon={faNodeJs} className="text-sm text-blue-600 dark:text-green-400 transition group-hover:text-blue-700 dark:group-hover:text-green-300" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300 transition group-hover:text-zinc-900 dark:group-hover:text-zinc-100">Node</span>
              </div>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </main>
  );
}