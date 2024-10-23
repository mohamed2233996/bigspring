const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    flowbite.content(),
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0aa8a7",
        primaryH: "#088685",
        secondary: "#ccc",
        themeLight:"#edf6f5",
        themeDark:"#1b2229",
        boxColor: "#101418",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
  darkMode:"class",
};
