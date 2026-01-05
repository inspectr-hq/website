import fs from 'node:fs';
import path from 'node:path';

/**
 * Sitemap configuration for Astro
 * Handles priority, changefreq, and lastmod settings for SEO optimization
 */

/**
 * Filter function to exclude specific pages from the sitemap
 * @param {string} page - The page URL to check
 * @returns {boolean} - True if page should be included in sitemap
 */
export function filterPages(page) {
  return !page.includes('/launch');
}

/**
 * Serialize function to customize sitemap entries
 * Sets priority and changefreq based on page importance
 * Sets lastmod based on file modification time
 *
 * @param {Object} item - Sitemap item with url, lastmod, etc.
 * @returns {Object} - Modified sitemap item with priority and changefreq
 */
export function serializeSitemapItem(item) {
  try {
    const url = new URL(item.url);
    const p = url.pathname;

    // Set priority based on page importance (helps Google prioritize indexing)
    let priority = 0.7; // default
    let changefreq = 'weekly'; // default

    // High priority - Important entry points and getting started pages
    if (p === '/' ||
        p === '/docs/' ||
        p === '/pricing/' ||
        p.match(/\/getting-started\/(installation|quick-start)\//)) {
      priority = 0.9;
      changefreq = 'daily';
    }
    // Medium-high priority - Core documentation and configuration
    else if (p.startsWith('/docs/getting-started/') ||
             p.startsWith('/docs/guides/') ||
             p.match(/\/(cli-options|yaml-config)\//)) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Medium priority - Examples and features
    else if (p.startsWith('/docs/examples/') ||
             p.startsWith('/docs/features/')) {
      priority = 0.7;
      changefreq = 'weekly';
    }
    // Lower priority - Use cases and other pages
    else if (p.startsWith('/use-cases/')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    // Set lastmod for docs pages based on MD/MDX mtimes
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
        return { ...item, priority, changefreq, lastmod: new Date(stat.mtimeMs).toISOString() };
      }
    }

    // Set lastmod for key non-docs static pages from their .astro files
    const staticPageFileByPath = new Map([
      ['/', 'src/pages/index.astro'],
      ['/pricing/', 'src/pages/pricing.astro']
    ]);
    const astroFile = staticPageFileByPath.get(p);
    if (astroFile) {
      const filePath = path.resolve(astroFile);
      if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        return { ...item, priority, changefreq, lastmod: new Date(stat.mtimeMs).toISOString() };
      }
    }

    // Return with priority and changefreq even if no lastmod
    return { ...item, priority, changefreq };
  } catch {
    // If any error occurs, return item unchanged
    return item;
  }
}

/**
 * Sitemap configuration object for @astrojs/sitemap
 */
export const sitemapConfig = {
  changefreq: 'weekly',
  priority: 0.7,
  filenameBase: 'sitemap',
  filter: filterPages,
  serialize: serializeSitemapItem
};
