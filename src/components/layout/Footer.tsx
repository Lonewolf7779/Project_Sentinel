import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { Container } from '../common/Container';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border-card bg-background-secondary/70 dark:bg-[#07090C] pt-16 pb-12 text-sm">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-border-card">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-accent-soft border border-border-card">
                <Shield className="w-4 h-4 text-accent stroke-[1.75]" />
              </div>
              <span className="text-base tracking-[0.2em] font-normal text-text-primary">
                SENTINEL
              </span>
            </div>
            <p className="text-text-secondary font-light text-[15px] max-w-sm leading-[1.65]">
              Professional travel support and situational safety in India. Connecting
              discerning travelers with verified, professionally trained security professionals for mindful,
              unburdened exploration.
            </p>
            <div className="text-[12px] text-text-muted font-normal tracking-wide pt-1">
              Phase 1 Platform Preview • Architectural Design System
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[13px] uppercase tracking-widest text-text-primary font-medium mb-4">
              Platform
            </h4>
            <ul className="space-y-3 text-text-secondary font-light text-[14.5px] sm:text-[15px]">
              <li>
                <a href="#security-professionals" className="hover:text-accent transition-colors">
                  Our Security Professionals
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-accent transition-colors">
                  Safety Intelligence
                </a>
              </li>
              <li>
                <a href="#travelers" className="hover:text-accent transition-colors">
                  For Travelers
                </a>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-[13px] uppercase tracking-widest text-text-primary font-medium mb-4">
              Sentinel
            </h4>
            <ul className="space-y-3 text-text-secondary font-light text-[14.5px] sm:text-[15px]">
              <li>
                <a href="#why-sentinel" className="hover:text-accent transition-colors">
                  Why Sentinel
                </a>
              </li>
              <li>
                <a href="#security-professionals" className="hover:text-accent transition-colors">
                  Personnel Standards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact & Inquiries
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  Safety Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Placeholders */}
          <div>
            <h4 className="text-[13px] uppercase tracking-widest text-text-primary font-medium mb-4">
              Standards & Legal
            </h4>
            <ul className="space-y-3 text-text-secondary font-light text-[14.5px] sm:text-[15px]">
              <li>
                <span className="text-text-muted cursor-not-allowed">Privacy Policy</span>
              </li>
              <li>
                <span className="text-text-muted cursor-not-allowed">Terms of Service</span>
              </li>
              <li>
                <span className="text-text-muted cursor-not-allowed">Safety Guidelines</span>
              </li>
              <li>
                <span className="text-text-muted cursor-not-allowed">De-escalation Protocol</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] font-normal text-text-muted">
          <p>
            © {new Date().getFullYear()} Sentinel Technologies. All rights reserved. Professional
            travel support services complement civil and emergency response frameworks.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors cursor-pointer py-1.5 px-3 rounded-lg border border-border-card hover:border-accent/40 bg-background-surface"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-accent" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
