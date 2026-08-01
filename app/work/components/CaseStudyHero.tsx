import { caseStudy } from "@/lib/data";
import Image from "next/image";
import { ewa } from "@/assets";
export default function CaseStudyHero() {
  return (
    <section className="container-px pt-14 pb-20">
      <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-accent">
        <span className="h-px w-6 bg-accent" />
        {caseStudy.eyebrow}
      </span>

      <h1 className="font-display text-4xl md:text-5xl uppercase mt-6 max-w-2xl leading-tight">
        {caseStudy.title}: {caseStudy.headline}
      </h1>

      <p className="max-w-xl text-sm text-muted leading-relaxed mt-6">
        {caseStudy.intro}
      </p>

      <a
        href={caseStudy.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mt-10 block aspect-video w-full overflow-hidden rounded-lg  bg-surface"
      >
        {/* placeholder — swap for a real screenshot of the live site */}
        {/* <div className="absolute inset-0 flex items-center justify-center"> */}
       <Image src={ewa} alt="EWA" className="w-full " />
        

        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-accent bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Live Site
        </span>
      </a>
    </section>
  );
}