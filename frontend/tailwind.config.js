/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B3C53",
        secondary: "#456882",
        accent: {
          rust: "#D2C1B6",
          light: "#F9F3EF",
          gray: "#9ca3af",
        },
      },
      fontFamily: {
        noto: ["var(--font-noto)"],
        anton: ["var(--font-anton)"],
      },
    },
  },
  plugins: [],
};
