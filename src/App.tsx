import { Grain } from './components/NoiseOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { UseCasesGrid } from './components/UseCasesGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ background: '#070707', color: '#f0f0f0', overflowX: 'hidden', position: 'relative' }}>
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <UseCasesGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
