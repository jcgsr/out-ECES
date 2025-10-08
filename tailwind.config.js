/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte}",
    "./node_modules//flowbite-svelte/**/*.{html, js, svelte}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "eagle": "url('./src/lib/Eagle.jpg)",
        "colliseum": "url('./src/lib/colliseum.jpg)",
      },
      fontFamily: {
        fredericka: ['"Fredericka the Great"', "serif"],
        acme: ["Acme", "sans-serif"],
        quattrocento: ['"Quattrocento Sans"', "sans-serif"],
      },
      colors: {
        papyrus: "#D6C2AE",
        papyrusdark: "#BD8F58",
        papyrusultradark: "#5A1C15",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  darkMode: "media",
};
