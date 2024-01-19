import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), htmx()],
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
});
