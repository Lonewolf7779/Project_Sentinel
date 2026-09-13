import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { TrustStrip } from './sections/TrustStrip';
import { WhySentinel } from './sections/WhySentinel';
import { HowItWorks } from './sections/HowItWorks';
import { SafetyIntelligence } from './sections/SafetyIntelligence';
import { ProtectionPersonnel } from './sections/ProtectionPersonnel';
import { FinalCTA } from './sections/FinalCTA';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-text-primary selection:bg-accent/20 selection:text-white font-sans font-light">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection />
        <TrustStrip />
        <WhySentinel />
        <HowItWorks />
        <SafetyIntelligence />
        <ProtectionPersonnel />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
