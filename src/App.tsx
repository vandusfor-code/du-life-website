import { Grain } from './components/NoiseOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { TheShift } from './components/TheShift';
import { Timeline } from './components/Timeline';
import { KnowledgeGraph } from './components/KnowledgeGraph';
import { MemorySearch } from './components/MemorySearch';
import { TheExperience } from './components/TheExperience';
import { UseCasesGrid } from './components/UseCasesGrid';
import { Privacy } from './components/Privacy';
import { Testimonials } from './components/Testimonials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-[#020202] text-[#f0f0f0] min-h-screen overflow-x-hidden relative">
      {/* Animated fine grain overlay for tactile texture */}
      <Grain />
      
      {/* Global Navigation Header */}
      <Navbar />
      
      <main>
        {/* Section 1: Hero with floating memory particle canvas */}
        <Hero />
        
        {/* Section 2: Typographic scroll-dissolve word problem */}
        <Problem />
        
        {/* Section 3: Dual column AI memory comparison shift */}
        <TheShift />
        
        {/* Section 4: Vertical scrolling year timeline */}
        <Timeline />
        
        {/* Section 5: Dynamic interactive canvas knowledge node graph */}
        <KnowledgeGraph />
        
        {/* Section 6: Tabbed WhatsApp search query responder simulator */}
        <MemorySearch />
        
        {/* Section 7: Media ingestion pipeline (audio, docs, photos) */}
        <TheExperience />
        
        {/* Section 7b: Detailed dialogue stats, voice waveforms, and PDF invoice mockup */}
        <UseCasesGrid />
        
        {/* Section 8: Zero-knowledge encryption trust presentation */}
        <Privacy />
        
        {/* Section 9: Narrative-driven narrative testimonials */}
        <Testimonials />
        
        {/* Section 10: Massive typography final call-to-action */}
        <FinalCTA />
      </main>
      
      {/* Footer copyright and Meta warnings */}
      <Footer />
    </div>
  );
}

export default App;
