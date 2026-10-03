/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
    },
  },
  plugin: [],
};

export default config;
