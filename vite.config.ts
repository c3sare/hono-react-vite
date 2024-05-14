import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import devServer from "@hono/vite-dev-server";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    devServer({
      entry: "server.ts",
      exclude: [
        /.*\.tsx?($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /.*\.(svg|png)($|\?)/,
        /^\/@.+$/,
        /^\/favicon\.ico$/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/,
      ],
      injectClientScript: false,
      env: {
        NODE_ENV: "development",
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});
