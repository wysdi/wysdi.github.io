module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#334155',
        accent: '#6366F1',
        'accent-hover': '#4F46E5',
        background: '#FFFFFF',
        'background-secondary': '#F8FAFC',
        muted: '#64748B',
        border: '#E2E8F0',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#334155',
            lineHeight: '1.7',
            fontSize: '1rem',
            a: {
              color: '#6366F1',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#4F46E5',
                textDecoration: 'underline',
              },
            },
            h1: {
              color: '#0F172A',
              fontWeight: '800',
            },
            h2: {
              color: '#0F172A',
              fontWeight: '700',
            },
            strong: {
              color: '#0F172A',
              fontWeight: '600',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active'],
      transform: ['hover'],
      scale: ['hover'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
