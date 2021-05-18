const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        // h1: { fontSize: theme("fontSize.7xl") },
        // h2: { fontSize: theme("fontSize.4xl") },
        // h3: { fontSize: theme("fontSize.2xl") },
        // h4: { fontSize: theme("fontSize.xl") },
        body: { backgroundColor: theme("colors.rose.50") },
      });
    }),
    require("@tailwindcss/typography"),
  ],
  variants: {
    zIndex: ["responsive", "hover"],
  },
  theme: {
    colors: {
      // Build your palette here
      gray: colors.trueGray,
      //rose: colors.rose,
    },
    extend: {
      colors: {
        rose: {
          50: "#FFF7F5",
          100: "#FEEAE6",
          200: "#FCD6CF",
          300: "#F9C3B8",
          400: "#F5B0A3",
          500: "#EF9F8F",
          600: "#E88E7D",
          700: "#E0856C",
          800: "#D66F5C",
          900: "#CB624D",
        },
        accent: {
          dark: "#E29271",
          grey: "E6D2C9",
        },
      },
    },
  },
};
