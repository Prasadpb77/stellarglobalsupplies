/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Agent accent palette
        agent: {
          analyst:    '#6366f1',  // indigo
          strategist: '#8b5cf6',  // violet
          business:   '#06b6d4',  // cyan
          cloud:      '#f59e0b',  // amber
          marketing:  '#10b981',  // emerald
          executive:  '#ef4444',  // red
        },
        // Brand
        brand: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          500: '#4f6ef7',
          600: '#3b55e6',
          700: '#2d44c8',
          900: '#1a2770',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      spacing: {
        'sidebar':    '260px',
        'sidebar-sm': '64px',
        'header':     '60px',
      },
      animation: {
        'fade-in':        'fadeIn 0.2s ease-out',
        'slide-up':       'slideUp 0.25s ease-out',
        'slide-in-left':  'slideInLeft 0.25s ease-out',
        'pulse-slow':     'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow':      'spin 3s linear infinite',
        'shimmer':        'shimmer 2s linear infinite',
        'blink':          'blink 1s step-start infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-16px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          from: { backgroundPosition: '-200% 0' },
          to:   { backgroundPosition: '200% 0' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'shimmer-gradient':
          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' fill='none'/%3E%3Cpath d='M0 .5H32M.5 0V32' stroke='%23334155' stroke-opacity='0.3'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-indigo': '0 0 20px -5px rgba(99, 102, 241, 0.5)',
        'glow-purple': '0 0 20px -5px rgba(139, 92, 246, 0.5)',
        'glow-cyan':   '0 0 20px -5px rgba(6, 182, 212, 0.5)',
        'inner-slate': 'inset 0 2px 4px 0 rgba(0,0,0,0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
