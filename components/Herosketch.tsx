export default function HeroSketch() {
  return (
    <svg
      viewBox="0 0 420 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* stray curved corner bracket, top left */}
      <path
        d="M20 90 V45 Q20 20 45 20 H175"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="90" r="3" fill="var(--color-accent)" />
      <circle cx="45" cy="20" r="3" fill="var(--color-accent)" />
      <circle cx="110" cy="20" r="3" fill="var(--color-accent)" />
      <circle cx="175" cy="20" r="3" fill="var(--color-accent)" />

      {/* dashed connector with cursor, mid left */}
      <path
        d="M60 120 C 85 145, 105 145, 130 120"
        stroke="var(--color-accent)"
        strokeWidth="1.25"
        strokeDasharray="3 5"
        strokeLinecap="round"
      />
      <circle cx="60" cy="120" r="4" stroke="var(--color-accent)" strokeWidth="1.25" fill="none" />
      <circle cx="130" cy="120" r="7" stroke="var(--color-accent)" strokeWidth="1.5" fill="none" />
      <circle cx="130" cy="120" r="2" fill="var(--color-accent)" />

      {/* cursor arrow pointing toward the browser window */}
      <path
        d="M188 168 L206 176 L196 180 L200 190 Z"
        fill="var(--color-accent)"
      />

      {/* browser / window mockup, right side */}
      <g stroke="var(--color-accent)" strokeWidth="1.25">
        <rect x="182" y="12" width="222" height="230" rx="6" />
        <line x1="182" y1="42" x2="404" y2="42" />
        <circle cx="200" cy="27" r="2.5" />
        <circle cx="212" cy="27" r="2.5" />
        <circle cx="224" cy="27" r="2.5" />
        <rect x="205" y="60" width="176" height="160" />
        <line x1="205" y1="90" x2="381" y2="90" />
        <line x1="205" y1="140" x2="330" y2="140" />
        <line x1="205" y1="170" x2="360" y2="170" />
      </g>

      {/* keyboard cluster, bottom left */}
      <g stroke="var(--color-accent)" strokeWidth="1.25">
        <rect x="18" y="150" width="34" height="34" rx="4" />
        <rect x="60" y="150" width="34" height="34" rx="4" />
        <rect x="102" y="150" width="34" height="34" rx="4" />
        <rect x="144" y="150" width="34" height="34" rx="4" />
        <rect x="18" y="192" width="34" height="34" rx="4" />
        <rect x="60" y="192" width="76" height="34" rx="4" />
        <rect x="144" y="192" width="34" height="34" rx="4" />
      </g>
      <text x="28" y="164" fontSize="7" fill="var(--color-accent)" fontFamily="monospace">a</text>
      <text x="30" y="176" fontSize="9" fill="var(--color-accent)" fontFamily="monospace">1</text>
      <text x="70" y="164" fontSize="7" fill="var(--color-accent)" fontFamily="monospace">"</text>
      <text x="72" y="176" fontSize="9" fill="var(--color-accent)" fontFamily="monospace">2</text>
      <text x="112" y="164" fontSize="7" fill="var(--color-accent)" fontFamily="monospace">'</text>
      <text x="114" y="176" fontSize="9" fill="var(--color-accent)" fontFamily="monospace">3</text>
      <text x="154" y="164" fontSize="7" fill="var(--color-accent)" fontFamily="monospace">$</text>
      <text x="156" y="176" fontSize="9" fill="var(--color-accent)" fontFamily="monospace">4</text>
      <text x="26" y="212" fontSize="8" fill="var(--color-accent)" fontFamily="monospace">Q</text>
      <text x="90" y="212" fontSize="8" fill="var(--color-accent)" fontFamily="monospace">W · E</text>
      <text x="152" y="212" fontSize="8" fill="var(--color-accent)" fontFamily="monospace">R</text>

      {/* scroll down cue */}
    
      {/* <line x1="24" y1="282" x2="24" y2="304" stroke="var(--color-cream)" strokeWidth="1.5" /> */}
      {/* <path d="M18 298 L24 306 L30 298" stroke="var(--color-cream)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /> */}

      {/* crosshair, bottom right */}
      <g stroke="var(--color-muted)" strokeWidth="1">
        <line x1="392" y1="285" x2="392" y2="305" />
        <line x1="382" y1="295" x2="402" y2="295" />
        <circle cx="392" cy="295" r="8" />
      </g>
    </svg>
  );
}