/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "gray98": "#FAFAFA",
        "purply": "#633BFE",
      },
      height:{
        "36%":"36%",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgb(99, 59, 254)',
      },
      screens:{
        'mobile':'480px'
      },
    },
  },
  plugins: [],
}
