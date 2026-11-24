import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "ERR_BROWN_07: YOU SET DIAL TO 'DARK' THEN COMPLAINED IT'S BURNT. I FOLLOW ORDERS. THE CRUMBS OF YOUR CHOICES REMAIN IN TRAY 2.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line + "\n", "utf8");
console.log("wrote entry to " + outPath);
