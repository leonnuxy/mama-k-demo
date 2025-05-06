/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: { 
    extend: {
      colors: {
        'orange': {
          500: '#f97316',
        },
        'plant-green': '#38A169',
        'blood-red': '#DC2626',
      }
    } 
  },
  plugins: [],
}
