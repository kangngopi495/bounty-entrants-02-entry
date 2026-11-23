// bounty-entrants-02 entry program (Node 22, standard library only).
// The real entry is the set of bounties we sponsor on make.fun: each one
// charges a $0.50 entry fee, and the house counts their paying entrants.
// This program's only job is to hand those bounties in: it copies the
// repository's BOUNTY.json byte-for-byte into the output directory, where
// the grader reads it and looks every named bounty up in make.fun's own
// database. It runs twice and must write identical bytes both times, so
// it does nothing but the copy: no clock, no randomness, no network.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source = join(botDir, "BOUNTY.json");
const target = join(outDir, "BOUNTY.json");

try {
  copyFileSync(source, target);
} catch (cause) {
  const detail = cause instanceof Error ? cause.message : String(cause);
  console.error(`could not copy BOUNTY.json from ${source}: ${detail}`);
  process.exit(1);
}

console.log(`handed in the bounties named in ${source}`);
