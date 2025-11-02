import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Network from './components/Network';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />

      <main>
        <Hero />

        <Stats />
        <Network />
        <ContactFooter />
      </main>
    </div>
  );
}

export default App;
