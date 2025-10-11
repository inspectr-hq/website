// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

import svgr     from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
  // base: '/docs/',
  site: 'https://inspectr.dev',

  integrations: [
    react(),
    starlight({
      title: 'Documentation',
      description: 'Simplifying API and Webhook debugging for developers.',
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
          ]
        },
        {
          label: 'Concepts',
          // autogenerate: { directory: 'docs/concepts' }
          items: [
            { label: 'Inspectr Architecture', slug: 'docs/concepts/architecture' },
            { label: 'How It Works', slug: 'docs/concepts/how-it-works' },
            { label: 'Performance Principles', slug: 'docs/concepts/performance' },
            { label: 'Accelerate API-first workflows', slug: 'docs/concepts/api-lifecycle' }
          ]
        },
        {
          label: 'Features',
          autogenerate: { directory: 'docs/features' }
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
            { label: 'Access Authentication', slug: 'docs/guides/access-authentication' },
            { label: 'Proxying a public API', slug: 'docs/guides/proxy-public-api' },
            { label: 'Inspecting Frontend API Requests', slug: 'docs/guides/frontend-inspection' },
            { label: 'Handling CORS Issues', slug: 'docs/guides/handling-cors' },
            { label: 'Mocking API Responses', slug: 'docs/guides/mocking' },
            { label: 'Using Response Overrides', slug: 'docs/guides/response-override' },
            { label: 'Capturing Webhooks', slug: 'docs/guides/webhook-debugging' },
            { label: 'Observability for MCP Agents', slug: 'docs/guides/mcp-observability' }
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
      },
      customCss: [
        './src/styles/docs.css',
        './src/styles/reactflow-overrides.css',
        './src/styles/custom-header.css',
        './src/styles/starlight-theme.css',
      ],
    }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      // Ensure standard filename and enable per-URL lastmod via serialize
      filenameBase: 'sitemap',
      serialize: (item) => {
        try {
          const url = new URL(item.url);
          const p = url.pathname;
          // Only set lastmod for docs pages based on MD/MDX mtimes
          if (p.startsWith('/docs')) {
            // Map '/docs/.../' -> src/content/docs/docs/... .mdx (index.mdx for '/docs/')
            let rel = p.slice('/docs'.length); // e.g. '/getting-started/installation/'
            let filePath;
            if (rel === '' || rel === '/') {
              filePath = path.resolve('src/content/docs/docs/index.mdx');
            } else {
              if (rel.endsWith('/')) rel = rel.slice(0, -1);
              filePath = path.resolve('src/content/docs/docs' + rel + '.mdx');
            }
            if (fs.existsSync(filePath)) {
              const stat = fs.statSync(filePath);
              return { ...item, lastmod: new Date(stat.mtimeMs) };
            }
          }

          // Set lastmod for key non-docs static pages from their .astro files
          const staticPageFileByPath = new Map([
            ['/', 'src/pages/index.astro'],
            ['/launch/', 'src/pages/launch.astro'],
            ['/pricing/', 'src/pages/pricing.astro'],
          ]);
          const astroFile = staticPageFileByPath.get(p);
          if (astroFile) {
            const filePath = path.resolve(astroFile);
            if (fs.existsSync(filePath)) {
              const stat = fs.statSync(filePath);
              return { ...item, lastmod: new Date(stat.mtimeMs) };
            }
          }
        } catch {}
        return item;
      },
    })
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
            console.warn('sitemap postprocess failed:', e?.message || e);
          }
        }
      }
    }
  ],

  vite: {
    plugins: [
      tailwindcss({
        config: './tailwind.config.js'
      }),
      svgr({
        exportAsDefault: false
      })
    ]
  }
});
