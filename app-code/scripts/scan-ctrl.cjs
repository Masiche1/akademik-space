const fs = require("fs");
const files = process.argv.slice(2);
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  const lines = src.split("\n");
  lines.forEach((l, i) => {
    for (const ch of l) {
      const c = ch.codePointAt(0);
      if (c < 32 && c !== 9) {
        console.log(`${f}:${i + 1} ctrl U+${c.toString(16).padStart(4, "0")} :: ${l.slice(0, 140)}`);
        break;
      }
    }
  });
}
