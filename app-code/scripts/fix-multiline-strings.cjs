// Joins literal newlines inside quoted strings into \n escapes.
// Usage: node scripts/fix-multiline-strings.cjs <file.cjs> [...]
const fs = require("fs");

for (const f of process.argv.slice(2)) {
  const src = fs.readFileSync(f, "utf8");
  let out = "";
  let quote = null; // ' " or `
  let i = 0, fixed = 0;
  while (i < src.length) {
    const ch = src[i];
    if (quote) {
      if (ch === "\\") { out += ch + (src[i + 1] ?? ""); i += 2; continue; }
      if (ch === quote) { quote = null; out += ch; i++; continue; }
      if (ch === "\r" || ch === "\n") {
        if (ch === "\r" && src[i + 1] === "\n") i++;
        out += "\\n"; fixed++; i++; continue;
      }
      out += ch; i++; continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") { quote = ch; out += ch; i++; continue; }
    out += ch; i++;
  }
  if (fixed) { fs.writeFileSync(f, out, "utf8"); console.log(`${f}: joined ${fixed} newlines`); }
  else console.log(`${f}: no multiline strings`);
  if (quote) console.log(`  WARNING: unterminated ${quote} at EOF`);
}
