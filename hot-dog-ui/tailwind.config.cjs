/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bgPrimary': "#161822"
      },
    },
  },
  plugins: [require("daisyui")],
}
