/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.js"],
  theme: {
    extend: {
      colors: {
        "offwhite": "#f1f1f1",
        "light": "#fafafa",
        "medium": "#274076",
        "dark": "#1a2b50"
      },
      fontFamily: {
        "sans" : "Inter, sans-serif"

      }
      }
      
  },
  plugins: [],
}

