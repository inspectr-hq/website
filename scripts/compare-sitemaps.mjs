#!/usr/bin/env node

/**
 * Sitemap Comparison Script
 * 
 * Compares the current sitemap in dist/ with a previously cached version
 * to identify new and removed pages.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const SITEMAP_PATH = path.join(DIST_DIR, 'sitemap-0.xml');
const CACHE_DIR = path.join(__dirname, '../.sitemap-cache');
const CACHE_FILE = path.join(CACHE_DIR, 'previous-sitemap.json');

/**
 * Extract URLs from sitemap XML content
 */
function extractUrls(xmlContent) {
  const urls = new Set();
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xmlContent)) !== null) {
    urls.add(match[1]);
  }
  return urls;
}

/**
 * Main comparison function
 */
async function compareSitemaps() {
  console.log('📊 Comparing sitemaps...\n');

  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`❌ Error: Sitemap not found at ${SITEMAP_PATH}`);
    console.error('   Please run "npm run build" first.\n');
    process.exit(1);
  }

  const currentXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const currentUrls = Array.from(extractUrls(currentXml)).sort();

  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }

  if (!fs.existsSync(CACHE_FILE)) {
    console.log('ℹ️  No previous sitemap found. Saving current one as base for next time.');
    fs.writeFileSync(CACHE_FILE, JSON.stringify(currentUrls, null, 2));
    console.log(`✅ Cached ${currentUrls.length} URLs.`);
    return;
  }

  const previousUrls = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
  const previousSet = new Set(previousUrls);
  const currentSet = new Set(currentUrls);

  const added = currentUrls.filter(url => !previousSet.has(url));
  const removed = previousUrls.filter(url => !currentSet.has(url));

  console.log(`📈 Sitemap Report:`);
  console.log(`   Total URLs: ${currentUrls.length} (Previous: ${previousUrls.length})`);
  console.log(`   Added: ${added.length}`);
  console.log(`   Removed: ${removed.length}\n`);

  if (added.length > 0) {
    console.log('🆕 New Pages:');
    added.forEach(url => {
      const path = url.replace('https://inspectr.dev', '');
      console.log(`   + ${path || '/'}`);
    });
    console.log('');
  }

  if (removed.length > 0) {
    console.log('🗑️  Removed Pages:');
    removed.forEach(url => {
      const path = url.replace('https://inspectr.dev', '');
      console.log(`   - ${path || '/'}`);
    });
    console.log('');
  }

  if (added.length === 0 && removed.length === 0) {
    console.log('✅ No changes detected in the sitemap.\n');
  }

  // Update cache
  fs.writeFileSync(CACHE_FILE, JSON.stringify(currentUrls, null, 2));
  console.log('💾 Sitemap cache updated.');
}

compareSitemaps().catch(error => {
  console.error('❌ Sitemap comparison failed:', error);
  process.exit(1);
});
