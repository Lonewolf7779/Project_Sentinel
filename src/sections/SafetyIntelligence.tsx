import React, { useEffect, useRef } from 'react';
import { Compass, Lightbulb, MapPin, ShieldCheck } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { SafetyMapVisual } from '../components/visual/SafetyMapVisual';
import { initSectionReveal } from '../animations/scrollAnimations';

export const SafetyIntelligence: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    initSectionReveal(sectionRef.current);
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
        'Practical considerations regarding street illumination, transit operating schedules, connectivity density, and pedestrian volume.',
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
        'Transparent routes and verified meeting locations screened for convenient pedestrian access and civil emergency response access.',
    },
  ];

  return (
    <section
      id="safety"
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden border-t border-border-card bg-background-surface/30 opacity-0"
    >
      <Container size="lg">
        {/* Spacious Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left: Narrative & 2x2 Concept Cards (Generous 50% Width) */}
          <div className="lg:col-span-6 space-y-7">
            <Badge variant="accent">SAFETY INTELLIGENCE</Badge>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light text-text-primary tracking-tight leading-[1.18]">
              Know your surroundings{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-accent-hover">
                before you arrive.
              </span>
            </h2>

            <p className="text-lg sm:text-xl font-light text-text-secondary leading-[1.68]">
              True safety is rooted in awareness, not fear. Sentinel is architected to combine
              responsible, legitimate geographic data sources with certified human verification—giving you
              an objective understanding of local environments before you step outside.
            </p>

            {/* 2x2 Grid with Generous Padding, Readable 15px Copy, and 1px Blue Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-5 sm:p-6 rounded-2xl bg-background-surface border border-border-card hover:border-border-card-hover hover:bg-background-elevated transition-all duration-300 shadow-sm hover:shadow-card group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-all duration-300 mb-3.5">
                      <Icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                    </div>
                    <h4 className="text-base sm:text-[17px] font-medium text-text-primary tracking-normal mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[14px] sm:text-[15px] font-light text-text-secondary leading-[1.62]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Architectural Situational Matrix Graphic (Generous Breathing Room) */}
          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <SafetyMapVisual />
          </div>

        </div>
      </Container>
    </section>
  );
};
