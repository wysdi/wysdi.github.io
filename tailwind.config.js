/* tailwind.config.js */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./themes/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A202C',
        secondary: '#4A5568',
        muted: '#718096',
        accent: '#4299E1',
        'accent-hover': '#3182CE',
        background: '#F7FAFC',
        'background-secondary': '#EDF2F7',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        medium: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        glow: '0 0 20px rgba(66, 153, 225, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
