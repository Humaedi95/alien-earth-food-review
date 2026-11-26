import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star for Earth: the gravity is rude, the locals queue for everything, but the food is so good I would cross three galaxies just to eat it again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REVIEW, "utf8");
console.log(`Wrote ${REVIEW.length} characters to ${outDir}/entry.txt`);
