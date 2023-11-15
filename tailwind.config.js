/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // Specify main colors of the APP
    extend: {
      colors: {
        "green-20": "#f7fee7",
        "green-50": "#ecfccb",
        "green-100": "#bef264",
        "green-500": "#213609",
        "primary-100": "#bbf7d0",
        "primary-300": "#1ea897",
        "primary-500": "#1ea897",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#bef264",
    },
    backgroundImage: (theme) => ({
      "mobile-home": "url('./assets/HomePageGraphic.png')",
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    content: {
      abstractwaves: "url('./assets/Bird2.png')",
      sparkles: "url('./assets/Bird1.png')",
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
},
  plugins: [],
};
