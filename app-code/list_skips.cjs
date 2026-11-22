const fs = require("fs");
const path = require("path");
const ROOT = "src/content/courses";

function skipString(src, i) { const q = src[i]; i++; while (i < src.length) { const c = src[i]; if (c === "\\") { i += 2; continue; } if (q === "`" && c === "$" && src[i + 1] === "{") { i = skipBrace(src, i + 1); continue; } if (c === q) return i + 1; i++; } return i; }
function skipBrace(src, i) { let d = 0; while (i < src.length) { const c = src[i]; if (c === '"' || c === "'" || c === "`") { i = skipString(src, i); continue; } if (c === "/" && src[i + 1] === "/") { const e = src.indexOf("\n", i); i = e < 0 ? src.length : e; continue; } if (c === "/" && src[i + 1] === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? src.length : e + 2; continue; } if (c === "{") d++; else if (c === "}") { d--; if (d === 0) return i + 1; } i++; } return i; }
function matchBracket(src, openIdx) { let d = 0, i = openIdx; while (i < src.length) { const c = src[i]; if (c === '"' || c === "'" || c === "`") { i = skipString(src, i); continue; } if (c === "/" && src[i + 1] === "/") { const e = src.indexOf("\n", i); i = e < 0 ? src.length : e; continue; } if (c === "/" && src[i + 1] === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? src.length : e + 2; continue; } if (c === "[") d++; else if (c === "]") { d--; if (d === 0) return i; } i++; } return -1; }
function splitElements(inner) { const els = []; let d = 0, s = 0, i = 0; while (i < inner.length) { const c = inner[i]; if (c === '"' || c === "'" || c === "`") { i = skipString(inner, i); continue; } if (c === "/" && inner[i + 1] === "/") { const e = inner.indexOf("\n", i); i = e < 0 ? inner.length : e; continue; } if (c === "/" && inner[i + 1] === "*") { const e = inner.indexOf("*/", i + 2); i = e < 0 ? inner.length : e + 2; continue; } if (c === "{" || c === "[" || c === "(") d++; else if (c === "}" || c === "]" || c === ")") d--; else if (c === "," && d === 0) { els.push(inner.slice(s, i)); s = i + 1; } i++; } const t = inner.slice(s); if (t.trim()) els.push(t); return els; }

const ID_RE = /(["']?)id\1\s*:\s*(["'])([^"']*)\2/;
const TEXTKEY_RE = /(["'])text\1\s*:/;
const SPECIAL_RE = /all of the (above|these)|none of the (above|these)|none of these|\b[abcd]\s+and\s+[abcd]\b/i;
const CHOICES_RE = /(?:(["'])choices\1|choices)\s*:\s*\[/g;
const CORRECT_RE = /(["'])?correctChoiceId\1\s*:\s*(["'])([^"']*)\2/;
const BOUNDARY_RE = /(["'])?(choices|response|type|stem|parts|markscheme)\1\s*:/;

const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); const st = fs.statSync(p); if (st.isDirectory()) walk(p); else if (f.endsWith(".ts")) files.push(p); } })(ROOT);

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  CHOICES_RE.lastIndex = 0;
  let m;
  while ((m = CHOICES_RE.exec(src))) {
    const openIdx = m.index + m[0].length - 1;
    const closeIdx = matchBracket(src, openIdx);
    if (closeIdx < 0) break;
    const inner = src.slice(openIdx + 1, closeIdx);
    const rawEls = splitElements(inner);
    const els = [];
    let bad = false, reason = null;
    for (const raw of rawEls) {
      const t = raw.trim();
      if (!t) continue;
      if (!t.startsWith("{") || !t.endsWith("}")) { bad = true; break; }
      const idm = t.match(ID_RE);
      if (!idm) { bad = true; break; }
      const textKey = t.search(TEXTKEY_RE);
      if (textKey >= 0 && idm.index > textKey) { bad = true; break; }
      els.push({ raw: t, id: idm[3] });
    }
    if (bad) reason = "element-parse";
    else if (els.length >= 2 && els.length <= 26 && new Set(els.map(e => e.id)).size !== els.length) reason = "dup-ids";
    else if (els.length >= 2 && els.length <= 26) {
      let special = false;
      for (const e of els) {
        const sm = e.raw.match(/(?:"|')?text(?:"|')?\s*:\s*(["'`])([\s\S]*?)\1\s*[,}]/);
        const txt = sm ? sm[2] : e.raw;
        if (SPECIAL_RE.test(txt)) { special = true; break; }
      }
      if (special) reason = "special-choice";
      else {
        const after = src.slice(closeIdx + 1);
        const boundM = after.match(BOUNDARY_RE);
        const boundIdx = boundM ? boundM.index : after.length;
        const win = after.slice(0, Math.min(boundIdx, 4000));
        const cm = win.match(CORRECT_RE);
        if (!cm) reason = "no-correctChoiceId";
        else if (!els.some(e => e.id === cm[3])) reason = "correct-not-in-choices";
      }
    } else if (els.length > 26) reason = ">26";
    if (reason) {
      const line = src.slice(0, m.index).split("\n").length;
      const sample = inner.replace(/\s+/g, " ").slice(0, 110);
      console.log(`${reason} :: ${file}:${line} :: ${sample}`);
    }
    CHOICES_RE.lastIndex = closeIdx + 1;
  }
}
