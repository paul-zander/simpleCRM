/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
        5: "5 5 0%",
        4: "4 4 0%",
        6: "6 6 0%",
      },
      boxShadow: {
        "3xl":
          "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
    },
  },
  plugins: [],
};
