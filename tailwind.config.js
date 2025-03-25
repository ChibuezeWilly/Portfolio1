export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px", // Start small screens from 576px
        md: "800px", // Medium screens from 800px
        lg: "980px", // Large screens from 960px (customized)
        xl: "1100px", // Extra-large screens from 1200px
        '2xl': "1400px", // Extra-extra-large screens from 1400px
        '3xl': "1700px" // Extra-extra-large screens from 1700px
      },
    },
  },
  plugins: [],
}