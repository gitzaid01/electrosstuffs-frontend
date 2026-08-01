import { services } from "@/lib/data";

function ServiceIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "globe":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
        </svg>
      );
    case "device":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case "spark":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.5 4.5l4 4M15.5 15.5l4 4M19.5 4.5l-4 4M8.5 15.5l-4 4" />
        </svg>
      );
    case "chip":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="12" height="12" rx="1.5" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </svg>
      );
    case "phone":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="2" width="10" height="20" rx="2.5" />
          <path d="M10 5h4" />
          <circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
    case "rocket":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2c3 2 5 6 5 10a5 5 0 0 1-10 0c0-4 2-8 5-10Z" />
          <path d="M9 16l-3 5M15 16l3 5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="container-px py-24 ">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Our Capabilities
          </span>
          <h2 className="font-display text-5xl md:text-6xl uppercase mt-3 text-accent">
            Core
            <br />
            Services
          </h2>
        </div>
        <p className="max-w-xs text-sm text-muted">
          Pushing the boundaries of what&apos;s possible with code, design, and
          artificial intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {services.map((s) =>
          "isFeatureCard" in s && s.isFeatureCard ? (
            <div
              key={s.id}
              className="relative bg-surface p-8 flex flex-col justify-between min-h-[280px] overflow-hidden"
            >
              <div>
                <div className="h-10 w-10 rounded-full bg-surface-2 flex items-center justify-center text-accent">
                  <ServiceIcon name={s.icon} />
                </div>
                <h3 className="font-display text-xl uppercase mt-8">{s.title}</h3>
                <p className="text-sm text-muted mt-3 max-w-xs">{s.desc}</p>
              </div>
              <div className="mt-6 rounded-md border border-border bg-surface-2 p-3 font-mono text-[10px] text-muted">
                <div className="flex items-center justify-between mb-2">
                  <span>network_map_v2.svg</span>
                  <span className="h-2 w-2 rounded-full bg-accent" />
                </div>
                <div className="h-1.5 w-3/4 rounded bg-border mb-1.5" />
                <div className="h-1.5 w-1/2 rounded bg-border" />
              </div>
            </div>
          ) : (
            <div
              key={s.id}
              className="bg-surface p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-full bg-surface-2 flex items-center justify-center text-accent">
                  <ServiceIcon name={s.icon} />
                </div>
                <span className="font-display text-4xl text-border">{s.id}</span>
              </div>
              <div>
                <h3 className="font-display text-xl uppercase">{s.title}</h3>
                <p className="text-sm text-muted mt-3">{s.desc}</p>
                <div className="flex gap-2 mt-5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}