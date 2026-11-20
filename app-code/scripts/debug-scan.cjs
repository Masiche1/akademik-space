const fs = require("fs");
const f = process.argv[2];
const t = fs.readFileSync(f, "utf8");
const chars = t.split("");
let i = 0, state = "code", openPos = -1, hasNl = false;
const bad = [];
while (i < chars.length) {
  const c = chars[i], n = chars[i + 1];
  if (state === "code") {
    if (c === "/" && n === "/") { state = "lc"; i += 2; continue; }
    if (c === "/" && n === "*") { state = "bc"; i += 2; continue; }
    if (c === '"') { state = "dq"; openPos = i; hasNl = false; i++; continue; }
    if (c === "'") { state = "sq"; i++; continue; }
    if (c === "`") { state = "tpl"; i++; continue; }
    i++; continue;
  }
  if (state === "lc") { if (c === "\n") state = "code"; i++; continue; }
  if (state === "bc") { if (c === "*" && n === "/") { state = "code"; i += 2; continue; } i++; continue; }
  if (state === "sq") { if (c === "\\") { i += 2; continue; } if (c === "'") state = "code"; i++; continue; }
  if (state === "tpl") { if (c === "\\") { i += 2; continue; } if (c === "`") state = "code"; i++; continue; }
  if (state === "dq") {
    if (c === "\\") { i += 2; continue; }
    if (c === '"') { state = "code"; if (hasNl) bad.push(openPos); i++; continue; }
    if (c === "\n") hasNl = true;
    i++; continue;
  }
}
console.log("end state:", state, "| unterminated openPos:", openPos, "| bad strings:", bad.length);
for (const p of bad.slice(0, 10)) console.log("  line", t.slice(0, p).split("\n").length, JSON.stringify(t.slice(p, p + 70)));
