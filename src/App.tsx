import { NoiseOverlay } from './components/NoiseOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { UseCasesGrid } from './components/UseCasesGrid';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#070707] text-white overflow-x-hidden selection:bg-white/10 selection:text-white">
      {/* Subtle paper-like grain texture across the viewport */}
      <NoiseOverlay />

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Orchestrated Sections */}
      <main>
        {/* The Greeting & Checklist Hero */}
        <Hero />

        {/* The Interactive Scroll-Linked Storytelling Section */}
        <StorySection />

        {/* Bento Grid of Real-world Use Cases */}
        <UseCasesGrid />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
