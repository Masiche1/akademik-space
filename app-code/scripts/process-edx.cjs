// Batch-processes all scripts/data-edx-*-u*.cjs files:
// 1. generates lesson .ts files into src/content/courses/<course>/unit-<N>/
// 2. validates every data file with the same rules as validate.ts
// Usage: node scripts/process-edx.cjs [--validate-only]
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const validateOnly = process.argv.includes("--validate-only");
const files = fs.readdirSync("scripts")
  .filter((f) => /^data-edx-.+-u\d+\.cjs$/.test(f))
  .sort();

let genFail = 0;
if (!validateOnly) {
  for (const f of files) {
    const m = /^data-(edx-.+)-u(\d+)\.cjs$/.exec(f);
    if (!m) { console.log("SKIP (bad name):", f); continue; }
    const [, course, unit] = m;
    const outDir = path.join("src/content/courses", course, `unit-${unit}`);
    if (!fs.existsSync(outDir)) { console.log(`MISSING DIR ${outDir} (${f})`); genFail++; continue; }
    try {
      execFileSync("node", ["scripts/gen-lesson.cjs", path.join("scripts", f), outDir], { stdio: "pipe" });
    } catch (e) {
      genFail++;
      console.log(`GEN FAIL ${f}: ${e.stderr ? e.stderr.toString().slice(0, 300) : e.message}`);
    }
  }
  console.log(`generation done for ${files.length} data files (${genFail} failures)`);
}

// validate all data files in one process
const res = execFileSync("node", ["scripts/validate-data.cjs", ...files.map((f) => path.join("scripts", f))], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
console.log(res);
