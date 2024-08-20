/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--white-color)',
        black: 'var(--black-color)',
        primary: 'var(--primary-color)',
        tomato: 'var(--tomato-color)',
        light: 'var(--light-color)',
        grey: 'var(--grey-color)',
        secondary: 'var(--secondary-color)',
        dark: 'var(--dark-color)',

      }
    },
  },
  plugins: [],
}
