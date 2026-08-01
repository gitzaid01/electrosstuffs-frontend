import Link from "next/link";
import { clientWork, ownProjects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="container-px py-24 border-t border-border">
      <span className="font-mono text-xs uppercase tracking-widest text-accent">
        Showcase
      </span>
      <h2 className="font-display text-5xl md:text-6xl uppercase mt-3 mb-14">
        Client
        <br />
        Work
      </h2>

      <Link
        href="/work/ewa-transglobal"
        className="group block rounded-lg border border-border bg-surface p-6 lg:p-10 hover:border-accent transition-colors"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              {clientWork.tagline}
            </p>
            <h3 className="font-display text-3xl md:text-4xl uppercase mt-3">
              {clientWork.title}
            </h3>
          </div>
          <span className="font-display text-3xl md:text-4xl text-border shrink-0">
            {clientWork.year}
          </span>
        </div>

        <p className="text-sm text-muted leading-relaxed mt-4 max-w-md">
          {clientWork.desc}
        </p>

        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-wrap gap-2">
            {clientWork.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
              >
                {t}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent group-hover:gap-3 transition-all shrink-0 ml-6">
            View Case Study
            <span aria-hidden>→</span>
          </span>
        </div>
      </Link>

      <div className="mt-20">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          In-House
        </span>
        <h3 className="font-display text-2xl md:text-3xl uppercase mt-2 mb-6">
          Products We Own
        </h3>

        {ownProjects.map((p) => (
          <div
            key={p.id}
            className="rounded-lg border border-border bg-surface p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h4 className="font-display text-xl uppercase">{p.name}</h4>
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent mt-1">
                {p.tagline}
              </p>
              <p className="text-sm text-muted mt-3 max-w-md">{p.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}