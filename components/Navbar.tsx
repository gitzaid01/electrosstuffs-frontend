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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function isLinkActive(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.split("#")[0]) && href.split("#")[0] !== "/";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="container-px flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
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
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isLinkActive(link.href)
                    ? "text-cream border-b border-accent pb-1"
                    : "hover:text-cream transition-colors"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="hidden sm:inline-block rounded-full bg-accent px-5 py-2 font-mono text-xs uppercase tracking-tight text-cream hover:opacity-90 transition-opacity"
          >
            Start Project
          </a>

          {/* mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border text-cream"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-px w-4 bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-px w-4 bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* mobile dropdown panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg">
          <ul className="container-px flex flex-col gap-1 py-4 font-mono text-sm uppercase tracking-widest">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 ${
                    isLinkActive(link.href) ? "text-accent" : "text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-full bg-accent px-5 py-3 text-center text-xs text-cream"
              >
                Start Project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}