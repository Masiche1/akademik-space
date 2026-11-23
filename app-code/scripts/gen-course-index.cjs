// Regenerates a course index.ts units array from the unit-*/index.ts folders present.
// Usage: node scripts/gen-course-index.cjs src/content/courses/<course-dir>
// Keeps the existing Course object; only rebuilds imports + units: [...].
const fs = require("fs");
const path = require("path");

const courseDir = path.resolve(process.argv[2]);
const indexPath = path.join(courseDir, "index.ts");
const src = fs.readFileSync(indexPath, "utf8");

const units = fs.readdirSync(courseDir)
  .filter((d) => /^unit-\d+[a-z]?$/.test(d))
  .map((d) => ({ dir: d, num: parseInt(d.replace(/\D.*$/, ""), 10), sub: d.replace(/^unit-\d+/, "") }))
  .sort((a, b) => a.num - b.num || a.sub.localeCompare(b.sub));

const imports = [];
const names = [];
for (const u of units) {
  const uidx = fs.readFileSync(path.join(courseDir, u.dir, "index.ts"), "utf8");
  const m = uidx.match(/export const (\w+)\s*:\s*Unit/);
  if (!m) throw new Error(`no Unit export in ${u.dir}/index.ts`);
  imports.push(`import { ${m[1]} } from "./${u.dir}/index.ts";`);
  names.push(m[1]);
}

// Drop old unit imports, rebuild them, then replace the units: [...] array.
let out = src
  .split("\n")
  .filter((l) => !/^import \{ \w+ \} from "\.\/unit-[^"]+\/index\.ts";?$/.test(l.trim()))
  .join("\n");

const importBlock = imports.join("\n");
// Insert imports after the last remaining top-of-file import line.
const importLines = out.split("\n");
let lastImport = -1;
importLines.forEach((l, i) => { if (/^import .* from ".*";?$/.test(l.trim())) lastImport = i; });
importLines.splice(lastImport + 1, 0, ...importBlock.split("\n"));
out = importLines.join("\n");

out = out.replace(/units:\s*\[[^\]]*\],/, `units: [${names.map((n) => ` ${n},`).join("")}],`);
fs.writeFileSync(indexPath, out, "utf8");
console.log(`regenerated ${indexPath}: ${names.length} units`);
