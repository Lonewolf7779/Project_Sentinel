import React, { useEffect, useRef, useState } from 'react';
import { Shield, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { gsap } from '../../animations/gsapConfig';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        backgroundColor: isScrolled ? 'rgba(9, 11, 14, 0.9)' : 'rgba(9, 11, 14, 0)',
        borderBottomColor: isScrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [isScrolled]);

  const navLinks = [
    { label: 'Protection', href: '#protection' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Safety', href: '#safety' },
    { label: 'For Travelers', href: '#travelers' },
  ];

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-colors border-b border-transparent py-4 sm:py-5"
    >
      <Container size="lg">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-accent/40 transition-colors duration-300">
              <Shield className="w-4 h-4 text-accent stroke-[1.5]" />
              <div className="absolute inset-0 rounded-lg bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg tracking-[0.2em] font-normal text-text-primary group-hover:text-white transition-colors">
                SENTINEL
              </span>
              <span className="text-[9px] tracking-[0.25em] text-text-muted font-light uppercase">
                Travel Protection
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-light text-text-secondary">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-text-primary transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              className="text-xs sm:text-sm font-light text-text-secondary hover:text-text-primary px-3 py-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-md"
            >
              Sign In
            </button>
            <a href="#protection">
              <Button
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Find Protection
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-primary bg-white/[0.04] border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl bg-[#0E1217]/95 border border-white/10 p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <ul className="flex flex-col gap-3.5 pb-4 border-b border-white/10 text-sm font-light text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-4">
              <button
                type="button"
                className="w-full text-center py-2.5 text-sm font-light text-text-secondary hover:text-white rounded-lg border border-white/5"
              >
                Sign In
              </button>
              <a href="#protection" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full justify-center">
                  Find Protection
                </Button>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
