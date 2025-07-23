// @ts-check
import { defineConfig } from 'astro/config';
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
            { label: 'Accelerate API-first workflows', slug: 'docs/concepts/api-lifecycle' }
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
            { label: 'Access Authentication', slug: 'docs/guides/access-authentication' },
            { label: 'Proxying a public API', slug: 'docs/guides/proxy-public-api' },
            { label: 'Inspecting Frontend API Requests', slug: 'docs/guides/frontend-inspection' },
            { label: 'Handling CORS Issues', slug: 'docs/guides/handling-cors' },
            { label: 'Mocking API Responses', slug: 'docs/guides/mocking' },
            { label: 'Using Response Overrides', slug: 'docs/guides/response-override' },
            { label: 'Capturing Webhooks', slug: 'docs/guides/webhook-debugging' }
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
      lastmod: new Date('2025-07-23'),
    })
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
