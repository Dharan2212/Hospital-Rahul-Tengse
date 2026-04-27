#!/usr/bin/env node
/*
  Batch 1.3 helper: scans optimized and pending image folders and prints a simple file summary.
  This script uses only Node.js built-ins and does not modify files.
*/
const fs = require('fs');
const path = require('path');

const roots = [
  path.join('src', 'assets', 'images', 'optimized'),
  path.join('src', 'assets', 'images', 'pending'),
];

function walk(dir, rows = []) {
  if (!fs.existsSync(dir)) return rows;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, rows);
    if (entry.isFile()) {
      const stat = fs.statSync(full);
      rows.push({ path: full, bytes: stat.size });
    }
  }
  return rows;
}

const rows = roots.flatMap((dir) => walk(dir));
if (!rows.length) {
  console.log('No optimized or pending image files found.');
  process.exit(0);
}
console.table(rows);
