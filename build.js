const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, 'dist');

function log(msg) { console.log('[build] ' + msg); }
function run(cmd) { execSync(cmd, { stdio: 'inherit', cwd: __dirname }); }

// Clean dist
if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
fs.mkdirSync(DIST, { recursive: true });

// Copy static assets
log('Copying assets...');
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach(function (item) {
    const s = path.join(src, item);
    const d = path.join(dest, item);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  });
}
copyDir(path.join(__dirname, 'assets'), path.join(DIST, 'assets'));

// Copy SEO files
['robots.txt', 'sitemap.xml'].forEach(function (f) {
  var src = path.join(__dirname, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(DIST, f));
});

// Minify CSS
log('Minifying CSS...');
run('npx cleancss -o "' + path.join(DIST, 'css/styles.css') + '" "' + path.join(__dirname, 'css/styles.css') + '"');

// Minify JS
log('Minifying JS...');
['main.js', 'i18n.js', 'chatbot-data.js', 'chatbot.js'].forEach(function (file) {
  run('npx terser "' + path.join(__dirname, 'js', file) + '" -o "' + path.join(DIST, 'js', file) + '" --compress --mangle');
});

// Minify HTML
log('Minifying HTML...');
run('npx html-minifier-terser --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --use-short-doctype -o "' + path.join(DIST, 'index.html') + '" "' + path.join(__dirname, 'index.html') + '"');

log('Build complete: ' + DIST);
