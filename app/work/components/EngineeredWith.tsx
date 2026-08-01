import { caseStudy } from "@/lib/data";

export default function EngineeredWith() {
  return (
    <section className="container-px py-16 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-accent mb-8">
        Engineered With
      </p>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
        {caseStudy.engineeredWith.map((t) => (
          <span
            key={t}
            className="font-display text-2xl md:text-3xl uppercase text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}