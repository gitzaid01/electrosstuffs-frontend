import { expertiseTechStack } from "@/lib/data";

export default function TechArsenal() {
  return (
    <section className="container-px py-24 border-t border-border text-center">
      <h2 className="font-display text-3xl md:text-4xl uppercase">
        Core Technology Arsenal
      </h2>
      <p className="text-sm text-muted mt-3 max-w-md mx-auto">
        High-performance tools for building high-performance digital
        experiences.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {expertiseTechStack.map((t) => (
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