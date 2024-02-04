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
        "primary-dark": '#0D072C',
        "primary": '#1b3167e5',
        "primary-light": '#278CE7',
        'secondary-light': '#F2F2F2',
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
        bgPrimaryDark: '#0D072C',
        bgPrimary: '#1b3167e5',
        bgPrimaryLight: '#278CE7',
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
