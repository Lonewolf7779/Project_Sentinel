import React from 'react';
import { ShieldCheck, MapPin, Radio } from 'lucide-react';

export const TravelerProtectionScene: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Glow container */}
      <div className="relative rounded-2xl p-1 bg-gradient-to-b from-black/[0.04] dark:from-white/[0.08] to-transparent border border-border-subtle shadow-card backdrop-blur-xl overflow-hidden">
        
        {/* Main Visual Display */}
        <div className="relative h-[380px] sm:h-[460px] w-full rounded-xl overflow-hidden bg-slate-100/90 dark:bg-[#0A0D12]">
          {/* Architectural Background Vector */}
          <svg
            className="absolute inset-0 w-full h-full object-cover"
            viewBox="0 0 600 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Sky Gradient - light & dark variations */}
              <linearGradient id="skyGradDark" x1="300" y1="0" x2="300" y2="480" gradientUnits="userSpaceOnUse">
                <stop stopColor="#111823" />
                <stop offset="0.6" stopColor="#0B0E14" />
                <stop offset="1" stopColor="#080A0E" />
              </linearGradient>
              <linearGradient id="skyGradLight" x1="300" y1="0" x2="300" y2="480" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E2E8F0" />
                <stop offset="0.6" stopColor="#EEF2F6" />
                <stop offset="1" stopColor="#F8FAFC" />
              </linearGradient>

              {/* Ambient Glow */}
              <radialGradient id="glowSpot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0284C7" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="pathGradLight" x1="300" y1="320" x2="300" y2="480" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0284C7" stopOpacity="0.08" />
                <stop offset="1" stopColor="#E2E8F0" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="pathGradDark" x1="300" y1="320" x2="300" y2="480" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38BDF8" stopOpacity="0.08" />
                <stop offset="1" stopColor="#0D1117" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Background Sky */}
            <rect width="600" height="480" className="fill-[url(#skyGradLight)] dark:fill-[url(#skyGradDark)]" />
            <circle cx="340" cy="180" r="180" fill="url(#glowSpot)" />

            {/* Indian Heritage Architectural Elements (Classical Arches) */}
            <g className="opacity-35 dark:opacity-30 stroke-slate-600 dark:stroke-slate-400" strokeWidth="0.75">
              {/* Outer Classical Arch */}
              <path d="M 120 420 L 120 220 Q 120 120 300 120 Q 480 120 480 220 L 480 420" />
              <path d="M 160 420 L 160 235 Q 160 155 300 155 Q 440 155 440 235 L 440 420" />
              {/* Keystone ornament */}
              <circle cx="300" cy="120" r="5" fill="#0284C7" fillOpacity="0.4" />
              <path d="M 300 100 L 300 140" stroke="#0284C7" strokeOpacity="0.4" />
              
              {/* Colonnade Pillars */}
              <line x1="80" y1="180" x2="80" y2="420" />
              <line x1="200" y1="210" x2="200" y2="420" strokeDasharray="3 3" />
              <line x1="400" y1="210" x2="400" y2="420" strokeDasharray="3 3" />
              <line x1="520" y1="180" x2="520" y2="420" />

              {/* Distant skyline silhouettes */}
              <path d="M 50 340 L 70 320 L 90 340 L 140 335 L 170 310 L 200 340" opacity="0.4" />
              <path d="M 400 340 L 430 305 L 460 340 L 510 325 L 540 340" opacity="0.4" />
            </g>

            {/* Travel Promenade Floor with Perspective lines */}
            <path d="M 40 480 L 220 340 L 380 340 L 560 480 Z" className="fill-[url(#pathGradLight)] dark:fill-[url(#pathGradDark)] stroke-accent/20" strokeWidth="0.75" />
            <line x1="220" y1="340" x2="40" y2="480" className="stroke-slate-500/20 dark:stroke-slate-400/20" />
            <line x1="270" y1="340" x2="180" y2="480" className="stroke-slate-500/20 dark:stroke-slate-400/20" />
            <line x1="330" y1="340" x2="420" y2="480" className="stroke-slate-500/20 dark:stroke-slate-400/20" />
            <line x1="380" y1="340" x2="560" y2="480" className="stroke-slate-500/20 dark:stroke-slate-400/20" />

            {/* Traveler (Walking forward, unburdened, looking up with wonder) */}
            <g transform="translate(330, 245)">
              <circle cx="20" cy="80" r="45" className="fill-accent/5" />
              {/* Traveler Head & Hair */}
              <circle cx="20" cy="20" r="9" className="fill-slate-800 dark:fill-slate-200" />
              {/* Torso */}
              <path d="M 12 32 C 12 28 28 28 28 32 L 32 78 C 32 82 8 82 8 78 Z" className="fill-slate-600 dark:fill-slate-300" />
              {/* Jacket/travel drape */}
              <path d="M 8 36 L 4 58 L 10 60 L 13 40" className="fill-slate-700 dark:fill-slate-400" />
              {/* Stride - legs moving forward freely */}
              <line x1="16" y1="78" x2="10" y2="128" className="stroke-slate-700 dark:stroke-slate-300" strokeWidth="6" strokeLinecap="round" />
              <line x1="24" y1="78" x2="32" y2="124" className="stroke-slate-500 dark:stroke-slate-400" strokeWidth="6" strokeLinecap="round" />
              {/* Small travel companion bag */}
              <path d="M 24 45 L 34 56 L 31 64 L 21 53 Z" className="fill-slate-500 dark:fill-slate-500" />
            </g>

            {/* Sentinel Security Professional (Calm, alert, poised, discreetly behind) */}
            <g transform="translate(190, 258)">
              {/* Specialist Head & earpiece indicator */}
              <circle cx="16" cy="18" r="8.5" className="fill-slate-700 dark:fill-slate-400" />
              <circle cx="21" cy="18" r="1.5" className="fill-accent" />
              {/* Posture: Balanced, hands relaxed, upright executive suit/blazer */}
              <path d="M 6 30 C 6 26 26 26 26 30 L 29 74 L 3 74 Z" className="fill-slate-900 dark:fill-slate-800 stroke-slate-700" strokeWidth="0.5" />
              {/* Inner collared shirt */}
              <path d="M 13 30 L 16 42 L 19 30 Z" fill="#F8FAFC" />
              <line x1="16" y1="42" x2="16" y2="60" className="stroke-slate-900" strokeWidth="1.5" />
              {/* Arms along side, calm and alert */}
              <path d="M 5 32 L 2 68 L 7 68" className="stroke-slate-900 dark:stroke-slate-800" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M 27 32 L 30 68 L 25 68" className="stroke-slate-900 dark:stroke-slate-800" strokeWidth="4.5" strokeLinecap="round" />
              {/* Stance - grounded, observant */}
              <line x1="11" y1="74" x2="11" y2="120" className="stroke-slate-900 dark:stroke-slate-800" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="21" y1="74" x2="21" y2="120" className="stroke-slate-900 dark:stroke-slate-800" strokeWidth="5.5" strokeLinecap="round" />
              
              {/* Subtle protection radius indicator */}
              <ellipse cx="16" cy="120" rx="30" ry="8" fill="none" className="stroke-accent" strokeWidth="1" strokeDasharray="3 3" opacity="0.35" />
            </g>

            {/* Protective Line of Sight */}
            <line x1="212" y1="276" x2="335" y2="280" className="stroke-accent" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          </svg>

          {/* Floating Telemetry Glass Card 1: Professional Status */}
          <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-background-surface/95 border border-border-subtle rounded-xl p-3.5 backdrop-blur-md shadow-card">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] uppercase tracking-widest text-text-primary font-medium">
                  Active Accompaniment
                </span>
              </div>
              <span className="text-[10px] text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
                Discreet Proximity
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-text-secondary font-light pt-1 border-t border-border-subtle">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-accent" />
                <span>Security Professional</span>
              </span>
              <span className="text-text-muted text-[11px]">De-escalation Certified</span>
            </div>
          </div>

          {/* Floating Telemetry Glass Card 2: Situational Context */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:max-w-[280px] bg-background-surface/95 border border-border-subtle rounded-xl p-3.5 backdrop-blur-md shadow-card">
            <div className="flex items-center gap-2 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="text-xs font-normal text-text-primary">
                Historic Center, Jaipur
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-light text-text-muted pt-1 border-t border-border-subtle">
              <div>
                <span className="block text-[10px] text-text-secondary">Corridor Status</span>
                <span className="text-emerald-500 font-normal">Clear & Navigable</span>
              </div>
              <div>
                <span className="block text-[10px] text-text-secondary">Escort Distance</span>
                <span className="text-text-primary font-normal">6m Dynamic</span>
              </div>
            </div>
          </div>

          {/* Subtle Ambient Scan Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-60" />
        </div>

        {/* Caption beneath visual */}
        <div className="p-4 bg-background-surface border-t border-border-subtle flex items-center justify-between text-xs text-text-muted font-light">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span>Situational poise without visible confrontation</span>
          </div>
          <span className="hidden sm:inline text-text-secondary/70">
            Professional travel support
          </span>
        </div>
      </div>
    </div>
  );
};
