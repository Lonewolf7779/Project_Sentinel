import React from 'react';

export const HeroAtmosphere: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
      {/* Subtle radial ambient gradients */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#38BDF8]/[0.07] via-[#0E1522]/[0.1] to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[30%] -right-[15%] w-[600px] h-[450px] bg-gradient-to-b from-[#1E293B]/[0.2] to-transparent rounded-full blur-3xl" />
      <div className="absolute top-[40%] -left-[10%] w-[500px] h-[400px] bg-gradient-to-b from-[#38BDF8]/[0.03] to-transparent rounded-full blur-3xl" />

      {/* Subtle geometric architectural grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] stroke-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
    </div>
  );
};
