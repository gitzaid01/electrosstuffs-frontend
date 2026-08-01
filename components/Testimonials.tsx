import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const t = testimonials[0];

  return (
    <section className="container-px py-24 border-t border-border">
      <div className="flex justify-end mb-2">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          Feedback
        </span>
      </div>
      <h2 className="font-display text-5xl md:text-6xl uppercase text-right mb-14">
        Client
        <br />
        Echo
      </h2>

      <div className="max-w-2xl ml-auto rounded-lg   text-right">
        <span className="font-display text-4xl text-accent">&ldquo;&rdquo;</span>
        <p className="text-lg md:text-xl leading-relaxed">{t.quote}</p>
        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-widest">{t.name}</p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted mt-1">
            {t.role}
          </p>
        </div>
      </div>
    </section>
  );
}