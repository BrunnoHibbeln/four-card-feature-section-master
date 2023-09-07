/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      fontSize: {
        body: '0.938rem',
      },
      colors: {
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',

        'light-gray': 'hsl(0, 0%, 98%)',
        gray: 'hsl(229, 6%, 66%)',
        'dark-gray': 'hsl(234, 12%, 34%)',
      },
    },
  },
  plugins: [],
}
