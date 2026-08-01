import HeroSketch from "@/components/Herosketch";

export default function Hero() {
  return (
    <section className="container-px pt-14 pb-24">
      

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
        <h1 className="font-display text-[13vw] leading-[0.92] tracking-tight uppercase lg:text-[5.5rem]">
          Engineering
          <br />
          Digital
          <br />
          Experiences
        </h1>

        <div className="space-y-6 pt-4 lg:pt-6 ">
          <div className="relative rotate-0 lg:rotate-[-5deg] rounded-lg border border-border bg-surface p-4 font-mono text-[11px] text-muted">
            <span className="absolute -top-3 -right-3 inline-flex items-center gap-1.5 rounded-full border border-accent bg-bg px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent rotate-3">
              <span className="h-1.5 w-1.5 rounded-full bg-accent " />
              Live
            </span>
            <div className="flex gap-1.5 mb-3">
              <span className="h-2 w-2 rounded-full bg-accent-dim" />
              <span className="h-2 w-2 rounded-full bg-accent-dim" />
              <span className="h-2 w-2 rounded-full bg-accent-dim" />
            </div>
            <p>&gt; running_deployment.sh</p>
            <p>&gt; initializing_core_v2...</p>
            <p>&gt; stack_ready: nextjs/ts</p>
            <p className="text-accent">&gt; status: optimized</p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden  p-4">
            <HeroSketch />
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
        <div>
          <p className="max-w-md text-sm text-muted leading-relaxed">
            We are a creative technology powerhouse blending high-performance
            engineering with avant-garde aesthetics. We build the future of
            AI, immersive UX, and digital-first branding.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-cream hover:opacity-90 transition-opacity"
            >
              Build With Us
            </a>
            <a
              href="#work"
              className="rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest hover:border-accent transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}