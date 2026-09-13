import React, { useEffect, useRef } from 'react';
import { Eye, ShieldCheck, HeartHandshake, Sparkles, Compass, CheckCircle } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { initSectionReveal, initStaggeredCards } from '../animations/scrollAnimations';

export const WhySentinel: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initSectionReveal(sectionRef.current);
    initStaggeredCards(cardsContainerRef.current, '.reveal-card');
  }, []);

  const pillars = [
    {
      icon: Eye,
      title: 'Professional Presence',
      tagline: 'Discreet deterrence & situational focus',
      description:
        'A trained, calm professional by your side naturally mitigates vulnerability, reduces aggressive solicitation, and observes surroundings so you do not have to.',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Personnel',
      tagline: 'Strict multi-layer vetting',
      description:
        'Every security professional is thoroughly vetted with identity checks, civil record verifications, and character assessment before joining the Sentinel network.',
    },
    {
      icon: Sparkles,
      title: 'Travel Confidence',
      tagline: 'Unburdened exploration',
      description:
        'Visit crowded heritage bazaars, remote architectural sites, or evening cultural venues with genuine autonomy, knowing someone reliable has your perimeter covered.',
    },
    {
      icon: HeartHandshake,
      title: 'Responsible Assistance',
      tagline: 'De-escalation & emergency bridge',
      description:
        'Focused on diplomacy, respect, and peaceful resolution. Trained to navigate civil bureaucracy and promptly escalate to local authorities when warranted.',
    },
  ];

  return (
    <section
      id="why-sentinel"
      ref={sectionRef}
      className="relative py-28 sm:py-36 overflow-hidden opacity-0"
    >
      <Container size="lg">
        {/* Section Header with Generous Width & Breathing Room */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          <Badge variant="accent">WHY SENTINEL</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-light text-text-primary tracking-tight leading-[1.18]">
            Explore without constantly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-accent-hover">
              looking over your shoulder.
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-light text-text-secondary leading-[1.7]">
            Unfamiliar languages, dense crowds, and complex local dynamics can turn an inspiring
            journey into an anxious ordeal. Sentinel replaces anxiety with proactive, discreet
            presence—so freedom remains at the center of your travel experience.
          </p>
        </div>

        {/* Balanced Two-Column Editorial Composition: Visual Anchor ↔ Cohesive 4-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Rich Cinematic Travel Visual (Eliminating Dead Space) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[440px] sm:min-h-[520px] rounded-2xl overflow-hidden border border-border-card shadow-card group flex flex-col justify-end">
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
                alt="Traveler serenely walking in historic Indian monument setting"
                className="absolute inset-0 w-full h-full object-cover object-center transform scale-[1.01] group-hover:scale-105 transition-transform duration-700 brightness-100 dark:brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

              {/* High-Contrast Editorial Glass Overlay */}
              <div className="relative z-10 m-5 sm:m-6 p-6 rounded-xl bg-white/95 dark:bg-[#0B0F17]/95 border border-border-card backdrop-blur-xl shadow-lg">
                <span className="text-[12px] uppercase tracking-wider text-accent font-medium mb-1.5 block">
                  Mindful Travel Autonomy
                </span>
                <h4 className="text-lg sm:text-xl font-medium text-slate-900 dark:text-white mb-2 leading-snug">
                  Freedom to immerse in vibrant Indian destinations.
                </h4>
                <p className="text-[14.5px] sm:text-[15px] font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                  Navigate historical quarters, bustling spice bazaars, and scenic promenades with genuine peace of mind.
                </p>
                <div className="pt-3.5 mt-3.5 border-t border-border-card flex items-center justify-between text-[13px] text-accent font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4" />
                    Continuous Situational Awareness
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Coherent 4-Card Grid with 16px-17px Descriptions & 1px Blue Borders */}
          <div
            ref={cardsContainerRef}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
          >
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="reveal-card relative group p-6 sm:p-7 flex flex-col justify-between"
                  hoverEffect
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-all duration-300">
                        <Icon className="w-5.5 h-5.5 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                      </div>
                      <span className="text-[12.5px] font-medium text-accent bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent-border">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-normal text-text-primary tracking-normal mb-1.5 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-[12.5px] sm:text-[13px] uppercase tracking-wider text-accent font-medium mb-3">
                      {item.tagline}
                    </div>
                    <p className="text-[15px] sm:text-[16px] font-light text-text-secondary leading-[1.68]">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-border-card flex items-center justify-between text-[13px] text-text-muted font-normal">
                    <span className="flex items-center gap-1.5 text-text-secondary">
                      <Compass className="w-3.5 h-3.5 text-accent" />
                      Standard of Care
                    </span>
                    <span className="text-accent font-medium">Active Protocol</span>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
};
