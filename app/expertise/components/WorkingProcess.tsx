import { workingProcessSteps } from "@/lib/data";

export default function WorkingProcess() {
  return (
    <section className="container-px pb-24">
      <div className=" bg-surface p-8 md:p-14">
        <h2 className="font-display text-2xl md:text-3xl uppercase text-center mb-10">
          Working Process
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {workingProcessSteps.map((s) => (
            <div
              key={s.id}
              className="rounded-md border border-border p-4"
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                {s.id}. {s.tag}
              </p>
              <p className="text-sm mt-2">{s.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="font-display text-3xl md:text-5xl uppercase leading-tight">
            Ready to build something{" "}
            <span className="text-accent">meaningful?</span>
            <br />
            Let&apos;s discuss your next product.
          </h3>

          <a
            href="/#contact"
            className="inline-block mt-8 rounded-full bg-accent px-8 py-4 font-mono text-xs uppercase tracking-widest text-cream hover:opacity-90 transition-opacity"
          >
            Initiate Project
          </a>
        </div>
      </div>
    </section>
  );
}