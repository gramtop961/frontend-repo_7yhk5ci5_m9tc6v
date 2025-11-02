import { Truck, Package, Building2, Ship } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Truck,
    title: 'Collection & Origination',
    text: 'Structured programs with producers; fleet mobilization and first-mile quality checks.',
  },
  {
    icon: Package,
    title: 'Consolidation',
    text: 'Aggregation at regional hubs with grading, fumigation and custody documentation.',
  },
  {
    icon: Building2,
    title: 'Elevation & Storage',
    text: 'Owned or controlled terminals ensure throughput, conditioning and cost control.',
  },
  {
    icon: Ship,
    title: 'Export & Delivery',
    text: 'Ocean freight execution and just-in-time delivery to EMEA/APAC demand centers.',
  },
];

export default function Network() {
  return (
    <section id="network" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            How Our Network Operates
          </h2>
          <p className="mt-3 text-neutral-600">
            A controlled, end-to-end chain with visibility on basis, quality and freight at every node.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 items-center">
          <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
            <motion.svg
              viewBox="0 0 600 300"
              className="w-full h-[260px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <defs>
                <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#111827" />
                </linearGradient>
              </defs>
              {/* Path */}
              <motion.path
                d="M20 250 C 120 180, 200 200, 300 150 S 480 100, 580 60"
                fill="none"
                stroke="url(#flow)"
                strokeWidth="6"
                strokeLinecap="round"
                variants={{
                  hidden: { pathLength: 0 },
                  visible: { pathLength: 1, transition: { duration: 2, ease: 'easeOut' } },
                }}
              />
              {/* Moving dot */}
              <motion.circle
                r="7"
                fill="#f59e0b"
                variants={{
                  hidden: { pathLength: 0 },
                  visible: {
                    pathLength: 1,
                    transition: { duration: 2, ease: 'easeOut' },
                  },
                }}
              >
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath xlinkHref="#flowPath" />
                </animateMotion>
              </motion.circle>
              {/* Invisible path to bind motion */}
              <path id="flowPath" d="M20 250 C 120 180, 200 200, 300 150 S 480 100, 580 60" fill="none" />

              {/* Nodes */}
              {[{ x: 20, y: 250 }, { x: 220, y: 190 }, { x: 360, y: 130 }, { x: 580, y: 60 }].map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r="6" fill="#111827" />
                  <circle cx={p.x} cy={p.y} r="4" fill="#f59e0b" />
                </g>
              ))}
            </motion.svg>
            <p className="mt-3 text-sm text-neutral-600">
              Animated flow illustrates origination to export across our controlled network.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {steps.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
                <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-medium text-neutral-900">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
