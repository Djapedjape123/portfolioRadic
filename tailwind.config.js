/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
         grotesk: ["Clash Grotesk Variable", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },


  },
  plugins: [],
}

