const fs = require("fs");
const files = process.argv.slice(2);
const words = new Set();
for (const f of files) {
  const s = fs.readFileSync(f, "utf8");
  for (const m of s.matchAll(/[A-Za-z]+/g)) words.add(m[0]);
}
// print words containing 'o' followed by h/i/a/e or double-o patterns likely corrupted, plus any with 'oo'
const sus = [...words].filter((w) => /o[hi]|oaat|oo|oe|oa|or[a-z]{2,}/i.test(w) && w.length > 1);
console.log(sus.sort().join("\n"));
console.log("COUNT", sus.length);
