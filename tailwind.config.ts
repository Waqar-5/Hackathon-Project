import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       fontfamily: {
        font:"Poppins",
        font2: "Inter",
        montserrat: 'Montserrat', // Add this line
       }

      },
    },
  },
  plugins: [],
};
export default config;
