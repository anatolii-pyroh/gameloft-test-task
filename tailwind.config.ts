import type { Config } from "tailwindcss";

import theme from "./src/theme";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: theme,
  plugins: [
    require("tailwindcss-animate"),
    require("@mertasan/tailwindcss-variables"),
    // Add a media-query based variant that only applies on hover-capable pointers
    function ({ addVariant }: any) {
      addVariant("hoverable", "@media (hover: hover) and (pointer: fine)");
    },
  ],
};
export default config;
