import React, { useEffect, useRef } from 'react';
import { Eye, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
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
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <Badge variant="accent">WHY SENTINEL</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-text-primary tracking-tight leading-tight">
            Explore without constantly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent">
              looking over your shoulder.
            </span>
          </h2>
          <p className="text-base sm:text-lg font-light text-text-secondary leading-relaxed">
            Unfamiliar languages, dense crowds, and complex local dynamics can turn an inspiring
            journey into an anxious ordeal. Sentinel replaces anxiety with proactive, discreet
            presence—so freedom remains at the center of your travel experience.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="reveal-card relative group p-8 sm:p-10 flex flex-col justify-between"
                hoverEffect
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-border-subtle group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent group-hover:text-accent transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-light text-text-muted tracking-widest uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-normal text-text-primary tracking-wide mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs uppercase tracking-wider text-accent font-light mb-4">
                    {item.tagline}
                  </div>
                  <p className="text-sm font-light text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted font-light">
                  <span>Standard of Care</span>
                  <span className="text-accent font-normal">Active Protocol</span>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
