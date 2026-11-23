const fs = require("fs");
const edits = [
  ["src/content/courses/us-math-g7/unit-7/lesson-7-1.ts",
    ['working: "$300\\\\text{ cm} \\\\times 200\\\\text{ cm}$"', 'working: "300\\\\text{ cm} \\\\times 200\\\\text{ cm}"']],
  ["src/content/courses/us-math-g7/unit-7/lesson-7-3.ts",
    ['working: "$785.40"', 'working: "\\\\$785.40"']],
  ["src/content/courses/us-math-g7/unit-8/lesson-8-2.ts",
    ['working: "$500"', 'working: "\\\\$500"'],
    ['working: "$5"', 'working: "\\\\$5"']],
  ["src/content/courses/us-math-g7/unit-8/lesson-8-3.ts",
    ['working: "$3.60"', 'working: "\\\\$3.60"'],
    ['working: "$0"', 'working: "\\\\$0"']],
];
for (const [fp, pairs] of edits) {
  let t = fs.readFileSync(fp, "utf8");
  for (const [a, b] of pairs) {
    if (!t.includes(a)) { console.log("MISS", fp, a); continue; }
    t = t.split(a).join(b);
    console.log("OK", fp.split("/").pop(), a, "->", b);
  }
  fs.writeFileSync(fp, t);
}
