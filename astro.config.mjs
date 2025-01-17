// @ts-check
import { defineConfig } from 'astro/config';

import robotsTxt from "astro-robots-txt";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt(), tailwind()],
  output: "server",
  adapter: vercel(),
});