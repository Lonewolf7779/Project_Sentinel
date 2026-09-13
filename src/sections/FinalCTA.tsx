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
      className="relative py-32 sm:py-44 overflow-hidden border-t border-border-card opacity-0"
    >
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[600px] h-[350px] bg-gradient-to-t from-accent/15 via-accent/5 to-transparent rounded-full blur-3xl opacity-80" />
      </div>

      <Container size="md">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-20 text-center bg-gradient-to-b from-background-surface via-background-surface/98 to-background-secondary/95 border border-border-card hover:border-accent/40 shadow-card-hover backdrop-blur-2xl transition-all duration-300">
          {/* Eyebrow */}
          <div className="inline-block mb-6">
            <Badge variant="accent">UNBURDENED HORIZONS</Badge>
          </div>

          {/* Cinematic Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light text-text-primary tracking-tight leading-[1.15] max-w-2xl mx-auto mb-6">
            Your journey is yours.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-accent-hover block sm:inline">
              Travel it with confidence.
            </span>
          </h2>

          {/* Description (Readable 18px–20px) */}
          <p className="text-lg sm:text-xl font-light text-text-secondary max-w-2xl mx-auto leading-[1.68] mb-10">
            Discover historic landmarks, vibrant street markets, and remote destinations with the
            reassurance of verified, discreet security professionals. Sentinel is building the future of
            mindful travel support.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#security-professionals">
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-4.5 h-4.5" />}
              >
                Find a Security Professional
              </Button>
            </a>
            <a href="#why-sentinel">
              <Button
                variant="secondary"
                size="lg"
                icon={<Compass className="w-4.5 h-4.5 text-accent" />}
                iconPosition="left"
              >
                Learn More
              </Button>
            </a>
          </div>

          {/* Trust note */}
          <div className="mt-12 pt-8 border-t border-border-card flex items-center justify-center gap-2 text-[13px] sm:text-[14px] font-normal text-text-muted">
            <ShieldCheck className="w-4.5 h-4.5 text-accent" />
            <span>Phase 1 Concept • Professional Travel Support Standards for India</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
