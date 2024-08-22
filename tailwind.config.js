/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "custom-orange": "#FE4C00",
        "custom-semipink": "#FFEFEF"
      },
      textColor: {
        "custom-orange": "#FE4C00"
      }
    },
  },
  plugins: [],
}