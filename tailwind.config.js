module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#00ACC1",
        'brand-100': "#ABDFE7",
        secondary: "#405467",

        default: {
          900: "#2192A5"
        },
      },
      spacing: {
        '13': "3.25rem",
      },
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
}
