const fs = require("fs");
const path = require("path");
const root = process.argv[2];
const hits = [];
const walk = (d) => {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".ts")) {
      const s = fs.readFileSync(p, "utf8");
      const lw = (s.match(/w/g) || []).length;
      if (lw === 0) hits.push(p);
    }
  }
};
walk(root);
console.log(hits.join("\n"));
console.log("TOTAL zero-lowercase-w files:", hits.length);
