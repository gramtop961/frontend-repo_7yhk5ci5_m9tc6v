import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[72vh] sm:h-[78vh] lg:h-[88vh] w-full overflow-hidden rounded-b-[2rem] ring-1 ring-neutral-200/40">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/40" />
        </div>

        <div className="relative h-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end sm:items-center">
            <div className="max-w-2xl pb-10 sm:pb-0">
              <p className="text-amber-300/90 text-sm font-medium uppercase tracking-wider">
                Swiss-Controlled Commodity Flows
              </p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white drop-shadow">
                Dynamic. Precise. Global.
              </h1>
              <p className="mt-4 text-neutral-200/90 text-lg">
                SUNGRAIN CH operates and finances end-to-end agro supply chains with institutional-grade
                risk, data transparency, and owned infrastructure.
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
