// One-off codemod: fix type errors in edx-ial-*/edx-ias-* science courses.
// 1. keyFormulas: ["..."] -> [{ name, statement }]
// 2. response: { type:"numeric", answer, tolerance?, unit? } -> parts:[{label:"Answer",...}]
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src", "content", "courses");
const targets = [];
for (const d of fs.readdirSync(root)) {
  if (/^edx-(ial|ias)-(biology|chemistry|physics)$/.test(d)) targets.push(path.join(root, d));
}

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (f.endsWith(".ts")) out.push(p);
  }
  return out;
}

// Find the index of the ']' closing the array that starts at `open` (index of '[').
function findArrayEnd(text, open) {
  let i = open + 1, depth = 1, state = "code";
  while (i < text.length) {
    const c = text[i];
    if (state === "code") {
      if (c === '"') state = "dq";
      else if (c === "'") state = "sq";
      else if (c === "`") state = "tp";
      else if (c === "[") depth++;
      else if (c === "]") { depth--; if (depth === 0) return i; }
    } else {
      const q = state === "dq" ? '"' : state === "sq" ? "'" : "`";
      if (c === "\\") i++;
      else if (c === q) state = "code";
    }
    i++;
  }
  return -1;
}

// Parse a string literal starting at i (text[i] === '"'). Returns [rawInner, endIndex].
// rawInner keeps escape sequences verbatim so it can be re-embedded in quotes safely.
function parseString(text, i) {
  let j = i + 1, out = "";
  while (j < text.length) {
    const c = text[j];
    if (c === "\\") { out += text[j] + text[j + 1]; j += 2; continue; }
    if (c === '"') return [out, j + 1];
    out += c; j++;
  }
  return [out, j];
}

function splitNameStatement(raw) {
  const m = raw.match(/^([^":]{1,80}?):\s+(.+)$/);
  if (m) return { name: m[1].trim(), statement: m[2] };
  return { name: "Key formula", statement: raw };
}

let filesChanged = 0, kfFixed = 0, numFixed = 0;

for (const dir of targets) {
  for (const file of walk(dir)) {
    const original = fs.readFileSync(file, "utf8");
    let text = original;

    // --- Fix keyFormulas arrays that contain only string literals ---
    let out = "", pos = 0;
    while (true) {
      const idx = text.indexOf("keyFormulas:", pos);
      if (idx === -1) { out += text.slice(pos); break; }
      const bstart = text.indexOf("[", idx);
      if (bstart === -1 || bstart > idx + 20) { out += text.slice(pos, idx + 12); pos = idx + 12; continue; }
      const bend = findArrayEnd(text, bstart);
      if (bend === -1) { out += text.slice(pos); break; }
      const body = text.slice(bstart + 1, bend);
      const hasObject = body.includes("{");
      out += text.slice(pos, bstart + 1);
      if (!hasObject && body.trim().length > 0) {
        const items = [];
        let i = 0;
        while (i < body.length) {
          while (i < body.length && /[\s,]/.test(body[i])) i++;
          if (i >= body.length) break;
          if (body[i] === '"') {
            const [raw, end] = parseString(body, i);
            items.push(raw); i = end;
          } else { i++; }
        }
        if (items.length > 0) {
          const objs = items.map((raw) => {
            const { name, statement } = splitNameStatement(raw);
            return `{ name: "${name}", statement: "${statement}" }`;
          });
          out += "\n" + objs.map((o) => "          " + o + ",").join("\n") + "\n        ";
          kfFixed += items.length;
        } else {
          out += body;
        }
      } else {
        out += body;
      }
      out += "]";
      pos = bend + 1;
    }
    text = out;

    // --- Fix flat numeric responses ---
    const beforeNum = text;
    text = text.replace(
      /response: \{ type: "numeric", answer: ([^,}]+?)(, tolerance: [^,}]+?)?(, unit: "[^"]*")? \}/g,
      (m, ans, tol, unit) =>
        `response: { type: "numeric", parts: [{ label: "Answer", answer: ${ans}${tol || ""}${unit || ""} }] }`
    );
    const numHere = (beforeNum.match(/response: \{ type: "numeric", answer:/g) || []).length;
    numFixed += numHere;
    text = text.replace(/label: "answer"/g, 'label: "Answer"');

    if (text !== original) { fs.writeFileSync(file, text); filesChanged++; }
  }
}
console.log(`files changed: ${filesChanged}, keyFormula entries fixed: ${kfFixed}, numeric responses fixed: ${numFixed}`);
