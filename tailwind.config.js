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
      colors: {
        pending: "rgba(189, 189, 3, 0.103)",
        approved: "rgba(0, 128, 0, 0.151)",
        goldenrod: "#DAA520",
        crimson: "#DC143C",
        active: "rgba(0, 128, 0, 0.05)",
        passive: "rgba(255, 0, 0, 0.05)",
        viewBtn: "rgba(0, 0, 139, 0.596)",
      },
    },
  },
  plugins: [],
};
