// Reports lines with an odd number of unescaped double quotes (likely broken strings).
const fs = require("fs");
for (const f of process.argv.slice(2)) {
  const lines = fs.readFileSync(f, "utf8").split("\n");
  let bad = 0;
  lines.forEach((l, i) => {
    let n = 0;
    for (let j = 0; j < l.length; j++) {
      if (l[j] === '"' && l[j - 1] !== "\\") n++;
    }
    if (n % 2 === 1) { bad++; console.log(`${f}:${i + 1}: ${l.slice(0, 160)}`); }
  });
  console.log(`${f}: ${bad} suspicious lines`);
}
