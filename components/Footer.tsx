const quickLinks = ["Work", "Expertise", "About Us", "Insights", "Contact"];
import Image from "next/image";
import {background} from "@/assets/index";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface overflow-hidden">
      <div className="container-px py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-xl">ElectroStuffs</p>
          <p className="text-sm text-muted mt-3 max-w-xs">
            A global creative engineering studio crafting high-impact digital
            products for industry leaders.
          </p>
          <div className="flex gap-4 mt-6 font-mono text-xs uppercase tracking-widest text-muted">
            <a href="#" className="hover:text-cream">Instagram</a>
            <a href="#" className="hover:text-cream">Twitter</a>
            <a href="#" className="hover:text-cream">LinkedIn</a>
            <a href="#" className="hover:text-cream">Behance</a>
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            Quick Links
          </p>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-accent transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            Office
          </p>
          <p className="text-sm text-muted">
            22nd Floor, Cyber Plaza
            <br />
            Berlin, DE 10117
          </p>
          <p className="text-sm text-muted mt-3">
            +49 30 1234 5678
            <br />
            hello@electrostuffs.tech
          </p>
        </div>
      </div>

      <div className="container-px flex flex-col md:flex-row items-center justify-between gap-2 py-6 font-mono text-[11px] uppercase tracking-widest text-muted">
        <span>© 2026 ElectroStuffs. All rights reserved. Engineered for the future.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-cream">Privacy</a>
          <a href="#" className="hover:text-cream">Terms</a>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none select-none font-display uppercase text-[18vw] leading-none text-cream/5 text-center "
      >
      <Image src={background} alt="ElectroStuffs" className="w-full " />
      </p>
    </footer>
  );
}