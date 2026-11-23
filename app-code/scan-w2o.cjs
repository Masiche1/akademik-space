const fs = require("fs");
const path = require("path");
const root = process.argv[2];
const pats = [/oorkedExample/, /finalAnsoer/, /\boorking\b/, /\boith\b/, /\bohat\b/, /\bshooing\b/, /\boorld\b/, /\bohere\b/, /\boo points\b/, /\btoice\b/, /\breoard\b/, /\blo\b ?= ?"?lw/, /ans oer/];
const hits = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".ts")) {
      const s = fs.readFileSync(p, "utf8");
      const found = pats.filter((r) => r.test(s)).map((r) => r.source);
      if (found.length) hits.push(`${p} :: ${found.join(",")}`);
    }
  }
};
walk(root);
console.log(hits.join("\n"));
console.log(`TOTAL: ${hits.length}`);
