const fs = require("fs");
const path = require("path");

const WORK = "src/content/courses";
const HEAD = "C:/Users/HP/Desktop/akademik-head/app-code/src/content/courses";

// Suspicious leftover keys: mangle-A (XorrectChoiceId, X!=c) or mangle-B (correctChoiceIY, Y!=d... include all)
const RE_SUS = /[abd]orrectChoiceId|correctChoiceI[abc]/;
const RE = /(["']?)(correctChoiceId|[abd]orrectChoiceId|correctChoiceI[a-d])\1(\s*:\s*)(["'])([a-d])\4/g;

function resolvedValue(key, val) {
  if (key === "correctChoiceId") return val;
  if (/^[abd]orrectChoiceId$/.test(key)) return key[0];
  if (/^correctChoiceI[a-d]$/.test(key)) return key.slice(-1);
  return null;
}

let scanned = 0, changed = 0;
const problems = [];

function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) { walk(p); continue; }
    if (!f.endsWith(".ts")) continue;
    const w = fs.readFileSync(p, "utf8");
    if (!RE_SUS.test(w)) continue;
    scanned++;
    const rel = path.relative(WORK, p);
    const hp = path.join(HEAD, rel);
    if (!fs.existsSync(hp)) { problems.push("NO-HEAD " + rel); continue; }
    const h = fs.readFileSync(hp, "utf8");

    const hv = [], wv = [];
    let m;
    RE.lastIndex = 0;
    while ((m = RE.exec(h))) hv.push(resolvedValue(m[2], m[5]));
    RE.lastIndex = 0;
    while ((m = RE.exec(w))) wv.push([m.index, m.index + m[0].length, m]);
    if (hv.length !== wv.length) { problems.push(`COUNT-MISMATCH ${rel} head=${hv.length} work=${wv.length}`); continue; }

    let res = "", pos = 0, dirty = false;
    for (let i = 0; i < wv.length; i++) {
      const [s, e, mm] = wv[i];
      const rebuilt = mm[1] + "correctChoiceId" + mm[1] + mm[3] + mm[4] + hv[i] + mm[4];
      if (rebuilt !== mm[0]) dirty = true;
      res += w.slice(pos, s) + rebuilt;
      pos = e;
    }
    res += w.slice(pos);
    if (dirty) { fs.writeFileSync(p, res); changed++; }
    else problems.push("STILL-SUS " + rel);
  }
}
walk(WORK);
console.log(`scanned=${scanned} changed=${changed} problems=${problems.length}`);
problems.slice(0, 40).forEach(x => console.log(x));
