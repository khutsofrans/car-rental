/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-bookCar': 'linear-gradient(to bottom, #f8f8f8 20%, #ffffff 80%)',
      },
      boxShadow: {
        '3xl': '0 10px 15px 0 rgba(255, 83, 48, 0.35)',
        '4xl': '0 10px 15px 0 rgba(255, 83, 48, 0.5)',
        '5xl': '0 10px 20px 0 rgba(0, 0, 0, 0.1)',
      },
      padding: {
        'container': '0 2.5rem 0 2.5rem',
        'box': '2rem 2.5rem 3rem 3.5rem',
      },
      margin:{
        'box': '0 auto',
      },
      gridTemplateColumns:{
        '3': '1fr 1fr 1fr' 
      },
      gridTemplateRows:{
        '3': 'auto auto auto' 
      }
    },

  },
  plugins: [],
}
