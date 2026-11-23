const fs = require("fs");
const path = require("path");
const root = "src/content/courses";
let bad = [], checked = 0;
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) { walk(p); continue; }
    if (f !== "index.ts") continue;
    checked++;
    const t = fs.readFileSync(p, "utf8");
    for (const m of t.matchAll(/from\s+["'](\.\/[^"']+)["']/g)) {
      const target = path.resolve(d, m[1]);
      if (!fs.existsSync(target)) bad.push(p.split(path.sep).join("/") + " -> " + m[1]);
    }
  }
}
walk(root);
console.log("index files checked:", checked, "missing:", bad.length);
bad.forEach((b) => console.log(b));
