import { gsap, prefersReducedMotion } from './gsapConfig';

export interface HeroAnimationElements {
  atmosphereRef?: HTMLElement | null;
  eyebrowRef?: HTMLElement | null;
  headlineLines?: (HTMLElement | null)[];
  descriptionRef?: HTMLElement | null;
  ctasRef?: HTMLElement | null;
  visualRef?: HTMLElement | null;
  ambientBadgeRef?: HTMLElement | null;
}

export const playHeroEntrance = (elements: HeroAnimationElements) => {
  if (prefersReducedMotion()) {
    // Graceful fallback for reduced motion: instantaneous or simple fade
    gsap.set(
      [
        elements.atmosphereRef,
        elements.eyebrowRef,
        elements.headlineLines,
        elements.descriptionRef,
        elements.ctasRef,
        elements.visualRef,
        elements.ambientBadgeRef,
      ].filter(Boolean),
      { opacity: 1, y: 0 }
    );
    return gsap.timeline();
  }

  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
  });

  // 1. Background atmosphere fades in gently
  if (elements.atmosphereRef) {
    tl.fromTo(
      elements.atmosphereRef,
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.4, ease: 'power1.out' },
      0
    );
  }

  // 2. Eyebrow fades upward
  if (elements.eyebrowRef) {
    tl.fromTo(
      elements.eyebrowRef,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.2
    );
  }

  // 3. Headline reveals line-by-line with quiet confidence
  if (elements.headlineLines && elements.headlineLines.length > 0) {
    const validLines = elements.headlineLines.filter(Boolean);
    tl.fromTo(
      validLines,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power2.out',
      },
      0.35
    );
  }

  // 4. Supporting text fades upward
  if (elements.descriptionRef) {
    tl.fromTo(
      elements.descriptionRef,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.7
    );
  }

  // 5. CTA buttons appear
  if (elements.ctasRef) {
    tl.fromTo(
      elements.ctasRef,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.85
    );
  }

  // 6. Hero visual gradually reveals
  if (elements.visualRef) {
    tl.fromTo(
      elements.visualRef,
      { opacity: 0, y: 24, scale: 0.98 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power2.out' },
      0.5
    );
  }

  // 7. Ambient badge reveals
  if (elements.ambientBadgeRef) {
    tl.fromTo(
      elements.ambientBadgeRef,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.8 },
      0.95
    );
  }

  return tl;
};
