import React from 'react';
import { Compass, Navigation, Info, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';

export const SafetyMapVisual: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-background-surface border border-border-card p-6 sm:p-8 shadow-card-hover backdrop-blur-xl overflow-hidden transition-all duration-300">
      {/* 1. Visualization Header with Generous Vertical Rhythm */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-border-card">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="text-[13.5px] sm:text-[14px] uppercase tracking-wider text-text-primary font-medium">
            Situational Environmental Matrix
          </span>
        </div>
        <div className="flex items-center gap-3 text-[13px] font-normal text-text-secondary">
          <span className="flex items-center gap-1.5 text-accent font-medium">
            <Compass className="w-4 h-4" />
            <span>Live Conceptual Model</span>
          </span>
          <span className="text-border-card">|</span>
          <span className="text-text-muted">Objective Indicators</span>
        </div>
      </div>

      {/* 2. Main Visualization Canvas (Expanded Height for Maximum Breathing Room) */}
      <div className="relative h-80 sm:h-92 w-full my-6 rounded-xl overflow-hidden bg-slate-100/90 dark:bg-[#07090D] border border-border-card">
        {/* Map Coordinates Vector */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 540 360"
          fill="none"
        >
          <defs>
            <radialGradient id="matrixGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Radial Ambient Glow */}
          <circle cx="270" cy="180" r="160" fill="url(#matrixGlow)" />

          {/* Subtle Grid lines */}
          <g className="stroke-slate-400/25 dark:stroke-slate-500/20" strokeWidth="0.75">
            <line x1="0" y1="60" x2="540" y2="60" />
            <line x1="0" y1="120" x2="540" y2="120" />
            <line x1="0" y1="180" x2="540" y2="180" />
            <line x1="0" y1="240" x2="540" y2="240" />
            <line x1="0" y1="300" x2="540" y2="300" />
            <line x1="90" y1="0" x2="90" y2="360" />
            <line x1="180" y1="0" x2="180" y2="360" />
            <line x1="270" y1="0" x2="270" y2="360" />
            <line x1="360" y1="0" x2="360" y2="360" />
            <line x1="450" y1="0" x2="450" y2="360" />
          </g>

          {/* Primary Recommended Travel Corridor in Sentinel Blue */}
          <path
            d="M 50 220 Q 170 120 270 180 T 490 130"
            className="stroke-accent"
            strokeWidth="3.5"
            strokeOpacity="0.85"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 220 Q 170 120 270 180 T 490 130"
            className="stroke-accent"
            strokeWidth="12"
            strokeOpacity="0.14"
            fill="none"
          />

          {/* Secondary Walkway Connections */}
          <path
            d="M 180 50 L 270 180 L 300 300"
            className="stroke-slate-500/40"
            strokeWidth="1.25"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 390 60 L 340 160 L 440 280"
            className="stroke-slate-500/40"
            strokeWidth="1.25"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Waypoint Rendezvous Nodes */}
          <g>
            <circle cx="170" cy="145" r="5.5" className="fill-accent" />
            <circle cx="170" cy="145" r="14" className="stroke-accent" strokeOpacity="0.4" fill="none" />
            
            <circle cx="270" cy="180" r="7" className="fill-accent" />
            <circle cx="270" cy="180" r="18" className="stroke-accent" strokeOpacity="0.5" strokeDasharray="3 3" fill="none" />
            
            <circle cx="410" cy="145" r="5.5" className="fill-accent" />
            <circle cx="410" cy="145" r="14" className="stroke-accent" strokeOpacity="0.4" fill="none" />
          </g>

          {/* Concentric Awareness Rings */}
          <circle cx="270" cy="180" r="80" className="stroke-accent" strokeOpacity="0.2" strokeDasharray="3 3" fill="none" />
          <circle cx="270" cy="180" r="130" className="stroke-accent" strokeOpacity="0.08" fill="none" />
        </svg>

        {/* Top-Left Telemetry Overlay: Recommended Route (High Contrast, Clean Margins) */}
        <div className="absolute top-4 left-4 bg-white/98 dark:bg-[#0E131C]/98 border border-border-card rounded-xl p-4 backdrop-blur-xl shadow-lg max-w-[260px]">
          <div className="flex items-center gap-2 text-[13.5px] font-medium text-slate-900 dark:text-white">
            <Navigation className="w-4 h-4 text-accent shrink-0" />
            <span>Recommended Route</span>
          </div>
          <p className="text-[12.5px] text-slate-600 dark:text-slate-300 font-light mt-1.5 leading-relaxed">
            High-visibility pedestrian promenade with regular civil presence & illumination.
          </p>
        </div>

        {/* Bottom-Right Telemetry Overlay: Security Professional Availability */}
        <div className="absolute bottom-4 right-4 bg-white/98 dark:bg-[#0E131C]/98 border border-border-card rounded-xl p-4 backdrop-blur-xl shadow-lg max-w-[260px]">
          <div className="flex items-center gap-2 text-[13.5px] text-emerald-600 dark:text-emerald-400 font-semibold">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Professional On-Call</span>
          </div>
          <p className="text-[12.5px] text-slate-600 dark:text-slate-300 font-light mt-1.5 leading-relaxed">
            Active standby radius with direct escort rendezvous readiness.
          </p>
        </div>
      </div>

      {/* 3. Three Information Cards (Equal Visual Weight, Comfortable Padding, Readable 15px Copy) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5 pt-2">
        <div className="rounded-xl bg-background-elevated border border-border-card p-5 hover:border-accent/50 transition-colors shadow-sm">
          <div className="flex items-center gap-2 text-[12.5px] text-accent uppercase tracking-wider font-medium">
            <Eye className="w-4 h-4" />
            Pedestrian Lighting
          </div>
          <div className="text-[16px] font-normal text-text-primary mt-2">Corridor Illumination</div>
          <p className="text-[14.5px] text-text-secondary font-light mt-1.5 leading-relaxed">
            Evaluates street illumination and pedestrian foot-traffic density after sundown.
          </p>
        </div>

        <div className="rounded-xl bg-background-elevated border border-border-card p-5 hover:border-accent/50 transition-colors shadow-sm">
          <div className="flex items-center gap-2 text-[12.5px] text-accent uppercase tracking-wider font-medium">
            <Compass className="w-4 h-4" />
            Local Guidance
          </div>
          <div className="text-[16px] font-normal text-text-primary mt-2">Cultural & Transit Cues</div>
          <p className="text-[14.5px] text-text-secondary font-light mt-1.5 leading-relaxed">
            Market transit etiquette, metro operational hours, and crowd navigation timing.
          </p>
        </div>

        <div className="rounded-xl bg-background-elevated border border-border-card p-5 hover:border-accent/50 transition-colors shadow-sm">
          <div className="flex items-center gap-2 text-[12.5px] text-accent uppercase tracking-wider font-medium">
            <ShieldCheck className="w-4 h-4" />
            Civil Support
          </div>
          <div className="text-[16px] font-normal text-text-primary mt-2">Rendezvous Points</div>
          <p className="text-[14.5px] text-text-secondary font-light mt-1.5 leading-relaxed">
            Transparent rendezvous coordination with public assistance and transit stations.
          </p>
        </div>
      </div>

      {/* 4. Responsible Data Disclosure Note (Separated with Clean Padding) */}
      <div className="mt-6 pt-4 border-t border-border-card flex items-start sm:items-center gap-3 text-[13.5px] text-text-muted font-light leading-relaxed">
        <Info className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5 sm:mt-0" />
        <span>
          Sentinel uses objective geographical indicators and certified human intelligence—never fear-based profiling or unverified claims.
        </span>
      </div>
    </div>
  );
};
