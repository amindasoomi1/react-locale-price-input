import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ entryRoot: "src" })],
  resolve: {
    alias: {
      // eslint-disable-next-line
      // @ts-ignore
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      name: "react-locale-price-input",
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
