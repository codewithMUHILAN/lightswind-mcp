const fs = require('fs');
const path = require('path');

const uiDir = path.join(__dirname, 'dist/components/ui');

let stats = { changed: 0, skipped: 0, files: [] };

function runNormalize() {
  if (!fs.existsSync(uiDir)) {
    console.log(`ℹ️  Skipping component imports normalization (directory does not exist: ${uiDir})`);
    return;
  }
  processDir(uiDir);
}

function processDir(dir) {
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.d.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // 1. Normalize aliases like '@/components/lib/utils' or '@/components/hooks/use-toast'
      // in both ESM (import) and CJS (require) formats to relative paths.
      // From components/ui/, the relative path to components/lib/ is ../lib/
      // and components/hooks/ is ../hooks/
      // and components/lightswind/ is ./ (same directory in dist)
      
      // Global string replacements to support all formats (ESM, CJS, quotes)
      content = content.split('@/components/lib/utils').join('../lib/utils');
      content = content.split('@/components/lib/').join('../lib/');
      content = content.split('@/components/hooks/').join('../hooks/');
      content = content.split('@/components/utils/').join('../utils/');
      content = content.split('@/components/lightswind/').join('./');

      // Keep pre-existing relative normalizations for source-level .tsx file compatibility
      content = content.replace(/from\s+["']\.\.\/\.\.\/lib\/utils["']/g, 'from "@/lib/utils"');
      content = content.replace(/from\s+["']\.\.\/\.\.\/lib\/hooks["']/g, 'from "@/lib/hooks"');
      content = content.replace(/from\s+["']\.\.\/lib\/utils["']/g, 'from "@/lib/utils"');
      content = content.replace(/from\s+["']\.\.\/lib\/hooks["']/g, 'from "@/lib/hooks"');

      // 2. Only restore `@/components/lightswind` aliases in `.tsx` and `.ts` source files (excluding `.d.ts`),
      // as they are meant for copy-paste installation where the client CLI rewrites them.
      // Compiled JS and D.TS files must keep the relative paths.
      if ((item.endsWith('.tsx') || item.endsWith('.ts')) && !item.endsWith('.d.ts')) {
        const relativeImportRegex = /from\s+["']\.\/([\w-]+)["']/g;
        content = content.replace(relativeImportRegex, (match, compName) => {
          const targetFile = path.join(uiDir, `${compName}.tsx`);
          const targetFileTs = path.join(uiDir, `${compName}.ts`);
          if (fs.existsSync(targetFile) || fs.existsSync(targetFileTs)) {
            return `from "@/components/lightswind/${compName}"`;
          }
          return match;
        });
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        stats.changed++;
        stats.files.push(path.relative(uiDir, fullPath));
      } else {
        stats.skipped++;
      }
    }
  }
}

runNormalize();

// Copy styles.css to dist folder for exports
try {
  const distDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  fs.copyFileSync(
    path.join(__dirname, 'src/styles/lightswind.css'),
    path.join(distDir, 'styles.css')
  );
  console.log('✅ Copied styles.css to dist/styles.css');
} catch (e) {
  console.error('❌ Failed to copy styles.css:', e.message);
}

console.log(`\n✅ Done!`);
console.log(`Changed: ${stats.changed} files`);
console.log(`Skipped: ${stats.skipped} files (no changes needed)`);
if (stats.files.length > 0) {
  console.log(`\nChanged files:`);
  stats.files.forEach(f => console.log(`  • ${f}`));
}
