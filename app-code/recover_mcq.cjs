const fs = require("fs");
const path = require("path");

const WORK = "src/content/courses";
const HEAD = "C:/Users/HP/Desktop/akademik-head/app-code/src/content/courses";

// Matches all key variants: legit, mangle-A (XorrectChoiceId), mangle-B (correctChoiceIY)
const RE = /(["']?)(correctChoiceId|[abd]orrectChoiceId|correctChoiceI[a-d])\1(\s*:\s*)(["'])([a-d])\4/g;

function resolvedValue(key, val) {
  if (key === "correctChoiceId") return val;
  if (/^[abd]orrectChoiceId$/.test(key)) return key[0];
  if (/^correctChoiceI[a-d]$/.test(key)) return key.slice(-1);
  return null;
}

function extract(text) {
  const out = [];
  let m;
  RE.lastIndex = 0;
  while ((m = RE.exec(text))) {
    const r = resolvedValue(m[2], m[5]);
    if (r === null) return { error: "unresolved key " + m[2] };
    out.push(r);
  }
  return { values: out };
}

let files = 0, changed = 0, skipped = 0, mismatched = 0, missingHead = 0;
const problems = [];

function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) { walk(p); continue; }
    if (!f.endsWith(".ts")) continue;
    files++;
    const rel = path.relative(WORK, p);
    const hp = path.join(HEAD, rel);
    if (!fs.existsSync(hp)) { missingHead++; problems.push("NO-HEAD " + rel); continue; }

    const w = fs.readFileSync(p, "utf8");
    const h = fs.readFileSync(hp, "utf8");
    if (w === h) continue; // untouched by fix_mangled (or identical anyway)

    const hw = extract(h);
    const ww = extract(w);
    if (hw.error || ww.error) { skipped++; problems.push("EXTRACT-ERR " + rel + " " + (hw.error || ww.error)); continue; }
    if (hw.values.length !== ww.values.length) {
      mismatched++;
      problems.push(`COUNT-MISMATCH ${rel} head=${hw.values.length} work=${ww.values.length}`);
      continue;
    }
    // quick check: are working values already equal to head-resolved? then only key normalization may be needed
    let idx = 0, out = "", last = 0, dirty = false;
    RE.lastIndex = 0;
    let m;
    const replacements = [];
    while ((m = RE.exec(w))) {
      const want = hw.values[idx++];
      const have = resolvedValue(m[2], m[5]);
      const normKey = m[1] + "correctChoiceId" + m[1];
      const normVal = m[4] + want + m[4];
      const orig = m[0];
      const rebuilt = normKey + m[3] + normVal;
      if (rebuilt !== orig) dirty = true;
      replacements.push([m.index, m.index + orig.length, rebuilt]);
    }
    if (!dirty) continue;
    const wOrig = fs.readFileSync(p, "utf8");
    let res = "", pos = 0;
    for (const [s, e, rep] of replacements) { res += wOrig.slice(pos, s) + rep; pos = e; }
    res += wOrig.slice(pos);
    fs.writeFileSync(p, res);
    changed++;
  }
}
walk(WORK);
console.log(`files=${files} changed=${changed} skipped=${skipped} mismatched=${mismatched} missingHead=${missingHead}`);
problems.slice(0, 60).forEach(x => console.log(x));
console.log("totalProblems=" + problems.length);
