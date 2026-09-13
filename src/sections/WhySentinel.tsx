import React, { useEffect, useRef } from 'react';
import { Eye, ShieldCheck, HeartHandshake, Sparkles, Compass } from 'lucide-react';
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
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          <Badge variant="accent">WHY SENTINEL</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-light text-text-primary tracking-tight leading-[1.18]">
            Explore without constantly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-accent to-accent-hover">
              looking over your shoulder.
            </span>
          </h2>
          <p className="text-lg sm:text-xl font-light text-text-secondary leading-[1.68]">
            Unfamiliar languages, dense crowds, and complex local dynamics can turn an inspiring
            journey into an anxious ordeal. Sentinel replaces anxiety with proactive, discreet
            presence—so freedom remains at the center of your travel experience.
          </p>
        </div>

        {/* 4 Cards Grid with Refined Blue Borders & Larger Typography */}
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
                  <div className="flex items-center justify-between mb-7">
                    <div className="flex items-center justify-center w-13 h-13 rounded-2xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                    </div>
                    <span className="text-[13px] font-medium text-accent bg-accent-soft px-3 py-1 rounded-full border border-accent-border tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-text-primary tracking-normal mb-2.5 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-[13px] sm:text-[14px] uppercase tracking-wider text-accent font-medium mb-4">
                    {item.tagline}
                  </div>
                  <p className="text-[15.5px] sm:text-[16.5px] font-light text-text-secondary leading-[1.68]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-border-card flex items-center justify-between text-[13px] sm:text-[14px] text-text-muted font-normal">
                  <span className="flex items-center gap-1.5 text-text-secondary">
                    <Compass className="w-4 h-4 text-accent" />
                    Standard of Care
                  </span>
                  <span className="text-accent font-medium">Active Protocol</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Supporting Travel Context Photographic Banner */}
        <div className="mt-14 relative rounded-2xl overflow-hidden border border-border-card shadow-card group">
          <div className="relative h-48 sm:h-56 w-full">
            <img
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
              alt="Travelers serenely walking in historic Indian monument setting"
              className="w-full h-full object-cover object-center brightness-[0.9] dark:brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-surface/95 via-background-surface/80 to-transparent p-6 sm:p-8 flex flex-col justify-center max-w-xl">
              <span className="text-xs uppercase tracking-widest text-accent font-medium mb-1">
                Mindful Travel Experience
              </span>
              <h4 className="text-lg sm:text-xl font-normal text-text-primary mb-2">
                Curated freedom across India's most vibrant destinations.
              </h4>
              <p className="text-[14px] sm:text-[15px] font-light text-text-secondary line-clamp-2">
                Navigate historical landmarks, bustling spice bazaars, and cultural promenades with ease and full personal autonomy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
