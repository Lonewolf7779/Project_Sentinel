import React from 'react';
import { ShieldCheck, MapPin, Radio, Compass } from 'lucide-react';

export const TravelerProtectionScene: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Glow Container with Refined 1px Thin Blue Border */}
      <div className="relative rounded-2xl p-1 bg-gradient-to-b from-accent/20 via-border-card to-transparent border border-border-card shadow-card-hover backdrop-blur-xl overflow-hidden">
        
        {/* Main Visual Display */}
        <div className="relative h-[420px] sm:h-[490px] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
          {/* High-Resolution Natural Travel Photograph (Vivid, Unmuted Indian Heritage Promenade) */}
          <img
            src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"
            alt="Traveler exploring historic Indian palace corridor with quiet confidence"
            className="absolute inset-0 w-full h-full object-cover object-center transform scale-[1.01] transition-transform duration-700 hover:scale-105"
            loading="eager"
          />

          {/* Minimal, Localized Subtle Vignette (Preserving Natural Colors & Sharp Daylight) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

          {/* Top Floating Telemetry Glass Card (High-Contrast Solid Surface) */}
          <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 dark:bg-[#0B0F17]/95 border border-border-card rounded-xl p-4 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-accent/60">
            <div className="flex items-center justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[13px] uppercase tracking-wider text-slate-900 dark:text-white font-medium">
                  Active Accompaniment
                </span>
              </div>
              <span className="text-[12px] text-accent bg-accent-soft px-2.5 py-0.5 rounded-full border border-accent-border font-medium">
                Discreet Proximity
              </span>
            </div>
            <div className="flex items-center justify-between text-[13.5px] text-slate-700 dark:text-slate-300 font-normal pt-2.5 border-t border-border-card">
              <span className="flex items-center gap-1.5 text-slate-900 dark:text-white font-medium">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Security Professional</span>
              </span>
              <span className="text-slate-500 dark:text-slate-400 text-[12.5px]">Level 3 Escort</span>
            </div>
          </div>

          {/* Center Subtle Radar / Awareness Pulse */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border border-accent/40 flex items-center justify-center animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite]">
              <div className="w-16 h-16 rounded-full border border-accent/50 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(2,132,199,0.9)]" />
              </div>
            </div>
            <span className="mt-2 text-[11.5px] tracking-widest uppercase text-white font-medium bg-black/60 px-3 py-0.5 rounded-full backdrop-blur-md border border-white/20">
              Perimeter Active
            </span>
          </div>

          {/* Bottom Floating Telemetry Glass Card (High-Contrast Solid Surface) */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:max-w-[320px] bg-white/95 dark:bg-[#0B0F17]/95 border border-border-card rounded-xl p-4 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-accent/60">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-[14px] font-medium text-slate-900 dark:text-white">
                Historic Quarter, Jaipur
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[12.5px] font-normal text-slate-700 dark:text-slate-300 pt-2 border-t border-border-card">
              <div>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Corridor Status</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[13.5px]">Clear & Navigable</span>
              </div>
              <div>
                <span className="block text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Escort Distance</span>
                <span className="text-slate-900 dark:text-white font-semibold text-[13.5px]">6m Dynamic Range</span>
              </div>
            </div>
          </div>

          {/* Ambient Blue Accent Scan */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-80" />
        </div>

        {/* Caption Beneath Visual (Clear 14px Readability) */}
        <div className="p-4 sm:p-4.5 bg-background-surface border-t border-border-card flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[13.5px] text-text-secondary font-normal">
          <div className="flex items-center gap-2.5">
            <Radio className="w-4 h-4 text-accent animate-pulse shrink-0" />
            <span>Situational poise without visible confrontation</span>
          </div>
          <span className="text-accent font-medium flex items-center gap-1.5 shrink-0">
            <Compass className="w-4 h-4" />
            Professional travel support
          </span>
        </div>
      </div>
    </div>
  );
};
