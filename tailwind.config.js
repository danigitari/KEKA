/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
          screens: {
        xs: "240px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
        "2xl": "1536px",
      },
    extend: {
      colors: {
        kekaBlue: "#1762E2",
      },

    },
  },
  plugins: [],
};
