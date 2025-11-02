export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[72vh] sm:h-[78vh] lg:h-[88vh] w-full overflow-hidden rounded-b-[2rem] ring-1 ring-neutral-200/40 bg-neutral-950">
        {/* Scene layer */}
        <div className="absolute inset-0">
          {/* Stylized port illustration (SVG) representing a barge being loaded with grain */}
          <svg
            viewBox="0 0 1440 900"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            role="img"
            aria-label="Stylized port scene with barge loading grain"
          >
            {/* Night sky gradient */}
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0b0f14" />
                <stop offset="70%" stopColor="#0e141a" />
                <stop offset="100%" stopColor="#0f1317" />
              </linearGradient>
              <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3a3f46" />
                <stop offset="50%" stopColor="#616870" />
                <stop offset="100%" stopColor="#2a2f35" />
              </linearGradient>
              <linearGradient id="glass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b9d3ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#86a2d6" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="grain" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f8d57a" />
                <stop offset="100%" stopColor="#cfa84a" />
              </linearGradient>
              <linearGradient id="hull" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1b232a" />
                <stop offset="100%" stopColor="#0f1418" />
              </linearGradient>
              <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0a1b27" />
                <stop offset="100%" stopColor="#07202e" />
              </linearGradient>
              {/* glow */}
              <radialGradient id="glow" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#ffd36b" stopOpacity="0.25" />
                <stop offset="70%" stopColor="#ffd36b" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#ffd36b" stopOpacity="0" />
              </radialGradient>
              {/* Wave path for repetition */}
              <path id="wave" d="M0 0 C 60 -18, 120 18, 180 0 S 300 -18, 360 0 S 480 18, 540 0 S 660 -18, 720 0" />
              {/* Grain particles symbol */}
              <symbol id="grainDot">
                <circle r="2.2" fill="#f2c65a" />
              </symbol>
              {/* Subtle noise mask to add texture */}
              <filter id="noise" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                  <feFuncA type="table" tableValues="0 0.06" />
                </feComponentTransfer>
              </filter>
            </defs>

            {/* Background sky */}
            <rect x="0" y="0" width="1440" height="900" fill="url(#sky)" />
            <rect x="0" y="0" width="1440" height="900" fill="url(#glow)" />

            {/* Distant port skyline */}
            <g opacity="0.4">
              <rect x="60" y="280" width="220" height="120" fill="url(#metal)" />
              <rect x="310" y="260" width="160" height="140" fill="url(#metal)" />
              <rect x="510" y="300" width="120" height="100" fill="url(#metal)" />
              <rect x="660" y="270" width="210" height="130" fill="url(#metal)" />
              <rect x="900" y="290" width="170" height="110" fill="url(#metal)" />
              <rect x="1100" y="250" width="210" height="150" fill="url(#metal)" />
            </g>

            {/* Water */}
            <rect x="0" y="560" width="1440" height="340" fill="url(#water)" />
            {/* Repeating animated waves */}
            <g transform="translate(0, 620)" opacity="0.55">
              <g fill="none" stroke="#0f3245" strokeWidth="2">
                <use href="#wave">
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="-720 0" dur="12s" repeatCount="indefinite" />
                </use>
                <use href="#wave" y="22">
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="-720 0" dur="18s" repeatCount="indefinite" />
                </use>
                <use href="#wave" y="44">
                  <animateTransform attributeName="transform" type="translate" from="0 0" to="-720 0" dur="24s" repeatCount="indefinite" />
                </use>
              </g>
            </g>

            {/* Barge/ship hull */}
            <g transform="translate(140, 575)">
              <path d="M0 0 L760 0 L700 40 L60 40 Z" fill="url(#hull)" stroke="#1c262d" strokeWidth="2" />
              {/* Hull trim line */}
              <rect x="10" y="10" width="720" height="3" fill="#27323a" opacity="0.8" />
              {/* Cargo hold with glass-like cover */}
              <rect x="140" y="-80" width="420" height="80" rx="8" fill="url(#glass)" stroke="#6b7b89" strokeOpacity="0.5" />
              {/* Company mark */}
              <text x="24" y="28" fill="#9fb4c8" fontSize="18" fontFamily="Inter, system-ui, -apple-system, Segoe UI">SUNGRAIN CH</text>
            </g>

            {/* Grain loading crane */}
            <g transform="translate(860, 270)">
              {/* Silo */}
              <rect x="-40" y="40" width="120" height="220" rx="8" fill="url(#metal)" stroke="#2a3238" strokeWidth="2" />
              <rect x="-35" y="50" width="110" height="46" rx="6" fill="#1e242a" opacity="0.8" />
              {/* Conveyor arm */}
              <g>
                <rect x="70" y="60" width="280" height="18" rx="6" fill="url(#metal)" />
                <rect x="70" y="78" width="280" height="6" fill="#21282e" opacity="0.7" />
                {/* Slight oscillation to suggest activity */}
                <animateTransform attributeName="transform" type="rotate" from="-2 70 60" to="2 70 60" dur="6s" repeatCount="indefinite" values="-2 70 60; 2 70 60; -2 70 60" />
              </g>
              {/* Discharge chute */}
              <rect x="340" y="60" width="18" height="120" rx="6" fill="url(#metal)" />
              {/* Grain stream */}
              <g>
                <path d="M349 180 C 346 220, 320 250, 300 265 C 270 285, 230 300, 200 305" fill="none" stroke="url(#grain)" strokeWidth="10" strokeLinecap="round" opacity="0.75" />
                {/* Grain particles falling */}
                {Array.from({ length: 14 }).map((_, i) => {
                  const delay = i * 0.45;
                  const startY = 120;
                  const endY = 300;
                  return (
                    <g key={i} transform={`translate(349, ${startY})`} opacity={0.9}>
                      <use href="#grainDot">
                        <animate attributeName="opacity" values="0;1;1;0" dur="3.6s" begin={`${delay}s`} repeatCount="indefinite" />
                        <animateTransform attributeName="transform" type="translate" from={`0 0`} to={`-160 ${endY - startY}`} dur="3.6s" begin={`${delay}s`} repeatCount="indefinite" />
                      </use>
                    </g>
                  );
                })}
              </g>
            </g>

            {/* Foreground pier elements for depth */}
            <g opacity="0.9">
              {/* Pier */}
              <rect x="820" y="520" width="420" height="40" fill="#1b232a" />
              <rect x="840" y="500" width="18" height="60" fill="#1b232a" />
              <rect x="980" y="500" width="18" height="60" fill="#1b232a" />
              <rect x="1120" y="500" width="18" height="60" fill="#1b232a" />
              {/* Lamps with subtle glow */}
              {[880, 1020, 1160].map((x, idx) => (
                <g key={idx}>
                  <rect x={x} y={440} width="6" height="60" fill="#2a3238" />
                  <circle cx={x + 3} cy={438} r="10" fill="#ffd36b" opacity="0.85">
                    <animate attributeName="opacity" values="0.6;0.85;0.6" dur="4s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </g>

            {/* Texture overlay */}
            <rect x="0" y="0" width="1440" height="900" filter="url(#noise)" opacity="0.15" />
          </svg>

          {/* Top/bottom gradient veneers to keep content readable and premium */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/30" />
        </div>

        {/* Content layer */}
        <div className="relative h-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end sm:items-center">
            <div className="max-w-2xl pb-10 sm:pb-0">
              <p className="text-amber-300/90 text-sm font-medium uppercase tracking-wider">
                Swiss-Controlled Commodity Flows
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow">
                Precision Logistics. Real Assets.
              </h1>
              <p className="mt-4 text-neutral-200/90 text-lg">
                Barge, terminal, and rail capacity integrated into a single risk-managed platform. SUNGRAIN CH
                finances, operates, and optimizes end-to-end agro supply chains.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#network"
                  className="inline-flex items-center rounded-full bg-white/95 px-5 py-3 text-neutral-900 shadow-sm hover:bg-white"
                >
                  See How the Network Operates
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-neutral-900/80 px-5 py-3 text-white ring-1 ring-white/20 hover:bg-neutral-900"
                >
                  Request Institutional Briefing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
