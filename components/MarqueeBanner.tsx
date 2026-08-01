const words = ["Build", "Design", "Develop", "Deploy", "Scale"];

export default function MarqueeBanner() {
  const item = (
    <span className="flex items-center font-display text-2xl md:text-3xl uppercase text-bg">
      {words.map((w) => (
        <span key={w} className="flex items-center">
          {w}
          <span className="mx-4 text-lg">•</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden bg-accent py-4 -rotate-1">
      <div className="marquee-track">
        {item}
        {item}
      </div>
    </div>
  );
}