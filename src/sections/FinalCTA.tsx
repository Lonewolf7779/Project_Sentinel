import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { initSectionReveal } from '../animations/scrollAnimations';

export const FinalCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    initSectionReveal(sectionRef.current);
  }, []);

  return (
    <section
      id="travelers"
      ref={sectionRef}
      className="relative py-32 sm:py-44 overflow-hidden border-t border-white/[0.06] opacity-0"
    >
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[350px] bg-gradient-to-t from-accent/[0.06] to-transparent rounded-full blur-3xl opacity-80" />
      </div>

      <Container size="md">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-20 text-center bg-gradient-to-b from-[#111722]/80 to-[#0A0D12]/95 border border-white/[0.08] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
          {/* Eyebrow */}
          <div className="inline-block mb-6">
            <Badge variant="accent">UNBURDENED HORIZONS</Badge>
          </div>

          {/* Cinematic Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-text-primary tracking-tight leading-[1.15] max-w-2xl mx-auto mb-6">
            Your journey is yours.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-secondary to-accent block sm:inline">
              Travel it with confidence.
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg font-light text-text-secondary max-w-xl mx-auto leading-relaxed mb-10">
            Discover historic landmarks, vibrant street markets, and remote destinations with the
            reassurance of verified, discreet accompaniment. Sentinel is building the future of
            mindful travel security.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#protection">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Find Protection
              </Button>
            </a>
            <a href="#why-sentinel">
              <Button
                variant="secondary"
                size="lg"
                icon={<Compass className="w-4 h-4 text-text-secondary" />}
                iconPosition="left"
              >
                Learn More
              </Button>
            </a>
          </div>

          {/* Trust note */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex items-center justify-center gap-2 text-xs font-light text-text-muted">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span>Phase 1 Concept • Professional Protective Standards for India</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
