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
          orange: "#FD6703",
          orangeHover: "#e65c00",
          orangeLight: "#fff2e8",
          dark: "#191b1f",
          card: "#22252a",
          cardHover: "#282c33",
          surface: "#2c3038",
          border: "#393e47",
          borderLight: "#484f5c",
          text: "#f5f5f5",
          muted: "#9da4b2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(253, 103, 3, 0.35)",
        cardGlow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
}
