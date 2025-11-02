import { Shield, Building2, Globe2, LineChart, Layers, Server, Lock } from 'lucide-react';

const pillars = [
  {
    icon: Shield,
    title: 'Risk & Compliance',
    text: 'Trade finance, KYC/AML and counterparty risk managed to Swiss governance standards.',
  },
  {
    icon: Building2,
    title: 'Owned Infrastructure',
    text: 'Terminals, storage, and rail links ensure predictable throughput and cost control.',
  },
  {
    icon: Globe2,
    title: 'Global Coverage',
    text: 'Origination in key producing regions with delivery to EMEA and APAC demand centers.',
  },
  {
    icon: LineChart,
    title: 'Data-Driven',
    text: 'Position, basis, and freight are monitored continuously for real-time decisioning.',
  },
];

const capabilities = [
  {
    icon: Layers,
    title: 'Grain & Oilseeds',
    text: 'Wheat, corn, barley, sunflower complex and specialty crops under structured programs.',
  },
  {
    icon: Server,
    title: 'Logistics & Storage',
    text: 'Elevation, consolidation, quality control and long/short-term storage solutions.',
  },
  {
    icon: Lock,
    title: 'Risk Management',
    text: 'Basis, futures and options execution aligned to institutional hedging policies.',
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Capabilities</h2>
          <p className="mt-3 text-neutral-600">
            Designed for banks, producers and industrial consumers who require reliability, scale and
            clear governance.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
              <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-medium text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{text}</p>
            </div>
          ))}
        </div>

        <div id="about" className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
              <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-medium text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
