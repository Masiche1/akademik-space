// Inserts markscheme.levels for English open questions with totalMarks>=6
// that lack levels. Bands: top band reaches totalMarks.
const fs = require("fs");

const files = process.argv.slice(2);
for (const f of files) {
  const lines = fs.readFileSync(f, "utf8").split("\n");
  let changed = 0;
  for (let i = 0; i < lines.length; i++) {
    if (!/id:\s*"/.test(lines[i])) continue;
    // question block = until next line starting a new object with id: at <= same indent
    const indent = lines[i].match(/^\s*/)[0].length;
    let j = i + 1, end = lines.length;
    for (; j < lines.length; j++) {
      const lm = lines[j].match(/^(\s*)id:\s*"/);
      if (lm && lm[1].length <= indent) { end = j; break; }
    }
    const block = lines.slice(i, end).join("\n");
    const total = parseInt((block.match(/totalMarks:\s*(\d+)/) || [])[1] || "0", 10);
    const respOpen = /response:\s*\{\s*type:\s*"open"/.test(block);
    const hasLevels = /levels:\s*\[/.test(block);
    if (!respOpen || hasLevels || total < 6) continue;
    const fi = lines.findIndex((l, k) => k > i && k < end && /finalAnswer:/.test(l));
    if (fi === -1) continue;
    const ind = lines[fi].match(/^\s*/)[0] + "  ";
    const bands = [
      `${ind}{ level: "Level 3", marks: "${total - 1}-${total}", descriptor: "Perceptive, secure and well-developed answer with precise terminology and integrated evidence." },`,
      `${ind}{ level: "Level 2", marks: "3-${total - 2}", descriptor: "Clear, relevant points with some development and supporting detail." },`,
      `${ind}{ level: "Level 1", marks: "1-2", descriptor: "Simple or partial points; limited development or relevance." },`,
    ];
    lines.splice(fi + 1, 0, `${ind}levels: [`, ...bands, `${ind}],`);
    changed++;
    i = fi + bands.length + 2;
  }
  if (changed) { fs.writeFileSync(f, lines.join("\n"), "utf8"); console.log(`${f}: added levels to ${changed} questions`); }
  else console.log(`${f}: none needed`);
}
