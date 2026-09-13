# PROJECT SENTINEL

> **Professional security support for every journey.**

Project Sentinel is a professional tourist safety and travel support platform designed initially for India. It connects foreign tourists, domestic travelers, solo visitors, female travelers, and families with verified, professionally trained security professionals.

Sentinel is built around **prevention, situational awareness, safe travel, de-escalation, and professional presence**—not vigilante actions, confrontation, or intimidation.

---

## 🛡️ Phase 1 Highlights

- **Design Philosophy**: Luxury travel × professional security × modern technology
- **Restrained Color System**: Deep charcoal & soft graphite with a refined subtle cyan accent
- **Lightweight Typography**: Strictly light & regular weights (300, 400, 500) powered by *Plus Jakarta Sans*
- **GSAP Animations**: Coordinated entrance timeline, ScrollTrigger section reveals, and full `prefers-reduced-motion` compliance
- **Modular Architecture**: Component-driven layout with reusable buttons, cards, badges, and visual telemetry scenes

---

## 📁 Project Structure

```
Project_Sentinel/
├── public/
│   └── favicon.svg                    # Sentinel geometric beacon SVG
├── src/
│   ├── animations/
│   │   ├── gsapConfig.ts              # GSAP + ScrollTrigger registration
│   │   ├── heroAnimations.ts          # Hero entrance timeline
│   │   └── scrollAnimations.ts        # Section reveals & card stagger triggers
│   ├── components/
│   │   ├── common/                    # Badge, Button, Card, Container
│   │   ├── layout/                    # Navbar, Footer
│   │   └── visual/                    # HeroAtmosphere, TravelerProtectionScene, SafetyMapVisual
│   ├── sections/                      # Hero, TrustStrip, WhySentinel, HowItWorks, SafetyIntelligence, ProtectionPersonnel, FinalCTA
│   ├── styles/                        # variables.css, globals.css
│   ├── types/                         # TypeScript interfaces
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm (v9+)

### Installation

```bash
# Clone the repository
git clone https://github.com/Lonewolf7779/Project_Sentinel.git

# Navigate into project directory
cd Project_Sentinel

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
```

The production assets will be generated in the `dist/` directory.

---

## 📜 License

Private project. All rights reserved.
