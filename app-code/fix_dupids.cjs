const fs = require("fs");
const path = require("path");

const UNITS = [
  "us-ela-g9/unit-5",
  "us-ela-g10/unit-5", "us-ela-g10/unit-6", "us-ela-g10/unit-7", "us-ela-g10/unit-8",
  "us-ela-g11/unit-4", "us-ela-g11/unit-5", "us-ela-g11/unit-6", "us-ela-g11/unit-7", "us-ela-g11/unit-9",
];
const ROOT = "src/content/courses";
const ID_RE = /\bid:\s*"([^"]+)"/g;

let totalRenames = 0;
for (const u of UNITS) {
  const dir = path.join(ROOT, u);
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".ts") && f !== "index.ts").sort();
  // pass 1: count id occurrences across the unit
  const counts = new Map();
  const contents = new Map();
  for (const f of files) {
    const p = path.join(dir, f);
    const s = fs.readFileSync(p, "utf8");
    contents.set(f, s);
    for (const m of s.matchAll(ID_RE)) counts.set(m[1], (counts.get(m[1]) || 0) + 1);
  }
  // pass 2: rename 2nd+ occurrences per file order
  const seen = new Map();
  let unitRenames = 0;
  for (const f of files) {
    let s = contents.get(f);
    const dups = [...s.matchAll(ID_RE)].map(m => m[1]).filter(id => (counts.get(id) || 0) > 1);
    if (!dups.length) continue;
    const dupSet = new Set(dups);
    s = s.replace(ID_RE, (whole, id) => {
      if (!dupSet.has(id)) return whole;
      const n = (seen.get(id) || 0) + 1;
      seen.set(id, n);
      if (n === 1) return whole; // first occurrence keeps id
      const nid = `${id}-r${n}`;
      unitRenames++;
      return `id: "${nid}"`;
    });
    fs.writeFileSync(path.join(dir, f), s);
  }
  console.log(`${u}: renames=${unitRenames}`);
  totalRenames += unitRenames;
}
console.log("total=" + totalRenames);
