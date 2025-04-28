// @ts-check
// import node from '@astrojs/node'
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import svgr     from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),    // picks up postcss.config.js automatically
  ],
  vite: {
    plugins: [
      svgr({
        // if you want .svg?react imports to produce React components:
        exportAsDefault: false
      })
    ]
  },
  output: 'static',
});