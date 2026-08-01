export default function ExpertiseHero() {
  return (
    <section className="container-px pt-14 pb-24">
      <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
        <span className="h-px w-6 bg-accent" />
        Engineering Experience
      </span>

      <h1 className="font-display text-[13vw] leading-[0.95] tracking-tight uppercase mt-6 lg:text-[5rem]">
        Engineering
        <br />
        Beyond
        <br />
        Websites
      </h1>

      <p className="max-w-lg text-sm text-muted leading-relaxed mt-8">
        Every product is built on years of solving real-world engineering
        challenges — from healthcare integrations and communication systems
        to browser extensions and large-scale content platforms.
      </p>

      <a
        href="#journey"
        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-cream transition-colors mt-8"
      >
        <span aria-hidden>↓</span>
        Scroll to Explore
      </a>
    </section>
  );
}