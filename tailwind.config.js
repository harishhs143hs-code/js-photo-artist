/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: '#39064F', brand: '#70139A', violet: '#8B2DB2',
        lavender: '#E8D6F1', paper: '#FAF8FC', ink: '#21152A', muted: '#817589',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.7rem, 7.2vw, 6.2rem)', { lineHeight: '1', letterSpacing: '-0.015em' }],
        'display-lg': ['clamp(2.2rem, 4.8vw, 4.1rem)', { lineHeight: '1.04', letterSpacing: '-0.01em' }],
        'display-md': ['clamp(1.7rem, 3vw, 2.5rem)', { lineHeight: '1.1' }],
        eyebrow: ['0.72rem', { lineHeight: '1', letterSpacing: '0.22em' }],
      },
    },
  },
  plugins: [],
}
