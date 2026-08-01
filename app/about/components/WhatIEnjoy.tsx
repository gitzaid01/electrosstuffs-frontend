import { enjoyBuilding } from "@/lib/data";

function EnjoyIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "radar":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 12 4 7" />
          <path d="M12 3a9 9 0 1 0 9 9" />
          <path d="M12 7a5 5 0 1 0 5 5" />
        </svg>
      );
    case "grid":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "stack":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3 3 8l9 5 9-5-9-5Z" />
          <path d="M3 13l9 5 9-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function WhatIEnjoy() {
  return (
    <section className="container-px py-24 border-t border-border">
      <p className="font-mono text-xs uppercase tracking-widest text-muted">
        What I Enjoy
      </p>
      <h2 className="font-display text-3xl md:text-4xl uppercase mt-2 mb-12">
        Building
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {enjoyBuilding.map((e) => (
          <div key={e.title} className="border-t border-border pt-6">
            <div className="h-9 w-9 rounded-full bg-surface-2 flex items-center justify-center text-accent">
              <EnjoyIcon name={e.icon} />
            </div>
            <h3 className="font-display text-lg uppercase mt-4">{e.title}</h3>
            <p className="text-sm text-muted mt-2 leading-relaxed">
              {e.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}