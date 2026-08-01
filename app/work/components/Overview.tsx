import { caseStudy } from "@/lib/data";

export default function Overview() {
  return (
    <section className="container-px py-20 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Project Data
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Timeline
              </p>
              <p className="text-sm mt-1">{caseStudy.projectData.timeline}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Scale
              </p>
              <p className="text-sm mt-1">{caseStudy.projectData.scale}</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
                Impact
              </p>
              <p className="text-sm mt-1">{caseStudy.projectData.impact}</p>
            </div>
          </div>

          {/* <div className="mt-10 rounded-lg border border-border bg-surface p-5">
            <p className="text-sm italic leading-relaxed">
              &ldquo;{caseStudy.testimonial.quote}&rdquo;
            </p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent mt-4">
              — {caseStudy.testimonial.name}, {caseStudy.testimonial.role}
            </p>
          </div> */}
        </div>

        <div>
          <h2 className="font-display text-4xl md:text-5xl uppercase">
            The Overview
          </h2>
          <p className="text-sm text-muted leading-relaxed mt-6 max-w-2xl">
            {caseStudy.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                The Challenge
              </p>
              <p className="text-sm text-muted leading-relaxed mt-3">
                {caseStudy.challenge}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                The Vision
              </p>
              <p className="text-sm text-muted leading-relaxed mt-3">
                {caseStudy.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}