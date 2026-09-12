/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FD6703',
          orangeHover: '#e65c00',
          orangeLight: '#fff2e8',
          dark: '#191b1f',
          card: '#22252a',
          cardHover: '#282c33',
          surface: '#2c3038',
          border: '#393e47',
          borderLight: '#484f5c',
          text: '#f5f5f5',
          muted: '#9da4b2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(253, 103, 3, 0.35)',
        cardGlow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'orange-glow': '0 0 40px -8px rgba(253, 103, 3, 0.5)',
      },
      animation: {
        spotlight: 'spotlight 2s ease 0.75s 1 forwards',
        'border-beam': 'border-beam-spin 12s linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
