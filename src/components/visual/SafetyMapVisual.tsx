import React from 'react';
import { Compass, Navigation, Info, CheckCircle2 } from 'lucide-react';

export const SafetyMapVisual: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-[#0B0E14] border border-white/[0.08] p-4 sm:p-6 shadow-2xl backdrop-blur-xl overflow-hidden">
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
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
          <span className="text-white/20">|</span>
          <span className="text-accent/90">Objective Indicators</span>
        </div>
      </div>

      {/* Main Vector Grid & Corridor Visualization */}
      <div className="relative h-64 sm:h-72 w-full my-4 rounded-xl overflow-hidden bg-[#07090C] border border-white/[0.04]">
        {/* Subtle Map Coordinates Vector */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 300"
          fill="none"
        >
          <defs>
            <radialGradient id="matrixGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Radial Glow */}
          <rect width="500" height="300" fill="#07090C" />
          <circle cx="250" cy="150" r="140" fill="url(#matrixGlow)" />

          {/* Grid lines */}
          <g stroke="#94A3B8" strokeOpacity="0.08" strokeWidth="0.5">
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

          {/* Primary Travel Corridors (Represented as elegant clean paths) */}
          <path
            d="M 50 180 Q 150 120 250 160 T 450 120"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeOpacity="0.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 50 180 Q 150 120 250 160 T 450 120"
            stroke="#38BDF8"
            strokeWidth="6"
            strokeOpacity="0.1"
            fill="none"
          />

          {/* Secondary Walkways */}
          <path
            d="M 160 50 L 250 160 L 280 260"
            stroke="#64748B"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
            fill="none"
          />
          <path
            d="M 360 60 L 320 140 L 410 240"
            stroke="#64748B"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="4 4"
            fill="none"
          />

          {/* Waypoint Nodes (Transit & Safe Accompaniment Rendezvous) */}
          <g>
            {/* Node 1 */}
            <circle cx="150" cy="135" r="4" fill="#38BDF8" />
            <circle cx="150" cy="135" r="10" stroke="#38BDF8" strokeOpacity="0.3" fill="none" />
            {/* Node 2 - Central Rendezvous */}
            <circle cx="250" cy="160" r="5" fill="#38BDF8" />
            <circle cx="250" cy="160" r="14" stroke="#38BDF8" strokeOpacity="0.4" strokeDasharray="2 2" fill="none" />
            {/* Node 3 */}
            <circle cx="380" cy="135" r="4" fill="#38BDF8" />
            <circle cx="380" cy="135" r="10" stroke="#38BDF8" strokeOpacity="0.3" fill="none" />
          </g>

          {/* Concentric Awareness Rings */}
          <circle cx="250" cy="160" r="60" stroke="#38BDF8" strokeOpacity="0.1" strokeDasharray="3 3" fill="none" />
          <circle cx="250" cy="160" r="100" stroke="#38BDF8" strokeOpacity="0.05" fill="none" />
        </svg>

        {/* Overlay Telemetry Cards on the Map */}
        <div className="absolute top-3 left-3 bg-[#0C1017]/90 border border-white/10 rounded-lg p-2.5 backdrop-blur-md max-w-[210px]">
          <div className="flex items-center gap-1.5 text-[11px] font-normal text-text-primary">
            <Navigation className="w-3 h-3 text-accent" />
            <span>Recommended Route</span>
          </div>
          <p className="text-[10px] text-text-muted font-light mt-0.5">
            Well-lit pedestrian corridor with regular civilian flow and civil services.
          </p>
        </div>

        <div className="absolute bottom-3 right-3 bg-[#0C1017]/90 border border-white/10 rounded-lg p-2.5 backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-normal">
            <CheckCircle2 className="w-3 h-3" />
            <span>Verified Officer Density</span>
          </div>
          <p className="text-[10px] text-text-muted font-light mt-0.5">
            Personnel response availability on standby
          </p>
        </div>
      </div>

      {/* Environmental Insights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-3">
          <div className="text-[11px] text-text-muted uppercase tracking-wider font-light">
            Environmental Context
          </div>
          <div className="text-sm font-normal text-text-primary mt-1">Pedestrian Flow & Lighting</div>
          <p className="text-xs text-text-secondary font-light mt-1">
            Data models factoring urban lighting and high-visibility walkways.
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-3">
          <div className="text-[11px] text-text-muted uppercase tracking-wider font-light">
            Situational Advisory
          </div>
          <div className="text-sm font-normal text-text-primary mt-1">Local Navigation Guidance</div>
          <p className="text-xs text-text-secondary font-light mt-1">
            Cultural tips, market transit etiquette, and route timing recommendations.
          </p>
        </div>

        <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-3">
          <div className="text-[11px] text-text-muted uppercase tracking-wider font-light">
            Service Proximity
          </div>
          <div className="text-sm font-normal text-text-primary mt-1">Civil & Escort Points</div>
          <p className="text-xs text-text-secondary font-light mt-1">
            Seamless coordination with public tourist assistance and emergency infrastructure.
          </p>
        </div>
      </div>

      {/* Responsible Data Disclosure Notice */}
      <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center gap-2 text-[11px] text-text-muted font-light">
        <Info className="w-3.5 h-3.5 text-accent/80 shrink-0" />
        <span>
          Sentinel uses objective geographical indicators and certified human intelligence—never fear-based profiling or unverified claims.
        </span>
      </div>
    </div>
  );
};
