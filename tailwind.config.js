/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        // Strictly omit bold weights to enforce typography rules
      },
      colors: {
        background: {
          DEFAULT: 'var(--bg-primary)',
          deeper: 'var(--bg-secondary)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          highlight: 'var(--bg-highlight)',
        },
        border: {
          subtle: 'var(--border-subtle)',
          light: 'var(--border-light)',
          accent: 'var(--border-accent)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          accent: 'var(--text-accent)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          soft: 'var(--accent-soft)',
          glow: 'var(--accent-glow)',
        },
      },
      letterSpacing: {
        widest: '0.15em',
        relaxed: '0.04em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        'card': 'var(--shadow-card)',
        'glow': 'var(--shadow-glow)',
      },
    },
  },
  plugins: [],
}
