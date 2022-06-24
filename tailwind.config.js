module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1f1f38",
        bgVariant: "#2c2c6c",
        primary: "#4db5ff",
        primaryVariant: "rgba(77, 181, 255, 0.4)",
        light: "rgba(255, 255, 255, 0.6)",
        black: "rgba(0, 0, 0, 0.3)",
      },
      boxShadowColor: {
        boxShadow: "0 2rem 1rem rgba(0, 0, 0, 0.1)",
      },
      width: {
        22: "22rem",
      },
      height: {
        30: "30rem",
      },
      rotate: {
        10: "10deg",
      },
      borderRadius: {
        2: "2rem",
        3: "3rem",
        12: "12rem",
      },
      transitionDuration: {
        400: "400ms",
      },
      gridTemplateColumns: {
        about: "35% 50%",
        contact: "30% 58%",
      },
      backgroundImage: {
        about: "linear-gradient(45deg, transparent, #4db5ff, transparent)",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px)

      md: "768px",
      // => @media (min-width: 768px)

      lg: "1024px",
      // => @media (min-width: 1024px)

      xl: "1280px",
      // => @media (min-width: 1280px)

      "2xl": "1536px",
      // => @media (min-width: 1536px)
    },
  },
  plugins: [],
};
