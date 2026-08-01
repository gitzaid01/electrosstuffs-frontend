import { caseStudy } from "@/lib/data";

function CoreIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "layers":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
        </svg>
      );
    case "gauge":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v3M4 12H1M23 12h-3M6 6l2 2M18 6l-2 2" />
          <circle cx="12" cy="14" r="7" />
          <path d="M12 14l3-3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ProcessSection() {
  const step = caseStudy.processSteps[0];

  return (
    <section className="container-px py-20 border-t border-border">
      <div className="rounded-lg border border-accent border-dashed p-8 md:p-12">
        <p className="font-mono text-xs text-accent">{step.id}</p>
        <h2 className="font-display text-3xl md:text-4xl uppercase mt-2">
          {step.title}
        </h2>
        <p className="text-sm text-muted leading-relaxed mt-4 max-w-2xl">
          {step.desc}
        </p>

        <h3 className="font-display text-2xl md:text-3xl uppercase mt-16 mb-8">
          Engineering Core
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudy.engineeringCore.map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="h-9 w-9 rounded-full bg-surface-2 flex items-center justify-center text-accent">
                <CoreIcon name={c.icon} />
              </div>
              <h4 className="font-display text-lg uppercase mt-4">
                {c.title}
              </h4>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}