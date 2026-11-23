// Scaffolds missing unit dirs: generates lessons + writes unit index.ts
// Usage: node scripts/scaffold-missing-units.cjs
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "src", "content", "courses");

// detect id prefix from an existing unit index in the course
function detectPrefix(courseDir) {
  for (const d of fs.readdirSync(courseDir)) {
    const idx = path.join(courseDir, d, "index.ts");
    if (/^unit-\d/.test(d) && fs.existsSync(idx)) {
      const m = fs.readFileSync(idx, "utf8").match(/id:\s*"([a-z0-9]+)-u\d+"/);
      if (m) return m[1];
    }
  }
  return null;
}

const dataFiles = fs.readdirSync(path.join(__dirname))
  .filter((f) => /^data-edx-.+-u\d+\.cjs$/.test(f));

for (const df of dataFiles) {
  const m = df.match(/^data-(edx-.+)-u(\d+)\.cjs$/);
  const [, course, unitNum] = m;
  const N = parseInt(unitNum, 10);
  const courseDir = path.join(ROOT, course);
  const unitDir = path.join(courseDir, `unit-${N}`);
  if (!fs.existsSync(courseDir)) { console.log(`NO COURSE DIR ${course}`); continue; }
  if (fs.existsSync(path.join(unitDir, "index.ts"))) continue;

  const dataPath = path.join(__dirname, df);
  const specs = require(dataPath);
  if (!Array.isArray(specs) || !specs.length) { console.log(`BAD SPEC ${df}`); continue; }

  fs.mkdirSync(unitDir, { recursive: true });
  // generate lesson .ts files
  try {
    execFileSync(process.execPath, [path.join(__dirname, "gen-lesson.cjs"), dataPath, unitDir], { stdio: "pipe" });
  } catch (e) {
    console.log(`GEN FAIL ${df}: ${e.message.slice(0, 200)}`);
    continue;
  }

  const prefix = detectPrefix(courseDir);
  if (!prefix) { console.log(`NO PREFIX ${course}`); continue; }

  const imports = specs.map((s) => `import { ${s.exportName} } from "./${s.file}";`);
  const titles = specs.map((s) => s.lesson.title);
  const title = titles[0].replace(/\s*[:\-–—]\s*(lesson|part).*$/i, "").trim() || `Unit ${N}`;
  const description = titles.join("; ") + ".";

  const idx = `import type { Unit } from "../../../types.ts";\n` +
    imports.join("\n") + "\n\n" +
    `export const unit${N}: Unit = {\n` +
    `  id: "${prefix}-u${N}",\n` +
    `  code: "${N}",\n` +
    `  number: ${N},\n` +
    `  title: ${JSON.stringify(title)},\n` +
    `  description: ${JSON.stringify(description)},\n` +
    `  lessons: [${specs.map((s) => s.exportName).join(", ")}],\n` +
    `};\n`;
  fs.writeFileSync(path.join(unitDir, "index.ts"), idx, "utf8");
  console.log(`scaffolded ${course}/unit-${N} (${specs.length} lessons)`);
}
