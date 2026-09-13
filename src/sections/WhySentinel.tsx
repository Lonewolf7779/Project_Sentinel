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
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
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

        {/* 1. Large Editorial Landscape Travel Visual (Wide 16:9 / 21:9 Aspect Ratio) */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] max-h-[460px] sm:max-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden border border-border-card shadow-card relative group">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80"
            alt="Traveler serenely walking in historic Indian monument setting"
            className="w-full h-full object-cover object-center transform scale-[1.01] group-hover:scale-105 transition-transform duration-700 brightness-[0.98] dark:brightness-90"
            loading="lazy"
          />
          
          {/* Top-Right Floating Readiness Chip */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 px-3.5 py-1.5 rounded-full bg-background-surface/90 dark:bg-slate-950/85 backdrop-blur-md border border-border-card shadow-sm flex items-center gap-2 text-[12.5px] font-medium text-text-primary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Active Readiness • 14 National Heritage Hubs</span>
          </div>

          {/* Localized Bottom-Left Editorial Glass Overlay (No Heavy Full-Image Darkening) */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-md p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0B0F17]/95 border border-border-card backdrop-blur-xl shadow-lg">
            <span className="text-[12px] uppercase tracking-wider text-accent font-medium mb-1 block">
              Mindful Travel Autonomy
            </span>
            <h4 className="text-base sm:text-lg font-medium text-slate-900 dark:text-white mb-1.5 leading-snug">
              Freedom to immerse in vibrant destinations.
            </h4>
            <p className="text-[13.5px] sm:text-[14px] font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
              Navigate historical quarters, bustling spice bazaars, and scenic promenades with genuine peace of mind.
            </p>
            <div className="pt-3 mt-3 border-t border-border-card flex items-center gap-1.5 text-[13px] text-accent font-medium">
              <CheckCircle className="w-4 h-4" />
              <span>Continuous Situational Awareness</span>
            </div>
          </div>
        </div>

        {/* 2. Four Feature Cards Arranged in a Clean, Spacious 2x2 Grid (Desktop/Tablet) & 1x4 Stack (Mobile) */}
        <div
          ref={cardsContainerRef}
          className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="reveal-card relative group p-7 sm:p-8 flex flex-col justify-between h-full"
                hoverEffect
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-all duration-300">
                      <Icon className="w-5.5 h-5.5 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                    </div>
                    <span className="text-[12.5px] font-medium text-accent bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent-border">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-[22px] font-normal text-text-primary tracking-normal mb-1.5 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[12.5px] sm:text-[13px] uppercase tracking-wider text-accent font-medium mb-3.5">
                    {item.tagline}
                  </div>
                  <p className="text-[16px] sm:text-[16.5px] font-light text-text-secondary leading-[1.68]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-7 border-t border-border-card flex items-center justify-between text-[13.5px] text-text-muted font-normal">
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
      </Container>
    </section>
  );
};
