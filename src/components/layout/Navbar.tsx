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
            ? 'rgba(9, 11, 14, 0.94)'
            : 'rgba(255, 255, 255, 0.94)'
          : 'transparent',
        borderBottomColor: isScrolled
          ? isDark
            ? 'rgba(56, 189, 248, 0.18)'
            : 'rgba(2, 132, 199, 0.16)'
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
      className="fixed top-0 left-0 right-0 z-50 transition-colors border-b border-transparent py-4 sm:py-4.5"
    >
      <Container size="lg">
        {/* Strictly Aligned 3-Column Navigation Grid */}
        <nav className="flex items-center justify-between gap-6" aria-label="Main Navigation">
          
          {/* Left: Brand Wordmark (Shrink-0, Never Wrapped) */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg shrink-0"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-accent-soft border border-border-card group-hover:border-accent/60 transition-colors duration-300">
              <Shield className="w-4.5 h-4.5 text-accent stroke-[1.75]" />
              <div className="absolute inset-0 rounded-xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] tracking-[0.2em] font-normal text-text-primary group-hover:text-accent transition-colors leading-tight">
                SENTINEL
              </span>
              <span className="text-[10px] tracking-[0.25em] text-text-muted font-light uppercase mt-0.5">
                Professional Travel Support
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Items (Centered, Single-Line Whitespace-Nowrap, Equal Height) */}
          <div className="hidden xl:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="h-10 px-3.5 flex items-center justify-center rounded-lg text-[14.5px] font-normal text-text-secondary hover:text-accent hover:bg-accent-soft/50 transition-all duration-200 whitespace-nowrap leading-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Action CTAs: Theme Toggle, Sign In, Primary Action */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            {/* Theme Toggle Button (Secondary) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="relative flex items-center justify-center w-9 h-9 rounded-full bg-background-surface border border-border-card text-text-secondary hover:text-accent hover:border-accent/50 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm shrink-0"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" strokeWidth={1.75} />
              ) : (
                <Sun className="w-4 h-4 text-amber-300 transition-transform hover:rotate-45" strokeWidth={1.75} />
              )}
            </button>

            {/* Sign In (Secondary Action) */}
            <button
              type="button"
              className="text-[14px] font-normal text-text-secondary hover:text-text-primary px-3 py-2 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              Sign In
            </button>

            {/* Primary Navbar CTA: Exactly "Find a Security Professional" */}
            <a href="#security-professionals" className="shrink-0">
              <Button
                variant="primary"
                size="sm"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                className="whitespace-nowrap text-[14px] font-medium"
              >
                Find a Security Professional
              </Button>
            </a>
          </div>

          {/* Mobile/Tablet Controls: Theme Toggle & Hamburger */}
          <div className="flex xl:hidden items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-background-surface border border-border-card text-text-secondary hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 text-slate-700" strokeWidth={1.75} />
              ) : (
                <Sun className="w-4 h-4 text-amber-300" strokeWidth={1.75} />
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-primary bg-background-surface border border-border-card focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-3.5 rounded-2xl bg-background-surface/98 border border-border-card p-6 shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <ul className="flex flex-col gap-3 pb-5 border-b border-border-subtle text-[16px] font-normal text-text-secondary">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3.5 pt-5">
              <button
                type="button"
                className="w-full text-center py-2.5 text-[15px] font-normal text-text-secondary hover:text-text-primary rounded-lg border border-border-card bg-background-elevated"
              >
                Sign In
              </button>
              <a href="#security-professionals" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="primary" size="md" className="w-full justify-center text-[15px]">
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
