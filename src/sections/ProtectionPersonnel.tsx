import React, { useEffect, useRef } from 'react';
import { BadgeCheck, UserCheck, GraduationCap, Heart, Scale } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { initSectionReveal, initStaggeredCards } from '../animations/scrollAnimations';

export const ProtectionPersonnel: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSectionReveal(sectionRef.current);
    initStaggeredCards(cardsRef.current, '.personnel-card');
  }, []);

  const standards = [
    {
      icon: UserCheck,
      title: 'Identity Verified',
      status: 'Biometric & Document Standards',
      description:
        'Multi-factor identity confirmation, government-recognized credential inspection, and residential registry confirmation.',
    },
    {
      icon: BadgeCheck,
      title: 'Background Screened',
      status: 'Civil & Criminal Record Review',
      description:
        'Comprehensive screening with local law enforcement databases and reputational history verification before admittance.',
    },
    {
      icon: GraduationCap,
      title: 'Training Verified',
      status: 'Situational & De-escalation Mastery',
      description:
        'Certified expertise in conflict de-escalation, defensive driving, executive etiquette, and discreet accompaniment.',
    },
    {
      icon: Scale,
      title: 'Professional Conduct',
      status: 'Code of Ethics & Non-Aggression',
      description:
        'Commitment to polite, non-confrontational presence that respects local cultures and defuses tension proactively.',
    },
  ];

  return (
    <section
      id="protection"
      ref={sectionRef}
      className="relative py-28 sm:py-36 border-t border-white/[0.06] bg-[#0A0D12] overflow-hidden opacity-0"
    >
      <Container size="lg">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <Badge variant="accent">PROFESSIONAL NETWORK STANDARDS</Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary tracking-tight">
            Protection should be{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent">
              professional.
            </span>
          </h2>

          <p className="text-base sm:text-lg font-light text-text-secondary leading-relaxed">
            Sentinel is establishing uncompromising benchmark criteria for every officer who joins
            our network. We prioritize emotional intelligence, situational judgment, and quiet
            confidence over intimidation.
          </p>
        </div>

        {/* 4 Standard Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <Card
                key={std.title}
                className="personnel-card p-6 sm:p-7 flex flex-col justify-between group"
                hoverEffect
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-light text-text-muted">
                      Standard 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-normal text-text-primary mb-1 group-hover:text-white transition-colors">
                    {std.title}
                  </h3>

                  <div className="text-[11px] uppercase tracking-wider text-accent font-light mb-3">
                    {std.status}
                  </div>

                  <p className="text-xs font-light text-text-secondary leading-relaxed">
                    {std.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-text-muted font-light">
                  <span>Network Requirement</span>
                  <span className="text-emerald-400">Mandatory</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Inclusivity & Diversity statement */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/20 shrink-0">
              <Heart className="w-4 h-4 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-medium text-text-primary">
                Designed for All Travelers: Male & Female Protection Specialists
              </h4>
              <p className="text-xs font-light text-text-secondary mt-0.5">
                Female travelers, families, solo adventurers, and corporate delegations can request
                protective personnel tailored to their cultural and personal comfort.
              </p>
            </div>
          </div>
          <div className="shrink-0 text-xs font-light text-text-muted border border-white/10 px-3.5 py-1.5 rounded-full bg-white/[0.02]">
            Inclusive Safety Ethos
          </div>
        </div>
      </Container>
    </section>
  );
};
