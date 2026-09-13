import React from 'react';
import { Compass, Navigation, Info, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';

export const SafetyMapVisual: React.FC = () => {
  return (
    <div className="relative rounded-3xl bg-background-surface border border-border-card p-6 sm:p-10 shadow-card-hover backdrop-blur-xl overflow-hidden transition-all duration-300">
      {/* 1. Visualization Header with Generous Rhythm */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border-card">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="text-[14px] sm:text-[15px] uppercase tracking-wider text-text-primary font-medium">
            Situational Environmental Matrix
          </span>
        </div>
        <div className="flex items-center gap-3 text-[13.5px] font-normal text-text-secondary">
          <span className="flex items-center gap-1.5 text-accent font-medium">
            <Compass className="w-4 h-4" />
            <span>Live Conceptual Model</span>
          </span>
          <span className="text-border-card">|</span>
          <span className="text-text-muted">Objective Geographical Indicators</span>
        </div>
      </div>

      {/* 2. Main Visualization Canvas (Wide Screen Aspect Ratio for Maximum Space) */}
      <div className="relative h-[360px] sm:h-[420px] md:h-[460px] w-full my-8 rounded-2xl overflow-hidden bg-slate-100/90 dark:bg-[#07090D] border border-border-card">
        {/* Map Coordinates Vector Canvas */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 880 380"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="matrixGlowWide" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center Radial Ambient Glow */}
          <circle cx="440" cy="190" r="220" fill="url(#matrixGlowWide)" />

          {/* Subtle Coordinate Grid Lines */}
          <g className="stroke-slate-400/25 dark:stroke-slate-500/20" strokeWidth="0.75">
            <line x1="0" y1="60" x2="880" y2="60" />
            <line x1="0" y1="120" x2="880" y2="120" />
            <line x1="0" y1="190" x2="880" y2="190" />
            <line x1="0" y1="260" x2="880" y2="260" />
            <line x1="0" y1="330" x2="880" y2="330" />
            
            <line x1="110" y1="0" x2="110" y2="380" />
            <line x1="220" y1="0" x2="220" y2="380" />
            <line x1="330" y1="0" x2="330" y2="380" />
            <line x1="440" y1="0" x2="440" y2="380" />
            <line x1="550" y1="0" x2="550" y2="380" />
            <line x1="660" y1="0" x2="660" y2="380" />
            <line x1="770" y1="0" x2="770" y2="380" />
          </g>

          {/* Primary Recommended Travel Corridor in Sentinel Blue */}
          <path
            d="M 80 260 Q 280 120 440 190 T 800 130"
            className="stroke-accent"
            strokeWidth="3.5"
            strokeOpacity="0.85"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 80 260 Q 280 120 440 190 T 800 130"
            className="stroke-accent"
            strokeWidth="14"
            strokeOpacity="0.14"
            fill="none"
          />

          {/* Secondary Walkway Connections */}
          <path
            d="M 220 50 L 440 190 L 490 340"
            className="stroke-slate-500/40"
            strokeWidth="1.25"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 660 60 L 580 170 L 720 330"
            className="stroke-slate-500/40"
            strokeWidth="1.25"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Waypoint Rendezvous Nodes */}
          <g>
            <circle cx="280" cy="155" r="6" className="fill-accent" />
            <circle cx="280" cy="155" r="16" className="stroke-accent" strokeOpacity="0.4" fill="none" />
            
            <circle cx="440" cy="190" r="7.5" className="fill-accent" />
            <circle cx="440" cy="190" r="20" className="stroke-accent" strokeOpacity="0.5" strokeDasharray="3 3" fill="none" />
            
            <circle cx="680" cy="155" r="6" className="fill-accent" />
            <circle cx="680" cy="155" r="16" className="stroke-accent" strokeOpacity="0.4" fill="none" />
          </g>

          {/* Concentric Awareness Rings */}
          <circle cx="440" cy="190" r="85" className="stroke-accent" strokeOpacity="0.2" strokeDasharray="3 3" fill="none" />
          <circle cx="440" cy="190" r="150" className="stroke-accent" strokeOpacity="0.08" fill="none" />
        </svg>

        {/* Top-Left Telemetry Overlay: Recommended Route */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/95 dark:bg-[#0E131C]/95 border border-border-card rounded-2xl p-4 sm:p-5 backdrop-blur-xl shadow-lg max-w-[280px]">
          <div className="flex items-center gap-2 text-[13.5px] font-medium text-slate-900 dark:text-white">
            <Navigation className="w-4 h-4 text-accent shrink-0" />
            <span>Recommended Route</span>
          </div>
          <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 font-light mt-1.5 leading-relaxed">
            High-visibility pedestrian promenade with regular civil presence & illumination.
          </p>
        </div>

        {/* Bottom-Right Telemetry Overlay: Security Professional Availability */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white/95 dark:bg-[#0E131C]/95 border border-border-card rounded-2xl p-4 sm:p-5 backdrop-blur-xl shadow-lg max-w-[280px]">
          <div className="flex items-center gap-2 text-[13.5px] text-emerald-600 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Professional On-Call</span>
          </div>
          <p className="text-[12.5px] sm:text-[13px] text-slate-600 dark:text-slate-300 font-light mt-1.5 leading-relaxed">
            Active standby radius with direct escort rendezvous readiness.
          </p>
        </div>
      </div>

      {/* 3. Three Information Cards (Spacious 3-Column Grid with 16px Titles & 15px Descriptions) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
        <div className="rounded-2xl bg-background-elevated border border-border-card p-6 hover:border-accent/50 transition-all duration-300 shadow-sm">
          <div className="flex items-center gap-2 text-[12.5px] text-accent uppercase tracking-wider font-medium">
            <Eye className="w-4 h-4" />
            Pedestrian Lighting
          </div>
          <div className="text-[17px] font-normal text-text-primary mt-2.5">Corridor Illumination</div>
          <p className="text-[15px] text-text-secondary font-light mt-2 leading-relaxed">
            Evaluates street illumination and pedestrian foot-traffic density after sundown.
          </p>
        </div>

        <div className="rounded-2xl bg-background-elevated border border-border-card p-6 hover:border-accent/50 transition-all duration-300 shadow-sm">
          <div className="flex items-center gap-2 text-[12.5px] text-accent uppercase tracking-wider font-medium">
            <Compass className="w-4 h-4" />
            Local Guidance
          </div>
          <div className="text-[17px] font-normal text-text-primary mt-2.5">Cultural & Transit Cues</div>
          <p className="text-[15px] text-text-secondary font-light mt-2 leading-relaxed">
            Market transit etiquette, metro operational hours, and crowd navigation timing.
          </p>
        </div>

        <div className="rounded-2xl bg-background-elevated border border-border-card p-6 hover:border-accent/50 transition-all duration-300 shadow-sm">
          <div className="flex items-center gap-2 text-[12.5px] text-accent uppercase tracking-wider font-medium">
            <ShieldCheck className="w-4 h-4" />
            Civil Support
          </div>
          <div className="text-[17px] font-normal text-text-primary mt-2.5">Rendezvous Points</div>
          <p className="text-[15px] text-text-secondary font-light mt-2 leading-relaxed">
            Transparent rendezvous coordination with public assistance and transit stations.
          </p>
        </div>
      </div>

      {/* 4. Responsible Data Disclosure Note */}
      <div className="mt-8 pt-5 border-t border-border-card flex items-start sm:items-center gap-3 text-[13.5px] text-text-muted font-light leading-relaxed">
        <Info className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5 sm:mt-0" />
        <span>
          Sentinel uses objective geographical indicators and certified human intelligence—never fear-based profiling or unverified claims.
        </span>
      </div>
    </div>
  );
};
