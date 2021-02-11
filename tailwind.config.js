const colors = require("tailwindcss/colors");

module.exports = {
  variants: {
    zIndex: ["responsive", "hover"],
  },
  theme: {
    colors: {
      // Build your palette here
      gray: colors.trueGray,
      rose: colors.rose,
    },
  },
};

// theme: {
//   extend: {
//     colors: {
//       rose: {
//         100: "#FBF2ED",
//         200: "",
//         300: "#E6D2C9",
//         400: "",
//         500: "",
//         600: "#F6BCB1",
//         700: "",
//         800: "#E29271",
//         900: "",
//       },
//     },
//   },
// },
