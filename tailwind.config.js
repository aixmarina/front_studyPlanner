/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#EF5A3C',
        'secondary' : '#F5EDCC',
        'tertiary' : '#6D6E5E',
        'pale' : '#F2F0EB',
        'dark' : '#282828'
      },
      backgroundImage: {
        'hero-pattern': "url('./public/background_landing.svg')",
      }
    },
  },
  plugins: [],
}