const fs = require("fs");
const t = fs.readFileSync("src/content/courses/us-math-g7/unit-5/lesson-5-1.ts", "utf8");
// single backslash + l/r/n followed by letters, not preceded by backslash
const re = /[^\\]\\[lrn][a-zA-Z]*/g;
let m;
while ((m = re.exec(t))) {
  console.log(m.index, JSON.stringify(t.slice(m.index - 15, m.index + 55)));
}
