// news-image-20261124 entry (Node 22, standard library only)
// Copies the bundled entry.png to the output entry.png.
// Source is resolved relative to this script's location.
// Output dir: process.env.MAKEFUN_OUTPUT_DIR ?? '/output'
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const source = join(scriptDir, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);

const sourceSize = statSync(source).size;
const targetSize = statSync(target).size;
if (sourceSize !== targetSize) {
  throw new Error(`Copy verification failed: source is ${sourceSize} bytes but output is ${targetSize} bytes`);
}

