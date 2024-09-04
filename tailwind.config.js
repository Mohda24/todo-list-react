/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      screens:{
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
      maxWidth: {
        sm: '100%', 
        md: '540px',
        lg: '720px',
        xl: '960px',
        '2xl': '1140px',
        '3xl': '1320px', 
      }

    },
    extend: {},
  },
  plugins: [],
}

