import React, { useEffect, useRef, useState } from 'react';
import { Shield, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { Button } from '../common/Button';
import { Container } from '../common/Container';
import { gsap } from '../../animations/gsapConfig';
import { useTheme } from '../../hooks/useTheme';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
      const isDark = theme === 'dark';
      gsap.to(navRef.current, {
        backgroundColor: isScrolled
          ? isDark
            ? 'rgba(9, 11, 14, 0.88)'
            : 'rgba(255, 255, 255, 0.88)'
          : 'transparent',
        borderBottomColor: isScrolled
          ? isDark
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(15, 23, 42, 0.08)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  }, [isScrolled, theme]);

  const navLinks = [
    { label: 'Our Security Professionals', href: '#security-professionals' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Safety Intelligence', href: '#safety' },
    { label: 'For Travelers', href: '#travelers' },
  ];

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-colors border-b border-transparent py-3.5 sm:py-4"
    >
      <Container size="lg">
        <nav className="flex items-center justify-between gap-4" aria-label="Main Navigation">
          {/* Logo / Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg shrink-0"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-border-subtle group-hover:border-accent/40 transition-colors duration-300">
              <Shield className="w-4 h-4 text-accent stroke-[1.5]" />
              <div className="absolute inset-0 rounded-lg bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg tracking-[0.2em] font-normal text-text-primary group-hover:text-accent transition-colors">
                SENTINEL
              </span>
              <span className="text-[9px] tracking-[0.25em] text-text-muted font-light uppercase">
                Professional Travel Support
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-7 text-sm font-light text-text-secondary">
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

          {/* Right Action CTAs & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="relative flex items-center justify-center w-9 h-9 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-light transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 transition-transform hover:-rotate-12" strokeWidth={1.5} />
              ) : (
                <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" strokeWidth={1.5} />
              )}
            </button>

            {/* Sign In Link */}
            <button
              type="button"
              className="text-xs sm:text-sm font-light text-text-secondary hover:text-text-primary px-2.5 py-1.5 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-accent rounded-md"
            >
              Sign In
            </button>

            {/* Primary Navbar CTA: Exactly "Find a Security Professional" */}
            <a href="#security-professionals">
              <Button
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Find a Security Professional
              </Button>
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-border-subtle text-text-secondary hover:text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" strokeWidth={1.5} />
              ) : (
                <Sun className="w-4 h-4 text-amber-300" strokeWidth={1.5} />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-primary bg-black/[0.04] dark:bg-white/[0.04] border border-border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 rounded-2xl bg-background-surface/95 border border-border-subtle p-5 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <ul className="flex flex-col gap-3.5 pb-4 border-b border-border-subtle text-sm font-light text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1 hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 pt-4">
              <button
                type="button"
                className="w-full text-center py-2.5 text-sm font-light text-text-secondary hover:text-text-primary rounded-lg border border-border-subtle"
              >
                Sign In
              </button>
              <a href="#security-professionals" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full justify-center">
                  Find a Security Professional
                </Button>
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};
