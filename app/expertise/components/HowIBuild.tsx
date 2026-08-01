import { buildPrinciples } from "@/lib/data";

export default function HowIBuild() {
  return (
    <section className="container-px py-24 border-t border-border">
      <h2 className="font-display text-5xl md:text-6xl uppercase mb-14">
        How I Build
        <br />
        Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
        {buildPrinciples.map((p) => (
          <div key={p.id}>
            <span className="font-mono text-xs text-accent">{p.id}</span>
            <h3 className="font-display text-lg uppercase mt-3">{p.title}</h3>
            <p className="text-sm text-muted mt-3 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}