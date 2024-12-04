import * as path from "path"; // Use * for better compatibility with newer Node.js versions
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // Alias for src folder
        },
    },
});
