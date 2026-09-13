import React from 'react';
import { Compass, Navigation, Info, CheckCircle2 } from 'lucide-react';

export const SafetyMapVisual: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-background-surface border border-border-subtle p-4 sm:p-6 shadow-card backdrop-blur-xl overflow-hidden">
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-border-subtle">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-text-primary font-medium">
            Situational Environmental Matrix
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs font-light text-text-secondary">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-accent" />
            <span>Conceptual Model</span>
          </span>
          <span className="text-border-light">|</span>
          <span className="text-accent font-normal">Objective Indicators</span>
        </div>
      </div>

      {/* Main Vector Grid & Corridor Visualization */}
      <div className="relative h-64 sm:h-72 w-full my-4 rounded-xl overflow-hidden bg-slate-100/80 dark:bg-[#07090C] border border-border-subtle">
        {/* Map Coordinates Vector */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 300"
          fill="none"
        >
          <defs>
            <radialGradient id="matrixGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Radial Glow */}
          <circle cx="250" cy="150" r="140" fill="url(#matrixGlow)" />

          {/* Grid lines */}
          <g className="stroke-slate-500/15 dark:stroke-slate-400/10" strokeWidth="0.5">
            <line x1="0" y1="50" x2="500" y2="50" />
            <line x1="0" y1="100" x2="500" y2="100" />
            <line x1="0" y1="150" x2="500" y2="150" />
            <line x1="0" y1="200" x2="500" y2="200" />
            <line x1="0" y1="250" x2="500" y2="250" />
            <line x1="100" y1="0" x2="100" y2="300" />
            <line x1="200" y1="0" x2="200" y2="300" />
            <line x1="300" y1="0" x2="300" y2="300" />
            <line x1="400" y1="0" x2="400" y2="300" />
          </g>

          {/* Primary Travel Corridors */}
          <path
            d="M 50 180 Q 150 120 250 160 T 450 120"
            className="stroke-accent"
            strokeWidth="2"
            strokeOpacity="0.75"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 180 Q 150 120 250 160 T 450 120"
            className="stroke-accent"
            strokeWidth="6"
            strokeOpacity="0.12"
            fill="none"
          />

          {/* Secondary Walkways */}
          <path
            d="M 160 50 L 250 160 L 280 260"
            className="stroke-slate-500/40"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 360 60 L 320 140 L 410 240"
            className="stroke-slate-500/40"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Waypoint Nodes (Transit & Safe Accompaniment Rendezvous) */}
          <g>
            {/* Node 1 */}
            <circle cx="150" cy="135" r="4" className="fill-accent" />
            <circle cx="150" cy="135" r="10" className="stroke-accent" strokeOpacity="0.3" fill="none" />
            {/* Node 2 - Central Rendezvous */}
            <circle cx="250" cy="160" r="5" className="fill-accent" />
            <circle cx="250" cy="160" r="14" className="stroke-accent" strokeOpacity="0.4" strokeDasharray="2 2" fill="none" />
            {/* Node 3 */}
            <circle cx="380" cy="135" r="4" className="fill-accent" />
            <circle cx="380" cy="135" r="10" className="stroke-accent" strokeOpacity="0.3" fill="none" />
          </g>

          {/* Concentric Awareness Rings */}
          <circle cx="250" cy="160" r="60" className="stroke-accent" strokeOpacity="0.15" strokeDasharray="3 3" fill="none" />
          <circle cx="250" cy="160" r="100" className="stroke-accent" strokeOpacity="0.08" fill="none" />
        </svg>

        {/* Overlay Telemetry Cards on the Map */}
        <div className="absolute top-3 left-3 bg-background-surface/95 border border-border-subtle rounded-lg p-2.5 backdrop-blur-md shadow-card max-w-[210px]">
          <div className="flex items-center gap-1.5 text-[11px] font-normal text-text-primary">
            <Navigation className="w-3 h-3 text-accent" />
            <span>Recommended Route</span>
          </div>
          <p className="text-[10px] text-text-muted font-light mt-0.5">
            Well-lit pedestrian corridor with regular civilian flow and civil services.
          </p>
        </div>

        <div className="absolute bottom-3 right-3 bg-background-surface/95 border border-border-subtle rounded-lg p-2.5 backdrop-blur-md shadow-card">
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-500 font-normal">
            <CheckCircle2 className="w-3 h-3" />
            <span>Security Professional Availability</span>
          </div>
          <p className="text-[10px] text-text-muted font-light mt-0.5">
            Verified specialists on standby for rapid accompaniment
          </p>
        </div>
      </div>

      {/* Environmental Insights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-border-subtle p-3">
          <div className="text-[11px] text-text-muted uppercase tracking-wider font-light">
            Environmental Context
          </div>
          <div className="text-sm font-normal text-text-primary mt-1">Pedestrian Flow & Lighting</div>
          <p className="text-xs text-text-secondary font-light mt-1">
            Data models factoring urban lighting and high-visibility walkways.
          </p>
        </div>

        <div className="rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-border-subtle p-3">
          <div className="text-[11px] text-text-muted uppercase tracking-wider font-light">
            Situational Advisory
          </div>
          <div className="text-sm font-normal text-text-primary mt-1">Local Navigation Guidance</div>
          <p className="text-xs text-text-secondary font-light mt-1">
            Cultural tips, market transit etiquette, and route timing recommendations.
          </p>
        </div>

        <div className="rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-border-subtle p-3">
          <div className="text-[11px] text-text-muted uppercase tracking-wider font-light">
            Service Proximity
          </div>
          <div className="text-sm font-normal text-text-primary mt-1">Civil & Support Points</div>
          <p className="text-xs text-text-secondary font-light mt-1">
            Seamless coordination with public tourist assistance and emergency infrastructure.
          </p>
        </div>
      </div>

      {/* Responsible Data Disclosure Notice */}
      <div className="mt-4 pt-3 border-t border-border-subtle flex items-center gap-2 text-[11px] text-text-muted font-light">
        <Info className="w-3.5 h-3.5 text-accent shrink-0" />
        <span>
          Sentinel uses objective geographical indicators and certified human intelligence—never fear-based profiling or unverified claims.
        </span>
      </div>
    </div>
  );
};
