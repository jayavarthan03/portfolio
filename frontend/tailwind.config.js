/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode toggle
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // blue-500
          DEFAULT: '#1d4ed8', // blue-700
          dark: '#1e40af', // blue-800
        },
        darkBg: {
          DEFAULT: '#030712', // gray-950 (extremely dark black-blue)
          card: '#0f172a', // slate-900 (for card backgrounds)
          border: '#1e293b', // slate-800
        },
        lightBg: {
          DEFAULT: '#f8fafc', // slate-50
          card: '#ffffff',
          border: '#e2e8f0', // slate-200
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
