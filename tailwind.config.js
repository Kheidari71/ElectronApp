/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        app_main: "14px"
        
      },
      spacing: {
        // Custom draggable utility
        'drag': '-webkit-app-region: drag;',
        'no-drag': '-webkit-app-region: no-drag;'
      }

    },
  },
  plugins: [],
}

