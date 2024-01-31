import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'top': '#213464',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '800px',
        'lg': '992px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        primary: '#213464',
        primaryLight: '#407BB2',
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
