module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "navy",
        "weather-secondary": "#282C35"
      },
    },

    fontFamily: {
      Bebas: ["Bebas Neue, sans-serif"]
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px"
    }
  },
  plugins: [],
}

