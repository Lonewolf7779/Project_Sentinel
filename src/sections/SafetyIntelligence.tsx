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
        'Contextual insights into transit hubs, high-traffic pedestrian zones, and open civic spaces before arriving in new districts.',
    },
    {
      icon: Lightbulb,
      title: 'Environmental Considerations',
      description:
        'Practical guidance on transit operating hours, lighting conditions, connectivity density, and cultural customs.',
    },
    {
      icon: ShieldCheck,
      title: 'Traveler Guidance',
      description:
        'Calm, factual advisories curated by local safety professionals to help travelers make informed, sensible choices.',
    },
    {
      icon: MapPin,
      title: 'Verified Transit Corridors',
      description:
        'Recommended meeting points and transparent routes vetted for ease of access and civilian emergency responsiveness.',
    },
  ];

  return (
    <section
      id="safety"
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden opacity-0"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Narrative & Conceptual Preview */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="accent">SAFETY INTELLIGENCE</Badge>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary tracking-tight leading-tight">
              Know your surroundings{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent">
                before you arrive.
              </span>
            </h2>

            <p className="text-base font-light text-text-secondary leading-relaxed">
              True safety is rooted in awareness, not fear. Sentinel is architected to combine
              responsible, legitimate data sources with trained human verification—giving you
              objective understanding of local environments before you step outside.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-border-subtle hover:border-accent/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                      <h4 className="text-xs font-medium text-text-primary tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs font-light text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Architectural Situational Matrix Graphic */}
          <div className="lg:col-span-7">
            <SafetyMapVisual />
          </div>

        </div>
      </Container>
    </section>
  );
};
