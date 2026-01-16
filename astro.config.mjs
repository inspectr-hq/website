// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import starlightImageZoom from 'starlight-image-zoom';

import tailwindcss from '@tailwindcss/vite';

import svgr from 'vite-plugin-svgr';

import { sitemapConfig } from './sitemap.config.js';

// https://astro.build/config
export default defineConfig({
  // base: '/docs/',
  site: 'https://inspectr.dev',

  integrations: [
    react(),
    starlight({
      plugins: [starlightImageZoom()],
      title: 'Inspectr',
      description: 'Inspectr - Simplifying API and Webhook debugging for developers.',
      // logo: { src: './src/assets/brand_logo_color.svg', alt: 'Inspectr - Logo', replacesTitle: true },
      logo: { src: './src/assets/brand_logo_name_blue.png', alt: 'Inspectr - Logo', replacesTitle: true },
      favicon: '/favicon_blue.png',

      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/inspectr-hq/inspectr' }, {
        icon: 'discord',
        label: 'Discord',
        href: 'https://discord.gg/58rbCxdr8Z'
      }],
      sidebar: [
        {
          label: 'Getting started',
          // autogenerate: { directory: 'docs/getting-started' }
          items: [
            { label: 'Quick start', slug: 'docs/getting-started/quick-start' },
            { label: 'Installation', slug: 'docs/getting-started/installation' },
            { label: 'Quick OpenAPI Mocking', slug: 'docs/getting-started/mocking-quick-start' },
            { label: 'Upgrade', slug: 'docs/getting-started/upgrade' },
          ]
        },
        {
          label: 'Concepts',
          // autogenerate: { directory: 'docs/concepts' }
          items: [
            { label: 'Inspectr Architecture', slug: 'docs/concepts/architecture' },
            { label: 'How It Works', slug: 'docs/concepts/how-it-works' },
            { label: 'Performance & Privacy Principles', slug: 'docs/concepts/performance-privacy' },
            { label: 'Accelerate API-first workflows', slug: 'docs/concepts/api-lifecycle' }
          ]
        },
        {
          label: 'Features',
          // autogenerate: { directory: 'docs/features' }
          items: [
            { label: 'Rules Engine', slug: 'docs/features/inspectr-rules-engine' },
            { label: 'Statistics Dashboard', slug: 'docs/features/inspectr-statistics' },
            { label: 'Tracing Groups', slug: 'docs/features/inspectr-tracing-insights' },
            { label: 'MCP Insights', slug: 'docs/features/inspectr-mcp-insights' },
            { label: 'Mocking API Responses', slug: 'docs/features/mocking' },
            { label: 'Using Response Overrides', slug: 'docs/features/response-override' },
            { label: 'Access Authentication', slug: 'docs/features/access-authentication' },
            { label: 'Run a Command on Startup', slug: 'docs/features/inspectr-command-runner' },
            { label: 'Export/Import & Record Traffic', slug: 'docs/features/inspectr-import-export' },
            { label: 'Export on Shutdown', slug: 'docs/features/inspectr-export' },
            { label: 'Catch/Mock/Mirror mode', slug: 'docs/features/inspectr-operation-modes' },
            { label: 'Inspectr MCP Server', slug: 'docs/features/inspectr-mcp-server' }
          ]
        },
        {
          label: 'Configuration',
          autogenerate: { directory: 'docs/configuration' }
        },
        {
          label: 'Guides',
          // autogenerate: { directory: 'docs/guides' }
          items: [
            { label: 'Debugging APl Traffic', slug: 'docs/guides/api-traffic-debugging' },
            { label: 'Exposing Services Publicly', slug: 'docs/guides/exposing-publicly' },
            { label: 'Proxying a public API', slug: 'docs/guides/proxy-public-api' },
            { label: 'Inspecting Frontend API Requests', slug: 'docs/guides/frontend-inspection' },
            { label: 'Handling CORS Issues', slug: 'docs/guides/handling-cors' },
            { label: 'Capturing Webhooks', slug: 'docs/guides/webhook-debugging' },
            // { label: 'MCP Server Evals with MCPJam', slug: 'docs/guides/mcp-server-eval-with-mcpjam' },
            { label: 'Observability for MCP Servers', slug: 'docs/guides/mcp-observability' }
          ]
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'docs/examples' }
        },
        {
          label: 'Reference',
          collapsed: true,
          autogenerate: { directory: 'docs/reference' }
        }
      ],
      components: {
        ThemeSelect: './src/components/EmptyThemeSelect.astro', // Path to your empty component
        Header: './src/components/starlight/Header.astro', // Custom header component
        MobileMenuFooter: './src/components/starlight/MobileMenuFooter.astro',
        Sidebar: './src/components/starlight/Sidebar.astro'
      },
      customCss: [
        './src/styles/docs.css',
        './src/styles/reactflow-overrides.css',
        './src/styles/custom-header.css',
        './src/styles/starlight-theme.css'
      ]
    }),
    sitemap(sitemapConfig)
    ,
    {
      name: 'sitemap-postprocess',
      hooks: {
        'astro:build:done': async ({ dir, logger }) => {
          try {
            const outDir = fileURLToPath(dir);
            const idx = path.join(outDir, 'sitemap-index.xml');
            const target = path.join(outDir, 'sitemap.xml');
            if (fs.existsSync(idx)) {
              // Copy the index to sitemap.xml while keeping the original for any references
              fs.copyFileSync(idx, target);
              logger.info('Copied sitemap-index.xml -> sitemap.xml');
            }
          } catch (e) {
            console.warn('sitemap postprocess failed:', e instanceof Error ? e.message : e);
          }
        }
      }
    }
  ],

  vite: {
    plugins: [
      tailwindcss(),
      svgr()
    ]
  }
});
