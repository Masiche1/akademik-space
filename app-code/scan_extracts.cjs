const fs = require("fs");
const path = require("path");
const root = "src/content/courses";
const bad = [];

function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) { walk(p); continue; }
    if (!f.endsWith(".ts") || f === "index.ts") continue;
    const s = fs.readFileSync(p, "utf8");
    const ids = new Set();
    for (const m of s.matchAll(/extract:\s*([A-Z][A-Z0-9_]*)/g)) ids.add(m[1]);
    if (!ids.size) continue;
    // collect defined names: const/let/var/function + imported names
    const defined = new Set();
    for (const m of s.matchAll(/(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)/g)) defined.add(m[1]);
    for (const m of s.matchAll(/import\s*(?:type\s*)?\{([^}]*)\}/g)) {
      for (const part of m[1].split(",")) {
        const name = part.trim().split(/\s+as\s+/).pop().trim();
        if (name) defined.add(name);
      }
    }
    for (const m of s.matchAll(/import\s+([A-Za-z_$][\w$]*)\s+from/g)) defined.add(m[1]);
    for (const id of ids) {
      if (!defined.has(id)) bad.push(`${p} :: ${id}`);
    }
  }
}
walk(root);
bad.forEach(b => console.log(b));
console.log("total=" + bad.length);
