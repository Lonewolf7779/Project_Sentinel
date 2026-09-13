import React, { useEffect, useRef } from 'react';
import { MapPin, SlidersHorizontal, Compass, ArrowRight } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { initSectionReveal, initStaggeredCards } from '../animations/scrollAnimations';

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSectionReveal(sectionRef.current);
    initStaggeredCards(stepsContainerRef.current, '.step-card');
  }, []);

  const steps = [
    {
      num: '01',
      icon: MapPin,
      title: 'Tell us about your journey',
      summary: 'Specify your itinerary, preferences, and duration.',
      details:
        'Whether embarking as a solo traveler, a visiting family, a group of friends, or a corporate executive, define your destinations, transit hubs, and expected timeline.',
    },
    {
      num: '02',
      icon: SlidersHorizontal,
      title: 'Choose your Security Professional',
      summary: 'Select verified male or female security professionals matching your needs.',
      details:
        'Choose accompaniment profiles aligned with your itinerary—from discreet city walking accompaniment in crowded markets to specialized long-distance transit coordination.',
    },
    {
      num: '03',
      icon: Compass,
      title: 'Travel with professional support',
      summary: 'Explore freely with quiet, verified accompaniment.',
      details:
        'Meet your security professional at your hotel lobby, transit terminal, or designated safe zone. Experience India with unburdened curiosity while situational awareness is maintained.',
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-28 sm:py-36 border-t border-border-subtle bg-background-secondary/50 overflow-hidden opacity-0"
    >
      {/* Background connecting light curve */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden lg:block -translate-y-12 pointer-events-none" />

      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <Badge variant="accent">HOW IT WORKS</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary tracking-tight">
            Effortless discovery and accompaniment.
          </h2>
          <p className="text-base font-light text-text-secondary leading-relaxed">
            Designed for simplicity and peace of mind. A streamlined three-step workflow ensures
            calm, verified travel support without complicated logistics.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={stepsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="step-card flex flex-col">
                <Card className="h-full flex flex-col justify-between p-8 group relative overflow-hidden">
                  {/* Step Watermark Number */}
                  <span className="absolute -top-3 -right-2 text-7xl font-light text-black/[0.04] dark:text-white/[0.02] group-hover:text-accent/[0.08] transition-colors select-none">
                    {step.num}
                  </span>

                  <div>
                    {/* Header with Icon and Step Tag */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-border-subtle group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                        <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-light text-text-muted bg-black/[0.03] dark:bg-white/[0.03] border border-border-subtle">
                        Step {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs uppercase tracking-wider text-accent font-light mb-4">
                      {step.summary}
                    </p>

                    <p className="text-sm font-light text-text-secondary leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Visual Indicator of Connection */}
                  <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted font-light">
                    <span>Phase Flow</span>
                    <span className="flex items-center gap-1 text-accent group-hover:translate-x-1 transition-transform">
                      {idx < 2 ? (
                        <>
                          <span>Next Step</span>
                          <ArrowRight className="w-3 h-3" />
                        </>
                      ) : (
                        <span>Ready to Travel</span>
                      )}
                    </span>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
