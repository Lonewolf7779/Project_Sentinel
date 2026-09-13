import React, { useEffect, useRef } from 'react';
import { BadgeCheck, UserCheck, GraduationCap, Scale, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

  const verificationPoints = [
    'Male & female professionals available on request',
    'Mandatory civil background & biometric check',
    'Calm de-escalation & conflict mitigation protocols',
    'Discreet, low-profile accompaniment without intimidation',
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

                  <p className="text-[16px] font-light text-text-secondary leading-[1.68]">
                    {std.description}
                  </p>
                </div>

                <div className="pt-5 mt-7 border-t border-border-card flex items-center justify-between text-[13px] sm:text-[14px] text-text-muted font-normal">
                  <span>Network Requirement</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Mandatory</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Expansive Editorial Showcase: Inclusivity & Accompaniment (48/52 Balance) */}
        <div className="mt-16 rounded-3xl bg-background-surface border border-border-card hover:border-accent/40 overflow-hidden shadow-card transition-all duration-500 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Area (58% / 7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <Badge variant="accent">INCLUSIVE NETWORK CAPABILITY</Badge>
                  <span className="text-[13px] text-accent font-medium hidden sm:inline">• Verified Accompaniment</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-light text-text-primary tracking-tight leading-[1.22]">
                  Accompaniment designed around your{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-accent-hover font-normal">
                    comfort and dignity.
                  </span>
                </h3>

                <p className="text-[16px] sm:text-[17px] font-light text-text-secondary leading-[1.7] pt-1">
                  Solo female travelers, visiting families, small excursion groups, and corporate delegations can request
                  security professionals tailored to their personal preferences, language background, and cultural comfort.
                  Accompaniment remains subtle, unobtrusive, and dedicated to peaceful exploration.
                </p>
              </div>

              {/* Verification Checklist Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {verificationPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-background-secondary/60 border border-border-card text-[14px] font-normal text-text-primary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Reassurance Banner */}
              <div className="pt-6 border-t border-border-card flex flex-wrap items-center justify-between gap-3 text-[13.5px] text-text-muted font-normal">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Zero-intimidation standard • Proactive situational de-escalation</span>
                </div>
                <span className="text-accent font-medium">14 Major Travel Regions</span>
              </div>
            </div>

            {/* Right Visual Area (42% / 5 cols) - Expansive, High-Resolution Indian Travel Imagery */}
            <div className="lg:col-span-5 min-h-[380px] sm:min-h-[440px] lg:min-h-full relative overflow-hidden border-t lg:border-t-0 lg:border-l border-border-card bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80"
                alt="Mindful travel and urban navigation in historic Mumbai"
                className="w-full h-full object-cover object-center brightness-[0.98] contrast-[1.02] group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              
              {/* Floating Top Telemetry Pill */}
              <div className="absolute top-5 right-5 z-10 px-3.5 py-1.5 rounded-full bg-background-surface/90 dark:bg-slate-950/85 backdrop-blur-md border border-border-card shadow-sm flex items-center gap-2 text-[12.5px] font-medium text-text-primary">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Verified Accompaniment Live</span>
              </div>

              {/* Bottom Overlay with Caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[12px] uppercase tracking-widest text-sky-400 font-medium">
                  <Users className="w-3.5 h-3.5 text-accent" />
                  <span>Network Readiness</span>
                </div>
                <p className="text-[14px] text-white/90 font-light leading-snug">
                  Supporting solo travelers, couples, and visiting families with certified local security professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
