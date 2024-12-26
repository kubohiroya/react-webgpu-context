import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const projectName = "react-webgpu-context";

export default defineConfig({
  server: {
    port: 4200,
    host: "localhost",
    headers: {},
  },

  base: `/${projectName}/`,

  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, `lib/${projectName}.js`),
      name: projectName,
      // 適切な拡張子が追加されます
      fileName: projectName,
    },
    target: "esnext",
    outDir: `./dist/${projectName}`,
    rollupOptions: {
      external: [],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      input: {
        main: "src/index.ts",
      },
    },
  },
});
