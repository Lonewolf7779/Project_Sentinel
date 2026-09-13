/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        // Deliberately omit bold weights to enforce typography rules
      },
      colors: {
        background: {
          DEFAULT: '#090B0E',
          deeper: '#060709',
          surface: '#11151C',
          elevated: '#171D26',
          highlight: '#202834',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          light: 'rgba(255, 255, 255, 0.12)',
          accent: 'rgba(56, 189, 248, 0.3)',
        },
        text: {
          primary: '#F3F5F7',
          secondary: '#94A3B8',
          muted: '#64748B',
          accent: '#38BDF8',
        },
        accent: {
          DEFAULT: '#38BDF8',
          hover: '#60A5FA',
          soft: 'rgba(56, 189, 248, 0.1)',
          glow: 'rgba(56, 189, 248, 0.2)',
        },
      },
      letterSpacing: {
        widest: '0.15em',
        relaxed: '0.04em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'glow': '0 0 40px -10px rgba(56, 189, 248, 0.15)',
      },
    },
  },
  plugins: [],
}
