const fs = require("fs");
const path = require("path");
const ROOT = "src/content/courses";

// For each MCQ: after correctChoiceId, the FIRST finalAnswer before the next question id belongs to it.
// If that finalAnswer starts with **(L)**, rewrite L to the correctChoiceId letter.
const CORRECT_RE = /(["']?)correctChoiceId\1\s*:\s*(["'])([a-d])\2/g;
const QID_RE = /(["']?)id\1\s*:\s*(["'])[A-Za-z0-9][^"']*\2/g; // next question/choice id — but choices precede correctChoiceId; after it, next id: is next question's
const FA_RE = /(["']?)finalAnswer\1\s*:\s*(["'])\*\*\(([a-d])\)\*\*/g;

let filesChanged = 0, fixes = 0, scanned = 0;
const problems = [];

function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) { walk(p); continue; }
    if (!f.endsWith(".ts")) continue;
    scanned++;
    let src = fs.readFileSync(p, "utf8");
    if (!src.includes("correctChoiceId")) continue;

    // collect edits
    const edits = [];
    CORRECT_RE.lastIndex = 0;
    let m;
    while ((m = CORRECT_RE.exec(src))) {
      const correctLetter = m[3];
      const afterPos = m.index + m[0].length;
      // find next question id: (whitespace){ id: "..." — question objects start with id at ~8-10 spaces indent; choice ids are inline { id: too. Use any id: occurrence after correctChoiceId.
      QID_RE.lastIndex = afterPos;
      const qidM = QID_RE.exec(src);
      const limit = qidM ? qidM.index : src.length;
      // find first finalAnswer with letter prefix within (afterPos, limit)
      const seg = src.slice(afterPos, Math.min(limit, afterPos + 20000));
      FA_RE.lastIndex = 0;
      const fa = FA_RE.exec(seg);
      if (!fa) continue;
      const oldL = fa[3];
      if (oldL === correctLetter) continue;
      // absolute position of the letter inside finalAnswer match
      const letterAbs = afterPos + fa.index + fa[0].lastIndexOf("(" + oldL + ")") + 1;
      edits.push({ start: letterAbs, end: letterAbs + 1, text: correctLetter });
    }
    if (!edits.length) continue;
    edits.sort((a, b) => b.start - a.start);
    for (const e of edits) src = src.slice(0, e.start) + e.text + src.slice(e.end);
    fs.writeFileSync(p, src);
    filesChanged++;
    fixes += edits.length;
  }
}
walk(ROOT);
console.log(`scanned=${scanned} filesChanged=${filesChanged} letterFixes=${fixes}`);
