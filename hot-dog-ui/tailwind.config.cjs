/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { 'sm': { 'max': '690px' }, 'md': {'min': '691px'}, 'lg': {'min': '1100px'} },
      colors: {
        'bgPrimary': "#161822"
      },
    },
  },
  plugins: [require("daisyui")],
}
