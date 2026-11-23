// Fixes curly-quote delimiter errors: agents sometimes close a string with
// U+201D (”) instead of ASCII ". Pattern: ” followed by optional comma/space
// then } ) ] — i.e' where a JS string must end. Legit prose ” inside strings
// is followed by more words, not structural delimiters.
const fs = require("fs");

for (const f of process.argv.slice(2)) {
  let src = fs.readFileSync(f, "utf8");
  const re = /”(?=\s*,?\s*[}\)\]])/g;
  const n = (src.match(re) || []).length;
  if (n) { src = src.replace(re, '"'); fs.writeFileSync(f, src, "utf8"); }
  console.log(`${f}: ${n} curly closers fixed`);
}
