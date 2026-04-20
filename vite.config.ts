import { defineConfig } from "vite";
import { resolve } from 'path'

export default defineConfig({
  base: "/lajc_digital_and_consulting/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        },
    },
  },
});