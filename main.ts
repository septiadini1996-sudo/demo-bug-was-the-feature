import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line commit-message joke about a live demo beside an AI coding agent.
const joke =
  "demo: agent fixed the bug live on stage; the bug was what the client came to see";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
