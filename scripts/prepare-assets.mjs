/**
 * prepare-assets.mjs
 *
 * Prebuild + postbuild helper script.
 *
 * PREBUILD tasks:
 *   1. Copy logo.png → public/favicon.png  (served at /favicon.png in dev + production)
 *
 * POSTBUILD tasks:
 *   2. Replace example.com in dist/sitemap.xml and dist/robots.txt
 *      with the VITE_SITE_URL environment variable.
 *
 * Called from package.json:
 *   "prebuild": "node scripts/prepare-assets.mjs pre"
 *   "build":    "vite build"
 *   "postbuild":"node scripts/prepare-assets.mjs post"
 *
 * Netlify: Set VITE_SITE_URL = https://yoursite.com in Netlify environment settings.
 */

import { copyFileSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');

// ── Helpers ────────────────────────────────────────────────────────────────────

function log(msg) {
  console.log(`[prepare-assets] ${msg}`);
}

function warn(msg) {
  console.warn(`[prepare-assets] WARNING: ${msg}`);
}

function readEnvFile() {
  try {
    const content = readFileSync(resolve(rootDir, '.env'), 'utf8');
    const match = content.match(/VITE_SITE_URL\s*=\s*(.+)/);
    if (match) return match[1].trim().replace(/^["']|["']$/g, '');
  } catch {
    // No .env file present
  }
  return '';
}

// ── Task 1: Copy logo → public/favicon.png ─────────────────────────────────────

function copyFavicon() {
  const src = resolve(rootDir, 'src/assets/images/logo/logo.png');
  const dest = resolve(rootDir, 'public/favicon.png');

  if (!existsSync(src)) {
    warn('src/assets/images/logo/logo.png not found. Skipping favicon copy.');
    return;
  }

  copyFileSync(src, dest);
  log('Copied logo.png → public/favicon.png ✓');
}

// ── Task 2: Replace site URL in dist files ──────────────────────────────────────

function replaceSiteUrl() {
  const siteUrl = (process.env.VITE_SITE_URL || readEnvFile() || '').replace(/\/+$/, '');

  if (!siteUrl) {
    warn(
      'VITE_SITE_URL is not set. sitemap.xml and robots.txt will still contain example.com. ' +
      'Set VITE_SITE_URL in your Netlify environment variables or .env file.'
    );
    return;
  }

  const distDir = resolve(rootDir, 'dist');
  const filesToUpdate = ['sitemap.xml', 'robots.txt'];

  filesToUpdate.forEach((filename) => {
    const filePath = resolve(distDir, filename);
    if (!existsSync(filePath)) {
      warn(`dist/${filename} not found — skipping.`);
      return;
    }
    const original = readFileSync(filePath, 'utf8');
    const updated = original.replace(/https?:\/\/example\.com/g, siteUrl);
    writeFileSync(filePath, updated, 'utf8');
    log(`Replaced example.com with ${siteUrl} in dist/${filename} ✓`);
  });
}

// ── Task 3: Copy favicon to dist ────────────────────────────────────────────────

function copyFaviconToDist() {
  const src = resolve(rootDir, 'public/favicon.png');
  const dest = resolve(rootDir, 'dist/favicon.png');

  if (!existsSync(src)) {
    warn('public/favicon.png not found — skipping dist copy.');
    return;
  }

  if (existsSync(dest)) {
    log('dist/favicon.png already exists (Vite copied it) ✓');
    return;
  }

  copyFileSync(src, dest);
  log('Copied public/favicon.png → dist/favicon.png ✓');
}

// ── Main ───────────────────────────────────────────────────────────────────────

const mode = process.argv[2] || 'pre';

if (mode === 'pre') {
  log('Running PRE-BUILD tasks...');
  copyFavicon();
  log('Pre-build complete.');
} else if (mode === 'post') {
  log('Running POST-BUILD tasks...');
  replaceSiteUrl();
  copyFaviconToDist();
  log('Post-build complete.');
} else {
  warn(`Unknown mode: ${mode}. Use "pre" or "post".`);
}
