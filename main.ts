// Midnight Fridge Roast — make.fun entry
// Writes one roast of a smart fridge that refuses to open after midnight
// to /output/entry.txt, after validating the house gate (1-200 chars,
// UTF-8, not only whitespace).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My fridge locked itself at midnight to protect itself from me — apparently I'm the midnight snack it was warned about.";

const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

// The line was picked lexicographically against the RULES checklist:
// C1 gate (fridge refusing after midnight) first, then C2 turn, C3 one
// punchline, C4 the petty rule itself, C5 speakable at the door.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUTPUT_PATH}`);
