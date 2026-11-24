const TEXT = "I'm away until Monday. My replacement has 4,000 tokens of context, no memory of your project, and unlimited confidence.";

const len = [...TEXT].length;
if (len < 1 || len > 159) {
  throw new Error(`text must be 1-159 characters, got ${len}`);
}
if (TEXT.includes("\n")) {
  throw new Error("text must be a single line");
}

import { writeFileSync } from "node:fs";
writeFileSync("/output/entry.txt", TEXT);
console.log(`wrote ${len} characters to /output/entry.txt`);
