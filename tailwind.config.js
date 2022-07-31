/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    letterSpacing: {
      letterS: "0.5em",
    },
    extend: {
      colors: {
        btnGreen: "#3D8168",
        subtitleColor: "#91949A",
        titleColor: "#91949A",
        paragraphColor: "#91949A",
        priceColorGreen: "#3C8067",
        hoverGreenColor: "#1A4031",
      },
    },
  },
  plugins: [],
};
