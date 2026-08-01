import { technicalPrinciples } from "@/lib/data";

export default function TechnicalPrinciples() {
  return (
    <section className="container-px py-24 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl uppercase mb-8">
            Technical Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {technicalPrinciples.map((p) => (
              <div key={p.title}>
                <p className="font-mono text-xs uppercase tracking-widest">
                  {p.title}
                </p>
                <p className="text-sm text-muted mt-3 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-accent p-6 flex flex-col justify-between min-h-[220px]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cream/80">
            Code as Craft
          </p>
          <p className="text-cream text-sm leading-relaxed">
            Clean, documented, and modular. We treat software development as
            high-end digital manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
}