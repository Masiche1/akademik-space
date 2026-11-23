// Rebuilds edx manifest/work-plan/tasks/prompts from the current filesystem.
const fs = require("fs");
const path = require("path");
const base = "src/content/courses";
const TARGET = 312, PER_UNIT = 36;

const manifest = [];
for (const d of fs.readdirSync(base).filter((d) => d.startsWith("edx-"))) {
  const up = path.join(base, d);
  const unitDirs = fs.readdirSync(up).filter((x) => /^unit-\d+[a-z]?$/.test(x))
    .map((x) => ({ dir: x, num: parseInt((x.match(/\d+/) || ["0"])[0], 10) }))
    .sort((a, b) => a.num - b.num);
  let q = 0;
  const unitInfo = [];
  for (const u of unitDirs) {
    let uq = 0;
    const uqDir = path.join(up, u.dir);
    for (const f of fs.readdirSync(uqDir).filter((x) => x.endsWith(".ts") && x !== "index.ts")) {
      const t = fs.readFileSync(path.join(uqDir, f), "utf8");
      uq += (t.match(/"id":\s*"[^"]+-q\d+"|id:\s*"[^"]+-q\d+"/g) || []).length;
    }
    q += uq;
    let title = "";
    try {
      const idx = fs.readFileSync(path.join(uqDir, "index.ts"), "utf8");
      title = (idx.match(/title:\s*"([^"]+)"/) || [])[1] || "";
    } catch {}
    unitInfo.push(`${u.dir}:${title.slice(0, 45)} q${uq}`);
  }
  manifest.push({ course: d, dir: `src/content/courses/${d}`, questions: q, units: unitDirs.map((u) => u.num), unitTitles: unitInfo });
}

const plan = manifest.map((r) => {
  const need = Math.max(0, TARGET - r.questions);
  const add = Math.ceil(need / PER_UNIT);
  const maxU = Math.max(...r.units);
  const newUnits = [];
  for (let i = 1; i <= add; i++) newUnits.push(maxU + i);
  return { course: r.course, dir: r.dir, questions: r.questions, existingUnits: r.unitTitles, newUnits };
});

const tasks = [];
for (const c of plan) {
  const us = [...c.newUnits];
  while (us.length) {
    let n = Math.min(3, us.length);
    if (us.length - n === 1) n = 2;
    tasks.push({ course: c.course, dir: c.dir, units: us.splice(0, n) });
  }
}

fs.writeFileSync("scripts/edx-manifest.json", JSON.stringify(manifest, null, 1));
fs.writeFileSync("scripts/edx-work-plan.json", JSON.stringify(plan, null, 1));
fs.writeFileSync("scripts/edx-tasks.json", JSON.stringify(tasks, null, 1));
for (const r of plan) console.log(r.course.padEnd(32), "q" + String(r.questions).padEnd(4), "add", r.newUnits.join(",") || "-");
console.log("total new units:", tasks.reduce((s, t) => s + t.units.length, 0), "tasks:", tasks.length);
