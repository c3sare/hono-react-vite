import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { readFile } from "node:fs/promises";

const isDev = process.env.NODE_ENV === "development";
let html = await readFile(isDev ? "index.html" : "build/index.html", "utf8");

if (isDev) {
  html = html.replace(
    "<head>",
    `
    <script type="module">
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
</script>

    <script type="module" src="/@vite/client"></script>
    `
  );
}

const app = new Hono();

app.use("/assets*", serveStatic({ root: isDev ? "./" : "build/" }));

app.use("/*", serveStatic({ root: "public/" }));

app.get("/*", (c) => c.html(html));

export default app;
