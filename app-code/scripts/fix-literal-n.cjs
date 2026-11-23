// Replaces literal `\n` escape TEXT with real newlines when it appears OUTSIDE
// string literals (fix-multiline-strings.cjs joined lines incorrectly).
// `\n` inside strings is preserved (it is a legitimate escape).
const fs = require("fs");

for (const f of process.argv.slice(2)) {
  const src = fs.readFileSync(f, "utf8");
  let out = "", i = 0, inStr = null, fixed = 0;
  while (i < src.length) {
    const c = src[i];
    if (inStr) {
      out += c;
      if (c === "\\") { if (i + 1 < src.length) { out += src[i + 1]; i += 2; continue; } }
      else if (c === inStr) inStr = null;
      i++;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") { inStr = c; out += c; i++; continue; }
    if (c === "\\" && src[i + 1] === "n") { out += "\n"; i += 2; fixed++; continue; }
    out += c; i++;
  }
  if (fixed) { fs.writeFileSync(f, out, "utf8"); console.log(`${f}: fixed ${fixed} literal \\n outside strings`); }
  else console.log(`${f}: ok`);
}
