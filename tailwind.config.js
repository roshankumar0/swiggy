/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ProximaNova': ['ProximaNova', 'Arial', 'sans-serif'],
        'ProximaNovaBold': ['ProximaNovaBold', 'Arial', 'sans-serif'],
        'ProximaNovaLight': ['ProximaNovaLight', 'Arial', 'sans-serif'],
        'ProximaNovaCondensedRegular': ['ProximaNovaCondensedRegular', 'Arial', 'sans-serif'],
        'Gilroy_Bold': ['Gilroy_Bold', 'Arial', 'sans-serif'],
        'Gilroy': ['Gilroy', 'Arial', 'sans-serif'],
        'ProximaNovaCond': ['ProximaNovaCond', 'Arial', 'sans-serif'],
        'ProximaNova-Medium': ['ProximaNova-Medium', 'Arial', 'sans-serif'],
        'Gilroy-ExtraBold-Rupee': ['Gilroy-ExtraBold-Rupee', 'Arial', 'sans-serif'],
        'Gilroy-Medium-Rupee': ['Gilroy-Medium-Rupee', 'Arial', 'sans-serif'],
        'ProximaNova-Bold': ['ProximaNova-Bold', 'Arial', 'sans-serif'],
        'ProximaNovaExtraBold': ['ProximaNovaExtraBold', 'Arial', 'sans-serif'],
        'CustomFont': ['CustomFont', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}