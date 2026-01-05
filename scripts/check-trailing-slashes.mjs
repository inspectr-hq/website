#!/usr/bin/env node

/**
 * Trailing Slash Validator for Astro Sites
 *
 * Scans built HTML files to ensure all internal links have trailing slashes.
 * This prevents redirect issues and helps with SEO.
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
const errors = [];

/**
 * Check if a link should have a trailing slash
 */
function shouldHaveTrailingSlash(href) {
  // Skip if already has trailing slash
  if (href.endsWith('/')) return false;

  // Skip if it's a file with extension (like .xml, .txt, .json)
  if (/\.[a-z0-9]+$/i.test(href)) return false;

  // Skip if it has a query string or hash (without trailing slash before it)
  if (href.includes('?') || href.includes('#')) return false;

  // Should have trailing slash
  return true;
}

/**
 * Scan an HTML file for links without trailing slashes
 */
function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(DIST_DIR, filePath);
  const fileErrors = [];

  let match;
  while ((match = INTERNAL_LINK_PATTERN.exec(content)) !== null) {
    const href = match[1];

    if (shouldHaveTrailingSlash(href)) {
      fileErrors.push({
        file: relativePath,
        link: href,
        suggestion: href + '/'
      });
    }
  }

  return fileErrors;
}

/**
 * Main validation function
 */
async function validateTrailingSlashes() {
  console.log('🔍 Checking for internal links without trailing slashes...\n');

  if (!fs.existsSync(DIST_DIR)) {
    console.error(`❌ Error: dist directory not found at ${DIST_DIR}`);
    console.error('   Please run "npm run build" first.\n');
    process.exit(1);
  }

  // Find all HTML files
  const htmlFiles = await glob('**/*.html', {
    cwd: DIST_DIR,
    absolute: true,
    ignore: ['**/pagefind/**']
  });

  console.log(`📄 Found ${htmlFiles.length} HTML files to scan\n`);

  // Scan each file
  for (const filePath of htmlFiles) {
    const fileErrors = scanFile(filePath);
    if (fileErrors.length > 0) {
      errors.push(...fileErrors);
      hasErrors = true;
    }
  }

  // Report results
  if (hasErrors) {
    console.error('❌ Found links without trailing slashes:\n');

    // Group by file
    const errorsByFile = {};
    errors.forEach(error => {
      if (!errorsByFile[error.file]) {
        errorsByFile[error.file] = [];
      }
      errorsByFile[error.file].push(error);
    });

    Object.entries(errorsByFile).forEach(([file, fileErrors]) => {
      console.error(`   ${file}:`);
      fileErrors.forEach(error => {
        console.error(`      ${error.link} → ${error.suggestion}`);
      });
      console.error('');
    });

    console.error(`\n💡 Total: ${errors.length} link(s) need fixing\n`);
    console.error('   These links will cause redirects. Please add trailing slashes.\n');

    process.exit(1);
  } else {
    console.log('✅ All internal links have proper trailing slashes!\n');
    process.exit(0);
  }
}

// Run validation
validateTrailingSlashes().catch(error => {
  console.error('❌ Validation script failed:', error);
  process.exit(1);
});
