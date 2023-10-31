/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      backgroundImage:{
        'eagle': "url('./src/lib/Eagle.jpg)",
        'colliseum': "url('./src/lib/colliseum.jpg)"
      },
      fontFamily: {
        fredericka: ['"Fredericka the Great"', 'serif'],
        acme: ['Acme', 'sans-serif'],
        quattrocento: ['"Quattrocento Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

