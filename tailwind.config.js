/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      colors: {
        "light-blue": "#227fb4",
        "light-gray": "#9ca3af",
        "dark-gray" : "#202020",
      }
    },
  },
  plugins: [],
}

