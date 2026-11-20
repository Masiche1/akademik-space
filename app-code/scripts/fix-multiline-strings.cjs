const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src", "content", "courses");

function walk(dir) {
  const out = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else if (f.endsWith(".ts")) out.push(p);
  }
  return out;
}

// Scan a file for double-quoted strings containing raw newlines, convert to template literals.
function fixFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const chars = text.split("");
  let i = 0;
  let state = "code"; // code | dquote | squote | template | linecomment | blockcomment
  const replacements = []; // [pos, char]
  let openPos = -1;
  let hasNewline = false;

  while (i < chars.length) {
    const c = chars[i];
    const next = chars[i + 1];

    if (state === "code") {
      if (c === "/" && next === "/") { state = "linecomment"; i += 2; continue; }
      if (c === "/" && next === "*") { state = "blockcomment"; i += 2; continue; }
      if (c === '"') { state = "dquote"; openPos = i; hasNewline = false; i++; continue; }
      if (c === "'") { state = "squote"; i++; continue; }
      if (c === "`") { state = "template"; i++; continue; }
      i++;
      continue;
    }
    if (state === "linecomment") {
      if (c === "\n") state = "code";
      i++;
      continue;
    }
    if (state === "blockcomment") {
      if (c === "*" && next === "/") { state = "code"; i += 2; continue; }
      i++;
      continue;
    }
    if (state === "squote") {
      if (c === "\\") { i += 2; continue; }
      if (c === "'") { state = "code"; }
      i++;
      continue;
    }
    if (state === "template") {
      if (c === "\\") { i += 2; continue; }
      if (c === "`") { state = "code"; }
      i++;
      continue;
    }
    if (state === "dquote") {
      if (c === "\\") { i += 2; continue; }
      if (c === '"') {
        state = "code";
        if (hasNewline) {
          // convert open and close quotes to backticks
          replacements.push([openPos, "`"], [i, "`"]);
        }
        i++;
        continue;
      }
      if (c === "\n") hasNewline = true;
      i++;
      continue;
    }
  }

  if (replacements.length === 0) return 0;
  // apply replacements from end to start
  replacements.sort((a, b) => b[0] - a[0]);
  let out = text;
  for (const [pos, ch] of replacements) {
    out = out.slice(0, pos) + ch + out.slice(pos + 1);
  }
  fs.writeFileSync(file, out);
  return replacements.length / 2;
}

let total = 0;
const changed = [];
for (const f of walk(root)) {
  const n = fixFile(f);
  if (n > 0) { changed.push(`${path.relative(root, f)}: ${n} strings`); total += n; }
}
console.log(`fixed ${total} strings in ${changed.length} files`);
for (const c of changed) console.log(" ", c);
