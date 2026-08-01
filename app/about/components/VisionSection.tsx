import { visionColumns } from "@/lib/data";

export default function VisionSection() {
  return (
    <section className="container-px py-32 border-t border-border relative overflow-hidden text-center">
      <span
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-display text-[16vw] uppercase text-cream/5 whitespace-nowrap"
      >
        Future
      </span>

      <div className="relative">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Current Focus &amp; Vision
        </p>
        <h2 className="font-display text-4xl md:text-6xl uppercase mt-4 max-w-2xl mx-auto leading-tight">
          Redefining the Digital <span className="text-accent">Horizon.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto mt-14 text-left">
          {visionColumns.map((v) => (
            <div key={v.title} className="border-l border-accent pl-4">
              <p className="font-mono text-xs uppercase tracking-widest">
                {v.title}
              </p>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}