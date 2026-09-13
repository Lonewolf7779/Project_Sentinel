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
      summary: 'Specify your itinerary, preferences, and timeline.',
      details:
        'Whether embarking as a solo traveler, a visiting family, a group of friends, or a corporate executive, define your destinations, transit hubs, and expected timeline.',
    },
    {
      num: '02',
      icon: SlidersHorizontal,
      title: 'Choose the security professional who fits your needs',
      summary: 'Select verified male or female professionals matching your context.',
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
      className="relative py-28 sm:py-36 border-t border-border-card bg-background-secondary/50 overflow-hidden opacity-0"
    >
      {/* Background connecting light curve */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent hidden lg:block -translate-y-12 pointer-events-none" />

      <Container size="lg">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <Badge variant="accent">HOW IT WORKS</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary tracking-tight">
            Effortless discovery and accompaniment.
          </h2>
          <p className="text-lg sm:text-xl font-light text-text-secondary leading-[1.68]">
            Designed for simplicity and peace of mind. A streamlined three-step workflow ensures
            calm, verified travel support without complicated logistics.
          </p>
        </div>

        {/* Steps Grid with Refined Blue Borders & Highly Readable Text */}
        <div
          ref={stepsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="step-card flex flex-col">
                <Card className="h-full flex flex-col justify-between p-8 sm:p-9 group relative overflow-hidden" hoverEffect>
                  {/* Step Watermark Number */}
                  <span className="absolute -top-3 -right-2 text-7xl font-light text-black/[0.04] dark:text-white/[0.03] group-hover:text-accent/[0.1] transition-colors select-none">
                    {step.num}
                  </span>

                  <div>
                    {/* Header with Icon and Step Tag */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-all duration-300">
                        <Icon className="w-5.5 h-5.5 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[13px] font-medium text-accent bg-accent-soft border border-accent-border">
                        Step {step.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-normal text-text-primary mb-2.5 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-[13px] sm:text-[14px] uppercase tracking-wider text-accent font-medium mb-4">
                      {step.summary}
                    </p>

                    <p className="text-[15px] sm:text-[16px] font-light text-text-secondary leading-[1.65]">
                      {step.details}
                    </p>
                  </div>

                  {/* Visual Indicator of Connection */}
                  <div className="pt-6 mt-8 border-t border-border-card flex items-center justify-between text-[13px] sm:text-[14px] text-text-muted font-normal">
                    <span>Phase Flow</span>
                    <span className="flex items-center gap-1.5 text-accent font-medium group-hover:translate-x-1.5 transition-transform">
                      {idx < 2 ? (
                        <>
                          <span>Next Step</span>
                          <ArrowRight className="w-3.5 h-3.5" />
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
