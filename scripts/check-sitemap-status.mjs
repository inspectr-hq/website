#!/usr/bin/env node

/**
 * Sitemap Status Checker
 * 
 * Verifies that the sitemap is accessible and returns the correct headers,
 * mimicking various user agents including Googlebot.
 * Also checks for robots.txt reference and sitemap index structure.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://inspectr.dev';
const SITEMAP_INDEX_URL = `${BASE_URL}/sitemap.xml`;
const ROBOTS_URL = `${BASE_URL}/robots.txt`;

const userAgents = [
  { name: 'Default (curl)', agent: null },
  { name: 'Googlebot', agent: 'Googlebot' },
  { name: 'Mozilla/5.0', agent: 'Mozilla/5.0' }
];

let hasErrors = false;

/**
 * Executes curl and returns headers and body
 */
function fetchUrl(url, agent = null) {
  const agentFlag = agent ? `-A "${agent}"` : '';
  // -i includes headers in output
  const command = `curl -i -s ${agentFlag} ${url}`;
  const output = execSync(command).toString();
  
  const [headerSection, ...bodyParts] = output.split('\r\n\r\n');
  const body = bodyParts.join('\r\n\r\n');
  const headers = headerSection.split('\r\n');
  
  return { headers, body };
}

console.log(`🔍 Checking SEO and Sitemap health for: ${BASE_URL}\n`);

// 1. Check robots.txt
console.log('🤖 Checking robots.txt...');
try {
  const { headers, body } = fetchUrl(ROBOTS_URL);
  const statusLine = headers[0];
  
  if (!statusLine.includes('200')) {
    console.error(`   ❌ Error: robots.txt returned ${statusLine.trim()}`);
    hasErrors = true;
  } else {
    console.log(`   ✅ robots.txt is accessible (200 OK)`);
    if (body.includes('Sitemap:')) {
      const sitemapLine = body.split('\n').find(line => line.startsWith('Sitemap:'));
      console.log(`   ✅ robots.txt contains sitemap reference: ${sitemapLine.trim()}`);
      if (!sitemapLine.includes(SITEMAP_INDEX_URL)) {
          console.warn(`   ⚠️  Warning: Sitemap URL in robots.txt might not match ${SITEMAP_INDEX_URL}`);
      }
    } else {
      console.error(`   ❌ Error: robots.txt is missing 'Sitemap:' declaration`);
      hasErrors = true;
    }
  }
} catch (error) {
  console.error(`   ❌ Error checking robots.txt: ${error.message}`);
  hasErrors = true;
}
console.log('');

// 2. Check Sitemap(s) with different User-Agents
userAgents.forEach(({ name, agent }) => {
  console.log(`📡 Testing Sitemap with User-Agent: ${name}`);
  
  try {
    const { headers, body } = fetchUrl(SITEMAP_INDEX_URL, agent);
    
    const statusLine = headers[0];
    const contentTypeLine = headers.find(line => line.toLowerCase().startsWith('content-type:'));
    
    console.log(`   Status: ${statusLine.trim()}`);
    
    if (!statusLine.includes('200')) {
      console.error(`   ❌ Error: Expected 200 OK, got ${statusLine.trim()}`);
      hasErrors = true;
    }
    
    if (contentTypeLine) {
      console.log(`   ${contentTypeLine.trim()}`);
      if (!contentTypeLine.toLowerCase().includes('xml')) {
        console.error(`   ❌ Error: Expected Content-Type to contain 'xml'`);
        hasErrors = true;
      }
    } else {
      console.error(`   ❌ Error: Content-Type header missing`);
      hasErrors = true;
    }

    // Basic XML validation
    if (body.trim().startsWith('<?xml') && body.includes('</')) {
        console.log(`   ✅ Basic XML structure detected`);
    } else {
        console.error(`   ❌ Error: Response does not look like valid XML`);
        hasErrors = true;
    }

    // If it's a sitemap index, check if it points to sitemap-0.xml
    if (body.includes('<sitemapindex')) {
        console.log(`   ℹ️  Detected Sitemap Index`);
        if (body.includes('sitemap-0.xml')) {
            console.log(`   ✅ Index correctly references sitemap-0.xml`);
        } else {
            console.error(`   ❌ Error: Sitemap Index does not reference any sub-sitemaps`);
            hasErrors = true;
        }
    }

    console.log('');
  } catch (error) {
    console.error(`   ❌ Error executing curl: ${error.message}\n`);
    hasErrors = true;
  }
});

if (hasErrors) {
  console.error('❌ Sitemap status check failed.');
  process.exit(1);
} else {
  console.log('✅ All sitemap and SEO checks passed!');
  process.exit(0);
}
