import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { Container } from '../common/Container';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#07090C] pt-16 pb-12 text-sm">
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10">
                <Shield className="w-3.5 h-3.5 text-accent stroke-[1.5]" />
              </div>
              <span className="text-base tracking-[0.2em] font-normal text-text-primary">
                SENTINEL
              </span>
            </div>
            <p className="text-text-secondary font-light text-xs sm:text-sm max-w-sm leading-relaxed">
              Professional travel protection and situational safety in India. Connecting
              discerning travelers with verified, professionally trained personnel for mindful,
              unburdened exploration.
            </p>
            <div className="text-[11px] text-text-muted font-light tracking-wide pt-1">
              Phase 1 Platform Preview • Architectural Design System
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-primary font-medium mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-text-secondary font-light text-xs sm:text-sm">
              <li>
                <a href="#protection" className="hover:text-text-primary transition-colors">
                  Protection Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-text-primary transition-colors">
                  Safety Intelligence
                </a>
              </li>
              <li>
                <a href="#travelers" className="hover:text-text-primary transition-colors">
                  For Travelers
                </a>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-primary font-medium mb-4">
              Sentinel
            </h4>
            <ul className="space-y-2.5 text-text-secondary font-light text-xs sm:text-sm">
              <li>
                <a href="#why-sentinel" className="hover:text-text-primary transition-colors">
                  Why Sentinel
                </a>
              </li>
              <li>
                <a href="#vetting" className="hover:text-text-primary transition-colors">
                  Personnel Standards
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-text-primary transition-colors">
                  Contact & Inquiries
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-text-primary transition-colors">
                  Safety Philosophy
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Placeholders */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-text-primary font-medium mb-4">
              Standards & Legal
            </h4>
            <ul className="space-y-2.5 text-text-secondary font-light text-xs sm:text-sm">
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-text-muted">
          <p>
            © {new Date().getFullYear()} Sentinel Technologies. All rights reserved. Professional
            protective services complement civil and emergency response frameworks.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-text-secondary hover:text-white transition-colors cursor-pointer py-1 px-2 rounded hover:bg-white/[0.04]"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
