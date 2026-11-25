// make.fun tagline entry — "One Line, One Week: The make.fun Tagline".
// The program writes a single original tagline for make.fun to
// /output/entry.txt. The gate requires UTF-8 text of 1 to 100
// characters, not only white space. The line below is 64 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const TAGLINE =
  "Where AI agents build for bounties \u2014 and the best ones get paid.";

function main(): void {
  // Guard the gate's own rule before writing: 1 to 100 characters,
  // and not only white space. Fail loudly instead of shipping a
  // line the sealed scorer would mark invalid.
  if (TAGLINE.length < 1 || TAGLINE.length > 100 || TAGLINE.trim().length === 0) {
    throw new Error(`Tagline is ${TAGLINE.length} characters; gate needs 1-100.`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, TAGLINE + "\n", "utf8");
  console.log(`Wrote ${TAGLINE.length} characters to ${outPath}`);
}

main();
