// Repairs single-backslash LaTeX commands inside .cjs string literals.
// JS string escapes silently corrupt LaTeX: \r\t\b\f\v\n+letter become control
// chars, other \letter sequences drop the backslash. This doubles the backslash
// for anything that looks like a LaTeX command, while preserving intended
// escapes (\\, \", \', \n-newline, \t-tab etc. when NOT followed by a letter).
// Usage: node scripts/fix-latex-escapes.cjs <file.cjs> [...]
const fs = require("fs");

const LATEX_FIRST = new Set(["a","c","d","e","g","h","i","j","k","l","m","o","p","q","s","w","y","z","x","u"]);
const CTRL_FIRST = new Set(["r","t","b","f","v"]);
const KEEP = new Set(["n","r","t","b","f","v","0","'",'"',"\\"]);

function fix(src) {
  let out = "", i = 0, quote = null, fixed = 0;
  const n = src.length;
  while (i < n) {
    const ch = src[i];
    // line comment
    if (!quote && ch === "/" && src[i + 1] === "/") {
      const e = src.indexOf("\n", i);
      const end = e === -1 ? n : e;
      out += src.slice(i, end); i = end; continue;
    }
    // block comment
    if (!quote && ch === "/" && src[i + 1] === "*") {
      const e = src.indexOf("*/", i + 2);
      const end = e === -1 ? n : e + 2;
      out += src.slice(i, end); i = end; continue;
    }
    if (quote) {
      if (ch === "\\") {
        const c1 = src[i + 1];
        if (c1 === undefined) { out += ch; i++; continue; }
        if (c1 === "\\" || c1 === '"' || c1 === "'") { out += ch + c1; i += 2; continue; }
        if (c1 === "n") {
          // \n + e/a/o + letter => LaTeX command (\neq, \nabla, \notin, \napprox...)
          const rest = src.slice(i + 2, i + 6);
          if (/^[eao][a-z]/.test(rest)) { out += "\\\\" + c1; i += 2; fixed++; continue; }
          out += ch + c1; i += 2; continue;
        }
        if (CTRL_FIRST.has(c1) && /[a-zA-Z]/.test(src[i + 2] || "")) {
          out += "\\\\" + c1; i += 2; fixed++; continue;
        }
        if (LATEX_FIRST.has(c1) && /[a-zA-Z]/.test(c1)) {
          // \letter where letter isn't a meaningful JS escape -> lost backslash
          out += "\\\\" + c1; i += 2; fixed++; continue;
        }
        // punctuation LaTeX escapes: \, \; \: \! \% \& \_ \# \$ \{ \} \~ \^
        if (",;:!%&#${}~^".includes(c1) || c1 === " ") { out += "\\\\" + c1; i += 2; fixed++; continue; }
        out += ch + c1; i += 2; continue;
      }
      if (ch === quote) { quote = null; out += ch; i++; continue; }
      out += ch; i++; continue;
    }
    if (ch === '"' || ch === "'" || ch === "`") { quote = ch; out += ch; i++; continue; }
    out += ch; i++;
  }
  return { out, fixed, dangling: quote };
}

for (const f of process.argv.slice(2)) {
  const src = fs.readFileSync(f, "utf8");
  const { out, fixed, dangling } = fix(src);
  if (dangling) console.log(`${f}: WARNING unterminated ${dangling}`);
  if (fixed) { fs.writeFileSync(f, out, "utf8"); console.log(`${f}: fixed ${fixed} escapes`); }
  else console.log(`${f}: clean`);
}
