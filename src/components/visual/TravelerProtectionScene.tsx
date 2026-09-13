import React from 'react';
import { ShieldCheck, MapPin, Radio, Compass } from 'lucide-react';

export const TravelerProtectionScene: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Glow container with 1px thin blue border */}
      <div className="relative rounded-2xl p-1 bg-gradient-to-b from-accent/15 via-border-card to-transparent border border-border-card shadow-card-hover backdrop-blur-xl overflow-hidden">
        
        {/* Main Visual Display */}
        <div className="relative h-[400px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-slate-900">
          {/* High-Resolution Cinematic Travel Photograph (India Heritage Promenade) */}
          <img
            src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"
            alt="Traveler exploring historic Indian palace corridor with quiet confidence"
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-[1.02] transition-transform duration-700 hover:scale-105"
            loading="eager"
          />

          {/* Atmospheric Dual-Theme Gradient Overlay for Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-900/30 dark:from-[#080B10]/95 dark:via-[#080B10]/50 dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/20" />

          {/* Top Floating Telemetry Glass Card: Professional Status */}
          <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-background-surface/95 dark:bg-[#0B0F16]/95 border border-border-card rounded-xl p-4 backdrop-blur-md shadow-card transition-all duration-300 hover:border-accent/50">
            <div className="flex items-center justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[12px] sm:text-[13px] uppercase tracking-widest text-text-primary font-medium">
                  Active Accompaniment
                </span>
              </div>
              <span className="text-[11px] text-accent bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent-border font-medium">
                Discreet Proximity
              </span>
            </div>
            <div className="flex items-center justify-between text-[13px] text-text-secondary font-normal pt-2 border-t border-border-card">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span className="text-text-primary">Security Professional</span>
              </span>
              <span className="text-text-muted text-[12px]">Level 3 Escort</span>
            </div>
          </div>

          {/* Center Subtle Radar / Awareness Guidance Indicator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-accent/30 flex items-center justify-center animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]">
              <div className="w-16 h-16 rounded-full border border-accent/40 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(2,132,199,0.8)]" />
              </div>
            </div>
            <span className="mt-2 text-[11px] tracking-widest uppercase text-white/80 font-light bg-black/40 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/10">
              Perimeter Active
            </span>
          </div>

          {/* Bottom Floating Telemetry Glass Card: Situational Route */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:max-w-[310px] bg-background-surface/95 dark:bg-[#0B0F16]/95 border border-border-card rounded-xl p-4 backdrop-blur-md shadow-card transition-all duration-300 hover:border-accent/50">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-[14px] font-medium text-text-primary">
                Historic Quarter, Jaipur
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[12px] font-normal text-text-secondary pt-2 border-t border-border-card">
              <div>
                <span className="block text-[11px] text-text-muted uppercase tracking-wider">Corridor Status</span>
                <span className="text-emerald-500 font-medium text-[13px]">Clear & Navigable</span>
              </div>
              <div>
                <span className="block text-[11px] text-text-muted uppercase tracking-wider">Escort Distance</span>
                <span className="text-text-primary font-medium text-[13px]">6m Dynamic Range</span>
              </div>
            </div>
          </div>

          {/* Ambient Blue Scan Accent */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
        </div>

        {/* Caption beneath visual */}
        <div className="p-4 bg-background-surface border-t border-border-card flex items-center justify-between text-[13px] text-text-secondary font-normal">
          <div className="flex items-center gap-2.5">
            <Radio className="w-4 h-4 text-accent animate-pulse" />
            <span>Situational poise without visible confrontation</span>
          </div>
          <span className="hidden sm:inline text-accent font-medium flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            Professional travel support
          </span>
        </div>
      </div>
    </div>
  );
};
