/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray_color: "var(--gray_color)",
      light_gray_color: "var(--light_gray_color)",
      pragrap_color: "var(--pragrap_color)",
      shade_color: "var(--shade_color)",
      arrival_color: "var(--arrival_color)",
      white_color: "var(--white_color)",
      black_color: "var(--black_color)",
      black_opacity: "var(--black_opacity)",
      white_smoke: "var(--white_smoke)",
      button_color: "var(--button_color)",
      border_color: "var(--border_color)",
      button_opacity: "var(--button_opacity)",
      red_color: "var(--red_color)",
      opacity_bg: "var(--opacity_bg)",
      transparent: "transparent",
    },
    fontFamily: {
      Roboto: ["var(--font-roboto)"],
    },
    extend: {
      screens: {
        xs: "350px",
        sm: "575px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1600px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
