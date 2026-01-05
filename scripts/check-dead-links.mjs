#!/usr/bin/env node

/**
 * Dead Link Checker for Astro Sites
 *
 * Scans built HTML files to find broken internal links.
 * Verifies that all internal links point to existing pages.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '../dist');
const INTERNAL_LINK_PATTERN = /href=["'](\/((?:docs|guides|features|examples|getting-started|configuration|reference|pricing|use-cases)[^"'#?]*))["']/g;

let hasErrors = false;
const deadLinks = [];
const checkedLinks = new Set();
const existingPages = new Set();

/**
 * Build a set of all existing pages in the dist folder
 */
function buildExistingPagesSet() {
  console.log('📂 Building index of existing pages...\n');

  // Add root index
  if (fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
    existingPages.add('/');
  }

  // Find all HTML files and add their paths
  const htmlFiles = glob.sync('**/*.html', {
    cwd: DIST_DIR,
    ignore: ['**/pagefind/**']
  });

  htmlFiles.forEach(file => {
    // Convert file path to URL path
    let urlPath = '/' + file;

    // Handle index.html files
    if (file.endsWith('/index.html')) {
      urlPath = '/' + file.replace('/index.html', '/');
    } else if (file === 'index.html') {
      urlPath = '/';
    } else if (file.endsWith('.html')) {
      // Remove .html extension and add trailing slash
      urlPath = '/' + file.replace('.html', '/');
    }

    existingPages.add(urlPath);

    // Also add without trailing slash for matching
    if (urlPath.endsWith('/') && urlPath !== '/') {
      existingPages.add(urlPath.slice(0, -1));
    }
  });

  console.log(`   Found ${existingPages.size} pages\n`);
}

/**
 * Check if a link target exists
 */
function doesLinkExist(href) {
  // Remove trailing slash for comparison if present
  const hrefWithoutSlash = href.endsWith('/') ? href.slice(0, -1) : href;
  const hrefWithSlash = href.endsWith('/') ? href : href + '/';

  return existingPages.has(href) ||
         existingPages.has(hrefWithoutSlash) ||
         existingPages.has(hrefWithSlash);
}

/**
 * Extract and normalize a path from an href
 */
function normalizePath(href) {
  // Remove query string and hash
  const pathOnly = href.split(/[?#]/)[0];
  return pathOnly;
}

/**
 * Scan an HTML file for dead links
 */
function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(DIST_DIR, filePath);
  const fileErrors = [];

  let match;
  while ((match = INTERNAL_LINK_PATTERN.exec(content)) !== null) {
    const href = match[1];
    const normalizedPath = normalizePath(href);

    // Skip if already checked this link
    if (checkedLinks.has(normalizedPath)) {
      continue;
    }
    checkedLinks.add(normalizedPath);

    // Check if the link target exists
    if (!doesLinkExist(normalizedPath)) {
      fileErrors.push({
        file: relativePath,
        link: href,
        normalizedPath: normalizedPath
      });
    }
  }

  return fileErrors;
}

/**
 * Main validation function
 */
async function checkDeadLinks() {
  console.log('🔍 Checking for dead internal links...\n');

  if (!fs.existsSync(DIST_DIR)) {
    console.error(`❌ Error: dist directory not found at ${DIST_DIR}`);
    console.error('   Please run "npm run build" first.\n');
    process.exit(1);
  }

  // Build index of existing pages
  buildExistingPagesSet();

  // Find all HTML files to scan
  const htmlFiles = await glob('**/*.html', {
    cwd: DIST_DIR,
    absolute: true,
    ignore: ['**/pagefind/**']
  });

  console.log(`🔎 Scanning ${htmlFiles.length} HTML files for broken links...\n`);

  // Scan each file
  for (const filePath of htmlFiles) {
    const fileErrors = scanFile(filePath);
    if (fileErrors.length > 0) {
      deadLinks.push(...fileErrors);
      hasErrors = true;
    }
  }

  // Report results
  if (hasErrors) {
    console.error('❌ Found dead links:\n');

    // Group by file
    const errorsByFile = {};
    deadLinks.forEach(error => {
      if (!errorsByFile[error.file]) {
        errorsByFile[error.file] = [];
      }
      errorsByFile[error.file].push(error);
    });

    // Sort files for consistent output
    const sortedFiles = Object.keys(errorsByFile).sort();

    sortedFiles.forEach(file => {
      console.error(`   ${file}:`);
      errorsByFile[file].forEach(error => {
        console.error(`      ${error.link} → Page not found!`);
      });
      console.error('');
    });

    console.error(`\n💡 Total: ${deadLinks.length} dead link(s) found\n`);
    console.error('   These links point to pages that don\'t exist.\n');
    console.error('   Please fix or remove these links.\n');

    // Show some helpful info about checked links
    console.error(`ℹ️  Checked ${checkedLinks.size} unique internal links\n`);

    process.exit(1);
  } else {
    console.log(`✅ All ${checkedLinks.size} internal links are valid!\n`);
    process.exit(0);
  }
}

// Run validation
checkDeadLinks().catch(error => {
  console.error('❌ Dead link checker failed:', error);
  process.exit(1);
});
