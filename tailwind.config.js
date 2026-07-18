/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#09090B',
          card: '#18181B',
          border: '#27272A',
        },
        light: {
          bg: '#FAFAFA',
          card: '#FFFFFF',
          border: '#E4E4E7',
        },
        accent: {
          primary: '#3B82F6',
          secondary: '#8B5CF6',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Geist', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
