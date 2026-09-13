import React from 'react';
import { Compass, Navigation, Info, CheckCircle2, Eye, ShieldCheck } from 'lucide-react';

export const SafetyMapVisual: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-background-surface border border-border-card p-6 sm:p-8 shadow-card-hover backdrop-blur-xl overflow-hidden transition-all duration-300">
      {/* Top Telemetry Header with Generous Spacing */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-border-card">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
          </span>
          <span className="text-[13px] sm:text-[14px] uppercase tracking-wider text-text-primary font-medium">
            Situational Environmental Matrix
          </span>
        </div>
        <div className="flex items-center gap-3 text-[13px] font-normal text-text-secondary">
          <span className="flex items-center gap-1.5 text-accent font-medium">
            <Compass className="w-4 h-4" />
            <span>Conceptual Model</span>
          </span>
          <span className="text-border-card">|</span>
          <span className="text-text-muted">Objective Indicators</span>
        </div>
      </div>

      {/* Main Vector Grid & Corridor Visualization (Generous Breathing Room) */}
      <div className="relative h-72 sm:h-80 w-full my-6 rounded-xl overflow-hidden bg-slate-100/90 dark:bg-[#07090D] border border-border-card">
        {/* Map Coordinates Vector */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 520 320"
          fill="none"
        >
          <defs>
            <radialGradient id="matrixGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Radial Glow */}
          <circle cx="260" cy="160" r="150" fill="url(#matrixGlow)" />

          {/* Grid lines */}
          <g className="stroke-slate-400/20 dark:stroke-slate-500/15" strokeWidth="0.75">
            <line x1="0" y1="50" x2="520" y2="50" />
            <line x1="0" y1="110" x2="520" y2="110" />
            <line x1="0" y1="170" x2="520" y2="170" />
            <line x1="0" y1="230" x2="520" y2="230" />
            <line x1="0" y1="290" x2="520" y2="290" />
            <line x1="80" y1="0" x2="80" y2="320" />
            <line x1="180" y1="0" x2="180" y2="320" />
            <line x1="280" y1="0" x2="280" y2="320" />
            <line x1="380" y1="0" x2="380" y2="320" />
            <line x1="480" y1="0" x2="480" y2="320" />
          </g>

          {/* Primary Recommended Travel Corridor */}
          <path
            d="M 50 200 Q 160 110 260 160 T 470 120"
            className="stroke-accent"
            strokeWidth="3"
            strokeOpacity="0.85"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 200 Q 160 110 260 160 T 470 120"
            className="stroke-accent"
            strokeWidth="10"
            strokeOpacity="0.15"
            fill="none"
          />

          {/* Secondary Walkway Connections */}
          <path
            d="M 160 50 L 260 160 L 290 270"
            className="stroke-slate-500/40"
            strokeWidth="1.25"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 380 50 L 330 145 L 430 250"
            className="stroke-slate-500/40"
            strokeWidth="1.25"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Waypoint Rendezvous Nodes */}
          <g>
            {/* Rendezvous Point 1 */}
            <circle cx="160" cy="130" r="5" className="fill-accent" />
            <circle cx="160" cy="130" r="12" className="stroke-accent" strokeOpacity="0.4" fill="none" />
            
            {/* Central Transit Hub */}
            <circle cx="260" cy="160" r="6.5" className="fill-accent" />
            <circle cx="260" cy="160" r="16" className="stroke-accent" strokeOpacity="0.5" strokeDasharray="3 3" fill="none" />
            
            {/* Rendezvous Point 2 */}
            <circle cx="395" cy="130" r="5" className="fill-accent" />
            <circle cx="395" cy="130" r="12" className="stroke-accent" strokeOpacity="0.4" fill="none" />
          </g>

          {/* Concentric Awareness Radius */}
          <circle cx="260" cy="160" r="70" className="stroke-accent" strokeOpacity="0.2" strokeDasharray="3 3" fill="none" />
          <circle cx="260" cy="160" r="115" className="stroke-accent" strokeOpacity="0.1" fill="none" />
        </svg>

        {/* Top-Left Telemetry Overlay: Recommended Route */}
        <div className="absolute top-4 left-4 bg-background-surface/98 border border-border-card rounded-xl p-3.5 backdrop-blur-md shadow-card max-w-[240px]">
          <div className="flex items-center gap-2 text-[13px] font-medium text-text-primary">
            <Navigation className="w-4 h-4 text-accent shrink-0" />
            <span>Recommended Route</span>
          </div>
          <p className="text-[12px] sm:text-[12.5px] text-text-secondary font-light mt-1 leading-relaxed">
            High-visibility pedestrian promenade with civil presence & verified lighting.
          </p>
        </div>

        {/* Bottom-Right Telemetry Overlay: Security Professional Standby */}
        <div className="absolute bottom-4 right-4 bg-background-surface/98 border border-border-card rounded-xl p-3.5 backdrop-blur-md shadow-card max-w-[250px]">
          <div className="flex items-center gap-2 text-[13px] text-emerald-600 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Security Professional On-Call</span>
          </div>
          <p className="text-[12px] sm:text-[12.5px] text-text-secondary font-light mt-1 leading-relaxed">
            Active verification zone with direct escort rendezvous readiness.
          </p>
        </div>
      </div>

      {/* Environmental Insights Grid (3 Well-Spaced, Readable Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div className="rounded-xl bg-background-elevated border border-border-card p-4 hover:border-accent/40 transition-colors">
          <div className="flex items-center gap-2 text-[12px] text-accent uppercase tracking-wider font-medium">
            <Eye className="w-3.5 h-3.5" />
            Pedestrian Lighting
          </div>
          <div className="text-[15px] font-normal text-text-primary mt-1.5">Corridor Illumination</div>
          <p className="text-[13px] sm:text-[13.5px] text-text-secondary font-light mt-1 leading-relaxed">
            Factors active street lighting and pedestrian visibility after sundown.
          </p>
        </div>

        <div className="rounded-xl bg-background-elevated border border-border-card p-4 hover:border-accent/40 transition-colors">
          <div className="flex items-center gap-2 text-[12px] text-accent uppercase tracking-wider font-medium">
            <Compass className="w-3.5 h-3.5" />
            Local Guidance
          </div>
          <div className="text-[15px] font-normal text-text-primary mt-1.5">Cultural & Transit Cues</div>
          <p className="text-[13px] sm:text-[13.5px] text-text-secondary font-light mt-1 leading-relaxed">
            Market navigation etiquette, metro transit hours, and crowd density timing.
          </p>
        </div>

        <div className="rounded-xl bg-background-elevated border border-border-card p-4 hover:border-accent/40 transition-colors">
          <div className="flex items-center gap-2 text-[12px] text-accent uppercase tracking-wider font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            Civil Support
          </div>
          <div className="text-[15px] font-normal text-text-primary mt-1.5">Rendezvous Points</div>
          <p className="text-[13px] sm:text-[13.5px] text-text-secondary font-light mt-1 leading-relaxed">
            Transparent rendezvous coordination with public assistance centers.
          </p>
        </div>
      </div>

      {/* Responsible Data Disclosure Notice with Comfortable Spacing */}
      <div className="mt-5 pt-4 border-t border-border-card flex items-start sm:items-center gap-2.5 text-[13px] text-text-muted font-light leading-relaxed">
        <Info className="w-4 h-4 text-accent shrink-0 mt-0.5 sm:mt-0" />
        <span>
          Sentinel uses objective geographical indicators and verified human intelligence—never fear-based profiling or unverified claims.
        </span>
      </div>
    </div>
  );
};
