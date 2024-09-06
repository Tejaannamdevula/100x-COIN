import type { Config } from "tailwindcss";
import baseConfig from "@repo/tailwind-config/tailwind.config"; //  base config

const config: Config = {
  ...baseConfig, //  base config
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add custom extensions specific to `ui` package here
    },
  },
  plugins: [],
};

export default config;
