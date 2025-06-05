/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
        "Dark-Gray": "hsl(0, 0%, 55%)",
        "Very-Dark-Gray": "hsl(0, 0%, 41%)",
      },
      fontFamily:{
        "family1": "Josefin Sans",
        "family2": "Alata"
      }
    },
  },
  plugins: [],
};
