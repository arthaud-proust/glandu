import * as fs from "fs";
import { join, resolve } from "path";
import { defineConfig } from "vite";
const root = resolve(__dirname);
const outDir = resolve(__dirname, "dist");

// plugin
const redirectToDir = ({ root }) => ({
    name: "redirect-to-dir",
    configureServer(server) {
        server.middlewares.use((req, res, next) => {
            const filePath = join(root, req.url);

            fs.stat(filePath, (err, stats) => {
                if (!err && stats.isDirectory() && !req.url.endsWith("/")) {
                    res.statusCode = 301;
                    res.setHeader("Location", req.url + "/");
                    res.setHeader("Content-Length", "0");
                    res.end();
                    return;
                }

                next();
            });
        });
    },
});

export default defineConfig({
    root,
    plugins: [redirectToDir({ root })],
    build: {
        outDir,
    },
});
