/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        ovo: ["Ovo", "serif"]
      },
      boxShadow: {
        black: '5px 5px 0px 0px rgba(0,0,0,1)', // Define custom shadow
        'black-lg': '0 10px 15px rgba(0, 0, 0, 0.8)', // Larger custom shadow
      },
    },
  },
  plugins: [],
}