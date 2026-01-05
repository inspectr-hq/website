# Build Scripts

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

### Exit codes

- **0**: All links are valid (has trailing slashes)
- **1**: Found links without trailing slashes (build should fail)

### Integration

The script is integrated into the build pipeline via:
- `npm run check:links` - Run validation only
- `npm run build:check` - Build + validate

### Recommended: Pre-commit Hook

To prevent committing files with missing trailing slashes, add this to `.git/hooks/pre-commit`:

```bash
#!/bin/bash
npm run build:check
```

Or use a tool like Husky:

```bash
npx husky add .husky/pre-commit "npm run build:check"
```
