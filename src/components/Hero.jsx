import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-amber-50/50 pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
              Swiss-Controlled Commodity Flows
            </h1>
            <p className="mt-5 max-w-xl text-neutral-600 text-lg">
              SUNGRAIN CH is a Switzerland-based agro-trading house owning and operating logistics
              infrastructure. We partner with institutions and corporates to move essential crops with
              precision, transparency, and scale.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-white shadow-sm hover:bg-neutral-800"
              >
                Request a Briefing
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center rounded-full bg-white px-5 py-3 text-neutral-900 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50"
              >
                Explore Capabilities
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { label: 'Owned Assets', value: 'Ports & Storage' },
                { label: 'Coverage', value: 'EMEA & APAC' },
                { label: 'Governance', value: 'Swiss Standards' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/80 ring-1 ring-neutral-200 p-4">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">{item.label}</dt>
                  <dd className="mt-1 font-medium text-neutral-900">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[560px] rounded-3xl overflow-hidden ring-1 ring-neutral-200 bg-white">
              <Spline
                scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
