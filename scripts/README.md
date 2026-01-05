# Build Scripts

This directory contains validation scripts that run after building the site to ensure link quality and prevent common SEO issues.

## Available Scripts

```bash
# Run all checks
npm run check:all

# Build and run all checks
npm run build:check

# Individual checks
npm run check:links      # Trailing slash validation
npm run check:deadlinks  # Dead link detection
```

---

## check-trailing-slashes.mjs

**Purpose:** Validates that all internal links in the built site have trailing slashes.

**Why:** Astro uses trailing slashes by default. Links without trailing slashes cause unnecessary 301 redirects, which:
- Hurts SEO rankings
- Slows down page load times
- Creates duplicate URL issues in Google Search Console

### Usage

```bash
# Run after building
npm run check:links

# Or build and check in one command
npm run build:check
```

### What it checks

- Scans all HTML files in the `dist/` folder
- Looks for internal links to `/docs`, `/guides`, `/features`, `/examples`, `/getting-started`, `/configuration`, `/reference`, `/pricing`, and `/use-cases`
- Ignores:
  - External links
  - Links with file extensions (`.xml`, `.txt`, etc.)
  - Links with query strings or anchors
  - Links that already have trailing slashes

### Example Output

**When issues found:**
```
❌ Found links without trailing slashes:

   docs/index.html:
      /docs/getting-started/quick-start → /docs/getting-started/quick-start/
      /docs/concepts/how-it-works → /docs/concepts/how-it-works/

💡 Total: 2 link(s) need fixing
```

**When all valid:**
```
✅ All internal links have proper trailing slashes!
```

### Exit codes

- **0**: All links are valid (has trailing slashes)
- **1**: Found links without trailing slashes (build should fail)

---

## check-dead-links.mjs

**Purpose:** Detects broken internal links by verifying that all link targets actually exist.

**Why:** Dead links:
- Hurt user experience (404 errors)
- Damage SEO rankings
- Make your site look unprofessional
- Indicate outdated content

### Usage

```bash
# Run after building
npm run check:deadlinks

# Or build and check everything
npm run build:check
```

### What it checks

- Builds an index of all existing pages in `dist/`
- Scans all HTML files for internal links
- Verifies each link points to an existing page
- Reports broken links with exact file location
- Handles both trailing slash variations

### Example Output

**When dead links found:**
```
❌ Found dead links:

   index.html:
      /docs/examples/examples/expose-ollama/ → Page not found!

   docs/features/mocking.mdx:
      /docs/guides/response-override → Page not found!

💡 Total: 2 dead link(s) found

ℹ️  Checked 60 unique internal links
```

**When all valid:**
```
✅ All 60 internal links are valid!
```

### Exit codes

- **0**: All links point to existing pages
- **1**: Found dead links (build should fail)

### What it ignores

- External links (http://, https://)
- Anchor links are stripped before checking (e.g., `/docs/page/#section` checks `/docs/page/`)
- Query strings are ignored (e.g., `/launch?openapi=...`)

---

## CI/CD Integration

### GitHub Actions

Add to your workflow file (`.github/workflows/deploy.yml`):

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '22'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Validate links
        run: npm run check:all

      - name: Deploy
        if: success()
        run: # your deployment command
```

### Pre-commit Hook

Prevent broken links from being committed:

```bash
#!/bin/bash
# .git/hooks/pre-commit

echo "🔍 Running link validation..."
npm run build:check

if [ $? -ne 0 ]; then
  echo "❌ Link validation failed. Please fix the issues before committing."
  exit 1
fi

echo "✅ All links valid!"
```

Make it executable:
```bash
chmod +x .git/hooks/pre-commit
```

### Using Husky

```bash
# Install Husky
npm install --save-dev husky
npx husky install

# Add pre-commit hook
npx husky add .husky/pre-commit "npm run build:check"
```

---

## Performance

Both scripts are optimized for speed:

- **check-trailing-slashes.mjs**: ~100ms for 64 files
- **check-dead-links.mjs**: ~150ms for 64 files (includes page indexing)
- **Total overhead**: <300ms added to build time

---

## Troubleshooting

### "dist directory not found"

Make sure to build the site first:
```bash
npm run build
npm run check:all
```

### False positives

If a link is reported as broken but you know it exists:
1. Check the exact path in the error message
2. Verify the page exists in `dist/`
3. Check for typos (case-sensitive)
4. Ensure trailing slashes match Astro's routing

### Adding new paths to check

Edit the `INTERNAL_LINK_PATTERN` regex in both scripts:

```javascript
const INTERNAL_LINK_PATTERN = /href=["'](\/((?:docs|your-new-section)[^"'#?]*))["']/g;
```
