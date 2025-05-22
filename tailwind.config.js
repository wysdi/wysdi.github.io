module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // Disabling dark mode to focus on light theme
  theme: {
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
      sans: ['Roboto Mono', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#2D3748', // Dark blue-gray for text
        accent: '#3182CE', // Blue accent
        light: '#FFFFFF', // Pure white background
        muted: '#F7FAFC', // Very light gray for subtle backgrounds
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#2D3748',
            lineHeight: '1.6',
            a: {
              color: '#3182CE',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
