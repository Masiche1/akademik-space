// Fix collapsed single-backslash escapes inside "..." string literals.
// Content convention: LaTeX backslashes are doubled (\\frac). A single \X in
// source is a JS escape or a corrupted command:
//   \\  -> already escaped, keep
//   \" \' \` -> legit JS escapes, keep
//   \n + non-letter -> legit newline escape, keep
//   everything else (\f \b \t \r \v \0 \$ \, \  \a \e \l \q \u \x \{ \} digits...)
//     -> double the backslash so the value keeps the LaTeX command
const fs = require("fs");
const path = require("path");

const dirs = process.argv.slice(2);
let totalFixed = 0;

function isLetter(c) { return /[a-zA-Z]/.test(c || ""); }

function fixStringContent(content) {
  let out = "", i = 0, changed = false;
  while (i < content.length) {
    const c = content[i];
    if (c !== "\\") { out += c; i++; continue; }
    const n = content[i + 1];
    if (n === undefined) { out += c; i++; continue; }
    if (n === "\\" || n === '"' || n === "'" || n === "`") { out += c + n; i += 2; continue; }
    if (n === "n" && !isLetter(content[i + 2])) { out += "\\n"; i += 2; continue; }
    out += "\\\\" + n; i += 2; changed = true;
  }
  return { out, changed };
}

// Locate every "..." literal's inner span, respecting escapes/comments/templates.
function collectSpans(text) {
  const chars = text;
  const spans = [];
  let i = 0, state = "code", segStart = -1;
  while (i < chars.length) {
    const c = chars[i], n = chars[i + 1];
    if (state === "code") {
      if (c === "/" && n === "/") { const e = text.indexOf("\n", i); i = e === -1 ? chars.length : e; continue; }
      if (c === "/" && n === "*") { const e = text.indexOf("*/", i + 2); i = e === -1 ? chars.length : e + 2; continue; }
      if (c === '"') { state = "dq"; segStart = i + 1; i++; continue; }
      if (c === "'") { state = "sq"; i++; continue; }
      if (c === "`") { state = "tp"; i++; continue; }
      i++; continue;
    }
    if (state === "sq") { if (c === "\\") i += 2; else { if (c === "'") state = "code"; i++; } continue; }
    if (state === "tp") {
      if (c === "\\") { i += 2; continue; }
      if (c === "`") { state = "code"; i++; continue; }
      if (c === "$" && n === "{") {
        let d = 1, j = i + 2;
        while (j < chars.length && d > 0) { if (chars[j] === "{") d++; else if (chars[j] === "}") d--; j++; }
        i = j; continue;
      }
      i++; continue;
    }
    // dq: scan to unescaped quote, then record inner span
    if (c === "\\") {
      let j = i + 2;
      while (j < chars.length) {
        if (chars[j] === "\\") j += 2;
        else if (chars[j] === '"') break;
        else j++;
      }
      spans.push([segStart, j]);
      i = j + 1; state = "code"; continue;
    }
    if (c === '"') { spans.push([segStart, i]); i++; state = "code"; continue; }
    i++;
  }
  return spans;
}

function fixFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const spans = collectSpans(text);
  let out = text, fixed = 0;
  for (let s = spans.length - 1; s >= 0; s--) {
    const [a, b] = spans[s];
    const { out: fixedInner, changed } = fixStringContent(out.slice(a, b));
    if (changed) { out = out.slice(0, a) + fixedInner + out.slice(b); fixed++; }
  }
  return { out, fixed };
}

function walk(dir, acc = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (f.endsWith(".ts")) acc.push(p);
  }
  return acc;
}

for (const d of dirs) {
  for (const f of walk(d)) {
    const { out, fixed } = fixFile(f);
    if (fixed > 0) { fs.writeFileSync(f, out); totalFixed += fixed; console.log("fixed", path.relative(process.cwd(), f), `(${fixed} strings)`); }
  }
}
console.log("total strings fixed:", totalFixed);
