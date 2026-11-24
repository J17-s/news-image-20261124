// news-image-20261124 entry (Node 22, standard library only).
//
// The entry image ships in this repository as entry.png, next to this file.
// The program copies it to the output directory as entry.png, byte for byte:
// the harness mounts the repository read-only and grades exactly the bytes
// written, so no decoding or re-encoding happens here.
//
// In the grader the output directory is /output; for a local run,
// MAKEFUN_OUTPUT_DIR stands in for it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(source, join(outputDir, 'entry.png'));
