import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  attributify: {
    prefix: "w:",
  },
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {
      colors: {
        teal: {
          100: "#096",
        },
        coal: "#2C2C37",
      },
    },
  },
  plugins: [formsPlugin, require("daisyui")],
});
