import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { TravelerProtectionScene } from '../components/visual/TravelerProtectionScene';
import { HeroAtmosphere } from '../components/visual/HeroAtmosphere';
import { playHeroEntrance } from '../animations/heroAnimations';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const atmosphereRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const ambientBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = playHeroEntrance({
      atmosphereRef: atmosphereRef.current,
      eyebrowRef: eyebrowRef.current,
      headlineLines: [line1Ref.current, line2Ref.current],
      descriptionRef: descriptionRef.current,
      ctasRef: ctasRef.current,
      visualRef: visualRef.current,
      ambientBadgeRef: ambientBadgeRef.current,
    });

    return () => {
      ctx?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen pt-32 sm:pt-40 pb-20 flex items-center overflow-hidden"
    >
      <div ref={atmosphereRef}>
        <HeroAtmosphere />
      </div>

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-7 text-left">
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="inline-block opacity-0">
              <Badge variant="accent">PROJECT SENTINEL • INDIA</Badge>
            </div>

            {/* Cinematic Lightweight Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.12] text-text-primary">
              <span ref={line1Ref} className="block opacity-0">
                Professional travel support
              </span>
              <span
                ref={line2Ref}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-text-primary via-text-secondary to-accent opacity-0"
              >
                for every journey.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              ref={descriptionRef}
              className="text-base sm:text-lg font-light text-text-secondary leading-relaxed max-w-xl opacity-0"
            >
              Travel freely with access to verified, professionally trained security
              professionals who accompany you and help you navigate unfamiliar environments with
              greater confidence and uncompromised peace of mind.
            </p>

            {/* Action CTAs */}
            <div
              ref={ctasRef}
              className="flex flex-wrap items-center gap-4 pt-2 opacity-0"
            >
              <a href="#security-professionals">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Find a Security Professional
                </Button>
              </a>
              <a href="#how-it-works">
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<Compass className="w-4 h-4 text-text-secondary" />}
                  iconPosition="left"
                >
                  How Sentinel Works
                </Button>
              </a>
            </div>

            {/* Discrete Micro Trust Indicator */}
            <div
              ref={ambientBadgeRef}
              className="pt-6 border-t border-border-subtle flex items-center gap-6 text-xs text-text-muted font-light opacity-0"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Strict De-escalation Standards</span>
              </div>
              <div className="h-3 w-[1px] bg-border-subtle" />
              <div>
                <span>Male & Female Security Professionals</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Freedom & Security */}
          <div ref={visualRef} className="lg:col-span-6 xl:col-span-6 opacity-0">
            <TravelerProtectionScene />
          </div>

        </div>
      </Container>
    </section>
  );
};
