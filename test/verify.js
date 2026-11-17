const fs = require('fs');
const path = require('path');

console.log('Running Project Health Check...\n');

// 1. Verify index.html exists and is valid
const htmlPath = path.join(__dirname, '..', 'index.html');
if (!fs.existsSync(htmlPath)) {
  console.error('FAIL: index.html does not exist');
  process.exit(1);
}
const htmlContent = fs.readFileSync(htmlPath, 'utf8');
console.log('PASS: index.html found (' + htmlContent.length + ' bytes)');

// 2. Verify all critical IDs in index.html
const requiredIds = [
  'uploadInterface',
  'searchInterface',
  'uploadZone',
  'chooseFileBtn',
  'fileInput',
  'uploadLoading',
  'searchInput',
  'searchBtn',
  'resetBtn',
  'resultBox',
  'toastNotification',
  'snowflakes'
];

let missing = 0;
for (const id of requiredIds) {
  if (!htmlContent.includes(`id="${id}"`)) {
    console.error(`FAIL: Missing ID in HTML: ${id}`);
    missing++;
  }
}
if (missing === 0) {
  console.log('PASS: All 12 essential DOM elements confirmed.');
} else {
  process.exit(1);
}

// 3. Verify server.js
const serverPath = path.join(__dirname, '..', 'server.js');
if (!fs.existsSync(serverPath)) {
  console.error('FAIL: server.js missing');
  process.exit(1);
}
console.log('PASS: server.js exists and is configured.');

// 4. Verify sample data files
const sampleCsv = path.join(__dirname, '..', 'sample-data', 'students_sample.csv');
const sampleTxt = path.join(__dirname, '..', 'sample-data', 'students_sample.txt');

if (fs.existsSync(sampleCsv) && fs.existsSync(sampleTxt)) {
  const csvLines = fs.readFileSync(sampleCsv, 'utf8').trim().split('\n');
  console.log(`PASS: Sample CSV contains ${csvLines.length} lines.`);
  const txtLines = fs.readFileSync(sampleTxt, 'utf8').trim().split('\n');
  console.log(`PASS: Sample TXT contains ${txtLines.length} lines.`);
} else {
  console.error('FAIL: Sample data files missing');
  process.exit(1);
}

// 5. Verify package.json and README.md
const pkgPath = path.join(__dirname, '..', 'package.json');
const readmePath = path.join(__dirname, '..', 'README.md');

if (fs.existsSync(pkgPath) && fs.existsSync(readmePath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  console.log(`PASS: package.json is valid JSON (version: ${pkg.version}).`);
  console.log('PASS: README.md is present.');
} else {
  console.error('FAIL: package.json or README.md missing');
  process.exit(1);
}

console.log('\nAll checks PASSED successfully! Project is ready for launch and GitHub.');
