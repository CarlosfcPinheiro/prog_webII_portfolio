/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      height:{
        '128':'52rem',
      }
    },
    colors:{
      'primary': '#0a0916',
    },
    
  },
  plugins: [],
}

