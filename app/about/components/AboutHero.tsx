import Link from "next/link";
import { founder } from "@/lib/data";

export default function AboutHero() {
  return (
    <section className="container-px pt-14 pb-24 relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none select-none absolute -top-4 left-0 font-display text-[10vw] uppercase text-cream/5 whitespace-nowrap"
      >
        Engineer
      </span>

      <div className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="h-px w-6 bg-accent" />
            {founder.eyebrow}
          </span>

          <h1 className="font-display text-5xl md:text-7xl uppercase mt-4 leading-[0.95]">
            {founder.name}
          </h1>

          <p className="text-sm text-muted leading-relaxed mt-6 max-w-md">
            {founder.bio}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/expertise"
              className="rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream hover:opacity-90 transition-opacity"
            >
              View Methodology
            </Link>
            <a
              href="/#contact"
              className="rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest hover:border-accent transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative aspect-[3/4] w-full max-w-xs mx-auto rounded-lg border border-dashed border-border bg-surface flex items-center justify-center">
          <span className="font-mono text-xs text-muted text-center px-6">
            Add your real photo here
            <br />
            <span className="text-muted/60">e.g. /founder.jpg</span>
          </span>
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-accent bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
            Lead Architect
          </span>
        </div>
      </div>
    </section>
  );
}