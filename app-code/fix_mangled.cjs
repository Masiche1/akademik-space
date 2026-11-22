const fs = require("fs");
const path = require("path");
const root = "src/content/courses";

// Mangle A: [abd]orrectChoiceId: "x"  (old value "c", new letter written over key's 'c')
//   quoted or unquoted key. The stray first letter IS the new correct id.
const RE_A = /(["']?)([abd])orrectChoiceId\1(\s*:\s*)(["'])([abd])\4/g;
// Mangle B: correctChoiceI[x]: "y"  (old value "d", new letter written over key's final 'd')
//   key letter x IS the new correct id.
const RE_B = /(["']?)correctChoiceI([abd])\1(\s*:\s*)(["'])([abd])\4/g;

let filesChanged = 0, fixes = 0;
const leftovers = [];

function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) { walk(p); continue; }
    if (!f.endsWith(".ts")) continue;
    let s = fs.readFileSync(p, "utf8");
    if (!s.includes("orrectChoiceI")) continue;
    let n = 0;
    s = s.replace(RE_A, (m, q1, newL, colon, q2, oldV) => {
      n++;
      return `${q1}correctChoiceId${q1}${colon}${q2}${newL}${q2}`;
    });
    s = s.replace(RE_B, (m, q1, newL, colon, q2, oldV) => {
      n++;
      return `${q1}correctChoiceId${q1}${colon}${q2}${newL}${q2}`;
    });
    if (n) { fs.writeFileSync(p, s); filesChanged++; fixes += n; }
    // check for remaining anomalies: 'orrectChoiceI' not preceded by 'c' or followed by 'd'
    const rem = s.match(/[abd]orrectChoiceI[d]?["']?\s*:|correctChoiceI[abd]["']?\s*:/g);
    if (rem) leftovers.push(p + " :: " + rem.slice(0, 3).join(" | "));
  }
}
walk(root);
console.log(`filesChanged=${filesChanged} fixes=${fixes}`);
console.log("leftovers:", leftovers.length);
leftovers.slice(0, 20).forEach(l => console.log(l));
