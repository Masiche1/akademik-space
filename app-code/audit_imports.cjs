// Import every course index.ts; report failures.
const fs = require("fs");
const path = require("path");
const { pathToFileURL } = require("url");

const root = "src/content/courses";
const courses = fs.readdirSync(root).filter(d => {
  try { return fs.statSync(path.join(root, d)).isDirectory() && fs.existsSync(path.join(root, d, "index.ts")); } catch { return false; }
});

(async () => {
  let ok = 0; const fails = [];
  const CONC = 12;
  for (let i = 0; i < courses.length; i += CONC) {
    const batch = courses.slice(i, i + CONC);
    const res = await Promise.all(batch.map(async c => {
      try {
        await import(pathToFileURL(path.resolve(root, c, "index.ts")).href);
        return { c, ok: true };
      } catch (e) {
        return { c, ok: false, err: String(e && e.message || e).slice(0, 300) };
      }
    }));
    for (const r of res) { if (r.ok) ok++; else fails.push(r); }
    process.stdout.write(`\r${Math.min(i + CONC, courses.length)}/${courses.length}`);
  }
  console.log(`\nOK=${ok} FAIL=${fails.length}`);
  fails.forEach(f => console.log(`${f.c} :: ${f.err}`));
})();
