import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [vue(), svgr({ svgrOptions: { icon: true } })],
    resolve: {
        alias: {
            '@': "/src",
            '@a': "/src/assets",
            '@c': "/src/components",
            '@lc': "/src/components/lc",
        }
    }
});