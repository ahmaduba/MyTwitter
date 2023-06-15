/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
    },
    colors:{
      'twitter':'#03a9f4',
    },
    extend: {},
  },
  plugins: [],
}



// npx tailwindcss -i ./css/style.css -o style.css --watch