import { gsap, prefersReducedMotion } from './gsapConfig';

/**
 * Attaches a smooth reveal animation to a section container
 */
export const initSectionReveal = (element: HTMLElement | null, delay = 0) => {
  if (!element || prefersReducedMotion()) {
    if (element) {
      gsap.set(element, { opacity: 1, y: 0 });
    }
    return;
  }

  gsap.fromTo(
    element,
    { opacity: 0, y: 28 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Attaches a staggered card reveal animation
 */
export const initStaggeredCards = (
  container: HTMLElement | null,
  cardSelector: string = '.reveal-card'
) => {
  if (!container) return;

  const cards = container.querySelectorAll(cardSelector);
  if (!cards || cards.length === 0) return;

  if (prefersReducedMotion()) {
    gsap.set(cards, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    cards,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.14,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Initializes subtle floating/parallax effect
 */
export const initFloatingParallax = (
  element: HTMLElement | null,
  speed: number = 20
) => {
  if (!element || prefersReducedMotion()) return;

  gsap.to(element, {
    y: speed,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
};
