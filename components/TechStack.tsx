
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="container-px py-20 border-t border-border text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-muted">
        Our Arsenal
      </span>
      <h2 className="font-display text-3xl md:text-4xl uppercase mt-3 mb-10">
        Engineered With Precision
      </h2>

      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}