/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height: {
        'cta': '3.5rem',
      },
      colors: {
        /* == ORIGINAL == */
        /*'accent-hovered': '#3c1e5a',
        'accent': '#663399',
        'accent-light': '#f3ebfe',
        'accent-light-hovered': '#d8bdfc',
        'secondary-accent': 'rgb(249 115 22)',*/
        
        'accent-hovered': '#043b34',
        'accent': '#086b5f',
        'accent-light': '#effefc',
        'accent-light-hovered': '#d3fbf7',
        'secondary-accent': '#2e495c',
        'secondary-accent-hovered': '#1e303d',
        'black': '#121212',
        'white': '#fcfcfc',
      },
    },
    backgroundImage: {
      'headshot': "url('https://s3.amazonaws.com/artifacts.foxcounselingservices.com/headshot.jpeg')",
      'hero-pattern-mobile': "url('https://s3.amazonaws.com/artifacts.foxcounselingservices.com/bg-m.jpg')",
      'hero-pattern-laptop': "url('https://s3.amazonaws.com/artifacts.foxcounselingservices.com/bg-l.jpg')",
      'lavender-2': "url('https://s3.amazonaws.com/artifacts.foxcounselingservices.com/lavender-02.png')",
      'lavender-3': "url('https://s3.amazonaws.com/artifacts.foxcounselingservices.com/lavender-03.png')",
      'lavender-4': "url('https://s3.amazonaws.com/artifacts.foxcounselingservices.com/lavender-04.png')",
      'banner-mobile': "url('https://s3.amazonaws.com/artifacts.foxcounselingservices.com/banner-lg.jpg')",
      'banner-laptop': "url('https://s3.amazonaws.com/artifacts.foxcounselingservices.com/banner-xl.jpg')",
    },
    fontFamily: {
      'body': ['Source Sans Pro', 'sans-serif'],
      'title': ['Lora', 'serif'],
    },
    boxShadow: {
      'banner': 'box-shadow: 0 3px 6px rgba(102,51,153,0.16), 0 3px 6px rgba(102,51,153,0.23)',
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
}
