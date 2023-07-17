/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/admin/src/**/*.{js,jsx,ts,tsx}",
    "./apps/shop/src/**/*.{js,jsx,ts,tsx}",
    "./apps/admin/src/**/*.html",
    "./apps/web/src/**/*.html",
    "./libs/ui/src/lib/**/*.html",
    "./libs/users/src/lib/**/*.html",
  ],
  theme: {
    screens: {
      's900': {'max': '900px'},
      // => @media (max-width: 900px) { ... }
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      maxHeight: {
      '50px': '50px', // Add this line
    }
  },
  },
  plugins: [],
}

