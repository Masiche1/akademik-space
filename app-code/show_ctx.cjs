const fs = require("fs");
const files = [
  "src/content/courses/us-math-g7/unit-5/lesson-5-1.ts",
  "src/content/courses/us-math-g7/unit-5/lesson-5-2.ts",
  "src/content/courses/us-math-g7/unit-5/lesson-5-3.ts",
  "src/content/courses/ap-statistics/unit-3/lesson-3-3.ts",
];
for (const fp of files) {
  const t = fs.readFileSync(fp, "utf8");
  console.log("=== " + fp);
  // single backslash + letter, show 40 chars context, dedupe by surrounding snippet
  const re = /\\[a-zA-Z]/g;
  let m, seen = new Set();
  while ((m = re.exec(t))) {
    // skip if preceded by backslash (i.e. part of \\x) — check char before match
    if (m.index > 0 && t[m.index - 1] === "\\") continue;
    const ctx = t.slice(Math.max(0, m.index - 35), m.index + 45).replace(/\n/g, " ");
    const key = ctx;
    if (seen.has(key)) continue;
    seen.add(key);
    console.log("  @" + m.index + " [" + m[0] + "] ..." + ctx + "...");
    if (seen.size > 15) { console.log("  ...(more)"); break; }
  }
}
