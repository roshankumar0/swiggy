/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'proxima-nova': ['ProximaNova', 'Arial', 'sans-serif'],
        'proxima-nova-bold': ['ProximaNovaBold', 'Arial', 'sans-serif'],
        'proxima-nova-light': ['ProximaNovaLight', 'Arial', 'sans-serif'],
        'proxima-nova-condensed-regular': ['ProximaNovaCondensedRegular', 'Arial', 'sans-serif'],
        'gilroy-bold': ['Gilroy_Bold', 'Arial', 'sans-serif'],
        'Gilroy': ['Gilroy', 'Arial', 'sans-serif'],
        'Proxima-nova-cond': ['ProximaNovaCond', 'Arial', 'sans-serif'],
        'ProximaNova-Medium': ['ProximaNova-Medium', 'Arial', 'sans-serif'],
        'Gilroy-ExtraBold-Rupee': ['Gilroy-ExtraBold-Rupee', 'Arial', 'sans-serif'],
        'Gilroy-Medium-Rupee': ['Gilroy-Medium-Rupee', 'Arial', 'sans-serif'],
        'ProximaNova-Bold': ['ProximaNova-Bold', 'Arial', 'sans-serif']
      },
    },
  },
  plugins: [],
}