import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const SOURCE_ROOT = path.join(ROOT_DIR, 'public', 'images');
const MIRROR_ROOT = path.join(ROOT_DIR, 'apps', 'public-site', 'public', 'media');

const ASSET_MAP = [
  { src: 'png/overscite_logo.png', dest: 'overscite_logo.png', type: 'PROTECTED' },
  { src: 'png/ISDI_Color_Trans.png', dest: 'isdi_brand_logo.png', type: 'PROTECTED' },
  { src: 'png/overscite_preview.png', dest: 'overscite_preview.png', type: 'PLATFORM_MEDIA' },
  { src: 'jpeg/bckgrnd004.jpeg', dest: 'overscite.jpeg', type: 'GENERAL_MEDIA' },
  { src: 'jpeg/bckgrnd005.jpeg', dest: 'hero.jpeg', type: 'GENERAL_MEDIA' },
  { src: 'jpeg/bckgrnd001.jpeg', dest: 'reporting.jpeg', type: 'GENERAL_MEDIA' },
  { src: 'jpeg/bckgrnd007.jpeg', dest: 'governance.jpeg', type: 'GENERAL_MEDIA' }
];

console.log('--- Public Site Asset Sync Initialized ---');
console.log(`Source Root: ${SOURCE_ROOT}`);
console.log(`Mirror Root: ${MIRROR_ROOT}`);

if (!fs.existsSync(MIRROR_ROOT)) {
  console.log(`Creating mirror directory: ${MIRROR_ROOT}`);
  fs.mkdirSync(MIRROR_ROOT, { recursive: true });
}

let errorCount = 0;

ASSET_MAP.forEach(asset => {
  const srcPath = path.join(SOURCE_ROOT, asset.src);
  const destPath = path.join(MIRROR_ROOT, asset.dest);

  if (fs.existsSync(srcPath)) {
    console.log(`[SYNC] Copying ${asset.src} -> ${asset.dest} (${asset.type})`);
    fs.copyFileSync(srcPath, destPath);
  } else {
    console.error(`[ERROR] Missing canonical source asset: ${srcPath}`);
    if (asset.type === 'PROTECTED') {
      errorCount++;
    }
  }
});

if (errorCount > 0) {
  console.error(`--- Sync Failed with ${errorCount} critical errors ---`);
  process.exit(1);
} else {
  console.log('--- Sync Completed Successfully ---');
}
