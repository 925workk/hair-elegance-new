/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#b71c1c',
        'soft-cream': '#f5f5f5',
        'warm-gray': '#e0e0e0',
        'off-white': '#faf9f6',
        'dark-gray': '#333333',
        'light-gray': '#757575',
        'text-color': '#212121',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-playfair-display)'],
      },
      animation: {
        'zoom-in': 'zoom-in 10s ease-in-out infinite',
      },
      keyframes: {
        'zoom-in': {
          '0%, 100%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

