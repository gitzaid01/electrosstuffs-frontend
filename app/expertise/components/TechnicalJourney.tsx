import { journeyMilestones } from "@/lib/data";

export default function TechnicalJourney() {
  return (
    <section id="journey" className="container-px py-24 border-t border-border">
      <h2 className="font-display text-4xl md:text-5xl uppercase mb-3">
        The Technical Journey
      </h2>
      <p className="text-sm text-muted mb-16">
        A timeline of architectural breakthroughs and complex system
        deployments.
      </p>

      <div className="relative">
        {/* center line, desktop only */}
        <div
          aria-hidden
          className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
        />

        <div className="space-y-10 md:space-y-16">
          {journeyMilestones.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={m.id} className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
                {/* dot on the center line, desktop only */}
                <span
                  aria-hidden
                  className="hidden md:block absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2"
                />

                <div className={isEven ? "md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="rounded-lg border border-border bg-surface p-6">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                      {m.id}. {m.tag}
                    </p>
                    <h3 className="font-display text-xl uppercase mt-2">
                      {m.title}
                    </h3>
                    <p className="text-sm text-muted mt-3">{m.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}