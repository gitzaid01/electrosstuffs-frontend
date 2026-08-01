import { philosophy, technicalEvolution } from "@/lib/data";

export default function Philosophy() {
  return (
    <section className="container-px py-24 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <h2 className="font-display text-4xl md:text-5xl uppercase leading-tight">
          {philosophy.headline.split(" ").map((w, i) =>
            w.toLowerCase().startsWith("electrostuffs") ? (
              <span key={i} className="text-accent">
                {w}{" "}
              </span>
            ) : (
              <span key={i}>{w} </span>
            )
          )}
        </h2>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">
            The Philosophy
          </p>
          <p className="text-sm text-muted leading-relaxed italic">
            &ldquo;{philosophy.quote}&rdquo;
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {philosophy.principles.map((p) => (
              <div key={p.title}>
                <p className="font-mono text-[11px] uppercase tracking-widest">
                  {p.title}
                </p>
                <p className="text-sm text-muted mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Milestones
            </p>
            <h3 className="font-display text-3xl md:text-4xl uppercase mt-2">
              Technical Evolution
            </h3>
          </div>
          <span className="hidden sm:block font-mono text-xs text-muted">
            2019 — Present
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalEvolution.map((m) => (
            <div
              key={m.id}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <p className="font-mono text-xs text-accent">{m.id}</p>
              <h4 className="font-display text-lg uppercase mt-2">
                {m.title}
              </h4>
              <p className="text-sm text-muted mt-3 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}