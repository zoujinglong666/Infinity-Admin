import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            comp: resolve(__dirname, "src/components"),
        },
    },
    build: {
        minify: "terser",
        //去除log
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
    },
});
