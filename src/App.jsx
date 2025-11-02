import Header from './components/Header';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main>
        <Hero />

        <section id="network" className="py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 sm:p-8">
              <p className="text-center text-sm uppercase tracking-wider text-neutral-500">Trusted by partners across</p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-neutral-700">
                {['Banks', 'Producers', 'Industrial', 'Shipping'].map((label) => (
                  <div key={label} className="flex items-center justify-center rounded-xl bg-amber-50 text-amber-700 py-3">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Capabilities />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
