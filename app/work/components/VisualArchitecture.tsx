const slots = [
  "Admin panel — product listing view",
  "Product detail page — [slug] route",
  "Mobile responsive view",
  "Homepage hero / catalog overview",
];

export default function VisualArchitecture() {
  return (
    <section className="container-px py-20 border-t border-border">
      <h2 className="font-display text-3xl md:text-4xl uppercase text-center mb-10">
        Visual Architecture
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slots.map((label) => (
          <div
            key={label}
            className="relative aspect-[4/3] w-full rounded-lg border border-dashed border-border bg-surface flex items-center justify-center"
          >
            <span className="font-mono text-xs text-muted text-center px-6">
              {label}
              <br />
              <span className="text-muted/60">— add real screenshot —</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}