// Reverts over-eager fixes from fix-latex-escapes.cjs:
//  - `\\n` not followed by a real LaTeX \n-command -> back to `\n` (newline)
//  - `\\$` -> `\$` (single \$ already yields a clean "$" in JS strings)
const fs = require("fs");

// real LaTeX commands starting with n (conservative whitelist)
const NLATEX = /^(eq([^a-zA-Z]|$)|e([^a-zA-Z]|$)|abla|ot)/;

for (const f of process.argv.slice(2)) {
  let src = fs.readFileSync(f, "utf8");
  let fixedN = 0, fixedD = 0;
  // \\n + letter-run : keep only if run starts with a whitelisted command
  src = src.replace(/\\\\n([a-zA-Z]*)/g, (m, run) => {
    if (run && NLATEX.test(run)) return m;
    fixedN++;
    return "\\n" + run;
  });
  // also \\n followed by non-letter -> revert (literal "\n" text was never intended)
  src = src.replace(/\\\\n(?![a-zA-Z])/g, () => { fixedN++; return "\\n"; });
  src = src.replace(/\\\\\$/g, () => { fixedD++; return "\\$"; });
  if (fixedN || fixedD) { fs.writeFileSync(f, src, "utf8"); console.log(`${f}: reverted ${fixedN} \\n, ${fixedD} \\$`); }
  else console.log(`${f}: ok`);
}
