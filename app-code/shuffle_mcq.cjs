// Shuffle MCQ choices in literal `choices: [...]` / `"choices": [...]` arrays.
// Deterministic per-file seeded RNG. Renumbers choice ids a,b,c,... and remaps correctChoiceId.
// Skips arrays with "all/none of the above", letter-combination choices, >26 options, or parse anomalies.
const fs = require("fs");
const path = require("path");

const ROOT = process.argv.slice(2).find(a => !a.startsWith("--")) || "src/content/courses";
const DRY = process.argv.includes("--dry");

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function skipString(src, i) {
  const q = src[i]; i++;
  while (i < src.length) {
    const c = src[i];
    if (c === "\\") { i += 2; continue; }
    if (q === "`" && c === "$" && src[i + 1] === "{") { i = skipBrace(src, i + 1); continue; }
    if (c === q) return i + 1;
    i++;
  }
  return i;
}
function skipBrace(src, i) { // src[i] === '{'
  let depth = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") { i = skipString(src, i); continue; }
    if (c === "/" && src[i + 1] === "/") { const e = src.indexOf("\n", i); i = e < 0 ? src.length : e; continue; }
    if (c === "/" && src[i + 1] === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? src.length : e + 2; continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (depth === 0) return i + 1; }
    i++;
  }
  return i;
}
// find index of ']' matching src[openIdx]==='['
function matchBracket(src, openIdx) {
  let depth = 0, i = openIdx;
  while (i < src.length) {
    const c = src[i];
    if (c === '"' || c === "'" || c === "`") { i = skipString(src, i); continue; }
    if (c === "/" && src[i + 1] === "/") { const e = src.indexOf("\n", i); i = e < 0 ? src.length : e; continue; }
    if (c === "/" && src[i + 1] === "*") { const e = src.indexOf("*/", i + 2); i = e < 0 ? src.length : e + 2; continue; }
    if (c === "[") depth++;
    else if (c === "]") { depth--; if (depth === 0) return i; }
    i++;
  }
  return -1;
}
// split array inner text on top-level commas
function splitElements(inner) {
  const els = [];
  let depth = 0, start = 0, i = 0;
  while (i < inner.length) {
    const c = inner[i];
    if (c === '"' || c === "'" || c === "`") { i = skipString(inner, i); continue; }
    if (c === "/" && inner[i + 1] === "/") { const e = inner.indexOf("\n", i); i = e < 0 ? inner.length : e; continue; }
    if (c === "/" && inner[i + 1] === "*") { const e = inner.indexOf("*/", i + 2); i = e < 0 ? inner.length : e + 2; continue; }
    if (c === "{" || c === "[" || c === "(") depth++;
    else if (c === "}" || c === "]" || c === ")") depth--;
    else if (c === "," && depth === 0) { els.push(inner.slice(start, i)); start = i + 1; }
    i++;
  }
  const tail = inner.slice(start);
  if (tail.trim()) els.push(tail);
  return els;
}

const ID_RE = /(["']?)id\1\s*:\s*(["'])([^"']*)\2/;
const TEXTKEY_RE = /(["'])text\1\s*:/;
const SPECIAL_RE = /all of the (above|these)|none of the (above|these)|none of these|\b[abcd]\s+and\s+[abcd]\b/i;
const CHOICES_RE = /(?:(["'])choices\1|choices)\s*:\s*\[/g;
const CORRECT_RE = /(["'])?correctChoiceId\1\s*:\s*(["'])([^"']*)\2/;
const BOUNDARY_RE = /(["'])?(choices|response|type|stem|parts|markscheme)\1\s*:/;

function processFile(file) {
  const src = fs.readFileSync(file, "utf8");
  const rnd = mulberry32(hashStr(file));
  let out = "";
  let pos = 0, changed = 0, skipped = 0, arrays = 0;
  const skipReasons = {};
  const skip = (r) => { skipped++; skipReasons[r] = (skipReasons[r] || 0) + 1; };

  CHOICES_RE.lastIndex = 0;
  let m;
  while ((m = CHOICES_RE.exec(src))) {
    const openIdx = m.index + m[0].length - 1; // index of '['
    const closeIdx = matchBracket(src, openIdx);
    if (closeIdx < 0) { skip("unclosed"); break; }
    const inner = src.slice(openIdx + 1, closeIdx);
    arrays++;

    // validate + collect elements
    const rawEls = splitElements(inner);
    const els = [];
    let bad = false;
    for (const raw of rawEls) {
      const t = raw.trim();
      if (!t) continue;
      if (!t.startsWith("{") || !t.endsWith("}")) { bad = true; break; }
      const idm = t.match(ID_RE);
      if (!idm) { bad = true; break; }
      const textKey = t.search(TEXTKEY_RE);
      if (idm.index > textKey && textKey >= 0) { bad = true; break; } // id must precede text key
      els.push({ raw: t, id: idm[3], idMatch: idm });
    }
    if (bad || els.length < 2) { if (bad) skip("element-parse"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }
    if (els.length > 26) { skip(">26"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }
    const ids = new Set(els.map(e => e.id));
    if (ids.size !== els.length) { skip("dup-ids"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }

    // special-choice guard: inspect each element's text value
    let special = false;
    for (const e of els) {
      const tk = e.raw.search(TEXTKEY_RE);
      if (tk < 0) { special = true; break; }
      // grab the string literal after text:
      const rest = e.raw.slice(tk);
      const sm = rest.match(/text["']?\s*:\s*(["'`])([\s\S]*?)\1\s*[,}]/);
      const txt = sm ? sm[2] : e.raw;
      if (SPECIAL_RE.test(txt)) { special = true; break; }
    }
    if (special) { skip("special-choice"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }

    // find correctChoiceId after the array, before next boundary
    const after = src.slice(closeIdx + 1);
    const boundM = after.match(BOUNDARY_RE);
    const boundIdx = boundM ? boundM.index : after.length;
    const win = after.slice(0, Math.min(boundIdx, 4000));
    const cm = win.match(CORRECT_RE);
    if (!cm) { skip("no-correctChoiceId"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }
    const correctOld = cm[3];
    const correctEl = els.find(e => e.id === correctOld);
    if (!correctEl) { skip("correct-not-in-choices"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }

    // shuffle
    const order = els.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    if (order.every((v, i) => v === i)) { // ensure actual change for n>1
      [order[0], order[1]] = [order[1], order[0]];
    }

    // build new elements with renumbered ids a,b,c...
    const letter = i => String.fromCharCode(97 + i);
    const oldToNew = new Map();
    const newEls = order.map((oldIdx, newPos) => {
      const e = els[oldIdx];
      oldToNew.set(e.id, letter(newPos));
      // replace id value inside element raw (first id: occurrence)
      const idRe = /(["']?)id\1(\s*:\s*)(["'])([^"']*)\3/;
      const replaced = e.raw.replace(idRe, (mm, kq, colon, vq) => `${kq}id${kq}${colon}${vq}${letter(newPos)}${vq}`);
      return replaced;
    });
    const newCorrect = oldToNew.get(correctOld);

    // rebuild array text preserving formatting style
    const hadNewline = inner.includes("\n");
    let newInner;
    if (hadNewline) {
      const firstElStart = inner.indexOf("{");
      const lineStart = inner.lastIndexOf("\n", firstElStart) + 1;
      const indent = inner.slice(lineStart, firstElStart).match(/^[ \t]*/)[0];
      const trailingComma = /,\s*$/.test(inner);
      newInner = "\n" + indent + newEls.join(",\n" + indent) + (trailingComma ? "," : "") + "\n" + indent.slice(0, indent.length - 2 >= 0 ? indent.length - 2 : 0);
      // closing bracket indent: use indent minus typical 2? simpler: reuse previous closing-line whitespace
      const closeLineStart = inner.lastIndexOf("\n", inner.length - 1) + 1;
      // find whitespace before ']' — it's whatever preceded closeIdx; approximate with indent of '[' line? Use the whitespace run right before ']' in original inner tail
      const tailWs = inner.match(/([ \t]*)$/)[1];
      newInner = "\n" + indent + newEls.join(",\n" + indent) + (trailingComma ? "," : "") + "\n" + tailWs;
    } else {
      newInner = " " + newEls.join(", ") + " ";
    }

    // apply: replace array inner and correctChoiceId value
    let newSrc = src.slice(0, openIdx + 1) + newInner + src.slice(closeIdx);
    // recompute correctChoiceId position in newSrc
    const cmIdx = newSrc.indexOf(correctOld, openIdx); // may hit inside text; find the key occurrence after array
    // safer: find CORRECT_RE match after new array close
    const newClose = openIdx + 1 + newInner.length;
    const afterNew = newSrc.slice(newClose);
    const bm = afterNew.match(BOUNDARY_RE);
    const bwin = afterNew.slice(0, Math.min(bm ? bm.index : afterNew.length, 4000));
    const c2 = bwin.match(CORRECT_RE);
    if (!c2) { skip("correct-lost"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }
    const absStart = newClose + c2.index;
    const valStart = absStart + c2[0].lastIndexOf(c2[2]); // position of quote char of value
    // replace the value inside quotes: c2[2] is quote char, c2[3] old value
    const valueAbs = absStart + c2[0].indexOf(c2[3], c2[0].indexOf(":"));
    newSrc = newSrc.slice(0, valueAbs) + newCorrect + newSrc.slice(valueAbs + correctOld.length);

    out += newSrc.slice(pos, openIdx + 1) + newInner;
    // We must continue scanning the NEW src from newClose; simpler: rebuild via segments.
    // To keep it simple, accumulate: out gets everything up to newInner end; set pos = newClose and src = newSrc for remaining scans? But regex indices shift.
    // Approach: process replacements from END to START instead — collect all edits first. (handled below)
    src = newSrc;
    CHOICES_RE.lastIndex = newClose + 1;
    pos = newClose;
    changed++;
  }
  // The incremental approach above is fragile; this function is rewritten below.
  return { src, changed, skipped, arrays, skipReasons };
}

// Because in-place rescanning with shifting indices is error-prone, do a two-pass collect-then-apply.
function processFile2(file) {
  const src = fs.readFileSync(file, "utf8");
  const rnd = mulberry32(hashStr(file));
  const edits = []; // {start,end,text} replacements, applied right-to-left
  let arrays = 0, skipped = 0;
  const skipReasons = {};
  const skip = (r) => { skipped++; skipReasons[r] = (skipReasons[r] || 0) + 1; };

  CHOICES_RE.lastIndex = 0;
  let m;
  while ((m = CHOICES_RE.exec(src))) {
    const openIdx = m.index + m[0].length - 1;
    const closeIdx = matchBracket(src, openIdx);
    if (closeIdx < 0) { skip("unclosed"); break; }
    arrays++;
    const inner = src.slice(openIdx + 1, closeIdx);
    const rawEls = splitElements(inner);
    const els = [];
    let bad = false;
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
    if (bad) { skip("element-parse"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }
    if (els.length < 2) { CHOICES_RE.lastIndex = closeIdx + 1; continue; }
    if (els.length > 26) { skip(">26"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }
    if (new Set(els.map(e => e.id)).size !== els.length) { skip("dup-ids"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }

    let special = false;
    for (const e of els) {
      const sm = e.raw.match(/(?:"|')?text(?:"|')?\s*:\s*(["'`])([\s\S]*?)\1\s*[,}]/);
      const txt = sm ? sm[2] : e.raw;
      if (SPECIAL_RE.test(txt)) { special = true; break; }
    }
    if (special) { skip("special-choice"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }

    const after = src.slice(closeIdx + 1);
    const boundM = after.match(BOUNDARY_RE);
    const boundIdx = boundM ? boundM.index : after.length;
    const win = after.slice(0, Math.min(boundIdx, 4000));
    const cm = win.match(CORRECT_RE);
    if (!cm) { skip("no-correctChoiceId"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }
    const correctOld = cm[3];
    if (!els.some(e => e.id === correctOld)) { skip("correct-not-in-choices"); CHOICES_RE.lastIndex = closeIdx + 1; continue; }

    const order = els.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    if (order.every((v, i) => v === i)) [order[0], order[1]] = [order[1], order[0]];

    const letter = i => String.fromCharCode(97 + i);
    const oldToNew = new Map();
    const newEls = order.map((oldIdx, newPos) => {
      const e = els[oldIdx];
      oldToNew.set(e.id, letter(newPos));
      return e.raw.replace(/(["']?)id\1(\s*:\s*)(["'])([^"']*)\3/, (mm, kq, colon, vq) => `${kq}id${kq}${colon}${vq}${letter(newPos)}${vq}`);
    });
    const newCorrect = oldToNew.get(correctOld);

    const hadNewline = inner.includes("\n");
    let newInner;
    if (hadNewline) {
      const firstElStart = inner.search(/\S/);
      const lineStart = inner.lastIndexOf("\n", firstElStart) + 1;
      const indent = inner.slice(lineStart, firstElStart).match(/^[ \t]*/)[0];
      const trailingComma = /,\s*$/.test(inner);
      const tailWs = (inner.match(/([ \t]*)$/) || ["", ""])[1];
      newInner = "\n" + indent + newEls.join(",\n" + indent) + (trailingComma ? "," : "") + "\n" + tailWs;
    } else {
      newInner = " " + newEls.join(", ") + " ";
    }

    // correctChoiceId absolute position: find within win
    const cAbs = closeIdx + 1 + cm.index;
    // value start: within matched text, locate the quoted value
    const matchedText = cm[0];
    const valQuotePos = matchedText.lastIndexOf(cm[2]); // quote char before value? cm[2] is quote, cm[3] value
    // find index of value inside matchedText: it's after the second quote char occurrence pattern key:"value"
    const valIdxInMatch = matchedText.indexOf(cm[3]);
    const valAbs = cAbs + valIdxInMatch;

    edits.push({ start: openIdx + 1, end: closeIdx, text: newInner });
    edits.push({ start: valAbs, end: valAbs + correctOld.length, text: newCorrect });
  }

  if (!edits.length) return { changed: 0, skipped, arrays, skipReasons };
  edits.sort((a, b) => b.start - a.start);
  let out = src;
  for (const e of edits) out = out.slice(0, e.start) + e.text + out.slice(e.end);
  return { changed: edits.length / 2, skipped, arrays, skipReasons, out };
}

// ---- driver ----
const files = [];
(function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (f.endsWith(".ts")) files.push(p);
  }
})(ROOT);

let totalArrays = 0, totalChanged = 0, totalSkipped = 0;
const allSkips = {};
const changedFiles = [];
for (const f of files) {
  const r = processFile2(f);
  totalArrays += r.arrays; totalChanged += r.changed; totalSkipped += r.skipped;
  for (const [k, v] of Object.entries(r.skipReasons)) allSkips[k] = (allSkips[k] || 0) + v;
  if (r.out !== undefined) {
    changedFiles.push(f);
    if (!DRY) fs.writeFileSync(f, r.out);
  }
}
console.log(`files=${files.length} arrays=${totalArrays} shuffled=${totalChanged} skippedArrays=${totalSkipped}`);
console.log("skip reasons:", JSON.stringify(allSkips));
console.log(`filesChanged=${changedFiles.length}${DRY ? " (dry run)" : ""}`);
if (process.argv.includes("--list")) changedFiles.forEach(f => console.log(f));
