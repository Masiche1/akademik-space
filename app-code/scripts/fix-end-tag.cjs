const fs = require("fs");
const files = [
  "src/content/courses/ib-aa-hl-1/unit-3/lesson-3-1.ts",
  "src/content/courses/ib-aa-hl-1/unit-3/lesson-3-2.ts",
  "src/content/courses/ib-aa-hl-1/unit-3/lesson-3-3.ts",
  "src/content/courses/ib-ai-hl-1/unit-3/lesson-3-1.ts",
  "src/content/courses/ib-ai-hl-1/unit-3/lesson-3-2.ts",
  "src/content/courses/ib-ai-hl-1/unit-3/lesson-3-3.ts",
];
const BS = String.fromCharCode(92); // backslash
for (const f of files) {
  let t = fs.readFileSync(f, "utf8");
  const counts = {};
  const findRe = new RegExp(BS + BS + "+end\\{", "g"); // \\+end{
  for (const m of t.matchAll(findRe)) {
    const n = m[0].length - 4; // backslashes before 'end{'
    counts[n] = (counts[n] || 0) + 1;
  }
  console.log(f, JSON.stringify(counts));
  const re = new RegExp(BS + BS + "+(?=end\\{)", "g"); // \\+(?=end{)
  t = t.replace(re, BS + BS);
  fs.writeFileSync(f, t);
}
