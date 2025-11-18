import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import compress from "vite-plugin-compress";

export default defineConfig({
	base: "/mtgrender/",
	build: {
		target: ["esnext"],
	},
	assetsInclude: ["**/*.png", "**/*.webp"],
	plugins: [vue() /*, compress({ brotli: false })*/],
});
