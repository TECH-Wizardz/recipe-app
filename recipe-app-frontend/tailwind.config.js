/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-color": "#f4612d",
        "white-color": "#ffff",
        "dark-grey-color": "#4d4d4d",
        "mid-grey-color": "#6b7280 ",
        "light-grey-color": "#f6f6f6",
        "black-color": "#111827",
        "overlay-color": "rgba(49,49,49,0.8)",
        "slate-color": "#334155",
      },
      fontFamily: {
        merriweather: ["Merriweather", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
