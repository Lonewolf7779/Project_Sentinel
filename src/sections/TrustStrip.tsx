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
      description: 'Multi-stage screening, identity verification, and thorough background checks.',
    },
    {
      icon: Award,
      title: 'Trained Personnel',
      description: 'Certified in situational awareness, conflict de-escalation, and discreet accompaniment.',
    },
    {
      icon: FileCheck2,
      title: 'Identity Verification',
      description: 'Biometric and documentary validation before any deployment or accompaniment.',
    },
    {
      icon: ShieldAlert,
      title: 'Professional Standards',
      description: 'Strict non-aggression ethos designed to complement civil emergency infrastructure.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 border-y border-white/[0.06] bg-[#0A0D12]/70 backdrop-blur-md opacity-0"
    >
      <Container size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-4 group p-2 rounded-xl transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/[0.05] transition-all duration-300 shrink-0">
                  <Icon className="w-5 h-5 text-accent/80 group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-text-primary tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs font-light text-text-secondary leading-relaxed">
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
