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
        'container': '0 20px 0 20px',
        'box': '16px 20px 24px 28px',
        'book': '9.6px 10.4px',
        'plan': '42.4px 0',
        'plan2': '0 24px',
        'plan3': '8px 48px',
        'pick': '80px 0',
        'pickBox': '16px 28px',
      },
      margin:{
        'box': '0 auto',
        'plan': '10.4px 0 24px 0',
        'pick': '4px 0 8px 0',
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
