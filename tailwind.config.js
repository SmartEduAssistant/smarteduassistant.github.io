/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFA851',
          light: '#FFB870',
          dark: '#FF8F30',
        },
        background: {
          DEFAULT: '#FFF7ED',
          light: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Source Han Sans CN', '思源黑体', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

