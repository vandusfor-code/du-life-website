import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { About } from './components/About';
import { Privacy } from './components/Privacy';
import { Quote } from './components/Quote';
import { Contact } from './components/Contact';
import { CompanyInfo } from './components/CompanyInfo';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-main text-text-primary overflow-hidden selection:bg-primary-blue/30 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section (includes social proof badges) */}
        <Hero />

        {/* Features Grid (9 cards) */}
        <Features />

        {/* How It Works Flow (4 steps) */}
        <HowItWorks />

        {/* About Section */}
        <About />

        {/* Privacy Section */}
        <Privacy />

        {/* Philosophical Quote */}
        <Quote />

        {/* Contact Section */}
        <Contact />

        {/* Company Info (Meta Verification) */}
        <CompanyInfo />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
