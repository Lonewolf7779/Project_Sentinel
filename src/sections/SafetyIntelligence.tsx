import React, { useEffect, useRef } from 'react';
import { Compass, Lightbulb, MapPin, ShieldCheck } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { SafetyMapVisual } from '../components/visual/SafetyMapVisual';
import { initSectionReveal, initStaggeredCards } from '../animations/scrollAnimations';

export const SafetyIntelligence: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const conceptCardsRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSectionReveal(sectionRef.current);
    initStaggeredCards(conceptCardsRef.current, '.concept-card');
    if (matrixRef.current) {
      initSectionReveal(matrixRef.current);
    }
  }, []);

  const features = [
    {
      icon: Compass,
      title: 'Area Awareness',
      description:
        'Contextual orientation regarding pedestrian hubs, open civic plazas, and reliable meeting corridors before entering new neighborhoods.',
    },
    {
      icon: Lightbulb,
      title: 'Environmental Considerations',
      description:
        'Practical guidance regarding street illumination, transit operating schedules, connectivity density, and pedestrian volume.',
    },
    {
      icon: ShieldCheck,
      title: 'Traveler Guidance',
      description:
        'Calm, factual advisories curated by local safety professionals to empower informed, respectful, and self-assured navigation.',
    },
    {
      icon: MapPin,
      title: 'Verified Transit Corridors',
      description:
        'Transparent routes and verified meeting locations screened for convenient pedestrian access and civil emergency responsiveness.',
    },
  ];

  return (
    <section
      id="safety"
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden border-t border-border-card bg-background-surface/40 opacity-0"
    >
      <Container size="lg">
        {/* =========================================================
            ZONE 1: SAFETY INTRODUCTION & SUPPORTING CONCEPT CARDS
            ========================================================= */}
        <div className="max-w-4xl space-y-5">
          <Badge variant="accent">SAFETY INTELLIGENCE</Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-light text-text-primary tracking-tight leading-[1.16]">
            Know your surroundings{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-accent-hover">
              before you arrive.
            </span>
          </h2>

          <p className="text-lg sm:text-xl font-light text-text-secondary max-w-3xl leading-[1.7]">
            True safety is rooted in awareness, not fear. Sentinel is architected to combine
            responsible, legitimate geographic data sources with certified human verification—giving you
            an objective understanding of local environments before you step outside.
          </p>
        </div>

        {/* 4 Supporting Concept Cards in a Clean 2x2 Grid (Desktop/Tablet) & 1x4 Stack (Mobile) */}
        <div
          ref={conceptCardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-14"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="concept-card p-7 sm:p-8 rounded-2xl bg-background-surface border border-border-card hover:border-accent/60 hover:bg-background-elevated transition-all duration-300 shadow-card group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-all duration-300 mb-5">
                    <Icon className="w-5.5 h-5.5 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-lg sm:text-xl font-normal text-text-primary tracking-normal mb-2.5 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[15.5px] sm:text-[16px] font-light text-text-secondary leading-[1.68]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            DELIBERATE TRANSITION & DIVIDER BETWEEN ZONES
            ========================================================= */}
        <div className="my-16 sm:my-24 relative flex items-center justify-center">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute px-4 py-1 rounded-full bg-background-surface border border-border-card text-[11px] sm:text-[12px] uppercase tracking-widest text-accent font-medium shadow-sm">
            Live Spatial Preview
          </div>
        </div>

        {/* =========================================================
            ZONE 2: SITUATIONAL ENVIRONMENTAL MATRIX (FULL WIDTH)
            ========================================================= */}
        <div ref={matrixRef} className="w-full">
          <SafetyMapVisual />
        </div>
      </Container>
    </section>
  );
};
