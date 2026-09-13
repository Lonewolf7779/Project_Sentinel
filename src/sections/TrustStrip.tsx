import React, { useEffect, useRef } from 'react';
import { UserCheck, Award, FileCheck2, ShieldAlert } from 'lucide-react';
import { Container } from '../components/common/Container';
import { initSectionReveal } from '../animations/scrollAnimations';

export const TrustStrip: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    initSectionReveal(sectionRef.current);
  }, []);

  const trustPillars = [
    {
      icon: UserCheck,
      title: 'Verified Professionals',
      description: 'Multi-stage screening, government identity validation, and thorough civil background checks.',
    },
    {
      icon: Award,
      title: 'Trained Personnel',
      description: 'Certified in situational awareness, conflict de-escalation, and discreet pedestrian accompaniment.',
    },
    {
      icon: FileCheck2,
      title: 'Identity Verification',
      description: 'Biometric and documentary verification before any deployment or travel accompaniment.',
    },
    {
      icon: ShieldAlert,
      title: 'Professional Standards',
      description: 'Strict non-aggression ethos designed to complement civil emergency and tourist police services.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-14 sm:py-16 border-y border-border-card bg-background-surface/70 backdrop-blur-md opacity-0"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 group p-4 sm:p-5 rounded-2xl border border-border-card hover:border-border-card-hover hover:bg-background-elevated transition-all duration-300 shadow-sm hover:shadow-card"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-[17px] font-medium text-text-primary tracking-normal group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-light text-text-secondary leading-[1.6]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
