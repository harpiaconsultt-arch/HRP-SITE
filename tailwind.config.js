/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cta-green': 'var(--color-cta-green)',
        'background-dark': 'var(--color-background-dark)',
        'background-light': 'var(--color-background-light)',
        'surface-dark': 'var(--color-surface-dark)',
        'cobre': 'var(--cobre)',
      },
    },
  },
  plugins: [],
}
