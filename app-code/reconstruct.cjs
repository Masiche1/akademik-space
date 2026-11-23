const fs = require("fs");
const path = require("path");

const CORRUPTED = [
  "src/content/courses/us-math-g7/unit-7/lesson-7-1.ts",
  "src/content/courses/us-math-g7/unit-7/lesson-7-3.ts",
  "src/content/courses/us-math-g7/unit-8/lesson-8-2.ts",
  "src/content/courses/us-math-g7/unit-8/lesson-8-3.ts",
];
const CORRUPTED_SET = new Set(CORRUPTED);

// Corpus: lowercase alphabetic tokens from every other .ts file in courses/
const corpus = new Set();
function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) { walk(p); continue; }
    if (!f.endsWith(".ts")) continue;
    const rel = p.split(path.sep).join("/");
    if (CORRUPTED_SET.has(rel)) continue;
    const t = fs.readFileSync(p, "utf8");
    for (const m of t.matchAll(/[A-Za-z]+/g)) corpus.add(m[0].toLowerCase());
  }
}
walk("src/content/courses");
console.log("corpus size:", corpus.size);

function candidates(tok) {
  const lower = tok.toLowerCase();
  const positions = [];
  for (let i = 0; i < lower.length; i++) if (lower[i] === "o") positions.push(i);
  const out = [];
  const n = positions.length;
  for (let mask = 1; mask < (1 << n); mask++) {   // mask 0 = no change, skip
    const s = lower.split("");
    for (let j = 0; j < n; j++) if (mask & (1 << j)) s[positions[j]] = "w";
    out.push(s.join(""));
  }
  return out;
}

const report = {};
for (const fp of CORRUPTED) {
  const t = fs.readFileSync(fp, "utf8");
  const uniq = [...new Set((t.match(/[A-Za-z]+/g) || []).filter((x) => x.includes("o")))];
  const auto = [], ambig = [], none = [];
  for (const tok of uniq) {
    const hits = candidates(tok).filter((c) => corpus.has(c));
    if (hits.length === 0) none.push(tok);
    else if (hits.length === 1) auto.push([tok, hits[0]]);
    else ambig.push([tok, hits]);
  }
  report[fp] = { auto, ambig, none };
  console.log("\n===", fp.split("/").pop(), "| auto:", auto.length, "ambig:", ambig.length, "none:", none.length);
  console.log("AMBIG:", JSON.stringify(ambig));
  console.log("NONE:", JSON.stringify(none));
}
fs.writeFileSync("reconstruct_report.json", JSON.stringify(report, null, 1));
