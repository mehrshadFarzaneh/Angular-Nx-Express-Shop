/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/admin/src/**/*.{js,jsx,ts,tsx}",
    "./apps/shop/src/**/*.{js,jsx,ts,tsx}",
    "./apps/admin/src/**/*.html",
    "./apps/web/src/**/*.html",
    "./libs/ui/src/lib/**/*.html",
  ],
  theme: {
    screens: {
      's900': {'max': '900px'},
      // => @media (max-width: 900px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

