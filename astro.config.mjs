// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import svgr     from 'vite-plugin-svgr'

// https://astro.build/config
export default defineConfig({
  // base: '/docs/',

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
          autogenerate: { directory: 'docs/getting-started' }
          // items: [
          //   { label: 'Qucik start', slug: 'getting-started/quick-start' }
          // ]
        },
        {
          label: 'Concepts',
          autogenerate: { directory: 'docs/concepts' }
        },
        {
          label: 'Configuration',
          autogenerate: { directory: 'docs/configuration' }
        },
        {
          label: 'Guides',
          autogenerate: { directory: 'docs/guides' }
          // items: [
          //   // Each item here is one entry in the navigation menu.
          //   { label: 'Example Guide', slug: 'guides/example' }
          // ]
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'docs/examples' }
        },
        {
          label: 'Reference',
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
