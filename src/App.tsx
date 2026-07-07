import { Grain } from './components/NoiseOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ValueProps } from './components/ValueProps';
import { Problem } from './components/Problem';
import { TheShift } from './components/TheShift';
import { FeaturesGrid } from './components/FeaturesGrid';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Privacy } from './components/Privacy';
import { FinalCTA } from './components/FinalCTA';
import { CompanyInfo } from './components/CompanyInfo';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-[#0D0D11] text-[#f0f0f0] min-h-screen overflow-x-hidden relative">
      {/* Animated fine grain overlay for tactile texture */}
      <Grain />

      {/* Global Navigation Header */}
      <Navbar />

      <main>
        {/* Section 1: Hero with WhatsApp phone mockup */}
        <Hero />

        {/* Section 2: Trust bar with animated metrics */}
        <TrustBar />

        {/* Section 3: Value proposition — 3 cards */}
        <ValueProps />

        {/* Section 4: Typographic scroll-dissolve problem statement */}
        <Problem />

        {/* Section 5: Du Life vs. general AI comparison */}
        <TheShift />

        {/* Section 6: Features grid — 8 core capabilities */}
        <FeaturesGrid />

        {/* Section 7: Real product screenshots showcase */}
        <ProductShowcase />

        {/* Section 8: How it works — 3 steps with animated line */}
        <HowItWorks />

        {/* Section 9: Privacy & security trust section */}
        <Privacy />

        {/* Section 10: Final call-to-action */}
        <FinalCTA />

        {/* Section 11: Company information — required for Meta/WhatsApp Business verification */}
        <CompanyInfo />
      </main>

      {/* Footer copyright and Meta trademark note */}
      <Footer />
    </div>
  );
}

export default App;
