import { useEffect, useRef, useState } from 'react';

function useCounter(to, duration = 1200) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    let raf;
    const step = (ts) => {
      if (startRef.current === null) startRef.current = ts;
      const progress = Math.min(1, (ts - startRef.current) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  return value;
}

const items = [
  { label: 'Annual Throughput (mt)', value: 5200, suffix: 'k+' },
  { label: 'Countries Served', value: 32, suffix: '' },
  { label: 'Storage Capacity (mt)', value: 800, suffix: 'k+' },
  { label: 'Counterparties', value: 140, suffix: '+' },
];

function CounterItem({ label, value, suffix }) {
  const v = useCounter(value);
  return (
    <div className="text-center">
      <div className="text-4xl font-semibold tracking-tight text-neutral-900">
        {v}
        <span className="text-amber-500">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-neutral-600">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-white to-amber-50 ring-1 ring-neutral-200 p-6 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((it) => (
              <CounterItem key={it.label} label={it.label} value={it.value} suffix={it.suffix} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
