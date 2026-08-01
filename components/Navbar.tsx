"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { logo } from "@/assets/index";
import Image from "next/image";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Configure", href: "/configure" },
  { label: "About", href: "/about" },
//   { label: "Insights", href: "/#insights" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="container-px flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="relative h-9 w-9 shrink-0">
            <Image
              src={logo}
              alt="ElectroStuffs"
              fill
              className="object-contain"
              priority
            />
          </span>
          <span className="font-display text-lg tracking-tight">
            ElectroStuffs
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0]) &&
                  link.href.split("#")[0] !== "/";
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "text-cream border-b border-accent pb-1"
                      : "hover:text-cream transition-colors"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="h-8 w-8 flex items-center justify-center rounded-full text-muted hover:text-cream transition-colors"
          >
            {dark ? "☾" : "☀"}
          </button>
          <a
            href="/#contact"
            className="rounded-full bg-accent px-5 py-2 font-mono text-xs uppercase tracking-widest text-cream hover:opacity-90 transition-opacity"
          >
            Start Project
          </a>
        </div>
      </nav>
    </header>
  );
}