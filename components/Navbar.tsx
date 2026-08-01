"use client";

import { useState } from "react";
import { logo } from "@/assets/index";
import Image from "next/image";

const links = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="container-px flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-2">
          <span className="relative h-10 w-10 shrink-0">
            <Image
              src={logo}
              alt="ElectroStuffs"
              fill
              className="object-contain"
              priority
            />
          </span>
          <span className="font-display text-lg tracking-tight">
            ElectrosStuffs
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={
                  i === 0
                    ? "text-cream border-b border-accent pb-1"
                    : "hover:text-cream transition-colors"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="h-8 w-8 flex items-center justify-center rounded-full text-muted hover:text-cream transition-colors"
          >
            {dark ? "☾" : "☀"}
          </button> */}
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 font-mono text-xs uppercase tracking-widest text-cream hover:opacity-90 transition-opacity"
          >
            Start Project
          </a>
        </div>
      </nav>
    </header>
  );
}