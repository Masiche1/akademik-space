const fs = require("fs");
const path = require("path");

const DIRS = [];
for (const u of ["unit-3", "unit-4", "unit-5"]) {
  const d = path.join("src/content/courses/edx-ias-computerscience", u);
  for (const f of fs.readdirSync(d)) if (f.endsWith(".ts") && f !== "index.ts") DIRS.push(path.join(d, f));
}

// MCQ block: response mcq ... correctChoiceId ... markscheme ... finalAnswer (same question)
const RE_MCQ = /type:\s*"mcq",\s*choices:\s*\[([\s\S]*?)\],\s*correctChoiceId:\s*"([a-d])",?\s*\},([\s\S]*?)finalAnswer:\s*"((?:[^"\\]|\\.)*)"/g;
const RE_CH = /\{\s*id:\s*"([a-d])",\s*text:\s*"((?:[^"\\]|\\.)*)"\s*\}/g;

function norm(s) {
  return s.replace(/\$+/g, "").replace(/\\[a-zA-Z]+/g, " ").replace(/[^a-zA-Z0-9]+/g, " ").trim().toLowerCase().replace(/\s+/g, " ");
}

let total = 0, auto = 0;
const manual = [];

for (const file of DIRS) {
  let src = fs.readFileSync(file, "utf8");
  let m;
  RE_MCQ.lastIndex = 0;
  while ((m = RE_MCQ.exec(src))) {
    total++;
    const choices = [];
    let c;
    RE_CH.lastIndex = 0;
    while ((c = RE_CH.exec(m[1]))) choices.push({ id: c[1], text: c[2] });
    // finalAnswer: "**(x)** answer text" -> strip letter prefix
    let fa = m[4];
    fa = fa.replace(/^\*\*\([a-d]\)\*\*\s*/, "").replace(/^\*\*\([a-d]\)\*\*:?\s*/, "");
    fa = fa.replace(/\*\*/g, "").trim();
    const nfa = norm(fa);
    const matches = choices.filter(ch => norm(ch.text) === nfa || norm(ch.text) === norm(fa));
    const exact = matches.length === 1 ? matches[0] : null;
    const cur = m[2];
    if (exact) {
      if (exact.id !== cur) {
        // apply fix: replace this specific correctChoiceId occurrence
        const full = m[0];
        const fixed = full.replace(`correctChoiceId: "${cur}"`, `correctChoiceId: "${exact.id}"`);
        src = src.replace(full, () => fixed);
        auto++;
        console.log(`${file} :: ${exact.id} (was ${cur}) fa="${fa.slice(0, 50)}"`);
      }
    } else {
      manual.push(`${file} cur=${cur} fa="${fa.slice(0, 60)}" choices=[${choices.map(c => c.id + ":" + c.text.slice(0, 25)).join(" | ")}]`);
    }
  }
  fs.writeFileSync(file, src);
}
console.log(`total=${total} autoFixed=${auto} manual=${manual.length}`);
manual.forEach(x => console.log("MANUAL " + x));
