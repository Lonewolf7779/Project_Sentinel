import React, { useEffect, useRef } from 'react';
import { BadgeCheck, UserCheck, GraduationCap, Heart, Scale, Users } from 'lucide-react';
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
      status: 'Biometric & Document Validation',
      description:
        'Multi-factor identity confirmation, government-recognized credential review, and residential record confirmation.',
    },
    {
      icon: BadgeCheck,
      title: 'Background Screened',
      status: 'Civil Record Review',
      description:
        'Thorough screening across official verification channels and reputational assessment prior to network induction.',
    },
    {
      icon: GraduationCap,
      title: 'Training Verified',
      status: 'De-escalation & Awareness Mastery',
      description:
        'Certified competencies in situational awareness, conflict mediation, discrete travel accompaniment, and emergency escalation.',
    },
    {
      icon: Scale,
      title: 'Professional Conduct',
      status: 'Code of Ethics & Non-Aggression',
      description:
        'Strict commitment to courteous, non-confrontational presence that respects local traditions and mitigates tension proactively.',
    },
  ];

  return (
    <section
      id="security-professionals"
      ref={sectionRef}
      className="relative py-28 sm:py-36 border-t border-border-card bg-background overflow-hidden opacity-0"
    >
      {/* Anchor for backward compatibility with #protection */}
      <div id="protection" className="absolute -top-20" />

      <Container size="lg">
        {/* Section Header: Our Security Professionals */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <Badge variant="accent">PROFESSIONAL NETWORK STANDARDS</Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-light text-text-primary tracking-tight leading-[1.18]">
            Our Security{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-accent-hover">
              Professionals.
            </span>
          </h2>

          <p className="text-lg sm:text-xl font-light text-text-secondary leading-[1.68]">
            Security should be professional. Sentinel is establishing uncompromising benchmark criteria for every
            security professional who joins our network. We prioritize emotional intelligence, situational judgment, and quiet
            confidence over intimidation.
          </p>
        </div>

        {/* 4 Standard Cards with 1px Blue Borders & 16px Descriptions */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {standards.map((std, idx) => {
            const Icon = std.icon;
            return (
              <Card
                key={std.title}
                className="personnel-card p-7 sm:p-8 flex flex-col justify-between group"
                hoverEffect
              >
                <div>
                  <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-all duration-300">
                      <Icon className="w-5.5 h-5.5 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                    </div>
                    <span className="text-[12px] font-medium text-accent bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent-border">
                      Standard 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-normal text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {std.title}
                  </h3>

                  <div className="text-[12.5px] sm:text-[13px] uppercase tracking-wider text-accent font-medium mb-3.5">
                    {std.status}
                  </div>

                  <p className="text-[15px] sm:text-[15.5px] font-light text-text-secondary leading-[1.65]">
                    {std.description}
                  </p>
                </div>

                <div className="pt-5 mt-7 border-t border-border-card flex items-center justify-between text-[13px] text-text-muted font-normal">
                  <span>Network Requirement</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Mandatory</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Inclusivity & Diversity statement with Travel Imagery Context */}
        <div className="mt-14 rounded-2xl bg-background-surface border border-border-card overflow-hidden shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-7 sm:p-10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent-soft border border-border-card shrink-0">
                  <Heart className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-normal text-text-primary">
                    Designed for All Travelers: Male & Female Security Professionals
                  </h4>
                  <span className="text-xs uppercase tracking-widest text-accent font-medium">
                    Inclusive Safety Ethos
                  </span>
                </div>
              </div>
              <p className="text-[15px] sm:text-[16px] font-light text-text-secondary leading-[1.65] pt-2">
                Solo female travelers, visiting families, small excursion groups, and corporate delegations can request
                security professionals tailored to their personal preferences, language background, and cultural comfort.
              </p>
            </div>
            
            <div className="lg:col-span-5 h-56 lg:h-full relative overflow-hidden border-t lg:border-t-0 lg:border-l border-border-card">
              <img
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80"
                alt="Mindful travel and urban navigation in historic Mumbai"
                className="w-full h-full object-cover object-center brightness-95 dark:brightness-80 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-surface/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-[13px] text-white font-medium bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-accent" />
                  Verified Accompaniment Across India
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
