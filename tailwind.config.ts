import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "footer-shadow": "url('/footer/shadow.png')",
        "left-shadow": "url('/Services-details/leftShadow')",
        "right-shadow": "url('/Services-details/right-shadow')",
      },
    },
    colors: {
      btn_color: "#3CC5FF",
      text_blue: "#A5C5E9",
      card: "#122336",
    },
    fontSize: {
      paragraph: "14px",
      h4: "16px",
      h3: "18px",
      h2: "20px",
      h1: "24px",
    },
  },
  plugins: [],
};
export default config;
